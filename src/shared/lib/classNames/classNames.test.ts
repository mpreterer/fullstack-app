import { classNames } from "./classNames";

describe("classNames", () => {
  test("only class", () => {
    expect(classNames("someClass")).toBe("someClass");
  });

  test("only with additional params", () => {
    expect(classNames("someClass", {}, ["additional-class"])).toBe(
      "someClass additional-class"
    );
  });

  test("only with mods params", () => {
    expect(
      classNames("someClass", { someMod: true, someSecondMode: false }, [])
    ).toBe("someClass someMod");
  });

  test("with mods and additional params", () => {
    expect(
      classNames("someClass", { someMod: true, someSecondMode: false }, [
        "additional-class",
      ])
    ).toBe("someClass additional-class someMod");
  });
});
