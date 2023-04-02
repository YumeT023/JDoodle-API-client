import { req } from "./conf";
import {
  CodeExecutionOptions,
  CodeExecutionResult,
  Credentials,
  CreditSpent,
  JDoodleClient,
} from "./types";

class JDoodle implements JDoodleClient {
  private readonly credentials: Credentials;

  constructor(credentials: Credentials) {
    this.credentials = credentials;
  }

  private static _throwError(e: any) {
    throw e.response.data || e;
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

    let localVarResponse = {} as any;

    try {
      const { compilationStatus, output, ...rest } = (
        await req.post("/execute", payload)
      ).data as CodeExecutionResult;

      if (options.compileOnly) {
        localVarResponse = { compilationStatus };
      }

      return { ...rest, ...localVarResponse };
    } catch (e) {
      JDoodle._throwError(e);
    }
  }

  public async checkCreditSpent(): Promise<CreditSpent> {
    try {
      return (await req.post("/credit-spent", this.credentials)).data;
    } catch (e) {
      JDoodle._throwError(e);
    }
  }
}

export const CLIENT = (credentials: Credentials) => new JDoodle(credentials);
