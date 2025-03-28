"use client";

import { signOut } from "@/lib/actions/auth.action";
import { Button } from "./ui/button";

const SignOut = () => {
  return (
    <div>
      <Button className="btn-primary" onClick={() => signOut()}>
        Logout
      </Button>
    </div>
  );
};

export default SignOut;
