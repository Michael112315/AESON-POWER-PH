import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Retail Partners',
}

const dealers = [
  {
     city: "Bacolod",
    cityImage: "http://maroon-partridge-424184.hostingersite.com/wp-content/uploads/2026/07/Retail-partners-bacolod-1-scaled.webp",
    logo: "http://maroon-partridge-424184.hostingersite.com/wp-content/uploads/2026/07/Kenpro-Logo-.webp",
    stores: 1,
    name: "KENPRO / BETTER BATTERIES BACOLOD",
    address:
      "Luxur Place, Magsaysay Avenue, Singcang, Bacolod City, Negros Occidental",
    phone: "+639273179178",
  },
  {
   city: "Iloilo",
    cityImage: "http://maroon-partridge-424184.hostingersite.com/wp-content/uploads/2026/07/iloilo-scaled.webp",
    logo: "http://maroon-partridge-424184.hostingersite.com/wp-content/uploads/2026/07/ChatGPT-Image-Jul-15-2026-11_03_42-AM.webp",
    stores: 1,
    name: "Ilo-Ilo Auto Supply",
    address:
      "Corner Ledesma Street, Valeria Street, Iloilo City, Iloilo, Philippines",
    phone: "+639173030300",
  },
  {
    city: "Roxas",
    cityImage: "http://maroon-partridge-424184.hostingersite.com/wp-content/uploads/2026/07/IMG_8648.webp",
    logo: "http://maroon-partridge-424184.hostingersite.com/wp-content/uploads/2026/07/ChatGPT-Image-Jul-15-2026-11_03_42-AM.webp",
    stores: 1,
    name: "One Auto Supply",
    address:
      "Brgy. Banica, Roxas City 5800, Philippines",
    phone: "+639189442470",
  },
  {
     city: "Tacloban",
    cityImage: "http://maroon-partridge-424184.hostingersite.com/wp-content/uploads/2026/07/Tacloban.webp",
    logo: "http://maroon-partridge-424184.hostingersite.com/wp-content/uploads/2026/07/ChatGPT-Image-Jul-15-2026-11_03_42-AM.webp",
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
        <section
  style={{
    position: "relative",
    height: "620px",
    overflow: "hidden",
    color: "#fff",
  }}
>
  {/* Top Images */}
  <div
    style={{
      display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      height: "100%",
    }}
  >
    <div
      style={{
        backgroundImage: "url('http://maroon-partridge-424184.hostingersite.com/wp-content/uploads/2026/07/heading-bacolod.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />

    <div
      style={{
        backgroundImage: "url('http://maroon-partridge-424184.hostingersite.com/wp-content/uploads/2026/07/heading-tacloban.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />

    <div
      style={{
        backgroundImage: "url('http://maroon-partridge-424184.hostingersite.com/wp-content/uploads/2026/07/heading-iloilo.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />

        <div
      style={{
        backgroundImage: "url('http://maroon-partridge-424184.hostingersite.com/wp-content/uploads/2026/07/heading-roxas.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
    
  </div>

  {/* Overlay */}
  <div
    style={{
      position: "absolute",
      inset: 0,
      background: "rgba(10,20,40,.65)",
    }}
  />

  {/* Content */}
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
        AESON POWER DEALER
      </span>
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

  {/* Floating White Box */}
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
      gridTemplateColumns: "repeat(4,1fr)",
      gap: "30px",
      color: "#222",
      boxShadow: "0 20px 50px rgba(0,0,0,.2)",
    }}
  >
    <div style={{ textAlign: "center" }}>
      <i
        className="fas fa-store"
        style={{
          color: "#E87722",
          fontSize: "32px",
        }}
      ></i>

      <h3>Authorised Dealers</h3>

      <p>All stores are official Aeson Power retailers.</p>
    </div>

    <div style={{ textAlign: "center" }}>
      <i
        className="fas fa-map-marker-alt"
        style={{
          color: "#E87722",
          fontSize: "32px",
        }}
      ></i>

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
      ></i>

      <h3>Expert Support</h3>

      <p>Get assistance from trusted dealers.</p>
    </div>

    <div style={{ textAlign: "center" }}>
      <i
        className="fas fa-shield-alt"
        style={{
          color: "#E87722",
          fontSize: "32px",
        }}
      ></i>

      <h3>Warranty Coverage</h3>

      <p>Every dealer supports official warranty claims.</p>
    </div>
  </div>
</section>

<div style={{ height: "90px" }}></div>
      {/* Dealers */}
      <section className="section">
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

