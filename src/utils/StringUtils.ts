export class StringUtils {
  static upperCaseFirst = (text: string): string => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  static truncateWithDots = (text: string, maxLength: number): string => {
    if (maxLength <= 3) {
      // Não faz sentido ter menos de 3 chars, mas garantimos que retorne exatamente o tamanho
      return ".".repeat(maxLength);
    }

    if (text.length <= maxLength) {
      return text;
    }

    // Tamanho da parte visível (subtrai os 3 pontos)
    const visibleLength = maxLength - 3;

    return text.slice(0, visibleLength) + "...";
  };
}
