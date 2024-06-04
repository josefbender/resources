import { ReactNode } from "react";
import { Pill, Box, Flex } from "@mantine/core";

type ColumnTitleProps = { color?: string; children: ReactNode };

export const ColumnTitle = ({ children, color }: ColumnTitleProps) => {
  return (
    <Flex align={"center"}>
      <Pill c={color}>
        <Flex align={"center"} gap={4}>
          <Box className={"w-2 h-2 rounded-full"} bg={color} />
          {children}
        </Flex>
      </Pill>
    </Flex>
  );
};
