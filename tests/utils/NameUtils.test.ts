import { NameUtils, NameParts } from '../../src';

describe('NameUtils', () => {
  describe('formatFullName', () => {
    it('should format a full name correctly', () => {
      expect(NameUtils.formatFullName('joão silva')).toBe('João Silva');
      expect(NameUtils.formatFullName('  maria   do  carmo ')).toBe('Maria do Carmo');
      expect(NameUtils.formatFullName('ana')).toBe('Ana');
    });

    it('should handle short words correctly', () => {
      expect(NameUtils.formatFullName('john Due')).toBe('John Due');
      expect(NameUtils.formatFullName('JOSE DA SILVA')).toBe('Jose da Silva');
    });
  });

  describe('getNameParts', () => {
    it('should split a full name into first and last names', () => {
      const result: NameParts = NameUtils.getNameParts('João Silva');
      expect(result).toEqual({ firstName: 'João', lastName: 'Silva' });

      const resultSingleName: NameParts = NameUtils.getNameParts('Ana');
      expect(resultSingleName).toEqual({ firstName: 'Ana', lastName: '' });
    });
  });

  describe('isValidFullName', () => {
    it('should validate if a full name has more than one part', () => {
      expect(NameUtils.isValidFullName('João Silva')).toBe(true);
      expect(NameUtils.isValidFullName('Ana')).toBe(false);
      expect(NameUtils.isValidFullName('   ')).toBe(false);
    });
  });

  describe('getAvatarAcronyms', () => {
    it('should return the correct acronyms for a full name', () => {
      expect(NameUtils.getAvatarAcronyms('João Silva')).toBe('JS');
      expect(NameUtils.getAvatarAcronyms('Ana')).toBe('A');
      expect(NameUtils.getAvatarAcronyms('')).toBe('');
      expect(NameUtils.getAvatarAcronyms('Maria do Carmo')).toBe('MC');
    });
  });

  describe('capitalizeFirstLetter', () => {
    it('should return the fist latter in uppercase', () => {
      expect(NameUtils.capitalizeFirstLetter('joão silva')).toBe('João silva');
      expect(NameUtils.capitalizeFirstLetter('João Silva')).toBe('João Silva');
      expect(NameUtils.capitalizeFirstLetter('')).toBe('');
      expect(NameUtils.capitalizeFirstLetter('João')).toBe('João');
      expect(NameUtils.capitalizeFirstLetter('joão')).toBe('João');
    });
  });
});
