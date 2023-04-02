/**
 * credentials given to you after subscribing to [JDoodle Compiler API](https://docs.jdoodle.com/integrating-compiler-ide-to-your-application/compiler-api)
 */
export type Credentials = {
  clientId: string;
  clientSecret: string;
};

/**
 * @type Language
 *
 * the language specification
 * @see [language and version supported in API](https://docs.jdoodle.com/integrating-compiler-ide-to-your-application/languages-and-versions-supported-in-api-and-plugins)
 */
export type Language = {
  language: string;
  versionIndex?: number;
};

/**
 * metadata for the code to be executed
 */
export type CodeExecutionOptions = Language & {
  compileOnly?: boolean;
  stdin?: string;
};

export type CodeExecutionPayload = CodeExecutionOptions & {
  /**
   * the script/code to execute
   */
  script: string;
};

export type CodeExecutionResult = {
  /**
   * Output of the program
   */
  output: string;
  /**
   * Memory used by the program
   */
  memory: number;
  /**
   * CPU Time used by the program
   */
  cpuTime: number;
  /**
   * Only when the "compileOnly" option in the request is true.
   * 1> error | 0> success.
   */
  compilationStatus: 0 | 1;
};

export type CreditSpent = {
  /**
   * No. of credits used today
   */
  used: number;
};

/**
 * error model that is used whenever any error occurs
 */
export type JDoodleError = {
  error: string;
  statusCode: number;
};

/**
 * @interface _JDoodle
 *
 * an interface that should be implemented by the client
 * which regroup all possible operations
 */
export interface JDoodleClient {
  /**
   * execute the script with the given options
   */
  execute(
    script: string,
    options: CodeExecutionOptions
  ): Promise<CodeExecutionResult>;

  /**
   * check No. of credits used today
   */
  checkCreditSpent(): Promise<CreditSpent>;
}
