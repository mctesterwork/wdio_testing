Feature: User login for Migueltestingsite.com

  Scenario Outline: As a user, I can log into the migueltestingsite.com page

    Given I am on the login page
    When I login with <username> and <password>
    Then I should see the logout link

    Examples:
      | username  | password             |

      | kailax360 | Kailax.Corp360       |