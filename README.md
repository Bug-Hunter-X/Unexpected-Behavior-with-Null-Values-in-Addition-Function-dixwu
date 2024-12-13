# Unexpected Behavior with Null Values in Addition Function

This repository demonstrates a common JavaScript error related to unexpected behavior when null values are used in a function performing addition.  The provided code demonstrates the issue, and a solution is provided showing best practices for handling such situations.

## Issue
The `foo` function is designed to add two numbers. However, it does not handle `null` values correctly. When either `a` or `b` is `null`, the function implicitly converts `null` to 0, resulting in an unexpected addition.  This can lead to subtle bugs and unexpected outputs if not carefully handled.

## Solution
The solution provides improved error handling by explicitly checking for `null` values.  If a null value is encountered, the function returns 0, providing a clear and consistent behavior. Alternatively, more robust error handling could be implemented (e.g., throwing an error).

## How to Run
1. Clone the repository.
2. Open `bug.js` to see the buggy code and `bugSolution.js` to see the fixed code.
3. Run the JavaScript code in a suitable environment (e.g., Node.js).