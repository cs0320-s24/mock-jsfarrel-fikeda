import { Dispatch, SetStateAction } from "react";
import { mockAuthenticate, mockSignOut } from "../auth/AuthMock";
import { Authenticate } from "../auth/AuthUtil";
import { Command, Result, handleCommand, processCommandString } from "../commands/handler/CommandUtil";

/**
 * getter and setter for if a user is logged in
 */
interface loginProps {
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
}

/**
 * Login button
 * @param props getter and setter for if a user is logged in
 * @returns a button that allows the user to login or signout
 */
export function LoginButton(props: loginProps) {
  const login = (authMethod: Authenticate) => {
    if (authMethod()) {
      props.setIsLoggedIn(true);
    }
  };

  const signOut = (signOutMethod: Authenticate) => {
    handleCommand(processCommandString("clear"));
    if (signOutMethod()) {
      props.setIsLoggedIn(false);
    }
  };

  if (props.isLoggedIn) {
    return (
      <button aria-label="Sign Out" onClick={() => signOut(mockSignOut)}>
        Sign out
      </button>
    );
  } else {
    return (
      <button aria-label="Login" onClick={() => login(mockAuthenticate)}>
        Login
      </button>
    );
  }
}
