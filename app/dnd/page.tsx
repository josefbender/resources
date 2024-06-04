"use client";
import * as React from "react";
import { Heading, Link } from "@radix-ui/themes";

export default function Dnd1() {
  return (
    <div className={`[&>*]:mb-2 `}>
      <Heading size={"8"} as={"h1"} mb={"4"}>
        Enum Types
      </Heading>
      <ul>
        <li>
          <Link href={"/dnd/react-dnd"}>React DnD</Link>
        </li>
        <li>
          <Link href={"/dnd/framer-motion"}>Framer Motion</Link>
        </li>
        <li>
          <Link href={"/dnd/framer-motion-numbers"}>
            Framer Motion (number only)
          </Link>
        </li>
        <li>
          <Link href={"/dnd/hello-pangea"}>@hello-pangea/dnd</Link>
        </li>
        <li>
          <Link href={"/dnd/dnd-kit"}>Dnd Kit</Link>
        </li>
      </ul>
    </div>
  );
}
