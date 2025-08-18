"use client";
import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <div>
      <div>
        <Link href="/sign-up">Sign Up</Link>
      </div>
      <div>
        <Link href="/login">Login</Link>
      </div>
    </div>
  );
};

export default Navigation;
