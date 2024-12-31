import { NameParts } from "../types/name";

export class NameUtils {
  static formatFullName(name: string): string {
    const nameArray = name.trim().toLocaleLowerCase().split(/\s+/);
    return nameArray
      .map((word) =>
        word.length <= 2
          ? word.charAt(0).toLowerCase() + word.slice(1)
          : word.charAt(0).toUpperCase() + word.slice(1),
      )
      .join(' ');
  }

  static getNameParts(fullName: string): NameParts {
    const nameParts = fullName.split(" ");
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(" ");

    return {
      firstName,
      lastName,
    };
  }

  static isValidFullName(fullName: string) {
    const nameParts = fullName.trim().split(" ");
    return nameParts.length > 1;
  }

  static getAvatarAcronyms(fullName: string) {
    if (!fullName.trim()) {
      return '';
    }

    const nameParts = fullName.trim().split(' ');
    const firstNameAcronym = nameParts[0]?.charAt(0).toUpperCase() || '';
    const lastNameAcronym = nameParts.length > 1 ? nameParts[nameParts.length - 1]?.charAt(0).toUpperCase() : '';

    return `${firstNameAcronym}${lastNameAcronym}`;
  }

}