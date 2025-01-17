var linkify = function(u) {
    "use strict";

    function D(u) { this.j = {}, this.jr = [], this.jd = null, this.t = u }
    D.prototype = {
        accepts: function() { return !!this.t },
        tt: function(u, D) {
            if (D && D.j) return this.j[u] = D, D;
            var t = D,
                a = this.j[u];
            if (a) return t && (a.t = t), a;
            a = e();
            var r = i(this, u);
            return r ? (Object.assign(a.j, r.j), a.jr.append(r.jr), a.jr = r.jd, a.t = t || r.t) : a.t = t, this.j[u] = a, a
        }
    };
    var e = function() { return new D },
        t = function(u) { return new D(u) },
        a = function(u, D, e) { u.j[D] || (u.j[D] = e) },
        r = function(u, D, e) { u.jr.push([D, e]) },
        i = function(u, D) {
            var e = u.j[D];
            if (e) return e;
            for (var t = 0; t < u.jr.length; t++) {
                var a = u.jr[t][0],
                    r = u.jr[t][1];
                if (a.test(D)) return r
            }
            return u.jd
        },
        n = function(u, D, e) { for (var t = 0; t < D.length; t++) a(u, D[t], e) },
        o = function(u, D) {
            for (var e = 0; e < D.length; e++) {
                var t = D[e][0],
                    r = D[e][1];
                a(u, t, r)
            }
        },
        s = function(u, D, e, t) {
            for (var r, i = 0, n = D.length; i < n && (r = u.j[D[i]]);) u = r, i++;
            if (i >= n) return [];
            for (; i < n - 1;) r = t(), a(u, D[i], r), u = r, i++;
            a(u, D[n - 1], e)
        },
        l = "DOMAIN",
        c = "LOCALHOST",
        F = "TLD",
        E = "NUM",
        A = "PROTOCOL",
        C = "MAILTO",
        g = "WS",
        h = "NL",
        f = "OPENBRACE",
        m = "OPENBRACKET",
        d = "OPENANGLEBRACKET",
        p = "OPENPAREN",
        B = "CLOSEBRACE",
        b = "CLOSEBRACKET",
        v = "CLOSEANGLEBRACKET",
        y = "CLOSEPAREN",
        k = "AMPERSAND",
        w = "APOSTROPHE",
        j = "ASTERISK",
        x = "AT",
        O = "BACKSLASH",
        z = "BACKTICK",
        L = "CARET",
        N = "COLON",
        P = "COMMA",
        S = "DOLLAR",
        T = "DOT",
        R = "EQUALS",
        H = "EXCLAMATION",
        M = "HYPHEN",
        I = "PERCENT",
        K = "PIPE",
        U = "PLUS",
        q = "POUND",
        _ = "QUERY",
        Q = "QUOTE",
        Y = "SEMI",
        G = "SLASH",
        W = "TILDE",
        X = "UNDERSCORE",
        Z = "SYM",
        $ = Object.freeze({ __proto__: null, DOMAIN: l, LOCALHOST: c, TLD: F, NUM: E, PROTOCOL: A, MAILTO: C, WS: g, NL: h, OPENBRACE: f, OPENBRACKET: m, OPENANGLEBRACKET: d, OPENPAREN: p, CLOSEBRACE: B, CLOSEBRACKET: b, CLOSEANGLEBRACKET: v, CLOSEPAREN: y, AMPERSAND: k, APOSTROPHE: w, ASTERISK: j, AT: x, BACKSLASH: O, BACKTICK: z, CARET: L, COLON: N, COMMA: P, DOLLAR: S, DOT: T, EQUALS: R, EXCLAMATION: H, HYPHEN: M, PERCENT: I, PIPE: K, PLUS: U, POUND: q, QUERY: _, QUOTE: Q, SEMI: Y, SLASH: G, TILDE: W, UNDERSCORE: X, SYM: Z }),
        J = "aaa aarp abarth abb abbott abbvie abc able abogado abudhabi ac academy accenture accountant accountants aco actor ad adac ads adult ae aeg aero aetna af afamilycompany afl africa ag agakhan agency ai aig airbus airforce airtel akdn al alfaromeo alibaba alipay allfinanz allstate ally alsace alstom am amazon americanexpress americanfamily amex amfam amica amsterdam analytics android anquan anz ao aol apartments app apple aq aquarelle ar arab aramco archi army arpa art arte as asda asia associates at athleta attorney au auction audi audible audio auspost author auto autos avianca aw aws ax axa az azure ba baby baidu banamex bananarepublic band bank bar barcelona barclaycard barclays barefoot bargains baseball basketball bauhaus bayern bb bbc bbt bbva bcg bcn bd be beats beauty beer bentley berlin best bestbuy bet bf bg bh bharti bi bible bid bike bing bingo bio biz bj black blackfriday blockbuster blog bloomberg blue bm bms bmw bn bnpparibas bo boats boehringer bofa bom bond boo book booking bosch bostik boston bot boutique box br bradesco bridgestone broadway broker brother brussels bs bt budapest bugatti build builders business buy buzz bv bw by bz bzh ca cab cafe cal call calvinklein cam camera camp cancerresearch canon capetown capital capitalone car caravan cards care career careers cars casa case cash casino cat catering catholic cba cbn cbre cbs cc cd center ceo cern cf cfa cfd cg ch chanel channel charity chase chat cheap chintai christmas chrome church ci cipriani circle cisco citadel citi citic city cityeats ck cl claims cleaning click clinic clinique clothing cloud club clubmed cm cn co coach codes coffee college cologne com comcast commbank community company compare computer comsec condos construction consulting contact contractors cooking cookingchannel cool coop corsica country coupon coupons courses cpa cr credit creditcard creditunion cricket crown crs cruise cruises csc cu cuisinella cv cw cx cy cymru cyou cz dabur dad dance data date dating datsun day dclk dds de deal dealer deals degree delivery dell deloitte delta democrat dental dentist desi design dev dhl diamonds diet digital direct directory discount discover dish diy dj dk dm dnp do docs doctor dog domains dot download drive dtv dubai duck dunlop dupont durban dvag dvr dz earth eat ec eco edeka edu education ee eg email emerck energy engineer engineering enterprises epson equipment er ericsson erni es esq estate et etisalat eu eurovision eus events exchange expert exposed express extraspace fage fail fairwinds faith family fan fans farm farmers fashion fast fedex feedback ferrari ferrero fi fiat fidelity fido film final finance financial fire firestone firmdale fish fishing fit fitness fj fk flickr flights flir florist flowers fly fm fo foo food foodnetwork football ford forex forsale forum foundation fox fr free fresenius frl frogans frontdoor frontier ftr fujitsu fujixerox fun fund furniture futbol fyi ga gal gallery gallo gallup game games gap garden gay gb gbiz gd gdn ge gea gent genting george gf gg ggee gh gi gift gifts gives giving gl glade glass gle global globo gm gmail gmbh gmo gmx gn godaddy gold goldpoint golf goo goodyear goog google gop got gov gp gq gr grainger graphics gratis green gripe grocery group gs gt gu guardian gucci guge guide guitars guru gw gy hair hamburg hangout haus hbo hdfc hdfcbank health healthcare help helsinki here hermes hgtv hiphop hisamitsu hitachi hiv hk hkt hm hn hockey holdings holiday homedepot homegoods homes homesense honda horse hospital host hosting hot hoteles hotels hotmail house how hr hsbc ht hu hughes hyatt hyundai ibm icbc ice icu id ie ieee ifm ikano il im imamat imdb immo immobilien in inc industries infiniti info ing ink institute insurance insure int international intuit investments io ipiranga iq ir irish is ismaili ist istanbul it itau itv iveco jaguar java jcb je jeep jetzt jewelry jio jll jm jmp jnj jo jobs joburg jot joy jp jpmorgan jprs juegos juniper kaufen kddi ke kerryhotels kerrylogistics kerryproperties kfh kg kh ki kia kim kinder kindle kitchen kiwi km kn koeln komatsu kosher kp kpmg kpn kr krd kred kuokgroup kw ky kyoto kz la lacaixa lamborghini lamer lancaster lancia land landrover lanxess lasalle lat latino latrobe law lawyer lb lc lds lease leclerc lefrak legal lego lexus lgbt li lidl life lifeinsurance lifestyle lighting like lilly limited limo lincoln linde link lipsy live living lixil lk llc llp loan loans locker locus loft lol london lotte lotto love lpl lplfinancial lr ls lt ltd ltda lu lundbeck luxe luxury lv ly ma macys madrid maif maison makeup man management mango map market marketing markets marriott marshalls maserati mattel mba mc mckinsey md me med media meet melbourne meme memorial men menu merckmsd mg mh miami microsoft mil mini mint mit mitsubishi mk ml mlb mls mm mma mn mo mobi mobile moda moe moi mom monash money monster mormon mortgage moscow moto motorcycles mov movie mp mq mr ms msd mt mtn mtr mu museum mutual mv mw mx my mz na nab nagoya name nationwide natura navy nba nc ne nec net netbank netflix network neustar new news next nextdirect nexus nf nfl ng ngo nhk ni nico nike nikon ninja nissan nissay nl no nokia northwesternmutual norton now nowruz nowtv np nr nra nrw ntt nu nyc nz obi observer off office okinawa olayan olayangroup oldnavy ollo om omega one ong onl online onyourside ooo open oracle orange org organic origins osaka otsuka ott ovh pa page panasonic paris pars partners parts party passagens pay pccw pe pet pf pfizer pg ph pharmacy phd philips phone photo photography photos physio pics pictet pictures pid pin ping pink pioneer pizza pk pl place play playstation plumbing plus pm pn pnc pohl poker politie porn post pr pramerica praxi press prime pro prod productions prof progressive promo properties property protection pru prudential ps pt pub pw pwc py qa qpon quebec quest qvc racing radio raid re read realestate realtor realty recipes red redstone redumbrella rehab reise reisen reit reliance ren rent rentals repair report republican rest restaurant review reviews rexroth rich richardli ricoh ril rio rip rmit ro rocher rocks rodeo rogers room rs rsvp ru rugby ruhr run rw rwe ryukyu sa saarland safe safety sakura sale salon samsclub samsung sandvik sandvikcoromant sanofi sap sarl sas save saxo sb sbi sbs sc sca scb schaeffler schmidt scholarships school schule schwarz science scjohnson scot sd se search seat secure security seek select sener services ses seven sew sex sexy sfr sg sh shangrila sharp shaw shell shia shiksha shoes shop shopping shouji show showtime si silk sina singles site sj sk ski skin sky skype sl sling sm smart smile sn sncf so soccer social softbank software sohu solar solutions song sony soy spa space sport spot spreadbetting sr srl ss st stada staples star statebank statefarm stc stcgroup stockholm storage store stream studio study style su sucks supplies supply support surf surgery suzuki sv swatch swiftcover swiss sx sy sydney systems sz tab taipei talk taobao target tatamotors tatar tattoo tax taxi tc tci td tdk team tech technology tel temasek tennis teva tf tg th thd theater theatre tiaa tickets tienda tiffany tips tires tirol tj tjmaxx tjx tk tkmaxx tl tm tmall tn to today tokyo tools top toray toshiba total tours town toyota toys tr trade trading training travel travelchannel travelers travelersinsurance trust trv tt tube tui tunes tushu tv tvs tw tz ua ubank ubs ug uk unicom university uno uol ups us uy uz va vacations vana vanguard vc ve vegas ventures verisign versicherung vet vg vi viajes video vig viking villas vin vip virgin visa vision viva vivo vlaanderen vn vodka volkswagen volvo vote voting voto voyage vu vuelos wales walmart walter wang wanggou watch watches weather weatherchannel webcam weber website wed wedding weibo weir wf whoswho wien wiki williamhill win windows wine winners wme wolterskluwer woodside work works world wow ws wtc wtf xbox xerox xfinity xihuan xin xxx xyz yachts yahoo yamaxun yandex ye yodobashi yoga yokohama you youtube yt yun za zappos zara zero zip zm zone zuerich zw vermögensberater-ctb vermögensberatung-pwb ελ ευ бг бел дети ею католик ком қаз мкд мон москва онлайн орг рус рф сайт срб укр გე հայ ישראל קום ابوظبي اتصالات ارامكو الاردن البحرين الجزائر السعودية العليان المغرب امارات ایران بارت بازار بھارت بيتك پاکستان ڀارت تونس سودان سورية شبكة عراق عرب عمان فلسطين قطر كاثوليك كوم مصر مليسيا موريتانيا موقع همراه कॉम नेट भारत भारतम् भारोत संगठन বাংলা ভারত ভাৰত ਭਾਰਤ ભારત ଭାରତ இந்தியா இலங்கை சிங்கப்பூர் భారత్ ಭಾರತ ഭാരതം ලංකා คอม ไทย ລາວ 닷넷 닷컴 삼성 한국 アマゾン グーグル クラウド コム ストア セール ファッション ポイント みんな 世界 中信 中国 中國 中文网 亚马逊 企业 佛山 信息 健康 八卦 公司 公益 台湾 台灣 商城 商店 商标 嘉里 嘉里大酒店 在线 大众汽车 大拿 天主教 娱乐 家電 广东 微博 慈善 我爱你 手机 招聘 政务 政府 新加坡 新闻 时尚 書籍 机构 淡马锡 游戏 澳門 点看 移动 组织机构 网址 网店 网站 网络 联通 诺基亚 谷歌 购物 通販 集团 電訊盈科 飞利浦 食品 餐厅 香格里拉 香港".split(" "),
        V = /(?:[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])/,
        uu = /(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5-\uDED7\uDEDD-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDDFF\uDE70-\uDE74\uDE78-\uDE7C\uDE80-\uDE86\uDE90-\uDEAC\uDEB0-\uDEBA\uDEC0-\uDEC5\uDED0-\uDED9\uDEE0-\uDEE7\uDEF0-\uDEF6])/,
        Du = /\uFE0F/,
        eu = /\d/,
        tu = /\s/;

    function au() {
        var u = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            D = e(),
            i = t(E),
            n = t(l),
            $ = e(),
            au = t(g),
            ru = [
                [eu, n],
                [V, n],
                [uu, n],
                [Du, n]
            ],
            iu = function() { var u = t(l); return u.j = { "-": $ }, u.jr = [].concat(ru), u },
            nu = function(u) { var D = iu(); return D.t = u, D };
        o(D, [
            ["'", t(w)],
            ["{", t(f)],
            ["[", t(m)],
            ["<", t(d)],
            ["(", t(p)],
            ["}", t(B)],
            ["]", t(b)],
            [">", t(v)],
            [")", t(y)],
            ["&", t(k)],
            ["*", t(j)],
            ["@", t(x)],
            ["`", t(z)],
            ["^", t(L)],
            [":", t(N)],
            [",", t(P)],
            ["$", t(S)],
            [".", t(T)],
            ["=", t(R)],
            ["!", t(H)],
            ["-", t(M)],
            ["%", t(I)],
            ["|", t(K)],
            ["+", t(U)],
            ["#", t(q)],
            ["?", t(_)],
            ['"', t(Q)],
            ["/", t(G)],
            [";", t(Y)],
            ["~", t(W)],
            ["_", t(X)],
            ["\\", t(O)]
        ]), a(D, "\n", t(h)), r(D, tu, au), a(au, "\n", e()), r(au, tu, au);
        for (var ou = 0; ou < J.length; ou++) s(D, J[ou], nu(F), iu);
        var su = iu(),
            lu = iu(),
            cu = iu(),
            Fu = iu();
        s(D, "file", su, iu), s(D, "ftp", lu, iu), s(D, "http", cu, iu), s(D, "mailto", Fu, iu);
        var Eu = iu(),
            Au = t(A),
            Cu = t(C);
        a(lu, "s", Eu), a(lu, ":", Au), a(cu, "s", Eu), a(cu, ":", Au), a(su, ":", Au), a(Eu, ":", Au), a(Fu, ":", Cu);
        for (var gu = iu(), hu = 0; hu < u.length; hu++) s(D, u[hu], gu, iu);
        return a(gu, ":", Au), s(D, "localhost", nu(c), iu), r(D, eu, i), r(D, V, n), r(D, uu, n), r(D, Du, n), r(i, eu, i), r(i, V, n), r(i, uu, n), r(i, Du, n), a(i, "-", $), a(n, "-", $), a($, "-", $), r(n, eu, n), r(n, V, n), r(n, uu, n), r(n, Du, n), r($, eu, n), r($, V, n), r($, uu, n), r($, Du, n), D.jd = t(Z), D
    }

    function ru(u) { return ru = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(u) { return typeof u } : function(u) { return u && "function" == typeof Symbol && u.constructor === Symbol && u !== Symbol.prototype ? "symbol" : typeof u }, ru(u) }
    var iu = { defaultProtocol: "http", events: null, format: ou, formatHref: ou, nl2br: !1, tagName: "a", target: null, rel: null, validate: !0, truncate: 0, className: null, attributes: null, ignoreTags: [] };

    function nu(u) { u = u || {}, this.defaultProtocol = "defaultProtocol" in u ? u.defaultProtocol : iu.defaultProtocol, this.events = "events" in u ? u.events : iu.events, this.format = "format" in u ? u.format : iu.format, this.formatHref = "formatHref" in u ? u.formatHref : iu.formatHref, this.nl2br = "nl2br" in u ? u.nl2br : iu.nl2br, this.tagName = "tagName" in u ? u.tagName : iu.tagName, this.target = "target" in u ? u.target : iu.target, this.rel = "rel" in u ? u.rel : iu.rel, this.validate = "validate" in u ? u.validate : iu.validate, this.truncate = "truncate" in u ? u.truncate : iu.truncate, this.className = "className" in u ? u.className : iu.className, this.attributes = u.attributes || iu.attributes, this.ignoreTags = []; for (var D = ("ignoreTags" in u ? u.ignoreTags : iu.ignoreTags), e = 0; e < D.length; e++) this.ignoreTags.push(D[e].toUpperCase()) }

    function ou(u) { return u }
    nu.prototype = {
        resolve: function(u) { var D = u.toHref(this.defaultProtocol); return { formatted: this.get("format", u.toString(), u), formattedHref: this.get("formatHref", D, u), tagName: this.get("tagName", D, u), className: this.get("className", D, u), target: this.get("target", D, u), rel: this.get("rel", D, u), events: this.getObject("events", D, u), attributes: this.getObject("attributes", D, u), truncate: this.get("truncate", D, u) } },
        check: function(u) { return this.get("validate", u.toString(), u) },
        get: function(u, D, e) {
            var t, a = this[u];
            if (!a) return a;
            switch (ru(a)) {
                case "function":
                    return a(D, e.t);
                case "object":
                    return "function" == typeof(t = e.t in a ? a[e.t] : iu[u]) ? t(D, e.t) : t
            }
            return a
        },
        getObject: function(u, D, e) { var t = this[u]; return "function" == typeof t ? t(D, e.t) : t }
    };
    var su = Object.freeze({ __proto__: null, defaults: iu, Options: nu });

    function lu() {}

    function cu(u, D) {
        function e(D, e) { this.t = u, this.v = D, this.tk = e }
        return function(u, D) {
            var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                t = Object.create(u.prototype);
            for (var a in e) t[a] = e[a];
            t.constructor = D, D.prototype = t
        }(lu, e, D), e
    }
    lu.prototype = { t: "token", isLink: !1, toString: function() { return this.v }, toHref: function() { return this.toString() }, startIndex: function() { return this.tk[0].s }, endIndex: function() { return this.tk[this.tk.length - 1].e }, toObject: function() { var u = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : iu.defaultProtocol; return { type: this.t, value: this.v, isLink: this.isLink, href: this.toHref(u), start: this.startIndex(), end: this.endIndex() } } };
    var Fu = cu("email", { isLink: !0 }),
        Eu = cu("email", { isLink: !0, toHref: function() { return "mailto:" + this.toString() } }),
        Au = cu("text"),
        Cu = cu("nl"),
        gu = cu("url", { isLink: !0, toHref: function() { for (var u = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : iu.defaultProtocol, D = this.tk, e = !1, t = !1, a = [], r = 0; D[r].t === A;) e = !0, a.push(D[r].v), r++; for (; D[r].t === G;) t = !0, a.push(D[r].v), r++; for (; r < D.length; r++) a.push(D[r].v); return a = a.join(""), e || t || (a = "".concat(u, "://").concat(a)), a }, hasProtocol: function() { return this.tk[0].t === A } }),
        hu = Object.freeze({ __proto__: null, MultiToken: lu, Base: lu, createTokenClass: cu, MailtoEmail: Fu, Email: Eu, Text: Au, Nl: Cu, Url: gu });

    function fu() {
        var u = e(),
            D = e(),
            r = e(),
            i = e(),
            o = e(),
            s = e(),
            g = e(),
            $ = t(gu),
            J = e(),
            V = t(gu),
            uu = t(gu),
            Du = e(),
            eu = e(),
            tu = e(),
            au = e(),
            ru = e(),
            iu = t(gu),
            nu = t(gu),
            ou = t(gu),
            su = t(gu),
            lu = e(),
            cu = e(),
            Au = e(),
            hu = e(),
            fu = e(),
            mu = e(),
            du = t(Eu),
            pu = e(),
            Bu = t(Eu),
            bu = t(Fu),
            vu = e(),
            yu = e(),
            ku = e(),
            wu = e(),
            ju = t(Cu);
        a(u, h, ju), a(u, A, D), a(u, C, r), a(D, G, i), a(i, G, o), a(u, F, s), a(u, l, s), a(u, c, $), a(u, E, s), a(o, F, uu), a(o, l, uu), a(o, E, uu), a(o, c, uu), a(s, T, g), a(fu, T, mu), a(g, F, $), a(g, l, s), a(g, E, s), a(g, c, s), a(mu, F, du), a(mu, l, fu), a(mu, E, fu), a(mu, c, fu), a($, T, g), a(du, T, mu), a($, N, J), a($, G, uu), a(J, E, V), a(V, G, uu), a(du, N, pu), a(pu, E, Bu);
        var xu = [k, j, x, O, z, L, S, l, R, M, c, E, I, K, U, q, A, G, Z, W, F, X],
            Ou = [w, v, B, b, y, N, P, T, H, d, f, m, p, _, Q, Y];
        a(uu, f, eu), a(uu, m, tu), a(uu, d, au), a(uu, p, ru), a(Du, f, eu), a(Du, m, tu), a(Du, d, au), a(Du, p, ru), a(eu, B, uu), a(tu, b, uu), a(au, v, uu), a(ru, y, uu), a(iu, B, uu), a(nu, b, uu), a(ou, v, uu), a(su, y, uu), a(lu, B, uu), a(cu, b, uu), a(Au, v, uu), a(hu, y, uu), n(eu, xu, iu), n(tu, xu, nu), n(au, xu, ou), n(ru, xu, su), n(eu, Ou, lu), n(tu, Ou, cu), n(au, Ou, Au), n(ru, Ou, hu), n(iu, xu, iu), n(nu, xu, nu), n(ou, xu, ou), n(su, xu, su), n(iu, Ou, iu), n(nu, Ou, nu), n(ou, Ou, ou), n(su, Ou, su), n(lu, xu, iu), n(cu, xu, nu), n(Au, xu, ou), n(hu, xu, su), n(lu, Ou, lu), n(cu, Ou, cu), n(Au, Ou, Au), n(hu, Ou, hu), n(uu, xu, uu), n(Du, xu, uu), n(uu, Ou, Du), n(Du, Ou, Du), a(r, F, bu), a(r, l, bu), a(r, E, bu), a(r, c, bu), n(bu, xu, bu), n(bu, Ou, vu), n(vu, xu, bu), n(vu, Ou, vu);
        var zu = [k, w, j, O, z, L, B, S, l, R, M, E, f, I, K, U, q, _, G, Z, W, F, X];
        return n(s, zu, yu), a(s, x, ku), n($, zu, yu), a($, x, ku), n(g, zu, yu), n(yu, zu, yu), a(yu, x, ku), a(yu, T, wu), n(wu, zu, yu), a(ku, F, fu), a(ku, l, fu), a(ku, E, fu), a(ku, c, du), u
    }

    function mu(u, D, e) {
        var t = e[0].s,
            a = e[e.length - 1].e;
        return new u(D.substr(t, a - t), e)
    }
    var du = "undefined" != typeof console && console && console.warn || function() {},
        pu = { scanner: null, parser: null, pluginQueue: [], customProtocols: [], initialized: !1 };

    function Bu() {
        pu.scanner = { start: au(pu.customProtocols), tokens: $ }, pu.parser = { start: fu(), tokens: hu };
        for (var u = { createTokenClass: cu }, D = 0; D < pu.pluginQueue.length; D++) pu.pluginQueue[D][1]({ scanner: pu.scanner, parser: pu.parser, utils: u });
        pu.initialized = !0
    }

    function bu(u) {
        return pu.initialized || Bu(),
            function(u, D, e) {
                for (var t = e.length, a = 0, r = [], n = []; a < t;) {
                    for (var o = u, s = null, l = null, c = 0, F = null, E = -1; a < t && !(s = i(o, e[a].t));) n.push(e[a++]);
                    for (; a < t && (l = s || i(o, e[a].t));) s = null, (o = l).accepts() ? (E = 0, F = o) : E >= 0 && E++, a++, c++;
                    if (E < 0)
                        for (var A = a - c; A < a; A++) n.push(e[A]);
                    else {
                        n.length > 0 && (r.push(mu(Au, D, n)), n = []), a -= E, c -= E;
                        var C = F.t,
                            g = e.slice(a - c, a);
                        r.push(mu(C, D, g))
                    }
                }
                return n.length > 0 && r.push(mu(Au, D, n)), r
            }(pu.parser.start, u, function(u, D) {
                for (var e = function(u) {
                        for (var D = [], e = u.length, t = 0; t < e;) {
                            var a = u.charCodeAt(t),
                                r = void 0,
                                i = a < 55296 || a > 56319 || t + 1 === e || (r = u.charCodeAt(t + 1)) < 56320 || r > 57343 ? u[t] : u.slice(t, t + 2);
                            D.push(i), t += i.length
                        }
                        return D
                    }(D.replace(/[A-Z]/g, (function(u) { return u.toLowerCase() }))), t = e.length, a = [], r = 0, n = 0; n < t;) {
                    for (var o = u, s = null, l = 0, c = null, F = -1, E = -1; n < t && (s = i(o, e[n]));)(o = s).accepts() ? (F = 0, E = 0, c = o) : F >= 0 && (F += e[n].length, E++), l += e[n].length, r += e[n].length, n++;
                    r -= F, n -= E, l -= F, a.push({ t: c.t, v: D.substr(r - l, l), s: r - l, e: r })
                }
                return a
            }(pu.scanner.start, u))
    }
    return u.Options = nu, u.find = function(u) { for (var D = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, e = bu(u), t = [], a = 0; a < e.length; a++) { var r = e[a];!r.isLink || D && r.t !== D || t.push(r.toObject()) } return t }, u.init = Bu, u.options = su, u.registerCustomProtocol = function(u) {
        if (pu.initialized && du('linkifyjs: already initialized - will not register custom protocol "'.concat(u, '" until you manually call linkify.init(). To avoid this warning, please register all custom protocols before invoking linkify the first time.')), !/^[a-z-]+$/.test(u)) throw Error("linkifyjs: protocols containing characters other than a-z or - (hyphen) are not supported");
        pu.customProtocols.push(u)
    }, u.registerPlugin = function(u, D) {
        for (var e = 0; e < pu.pluginQueue.length; e++)
            if (u === pu.pluginQueue[e][0]) return du('linkifyjs: plugin "'.concat(u, '" already registered - will be overwritten')), void(pu.pluginQueue[e] = [u, D]);
        pu.pluginQueue.push([u, D]), pu.initialized && du('linkifyjs: already initialized - will not register plugin "'.concat(u, '" until you manually call linkify.init(). To avoid this warning, please register all plugins before invoking linkify the first time.'))
    }, u.reset = function() { pu.scanner = null, pu.parser = null, pu.pluginQueue = [], pu.customProtocols = [], pu.initialized = !1 }, u.test = function(u) {
        var D = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            e = bu(u);
        return 1 === e.length && e[0].isLink && (!D || e[0].t === D)
    }, u.tokenize = bu, Object.defineProperty(u, "__esModule", { value: !0 }), u
}({});



