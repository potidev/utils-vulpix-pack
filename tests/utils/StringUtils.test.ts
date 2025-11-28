import { StringUtils } from "../../src";

describe("StringUtils", () => {
  describe("upperCaseFirst", () => {
    it("deve retornar a primeira letra maiúscula para uma palavra simples", () => {
      expect(StringUtils.upperCaseFirst("hello")).toBe("Hello");
    });

    it("deve manter o restante da string inalterado", () => {
      expect(StringUtils.upperCaseFirst("hello world")).toBe("Hello world");
    });

    it("deve lidar com strings que já começam com letra maiúscula", () => {
      expect(StringUtils.upperCaseFirst("Hello")).toBe("Hello");
    });

    it("deve lidar com caracteres especiais no início", () => {
      expect(StringUtils.upperCaseFirst("!hello")).toBe("!hello");
    });

    it("deve lidar com números no início", () => {
      expect(StringUtils.upperCaseFirst("123abc")).toBe("123abc");
    });

    it("deve lidar com espaços no início (mantendo-os)", () => {
      expect(StringUtils.upperCaseFirst(" hello")).toBe(" hello");
    });

    it("deve lidar com uma única letra", () => {
      expect(StringUtils.upperCaseFirst("a")).toBe("A");
    });
  });

  describe("truncateWithDots", () => {
    // Cenário 1: maxLength <= 3
    it("deve retornar apenas pontos quando maxLength <= 3", () => {
      expect(StringUtils.truncateWithDots("Hello", 2)).toBe("..");
      expect(StringUtils.truncateWithDots("Hello", 3)).toBe("...");
    });

    // Cenário 2: texto menor ou igual ao maxLength
    it("deve retornar o texto original quando text.length <= maxLength", () => {
      expect(StringUtils.truncateWithDots("Hi", 5)).toBe("Hi");
      expect(StringUtils.truncateWithDots("", 5)).toBe("");
      expect(StringUtils.truncateWithDots("abc", 4)).toBe("abc");
      expect(StringUtils.truncateWithDots("abc", 6)).toBe("abc");
    });

    // Cenário 3: texto maior que maxLength
    it('deve truncar o texto e adicionar "..." quando text.length > maxLength', () => {
      expect(StringUtils.truncateWithDots("HelloWorld", 8)).toBe("Hello...");
      expect(StringUtils.truncateWithDots("abcdef", 4)).toBe("a...");
      expect(StringUtils.truncateWithDots("abcdef", 6)).toBe("abc...");
    });

    // Cenário 4: texto muito longo
    it("deve truncar corretamente textos grandes", () => {
      expect(
        StringUtils.truncateWithDots("Lorem ipsum dolor sit amet", 10)
      ).toBe("Lorem i...");
    });

    // Cenário 5: valores extremos
    it("deve lidar com maxLength = 1 ou 2 corretamente", () => {
      expect(StringUtils.truncateWithDots("abcdef", 1)).toBe(".");
      expect(StringUtils.truncateWithDots("abcdef", 2)).toBe("..");
    });
  });
});
