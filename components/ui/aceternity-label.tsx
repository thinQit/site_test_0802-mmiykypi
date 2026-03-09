"use client";
import * as React from "react";

export function AceternityLabel({ children, className, ...props }: any) {
  return React.createElement("div", { className: className, ...props }, children);
}

