"use client";

import { useState } from "react";

type Branch = {
  name: string;
  address: string;
  phone?: string;
  facebook?: string;
};

type CebuBranchesProps = {
  mainBranch: Branch;
  branches: Branch[];
};

export default function CebuBranches({
  mainBranch,
  branches,
}: CebuBranchesProps) {

  // FIRST DROPDOWN
  // Controls the 8-branch list
  const [showBranches, setShowBranches] = useState(false);

  // SECOND DROPDOWN
  // Controls which branch details are open
  const [selectedBranch, setSelectedBranch] =
    useState<number | null>(null);

  // Combine Main Branch + 7 other branches
  const allBranches = [
    {
      ...mainBranch,
      name: "Main Branch (Lapu-Lapu)",
    },
    ...branches,
  ];

  return (
    <div
      style={{
        padding: "0 18px 25px",
      }}
    >

      {/* =========================================
          STORE NAME
      ========================================= */}

      <div
        style={{
          textAlign: "center",
          marginBottom: "18px",
        }}
      >

        <h3
          style={{
            margin: "0 0 5px",
            fontSize: "22px",
            fontWeight: 700,
            color: "#102A56",
          }}
        >
          Savers Battery Supply
        </h3>

        <p
          style={{
            margin: 0,
            color: "#777",
            fontSize: "13px",
          }}
        >
          Select a branch to view details
        </p>

      </div>


      {/* =====================================================
          FIRST DROPDOWN
          "8 BRANCHES IN CEBU"
      ===================================================== */}

      <button
        type="button"
        onClick={() => {
          setShowBranches(!showBranches);

          // Close selected branch when main dropdown closes
          if (showBranches) {
            setSelectedBranch(null);
          }
        }}
        style={{
          width: "100%",
          border: "1px solid #D8E6F5",
          borderRadius: "14px",
          background: showBranches
            ? "#EEF6FF"
            : "#FFFFFF",
          cursor: "pointer",
          padding: "15px",
          display: "flex",
          alignItems: "center",
          gap: "12px",
          textAlign: "left",
          transition: "all .25s ease",
        }}
      >

        {/* Icon */}

        <div
          style={{
            width: "44px",
            height: "44px",
            minWidth: "44px",
            borderRadius: "50%",
            background: "#EAF3FF",
            color: "#1677E8",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "18px",
          }}
        >
          <i className="fas fa-store"></i>
        </div>


        {/* Text */}

        <div
          style={{
            flex: 1,
          }}
        >

          <div
            style={{
              color: "#102A56",
              fontWeight: 700,
              fontSize: "16px",
            }}
          >
            8 Branches in Cebu
          </div>

          <div
            style={{
              color: "#777",
              fontSize: "12px",
              marginTop: "3px",
            }}
          >
            Select a branch
          </div>

        </div>


        {/* Arrow */}

        <div
          style={{
            width: "34px",
            height: "34px",
            minWidth: "34px",
            borderRadius: "50%",
            background: "#EAF3FF",
            color: "#1677E8",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transform: showBranches
              ? "rotate(180deg)"
              : "rotate(0deg)",
            transition: "transform .25s ease",
          }}
        >
          <i className="fas fa-chevron-down"></i>
        </div>

      </button>


      {/* =====================================================
          CONTENT OF FIRST DROPDOWN
          ALL 8 BRANCHES
      ===================================================== */}

      {showBranches && (

        <div
          style={{
            marginTop: "8px",
            border: "1px solid #DCE7F3",
            borderRadius: "14px",
            background: "#fff",
            overflow: "hidden",
          }}
        >

          {allBranches.map((branch, index) => {

            const isSelected =
              selectedBranch === index;

            return (

              <div
                key={index}
                style={{
                  borderBottom:
                    index === allBranches.length - 1
                      ? "none"
                      : "1px solid #E8EEF5",

                  background: isSelected
                    ? "#F4F9FF"
                    : "#fff",
                }}
              >

                {/* =========================================
                    SECOND DROPDOWN / BRANCH HEADER
                ========================================= */}

                <button
                  type="button"
                  onClick={() =>
                    setSelectedBranch(
                      isSelected ? null : index
                    )
                  }
                  style={{
                    width: "100%",
                    border: "none",
                    background: "transparent",
                    cursor: "pointer",
                    padding: "13px 12px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    textAlign: "left",
                  }}
                >

                  {/* Number */}

                  <div
                    style={{
                      width: "38px",
                      height: "38px",
                      minWidth: "38px",
                      borderRadius: "50%",
                      background: isSelected
                        ? "#1677E8"
                        : "#EAF3FF",
                      color: isSelected
                        ? "#fff"
                        : "#1677E8",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                      fontSize: "14px",
                    }}
                  >
                    {index + 1}
                  </div>


                  {/* Branch Name + Address */}

                  <div
                    style={{
                      flex: 1,
                      minWidth: 0,
                    }}
                  >

                    <div
                      style={{
                        color: "#102A56",
                        fontWeight: 700,
                        fontSize: "14px",
                        lineHeight: 1.3,
                      }}
                    >
                      {branch.name}
                    </div>

                    <div
                      style={{
                        display: "flex",
                        gap: "5px",
                        alignItems: "flex-start",
                        marginTop: "4px",
                        color: "#777",
                        fontSize: "11px",
                        lineHeight: 1.4,
                      }}
                    >

                      <i
                        className="fas fa-map-marker-alt"
                        style={{
                          color: "#E87722",
                          marginTop: "2px",
                        }}
                      />

                      <span>
                        {branch.address}
                      </span>

                    </div>

                  </div>


                  {/* Branch Arrow */}

                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      minWidth: "32px",
                      borderRadius: "50%",
                      background: "#EAF3FF",
                      color: "#1677E8",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transform: isSelected
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                      transition:
                        "transform .25s ease",
                    }}
                  >
                    <i className="fas fa-chevron-down"></i>
                  </div>

                </button>


                {/* =================================================
                    SECOND DROPDOWN CONTENT
                    MAP + PHONE + FACEBOOK + VIBER
                ================================================= */}

                {isSelected && (

                  <div
                    style={{
                      padding:
                        "5px 14px 16px 60px",
                      background: "#F4F9FF",
                    }}
                  >

                    {/* PHONE */}

                    {branch.phone && (

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          marginBottom: "12px",
                        }}
                      >

                        <i
                          className="fas fa-phone"
                          style={{
                            color: "#E87722",
                          }}
                        />

                        <a
                          href={`tel:${branch.phone}`}
                          style={{
                            color: "#102A56",
                            fontWeight: 600,
                            fontSize: "13px",
                            textDecoration: "none",
                          }}
                        >
                          {branch.phone}
                        </a>

                      </div>

                    )}


                    {/* BUTTONS */}

                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "7px",
                      }}
                    >

                      {/* VIEW MAP */}

                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                          branch.address
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          background: "#E87722",
                          color: "#fff",
                          padding: "10px 13px",
                          borderRadius: "8px",
                          textDecoration: "none",
                          fontWeight: 600,
                          fontSize: "12px",
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "6px",
                          flex: "1 1 100px",
                        }}
                      >

                        <i className="fas fa-map-marker-alt"></i>

                        View Map

                      </a>


                      {/* FACEBOOK */}

                      {branch.facebook && (

                        <a
                          href={branch.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            background: "#1877F2",
                            color: "#fff",
                            padding: "10px 13px",
                            borderRadius: "8px",
                            textDecoration: "none",
                            fontWeight: 600,
                            fontSize: "12px",
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "6px",
                            flex: "1 1 100px",
                          }}
                        >

                          <i className="fab fa-facebook-f"></i>

                          Facebook Page

                        </a>

                      )}


                      {/* VIBER */}

                      {branch.phone && (

                        <a
                          href={`viber://chat?number=${branch.phone}`}
                          style={{
                            background: "#7360F2",
                            color: "#fff",
                            padding: "10px 13px",
                            borderRadius: "8px",
                            textDecoration: "none",
                            fontWeight: 600,
                            fontSize: "12px",
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "6px",
                            flex: "1 1 100px",
                          }}
                        >

                          <i className="fab fa-viber"></i>

                          Viber

                        </a>

                      )}

                    </div>

                  </div>

                )}

              </div>

            );

          })}

        </div>

      )}


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <div
        style={{
          marginTop: "14px",
          padding: "12px",
          borderRadius: "12px",
          background: "#EEF6FF",
          textAlign: "center",
          color: "#1677E8",
          fontSize: "11px",
          fontWeight: 600,
        }}
      >

        <i
          className="fas fa-map-marker-alt"
          style={{
            marginRight: "6px",
          }}
        />

        Quality Batteries. Closer to You.

      </div>

    </div>
  );
}