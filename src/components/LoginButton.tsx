import { Dispatch, SetStateAction } from "react";
import { mockAuthenticate, mockSignOut } from "../auth/AuthMock";
import { Authenticate } from "../auth/AuthUtil";

interface loginProps {
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
}

export function LoginButton(props: loginProps) {
  const login = (authMethod: Authenticate) => {
    if (authMethod()) {
      props.setIsLoggedIn(true);
    }
  };

  const signOut = (signOutMethod: Authenticate) => {
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
