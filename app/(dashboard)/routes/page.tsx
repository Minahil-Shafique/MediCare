"use client";
import React, { useEffect } from "react";
import { settings } from "@/config/settings";
import { redirect } from "next/navigation";
import { routes } from "@/config/routes";

// @Constants
const LiStyle = "mb-4 font-normal font-sans ml-8 list-disc";
const H2Style = "mt-8 font-bold";

// @Functions
function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function separateCamelCase(string: string) {
  return string.replace(/([a-z])([A-Z])/g, "$1 $2");
}

export default function Routes() {
  useEffect(() => {
    if (!settings.inDevelopment) redirect(routes.basic.home);
  }, []);
  return (
    <>
      <h1 className="text-2xl font-bold">All Routes</h1>
      <>
        {Object.entries(routes).map(([key, value]) => {
          // Capitalize and separate camel case for the key
          const capitalizedKey = capitalizeFirstLetter(separateCamelCase(key));

          if (typeof value === "string") {
            return (
              <li key={key} className={LiStyle}>
                <a href={value}>{capitalizedKey}</a>
              </li>
            );
          }

          if (typeof value === "function") {
            // @ts-ignore
            const route = value();
            return (
              <li key={key} className={LiStyle}>
                <a href={route}>{capitalizedKey}</a>
              </li>
            );
          }

          if (typeof value === "object") {
            return (
              <>
                <h2 className={H2Style}>{capitalizedKey}</h2>
                <ul>
                  {Object.entries(value).map(
                    ([nestedKey, nestedValue], index) => {
                      // Capitalize and separate camel case for the nested key
                      const capitalizedNestedKey = capitalizeFirstLetter(
                        separateCamelCase(nestedKey)
                      );
                      return (
                        <li key={index} className={LiStyle}>
                          <a
                            href={
                              typeof nestedValue === "string"
                                ? nestedValue
                                : // @ts-ignore
                                  nestedValue()
                            }
                            target="_blank"
                          >
                            {capitalizedNestedKey}
                          </a>
                        </li>
                      );
                    }
                  )}
                </ul>
              </>
            );
          }
          return null;
        })}
      </>
    </>
  );
}

function PageStructure() {
  return <></>;
}
