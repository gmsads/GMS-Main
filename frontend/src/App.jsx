// import React, { useState, useEffect } from "react";
// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Services from "./components/Services";
// import Portfolio from "./components/Portfolio";
// import Clients from "./components/Clients";
// import Clientele from "./components/Clientele";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import ATLService from "./components/services/ATLService";
// import BTLService from "./components/services/BTLService";
// import DigitalService from "./components/services/DigitalService";
// import WebDevService from "./components/services/WebDevService";
// import DesigningService from "./components/services/DesigningService";
// import PrintingService from "./components/services/PrintingService";
// import AutoTopsService from "./components/services/AutoTopsService";
// import PrivacyPolicy from "./components/PrivacyPolicy";
// import TermsConditions from "./components/TermsConditions";
// import EnquiryPopup from "./components/EnquiryPopup";

// function App() {
//   const [currentView, setCurrentView] = useState("main");

//   // Parse current URL and set appropriate view and scroll position
//   const handleRouting = () => {
//     let path = window.location.pathname.toLowerCase();
//     if (path.length > 1 && path.endsWith("/")) {
//       path = path.slice(0, -1);
//     }
//     const hash = window.location.hash.toLowerCase();

//     let view = "main";
//     let sectionId = "";

//     if (path.startsWith("/services/") || path.startsWith("/service/")) {
//       const parts = path.split("/");
//       const service = parts[parts.length - 1];
//       if (
//         [
//           "atl",
//           "btl",
//           "digital",
//           "webdev",
//           "designing",
//           "printing",
//           "auto-tops",
//         ].includes(service)
//       ) {
//         view = service;
//       }
//     } else if (
//       [
//         "/about",
//         "/portfolio",
//         "/clientele",
//         "/contact",
//         "/privacy",
//         "/terms",
//         "/auto-rickshaw-advertising-hyderabad",
//       ].includes(path)
//     ) {
//       view = path.substring(1); // 'about', 'portfolio', 'clientele', 'contact', 'privacy', 'terms', 'auto-rickshaw-advertising-hyderabad'
//     } else if (hash) {
//       const cleanHash = hash.replace("#", "");
//       if (
//         [
//           "atl",
//           "btl",
//           "digital",
//           "webdev",
//           "designing",
//           "printing",
//           "auto-rickshaw-advertising-hyderabad",
//         ].includes(cleanHash)
//       ) {
//         view = cleanHash;
//       } else if (
//         [
//           "about",
//           "portfolio",
//           "clientele",
//           "contact",
//           "privacy",
//           "terms",
//           "home",
//         ].includes(cleanHash)
//       ) {
//         view = "main";
//         sectionId = cleanHash === "home" ? "" : cleanHash;
//       }
//     }

//     setCurrentView(view);

//     if (view === "main") {
//       if (sectionId) {
//         setTimeout(() => {
//           const element = document.getElementById(sectionId);
//           if (element) {
//             element.scrollIntoView({ behavior: "smooth" });
//           }
//         }, 150);
//       } else {
//         window.scrollTo({ top: 0 });
//       }
//     } else {
//       window.scrollTo({ top: 0 });
//     }
//   };

//   // Setup routing listener
//   useEffect(() => {
//     handleRouting();
//     window.addEventListener("popstate", handleRouting);
//     return () => window.removeEventListener("popstate", handleRouting);
//   }, []);

//   // Central navigation handler
//   const navigateTo = (view, sectionId = "") => {
//     setCurrentView(view);

//     let newUrl = "/";
//     if (view !== "main") {
//       if (
//         [
//           "about",
//           "portfolio",
//           "clientele",
//           "contact",
//           "privacy",
//           "terms",
//           "auto-rickshaw-advertising-hyderabad",
//         ].includes(view)
//       ) {
//         newUrl = `/${view}`;
//       } else {
//         newUrl = `/services/${view}`;
//       }
//     } else if (sectionId && sectionId !== "home") {
//       newUrl = `/${sectionId}`;
//     }

//     if (window.location.pathname !== newUrl) {
//       window.history.pushState({ view, sectionId }, "", newUrl);
//     }

