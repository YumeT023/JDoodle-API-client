import { req } from './conf';
import { CodeExectionResult, CodeExecutionOptions, Credentials, CreditSpent, JDoodleClient } from "./types";

export class JDoodle implements JDoodleClient {
  private readonly credentials: Credentials;

  private constructor(credentials: Credentials) {
    this.credentials = credentials;
  }

  static createClient(credentials: Credentials) {
    return new this(credentials);
  }

  public async execute(script: string, options: CodeExecutionOptions): Promise<CodeExectionResult> {
    const payload = {
      script,
      ...this.credentials,
      ...options
    }

    const execution = req.post('/execute', payload)

    return (await execution).data;
  }

  public async checkCreditSpent(): Promise<CreditSpent> {
    const check = req.post('/credit-spent', this.credentials);
    return (await check).data;
  }
}
