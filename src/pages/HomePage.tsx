import HeroBoardFrame from "@/components/sections/hero/HeroBoardFrame";
import FeaturesBentoWidgets from "@/components/sections/features/FeaturesBentoWidgets";
import PricingTrayPlans from "@/components/sections/pricing/PricingTrayPlans";
import GalleryTiltCards from "@/components/sections/gallery/GalleryTiltCards";
import FeaturesStackingTilesMakro from "@/components/sections/features/FeaturesStackingTilesMakro";
import StatementDarkPanelBoard from "@/components/sections/statement/StatementDarkPanelBoard";
import FeaturesStepWashCards from "@/components/sections/features/FeaturesStepWashCards";
import TestimonialSpotlightCarousel from "@/components/sections/testimonial/TestimonialSpotlightCarousel";
import FaqTrayAccordion from "@/components/sections/faq/FaqTrayAccordion";
import ScrollToneBackdrop from "@/components/kit/ScrollToneBackdrop";
import LoaderChipFill from "@/components/loaders/LoaderChipFill";

export default function HomePage() {
  return (
    <>
      <ScrollToneBackdrop

      />

      <LoaderChipFill
        label="Central Grand Rapids HVAC Master"
      />

      <div id="home" data-webild-section="HeroBoardFrame" data-webild-section-id="HeroBoardFrame-1" data-section="home">
        <HeroBoardFrame
          className="bg-transparent"
          tag="Open 24/7 Every Day"
          title="Furnace or AC trouble? We're open 24/7."
          description="Day, night, weekends, when your heat or air quits, Central Grand Rapids HVAC Master picks up the phone."
          primaryButton={{
            text: "Call (616) 585-7020",
            href: "tel:616) 585-7020"
          }}
          imageSrc="https://img.b2bpic.net/free-photo/minimalist-indoors-white-wall-with-vent-space_23-2148801257.jpg"
          imageAlt="hvac technician working on furnace"
          introDelay={1.2}
          kpis={[
            {
              label: "Availability",
              value: "24/7",
              delta: "Always",
              trend: [
                12,
                14,
                13,
                17,
                16,
                20,
                24
              ]
            },
            {
              label: "Service Area",
              value: "Local MI",
              delta: "GR"
            },
            {
              label: "Coverage",
              value: "24 Hours",
              trend: [
                30,
                34,
                33,
                38,
                40,
                42
              ]
            }
          ]}
        />
      </div>

      <div id="services" data-webild-section="FeaturesBentoWidgets" data-webild-section-id="FeaturesBentoWidgets-1" data-section="services" data-tone="deep" data-gallery>
        <FeaturesBentoWidgets
          className="bg-transparent"
          tag="Heating & Cooling"
          title="One team for every season"
          description="We fix, install, and maintain furnace and AC systems across Grand Rapids."
          backgroundImageSrc="https://img.b2bpic.net/free-photo/low-angle-people-working-with-drill_23-2149366670.jpg"
          items={[
            {
              tag: "Heating Repair",
              title: "Furnace & heating repair",
              description: "Expert diagnostics and repairs to keep your Grand Rapids home warm all winter.",
              tags: [
                "Furnaces",
                "Heat Pumps",
                "Boilers"
              ]
            },
            {
              title: "24/7 AC repair",
              description: "Fast cooling repair services when your air conditioner stops working on hot days.",
              value: "24/7",
              valueLabel: "day and night support"
            },
            {
              title: "Installation & replacement",
              description: "Professional installation of efficient heating and cooling equipment built to last.",
              imageSrc: "https://img.b2bpic.net/free-photo/close-up-heat-pump-outside-home_23-2149250247.jpg",
              imageAlt: "Close up on heat pump outside home"
            },
            {
              title: "Tune-ups & maintenance",
              description: "Preventive care visits that ensure your system operates cleanly and reliably.",
              rows: [
                {
                  label: "Furnace Inspection",
                  value: "24/7 Ready"
                },
                {
                  label: "AC Performance Check",
                  value: "24/7 Ready"
                },
                {
                  label: "Filter & Coil Service",
                  value: "24/7 Ready"
                }
              ]
            },
            {
              title: "Emergency response",
              description: "Our technicians pick up the phone day or night when equipment fails.",
              imageSrc: "https://img.b2bpic.net/free-photo/male-electrician-working-switchboard-with-fuses_169016-53034.jpg",
              imageAlt: "Male electrician working in a switchboard with fuses"
            },
            {
              title: "Grand Rapids service",
              description: "Local technicians serving home heating and cooling across the entire area.",
              value: "100%",
              valueLabel: "local Grand Rapids team"
            }
          ]}
        />
      </div>

      <div id="pricing" data-webild-section="PricingTrayPlans" data-webild-section-id="PricingTrayPlans-1" data-section="pricing">
        <PricingTrayPlans
          tag="HVAC Service Options"
          title="Service options built for your"
          highlight="comfort"
          description="Clear options for furnace repair, AC service, and complete heating and cooling maintenance."
          items={[
            {
              name: "Tune-Up Care",
              description: "Comprehensive seasonal inspection and maintenance for furnace or AC.",
              price: "[PRICE]",
              period: "per inspection visit",
              features: [
                "Complete system diagnostic",
                "Filter check and cleaning",
                "Safety controls inspection",
                "Performance tuning"
              ],
              cta: {
                text: "Request Service",
                href: "#home"
              }
            },
            {
              name: "Standard Repair",
              description: "Fast diagnostic and dispatch for broken heating or cooling units.",
              price: "[PRICE]",
              period: "per repair visit",
              highlighted: true,
              features: [
                "24/7 fast technician dispatch",
                "Thorough root-cause diagnosis",
                "Furnace and AC repair",
                "Upfront service review"
              ],
              cta: {
                text: "Request Service",
                href: "#home"
              }
            },
            {
              name: "System Replace",
              description: "Full heating and cooling replacement and system installation.",
              price: "[PRICE]",
              period: "per installation",
              features: [
                "Full site evaluation",
                "Complete unit installation",
                "Ductwork inspection",
                "System testing and setup"
              ],
              cta: {
                text: "Request Estimate",
                href: "#home"
              }
            }
          ]}
          enterprise={{
            label: "24/7 Emergency",
            title: "Facing a complete heating outage tonight?",
            description: "We pick up the phone 24 hours a day, 7 days a week across Grand Rapids.",
            cta: {
              text: "Call (616) 585-7020",
              href: "tel:616) 585-7020"
            }
          }}
        />
      </div>

      <div id="gallery-tilt-cards" data-webild-section="GalleryTiltCards" data-webild-section-id="GalleryTiltCards-1" data-section="gallery-tilt-cards">
        <GalleryTiltCards
          tag="Recent Projects"
          title="Heating & Cooling Solutions in Action"
          description="Explore recent emergency repairs, system replacements, and routine maintenance completed throughout Grand Rapids."
          linkLabel="Request Service Now"
          ariaLabel="Recent HVAC projects gallery"
          items={[
            {
              title: "Furnace Repair & Heat Restoration",
              tag: "Heating Repair",
              date: "Recent Work",
              description: "Emergency late-night furnace repair restored reliable heating during freezing winter conditions.",
              href: "#home",
              imageSrc: "https://img.b2bpic.net/free-photo/meticulous-wiremen-expertly-refilling-freon-external-air-conditioner-while-using-manifold-measurement-device-closely-measure-pressure-hvac-system-ensuring-perfect-cooling-performance_482257-68069.jpg",
              imageAlt: "Meticulous wiremen expertly refilling freon in external air conditioner while using manifold measurement device to closely measure the pressure in HVAC system, ensuring perfect cooling performance"
            },
            {
              title: "High-Efficiency AC Installation",
              tag: "AC Replacement",
              date: "Recent Work",
              description: "Full outdoor cooling unit replacement providing quiet and energy-efficient climate control.",
              href: "#home",
              imageSrc: "https://img.b2bpic.net/free-photo/electrical-technician-looking-focused-while-working-switchboard-with-fuses_169016-23486.jpg",
              imageAlt: "furnace heating repair service"
            },
            {
              title: "Complete HVAC System Tune-Up",
              tag: "Maintenance",
              date: "Recent Work",
              description: "Comprehensive seasonal inspection and coil cleaning to maximize airflow and prevent unexpected breakdowns.",
              href: "#home",
              imageSrc: "https://img.b2bpic.net/free-photo/serviceman-assembling-freon-barometer_482257-85118.jpg",
              imageAlt: "Serviceman assembling freon barometer"
            },
            {
              title: "24/7 Emergency AC Service",
              tag: "Cooling Repair",
              date: "Recent Work",
              description: "Rapid refrigerant leak check and component replacement to restore central cooling on a weekend.",
              href: "#home",
              imageSrc: "https://img.b2bpic.net/free-photo/portrait-worker-woman_23-2148138087.jpg",
              imageAlt: "Portrait of worker woman"
            }
          ]}
        />
      </div>

      <div id="product" data-webild-section="FeaturesStackingTilesMakro" data-webild-section-id="FeaturesStackingTilesMakro-1" data-section="product" data-tone="card">
        <FeaturesStackingTilesMakro
          items={[
            {
              tag: "Emergency Heating",
              icon: "flame",
              title: "Fast furnace repair when cold strikes",
              description: "We diagnose and repair faulty furnaces, heat pumps, and boilers anytime to keep your Grand Rapids home warm.",
              note: "Available 24 hours every single day",
              imageSrc: "https://img.b2bpic.net/free-photo/portrait-handsome-male-technician-doing-work-report-broken-fridge-home-kitchen_662251-2719.jpg",
              imageAlt: "Portrait of a handsome male technician doing a work report on a broken fridge in a home kitchen"
            },
            {
              tag: "Cooling Repair",
              icon: "snowflake",
              title: "24/7 air conditioning restoration",
              description: "When your AC stops blowing cold air on hot days, our local technicians respond day or night with reliable repair solutions.",
              note: "Call (616) 585-7020 for immediate help",
              imageSrc: "https://img.b2bpic.net/free-photo/worker-refilling-hvac-system-refrigerant_482257-90516.jpg",
              imageAlt: "Worker refilling HVAC system refrigerant"
            },
            {
              tag: "System Installation",
              icon: "wrench",
              title: "Complete heating and cooling replacement",
              description: "Upgrade your outdated equipment with modern energy-efficient HVAC systems designed for complete year-round comfort.",
              note: "Full system replacement and setup",
              imageSrc: "https://img.b2bpic.net/free-photo/engineer-writing-condenser-values_482257-90848.jpg",
              imageAlt: "Engineer writing condenser values"
            },
            {
              tag: "Preventive Care",
              icon: "clock",
              title: "Seasonal tune-ups and maintenance",
              description: "Keep your furnace and air conditioner running efficiently with routine inspections, filter changes, and performance checks.",
              note: "Scheduled tune-ups for peak efficiency",
              imageSrc: "https://img.b2bpic.net/free-photo/damaged-external-air-cooling-unit_482257-80199.jpg",
              imageAlt: "Damaged external air cooling unit"
            }
          ]}
        />
      </div>

      <div id="statement-dark-panel-board-1" data-webild-section="StatementDarkPanelBoard" data-webild-section-id="StatementDarkPanelBoard-1" data-section="statement-dark-panel-board-1">
        <StatementDarkPanelBoard
          title="Need emergency 24/7 furnace or AC repair?"
          primaryCta={{
            text: "Call (616) 585-7020",
            href: "tel:616) 585-7020"
          }}
          secondaryCta={{
            text: "Request Online",
            href: "#home"
          }}
          imageSrc="https://img.b2bpic.net/free-photo/service-man-instelling-house-heating-system-floor_1303-26533.jpg"
          imageAlt="Service man instelling house heating system under the floor"
        />
      </div>

      <div id="process" data-webild-section="FeaturesStepWashCards" data-webild-section-id="FeaturesStepWashCards-1" data-section="process" data-tone="deep">
        <FeaturesStepWashCards
          className="bg-transparent"
          tag="How it works"
          title="Three simple steps to restored comfort"
          description="Straightforward heating and cooling repairs for homeowners across Grand Rapids, available day or night."
          items={[
            {
              title: "Call or request online",
              description: "Contact our team anytime day or night for immediate dispatch.",
              imageSrc: "https://img.b2bpic.net/free-photo/smart-home-tablet-wall_23-2149036909.jpg",
              imageAlt: "Smart home tablet on the wall"
            },
            {
              title: "Get a clear diagnosis",
              description: "Our technician inspects your system and explains the exact issue.",
              imageSrc: "https://img.b2bpic.net/free-photo/man-electrical-technician-working-switchboard-with-fuses-uses-tablet_169016-24219.jpg",
              imageAlt: "Man an electrical technician working in a switchboard with fuses uses a tablet"
            },
            {
              title: "Enjoy restored comfort",
              description: "We complete the repair properly so your home stays comfortable.",
              imageSrc: "https://img.b2bpic.net/free-photo/tired-attractive-woman-work-home-stretching-arms-relax-after-hard-day_231208-3278.jpg",
              imageAlt: "Tired attractive woman work at home stretching arms to relax after hard day"
            }
          ]}
          cta={{
            text: "Book service now",
            href: "#statement-dark-panel-board-1"
          }}
        />
      </div>

      <div id="customers" data-webild-section="TestimonialSpotlightCarousel" data-webild-section-id="TestimonialSpotlightCarousel-1" data-section="customers">
        <TestimonialSpotlightCarousel
          tag="Local feedback"
          title="Trusted by your neighbors"
          items={[
            {
              company: "Grand Rapids",
              quote: "[Paste featured customer review text here]",
              name: "Molly Price",
              role: "Homeowner",
              imageSrc: "https://img.b2bpic.net/free-photo/portrait-young-woman-working-studying-from-home-watching-her-online-course-digital-tablet_1258-201703.jpg",
              imageAlt: "Portrait of young woman working or studying from home watching her online course on digital tablet"
            },
            {
              company: "Grand Rapids",
              quote: "[Paste customer review text here]",
              name: "Ethan Graham",
              role: "Homeowner",
              imageSrc: "https://img.b2bpic.net/free-photo/portrait-confident-man-home-office_329181-20664.jpg",
              imageAlt: "Portrait of confident man in home office"
            },
            {
              company: "Grand Rapids",
              quote: "[Paste customer review text here]",
              name: "Abigail Turner",
              role: "Homeowner",
              imageSrc: "https://img.b2bpic.net/free-photo/portrait-stylish-young-asian-woman-watching-videos-tablet-sitting-kitchen-drinking-coff_1258-138084.jpg",
              imageAlt: "Portrait of stylish young asian woman watching videos on tablet sitting in kitchen and drinking coff"
            }
          ]}
        />
      </div>

      <div id="faq-tray-accordion-1" data-webild-section="FaqTrayAccordion" data-webild-section-id="FaqTrayAccordion-1" data-section="faq-tray-accordion-1">
        <FaqTrayAccordion
          tag="Help Center"
          title="Before you"
          highlight="call"
          items={[
            {
              title: "What are your hours?",
              description: "We are open 24 hours a day, 7 days a week. Holiday hours may vary."
            },
            {
              title: "Can I call in the middle of the night?",
              description: "Yes, we answer day or night, 24 hours a day, 7 days a week."
            },
            {
              title: "Do you handle both heating and cooling?",
              description: "Yes, we provide furnace and heating repair, AC repair, installations, and maintenance."
            },
            {
              title: "Where are you located?",
              description: "We are located at 4825 Aylesworth St SE, Grand Rapids, MI 49546."
            }
          ]}
          help={{
            label: "24/7 Dispatch",
            title: "Need immediate help?",
            description: "Ethan Graham and our Grand Rapids team answer day or night.",
            cta: {
              text: "Call Now",
              href: "tel:616) 585-7020"
            },
            imageSrc: "https://img.b2bpic.net/free-photo/pleased-young-male-builder-wearing-uniform-safety-helmet-showing-two-pink_141793-74761.jpg",
            imageAlt: "Pleased young male builder wearing uniform and safety helmet showing two on pink"
          }}
        />
      </div>
    </>
  );
}
