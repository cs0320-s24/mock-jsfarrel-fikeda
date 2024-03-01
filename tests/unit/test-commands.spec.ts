import { expect, test } from "vitest";
import {
  handleCommand,
  processCommandString,
} from "../../src/commands/handler/CommandUtil";
import { changeMode } from "../../src/commands/defintitions/ModeCommand";

test("test handleCommand success", () => {
  expect(
    handleCommand({
      name: "echo",
      args: ["hello", "world"],
    })
  ).toEqual({
    value: "hello world ",
    success: true,
  });
});

test("test handleCommand failure", () => {
  expect(
    handleCommand({
      name: "echo2",
      args: ["hello", "world"],
    }).success
  ).toBe(false);
});

test("test processCommandString", () => {
  expect(processCommandString("echo")).toEqual({
    name: "echo",
    args: [],
  });

  expect(processCommandString("echo hi hi")).toEqual({
    name: "echo",
    args: ["hi", "hi"],
  });

  expect(processCommandString("")).toEqual({
    name: "",
    args: [],
  });

  expect(processCommandString(" ")).toEqual({
    name: "",
    args: [""],
  });
});

test("test changeMode", () => {
  expect(changeMode(["brief"])).toEqual({
    value: "Changed mode to brief",
    success: true,
  });

  expect(changeMode([])).toEqual({
    value: "Changed mode to verbose",
    success: true,
  });

  expect(changeMode([])).toEqual({
    value: "Changed mode to brief",
    success: true,
  });

  expect(changeMode(["verbose"])).toEqual({
    value: "Changed mode to verbose",
    success: true,
  });

  expect(changeMode(["brief"])).toEqual({
    value: "Changed mode to brief",
    success: true,
  });
});

test("test changeMode failure", () => {
  expect(changeMode(["invalid"]).success).toBe(false);
});
