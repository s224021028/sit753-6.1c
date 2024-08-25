pipeline 
{
    agent any

    stages 
    {
        stage("Build") 
        {
            steps 
            {
                script 
                {
                    echo "Building the code"
                    //sh "mvn clean package" Ex: Maven
                }
            }
        }
        stage("Unit and Integration Tests") 
        {
            steps 
            {
                script 
                {
                    echo "Running unit and integration tests"
                    //sh "mvn test" Ex: Maven
                }
            }
            post 
            {
                success 
                {
                    emailext(to: "s224021028@deakin.edu.au",
                    subject: "6.1C Pipeline Status",
                    body: "Tests successful, see attached log for details",
                    attachLog: true,
                    attachmentsPattern: "**/*.log")
                }
                failure 
                {
                    emailext(to: "s224021028@deakin.edu.au",
                    subject: "6.1C Pipeline Status",
                    body: "Tests failed, see attached log for details",
                    attachLog: true)
                }
            }
        }
        stage("Code Analysis") 
        {
            steps 
            {
                script 
                {
                    echo "Analyzing the code"
                    //sh "mvn sonar:sonar" Ex: Maven for SonarQube
                }
            }
        }
        stage("Security Scan") 
        {
            steps 
            {
                script 
                {
                    echo "Performing security scan"
                    //sh "mvn dependency-check:check" Ex: Maven for OWASP dependency check
                }
            }
            post 
            {
                success 
                {
                    emailext(to: "s224021028@deakin.edu.au",
                    subject: "6.1C Pipeline Status",
                    body: "Security Scan successful, see attached log for details",
                    attachLog: true)
                }
                failure 
                {
                    emailext(to: "s224021028@deakin.edu.au",
                    subject: "6.1C Pipeline Status",
                    body: "Security failed, see attached log for details",
                    attachLog: true)
                }
            }
        }
        stage("Deploy to Staging") 
        {
            steps 
            {
                script 
                {
                    echo "Deploying to staging"
                    //sh "aws s3 sync build/libs/app.jar s3://staging-bucket" E: AWS s3
                }
            }
        }
        stage("Integration Tests on Staging") 
        {
            steps 
            {
                script 
                {
                    echo "Running integration tests on staging"
                    //sh "mvn verify -Pstaging" ex: Maven
                }
            }
        }
        stage("Deploy to Production") 
        {
            steps 
            {
                script 
                {
                    echo "Deploying to production"
                    //sh "aws s3 sync build/libs/app.jar s3://prod-bucket" Ex: AWS s3
                }
            }
        }
    }
}
