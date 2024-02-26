import { datasetMap, searchResultMap1, searchResultMap2 } from "./mockedJson";

var loadedfile: string[][] | null = null;
var loadedfileName: string | null = null;

export function readBackArgs(args: string[]): string {
  return args.join(" ");
}

export function loadFile(args: string[]): string {
  const dataset = datasetMap.get(args[0]);
  if (dataset) {
    loadedfile = dataset;
    loadedfileName = args[0];
    return "Loaded dataset from " + args[0];
  } else {
    return "Error: File '" + args[0] +  "' not found";
  }
}

export function viewFile(args: Array<string>): string | string[][] {
  if (loadedfile === null) {
    return "Error: No file loaded";
  } else {
    return loadedfile;
  }
}

export function searchFile(args: Array<string>): string | string[][] | undefined {
  if (loadedfile === null) {
    return "Error: No file loaded";
  } else if (loadedfileName === "dataset1") {
    const result = searchResultMap1.get(args[0] + args[1]);
    return result !== undefined ? result : args[1] + " not found in column '" + args[0] + "' of " + loadedfileName;
  } else if (loadedfileName === "dataset2") {
    const result = searchResultMap2.get(args[0]);
    return result !== undefined ? result : args[1] + " not found in column '" + args[0] + "' of " + loadedfileName;
  } else {
    return "Error: Unsupported File";
  }
}

