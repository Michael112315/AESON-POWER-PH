"use client";

import { useEffect, useState } from "react";
import CebuBranches from "./CebuBranches";

const dealers = [
  {
    city: "Bacolod",
    cityImage:
      "http://maroon-partridge-424184.hostingersite.com/wp-content/uploads/2026/07/Retail-partners-bacolod-1-scaled.webp",
    logo:
      "http://maroon-partridge-424184.hostingersite.com/wp-content/uploads/2026/09/Store-Profile-1.webp",
    stores: 1,
    name: "Better Batteries Bacolod",
    address:
      "Magsaysay Ave Bacolod 6100 Negros Occidental Bacolod City Philippines",
    phone: "+639273179178",
  },

  {
    city: "Bohol",
    cityImage:
      "https://maroon-partridge-424184.hostingersite.com/wp-content/uploads/2026/09/ChatGPT-Image-Sep-9-2026-02_31_34-PM.webp",
    logo:
      "http://maroon-partridge-424184.hostingersite.com/wp-content/uploads/2026/09/Store-Profile-1.webp",
    stores: 2,
    name: "Rensal Tire Supply",
    address:
      "Highway CPG Taloto District Tagbilaran City Bohol Philippines",
    phone: "+639778353757",
  },

  {
    city: "Cebu",
    cityImage:
      "http://maroon-partridge-424184.hostingersite.com/wp-content/uploads/2026/09/Cebucity.webp",
    logo:
      "http://maroon-partridge-424184.hostingersite.com/wp-content/uploads/2026/09/Store-Profile-1.webp",
    stores: 8,

    name: "Savers Battery Supply",
    address: "Poblacion Lapu2x City Cebu Philippines",
    phone: "+639177775776",

    branches: [
      {
        name: "Savers Tire Supply Awayan",
        address: "Highway Awayan Carcar Cebu Philippines",
        phone: "",
        facebook: "",
      },
      {
        name: "Savers Tire Supply Perrelos",
        address: "Highway Perrelos Carcar Cebu Philippines",
        phone: "",
        facebook: "",
      },
      {
        name: "Savers Tire Supply Tunghaan",
        address: "Highway Tunghaan Minglanilla Cebu Philippines",
        phone: "",
        facebook: "",
      },
      {
        name: "Savers Tire Supply Calajoan",
        address: "Highway Calajoan Minglanilla Cebu Philippines",
        phone: "",
        facebook: "",
      },
      {
        name: "Jersal Tire Supply Minglanilla",
        address: "Highway Pakigne Minglanilla Cebu Philippines",
        phone: "",
        facebook: "",
      },
      {
        name: "Savers Tire Supply Liloan",
        address: "Highway Tayud Liloan Cebu Philippines",
        phone: "",
        facebook: "",
      },
      {
        name: "Savers Tire Supply Danao",
        address: "Highway Sabang Danao City Cebu Philippines",
        phone: "",
        facebook: "",
      },
    ],
  },

  {
    city: "Laguna",
    cityImage:
      "http://maroon-partridge-424184.hostingersite.com/wp-content/uploads/2026/09/laguna.webp",
    logo:
      "http://maroon-partridge-424184.hostingersite.com/wp-content/uploads/2026/09/Store-Profile-1.webp",
    stores: 1,
    name: "Makarios Builders Depot",
    address: "Nuvali, Sta.Rosa Laguna Philippines",
    phone: "+639177816410",
  },

  {
    city: "Iloilo",
    cityImage:
      "http://maroon-partridge-424184.hostingersite.com/wp-content/uploads/2026/07/iloilo-scaled.webp",
    logo:
      "http://maroon-partridge-424184.hostingersite.com/wp-content/uploads/2026/09/Store-Profile-1.webp",
    stores: 1,
    name: "ILOILO Auto Supply",
    address:
      "Corner Ledesma Street Valeria Street Iloilo City Iloilo Philippines",
    phone: "+639173030300",
  },

  {
    city: "Olongapo",
    cityImage:
      "https://maroon-partridge-424184.hostingersite.com/wp-content/uploads/2026/09/ChatGPT-Image-Sep-15-2026-01_26_58-PM.webp",
    logo:
      "http://maroon-partridge-424184.hostingersite.com/wp-content/uploads/2026/09/Store-Profile-1.webp",
    stores: 1,
    name: "ADD Garbes Servitek",
    address:
      "# 9 CBMU Upper Kalaklan Olongapo City Zambales Philippines",
    phone: "+639175906552",
  },

  {
    city: "Roxas",
    cityImage:
      "http://maroon-partridge-424184.hostingersite.com/wp-content/uploads/2026/07/IMG_8648.webp",
    logo:
      "http://maroon-partridge-424184.hostingersite.com/wp-content/uploads/2026/09/Store-Profile-1.webp",
    stores: 1,
    name: "One Auto Supply",
    address: "Brgy. Banica Roxas City Philippines",
    phone: "+639189442470",
  },

  {
    city: "Tacloban",
    cityImage:
      "http://maroon-partridge-424184.hostingersite.com/wp-content/uploads/2026/07/Tacloban.webp",
    logo:
      "http://maroon-partridge-424184.hostingersite.com/wp-content/uploads/2026/09/Store-Profile-1.webp",
    stores: 1,
    name: "Jas Auto Parts Gen. Merchandise",
    address:
      "Door 13-14 Village Center Building Avenida Veteranos Tacloban City Leyte Philippines",
    phone: "+639175978223",
  },
];