var linkifyHtml = function(t) {
    "use strict";

    function e(t) {
        if (t && t.__esModule) return t;
        var e = Object.create(null);
        return t && Object.keys(t).forEach((function(i) {
            if ("default" !== i) {
                var n = Object.getOwnPropertyDescriptor(t, i);
                Object.defineProperty(e, i, n.get ? n : { enumerable: !0, get: function() { return t[i] } })
            }
        })), e.default = t, Object.freeze(e)
    }
    var i = e(t),
        n = { nbsp: " " },
        s = /^#[xX]([A-Fa-f0-9]+)$/,
        o = /^#([0-9]+)$/,
        a = /^([A-Za-z0-9]+)$/,
        r = function() {
            function t(t) { this.named = t }
            return t.prototype.parse = function(t) { if (t) { var e = t.match(s); return e ? "&#x" + e[1] + ";" : (e = t.match(o)) ? "&#" + e[1] + ";" : (e = t.match(a)) ? this.named[e[1]] || "&" + e[1] + ";" : void 0 } }, t
        }(),
        h = /[\t\n\f ]/,
        u = /[A-Za-z]/,
        c = /\r\n?/g;

    function p(t) { return h.test(t) }

    function d(t) { return u.test(t) }
    var f = function() {
            function t(t, e, i) {
                void 0 === i && (i = "precompile"), this.delegate = t, this.entityParser = e, this.mode = i, this.state = "beforeData", this.line = -1, this.column = -1, this.input = "", this.index = -1, this.tagNameBuffer = "", this.states = {
                    beforeData: function() {
                        var t = this.peek();
                        if ("<" !== t || this.isIgnoredEndTag()) {
                            if ("precompile" === this.mode && "\n" === t) { var e = this.tagNameBuffer.toLowerCase(); "pre" !== e && "textarea" !== e || this.consume() }
                            this.transitionTo("data"), this.delegate.beginData()
                        } else this.transitionTo("tagOpen"), this.markTagStart(), this.consume()
                    },
                    data: function() {
                        var t = this.peek(),
                            e = this.tagNameBuffer;
                        "<" !== t || this.isIgnoredEndTag() ? "&" === t && "script" !== e && "style" !== e ? (this.consume(), this.delegate.appendToData(this.consumeCharRef() || "&")) : (this.consume(), this.delegate.appendToData(t)) : (this.delegate.finishData(), this.transitionTo("tagOpen"), this.markTagStart(), this.consume())
                    },
                    tagOpen: function() { var t = this.consume(); "!" === t ? this.transitionTo("markupDeclarationOpen") : "/" === t ? this.transitionTo("endTagOpen") : ("@" === t || ":" === t || d(t)) && (this.transitionTo("tagName"), this.tagNameBuffer = "", this.delegate.beginStartTag(), this.appendToTagName(t)) },
                    markupDeclarationOpen: function() { var t = this.consume(); "-" === t && "-" === this.peek() ? (this.consume(), this.transitionTo("commentStart"), this.delegate.beginComment()) : "DOCTYPE" === t.toUpperCase() + this.input.substring(this.index, this.index + 6).toUpperCase() && (this.consume(), this.consume(), this.consume(), this.consume(), this.consume(), this.consume(), this.transitionTo("doctype"), this.delegate.beginDoctype && this.delegate.beginDoctype()) },
                    doctype: function() { p(this.consume()) && this.transitionTo("beforeDoctypeName") },
                    beforeDoctypeName: function() {
                        var t = this.consume();
                        p(t) || (this.transitionTo("doctypeName"), this.delegate.appendToDoctypeName && this.delegate.appendToDoctypeName(t.toLowerCase()))
                    },
                    doctypeName: function() {
                        var t = this.consume();
                        p(t) ? this.transitionTo("afterDoctypeName") : ">" === t ? (this.delegate.endDoctype && this.delegate.endDoctype(), this.transitionTo("beforeData")) : this.delegate.appendToDoctypeName && this.delegate.appendToDoctypeName(t.toLowerCase())
                    },
                    afterDoctypeName: function() {
                        var t = this.consume();
                        if (!p(t))
                            if (">" === t) this.delegate.endDoctype && this.delegate.endDoctype(), this.transitionTo("beforeData");
                            else {
                                var e = t.toUpperCase() + this.input.substring(this.index, this.index + 5).toUpperCase(),
                                    i = "PUBLIC" === e.toUpperCase(),
                                    n = "SYSTEM" === e.toUpperCase();
                                (i || n) && (this.consume(), this.consume(), this.consume(), this.consume(), this.consume(), this.consume()), i ? this.transitionTo("afterDoctypePublicKeyword") : n && this.transitionTo("afterDoctypeSystemKeyword")
                            }
                    },
                    afterDoctypePublicKeyword: function() {
                        var t = this.peek();
                        p(t) ? (this.transitionTo("beforeDoctypePublicIdentifier"), this.consume()) : '"' === t ? (this.transitionTo("doctypePublicIdentifierDoubleQuoted"), this.consume()) : "'" === t ? (this.transitionTo("doctypePublicIdentifierSingleQuoted"), this.consume()) : ">" === t && (this.consume(), this.delegate.endDoctype && this.delegate.endDoctype(), this.transitionTo("beforeData"))
                    },
                    doctypePublicIdentifierDoubleQuoted: function() { var t = this.consume(); '"' === t ? this.transitionTo("afterDoctypePublicIdentifier") : ">" === t ? (this.delegate.endDoctype && this.delegate.endDoctype(), this.transitionTo("beforeData")) : this.delegate.appendToDoctypePublicIdentifier && this.delegate.appendToDoctypePublicIdentifier(t) },
                    doctypePublicIdentifierSingleQuoted: function() { var t = this.consume(); "'" === t ? this.transitionTo("afterDoctypePublicIdentifier") : ">" === t ? (this.delegate.endDoctype && this.delegate.endDoctype(), this.transitionTo("beforeData")) : this.delegate.appendToDoctypePublicIdentifier && this.delegate.appendToDoctypePublicIdentifier(t) },
                    afterDoctypePublicIdentifier: function() {
                        var t = this.consume();
                        p(t) ? this.transitionTo("betweenDoctypePublicAndSystemIdentifiers") : ">" === t ? (this.delegate.endDoctype && this.delegate.endDoctype(), this.transitionTo("beforeData")) : '"' === t ? this.transitionTo("doctypeSystemIdentifierDoubleQuoted") : "'" === t && this.transitionTo("doctypeSystemIdentifierSingleQuoted")
                    },
                    betweenDoctypePublicAndSystemIdentifiers: function() {
                        var t = this.consume();
                        p(t) || (">" === t ? (this.delegate.endDoctype && this.delegate.endDoctype(), this.transitionTo("beforeData")) : '"' === t ? this.transitionTo("doctypeSystemIdentifierDoubleQuoted") : "'" === t && this.transitionTo("doctypeSystemIdentifierSingleQuoted"))
                    },
                    doctypeSystemIdentifierDoubleQuoted: function() { var t = this.consume(); '"' === t ? this.transitionTo("afterDoctypeSystemIdentifier") : ">" === t ? (this.delegate.endDoctype && this.delegate.endDoctype(), this.transitionTo("beforeData")) : this.delegate.appendToDoctypeSystemIdentifier && this.delegate.appendToDoctypeSystemIdentifier(t) },
                    doctypeSystemIdentifierSingleQuoted: function() { var t = this.consume(); "'" === t ? this.transitionTo("afterDoctypeSystemIdentifier") : ">" === t ? (this.delegate.endDoctype && this.delegate.endDoctype(), this.transitionTo("beforeData")) : this.delegate.appendToDoctypeSystemIdentifier && this.delegate.appendToDoctypeSystemIdentifier(t) },
                    afterDoctypeSystemIdentifier: function() {
                        var t = this.consume();
                        p(t) || ">" === t && (this.delegate.endDoctype && this.delegate.endDoctype(), this.transitionTo("beforeData"))
                    },
                    commentStart: function() { var t = this.consume(); "-" === t ? this.transitionTo("commentStartDash") : ">" === t ? (this.delegate.finishComment(), this.transitionTo("beforeData")) : (this.delegate.appendToCommentData(t), this.transitionTo("comment")) },
                    commentStartDash: function() { var t = this.consume(); "-" === t ? this.transitionTo("commentEnd") : ">" === t ? (this.delegate.finishComment(), this.transitionTo("beforeData")) : (this.delegate.appendToCommentData("-"), this.transitionTo("comment")) },
                    comment: function() { var t = this.consume(); "-" === t ? this.transitionTo("commentEndDash") : this.delegate.appendToCommentData(t) },
                    commentEndDash: function() { var t = this.consume(); "-" === t ? this.transitionTo("commentEnd") : (this.delegate.appendToCommentData("-" + t), this.transitionTo("comment")) },
                    commentEnd: function() { var t = this.consume(); ">" === t ? (this.delegate.finishComment(), this.transitionTo("beforeData")) : (this.delegate.appendToCommentData("--" + t), this.transitionTo("comment")) },
                    tagName: function() {
                        var t = this.consume();
                        p(t) ? this.transitionTo("beforeAttributeName") : "/" === t ? this.transitionTo("selfClosingStartTag") : ">" === t ? (this.delegate.finishTag(), this.transitionTo("beforeData")) : this.appendToTagName(t)
                    },
                    endTagName: function() {
                        var t = this.consume();
                        p(t) ? (this.transitionTo("beforeAttributeName"), this.tagNameBuffer = "") : "/" === t ? (this.transitionTo("selfClosingStartTag"), this.tagNameBuffer = "") : ">" === t ? (this.delegate.finishTag(), this.transitionTo("beforeData"), this.tagNameBuffer = "") : this.appendToTagName(t)
                    },
                    beforeAttributeName: function() {
                        var t = this.peek();
                        p(t) ? this.consume() : "/" === t ? (this.transitionTo("selfClosingStartTag"), this.consume()) : ">" === t ? (this.consume(), this.delegate.finishTag(), this.transitionTo("beforeData")) : "=" === t ? (this.delegate.reportSyntaxError("attribute name cannot start with equals sign"), this.transitionTo("attributeName"), this.delegate.beginAttribute(), this.consume(), this.delegate.appendToAttributeName(t)) : (this.transitionTo("attributeName"), this.delegate.beginAttribute())
                    },
                    attributeName: function() {
                        var t = this.peek();
                        p(t) ? (this.transitionTo("afterAttributeName"), this.consume()) : "/" === t ? (this.delegate.beginAttributeValue(!1), this.delegate.finishAttributeValue(), this.consume(), this.transitionTo("selfClosingStartTag")) : "=" === t ? (this.transitionTo("beforeAttributeValue"), this.consume()) : ">" === t ? (this.delegate.beginAttributeValue(!1), this.delegate.finishAttributeValue(), this.consume(), this.delegate.finishTag(), this.transitionTo("beforeData")) : '"' === t || "'" === t || "<" === t ? (this.delegate.reportSyntaxError(t + " is not a valid character within attribute names"), this.consume(), this.delegate.appendToAttributeName(t)) : (this.consume(), this.delegate.appendToAttributeName(t))
                    },
                    afterAttributeName: function() {
                        var t = this.peek();
                        p(t) ? this.consume() : "/" === t ? (this.delegate.beginAttributeValue(!1), this.delegate.finishAttributeValue(), this.consume(), this.transitionTo("selfClosingStartTag")) : "=" === t ? (this.consume(), this.transitionTo("beforeAttributeValue")) : ">" === t ? (this.delegate.beginAttributeValue(!1), this.delegate.finishAttributeValue(), this.consume(), this.delegate.finishTag(), this.transitionTo("beforeData")) : (this.delegate.beginAttributeValue(!1), this.delegate.finishAttributeValue(), this.transitionTo("attributeName"), this.delegate.beginAttribute(), this.consume(), this.delegate.appendToAttributeName(t))
                    },
                    beforeAttributeValue: function() {
                        var t = this.peek();
                        p(t) ? this.consume() : '"' === t ? (this.transitionTo("attributeValueDoubleQuoted"), this.delegate.beginAttributeValue(!0), this.consume()) : "'" === t ? (this.transitionTo("attributeValueSingleQuoted"), this.delegate.beginAttributeValue(!0), this.consume()) : ">" === t ? (this.delegate.beginAttributeValue(!1), this.delegate.finishAttributeValue(), this.consume(), this.delegate.finishTag(), this.transitionTo("beforeData")) : (this.transitionTo("attributeValueUnquoted"), this.delegate.beginAttributeValue(!1), this.consume(), this.delegate.appendToAttributeValue(t))
                    },
                    attributeValueDoubleQuoted: function() { var t = this.consume(); '"' === t ? (this.delegate.finishAttributeValue(), this.transitionTo("afterAttributeValueQuoted")) : "&" === t ? this.delegate.appendToAttributeValue(this.consumeCharRef() || "&") : this.delegate.appendToAttributeValue(t) },
                    attributeValueSingleQuoted: function() { var t = this.consume(); "'" === t ? (this.delegate.finishAttributeValue(), this.transitionTo("afterAttributeValueQuoted")) : "&" === t ? this.delegate.appendToAttributeValue(this.consumeCharRef() || "&") : this.delegate.appendToAttributeValue(t) },
                    attributeValueUnquoted: function() {
                        var t = this.peek();
                        p(t) ? (this.delegate.finishAttributeValue(), this.consume(), this.transitionTo("beforeAttributeName")) : "/" === t ? (this.delegate.finishAttributeValue(), this.consume(), this.transitionTo("selfClosingStartTag")) : "&" === t ? (this.consume(), this.delegate.appendToAttributeValue(this.consumeCharRef() || "&")) : ">" === t ? (this.delegate.finishAttributeValue(), this.consume(), this.delegate.finishTag(), this.transitionTo("beforeData")) : (this.consume(), this.delegate.appendToAttributeValue(t))
                    },
                    afterAttributeValueQuoted: function() {
                        var t = this.peek();
                        p(t) ? (this.consume(), this.transitionTo("beforeAttributeName")) : "/" === t ? (this.consume(), this.transitionTo("selfClosingStartTag")) : ">" === t ? (this.consume(), this.delegate.finishTag(), this.transitionTo("beforeData")) : this.transitionTo("beforeAttributeName")
                    },
                    selfClosingStartTag: function() { ">" === this.peek() ? (this.consume(), this.delegate.markTagAsSelfClosing(), this.delegate.finishTag(), this.transitionTo("beforeData")) : this.transitionTo("beforeAttributeName") },
                    endTagOpen: function() {
                        var t = this.consume();
                        ("@" === t || ":" === t || d(t)) && (this.transitionTo("endTagName"), this.tagNameBuffer = "", this.delegate.beginEndTag(), this.appendToTagName(t))
                    }
                }, this.reset()
            }
            return t.prototype.reset = function() { this.transitionTo("beforeData"), this.input = "", this.tagNameBuffer = "", this.index = 0, this.line = 1, this.column = 0, this.delegate.reset() }, t.prototype.transitionTo = function(t) { this.state = t }, t.prototype.tokenize = function(t) { this.reset(), this.tokenizePart(t), this.tokenizeEOF() }, t.prototype.tokenizePart = function(t) {
                for (this.input += function(t) { return t.replace(c, "\n") }(t); this.index < this.input.length;) {
                    var e = this.states[this.state];
                    if (void 0 === e) throw new Error("unhandled state " + this.state);
                    e.call(this)
                }
            }, t.prototype.tokenizeEOF = function() { this.flushData() }, t.prototype.flushData = function() { "data" === this.state && (this.delegate.finishData(), this.transitionTo("beforeData")) }, t.prototype.peek = function() { return this.input.charAt(this.index) }, t.prototype.consume = function() { var t = this.peek(); return this.index++, "\n" === t ? (this.line++, this.column = 0) : this.column++, t }, t.prototype.consumeCharRef = function() {
                var t = this.input.indexOf(";", this.index);
                if (-1 !== t) {
                    var e = this.input.slice(this.index, t),
                        i = this.entityParser.parse(e);
                    if (i) { for (var n = e.length; n;) this.consume(), n--; return this.consume(), i }
                }
            }, t.prototype.markTagStart = function() { this.delegate.tagOpen() }, t.prototype.appendToTagName = function(t) { this.tagNameBuffer += t, this.delegate.appendToTagName(t) }, t.prototype.isIgnoredEndTag = function() { var t = this.tagNameBuffer; return "title" === t && "</title>" !== this.input.substring(this.index, this.index + 8) || "style" === t && "</style>" !== this.input.substring(this.index, this.index + 8) || "script" === t && "<\/script>" !== this.input.substring(this.index, this.index + 9) }, t
        }(),
        l = function() {
            function t(t, e) { void 0 === e && (e = {}), this.options = e, this.token = null, this.startLine = 1, this.startColumn = 0, this.tokens = [], this.tokenizer = new f(this, t, e.mode), this._currentAttribute = void 0 }
            return t.prototype.tokenize = function(t) { return this.tokens = [], this.tokenizer.tokenize(t), this.tokens }, t.prototype.tokenizePart = function(t) { return this.tokens = [], this.tokenizer.tokenizePart(t), this.tokens }, t.prototype.tokenizeEOF = function() { return this.tokens = [], this.tokenizer.tokenizeEOF(), this.tokens[0] }, t.prototype.reset = function() { this.token = null, this.startLine = 1, this.startColumn = 0 }, t.prototype.current = function() {
                var t = this.token;
                if (null === t) throw new Error("token was unexpectedly null");
                if (0 === arguments.length) return t;
                for (var e = 0; e < arguments.length; e++)
                    if (t.type === arguments[e]) return t;
                throw new Error("token type was unexpectedly " + t.type)
            }, t.prototype.push = function(t) { this.token = t, this.tokens.push(t) }, t.prototype.currentAttribute = function() { return this._currentAttribute }, t.prototype.addLocInfo = function() { this.options.loc && (this.current().loc = { start: { line: this.startLine, column: this.startColumn }, end: { line: this.tokenizer.line, column: this.tokenizer.column } }), this.startLine = this.tokenizer.line, this.startColumn = this.tokenizer.column }, t.prototype.beginDoctype = function() { this.push({ type: "Doctype", name: "" }) }, t.prototype.appendToDoctypeName = function(t) { this.current("Doctype").name += t }, t.prototype.appendToDoctypePublicIdentifier = function(t) {
                var e = this.current("Doctype");
                void 0 === e.publicIdentifier ? e.publicIdentifier = t : e.publicIdentifier += t
            }, t.prototype.appendToDoctypeSystemIdentifier = function(t) {
                var e = this.current("Doctype");
                void 0 === e.systemIdentifier ? e.systemIdentifier = t : e.systemIdentifier += t
            }, t.prototype.endDoctype = function() { this.addLocInfo() }, t.prototype.beginData = function() { this.push({ type: "Chars", chars: "" }) }, t.prototype.appendToData = function(t) { this.current("Chars").chars += t }, t.prototype.finishData = function() { this.addLocInfo() }, t.prototype.beginComment = function() { this.push({ type: "Comment", chars: "" }) }, t.prototype.appendToCommentData = function(t) { this.current("Comment").chars += t }, t.prototype.finishComment = function() { this.addLocInfo() }, t.prototype.tagOpen = function() {}, t.prototype.beginStartTag = function() { this.push({ type: "StartTag", tagName: "", attributes: [], selfClosing: !1 }) }, t.prototype.beginEndTag = function() { this.push({ type: "EndTag", tagName: "" }) }, t.prototype.finishTag = function() { this.addLocInfo() }, t.prototype.markTagAsSelfClosing = function() { this.current("StartTag").selfClosing = !0 }, t.prototype.appendToTagName = function(t) { this.current("StartTag", "EndTag").tagName += t }, t.prototype.beginAttribute = function() { this._currentAttribute = ["", "", !1] }, t.prototype.appendToAttributeName = function(t) { this.currentAttribute()[0] += t }, t.prototype.beginAttributeValue = function(t) { this.currentAttribute()[2] = t }, t.prototype.appendToAttributeValue = function(t) { this.currentAttribute()[1] += t }, t.prototype.finishAttributeValue = function() { this.current("StartTag").attributes.push(this._currentAttribute) }, t.prototype.reportSyntaxError = function(t) { this.current().syntaxError = t }, t
        }();

    function m(t, e) { return new l(new r(n), e).tokenize(t) }
    var g = i.Options,
        b = "StartTag",
        T = "EndTag",
        y = "Chars",
        D = "Comment",
        v = "Doctype";

    function A(t, e) {
        for (var n = i.tokenize(t), s = [], o = 0; o < n.length; o++) {
            var a = n[o];
            if ("nl" === a.t && e.nl2br) s.push({ type: b, tagName: "br", attributes: [], selfClosing: !0 });
            else if (a.isLink && e.check(a)) {
                var r = e.resolve(a),
                    h = r.formatted,
                    u = r.formattedHref,
                    c = r.tagName,
                    p = r.className,
                    d = r.target,
                    f = r.rel,
                    l = r.attributes,
                    m = r.truncate,
                    g = [
                        ["href", u]
                    ];
                for (var D in p && g.push(["class", p]), d && g.push(["target", d]), f && g.push(["rel", f]), m && h.length > m && (h = h.substring(0, m) + "…"), l) g.push([D, l[D]]);
                s.push({ type: b, tagName: c, attributes: g, selfClosing: !1 }), s.push({ type: y, chars: h }), s.push({ type: T, tagName: c })
            } else s.push({ type: y, chars: a.toString() })
        }
        return s
    }

    function k(t, e, i, n) {
        for (var s = 1; i < e.length && s > 0;) {
            var o = e[i];
            o.type === b && o.tagName.toUpperCase() === t ? s++ : o.type === T && o.tagName.toUpperCase() === t && s--, n.push(o), i++
        }
        return n
    }

    function N(t) {
        for (var e = [], i = 0; i < t.length; i++) {
            var n = t[i][0],
                s = t[i][1];
            e.push("".concat(n, '="').concat(s.replace(/"/g, "&quot;"), '"'))
        }
        return e
    }
    return function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            i = m(t),
            n = [],
            s = [];
        e = new g(e);
        for (var o = 0; o < i.length; o++) {
            var a = i[o];
            if (a.type !== b)
                if (a.type === y) {
                    var r = A(a.chars, e);
                    n.push.apply(n, r)
                } else n.push(a);
            else {
                n.push(a);
                var h = a.tagName.toUpperCase(),
                    u = "A" === h || e.ignoreTags.indexOf(h) >= 0;
                if (!u) continue;
                var c = n.length;
                k(h, i, ++o, n), o += n.length - c - 1
            }
        }
        for (var p = 0; p < n.length; p++) {
            var d = n[p];
            switch (d.type) {
                case b:
                    var f = "<" + d.tagName;
                    if (d.attributes.length > 0) {
                        var l = N(d.attributes);
                        f += " " + l.join(" ")
                    }
                    f += ">", s.push(f);
                    break;
                case T:
                    s.push("</".concat(d.tagName, ">"));
                    break;
                case y:
                    s.push(d.chars);
                    break;
                case D:
                    s.push("\x3c!--".concat(d.chars, "--\x3e"));
                    break;
                case v:
                    var C = "<!DOCTYPE ".concat(d.name);
                    d.publicIdentifier && (C += ' PUBLIC "'.concat(d.publicIdentifier, '"')), d.systemIdentifier && (C += ' "'.concat(d.systemIdentifier, '"')), C += ">", s.push(C)
            }
        }
        return s.join("")
    }
}(linkify);