/**
 * credentials given to you after subscribing to [JDoodle Compiler API](https://docs.jdoodle.com/integrating-compiler-ide-to-your-application/compiler-api)
 */
export type ApiToken = {
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
export type CodeExecutionFlags = Language & {
  compileOnly?: boolean;
  stdin?: string;
};

export type CodeExecutionInput = CodeExecutionFlags & {
  /**
   * the script/code to execute
   */
  script: string;
};

export type CodeExecutionOutput = {
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
