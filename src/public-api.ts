import {
  CodeExecutionResult,
  CodeExecutionOptions,
  Credentials,
  CreditSpent,
  JDoodleClient,
} from "./types";
import { req } from "./conf";

class JDoodle implements JDoodleClient {
  private readonly credentials: Credentials;

  constructor(credentials: Credentials) {
    this.credentials = credentials;
  }

  public async execute(
    script: string,
    options: CodeExecutionOptions
  ): Promise<CodeExecutionResult> {
    const payload = {
      script,
      ...this.credentials,
      ...options,
    };

    const execution = req.post("/execute", payload);

    return (await execution).data;
  }

  public async checkCreditSpent(): Promise<CreditSpent> {
    const check = req.post("/credit-spent", this.credentials);
    return (await check).data;
  }
}

export const CLIENT = (credentials: Credentials) => new JDoodle(credentials);
