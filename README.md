# Util module
This is a _util module_ for the TodoPal application.

## Setup
For local development follow these steps:

Install the dependencies, then run the module with the `npm start` command.

## API

1. [getJwtExpiration](#getJwtExpiration)
2. [getUsername](#getUsername)

### getJwtExpiration
Gets the expiration date of the JWT Token.

#### Syntax
```js
const exp = getJwtExpiration(jwtToken);
console.log(exp) // Output: 1716486040
```

##### Parameters:
* __token (Type string)__: A JWT Token

##### Return Value:
* __Type number | undefined__: The expiration date in epoch format, otherwise _undefined_.


### getUsername
Gets the username from the JWT Token.

#### Syntax
```js
const exp = getUsername(jwtToken);
console.log(exp) // Output: tstuser
```

##### Parameters:
* __token (Type string)__: A JWT Token

##### Return Value:
* __Type string | undefined__: The username otherwise _undefined_.
