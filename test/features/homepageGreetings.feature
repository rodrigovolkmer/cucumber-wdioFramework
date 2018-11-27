Feature: LocalSeach Homepage Greetings
    As LocalSearch website engine, 
    I want to welcome the user on the homepage
    so the user feels connected to the webpage 

    Scenario: LocalSearch homepage Greeting
        Given I go to the LocalSearch homepage
        When Its morning|afternoon|evening
        Then I expect to see a welcome message
        