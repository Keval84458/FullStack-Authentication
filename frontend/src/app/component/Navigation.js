"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navigation = () => {
  const [authToken, setAuthToken] = useState(null);
  const fetchuserToken = () => {
    const userToken = localStorage.getItem("userToken");
    setAuthToken(userToken);
  };

  const handleLogout = () => {
    localStorage.clear();
  };

  useEffect(() => {
    fetchuserToken();
  }, []);
  return (
    <div>
      {authToken ? (
        <div>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <>
          <div>
            <Link href="/sign-up">Sign Up</Link>
          </div>
          <div>
            <Link href="/login">Login</Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Navigation;
