import { CreditCardUtils } from '../../src';

describe('CreditCardUtils', () => {
  describe('formatWithSpaces', () => {
    it('should return a string formated like a credit card number with spaces', () => {
      expect(CreditCardUtils.formatWithSpaces('1111111111111111')).toBe('1111 1111 1111 1111');
    });
    it('should remove latters and return string formated like a credit card number with spaces', () => {
      expect(CreditCardUtils.formatWithSpaces('1111111111111111d')).toBe('1111 1111 1111 1111');
      expect(CreditCardUtils.formatWithSpaces('1111111111111d11')).toBe('1111 1111 1111 111');
    });
    it('should return the same string formated like a credit card number with spaces', () => {
      expect(CreditCardUtils.formatWithSpaces('1111 1111 1111 1111')).toBe('1111 1111 1111 1111');
    });
  });
  describe('getOnlyNumbers', () => {
    it('should return only numbers without spaces', () => {
      expect(CreditCardUtils.getOnlyNumbers('1111 1111 1111 1111')).toBe('1111111111111111');
    });
    it('should return the same input', () => {
      expect(CreditCardUtils.getOnlyNumbers('1111111111111111')).toBe('1111111111111111');
    });
  });
});
