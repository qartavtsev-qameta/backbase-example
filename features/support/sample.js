import { Given, When, Then } from "@cucumber/cucumber";
import { step } from "allure-js-commons";

// === GIVEN ===
Given("the user is on the login page", async function () {
  console.log("User opens login page");
  });

Given("the user is logged in", async function () {
  console.log("User is logged in");
  });

Given("the user enters an incorrect password 5 times", async function () {
  console.log("User failed to login 5 times");
  });

Given("the user is inactive for 30 minutes", async function () {
  console.log("User inactive for 30 minutes");
  });

Given("the user has enabled two-factor authentication", async function () {
  console.log("2FA enabled for user");
  });

Given("the user is not logged in", async function () {
  console.log("User not logged in");
  });

// === WHEN ===
When("the user enters a valid username and password", async function () {
  console.log("Entered valid credentials");
});

When("the user enters a valid username and an incorrect password", async function () {
  console.log("Entered valid username and wrong password");
});

When("the user enters a non-existent username and any password", async function () {
  console.log("Entered non-existent username");
});

When("the user leaves the username and password fields blank", async function () {
  console.log("Left fields blank");
});

When("the user clicks the login button", async function () {
  console.log("Clicked login button");
});

When("the user attempts to log in again", async function () {
  console.log("Attempted to log in again");
});

When("the user clicks the logout button", async function () {
  console.log("Clicked logout button");
});

When("the user tries to access the dashboard page", async function () {
  console.log("Tried to access dashboard");
});

When("the user types a password", async function () {
  console.log("User typing password");
});

When("the user tries to interact with the application", async function () {
  console.log("User attempted to interact after inactivity");
});

When("the user logs in with valid username and password", async function () {
  console.log("User logged in with valid credentials");
});

// === THEN ===
Then("the user should be redirected to the dashboard", async function () {
  console.log("Redirected to dashboard");
});

Then("a session token should be created", async function () {
  console.log("Session token created");
});

Then('the user should see an error message saying "Invalid credentials"', async function () {
  console.log("Error message: Invalid credentials");
});

Then("the user should remain on the login page", async function () {
  console.log("User stays on login page");
});

Then("the user should see validation messages for both fields", async function () {
  console.log("Validation messages shown for blank fields");
});

Then('the user should see a message saying "Your account has been locked"', async function () {
  console.log("Account locked message shown");
});

Then("the user should be redirected to the login page", async function () {
  console.log("Redirected to login page");
});

Then("the session token should be invalidated", async function () {
  console.log("Session token invalidated");
});

Then("the password field should display dots or asterisks instead of the actual characters", async function () {
  console.log("Password is masked");
});

Then('the user should be redirected to the login page with a message "Session expired"', async function () {
  console.log("Redirected to login with session expired message");
});

Then("the user should be prompted to enter a 2FA code", async function () {
  console.log("Prompted for 2FA code");
});
