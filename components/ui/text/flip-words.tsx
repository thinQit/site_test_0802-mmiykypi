"use client";
import * as React from "react";

export function FlipWords({ children, className, ...props }: any) {
  return React.createElement("div", { className: className, ...props }, children);
}

