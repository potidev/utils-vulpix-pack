export class CreditCardUtils {
  static formatWithSpaces(value: string): string {
    return value
      .replace(/\D/g, "") 
      .replace(/(\d{4})(?=\d)/g, "$1 ");
  }

  static getOnlyNumbers(value: string): string {
    return value.replace(/\D/g, "");
  }
}