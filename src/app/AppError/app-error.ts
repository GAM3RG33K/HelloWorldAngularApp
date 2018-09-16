export class AppError {
  private errorType: any;
  constructor(public originalError?: any) {
    this.errorType = originalError;
  }
}
