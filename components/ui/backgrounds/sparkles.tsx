"use client";
import * as React from "react";

export function SparklesCore({ children, className, ...props }: any) {
  return React.createElement("div", { className: className, ...props }, children);
}

export default function Sparkles({ children, className, ...props }: any) {
  return React.createElement("div", { className: className, ...props }, children);
}
