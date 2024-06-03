import { ReactNode } from "react";

type GridProps = { children: ReactNode };

export const Grid = ({ children }: GridProps) => {
  return (
    <div className={" grid grid-cols-3 gap-2 p-2 h-screen"}>{children}</div>
  );
};
