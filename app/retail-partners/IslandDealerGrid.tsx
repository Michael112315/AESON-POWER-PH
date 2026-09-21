"use client";

import { useState } from "react";

type Dealer = {
  city: string;
  cityImage: string;
  logo: string;
  stores: number;
  name: string;
  address: string;
  phone: string;
  branches?: any[];
};

type Props = {
  dealers: Dealer[];
};

export default function IslandDealerGrid({ dealers }: Props) {
  const [selectedIsland, setSelectedIsland] = useState("VISAYAS");

  const islandCities: Record<string, string[]> = {
    LUZON: ["Laguna", "Olongapo"],
    VISAYAS: [
      "Bacolod",
      "Bohol",
      "Cebu",
      "Iloilo",
      "Roxas",
      "Tacloban",
    ],
    MINDANAO: [],
  };

  const filteredDealers = dealers.filter((dealer) =>
    islandCities[selectedIsland].includes(dealer.city)
  );

  return (
    <>
      {/* ISLAND SELECTOR */}
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
            justifyContent: "center",
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
                padding: "10px 15px",
                cursor: "pointer",
                fontSize: "12px",
                fontWeight: 600,
                background:
                  selectedIsland === island
                    ? "#E87722"
                    : "transparent",
                color:
                  selectedIsland === island
                    ? "#fff"
                    : "#555",
                transition: "all .25s ease",
              }}
            >
              {island}
            </button>
          ))}
        </div>
      </div>

      {/* SELECTED ISLAND TITLE */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "25px",
        }}
      >
        <h2
          style={{
            margin: 0,
            color: "#102A56",
            fontSize: "28px",
            fontWeight: 700,
          }}
        >
          {selectedIsland}
        </h2>

        <p
          style={{
            margin: "5px 0 0",
            color: "#888",
            fontSize: "12px",
          }}
        >
          Choose a location to view our retail partners.
        </p>
      </div>

      {/* DEALERS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(330px,1fr))",
          gap: "2rem",
        }}
      >
        {filteredDealers.map((dealer, index) => (
          <div
            key={index}
            className="reveal"
            style={{
              background: "#fff",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 15px 35px rgba(0,0,0,.08)",
            }}
          >
            {/* CITY IMAGE */}
            <div
              style={{
                height: "210px",
                backgroundImage: `url(${dealer.cityImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,.65), rgba(0,0,0,.15))",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  bottom: "20px",
                  left: "20px",
                  color: "#fff",
                }}
              >
                <h2
                  style={{
                    margin: 0,
                    fontSize: "32px",
                    fontWeight: 700,
                  }}
                >
                  {dealer.city.toUpperCase()}
                </h2>

                <span
                  style={{
                    background: "#E87722",
                    padding: "5px 12px",
                    borderRadius: "20px",
                    fontSize: "12px",
                    fontWeight: 600,
                  }}
                >
                  {dealer.stores} STORE
                </span>
              </div>
            </div>

            {/* STORE LOGO */}
            <div
              style={{
                width: "110px",
                height: "110px",
                margin: "-55px auto 20px",
                borderRadius: "50%",
                background: "#fff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                boxShadow:
                  "0 8px 20px rgba(0,0,0,.15)",
                overflow: "hidden",
              }}
            >
              <img
                src={dealer.logo}
                alt={dealer.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  background: "#000",
                }}
              />
            </div>

            {/* CEBU SPECIAL COMPONENT */}
            {dealer.city === "Cebu" &&
            dealer.branches ? (
              <div style={{ paddingBottom: "20px" }}>
                {/* 
                  Your existing CebuBranches component
                  can remain here.
                */}
              </div>
            ) : (
              <div
                style={{
                  padding: "0 25px 30px",
                  textAlign: "center",
                }}
              >
                <h3
                  style={{
                    marginBottom: "15px",
                    fontSize: "22px",
                    color: "#102A56",
                  }}
                >
                  {dealer.name}
                </h3>

                <p
                  style={{
                    color: "#666",
                    lineHeight: 1.6,
                    minHeight: "70px",
                  }}
                >
                  <i
                    className="fas fa-map-marker-alt"
                    style={{
                      color: "#E87722",
                    }}
                  />{" "}
                  {dealer.address}
                </p>

                <p
                  style={{
                    fontWeight: 600,
                    marginBottom: "25px",
                  }}
                >
                  <i
                    className="fas fa-phone"
                    style={{
                      color: "#E87722",
                    }}
                  />{" "}
                  {dealer.phone}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* NO DEALERS */}
      {filteredDealers.length === 0 && (
        <div
          style={{
            textAlign: "center",
            padding: "50px 20px",
            color: "#777",
          }}
        >
          <i
            className="fas fa-store"
            style={{
              fontSize: "35px",
              color: "#E87722",
              marginBottom: "15px",
            }}
          />

          <h3>No retail partners yet</h3>

          <p>
            There are currently no dealers listed
            in {selectedIsland}.
          </p>
        </div>
      )}
    </>
  );
}