import { formatTempWithUnitSystem } from "./helpers";

describe("helpers", () => {
  describe("formatTempWithUnitSystem", () => {
    it("should return temperature with deg C for metric unit", () => {
      expect(formatTempWithUnitSystem(12, "metric")).toEqual("12\u00b0C");
    });

    it("should return temperature with deg F for imperial unit", () => {
      expect(formatTempWithUnitSystem(12, "imperial")).toEqual("12\u00b0F");
    });

    it("should round temperature", () => {
      expect(formatTempWithUnitSystem(12.4, "imperial")).toEqual("12\u00b0F");
    });
  });
});
