import { CLIENT } from '../src';
import { JDoodleError, CodeExecutionResult, CreditSpent } from '../src/types';

var client = CLIENT({
    clientId: "YOUR_CLIENT_ID",
    clientSecret: "YOUR_CLIENT_SECRET"
});

const script = `
    defmodule JDoodleModule do
        def hello, do: "world"
    end

    IO.inspect JDoodleModule.hello() # should output "world"
`
const options = {
    language: "elixir",
    versionIndex: 3,
}

client
    .execute(script, options)
    .then(handleExecution)
    .catch(handleError);

client
    .checkCreditSpent()
    .then(handleCreditSpent)
    .catch(handleError);

function handleError(e: JDoodleError) {
    /* do something with error */
    console.log(e);
}

function handleExecution(result: CodeExecutionResult) {
    /* do something with result */
    console.log(result);
}

function handleCreditSpent(credit: CreditSpent) {
    /* do something with credit */
    console.log(credit);
}
