## Cypress Assertions & Custom Commands – DemoQA Automation Project

## Overview

This project is an end-to-end automation suite built using **Cypress**, focusing on:

* Strong usage of **Assertions**
* Clean structure using **Cypress Hooks**
* Reusable **Custom Commands**
* XPath-based locators
* Real-time flows for New User Registration & Login
* Handling registration alerts
* Manual CAPTCHA pause

It automates the **New User Registration** and **Login** flow of the **DemoQA Book Store Application**.

---

## Test Scenarios Covered

### 1️⃣ Validate New User Button

* Check visibility, state, and button text using assertions.

### 2️⃣ Click New User Button

* Navigate to the registration form using a custom command.

### 3️⃣ Validate Registration Form Fields

Assert the presence and attributes of:

* First Name
* Last Name
* UserName
* Password
* Register button

### 4️⃣ Register a New User

Includes:

* Filling all fields using a custom command
* Handling manual CAPTCHA
* Capturing and verifying the success alert
* URL validations after registration

### 5️⃣ Validate Back to Login Button

* Verify visibility, enabled state, and attributes.

### 6️⃣ Click Back to Login

* Navigate back using a custom command.

### 7️⃣ Validate Login Form Fields

Assertions for:

* Username
* Password
* Login button

### 8️⃣ Login Using Custom Command

Asserts:

* Successful login
* Profile URL
* Username display on profile
* Page title
* Presence of Logout button

---

## Tech Stack

| Component     | Description                          |
| ------------- | ------------------------------------ |
| **Framework** | Cypress                              |
| **Language**  | JavaScript (ES6)                     |
| **Selectors** | XPath (via cypress-xpath)            |
| **Browser**   | Chrome (default)                     |
| **Approach**  | Hooks + Custom Commands + Assertions |

---

## Step-by-Step Setup

### 1️⃣ Create Project Folder

```
mkdir Cypress_Assertions_Project
cd Cypress_Assertions_Project
```

### 2️⃣ Initialize Node Project

```
npm init -y
```

### 3️⃣ Install Cypress & Dependencies

```
npm install cypress cypress-xpath --save-dev
```

### 4️⃣ Open Cypress

```
npx cypress open
```

This generates the full Cypress folder structure.

---

## Folder Structure

```
Cypress_Assertions_Project/
│
├── cypress/
│   ├── e2e/
│   │   └── demoQA.cy.js                   # All 8 test cases
│   ├── support/
│   │   ├── commands.js                    # newUser(), registerUser(), backtoLoginUser(), loginUser()
│   │   └── e2e.js
│
├── cypress.config.js
├── package.json
└── README.md
```

---

## Custom Commands Implemented

### ✔ newUser()

Clicks the **New User** button to navigate to registration.

### ✔ registerUser(firstName, lastName, username, password)

Fills the registration form and includes:

* Field clearing
* Typing
* Waiting
* CAPTCHA pause
* Clicking **Register**

### ✔ backtoLoginUser()

Clicks **Back to Login** button.

### ✔ loginUser(username, password)

Fills the login form and logs in.

---

## Manual CAPTCHA Handling

Cypress cannot automate CAPTCHAs, so the following is used:

```
cy.pause()
```

This allows you to:

1. Complete CAPTCHA manually
2. Resume test execution in Test Runner

---

## Running the Tests

### Run in Cypress GUI

```
npx cypress open
```

Select the test file:

```
demoQA.cy.js
```

---

### Run in Headless Mode

```
npx cypress run
```

---

## **Key Features**

* Extensive use of **`.should()`** and **`.and()`** assertions
* Strong coverage of both positive and navigation flows
* Custom commands for reducing code repetition
* Hooks (`before`, `beforeEach`, `afterEach`, `after`) for clean structure
* XPath-selectors for stable element targeting
* Full validation of both Registration & Login workflows
* Manual CAPTCHA support

---
