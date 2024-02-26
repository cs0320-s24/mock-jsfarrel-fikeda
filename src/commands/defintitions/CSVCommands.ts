import { datasetMap, searchResultsBrown } from "./mockedJson";

var loadedfile: string[][] | null = null;

export function readBackArgs(args: string[]): string {
  return args.join(" ");
}

export function loadFile(args: string[]): string {
  const dataset = datasetMap.get(args[0]);
  if (dataset) {
    loadedfile = dataset;
    return "Loaded dataset from " + args[0];
  } else {
    return "Error: File not found at " + args[0];
  }
}

export function viewFile(args: Array<string>): string | string[][] {
  if (loadedfile === null) {
    return "Error: No file loaded";
  } else {
    return loadedfile;
  }
}

export function searchFile(args: Array<string>): string | string[][] {
  if (args[0] === "1" && args[1] === "Brown") {
    return searchResultsBrown;
  } else {
    return "could not find " + args.join(" ");
  }}
