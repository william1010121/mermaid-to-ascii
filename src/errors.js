/** An input or layout error. Locations refer to the original Mermaid source. */
export class MermaidToAsciiError extends Error {
  /** @param {string} message @param {{code?:string,line?:number,column?:number,cause?:unknown}} [options] */
  constructor(message, options = {}) {
    super(message, { cause: options.cause });
    this.name = 'MermaidToAsciiError';
    this.code = options.code ?? 'MERMAID_TO_ASCII_ERROR';
    /** @type {number | undefined} */
    this.line = options.line;
    /** @type {number | undefined} */
    this.column = options.column;
  }
}