//     if (view === "main") {
//       if (sectionId) {
//         setTimeout(() => {
//           const element = document.getElementById(sectionId);
//           if (element) {
//             element.scrollIntoView({ behavior: "smooth" });
//           }
//         }, 100);
//       } else {
//         window.scrollTo({ top: 0, behavior: "smooth" });
//       }
//     } else {
//       window.scrollTo({ top: 0 });
//     }
//   };

//   // Dynamic Metadata (SEO) management
//   useEffect(() => {
//     let title =
//       "Global Marketing Solutions | Branding & Advertising in Hyderabad";
//     let description =
//       "Global Marketing Solutions (GMS) is Hyderabad's leading branding, printing, advertising, events, and digital marketing agency. Get a custom quote today!";

//     if (currentView !== "main") {
//       switch (currentView) {
//         case "atl":
//           title = "Above The Line (ATL) Advertising in Hyderabad | GMS";
//           description =
//             "Premium ATL advertising services in Hyderabad: television commercials, radio ads, newspaper print campaigns, and multiplex cinema advertising by GMS.";
//           break;
//         case "btl":
//           title = "Below The Line (BTL) Advertising in Hyderabad | GMS";
//           description =
//             "Effective BTL marketing and outdoor activation in Hyderabad: auto tops, mobile van campaigns, tricycle ads, balloon branding, and promotional events.";
//           break;
//         case "digital":
//           title = "Digital Marketing Services in Hyderabad | GMS";
//           description =
//             "Grow your business online with GMS digital marketing services in Hyderabad. Social media management, Google Ads, SEO, and targeted lead generation.";
//           break;
//         case "webdev":
//           title = "Website Development Agency in Hyderabad | GMS";
//           description =
//             "Custom website design and development services in Hyderabad. Responsive, SEO-friendly websites, CRM systems, and e-commerce platforms by GMS.";
//           break;
//         case "designing":
//           title = "Logo Design & Graphic Designing in Hyderabad | GMS";
//           description =
//             "Professional branding and graphic design services in Hyderabad. Logo design, corporate brochures, pamphlets, and creative advertising banners.";
//           break;
//         case "printing":
//           title = "Flex Printing & UV Printing in Hyderabad | GMS";
//           description =
//             "High-quality offset, digital, flex, and UV printing services in Hyderabad. Banner printing, signboards, LED boards, and promotional pamphlets.";
//           break;
//         case "about":
//           title =
//             "About Global Marketing Solutions | Branding & Events Hyderabad";
//           description =
//             "Learn about Global Marketing Solutions (GMS), Hyderabad's leading marketing partner since 2016. Driven by Mr. Bala Brahma Chary, CEO.";
//           break;
//         case "portfolio":
//           title = "Our Advertising & Branding Portfolio | GMS Hyderabad";
//           description =
//             "Explore the successful marketing and branding projects executed by GMS Hyderabad for top brands like Swiggy, Big Basket, Indriya, and more.";
//           break;
//         case "clientele":
//           title = "Our Clients & Partners | GMS Advertising Hyderabad";
//           description =
//             "See the brands we have worked with. GMS has partnered with retail malls, jewellery brands, educational institutions, and political campaigns in Hyderabad.";
//           break;
//         case "contact":
//           title = "Contact GMS | Leading Advertising Agency in Hyderabad";
//           description =
//             "Get a custom quote for your branding, printing, advertising, or event needs. Contact Global Marketing Solutions in LB Nagar, Hyderabad.";
//           break;
//         case "privacy":
//           title = "Privacy Policy | Global Marketing Solutions";
//           description =
//             "Read the Privacy Policy of Global Marketing Solutions (GMS). Learn how we collect, use, store, and protect your information.";
//           break;
//         case "terms":
//           title = "Terms & Conditions | Global Marketing Solutions";
//           description =
//             "Read the Terms & Conditions governing your use of Global Marketing Solutions (GMS) website and services.";
//           break;
//         default:
//           break;
//       }
//     }

//     document.title = title;

//     const metaDesc = document.querySelector('meta[name="description"]');
//     if (metaDesc) {
//       metaDesc.setAttribute("content", description);
//     }

