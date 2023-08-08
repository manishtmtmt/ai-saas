"use client";

import Link from "next/link";
import React from "react";

import { Button } from "@/components/ui/button";

const LandingPage = () => {
  const handleClick = async () => {
    await fetch('/api/api-limit');
  };
  return (
    <div>
      LandingPage (Unprotected)
      <div>
        <Link href="/sign-in">
          <Button>Login</Button>
        </Link>
        <Link href="/sign-up">
          <Button>Register</Button>
        </Link>
      </div>
      <div>
        <Button onClick={handleClick}>Increase User API Limit</Button>
      </div>
    </div>
  );
};

export default LandingPage;
