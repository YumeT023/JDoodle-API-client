import { CLIENT } from "../dist";
import { CodeExecutionResult, CreditSpent, JDoodleError } from "../dist/types";

const client = CLIENT({
  clientId: "YOUR_CLIENT_ID",
  clientSecret: "YOUR_CLIENT_SECRET",
});

client
  .execute('IO.puts "Hello world"', {
    language: "elixir",
    versionIndex: 4,
    compileOnly: true,
  })
  .then(doSomething_withResult)
  .catch(handleError);

client.checkCreditSpent().then(doSomething_withCreditSpent).catch(handleError);

function handleError(e: JDoodleError) {
  /* do something with error */
}

function doSomething_withResult(result: CodeExecutionResult) {
  /* do something with result */
}

function doSomething_withCreditSpent(credit: CreditSpent) {
  /* do something with credit */
}
