# JWT Generator

A tiny JWT [(JSON Web Token)](https://jwt.io/) generator in order to obtain a valid token in order to do tests.

## How it works?

1. Clone the repository and run the script.

    ```sh
    $ git clone https://github.com/ddialar/jwt.token.generator.git
    $ cd jwt.token.generator
    $ npm i
    $ npm start
    ```

2. Provide the user ID for the token. This field will match with the JWT 'sub' one.
3. Provide the token's expiration period. This parameter must be an integer value followed by one of the next allowed time units: seconds, minutes, hours, days, weeks, months or years.
4. Provide the encryption key that you want to use in order to encode the token.

This is the full process.

![JWT Generator](img/jwt.full.process.gif)