export default function RetailPartnersPage() {

  const [selectedIsland, setSelectedIsland] =
    useState("LUZON");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        {
          name: "LUZON",
          id: "luzon",
        },
        {
          name: "VISAYAS",
          id: "visayas",
        },
        {
          name: "MINDANAO",
          id: "mindanao",
        },
      ];

      const scrollPosition =
        window.scrollY + 250;

      let currentIsland = "LUZON";

      sections.forEach((section) => {
        const element =
          document.getElementById(section.id);

        if (element) {
          if (
            scrollPosition >=
            element.offsetTop
          ) {
            currentIsland = section.name;
          }
        }
      });

      setSelectedIsland(currentIsland);
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  return (

    <>

    
      {/* =====================================================
          HERO
      ===================================================== */}

      

      <section
        style={{
          position: "relative",
          height: "620px",
          overflow: "hidden",
          color: "#fff",
        }}
      >
        {/* TOP IMAGES */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(250px, 1fr))",
            height: "100%",
          }}
        >
          <div
            style={{
              backgroundImage:
                "url('http://maroon-partridge-424184.hostingersite.com/wp-content/uploads/2026/07/heading-bacolod.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <div
            style={{
              backgroundImage:
                "url('http://maroon-partridge-424184.hostingersite.com/wp-content/uploads/2026/07/heading-tacloban.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <div
            style={{
              backgroundImage:
                "url('http://maroon-partridge-424184.hostingersite.com/wp-content/uploads/2026/07/heading-iloilo.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <div
            style={{
              backgroundImage:
                "url('http://maroon-partridge-424184.hostingersite.com/wp-content/uploads/2026/07/heading-roxas.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>

        {/* OVERLAY */}

        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(10,20,40,.65)",
          }}
        />

        {/* CONTENT */}

        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            textAlign: "center",
            padding: "20px",
          }}
        >
          <h1
            style={{
              fontSize: "58px",
              fontWeight: 800,
              marginBottom: "15px",
            }}
          >
            FIND AN AUTHORISED
            <br />

            <span style={{ color: "#E87722" }}>
              AESON POWER
            </span>{" "}
            DEALER
          </h1>

          <p
            style={{
              fontSize: "18px",
              maxWidth: "700px",
            }}
          >
            Trusted Retail Partners Across the Philippines
          </p>
        </div>

        {/* FLOATING WHITE BOX */}

        <div
          style={{
            position: "absolute",
            bottom: "-55px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "90%",
            maxWidth: "1200px",
            background: "#fff",
            borderRadius: "20px",
            padding: "35px",
            display: "grid",
            gridTemplateColumns:
              "repeat(4,1fr)",
            gap: "30px",
            color: "#222",
            boxShadow:
              "0 20px 50px rgba(0,0,0,.2)",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <i
              className="fas fa-store"
              style={{
                color: "#E87722",
                fontSize: "32px",
              }}
            />

            <h3>Authorised Dealers</h3>

            <p>
              All stores are official Aeson Power
              retailers.
            </p>
          </div>

          <div style={{ textAlign: "center" }}>
            <i
              className="fas fa-map-marker-alt"
              style={{
                color: "#E87722",
                fontSize: "32px",
              }}
            />

            <h3>Find Nearby Stores</h3>

            <p>Locate the nearest dealer.</p>
          </div>

          <div style={{ textAlign: "center" }}>
            <i
              className="fas fa-headset"
              style={{
                color: "#E87722",
                fontSize: "32px",
              }}
            />

            <h3>Expert Support</h3>

            <p>
              Get assistance from trusted dealers.
            </p>
          </div>

          <div style={{ textAlign: "center" }}>
            <i
              className="fas fa-shield-alt"
              style={{
                color: "#E87722",
                fontSize: "32px",
              }}
            />

            <h3>Warranty Coverage</h3>

            <p>
              Every dealer supports official warranty
              claims.
            </p>
          </div>
        </div>
      </section>

      <div style={{ height: "90px" }} />

      {/* =====================================================
          RETAIL PARTNERS
      ===================================================== */}

      <section
        className="section"
        style={{
          background: "#F8FAFC",
          padding: "45px 20px",
        }}
      >
        <div
          className="container"
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >

          {/* ISLAND NAVIGATION */}

    {/* ISLAND NAVIGATION */}

<div
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "4px",
    width: "100%",
    maxWidth: "950px",
    margin: "0 auto 45px",
    background: "#fff",
    padding: "6px",
    borderRadius: "16px",
    boxShadow: "0 8px 30px rgba(0,0,0,.07)",
    position: "sticky",
    top: "10px",
    zIndex: 50,
  }}
>
  {["LUZON", "VISAYAS", "MINDANAO"].map(
    (island) => (
      <button
        key={island}
        type="button"
        onClick={() => {
          setSelectedIsland(island);

          const section =
            document.getElementById(
              island.toLowerCase()
            );

          if (section) {
            section.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }}
        style={{
          flex: "1 1 0",
          minWidth: 0,
          border: "none",
          borderRadius: "10px",
          padding: "14px 8px",
          cursor: "pointer",
          fontSize:
            "clamp(12px, 3vw, 16px)",
          fontWeight:
            selectedIsland === island
              ? 800
              : 600,

          background:
            selectedIsland === island
              ? "#E87722"
              : "transparent",

          color:
            selectedIsland === island
              ? "#fff"
              : "#102A56",

          transition:
            "all 0.25s ease",

          minHeight: "48px",
        }}
      >
        {island}
      </button>
    )
  )}
</div>

          {/* CARD RENDERER */}

          {(() => {
            const renderDealerCard = (dealer: (typeof dealers)[number]) => (
              <div
                key={dealer.city}
                className="reveal"
                style={{
                  background: "#fff",
                  borderRadius: "18px",
                  overflow: "hidden",
                  boxShadow: "0 10px 30px rgba(0,0,0,.08)",
                  minWidth: 0,
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
                        "linear-gradient(to top, rgba(0,0,0,.65), rgba(0,0,0,.10))",
                    }}
                  />

                  <div
                    style={{
                      position: "absolute",
                      left: "18px",
                      right: "18px",
                      bottom: "18px",
                      color: "#fff",
                    }}
                  >
                    <h2
                      style={{
                        margin: "0 0 8px",
                        fontSize: "clamp(24px, 4vw, 30px)",
                        fontWeight: 800,
                      }}
                    >
                      {dealer.city.toUpperCase()}
                    </h2>

                    <span
                      style={{
                        display: "inline-block",
                        background: "#E87722",
                        padding: "5px 11px",
                        borderRadius: "20px",
                        fontSize: "11px",
                        fontWeight: 700,
                      }}
                    >
                      {dealer.stores}{" "}
                      {dealer.stores === 1 ? "STORE" : "STORES"}
                    </span>
                  </div>
                </div>

                {/* STORE LOGO */}

                <div
                  style={{
                    width: "90px",
                    height: "90px",
                    margin: "-45px auto 15px",
                    borderRadius: "50%",
                    background: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    boxShadow: "0 6px 18px rgba(0,0,0,.15)",
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
                      display: "block",
                    }}
                  />
                </div>

                {/* CEBU */}

                {dealer.city === "Cebu" && dealer.branches ? (
                  <CebuBranches
                    mainBranch={{
                      name: dealer.name,
                      address: dealer.address,
                      phone: dealer.phone,
                    }}
                    branches={dealer.branches}
                  />
                ) : (
                  /* OTHER DEALERS */

                  <div
                    style={{
                      padding: "0 20px 25px",
                      textAlign: "center",
                    }}
                  >
                    <h3
                      style={{
                        margin: "0 0 12px",
                        fontSize: "20px",
                        color: "#102A56",
                      }}
                    >
                      {dealer.name}
                    </h3>

                    <p
                      style={{
                        color: "#666",
                        lineHeight: 1.5,
                        fontSize: "14px",
                        margin: "0 0 12px",
                      }}
                    >
                      <i
                        className="fas fa-map-marker-alt"
                        style={{
                          color: "#E87722",
                          marginRight: "5px",
                        }}
                      />
                      {dealer.address}
                    </p>

                    <p
                      style={{
                        fontWeight: 600,
                        fontSize: "14px",
                        margin: "0 0 18px",
                      }}
                    >
                      <i
                        className="fas fa-phone"
                        style={{
                          color: "#E87722",
                          marginRight: "5px",
                        }}
                      />
                      {dealer.phone}
                    </p>

                    {/* BUTTONS */}

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "8px",
                        flexWrap: "wrap",
                      }}
                    >
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                          dealer.address
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          background: "#E87722",
                          color: "#fff",
                          padding: "10px 14px",
                          borderRadius: "8px",
                          textDecoration: "none",
                          fontSize: "12px",
                          fontWeight: 600,
                        }}
                      >
                        <i className="fas fa-map-marker-alt" /> Map
                      </a>

                      <a
                        href={`https://wa.me/${dealer.phone.replace("+", "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          background: "#25D366",
                          color: "#fff",
                          padding: "10px 14px",
                          borderRadius: "8px",
                          textDecoration: "none",
                          fontSize: "12px",
                          fontWeight: 600,
                        }}
                      >
                        <i className="fab fa-whatsapp" /> WhatsApp
                      </a>

                      <a
                        href={`viber://chat?number=${dealer.phone}`}
                        style={{
                          background: "#7360F2",
                          color: "#fff",
                          padding: "10px 14px",
                          borderRadius: "8px",
                          textDecoration: "none",
                          fontSize: "12px",
                          fontWeight: 600,
                        }}
                      >
                        <i className="fab fa-viber" /> Viber
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );

            const sections = [
              {
                id: "luzon",
                title: "LUZON",
                cities: ["Laguna", "Olongapo"],
              },
              {
                id: "visayas",
                title: "VISAYAS",
                cities: [
                  "Bacolod",
                  "Bohol",
                  "Cebu",
                  "Iloilo",
                  "Roxas",
                  "Tacloban",
                ],
              },
              {
                id: "mindanao",
                title: "MINDANAO",
                cities: [],
              },
            ];

            return sections.map((section) => {
              const sectionDealers = dealers.filter((dealer) =>
                section.cities.includes(dealer.city)
              );

              return (
                <div
                  key={section.id}
                  id={section.id}
                  style={{
                    scrollMarginTop: "90px",
                    marginBottom: "60px",
                  }}
                >
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
                        fontSize: "clamp(26px, 5vw, 32px)",
                        fontWeight: 800,
                      }}
                    >
                      {section.title}
                    </h2>

                    <p
                      style={{
                        margin: "6px 0 0",
                        color: "#888",
                        fontSize: "14px",
                      }}
                    >
                      Choose a location to view our retail partners.
                    </p>
                  </div>

                  {sectionDealers.length > 0 ? (
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns:
                          "repeat(auto-fit, minmax(min(100%, 330px), 1fr))",
                        gap: "25px",
                      }}
                    >
                      {sectionDealers.map(renderDealerCard)}
                    </div>
                  ) : (
                    <div
                      style={{
                        background: "#fff",
                        borderRadius: "16px",
                        padding: "45px 20px",
                        textAlign: "center",
                        boxShadow: "0 8px 25px rgba(0,0,0,.06)",
                      }}
                    >
                      <i
                        className="fas fa-store"
                        style={{
                          fontSize: "40px",
                          color: "#E87722",
                          marginBottom: "15px",
                        }}
                      />

                      <h3
                        style={{
                          color: "#102A56",
                          marginBottom: "8px",
                        }}
                      >
                        No retail partners yet
                      </h3>

                      <p
                        style={{
                          color: "#777",
                          margin: 0,
                        }}
                      >
                        There are currently no retail partners listed in{" "}
                        {section.title}.
                      </p>
                    </div>
                  )}
                </div>
              );
            });
          })()}

          {/* =================================================
              BECOME DEALER
          ================================================= */}

          <div
            style={{
              background:
                "var(--gray-50)",
              borderRadius:
                "var(--radius-lg)",
              padding: "3rem",
              textAlign: "center",
              marginTop: "5rem",
            }}
            className="reveal"
          >
            <div
              style={{
                width: "60px",
                height: "60px",
                background:
                  "rgba(232,119,34,.1)",
                borderRadius: "50%",
                display: "flex",
                alignItems:
                  "center",
                justifyContent:
                  "center",
                fontSize: "1.5rem",
                color:
                  "var(--accent)",
                margin:
                  "0 auto 1.25rem",
              }}
            >
              <i className="fas fa-handshake" />
            </div>

            <h2
              style={{
                fontSize: "1.6rem",
                marginBottom:
                  ".75rem",
              }}
            >
              Become an Authorised Dealer
            </h2>

            <p
              style={{
                color:
                  "var(--text-muted)",
                maxWidth: "560px",
                margin:
                  "0 auto 2rem",
              }}
            >
              Interested in carrying
              Aeson Power sodium-ion
              batteries at your shop?
              We're actively expanding
              our dealer network across
              the Philippines. Contact us
              to learn about partnership
              opportunities.
            </p>

            <a
              href="mailto:sales@aesonpower.com.ph"
              className="btn btn-primary"
            >
              Enquire About Dealership
            </a>
          </div>
        </div>
      </section>
    </>
  );
}