//     const ogTitle = document.querySelector('meta[property="og:title"]');
//     if (ogTitle) ogTitle.setAttribute("content", title);

//     const ogDesc = document.querySelector('meta[property="og:description"]');
//     if (ogDesc) ogDesc.setAttribute("content", description);

//     const ogUrl = document.querySelector('meta[property="og:url"]');
//     if (ogUrl) {
//       const currentUrl = window.location.href.split("?")[0].split("#")[0];
//       ogUrl.setAttribute("content", currentUrl);
//     }
//   }, [currentView]);

//   const renderContent = () => {
//     if (
//       [
//         "atl",
//         "btl",
//         "digital",
//         "webdev",
//         "designing",
//         "printing",
//         "auto-rickshaw-advertising-hyderabad",
//         "about",
//         "portfolio",
//         "clientele",
//         "contact",
//         "privacy",
//         "terms",
//       ].includes(currentView)
//     ) {
//       switch (currentView) {
//         // Services
//         case "atl":
//           return (
//             <>
//               <Header currentView={currentView} navigateTo={navigateTo} />
//               <div className="page-container">
//                 <ATLService navigateTo={navigateTo} />
//               </div>
//               <Footer navigateTo={navigateTo} />
//             </>
//           );
//         case "btl":
//           return (
//             <>
//               <Header currentView={currentView} navigateTo={navigateTo} />
//               <div className="page-container">
//                 <BTLService navigateTo={navigateTo} />
//               </div>
//               <Footer navigateTo={navigateTo} />
//             </>
//           );
//         case "digital":
//           return (
//             <>
//               <Header currentView={currentView} navigateTo={navigateTo} />
//               <div className="page-container">
//                 <DigitalService navigateTo={navigateTo} />
//               </div>
//               <Footer navigateTo={navigateTo} />
//             </>
//           );
//         case "webdev":
//           return (
//             <>
//               <Header currentView={currentView} navigateTo={navigateTo} />
//               <div className="page-container">
//                 <WebDevService navigateTo={navigateTo} />
//               </div>
//               <Footer navigateTo={navigateTo} />
//             </>
//           );
//         case "designing":
//           return (
//             <>
//               <Header currentView={currentView} navigateTo={navigateTo} />
//               <div className="page-container">
//                 <DesigningService navigateTo={navigateTo} />
//               </div>
//               <Footer navigateTo={navigateTo} />
//             </>
//           );
//         case "printing":
//           return (
//             <>
//               <Header currentView={currentView} navigateTo={navigateTo} />
//               <div className="page-container">
//                 <PrintingService navigateTo={navigateTo} />
//               </div>
//               <Footer navigateTo={navigateTo} />
//             </>
//           );
//         case "auto-rickshaw-advertising-hyderabad":
//           return (
//             <>
//               <Header currentView={currentView} navigateTo={navigateTo} />
//               <div className="page-container">
//                 <AutoTopsService navigateTo={navigateTo} />
//               </div>
//               <Footer navigateTo={navigateTo} />
//             </>
//           );

//         // Standalone Sections / Pages
//         case "about":
//           return (
//             <>
//               <Header currentView={currentView} navigateTo={navigateTo} />
//               <div className="page-container">
//                 <About />
//               </div>
//               <Footer navigateTo={navigateTo} />
//             </>
//           );
//         case "portfolio":
//           return (
//             <>
//               <Header currentView={currentView} navigateTo={navigateTo} />
//               <div className="page-container">
//                 <Portfolio />
//               </div>
//               <Footer navigateTo={navigateTo} />
//             </>
//           );
//         case "clientele":
//           return (
//             <>
//               <Header currentView={currentView} navigateTo={navigateTo} />
//               <div className="page-container">
//                 <Clientele />
//               </div>
//               <Footer navigateTo={navigateTo} />
//             </>
//           );
//         case "contact":
//           return (
//             <>
//               <Header currentView={currentView} navigateTo={navigateTo} />
//               <div className="page-container">
//                 <Contact />
//               </div>
//               <Footer navigateTo={navigateTo} />
//             </>
//           );
//         case "privacy":
//           return (
//             <>
//               <Header currentView={currentView} navigateTo={navigateTo} />
//               <div className="page-container">
//                 <PrivacyPolicy navigateTo={navigateTo} />
//               </div>
//               <Footer navigateTo={navigateTo} />
//             </>
//           );
//         case "terms":
//           return (
//             <>
//               <Header currentView={currentView} navigateTo={navigateTo} />
//               <div className="page-container">
//                 <TermsConditions navigateTo={navigateTo} />
//               </div>
//               <Footer navigateTo={navigateTo} />
//             </>
//           );
//         default:
//           return null;
//       }
//     }

