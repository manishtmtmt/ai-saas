"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("3d4344d4-6d80-4fb7-92cb-8c6d8d52f093");
  }, []);

  return null;
};
