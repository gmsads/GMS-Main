import React, { useState, useEffect } from "react";
import {
  CarFront,
  MapPin,
  Megaphone,
  Users,
  Target,
  CheckCircle,
  HelpCircle,
  Phone,
  MessageCircle,
} from "lucide-react";

const AutoTopsService = ({ navigateTo }) => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200,
  );
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerStyle = {
    minHeight: "100vh",
    backgroundColor: "#f8fafc",
    fontFamily: "Archivo, sans-serif",
  };

  const contentStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: windowWidth < 768 ? "20px 16px 40px" : "30px 20px 60px",
  };

  const titleStyle = {
    fontSize: windowWidth < 768 ? "32px" : "48px",
    fontWeight: "700",
    color: "#1e40af",
    marginBottom: "15px",
    textAlign: "center",
  };

  const subtitleStyle = {
    fontSize: windowWidth < 768 ? "16px" : "18px",
    color: "#6b7280",
    maxWidth: "900px",
    margin: "0 auto 40px auto",
    lineHeight: "1.7",
    textAlign: "center",
  };

  const sectionTitleStyle = {
    fontSize: windowWidth < 768 ? "24px" : "30px",
    fontWeight: "600",
    color: "#1e40af",
    margin: "40px 0 20px 0",
  };

  const paragraphStyle = {
    fontSize: "16px",
    color: "#4b5563",
    lineHeight: "1.75",
    marginBottom: "20px",
  };

  const servicesGridStyle = {
    display: "grid",
    gridTemplateColumns:
      windowWidth < 768 ? "1fr" : "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "30px",
    margin: "30px 0 20px",
  };

  const serviceCardStyle = {
    background: "white",
    borderRadius: "16px",
    padding: "30px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
  };

  const faqContainerStyle = {
    background: "white",
    padding: windowWidth < 768 ? "22px" : "30px",
    borderRadius: "16px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
    marginTop: "40px",
  };

  const faqItemStyle = {
    marginBottom: "20px",
    paddingBottom: "20px",
    borderBottom: "1px solid #e5e7eb",
  };

  /*
   * Put the supplied campaign images in:
   * public/images/auto-rickshaw/
   *
   * Suggested filenames:
   * auto-tops-1.webp
   * auto-tops-2.webp
   * auto-tops-3.webp
   * auto-tops-4.webp
   *
   * You can replace these filenames with your actual images later.
   */
  const campaignImages = [
    {
      src: "/images/auto-rickshaw/auto-tops-1.png",
      alt: "Auto tops advertising in Hyderabad",
    },
    {
      src: "/images/auto-rickshaw/auto-tops-2.png",
      alt: "Auto rickshaw branding campaign in Hyderabad",
    },
    {
      src: "/images/auto-rickshaw/auto-tops-3.png",
      alt: "Branded auto rickshaw outdoor advertising",
    },
    {
      src: "/images/auto-rickshaw/auto-tops-4.png",
      alt: "Auto advertising campaign across Hyderabad",
    },
  ];

  const features = [
    {
      title: "High local visibility",
      desc: "Branded autos travel through crowded roads, junctions, markets and neighbourhoods.",
    },
    {
      title: "Mobile brand exposure",
      desc: "Your advertisement is not limited to one fixed location.",
    },
    {
      title: "Route-focused campaigns",
      desc: "Campaigns can be planned based on the localities relevant to your business.",
    },
    {
      title: "Cost-effective outdoor media",
      desc: "Auto branding can be scaled from a small local campaign to a city-wide fleet campaign.",
    },
    {
      title: "Strong repetition",
      desc: "The same message can be seen by commuters and residents multiple times.",
    },
    {
      title: "Useful for many industries",
      desc: "Real estate, education, healthcare, retail, food, events, finance and local services can all use auto advertising.",
    },
    {
      title: "Works with digital campaigns",
      desc: "Add QR codes, WhatsApp numbers, call tracking numbers or campaign landing pages to connect offline visibility with online enquiries.",
    },
  ];

  const types = [
    {
      icon: <CarFront size={28} />,
      title: "Auto Top Advertising",
      desc: "Promote your business using roof-top advertising panels placed on moving auto rickshaws. This is suitable for high-visibility city campaigns and route-based promotions.",
    },
    {
      icon: <Target size={28} />,
      title: "Auto Rear Panel Branding",
      desc: "Use the rear-facing auto panel to display your logo, offer, project details, contact number or QR code to vehicles following the auto in traffic.",
    },
    {
      icon: <Megaphone size={28} />,
      title: "Auto Side Panel Branding",
      desc: "Side-panel branding gives visibility to pedestrians, passengers, shop visitors and people at traffic signals or roadside locations.",
    },
    {
      icon: <Users size={28} />,
      title: "Full Auto Branding Campaigns",
      desc: "For larger promotions, use multiple branding areas on a fleet of autos for a stronger campaign presence across selected parts of Hyderabad.",
    },
    {
      icon: <MapPin size={28} />,
      title: "Route-Based Auto Advertising",
      desc: "Select auto routes based on your business objective. For example, a school admissions campaign may focus on residential localities and school zones, while a retail campaign may focus on busy market routes.",
    },
    {
      icon: <Megaphone size={28} />,
      title: "Campaign Design and Printing Support",
      desc: "Our team can help create an outdoor-friendly design that is clear, bold and readable from a distance. We also coordinate printing and application of branding material.",
    },
  ];

  const industries = [
    "Real estate developers, channel partners and property launches",
    "Schools, junior colleges, coaching institutes and universities",
    "Hospitals, clinics, diagnostic centres and healthcare brands",
    "Retail stores, showrooms, supermarkets and malls",
    "Restaurants, cafés, cloud kitchens and food brands",
    "Events, exhibitions, entertainment and local activations",
    "Financial services, insurance and loan providers",
    "E-commerce, delivery and app-based businesses",
    "Government awareness and social campaigns",
    "Small and medium local businesses",
  ];

  const realEstatePoints = [
    "Project name and logo",
    "Location or landmark",
    "Starting price, only if approved and accurate",
    "Key project benefit",
    "QR code or WhatsApp number",
    "Direct call number",
    "RERA details wherever required",
    "A simple CTA such as “Book Your Site Visit” or “Call for Details”",
  ];

  const gmsPoints = [
    "Local Hyderabad campaign planning",
    "Auto top and auto branding solutions",
    "Campaign support for selected localities and routes",
    "Artwork, branding and execution coordination",
    "Small, medium and large fleet campaign options",
    "Support for both short-term promotions and longer branding campaigns",
    "Integration with digital marketing and lead-generation activities",
  ];

  const faqs = [
    {
      q: "What is auto rickshaw advertising?",
      a: "Auto rickshaw advertising is an outdoor advertising method in which brand creatives are displayed on auto rickshaws. Common formats include auto tops, rear panels, side panels and full auto branding. Since autos travel through different localities, the advertisement receives mobile visibility across roads, signals, markets and residential areas.",
    },
    {
      q: "What is auto tops advertising service in Hyderabad?",
      a: "Auto tops advertising is the placement of an advertising panel on the top of an auto rickshaw. It helps brands gain visibility in traffic and high-footfall areas. Global Marketing Solutions offers auto top advertising campaign planning, design support, printing coordination and branding execution in Hyderabad.",
    },
    {
      q: "How much does auto rickshaw advertising cost in Hyderabad?",
      a: "The cost depends on the number of autos, branding format, campaign duration, selected routes, design requirements, printing specifications and installation scope. Contact Global Marketing Solutions with your target areas and campaign period for a customised quotation.",
    },
    {
      q: "Which businesses can use auto branding in Hyderabad?",
      a: "Auto branding is suitable for real estate projects, schools, colleges, coaching centres, hospitals, clinics, restaurants, retail stores, showrooms, events, local services, finance businesses and consumer brands. It is particularly useful for businesses that need strong local awareness.",
    },
    {
      q: "Can I choose the areas where the branded autos run?",
      a: "Yes, campaign planning can be done according to your target market, preferred zones and route availability. Depending on operational availability, auto branding can be planned around important business areas, residential catchments, market zones, transport corridors and selected localities in Hyderabad.",
    },
    {
      q: "Which auto advertising format is best?",
      a: "The right format depends on your objective. Auto tops are useful for visible branding in traffic, rear panels help with vehicle-following visibility, and full auto branding gives stronger campaign impact. GMS can recommend a suitable format based on your budget and campaign goal.",
    },
    {
      q: "Can auto rickshaw advertising generate leads?",
      a: "Yes. Add a clear phone number, WhatsApp number, QR code, landing-page URL or special offer code to the branding creative. This allows potential customers to connect with your business directly and helps measure enquiries from the campaign.",
    },
    {
      q: "How long should an auto advertising campaign run?",
      a: "A campaign can be planned for a short promotional period or a longer brand-awareness duration. For better recall, a continuous campaign of at least one to three months is generally more useful than a very short campaign, subject to campaign goals and budget.",
    },
    {
      q: "Does GMS provide design and printing support?",
      a: "Yes. Global Marketing Solutions can support campaign design, print coordination, branding material preparation and execution planning. Final requirements depend on the selected auto advertising format and campaign scope.",
    },
    {
      q: "Do you provide auto rickshaw advertising services near Telangana?",
      a: "GMS is based in Hyderabad and can evaluate campaign requirements for Hyderabad and nearby Telangana locations. Share your desired city, localities, fleet size and campaign duration to confirm service availability.",
    },
  ];

   const handleNavigation = (action, serviceId = null) => {
    if (action === "scrollToTop") {
      navigateTo("main");
      return;
    }

    if (serviceId) {
      navigateTo(serviceId);
    } else if (
      [
        "about",
        "portfolio",
        "clientele",
        "contact",
        "privacy",
        "terms",
      ].includes(action)
    ) {
      navigateTo(action);
    } else {
      navigateTo("main", action);
    }
  };
  
  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        {/* H1 */}
        <div style={{ textAlign: "center", marginBottom: "10px" }}>
          <h1 style={titleStyle}>Auto Rickshaw Advertising in Hyderabad</h1>
          <p style={subtitleStyle}>
            Looking for effective{" "}
            <strong style={{ color: "#000", fontWeight: 700 }}>
              auto rickshaw advertising in Hyderabad
            </strong>
            ? Global Marketing Solutions helps brands reach people across busy
            roads, residential areas, marketplaces, commercial hubs, metro
            stations, hospitals, colleges, and local neighbourhoods through
            impactful auto rickshaw branding campaigns.
          </p>
        </div>

        {/* Introduction */}
        <section>
          <p style={paragraphStyle}>
            Auto rickshaw advertising is one of the most visible outdoor
            advertising formats for brands that want continuous local exposure.
            Unlike a fixed hoarding, branded autos move through multiple routes
            and localities every day, taking your message closer to potential
            customers. From product launches and retail promotions to real
            estate campaigns, hospitals, educational institutions, restaurants,
            events, political awareness and local businesses, auto branding
            gives your campaign strong city-level visibility.
          </p>
          <p style={paragraphStyle}>
            As an experienced{" "}
            <strong style={{ color: "#000", fontWeight: 700 }}>
              auto advertising agency in Hyderabad
            </strong>
            , Global Marketing Solutions plans, executes and manages auto
            rickshaw branding campaigns based on your target areas, campaign
            duration, branding requirement and business objective.
          </p>
        </section>

        {/* Auto Tops Advertising */}
        <section>
          <h2 style={sectionTitleStyle}>
            Auto Tops Advertising Service in Hyderabad
          </h2>
          <p style={paragraphStyle}>
            Our{" "}
            <strong style={{ color: "#000", fontWeight: 700 }}>
              auto tops advertising service in Hyderabad
            </strong>{" "}
            places your brand message on the top panel of auto rickshaws,
            helping your advertisement remain visible in traffic, at signals,
            near shopping areas and along high-footfall routes.
          </p>
          <p style={paragraphStyle}>
            Auto top advertising is ideal for brands that need a clean,
            eye-level outdoor advertising format with repeated public
            visibility. Your campaign can be planned across selected routes or
            spread across multiple parts of Hyderabad depending on your budget
            and target audience.
          </p>
          <p style={paragraphStyle}>
            With professionally designed auto tops, your brand can communicate:
          </p>
          <ul style={{ color: "#4b5563", lineHeight: "1.8" }}>
            <li>New project or business launches</li>
            <li>Store openings and local offers</li>
            <li>Real estate promotions</li>
            <li>Hospital and healthcare campaigns</li>
            <li>Educational admissions</li>
            <li>Restaurant and food-delivery promotions</li>
            <li>Retail, fashion and FMCG offers</li>
            <li>Event, exhibition and brand-activation campaigns</li>
          </ul>
          <p style={paragraphStyle}>
            Global Marketing Solutions manages the campaign process from artwork
            guidance and printing coordination to vehicle selection, branding
            execution and campaign monitoring.
          </p>
        </section>

        {/* Auto Branding */}
        <section>
          <h3 style={sectionTitleStyle}>Auto Branding in Hyderabad</h3>
          <p style={paragraphStyle}>
            Our{" "}
            <strong style={{ color: "#000", fontWeight: 700 }}>
              auto branding in Hyderabad
            </strong>{" "}
            service converts moving auto rickshaws into high-visibility mobile
            advertising vehicles. Branding can be applied to the rear panel,
            side panels, auto top, canopy area or selected vehicle surfaces,
            based on the available format and campaign requirement.
          </p>
          <p style={paragraphStyle}>
            Auto branding works especially well for businesses that want to
            create frequent local recall. When people see the same brand message
            repeatedly during their daily travel, shopping and commuting
            routines, it improves visibility and recognition.
          </p>
          <p style={paragraphStyle}>For better results, we recommend using:</p>
          <ul style={{ color: "#4b5563", lineHeight: "1.8" }}>
            <li>A simple and bold headline</li>
            <li>High-contrast brand colours</li>
            <li>A large logo</li>
            <li>A clear phone number or website</li>
            <li>A QR code for campaigns that need digital leads</li>
            <li>One strong call to action</li>
            <li>A locality-specific message where relevant</li>
          </ul>
          <p style={paragraphStyle}>
            For example, a real estate brand can use an auto top creative with
            the project name, starting price, location, phone number and QR
            code. A campaign operating around LB Nagar, Kukatpally, Gachibowli,
            Hitech City, Kondapur or Secunderabad can use route-based messaging
            according to the nearby target audience.
          </p>
        </section>

        {/* Services */}
        <section>
          <h2 style={sectionTitleStyle}>Our Auto Advertising Services</h2>
          <p style={paragraphStyle}>
            Global Marketing Solutions provides end-to-end{" "}
            <strong style={{ color: "#000", fontWeight: 700 }}>
              auto rickshaw advertising services
            </strong>{" "}
            for businesses in Hyderabad and Telangana.
          </p>

          <div style={servicesGridStyle}>
            {types.map((type, index) => (
              <div key={index} style={serviceCardStyle}>
                <div style={{ color: "#3b82f6", marginBottom: "15px" }}>
                  {type.icon}
                </div>
                <h3
                  style={{
                    fontSize: "20px",
                    color: "#1e40af",
                    marginBottom: "10px",
                  }}
                >
                  {type.title}
                </h3>
                <p style={{ color: "#4b5563", lineHeight: "1.6", margin: 0 }}>
                  {type.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* IMAGE GALLERY — directly after services */}
        <section style={{ marginTop: "45px" }}>
          <h2 style={sectionTitleStyle}>Auto Rickshaw Advertising Campaigns</h2>
          <p style={paragraphStyle}>
            Explore examples of auto tops, auto branding and mobile outdoor
            advertising campaigns.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                windowWidth < 600 ? "1fr" : "repeat(2, minmax(0, 1fr))",
              gap: "20px",
            }}
          >
            {campaignImages.map((image, index) => (
              <div
                key={index}
                style={{
                  overflow: "hidden",
                  borderRadius: "16px",
                  background: "#fff",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                  style={{
                    display: "block",
                    width: "100%",
                    aspectRatio: "16 / 10",
                    objectFit: "fill",
                  }}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose */}
        <section
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "40px",
            marginTop: "50px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              flex: "1 1 500px",
              background: "white",
              padding: "40px",
              borderRadius: "16px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
            }}
          >
            <h2 style={{ ...sectionTitleStyle, marginTop: 0 }}>
              Why Choose Auto Rickshaw Advertising?
            </h2>
            <p style={paragraphStyle}>
              Auto rickshaw advertising is useful because it brings mobility,
              repeated exposure and local visibility together in one outdoor
              advertising format.
            </p>

            <ul style={{ listStyle: "none", padding: 0 }}>
              {features.map((feature, idx) => (
                <li
                  key={idx}
                  style={{
                    marginBottom: "15px",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                  }}
                >
                  <CheckCircle
                    size={20}
                    color="#10b981"
                    style={{ flexShrink: 0, marginTop: "6px" }}
                  />
                  <div>
                    <strong style={{ color: "#1f2937" }}>
                      {feature.title}:
                    </strong>{" "}
                    <span style={{ color: "#4b5563" }}>{feature.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div
            style={{
              flex: "1 1 300px",
              background: "#1e40af",
              padding: "40px",
              borderRadius: "16px",
              color: "white",
            }}
          >
            <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>
              Industries We Serve
            </h2>
            <p style={{ lineHeight: "1.7", opacity: 0.9 }}>
              Our{" "}
              <strong style={{ color: "#000", fontWeight: 700 }}>
                auto advertising services in Hyderabad
              </strong>{" "}
              are suitable for:
            </p>
            <ul style={{ paddingLeft: "20px" }}>
              {industries.map((ind, idx) => (
                <li
                  key={idx}
                  style={{
                    marginBottom: "12px",
                    lineHeight: "1.5",
                    opacity: 0.9,
                  }}
                >
                  {ind}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Detailed service sections */}
        <section>
          <h2 style={sectionTitleStyle}>Auto Top Advertising</h2>
          <p style={paragraphStyle}>
            Promote your business using roof-top advertising panels placed on
            moving auto rickshaws. This is suitable for high-visibility city
            campaigns and route-based promotions.
          </p>

          <h2 style={sectionTitleStyle}>Auto Rear Panel Branding</h2>
          <p style={paragraphStyle}>
            Use the rear-facing auto panel to display your logo, offer, project
            details, contact number or QR code to vehicles following the auto in
            traffic.
          </p>

          <h2 style={sectionTitleStyle}>Auto Side Panel Branding</h2>
          <p style={paragraphStyle}>
            Side-panel branding gives visibility to pedestrians, passengers,
            shop visitors and people at traffic signals or roadside locations.
          </p>

          <h2 style={sectionTitleStyle}>Full Auto Branding Campaigns</h2>
          <p style={paragraphStyle}>
            For larger promotions, use multiple branding areas on a fleet of
            autos for a stronger campaign presence across selected parts of
            Hyderabad.
          </p>

          <h2 style={sectionTitleStyle}>Route-Based Auto Advertising</h2>
          <p style={paragraphStyle}>
            Select auto routes based on your business objective. For example, a
            school admissions campaign may focus on residential localities and
            school zones, while a retail campaign may focus on busy market
            routes.
          </p>

          <h2 style={sectionTitleStyle}>
            Campaign Design and Printing Support
          </h2>
          <p style={paragraphStyle}>
            Our team can help create an outdoor-friendly design that is clear,
            bold and readable from a distance. We also coordinate printing and
            application of branding material.
          </p>
        </section>

        {/* Real Estate */}
        <section
          style={{
            background: "#f0f9ff",
            padding: windowWidth < 768 ? "25px" : "40px",
            borderRadius: "16px",
            borderLeft: "5px solid #3b82f6",
            marginTop: "40px",
            marginBottom: "40px",
          }}
        >
          <h2 style={{ ...sectionTitleStyle, marginTop: 0 }}>
            Auto Rickshaw Advertising for Real Estate
          </h2>
          <p style={paragraphStyle}>
            For real estate marketing, auto rickshaw advertising is useful for
            promoting apartments, villas, plotted developments, commercial
            spaces and new project launches. A moving campaign can support site
            visits, lead generation and brand awareness in key catchment areas.
          </p>

          <p style={paragraphStyle}>
            A real estate auto branding creative should include:
          </p>
          <ul style={{ color: "#4b5563", lineHeight: "1.8" }}>
            {realEstatePoints.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>

          <p style={{ ...paragraphStyle, marginBottom: 0 }}>
            For better lead tracking, use a dedicated phone number, QR code or
            campaign-specific landing page instead of only a general website
            URL.
          </p>
        </section>

        {/* Why GMS */}
        <section>
          <h2 style={sectionTitleStyle}>
            Why Choose Global Marketing Solutions?
          </h2>
          <p style={paragraphStyle}>
            Global Marketing Solutions is a Hyderabad-based branding, printing,
            advertising, events and digital marketing agency. The company
            positions itself as a full-service advertising provider, which
            allows clients to combine auto branding with other campaign formats
            such as printing, outdoor media, digital advertising and event
            promotions.
          </p>

          <p style={paragraphStyle}>Choose GMS for:</p>
          <ul style={{ color: "#4b5563", lineHeight: "1.8" }}>
            {gmsPoints.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <section
          style={{
            textAlign: "center",
            marginTop: "60px",
            padding: windowWidth < 768 ? "28px 20px" : "40px",
            background: "white",
            borderRadius: "16px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
          }}
        >
          <h2
            style={{ fontSize: "26px", color: "#1e40af", marginBottom: "20px" }}
          >
            Get a Free Quote for Auto Rickshaw Advertising
          </h2>
          <p
            style={{
              color: "#4b5563",
              marginBottom: "30px",
              maxWidth: "700px",
              margin: "0 auto 30px",
              lineHeight: "1.7",
            }}
          >
            Need an{" "}
            <strong style={{ color: "#000", fontWeight: 700 }}>
              auto rickshaw advertising agency in Hyderabad
            </strong>{" "}
            for your next promotion? Share your campaign objective, target
            localities, campaign duration, number of autos and branding format
            required.
          </p>
          <p
            style={{
              color: "#4b5563",
              maxWidth: "800px",
              margin: "0 auto 30px",
              lineHeight: "1.7",
            }}
          >
            Global Marketing Solutions can help you plan an auto tops
            advertising campaign, auto branding campaign or route-based mobile
            advertising campaign for Hyderabad and nearby Telangana markets.
          </p>
          <p style={{ color: "#4b5563", lineHeight: "1.7" }}>
            If you're looking for a reliable{" "}
            <strong>auto advertising agency in Hyderabad</strong>
            or want to explore{" "}
            <strong style={{ color: "#000", fontWeight: 700 }}>
              auto rickshaw advertising services
            </strong>{" "}
            tailored to your budget and target locations, Global Marketing
            Solutions can help you plan a campaign from scratch.
          </p>

          <p style={{ color: "#4b5563", lineHeight: "1.7" }}>
            Visit{" "}
            <span
              style={{
                cursor: "pointer",
                fontWeight: "600",
                color: "#1e40af",
              }}
              onClick={() => handleNavigation("home")}
              onMouseEnter={(e) => (e.target.style.color = "#60a5fa")}
              onMouseLeave={(e) => (e.target.style.color = "inherit")}
            >
              Global Marketing Solutions
            </span>
            {" "}to request a custom quote for auto top advertising and auto branding
            across Hyderabad and Telangana.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "15px",
              flexWrap: "wrap",
              marginTop: "25px",
            }}
          >
            <a
              href="tel:+919985330008"
              style={{
                background: "#1e40af",
                color: "white",
                padding: "15px 26px",
                borderRadius: "30px",
                textDecoration: "none",
                fontWeight: "bold",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <Phone size={18} />
              Call 9985330008
            </a>

          </div>
        </section>

        {/* YouTube Video — before FAQ */}
        <section
          style={{
            marginTop: "55px",
            marginBottom: "40px",
            textAlign: "center",
          }}
        >
          <h2 style={sectionTitleStyle}>Auto Rickshaw Advertising Video</h2>
          <p style={paragraphStyle}>
            Watch our auto rickshaw advertising campaign video to see auto tops
            and mobile outdoor branding in action.
          </p>

          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "700px",
              margin: "0 auto",
              aspectRatio: "16 / 9",
              borderRadius: "18px",
              overflow: "hidden",
              background: "#000",
              boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/kJt_VtXuOI4?autoplay=1&mute=1&loop=1&playlist=kJt_VtXuOI4&playsinline=1&rel=0"
              title="Auto Rickshaw Advertising in Hyderabad - GMS"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                border: 0,
              }}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />

            {/* Clickable YouTube symbol — opens the original YouTube video */}
            <a
              href="https://youtube.com/shorts/kJt_VtXuOI4?si=wXwhVMyvlYhUQe6k"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Watch this auto advertising video on YouTube"
              title="Watch on YouTube"
              style={{
                position: "absolute",
                right: "16px",
                bottom: "16px",
                width: "54px",
                height: "38px",
                borderRadius: "10px",
                background: "#ff0000",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                boxShadow: "0 4px 14px rgba(0,0,0,0.35)",
                zIndex: 2,
              }}
            >
              <span
                style={{
                  width: 0,
                  height: 0,
                  borderTop: "8px solid transparent",
                  borderBottom: "8px solid transparent",
                  borderLeft: "12px solid white",
                  marginLeft: "3px",
                }}
              />
            </a>
          </div>

          <p
            style={{
              marginTop: "12px",
              marginBottom: 0,
              color: "#6b7280",
              fontSize: "14px",
            }}
          >
            Video plays automatically with sound muted. Click the YouTube button
            to watch it on YouTube.
          </p>
        </section>

        {/* FAQ */}
        <section style={faqContainerStyle}>
          <h2
            style={{
              ...sectionTitleStyle,
              marginTop: 0,
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <HelpCircle size={28} color="#1e40af" />
            Frequently Asked Questions
          </h2>

          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;

            return (
              <div
                key={idx}
                style={{
                  ...faqItemStyle,
                  borderBottom:
                    idx === faqs.length - 1 ? "none" : "1px solid #e5e7eb",
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  style={{
                    width: "100%",
                    border: "none",
                    background: "transparent",
                    padding: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "15px",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <span
                    style={{
                      fontSize: "18px",
                      color: "#000",
                      fontWeight: 700,
                      lineHeight: "1.5",
                    }}
                  >
                    {idx + 1}. {faq.q}
                  </span>

                  <span
                    aria-hidden="true"
                    style={{
                      flexShrink: 0,
                      width: "32px",
                      height: "32px",
                      border: "1px solid #000",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#000",
                      fontSize: "22px",
                      fontWeight: 400,
                      lineHeight: 1,
                    }}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <p
                    style={{
                      color: "#4b5563",
                      lineHeight: "1.6",
                      margin: "12px 47px 0 0",
                    }}
                  >
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default AutoTopsService;
