# Exercism Instructions


### A typical TDD workflow on Exercism:

1. Run the test file and pick one test that's failing.
2. Write some code to fix the test you picked.
3. Re-run the tests to confirm the test is now passing.
4. Repeat from step 1.
5. Submit your solution (`exercism submit /path/to/file`)


## Setup

Get the next problem with:

    exercism submit hello-world.js


## Making the Test Suite Pass

Execute the tests with:

    jasmine-node .

In many test suites all but the first test have been skipped.

Once you get a test passing, you can unskip the next one by
changing `xit` to `it`.


When you are done, submit your solution to exercism:

    exercism submit hello-world.js


## Submitting Incomplete Problems
It's possible to submit an incomplete solution so you can see how others have completed the exercise.
