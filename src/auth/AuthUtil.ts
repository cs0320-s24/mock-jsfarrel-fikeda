// true if successfully authenticated, false otherwise
export interface Authenticate {
  (): boolean;
}

// true if successfully signed out, false otherwise
export interface SignOut {
  (): boolean;
}
