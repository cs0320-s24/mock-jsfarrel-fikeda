import { Result } from "../handler/CommandUtil";
import { datasetMap, searchResultMap1, searchResultMap2 } from "./mockedJson";

var loadedfile: string[][] | null = null;
var loadedfileName: string | null = null;

export function loadFile(args: string[]): Result {
  const dataset = datasetMap.get(args[0]);
  if (dataset) {
    loadedfile = dataset;
    loadedfileName = args[0];
    return {
      value: "Loaded " + args[0] + " with " + dataset.length + " rows",
      success: true,
    };
  } else {
    return {
      value: "File " + args[0] + " not found",
      success: false,
    };
  }
}

export function viewFile(args: Array<string>): Result {
  if (loadedfile === null) {
    return {
      value: "Error: No file loaded",
      success: false,
    };
  } else {
    return {
      value: loadedfile,
      success: true,
    };
  }
}

export function searchFile(args: Array<string>): Result {
  if (loadedfile === null) {
    return {
      value: "Error: No file loaded",
      success: false,
    };
  } else if (loadedfileName === "dataset1") {
    const result = searchResultMap1.get(args[0] + args[1]);
    return result !== undefined
      ? {
          value: result,
          success: true,
        }
      : {
          value:
            args[1] +
            " not found in column '" +
            args[0] +
            "' of " +
            loadedfileName,
          success: false,
        };
  } else if (loadedfileName === "dataset2") {
    const result = searchResultMap2.get(args[0]);
    return result !== undefined
      ? {
          value: result,
          success: true,
        }
      : {
          value: args[0] + " not found in " + loadedfileName,
          success: false,
        };
  } else {
    return {
      value: "Unsupported file",
      success: false,
    };
  }
}
