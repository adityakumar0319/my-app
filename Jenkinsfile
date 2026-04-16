pipeline {
    agent any

    stages {

        stage('Clone Repo') {
            steps {
                git branch: 'main', url: 'https://github.com/adityakumar0319/my-app.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t adityakumar0319/my-app .'
            }
        }

        stage('Push to DockerHub') {
            steps {
                sh 'docker push adityakumar0319/my-app'
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh 'kubectl apply -f deployment.yaml'
                sh 'kubectl apply -f service.yaml'
            }
        }
    }
}