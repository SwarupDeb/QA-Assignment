# QA-Assignment

This repository contains automated test scripts created using Cypress and JavaScript for performing various test cases on the WINGIFY website. The tests are designed to verify the functionality and behavior of different features.

## Contents

- [Introduction](#introduction)
- [Test Scripts](#test-scripts)
- [Usage](#usage)
- [Contributing](#contributing)

## Introduction

The purpose of this project is to automate testing for the website using Cypress and JavaScript. The tests are focused on validating different scenarios and ensuring that the website functions as expected. Two main test scripts are included: `login-test.cy` and `transaction-test.cy`.

## Test Scripts

### `login-test.cy`[https://github.com/SwarupDeb/QA-Assignment/blob/main/login-test.cy.js).

This script is used to perform various test cases on the login functionality of the website available at [https://sakshingp.github.io/assignment/login.html](https://sakshingp.github.io/assignment/login.html). The following test cases are covered:

- Logs in with valid credentials
- Displays error message for empty username
- Displays error message for empty password
- Displays error message for both fields empty
- Redirects to social media links
- Does not remember user login when 'Remember Me' checkbox is unchecked

### `transaction-test.cy`[https://github.com/SwarupDeb/QA-Assignment/blob/main/transaction-test.cy.js]

This script is used to perform various test cases on the transaction table functionality of the website available at [https://sakshingp.github.io/assignment/home.html](https://sakshingp.github.io/assignment/home.html). The following test case is covered:

- Visits the website and verifies sorted values in the transaction table

## Usage

To use the test scripts in this repository, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/QA-Assignment.git
   ```

2. Install the required dependencies using npm:

   ```bash
   npm install
   ```

3. Open Cypress test runner:

   ```bash
   npx cypress open
   ```

4. In the Cypress test runner, select the desired test script (`login-test.cy` or `transaction-test.cy`) to run.

## Contributing

Contributions to this repository are welcome. If you find any issues or have suggestions for improvements, please create a new issue or submit a pull request.