//     // Default Main Home Page (with all sections intact)
//     return (
//       <>
//         <Header currentView={currentView} navigateTo={navigateTo} />
//         <Hero />
//         <About />
//         <Services navigateTo={navigateTo} />
//         <Portfolio />
//         <Clients />
//         <Clientele />
//         <Contact />
//         <Footer navigateTo={navigateTo} />
//       </>
//     );
//   };

//   return (
//     <div style={{ fontFamily: "Archivo, sans-serif", minHeight: "100vh" }}>
//       {renderContent()}
//       <EnquiryPopup />
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Clients from "./components/Clients";
import Clientele from "./components/Clientele";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import ATLService from "./components/services/ATLService";
import BTLService from "./components/services/BTLService";
import DigitalService from "./components/services/DigitalService";
import WebDevService from "./components/services/WebDevService";
import DesigningService from "./components/services/DesigningService";
import PrintingService from "./components/services/PrintingService";
import AutoTopsService from "./components/services/AutoTopsService";

import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsConditions from "./components/TermsConditions";
import EnquiryPopup from "./components/EnquiryPopup";

import Blog from "./components/Blog";
import BlogDetail from "./components/BlogDetail";
import BlogAdmin from "./components/BlogAdmin";
import BlogWrite from "./components/BlogWrite";
import BlogLogin from "./components/BlogLogin";

/* =========================================================
   ROUTES
========================================================= */

const SERVICE_ROUTES = [
  "atl",
  "btl",
  "digital",
  "webdev",
  "designing",
  "printing",
  "auto-rickshaw-advertising-hyderabad",
];

const STANDALONE_ROUTES = [
  "about",
  "portfolio",
  "clientele",
  "contact",
  "privacy",
  "terms",
  "blog",
  "blog-detail",
  "blog-admin",
  "admin-login",
  "blog-write",
  "blog-login",
];

const ALL_ROUTES = [...SERVICE_ROUTES, ...STANDALONE_ROUTES];

/* =========================================================
   APP
========================================================= */

