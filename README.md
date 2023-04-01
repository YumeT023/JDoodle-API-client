# jdoodle-client

a client for the _JDoodle Compiler API_

## Usage

Please refer to [JDoodle docs](https://docs.jdoodle.com/integrating-compiler-ide-to-your-application/compiler-api) for more details

#### Create a client

```typescript
import { CLIENT } from "../src";
import { JDoodleError } from "../src/types";

// provided your credentials
const client = CLIENT({
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

```typescript
import { JDoodleError } from "./types";

const execution = client.execute('IO.puts "Hello jdoodle client"', {
  language: "elixir",
  versionIndex: 4,
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
