Feature: User searches a product in Migueltestingsite.com

  Scenario Outline: As a user, I can search for a product using the searchbar in migueltestingsite.com

    Given I am on the home page
    When I enter <keywords> into the searchbar
    Then I should see the product <product>

    Examples:
      | keywords  | product |

      | doll | Just-woke-up Doll |