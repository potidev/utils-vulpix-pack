import { MoneyUtils } from '../../src';

describe('MoneyUtils', () => {
  describe('formatNumber', () => {
    it('should format a number with the default decimal places (2) and locale (pt-BR)', () => {
      expect(MoneyUtils.formatNumber(1234.567)).toBe('1.234,57');
    });

    it('should format a number with specified decimal places', () => {
      expect(MoneyUtils.formatNumber(1234.567, 1)).toBe('1.234,6');
      expect(MoneyUtils.formatNumber(1234.567, 3)).toBe('1.234,567');
    });

    it('should format a number using a custom locale', () => {
      expect(MoneyUtils.formatNumber(1234.567, 2, 'en-US')).toBe('1,234.57');
      expect(MoneyUtils.formatNumber(1234.567, 3, 'fr-FR')).toBe('1 234,567');
    });

    it('should throw an error for negative decimalPlaces', () => {
      expect(() => MoneyUtils.formatNumber(1234.567, -1)).toThrow(
        'decimalPlaces must be a positive number',
      );
    });

    it('should throw an error for non-numeric decimalPlaces', () => {
      // @ts-ignore - intentionally passing invalid argument for test
      expect(() => MoneyUtils.formatNumber(1234.567, 'invalid')).toThrow(
        'decimalPlaces must be a positive number',
      );
    });
  });
});
