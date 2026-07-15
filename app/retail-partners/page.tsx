import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Retail Partners',
}

const dealers = [
  {
     city: "Bacolod",
    cityImage: "https://maroon-partridge-424184.hostingersite.com/wp-content/uploads/2026/07/Retail-partners-bacolod-1-scaled.webp",
    logo: "https://maroon-partridge-424184.hostingersite.com/wp-content/uploads/2026/07/Kenpro-Logo-.webp",
    stores: 1,
    name: "KENPRO / BETTER BATTERIES BACOLOD",
    address:
      "Luxur Place, Magsaysay Avenue, Singcang, Bacolod City, Negros Occidental",
    phone: "+639273179178",
  },
  {
   city: "Iloilo",
    cityImage: "https://maroon-partridge-424184.hostingersite.com/wp-content/uploads/2026/07/iloilo-scaled.webp",
    logo: "https://maroon-partridge-424184.hostingersite.com/wp-content/uploads/2026/07/ChatGPT-Image-Jul-15-2026-11_03_42-AM.webp",
    stores: 1,
    name: "Ilo-Ilo Auto Supply",
    address:
      "Corner Ledesma Street, Valeria Street, Iloilo City, Iloilo, Philippines",
    phone: "+639173030300",
  },
  {
    city: "Roxas",
    cityImage: "https://maroon-partridge-424184.hostingersite.com/wp-content/uploads/2026/07/IMG_8648.webp",
    logo: "https://maroon-partridge-424184.hostingersite.com/wp-content/uploads/2026/07/ChatGPT-Image-Jul-15-2026-11_03_42-AM.webp",
    stores: 1,
    name: "One Auto Supply",
    address:
      "Brgy. Banica, Roxas City 5800, Philippines",
    phone: "+639189442470",
  },
  {
     city: "Tacloban",
    cityImage: "https://maroon-partridge-424184.hostingersite.com/wp-content/uploads/2026/07/Tacloban.webp",
    logo: "https://maroon-partridge-424184.hostingersite.com/wp-content/uploads/2026/07/ChatGPT-Image-Jul-15-2026-11_03_42-AM.webp",
    stores: 1,
    name: "Jas Auto Parts Gen. Merchandise",
    address:
      "Door 13-14 Village Center Building, Avenida Veteranos, Tacloban City",
    phone: "+639175978223",
  },
]

