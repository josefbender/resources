"use client";
// core styles are required for all packages
import "@mantine/core/styles.css";

// other css files are required only if
// you are using components from the corresponding package
// import '@mantine/dates/styles.css';
// import '@mantine/dropzone/styles.css';
// import '@mantine/code-highlight/styles.css';
// ...
import { Flex, IconButton, Link, Text, Theme } from "@radix-ui/themes";
import * as React from "react";
import { ReactNode, useEffect, useState } from "react";
import "@/styles/globals.css";
import "@radix-ui/themes/styles.css";
import {
  GithubIcon,
  MonitorSmartphoneIcon,
  MoonIcon,
  SunIcon,
} from "lucide-react";
import { ThemeProvider } from "@/contexts/ThemeProvider";
import { useTheme } from "next-themes";
import { ColorSchemeScript, createTheme, MantineProvider } from "@mantine/core";
import { NavigationPath } from "@/components/NavigationPath";

const mantineTheme = createTheme({
  /** Put your mantine theme override here */
  primaryColor: "orange",
});

type LayoutProps = { children: ReactNode };
const Layout = ({ children }: LayoutProps) => (
  <html lang="en">
    <head>
      <ColorSchemeScript forceColorScheme="dark" />
    </head>
    <body className={"min-h-screen"}>
      <ThemeProvider>
        <LayoutBase>{children}</LayoutBase>
      </ThemeProvider>
    </body>
  </html>
);
export default Layout;

function LayoutBase({ children }: LayoutProps) {
  const { setTheme, theme } = useTheme();
  const [isMounted, setIsMounted] = useState(false); // Need this for the react-tooltip

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <MantineProvider
      theme={{ ...mantineTheme }}
      forceColorScheme={theme === "dark" ? theme : "light"}
    >
      <Theme
        accentColor={"orange"}
        radius="medium"
        appearance={
          !isMounted
            ? undefined
            : theme !== "dark" && theme !== "light"
              ? "inherit"
              : theme
        }
        // suppressHydrationWarning
      >
        <div>
          <nav
            className={
              "p-4 flex justify-between items-center max-w-6xl mx-auto border-b-2 border-[--gray-6]"
            }
          >
            <div className={"flex gap-2 items-center"}>
              <Link href={"/"}>
                <Text size={"4"}>Resources</Text>
              </Link>
              <NavigationPath />
            </div>
            <Flex gap={"2"}>
              {isMounted && (
                <IconButton
                  onClick={() =>
                    setTheme(
                      theme === "dark"
                        ? "light"
                        : theme === "light"
                          ? "system"
                          : "dark",
                    )
                  }
                  variant={"soft"}
                  className={"cursor-pointer"}
                >
                  {theme === "light" ? (
                    <SunIcon width="18" height="18" />
                  ) : theme === "dark" ? (
                    <MoonIcon width="18" height="18" />
                  ) : (
                    <MonitorSmartphoneIcon width="18" height="18" />
                  )}
                </IconButton>
              )}
              <Link href={`https://github.com/youssefbenlemlih/resources`}>
                <IconButton className={"cursor-pointer "}>
                  <GithubIcon width="18" height="18" />
                </IconButton>
              </Link>
            </Flex>
          </nav>
          <main className={"px-4 py-8 mx-auto max-w-6xl min-h-[80vh]"}>
            {children}
          </main>
          <footer
            className={
              "p-4 flex justify-between items-center max-w-6xl mx-auto border-t-2 border-[--gray-6]"
            }
          >
            {/*<EditOnGithub />*/}
          </footer>
        </div>
      </Theme>
    </MantineProvider>
  );
}
