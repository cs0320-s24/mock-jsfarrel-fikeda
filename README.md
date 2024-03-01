> **GETTING STARTED:** You should likely start with the `/mock` folder from your solution code for the mock gearup.

# Project Details

Team Members: John Farrell (jsfarrel), Fuka Ikeda (fikeda)

Time estimated: 12 hours

Welcome to our Mock project! This project features the front-end functionality of a program that allows real estate appraisers to process and explore data from an existing CSV file.

GitHub repo: https://github.com/cs0320-s24/mock-jsfarrel-fikeda

# Design Choices

Login system

- Currently, login capabilities are only mocked. Click the login buttin to sign in and sign out button to sign out.

REPL Systems

- Users can enter commands in the input and see the output in the box above.
- When a user submits a command, it is picked up by our submission hander. The command is first processed into a name and args, then is passed to a command handler. The command handler returns a `Result` object, which is then used to create a response object that is saved to the REPL history.
- Developers can specificy their own commands by adding to the `CommandMap` specified in `src/commands/handler/CommandMap.ts`. There is a `commandMap` map with keys of command names and values of `REPLFunction` objects. The `REPLFunction` takes in `args` and returns a `Result` object.
- The `Result` object simply defines a `value` of `String | String[][]` and `success` of `boolean`. The `success` value lets us have more awareness of what we should display to the REPL user.

# Errors/Bugs

- Our mock for CSV commands are not super robust. We would like to save lengthy functionality for the real implementation, althought the existing mocks do pass our end-to-end testing.

# Tests

Our testing includes tests for login, as well as CSV commands. They are broken down into two directories:

- `e2e` - end-to-end tests
  - `test-clear.spec.ts` - tests the clear function of the logout
  - `test-login.spec.ts` - tests the project's login system
  - `test-mode.spec.ts` - tests the project's mode command
  - `test-load.spec.ts` - tests the CSV load command
  - `test-view.spec.ts` - tests the CSV view command
  - `test-search.spec.ts` - tests the CSV search command
  - `test-command-interaction.spec.ts` - tests the interaction of different commands
- `unit` - unit tests

# How to

To run the project:

```
npm i
npm run start
```

Open the localhost in your browser, then click sign in. After signing in you can enter commands in the input and see them appear about in the output. Commands that currently exist:

- `echo` - echos input
- `mode {"verbose" | "brief"}` - By default, mode is brief, meaning you won't see commands you input in the output. Simply typing `mode` toggles the mode setting. You can also specify `verbose` or `brief` to set the mode.
- `load {csv_file}` - loads CSV file (**mocked**)
- `view` - views CSV file (**mocked**)
- `search {index} {value}` - searches CSV file (**mocked**)

Logout will clear the loaded CSV. 

# Collaboration
