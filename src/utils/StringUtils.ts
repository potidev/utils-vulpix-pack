export class StringUtils {
  static upperCaseFirst = (text: string): string => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };
}
