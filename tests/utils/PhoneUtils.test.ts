import { PhoneUtils } from "../../src";

describe("PhoneUtils", () => {
  describe("validate", () => {
    it("should throw an error as the method is not implemented", () => {
      expect(() => PhoneUtils.validate("12345")).toThrow("method not implemented");
    });
  });

  describe("getPhoneNumbers", () => {
    it("should remove non-numeric characters from the phone string", () => {
      expect(PhoneUtils.getPhoneNumbers("(84) 99876-5432")).toBe("84998765432");
      expect(PhoneUtils.getPhoneNumbers("123-456-7890")).toBe("1234567890");
      expect(PhoneUtils.getPhoneNumbers("")).toBe("");
    });
  });

  describe("formatPhone", () => {
    it("should format a valid phone number string", () => {
      expect(PhoneUtils.formatPhone("84998765432")).toBe("(84) 99876-5432");
    });

    it("should throw an error for an invalid phone number string when no error string is provided", () => {
      expect(() => PhoneUtils.formatPhone("123")).toThrow("Invalid document");
    });

    it("should return the error string for an invalid phone number string when an error string is provided", () => {
      expect(PhoneUtils.formatPhone("123", "Invalid phone number")).toBe("Invalid phone number");
    });
  });
});