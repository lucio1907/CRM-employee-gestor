export default class ServerErrorException extends Error {
  constructor() {
    super("Internal Server Error");
  }
}