function App() {
  const [currentView, setCurrentView] = useState("main");
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [selectedBlogId, setSelectedBlogId] = useState("");

  /* =======================================================
     URL → REACT VIEW
  ======================================================= */

  const handleRouting = () => {
    let path = window.location.pathname.toLowerCase();

    // Remove trailing slash except for "/"
    if (path.length > 1 && path.endsWith("/")) {
      path = path.slice(0, -1);
    }

    const hash = window.location.hash.toLowerCase();

    let view = "main";
    let sectionId = "";

    /* -------------------------------------------------------
       SERVICE ROUTES

       /services/atl
       /services/btl
       /services/digital
       /services/webdev
       /services/designing
       /services/printing
       /services/auto-rickshaw-advertising-hyderabad
    ------------------------------------------------------- */

    if (path.startsWith("/services/") || path.startsWith("/service/")) {
      const parts = path.split("/");
      const service = parts[parts.length - 1];

      if (SERVICE_ROUTES.includes(service)) {
        view = service;
      }
    }

    /* -------------------------------------------------------
       STANDALONE ROUTES

       /about
       /portfolio
       /clientele
       /contact
       /privacy
       /terms
    ------------------------------------------------------- */

    else if (STANDALONE_ROUTES.includes(path.substring(1))) {
      view = path.substring(1);
    }

    /* -------------------------------------------------------
       HASH ROUTES

       #about
       #portfolio
       #contact
       #atl
       etc.
    ------------------------------------------------------- */

    else if (hash) {
      const cleanHash = hash.replace("#", "");

      if (SERVICE_ROUTES.includes(cleanHash)) {
        view = cleanHash;
      } else if (
        [
          "about",
          "portfolio",
          "clientele",
          "contact",
          "privacy",
          "terms",
          "home",
        ].includes(cleanHash)
      ) {
        view = "main";
        sectionId = cleanHash === "home" ? "" : cleanHash;
      }
    }

    setCurrentView(view);

    /* -------------------------------------------------------
       SCROLL POSITION
    ------------------------------------------------------- */

    if (view === "main") {
      if (sectionId) {
        setTimeout(() => {
          const element = document.getElementById(sectionId);

          if (element) {
            element.scrollIntoView({
              behavior: "smooth",
            });
          }
        }, 150);
      } else {
        window.scrollTo({
          top: 0,
        });
      }
    } else {
      window.scrollTo({
        top: 0,
      });
    }
  };

  /* =======================================================
     BROWSER BACK / FORWARD
  ======================================================= */

  useEffect(() => {
    handleRouting();

    window.addEventListener("popstate", handleRouting);

    return () => {
      window.removeEventListener("popstate", handleRouting);
    };
  }, []);

  /* =======================================================
     NAVIGATION
  ======================================================= */

  const navigateTo = (view, sectionId = "") => {
    setCurrentView(view);

    let newUrl = "/";

    /* -------------------------------------------------------
       SERVICE PAGE
    ------------------------------------------------------- */

    if (SERVICE_ROUTES.includes(view)) {
      newUrl = `/services/${view}`;
    }

    /* -------------------------------------------------------
       STANDALONE PAGE
    ------------------------------------------------------- */

    else if (STANDALONE_ROUTES.includes(view)) {
      newUrl = `/${view}`;
    }

    /* -------------------------------------------------------
       MAIN PAGE SECTION
    ------------------------------------------------------- */

    else if (view === "main") {
      if (sectionId && sectionId !== "home") {
        newUrl = `/${sectionId}`;
      } else {
        newUrl = "/";
      }
    }

    /* -------------------------------------------------------
       UPDATE BROWSER URL
    ------------------------------------------------------- */

    if (window.location.pathname !== newUrl) {
      window.history.pushState(
        {
          view,
          sectionId,
        },
        "",
        newUrl
      );
    }

    /* -------------------------------------------------------
       SCROLL
    ------------------------------------------------------- */

    if (view === "main") {
      if (sectionId) {
        setTimeout(() => {
          const element = document.getElementById(sectionId);

          if (element) {
            element.scrollIntoView({
              behavior: "smooth",
            });
          }
        }, 100);
      } else {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  /* =======================================================
     SEO METADATA
  ======================================================= */

  useEffect(() => {
    let title =
      "Global Marketing Solutions | Branding & Advertising in Hyderabad";

    let description =
      "Global Marketing Solutions (GMS) is Hyderabad's leading branding, printing, advertising, events, and digital marketing agency. Get a custom quote today!";

    switch (currentView) {
      /* -----------------------------------------------------
         ATL
      ----------------------------------------------------- */

      case "atl":
        title =
          "Above The Line (ATL) Advertising in Hyderabad | GMS";

        description =
          "Premium ATL advertising services in Hyderabad including television commercials, radio advertising, newspaper print campaigns, and multiplex cinema advertising by GMS.";
        break;

      /* -----------------------------------------------------
         BTL
      ----------------------------------------------------- */

      case "btl":
        title =
          "Below The Line (BTL) Advertising in Hyderabad | GMS";

        description =
          "Effective BTL marketing and outdoor activation in Hyderabad including auto tops, mobile van campaigns, tricycle advertising, balloon branding, and promotional events.";
        break;

      /* -----------------------------------------------------
         DIGITAL
      ----------------------------------------------------- */

      case "digital":
        title =
          "Digital Marketing Services in Hyderabad | GMS";

        description =
          "Grow your business online with GMS digital marketing services in Hyderabad including social media management, Google Ads, SEO, and targeted lead generation.";
        break;

      /* -----------------------------------------------------
         WEB DEVELOPMENT
      ----------------------------------------------------- */

      case "webdev":
        title =
          "Website Development Agency in Hyderabad | GMS";

        description =
          "Custom website design and development services in Hyderabad. Responsive, SEO-friendly websites, CRM systems, and e-commerce platforms by GMS.";
        break;

      /* -----------------------------------------------------
         DESIGNING
      ----------------------------------------------------- */

      case "designing":
        title =
          "Logo Design & Graphic Designing in Hyderabad | GMS";

        description =
          "Professional branding and graphic design services in Hyderabad including logo design, corporate brochures, pamphlets, creative advertising banners, and marketing materials.";
        break;

      /* -----------------------------------------------------
         PRINTING
      ----------------------------------------------------- */

      case "printing":
        title =
          "Flex Printing & UV Printing in Hyderabad | GMS";

        description =
          "High-quality offset, digital, flex, and UV printing services in Hyderabad including banner printing, signboards, LED boards, and promotional pamphlets.";
        break;

      /* -----------------------------------------------------
         AUTO TOP BRANDING
      ----------------------------------------------------- */

      case "auto-rickshaw-advertising-hyderabad":
        title =
          "Auto Rickshaw Advertising in Hyderabad | Auto Tops & Branding | GMS";

        description =
          "Promote your brand across Hyderabad with auto rickshaw advertising, auto tops branding and mobile auto campaigns. GMS offers route-based auto advertising solutions for local visibility. Get a quote today.";
        break;

      /* -----------------------------------------------------
         ABOUT
      ----------------------------------------------------- */

      case "about":
        title =
          "About Global Marketing Solutions | Branding & Events Hyderabad";

        description =
          "Learn about Global Marketing Solutions (GMS), a Hyderabad marketing partner providing branding, advertising, printing, events, and digital marketing solutions.";
        break;

      /* -----------------------------------------------------
         PORTFOLIO
      ----------------------------------------------------- */

      case "portfolio":
        title =
          "Our Advertising & Branding Portfolio | GMS Hyderabad";

        description =
          "Explore successful advertising, marketing, branding, printing, and promotional projects executed by Global Marketing Solutions in Hyderabad.";
        break;

      /* -----------------------------------------------------
         CLIENTELE
      ----------------------------------------------------- */

      case "clientele":
        title =
          "Our Clients & Partners | GMS Advertising Hyderabad";

        description =
          "Explore the brands and organizations that have partnered with Global Marketing Solutions for advertising, branding, printing, digital marketing, and promotional campaigns.";
        break;

      /* -----------------------------------------------------
         CONTACT
      ----------------------------------------------------- */

      case "contact":
        title =
          "Contact GMS | Leading Advertising Agency in Hyderabad";

        description =
          "Get a custom quote for branding, printing, advertising, digital marketing, outdoor advertising, or event requirements from Global Marketing Solutions.";
        break;

      /* -----------------------------------------------------
         PRIVACY
      ----------------------------------------------------- */

      case "privacy":
        title =
          "Privacy Policy | Global Marketing Solutions";

        description =
          "Read the Privacy Policy of Global Marketing Solutions and learn how information is collected, used, stored, and protected.";
        break;

      /* -----------------------------------------------------
         TERMS
      ----------------------------------------------------- */

      case "terms":
        title =
          "Terms & Conditions | Global Marketing Solutions";

        description =
          "Read the Terms & Conditions governing the use of the Global Marketing Solutions website and services.";
        break;

      default:
        break;
    }

    /* -------------------------------------------------------
       DOCUMENT TITLE
    ------------------------------------------------------- */

    document.title = title;

    /* -------------------------------------------------------
       META DESCRIPTION
    ------------------------------------------------------- */

    const metaDesc = document.querySelector(
      'meta[name="description"]'
    );

    if (metaDesc) {
      metaDesc.setAttribute("content", description);
    }

    /* -------------------------------------------------------
       OPEN GRAPH TITLE
    ------------------------------------------------------- */

    const ogTitle = document.querySelector(
      'meta[property="og:title"]'
    );

    if (ogTitle) {
      ogTitle.setAttribute("content", title);
    }

    /* -------------------------------------------------------
       OPEN GRAPH DESCRIPTION
    ------------------------------------------------------- */

    const ogDesc = document.querySelector(
      'meta[property="og:description"]'
    );

    if (ogDesc) {
      ogDesc.setAttribute("content", description);
    }

    /* -------------------------------------------------------
       OPEN GRAPH URL
    ------------------------------------------------------- */

    const ogUrl = document.querySelector(
      'meta[property="og:url"]'
    );

    if (ogUrl) {
      const currentUrl = window.location.href
        .split("?")[0]
        .split("#")[0];

      ogUrl.setAttribute("content", currentUrl);
    }
  }, [currentView]);

  /* =======================================================
     RENDER SERVICE PAGE
  ======================================================= */

  const renderServicePage = () => {
    switch (currentView) {
      case "atl":
        return <ATLService navigateTo={navigateTo} />;

      case "btl":
        return <BTLService navigateTo={navigateTo} />;

      case "digital":
        return <DigitalService navigateTo={navigateTo} />;

      case "webdev":
        return <WebDevService navigateTo={navigateTo} />;

      case "designing":
        return <DesigningService navigateTo={navigateTo} />;

      case "printing":
        return <PrintingService navigateTo={navigateTo} />;

      case "auto-rickshaw-advertising-hyderabad":
        return <AutoTopsService navigateTo={navigateTo} />;

      default:
        return null;
    }
  };

  /* =======================================================
     RENDER STANDALONE PAGE
  ======================================================= */

  const renderStandalonePage = () => {
    switch (currentView) {
      case "about":
        return <About />;

      case "portfolio":
        return <Portfolio />;

      case "clientele":
        return <Clientele />;

      case "contact":
        return <Contact />;

      case "privacy":
        return <PrivacyPolicy navigateTo={navigateTo} />;

      case "terms":
        return <TermsConditions navigateTo={navigateTo} />;

      case "blog":
        return (
          <Blog
            navigateTo={navigateTo}
            onSelectBlog={(blog) => {
              setSelectedBlog(blog);
              setSelectedBlogId(blog._id);
            }}
          />
        );

      case "blog-detail":
        return (
          <BlogDetail
            blogId={selectedBlogId}
            selectedBlog={selectedBlog}
            navigateTo={navigateTo}
          />
        );

      case "blog-admin":
      case "admin-login":
        return <BlogAdmin navigateTo={navigateTo} />;

      case "blog-write":
        return <BlogWrite navigateTo={navigateTo} />;

      case "blog-login":
        return <BlogLogin navigateTo={navigateTo} />;

      default:
        return null;
    }
  };

  /* =======================================================
     RENDER PAGE CONTENT
  ======================================================= */

  const renderContent = () => {
    /* -------------------------------------------------------
       SERVICE PAGE
    ------------------------------------------------------- */

    if (SERVICE_ROUTES.includes(currentView)) {
      return (
        <div className="page-container">
          {renderServicePage()}
        </div>
      );
    }

    /* -------------------------------------------------------
       STANDALONE PAGE
    ------------------------------------------------------- */

    if (STANDALONE_ROUTES.includes(currentView)) {
      return (
        <div className="page-container">
          {renderStandalonePage()}
        </div>
      );
    }

    /* -------------------------------------------------------
       HOME PAGE
    ------------------------------------------------------- */

    return (
      <>
        <Hero />

        <About />

        <Services navigateTo={navigateTo} />

        <Portfolio />

        <Clients />

        <Clientele />

        <Contact />
      </>
    );
  };

  /* =======================================================
     FINAL APP
  ======================================================= */

  return (
    <div
      style={{
        fontFamily: "Archivo, sans-serif",
        minHeight: "100vh",
      }}
    >
      {/* Header - shown on every page */}
      <Header
        currentView={currentView}
        navigateTo={navigateTo}
      />

      {/* Main content */}
      {renderContent()}

      {/* Footer - shown on every page */}
      <Footer navigateTo={navigateTo} />

      {/* Enquiry popup */}
      <EnquiryPopup />
    </div>
  );
}

export default App;

