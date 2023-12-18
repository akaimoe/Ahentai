var TimeFlatpickr;
$(document).ready(function () {
    var date = new Date();
    TimeFlatpickr = $("#start-time").flatpickr({
        dateFormat: "Y-m-d",
        maxDate: date.getDay() + "-" + date.getMonth() + "-" + (date.getFullYear() - 18)
    });


    TimeFlatpickr.setDate(date.getDay() + "-" + date.getMonth() + "-" + (date.getFullYear() - 18))
})
function autoShowTip(element){
var idName=$(element).attr("id")
    console.log(idName);
    $("."+idName+"Tip").attr("style","")
}
//m 男 /f nv /bot bot
function checkFlag(name,username,password,passwordRepeat,question1,question2,question3,answer1,answer2,answer3,birthday) {

    var checkFlag = false;
    if (name == "" || name.length < 2) {
        toastUtils("請檢查用戶昵稱長度,最少2位", "關閉", 3000)
    } else if (username == "") {
        toastUtils("用戶名不得爲空", "關閉", 3000)
    } else if (password == "" || passwordRepeat == "") {
        toastUtils("密碼不得爲空", "關閉", 3000)
    } else if (password.length < 8 || passwordRepeat.length < 8) {
        toastUtils("密碼長度最低8位", "關閉", 3000)
    } else if (password != passwordRepeat) {
        toastUtils("兩次輸入密碼不一致，請重新填寫。", "關閉", 3000)
    } else if (question1 == "" || question2 == "" || question3 == "" || answer1 == "" || answer2 == "" || answer3 == "") {
        toastUtils("存在未填寫的密保問題，請重新檢查。", "關閉", 3000)
    } else if (birthday == "") {
        toastUtils("請重新設置生日", "關閉", 3000)
    } else {
        checkFlag = true
    }
    return checkFlag;


}
function startReg() {
    let name = $("#nickName").val();
    let username = $("#userName").val();//json to  email   修復分類邏輯
    let password = $("#paassword").val();
    let passwordRepeat = $("#passwordRepeat").val();
    let question1 = $("#question1").val();
    let question2 = $("#question2").val();
    let question3 = $("#question3").val();
    let answer1 = $("#answer1").val();
    let answer2 = $("#answer2").val();
    let answer3 = $("#answer3").val();
    let birthday = $('#start-time').val();
    let gender=  $("#gender").val()
    let getcheckFlag = checkFlag(name,username,password,passwordRepeat,question1,question2,question3,answer1,answer2,answer3,birthday);
    if (!getcheckFlag)
        return;
    var postData = JSON.stringify({
        answer1: answer1,
        answer2: answer2,
        answer3: answer3,
        birthday: birthday,
        email:username,
        gender:gender,
        name: name,
        password:password,
        question1:question1,
        question2:question2,
        question3:question3
    })
console.log(postData);
    sendRegData(postData,username,password)
}


function sendRegData(dataStr,username,password) {

    var setTime = getTimeOnece();
    var pathname = "auth/register";
    var mothod = 'POST';
    //ast11231aa
    $.ajax({
        type: mothod,
        contentType: 'application/json; charset=UTF-8',
        crossBrowser: true,
        data: dataStr,
        url: ProxyBaseUrl + pathname,

        beforeSend: function (request) {
            // 如果后台没有跨域处理，这个自定义

            $.each(postHeader(setTime, pathname, mothod), function (idx, obj) {
                request.setRequestHeader(obj.name, obj.value);
            });

        },
        success: function (data) {
            try {

                if (data.code == 200)
                    console.log("伺服器鏈接成功");
                if (data.message == 'success'

                ) {
                  toastUtils('注冊完成，正在前往登錄',"關閉",3000);
                  jumpUtils("plogin",{ uname: username,upass:password})

                    //  $(".modalContentSet").text("伺服器鏈接成功,但未登錄成功。" + data.responseText);
                }

            } catch (err) {

               // setErrorTips(data, err);
            }
           // myModalUtils(modalClassId);

        },
        complete: function () {

            // 放开按钮
            //  $("#submit").removeAttr("disabled");
        },
        error: function (data) {
//console.error(data);
            checkErrorCode(data, modalClassId);

            myModalUtils(modalClassId);
        }
    })

}
