const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius() submission tests written by me", () => {
  describe("encoding a message", () => {
    it("should encode a message by translating each letter to number pairs", () => {
      const message = "message";
      const encode = true;
      const expected = "23513434112251";
      const actual = polybius(message, encode);
      expect(actual).to.equal(expected);
    });

    it("should translate both i and j to 42", () => {
      const message = "jiggle";
      const encode = true;
      const expected = "424222221351";
      const actual = polybius(message, encode);
      expect(actual).to.equal(expected);
    });
    it("should leave spaces as is", () => {
      const message = "my message";
      const encode = true;
      const expected = "2345 23513434112251";
      const actual = polybius(message, encode);
      expect(actual).to.equal(expected);
    });
  });

  describe("decoding a message", () => {
    it("should decode a message by translating each pair of numbers into a letter", () => {
      const message = "23513434112251";
      const encode = false;
      const expected = "message";
      const actual = polybius(message, encode);
    });

    it("should translate both i and j to 42", () => {
      const message = "424222221351";
      const encode = false;
      const expected = "ijijggle";
      const actual = polybius(message, encode);
      expect(actual).to.equal(expected);
    });
    it("should leave spaces as is", () => {
      const message = "2345 23513434112251";
      const encode = false;
      const expected = "my message";
      const actual = polybius(message, encode);
      expect(actual).to.equal(expected);
    });
    it("should return false if the length of all numbers is odd", () => {
      const message = "42422222135";
      const encode = false;
      const actual = polybius(message, encode);
      expect(actual).to.be.false;
    });
  });
});