export default function RetailPartnersPage() {
  return (
    <>
      {/* Hero */}
           {/* HERO */}
<section
  style={{
    position: "relative",
    height: "720px",
    overflow: "hidden",
  }}
>
  {/* 4 Images */}
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      height: "100%",
    }}
  >
    <div
      style={{
        backgroundImage:
          "url(https://maroon-partridge-424184.hostingersite.com/wp-content/uploads/2026/07/Retail-partners-bacolod-1-scaled.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,.45)",
        }}
      />
    </div>

    <div
      style={{
        backgroundImage:
          "url(https://maroon-partridge-424184.hostingersite.com/wp-content/uploads/2026/07/Tacloban.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,.45)",
        }}
      />
    </div>

    <div
      style={{
        backgroundImage:
          "url(https://maroon-partridge-424184.hostingersite.com/wp-content/uploads/2026/07/iloilo-scaled.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,.45)",
        }}
      />
    </div>

    <div
      style={{
        backgroundImage:
          "url(https://maroon-partridge-424184.hostingersite.com/wp-content/uploads/2026/07/IMG_8648.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,.45)",
        }}
      />
    </div>
  </div>

  {/* Overlay */}
  <div
    style={{
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      color: "#fff",
    }}
  >
    {/* Top */}
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "30px 60px",
      }}
    >
      <img
        src="https://www.aesonpower.com.ph/images/logo-white.png"
        style={{
          height: "40px",
        }}
      />

      <div
        style={{
          display: "flex",
          gap: "40px",
          fontWeight: 600,
        }}
      >
        <span>🏠 BACOLOD</span>
        <span>📍 TACLOBAN</span>
        <span>📍 ILOILO</span>
        <span>📍 ROXAS</span>
      </div>
    </div>

    {/* Center */}
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "58px",
          marginBottom: "15px",
          fontWeight: 800,
        }}
      >
        FIND AN AUTHORISED
        <br />
        <span style={{ color: "#E87722" }}>
          AESON POWER DEALER
        </span>
      </h1>

      <p
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          lineHeight: 1.8,
          fontSize: "18px",
        }}
      >
        Trusted Retail Partners Across the Philippines.
        <br />
        Find your nearest Aeson Power Dealer today.
      </p>
    </div>

    {/* Bottom Cards */}
    <div
      style={{
        width: "90%",
        margin: "0 auto -70px",
        background: "#fff",
        borderRadius: "20px",
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        boxShadow: "0 20px 40px rgba(0,0,0,.15)",
        overflow: "hidden",
      }}
    >
      {[
        ["fa-store","AUTHORISED DEALERS","All official Aeson dealers"],
        ["fa-battery-full","GENUINE PRODUCTS","100% genuine batteries"],
        ["fa-headset","EXPERT SUPPORT","Professional assistance"],
        ["fa-shield-alt","WARRANTY","Official warranty coverage"],
      ].map((item,index)=>(
        <div
          key={index}
          style={{
            padding:"35px",
            textAlign:"center"
          }}
        >
          <i
            className={`fas ${item[0]}`}
            style={{
              color:"#E87722",
              fontSize:"36px",
              marginBottom:"15px"
            }}
          />

          <h3>{item[1]}</h3>

          <p
            style={{
              color:"#666"
            }}
          >
            {item[2]}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Dealers */}
      <section 
        classname ="section"
        style ={{ paddingTop: "170px",
                }}
        >
        <div className="container">

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(330px,1fr))",
              gap: "2rem",
            }}
          >
          {dealers.map((dealer, index) => (
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
    {/* City Image */}
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

    {/* Store Icon */}
    <div
      style={{
      width: "90px",
      height: "90px",
      margin: "-45px auto 20px",
      borderRadius: "50%",
      background: "#fff",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      boxShadow: "0 8px 20px rgba(0,0,0,.15)",
      overflow: "hidden",
      }}
    >
       <img
       src={dealer.logo}
       alt={dealer.name}
       style={{
       width: "75%",
       height: "75%",
       objectFit: "contain",
    }}
  />
      
    </div>

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
          style={{ color: "#E87722" }}
        ></i>{" "}
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
          style={{ color: "#E87722" }}
        ></i>{" "}
        {dealer.phone}
      </p>

    <div
  style={{
    display: "flex",
    justifyContent: "center",
    gap: "12px",
    flexWrap: "wrap",
    marginTop: "20px",
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
      padding: "12px 18px",
      borderRadius: "8px",
      textDecoration: "none",
      fontWeight: 600,
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      transition: "0.3s",
    }}
  >
    <i className="fas fa-map-marker-alt"></i>
    View Map
  </a>

  <a
    href={`https://wa.me/${dealer.phone.replace("+", "")}`}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      background: "#25D366",
      color: "#fff",
      padding: "12px 18px",
      borderRadius: "8px",
      textDecoration: "none",
      fontWeight: 600,
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      transition: "0.3s",
    }}
  >
    <i className="fab fa-whatsapp"></i>
    WhatsApp
  </a>

  <a
    href={`viber://chat?number=${dealer.phone}`}
    style={{
      background: "#7360F2",
      color: "#fff",
      padding: "12px 18px",
      borderRadius: "8px",
      textDecoration: "none",
      fontWeight: 600,
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      transition: "0.3s",
    }}
  >
    <i className="fab fa-viber"></i>
    Viber
  </a>
</div>
    </div>
  </div>
))} 
           
          </div>

          {/* Become Dealer */}

          <div
            style={{
              background: "var(--gray-50)",
              borderRadius: "var(--radius-lg)",
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
                background: "rgba(232,119,34,.1)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.5rem",
                color: "var(--accent)",
                margin: "0 auto 1.25rem",
              }}
            >
              <i className="fas fa-handshake"></i>
            </div>

            <h2
              style={{
                fontSize: "1.6rem",
                marginBottom: ".75rem",
              }}
            >
              Become an Authorised Dealer
            </h2>

            <p
              style={{
                color: "var(--text-muted)",
                maxWidth: "560px",
                margin: "0 auto 2rem",
              }}
            >
              Interested in carrying Aeson Power sodium-ion batteries at your
              shop? We're actively expanding our dealer network across the
              Philippines. Contact us to learn about partnership opportunities.
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
  )
}

