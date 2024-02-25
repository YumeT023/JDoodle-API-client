import { initializeJDoodleApp } from "../src";
import { JDoodleError, CodeExecutionOutput, CreditSpent } from "../src/types";

const client = initializeJDoodleApp({
  clientId: "CLIENT_ID",
  clientSecret: "CLIENT_SECRET",
});

const script = `
fn main() {
  println!("Hello world");
}
`;

const options = {
  language: "rust",
  versionIndex: 3,
};

client.execute(script, options).then(onExecuted).catch(handleError);

client.checkCreditSpent().then(onCreditSpent).catch(handleError);

function handleError(e: JDoodleError) {
  /* do something with error */
  console.log(e);
}

function onExecuted(result: CodeExecutionOutput) {
  /* do something with result */
  console.log(result);
}

function onCreditSpent(credit: CreditSpent) {
  /* do something with credit */
  console.log(credit);
}
