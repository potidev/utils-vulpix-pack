export class CreditCardUtils {
  static formatWithSpaces(value: string): string {
    return value
      .replace(/\D/g, "")
      .substring(0, 16)
      .replace(/(\d{4})(?=\d)/g, "$1 ");
  }

  static getOnlyNumbers(value: string): string {
    return value.replace(/\D/g, "");
  }
}