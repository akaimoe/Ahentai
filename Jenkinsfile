pipeline {
    agent any

    environment {
        JELLYFIN_IMAGE = 'jellyfin/jellyfin'
        JELLYFIN_TAG = 'latest'
        HOST_IP = '121.40.99.162'
        HOST_SSH_PORT = '6207'
        HOST_SSH_CREDENTIALS = 'jiangmingyi'
        JELLYFIN_PORT = '8096'
        MEDIA_PATH = '/mydata/jellyfin/media'
        GITHUB_REPO = 'https://gitee.com/akai-moe/Ahentai.git'
        DOCKER_REPO = 'akaimoe/ahentai'
        BUILD_NUMBER = '1.0.1'
        ANSIBLE_HOST = '127.0.0.1' // Ansible主机地址
        ANSIBLE_USER = '' // Ansible登录用户
        ANSIBLE_PLAYBOOK = '/home/altair/item/jenbins_fin/Ahentai/deploy.yml' // Ansible剧本
        ACR_USERNAME = 'arashs'
        ACR_URL = 'registry.cn-hangzhou.aliyuncs.com'
        ACR_PASSWORD = 'o*oG^mT$o5rJvQfAt5'
    }

    stages {
        stage('git clone') {
            steps {
                script {
                    git branch: 'main', credentialsId: 'git', url: "${GITHUB_REPO}"
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    def dockerImage = docker.build("${DOCKER_REPO}:${BUILD_NUMBER}")
                }
            }
        }

        stage('Push to Docker Registry') {
            steps {
                script {
                    // sh "docker login --username=arashs --password=o*oG^mT$o5rJvQfAt5 registry.cn-hangzhou.aliyuncs.com"
                    docker.withRegistry('https://registry.cn-hangzhou.aliyuncs.com/akaimoe/ahentai}', 'aliyun') {  // 远程仓库 凭证
                        def dockerImage = docker.build("${DOCKER_REPO}:${BUILD_NUMBER}")
                        dockerImage.push()
                    }
                }
            }
        }
        stage('Deploy with Ansible') {
            steps {
                script {
                    sh "ansible-playbook ${ANSIBLE_PLAYBOOK} -i /home/altair/.ansible/hosts"
                }
            }
        }
    }

    

    post {
        success {
            echo 'Build and push successful!'
        }
        failure {
            echo 'Build or push failed!'
        }
    }
}
