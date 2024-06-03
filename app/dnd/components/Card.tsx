import { ReactNode } from "react";
import { Card as MantineCard } from "@mantine/core";

type CardProps = { children: ReactNode };

export const Card = ({ children }: CardProps) => {
  return (
    <MantineCard shadow={"md"} withBorder>
      {children}
    </MantineCard>
  );
};
