import { cpf, cnpj } from "cpf-cnpj-validator";

export class DocumentUtils {
  static isValidCPF = (cpfNumber: string) => cpf.isValid(cpfNumber);
  static isValidCNPJ = (cnpjNumber: string) => cnpj.isValid(cnpjNumber);

  static formatCpf(cpfOnlyNumbers: string): string {
    const numbersOnly = cpfOnlyNumbers.replace(/\D/g, "");

    if (numbersOnly.length === 11) {
      const formattedCPF =
        numbersOnly.slice(0, 3) +
        "." +
        numbersOnly.slice(3, 6) +
        "." +
        numbersOnly.slice(6, 9) +
        "-" +
        numbersOnly.slice(9);

      return formattedCPF;
    } else {
      throw new Error("Invalid CPF");
    }
  }

  static formatCnpj(cnpjOnlyNumbers: string): string {
    return cnpjOnlyNumbers.replace(
      /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
      "$1.$2.$3/$4-$5",
    );
  }

  static format(document: string, errorString?: string): string {
    const onlyNumbers = this.getNumbers(document);

    if (onlyNumbers.length === 11) {
      return DocumentUtils.formatCpf(onlyNumbers);
    } else if (onlyNumbers.length === 14) {
      return DocumentUtils.formatCnpj(onlyNumbers);
    }

    if (errorString) return errorString;

    throw new Error("Invalid document");
  }

  static getNumbers(document: string): string {
    return document.replace(/\D/g, "");
  }
}