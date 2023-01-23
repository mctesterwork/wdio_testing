Feature: User uses sorting in the Shop Migueltestingsite.com

  Scenario Outline: I sort from high to low in the Shop migueltestingsite.com

    Given I am on the shop page
    When I select the option:<text>
    And I click on the first shop item
    Then I should see the text:<message>

    Examples:
      | text                   | message |
      | Sort by price: high to low | Very Ugly Doll |