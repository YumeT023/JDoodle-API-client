# jdoodle-client

an unofficial typesafe javascript client for the [jdoodle](https://www.jdoodle.com) compiler API

## Usage

Please refer to [JDoodle docs](https://www.jdoodle.com/docs) for more details

#### Create a client

```typescript
import {
  initializeJDoodleApp,
  JDoodleError,
} from "@yumii.saiko/jdoodle-client";

// provided your credentials
const client = initializeJDoodleApp({
  clientId: "EXAMPLE_CLIENT_ID",
  clientSecret: "EXAMPLE_CLIENT_SECRET",
});
```

#### Check credit spent in your account

```typescript
const checkReq = client.checkCreditSpent();

checkReq
  .then((credit) => {
    console.log(credit.used);
  })
  .catch((error: JDoodleError) => {
    // handle error
  });
```

#### Execute a script

Refer to [Jdoodle compiler API](https://www.jdoodle.com/docs) for more info about the supported languages

```typescript
import { JDoodleError } from "./types";

const execution = client.execute('IO.puts "Hello jdoodle client"', {
  language: "elixir",
  versionIndex: 4,
  /*
  stdin: "your STDIN",
  compileOnly: false 
   */
});

execution
  .then((result) => {
    // do something with result for instance>
    console.log(result.output);
  })
  .catch((error: JDoodleError) => {
    // handle error
  });
```

## Run locally

### Clone this repository

```shell
git clone https://github.com/YumeT023/JDoodle-API-client
```

### Install the dependencies

```shell
npm install
```

### Build

```shell
npm build
```
