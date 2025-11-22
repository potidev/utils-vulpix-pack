import { StringUtils } from "../../src";

describe("ColorUtils", () => {
  describe("StringUtils.upperCaseFirst", () => {
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
});
