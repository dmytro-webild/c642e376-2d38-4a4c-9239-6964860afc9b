import { Outlet } from "react-router-dom";
import NavbarFloatingPill from "@/components/navbars/NavbarFloatingPill";
import FooterTrayWordmark from "@/components/sections/footer/FooterTrayWordmark";

export default function Layout() {
  return (
    <div className="relative isolate min-h-svh flex flex-col bg-background text-foreground" data-button="chip" data-card="tray" data-pattern="none">
      <header data-webild-section="Header">
        <NavbarFloatingPill
          brand="Central Grand Rapids HVAC Master"
          navItems={[
            {
              name: "Services",
              href: "#services"
            },
            {
              name: "How It Works",
              href: "#process"
            },
            {
              name: "Reviews",
              href: "#customers"
            },
            {
              name: "Location",
              href: "#statement-dark-panel-board-1"
            },
            {
              name: "FAQ",
              href: "#faq-tray-accordion-1"
            }
          ]}
          cta={{
            text: "Book Service",
            href: "#home"
          }}
          introDelay={1.2}
        />
      </header>
      <main className="flex-grow" data-button="chip" data-card="tray" data-pattern="none">
        <Outlet />
      </main>
      <footer data-webild-section="Footer" data-section="footer">
        <FooterTrayWordmark
          brand="Central Grand Rapids HVAC Master"
          wordmark="Central Grand Rapids HVAC Master"
          columns={[
            {
              title: "Services",
              links: [
                {
                  text: "Furnace & Heating Repair",
                  href: "#services"
                },
                {
                  text: "AC Repair",
                  href: "#services"
                },
                {
                  text: "Heating & Cooling Installation",
                  href: "#services"
                },
                {
                  text: "Tune-Ups & Maintenance",
                  href: "#services"
                }
              ]
            },
            {
              title: "Availability",
              links: [
                {
                  text: "Open 24 Hours, 7 Days a Week",
                  href: "#home"
                },
                {
                  text: "Emergency Night & Weekend Service",
                  href: "#statement-dark-panel-board-1"
                },
                {
                  text: "Grand Rapids Service Area",
                  href: "#home"
                }
              ]
            },
            {
              title: "Navigation",
              links: [
                {
                  text: "How It Works",
                  href: "#process"
                },
                {
                  text: "Customer Reviews",
                  href: "#customers"
                },
                {
                  text: "Frequently Asked Questions",
                  href: "#faq-tray-accordion-1"
                }
              ]
            },
            {
              title: "Contact",
              links: [
                {
                  text: "(616) 585-7020",
                  href: "tel:616) 585-7020"
                },
                {
                  text: "4825 Aylesworth St SE, Grand Rapids, MI 49546",
                  href: "#statement-dark-panel-board-1"
                },
                {
                  text: "contact@centralgrandrapidshvacmaster.com",
                  href: "mailto:contact@centralgrandrapidshvacmaster.com"
                }
              ]
            }
          ]}
          copyright="© 2026 Central Grand Rapids HVAC Master. All rights reserved."
          topText="Back to top"
        />
      </footer>
    </div>
  );
}
