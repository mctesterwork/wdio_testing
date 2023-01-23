Feature: User login for Migueltestingsite.com

  Scenario Outline: Try to log into the migueltestingsite.com page with invalid credentials

    Given I am on the login page
    When I login with <username> and <password>
    Then I should see an error message saying <message>

    Examples:
      | username  | password             | message                                                |

      | John      | N1n2n3n4.            | The username John is not registered on this site.      |