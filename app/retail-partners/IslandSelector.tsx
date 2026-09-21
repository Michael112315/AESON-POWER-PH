"use client";

import { useState } from "react";

export default function IslandSelector({
  children,
}: {
  children: React.ReactNode;
}) {
  const [selectedIsland, setSelectedIsland] = useState("VISAYAS");

  return (
    <>
      <div
        style={{
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        <h3
          style={{
            margin: "0 0 10px",
            fontSize: "16px",
            color: "#102A56",
            fontWeight: 700,
          }}
        >
          Select an Island
        </h3>

        <div
          style={{
            display: "flex",
            maxWidth: "500px",
            margin: "0 auto",
            gap: "4px",
            background: "#F1F5F9",
            padding: "4px",
            borderRadius: "8px",
          }}
        >
          {["LUZON", "VISAYAS", "MINDANAO"].map((island) => (
            <button
              key={island}
              type="button"
              onClick={() => setSelectedIsland(island)}
              style={{
                flex: 1,
                border: "none",
                borderRadius: "7px",
                padding: "10px",
                cursor: "pointer",
                fontWeight: 600,
                background:
                  selectedIsland === island
                    ? "#E87722"
                    : "transparent",
                color:
                  selectedIsland === island
                    ? "#fff"
                    : "#555",
              }}
            >
              {island}
            </button>
          ))}
        </div>
      </div>

      {children}
    </>
  );
}