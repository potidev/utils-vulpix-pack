export class ColorUtils {
  static hexWithAlpha = (hex: string, alpha: number): string => {
    if (hex.startsWith('#')) {
        hex = hex.slice(1);
    }

    if (hex.length !== 3 && hex.length !== 6) {
      throw new Error("Invalid hex color format");
    }

    if (!/^[0-9A-Fa-f]{3}$|^[0-9A-Fa-f]{6}$/.test(hex)) {
      throw new Error("Invalid hex color format");
    }

    if (hex.length === 3) {
      hex = hex.split('').map(char => char + char).join('');
    }

    const alphaHex = Math.round(alpha * 255).toString(16).padStart(2, '0');

    return `#${hex}${alphaHex}`;
}
}