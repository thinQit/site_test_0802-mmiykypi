"use client";
import * as React from "react";

export function LampContainer({ children, className, ...props }: any) {
  return React.createElement("div", { className: className, ...props }, children);
}

export default function LampEffect({ children, className, ...props }: any) {
  return React.createElement("div", { className: className, ...props }, children);
}
