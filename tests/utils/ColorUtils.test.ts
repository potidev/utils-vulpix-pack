import { ColorUtils } from '../../src';

describe('ColorUtils', () => {
  describe('hexWithAlpha', () => {
    it('should add alpha to a 6-character hex color', () => {
        const result = ColorUtils.hexWithAlpha('#3498db', 0.5);
        expect(result).toBe('#3498db80');
    });

    it('should add alpha to a 3-character hex color', () => {
        const result = ColorUtils.hexWithAlpha('#f80', 0.5);
        expect(result).toBe('#ff880080');
    });

    it('should handle alpha value of 0', () => {
        const result = ColorUtils.hexWithAlpha('#3498db', 0);
        expect(result).toBe('#3498db00');
    });

    it('should handle alpha value of 1', () => {
        const result = ColorUtils.hexWithAlpha('#3498db', 1);
        expect(result).toBe('#3498dbff');
    });

    test('should throw an error for invalid hex length', () => {
      expect(() => ColorUtils.hexWithAlpha('#12345', 0.5)).toThrow('Invalid hex color format');
  });

  test('should throw an error for invalid hex format', () => {
      expect(() => ColorUtils.hexWithAlpha('1234g7', 0.5)).toThrow('Invalid hex color format');
  });
});
});
