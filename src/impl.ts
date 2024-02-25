import { req } from "./conf";
import {
  CodeExecutionOutput,
  ApiToken,
  CreditSpent,
  CodeExecutionFlags,
} from "./types";

class JDoodle {
  constructor(private readonly credentials: ApiToken) {}

  private async callHandle<T>(cb: () => Promise<T>) {
    try {
      return await cb();
    } catch (e) {
      throw e.response.data || e;
    }
  }

  public execute(
    script: string,
    options: CodeExecutionFlags
  ): Promise<CodeExecutionOutput> {
    const payload = {
      script,
      ...this.credentials,
      ...options,
    };

    return this.callHandle(async () => {
      const { output, ...rest } = (await req.post("/execute", payload)).data;
      return { output: output.trim(), ...rest };
    });
  }

  public async checkCreditSpent(): Promise<CreditSpent> {
    return this.callHandle(async () => {
      return (await req.post("/credit-spent", this.credentials)).data;
    });
  }
}

export const initializeJDoodleApp = (credentials: ApiToken) =>
  new JDoodle(credentials);
