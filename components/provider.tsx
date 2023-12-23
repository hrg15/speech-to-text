import { ReactNode } from "react";
import "regenerator-runtime/runtime";
export default function Provider({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}
