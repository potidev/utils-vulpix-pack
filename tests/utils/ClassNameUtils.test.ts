import { ClassName } from "../../src";

describe("ClassName", () => {
  describe("get", () => {
    it("should return a single class name when one is provided", () => {
      expect(ClassName.get("class1")).toBe("class1");
    });

    it("should join multiple class names with a space", () => {
      expect(ClassName.get("class1", "class2", "class3")).toBe(
        "class1 class2 class3"
      );
    });

    it("should ignore undefined values", () => {
      expect(ClassName.get("class1", undefined, "class2")).toBe(
        "class1 class2"
      );
    });

    it("should return an empty string if no class names are provided", () => {
      expect(ClassName.get()).toBe("");
    });

    it("should handle a mix of strings and undefined values correctly", () => {
      expect(ClassName.get(undefined, "class1", undefined, "class2")).toBe(
        "class1 class2"
      );
    });
  });
});
