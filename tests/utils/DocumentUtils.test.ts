import { DocumentUtils } from '../../src';
import { cpf, cnpj } from 'cpf-cnpj-validator';

jest.mock('cpf-cnpj-validator', () => ({
  cpf: {
    isValid: jest.fn(),
  },
  cnpj: {
    isValid: jest.fn(),
  },
}));

describe('DocumentUtils', () => {
  describe('isValidCPF', () => {
    it('should validate CPF using cpf-cnpj-validator', () => {
      (cpf.isValid as jest.Mock).mockReturnValue(true);
      expect(DocumentUtils.isValidCPF('12345678909')).toBe(true);
      expect(cpf.isValid).toHaveBeenCalledWith('12345678909');
    });

    it('should return false for invalid CPF', () => {
      (cpf.isValid as jest.Mock).mockReturnValue(false);
      expect(DocumentUtils.isValidCPF('invalid-cpf')).toBe(false);
    });
  });

  describe('isValidCNPJ', () => {
    it('should validate CNPJ using cpf-cnpj-validator', () => {
      (cnpj.isValid as jest.Mock).mockReturnValue(true);
      expect(DocumentUtils.isValidCNPJ('12345678000195')).toBe(true);
      expect(cnpj.isValid).toHaveBeenCalledWith('12345678000195');
    });

    it('should return false for invalid CNPJ', () => {
      (cnpj.isValid as jest.Mock).mockReturnValue(false);
      expect(DocumentUtils.isValidCNPJ('invalid-cnpj')).toBe(false);
    });
  });

  describe('formatCpf', () => {
    it('should format a valid CPF number', () => {
      expect(DocumentUtils.formatCpf('12345678909')).toBe('123.456.789-09');
    });

    it('should throw an error for an invalid CPF length', () => {
      expect(() => DocumentUtils.formatCpf('123')).toThrow('Invalid CPF');
    });
  });

  describe('formatCnpj', () => {
    it('should format a valid CNPJ number', () => {
      expect(DocumentUtils.formatCnpj('12345678000195')).toBe('12.345.678/0001-95');
    });
  });

  describe('format', () => {
    it('should format a valid CPF', () => {
      expect(DocumentUtils.format('123.456.789-09')).toBe('123.456.789-09');
    });

    it('should format a valid CNPJ', () => {
      expect(DocumentUtils.format('12.345.678/0001-95')).toBe('12.345.678/0001-95');
    });

    it('should return an error string for invalid input if provided', () => {
      expect(DocumentUtils.format('invalid', 'Invalid document')).toBe('Invalid document');
    });

    it('should throw an error for invalid input without an error string', () => {
      expect(() => DocumentUtils.format('invalid')).toThrow('Invalid document');
    });
  });

  describe('getNumbers', () => {
    it('should remove non-numeric characters from the input', () => {
      expect(DocumentUtils.getNumbers('123.456.789-09')).toBe('12345678909');
      expect(DocumentUtils.getNumbers('12.345.678/0001-95')).toBe('12345678000195');
      expect(DocumentUtils.getNumbers('')).toBe('');
    });
  });
});
