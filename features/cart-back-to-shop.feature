Feature: Cart redirect for Migueltestingsite.com

  Scenario Outline: Use back to shop button in Cart page

    Given I am on the cart page
    When I click on the back to shop button
    Then I should see the shop header