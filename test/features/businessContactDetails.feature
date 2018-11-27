Feature: LocalSeach Search for Businesses
    In order to find the contact details of a business
    As a user, 
    I want to search for <business> on the LocalSearch website 
    so I choose from the results 
    and get the contact details of my preference
    
    Scenario: LocalSearch Search for Business and Get the Business details
        Given I go to the LocalSearch homepage
        When I search for "Landscaper" on the search field
        And I get a list of results
        And I select the first result
        Then I expect to see the business "contact" details
        And I expect to see the business "services" details