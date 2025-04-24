export type DarkOrLightLuminosity = 'dark' | 'light';

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
  static getContrastingLuminosity = (color: string): DarkOrLightLuminosity => {
    color = color.replace('#', '');
    const r = parseInt(color.substring(0, 2), 16);
    const g = parseInt(color.substring(2, 4), 16);
    const b = parseInt(color.substring(4, 6), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 127 ? 'dark' : 'light';
  }
}