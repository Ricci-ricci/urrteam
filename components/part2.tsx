"use client";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiVite,
  SiGit,
  SiGithub,
  SiRedux,
  SiFramer,
  SiShadcnui,
} from "react-icons/si";

import Container from "./layout/container";
import Section from "./layout/section";

const techLogos = [
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiVite,
  SiGit,
  SiGithub,
  SiRedux,
  SiFramer,
  SiShadcnui,
];

export default function Part2() {
  return (
    <Container classname="overflow-hidden">
      <Section>
        <div
          style={{
            overflow: "hidden",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "2rem",
              width: "max-content",
              animation: "marquee 25s linear infinite",
            }}
          >
            {[...techLogos, ...techLogos].map((Icon, i) => (
              <Icon
                key={i}
                style={{
                  width: "96px",
                  height: "96px",
                  color: "var(--muted-foreground)",
                  transition: "color 0.3s",
                }}
              />
            ))}
          </div>
        </div>
        <style>
          {`
            @keyframes marquee {
              from {
                transform: translateX(0);
              }
              to {
                transform: translateX(-50%);
              }
            }
          `}
        </style>
      </Section>
    </Container>
  );
}
