import { useState } from "react";
import { csvData } from "./mockedJson";
// Add the import for the corresponding type declarations

const [file, setFile] = useState<string>("");

export function readBackArgs(args: string[]): string {
  return args.join(" ");
}

export function searchFile(args: string[]): string {
  return "searching for " + args.join(" ");
}

export function viewFile(args: string[]): string  {
  if (file === 'csv1'){
    return JSON.stringify(csvData);
  }
  else{
    return "error in viewing" + args.join(" ");
  }
}

export function loadFile(args: string[]): string {
  setFile(args.join(" "));
  return "loading " + args.join(" ");
}
