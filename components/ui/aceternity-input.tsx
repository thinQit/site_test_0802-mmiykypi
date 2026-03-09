"use client";
import * as React from "react";

export function AceternityInput({ children, className, ...props }: any) {
  return React.createElement("div", { className: className, ...props }, children);
}

