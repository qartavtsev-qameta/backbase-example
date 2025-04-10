Feature: User Authentication

  Scenario: Successful login with valid credentials
    Given the user is on the login page
    When the user enters a valid username and password
    When the user clicks the login button
    Then the user should be redirected to the dashboard
    Then a session token should be created

  Scenario: Login fails with an incorrect password
    Given the user is on the login page
    When the user enters a valid username and an incorrect password
    When the user clicks the login button
    Then the user should see an error message saying "Invalid credentials"
    Then the user should remain on the login page

  Scenario: Login fails with a non-existent username
    Given the user is on the login page
    When the user enters a non-existent username and any password
    When the user clicks the login button
    Then the user should see an error message saying "Invalid credentials"

  Scenario: Login fails with empty username and password
    Given the user is on the login page
    When the user leaves the username and password fields blank
    When the user clicks the login button
    Then the user should see validation messages for both fields

  Scenario: Account is locked after multiple failed login attempts
    Given the user enters an incorrect password 5 times
    When the user attempts to log in again
    Then the user should see a message saying "Your account has been locked"

  Scenario: Successful logout
    Given the user is logged in
    When the user clicks the logout button
    Then the user should be redirected to the login page
    Then the session token should be invalidated

  Scenario: Unauthenticated user attempts to access a protected page
    Given the user is not logged in
    When the user tries to access the dashboard page
    Then the user should be redirected to the login page

  Scenario: Password field should mask input
    Given the user is on the login page
    When the user types a password
    Then the password field should display dots or asterisks instead of the actual characters

  Scenario: Session expires after a period of inactivity
    Given the user is logged in
    Given the user is inactive for 30 minutes
    When the user tries to interact with the application
    Then the user should be redirected to the login page with a message "Session expired"

  Scenario: Prompt user for 2FA after successful credential validation
    Given the user has enabled two-factor authentication
    When the user logs in with valid username and password
    Then the user should be prompted to enter a 2FA code
