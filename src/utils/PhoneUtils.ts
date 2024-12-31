export class PhoneUtils {
  static validate(phone: string) {
    throw new Error("method not implemented");
  }

  static getPhoneNumbers(phone: string) {
    return phone.replace(/\D/g, "");
  }

  static formatPhone(phoneOnlyNumbers: string, errorString?: string) {
    const regex = /^(\d{2})(\d{5})(\d{4})$/;
    if (!regex.test(phoneOnlyNumbers)) {
      if (errorString) return errorString;
      throw new Error("Invalid document");
    }
    return phoneOnlyNumbers.replace(regex, "($1) $2-$3");
  }
}