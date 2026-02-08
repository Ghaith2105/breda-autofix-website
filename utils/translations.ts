
export const translations = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      reviews: 'Reviews',
      contact: 'Contact',
      book: 'Book Now',
      bookAppt: 'Book Appointment',
    },
    hero: {
      title1: 'Expert Auto Care',
      title2: 'in Breda',
      subtitle: 'From APK inspections to full engine diagnostics. We bring modern technology and trusted expertise to keep your vehicle running smoothly.',
      ctaPrimary: 'Schedule Service',
      ctaSecondary: 'View Services',
    },
    services: {
      header: 'What We Do',
      title: 'Complete Auto Solutions',
      subtitle: 'We use the latest equipment to ensure your vehicle is safe and reliable.',
      est: 'Est.',
      mins: 'mins',
      from: 'from',
      learnMore: 'Learn More',
      bookNow: 'Book Now',
      modal: {
        desc: 'Description',
        included: "What's Included",
        duration: 'Duration',
        startsFrom: 'Starts From',
        bookBtn: 'Book This Service',
        close: 'Close',
      },
      items: {
        apk: {
          title: 'APK Inspection',
          desc: 'Official Dutch periodic vehicle inspection to ensure safety and environmental standards.',
          features: ['Official RDW Report', 'Emission Testing', 'Safety Systems Check', 'Light Alignment', 'Brake Performance Test']
        },
        'maintenance-small': {
          title: 'Small Service',
          desc: 'Oil change, filter replacement, and essential fluid top-ups.',
          features: ['Synthetic Oil (up to 4L)', 'Oil Filter Replacement', 'Fluid Level Top-up', 'Battery Check', 'Tire Pressure Adjustment']
        },
        'maintenance-large': {
          title: 'Large Service',
          desc: 'Comprehensive check-up including brakes, spark plugs, filters, and engine diagnostics.',
          features: ['All Filters Replaced', 'Spark Plug Replacement', 'Detailed Brake Inspection', 'Gearbox Oil Check', 'Diagnostic Scan']
        },
        tires: {
          title: 'Tire Change',
          desc: 'Seasonal tire swap (Summer/Winter) including wheel balancing.',
          features: ['Demounting & Mounting', 'Electronic Wheel Balancing', 'Valve Replacement', 'Tire Pressure Check', 'Tire Storage Available']
        },
        ac: {
          title: 'Airco Service',
          desc: 'Refill and cleaning of your air conditioning system.',
          features: ['Refrigerant Recovery', 'Leak Detection Test', 'System Refill', 'Compressor Oil Top-up', 'Odor Treatment']
        },
        diagnostics: {
          title: 'Diagnostics',
          desc: 'Computerized readout of engine error codes and troubleshooting.',
          features: ['OBD-II Error Code Readout', 'Live Data Analysis', 'System Reset', 'Printed Diagnostic Report', 'Repair Quotation']
        }
      }
    },
    pricing: {
      header: 'Transparent Pricing',
      title: 'No Hidden Fees',
      subtitle: 'Competitive rates for top-quality service in Breda.',
      perVehicle: '/vehicle',
      popular: 'Most Popular',
      book: 'Book',
      disclaimer: '* Prices may vary depending on car model and oil requirements. Final quote provided before work begins.',
      items: [
        { name: 'APK Inspection', price: '€39.95', features: ['Safety Check', 'Emission Test', 'Official Report', 'Free re-test (14 days)'] },
        { name: 'Airco Service', price: '€99', features: ['System Pressure Test', 'Refrigerant Refill', 'Leak Check', 'Odor Removal'] },
        { name: 'Small Service', price: '€165', features: ['Synthetic Oil (up to 4L)', 'Oil Filter', 'Fluid Top-up', 'Visual Safety Check'] },
      ]
    },
    testimonials: {
      header: 'Testimonials',
      title: 'What Customers Say',
      subtitle: 'We take pride in our reputation in Breda and surrounding areas.',
      reviews: [
        {
          name: 'Sophie van den Berg',
          role: 'Toyota Yaris Owner',
          text: 'Fast and friendly service. The APK was done within an hour. I love the waiting area with coffee!',
          stars: 5
        },
        {
          name: 'Thomas Jansen',
          role: 'BMW 3 Series Owner',
          text: 'Finally a garage that is transparent about costs. They called me before replacing the brakes. Honest work.',
          stars: 5
        },
        {
          name: 'Lisa Bakker',
          role: 'Peugeot 208 Owner',
          text: 'My car broke down on the highway. Breda AutoFix helped me quickly with a diagnostic and repair. Life savers!',
          stars: 5
        },
        {
          name: 'Mark de Vries',
          role: 'Volkswagen Golf Owner',
          text: 'Professional team. They spotted an issue with my timing belt during a routine check that saved me a fortune.',
          stars: 5
        },
        {
          name: 'Emma Willems',
          role: 'Audi A3 Owner',
          text: 'Super clean workshop and knowledgeable mechanics. The digital report they sent was very clear.',
          stars: 5
        },
        {
          name: 'Jan Pietersen',
          role: 'Volvo V60 Owner',
          text: 'Reliable service for my fleet of business cars. Always on time and fair pricing.',
          stars: 5
        }
      ]
    },
    booking: {
      header: 'Book Your Appointment',
      subtitle: 'Easy online scheduling in 3 steps.',
      steps: {
        service: 'Service',
        date: 'Date & Time',
        details: 'Details',
      },
      serviceSel: {
        title: 'Select a Service',
      },
      calendar: {
        selectDate: 'Select a Date',
        availTimes: 'Available Times',
        selectDateFirst: '* Please select a date first',
      },
      form: {
        title: 'Your Details',
        name: 'Full Name',
        email: 'Email Address',
        phone: 'Phone Number',
        notes: 'Additional Notes (Optional)',
        placeholderName: 'John Doe',
        placeholderNotes: 'Car model, license plate, specific issues...',
      },
      actions: {
        back: 'Back',
        next: 'Next Step',
        confirm: 'Confirm Booking',
        bookAnother: 'Book Another Service',
      },
      success: {
        title: 'Booking Confirmed!',
        msg1: 'Thanks',
        msg2: "We'll see you on",
        at: 'at',
        emailSent: 'A confirmation email has been sent to',
      }
    },
    contact: {
      header: 'Get In Touch',
      title: 'Visit Our Garage',
      location: 'Our Location',
      phone: 'Phone',
      email: 'Email',
      hours: 'Mon-Fri 8am-6pm',
      reply: 'We reply within 24 hours',
    },
    footer: {
      about: 'Your trusted partner for car maintenance in Breda. Professional service, transparent pricing, and expert mechanics.',
      contactHeader: 'Contact Us',
      hoursHeader: 'Opening Hours',
      navHeader: 'Navigate',
      days: {
        monfri: 'Mon - Fri',
        sat: 'Saturday',
        sun: 'Sunday',
      },
      closed: 'Closed',
      rights: 'Breda AutoFix. All rights reserved.',
    },
    ai: {
      title: 'AI Mechanic',
      intro: 'Hi! I am the AutoFix AI Assistant. Describe your car problem, and I can suggest a service!',
      placeholder: 'Ex: My brakes are squeaking...',
      loading: 'Thinking...',
    }
  },
  nl: {
    nav: {
      home: 'Home',
      services: 'Diensten',
      reviews: 'Ervaringen',
      contact: 'Contact',
      book: 'Nu Boeken',
      bookAppt: 'Afspraak Maken',
    },
    hero: {
      title1: 'Expert Auto Onderhoud',
      title2: 'in Breda',
      subtitle: 'Van APK keuringen tot motor diagnoses. Wij brengen moderne technologie en expertise om uw voertuig soepel te laten rijden.',
      ctaPrimary: 'Afspraak Maken',
      ctaSecondary: 'Bekijk Diensten',
    },
    services: {
      header: 'Wat Wij Doen',
      title: 'Complete Auto Oplossingen',
      subtitle: 'Wij gebruiken de nieuwste apparatuur om te zorgen dat uw auto veilig en betrouwbaar is.',
      est: 'Est.',
      mins: 'min',
      from: 'vanaf',
      learnMore: 'Meer Info',
      bookNow: 'Nu Boeken',
      modal: {
        desc: 'Beschrijving',
        included: 'Inbegrepen',
        duration: 'Duur',
        startsFrom: 'Vanaf',
        bookBtn: 'Boek Deze Dienst',
        close: 'Sluiten',
      },
      items: {
        apk: {
          title: 'APK Keuring',
          desc: 'Officiële periodieke keuring om veiligheids- en milieunormen te waarborgen.',
          features: ['Officieel RDW Rapport', 'Emissietest', 'Veiligheidscontrole', 'Koplampafstelling', 'Remtest']
        },
        'maintenance-small': {
          title: 'Kleine Beurt',
          desc: 'Olie verversen, filter vervangen en vloeistoffen bijvullen.',
          features: ['Synthetische Olie (tot 4L)', 'Oliefilter Vervangen', 'Vloeistoffen Bijvullen', 'Accu Check', 'Bandenspanning']
        },
        'maintenance-large': {
          title: 'Grote Beurt',
          desc: 'Uitgebreide controle inclusief remmen, bougies, filters en diagnose.',
          features: ['Alle Filters Vervangen', 'Bougies Vervangen', 'Uitgebreide Reminspectie', 'Versnellingsbakolie Check', 'Diagnose Scan']
        },
        tires: {
          title: 'Bandenwissel',
          desc: 'Seizoenswissel (Zomer/Winter) inclusief balanceren.',
          features: ['Demontage & Montage', 'Elektronisch Balanceren', 'Ventiel Vervangen', 'Bandenspanning Check', 'Bandenopslag Mogelijk']
        },
        ac: {
          title: 'Airco Service',
          desc: 'Bijvullen en reinigen van uw aircosysteem.',
          features: ['Koudemiddel Terugwinnen', 'Lektest', 'Systeem Bijvullen', 'Compressorolie Bijvullen', 'Geurbehandeling']
        },
        diagnostics: {
          title: 'Diagnose',
          desc: 'Computeruitlezing van motorstoringen en probleemoplossing.',
          features: ['OBD-II Uitlezen', 'Live Data Analyse', 'Systeem Reset', 'Geprint Rapport', 'Reparatie Offerte']
        }
      }
    },
    pricing: {
      header: 'Transparante Prijzen',
      title: 'Geen Verborgen Kosten',
      subtitle: 'Scherpe tarieven voor topkwaliteit service in Breda.',
      perVehicle: '/auto',
      popular: 'Meest Gekozen',
      book: 'Boek',
      disclaimer: '* Prijzen kunnen variëren afhankelijk van automodel en olievereisten. Definitieve offerte vooraf.',
      items: [
        { name: 'APK Keuring', price: '€39.95', features: ['Veiligheidscheck', 'Emissietest', 'Officieel Rapport', 'Gratis herkeuring (14 dagen)'] },
        { name: 'Airco Service', price: '€99', features: ['Systeem Druktest', 'Koudemiddel Vullen', 'Lekcheck', 'Geurbehandeling'] },
        { name: 'Kleine Beurt', price: '€165', features: ['Synthetische Olie (tot 4L)', 'Oliefilter', 'Vloeistoffen Top-up', 'Visuele Veiligheidscheck'] },
      ]
    },
    testimonials: {
      header: 'Ervaringen',
      title: 'Wat Klanten Zeggen',
      subtitle: 'Wij zijn trots op onze reputatie in Breda en omstreken.',
      reviews: [
        {
          name: 'Sophie van den Berg',
          role: 'Eigenaar Toyota Yaris',
          text: 'Snelle en vriendelijke service. De APK was binnen een uur klaar. Fijne wachtruimte met koffie!',
          stars: 5
        },
        {
          name: 'Thomas Jansen',
          role: 'Eigenaar BMW 3 Serie',
          text: 'Eindelijk een garage die transparant is over de kosten. Ze belden me voordat ze de remmen vervingen. Eerlijk werk.',
          stars: 5
        },
        {
          name: 'Lisa Bakker',
          role: 'Eigenaar Peugeot 208',
          text: 'Mijn auto begaf het op de snelweg. Breda AutoFix hielp me snel met een diagnose en reparatie. Geweldig!',
          stars: 5
        },
        {
          name: 'Mark de Vries',
          role: 'Eigenaar Volkswagen Golf',
          text: 'Professioneel team. Ze ontdekten een probleem met mijn distributieriem tijdens een routinecontrole, wat me veel geld bespaarde.',
          stars: 5
        },
        {
          name: 'Emma Willems',
          role: 'Eigenaar Audi A3',
          text: 'Super schone werkplaats en deskundige monteurs. Het digitale rapport dat ze stuurden was erg duidelijk.',
          stars: 5
        },
        {
          name: 'Jan Pietersen',
          role: 'Eigenaar Volvo V60',
          text: 'Betrouwbare service voor mijn wagenpark. Altijd op tijd en eerlijke prijzen.',
          stars: 5
        }
      ]
    },
    booking: {
      header: 'Maak Een Afspraak',
      subtitle: 'Eenvoudig online inplannen in 3 stappen.',
      steps: {
        service: 'Dienst',
        date: 'Datum & Tijd',
        details: 'Gegevens',
      },
      serviceSel: {
        title: 'Kies een Dienst',
      },
      calendar: {
        selectDate: 'Kies een Datum',
        availTimes: 'Beschikbare Tijden',
        selectDateFirst: '* Kies eerst een datum',
      },
      form: {
        title: 'Uw Gegevens',
        name: 'Volledige Naam',
        email: 'E-mailadres',
        phone: 'Telefoonnummer',
        notes: 'Opmerkingen (Optioneel)',
        placeholderName: 'Jan Jansen',
        placeholderNotes: 'Auto model, kenteken, specifieke klachten...',
      },
      actions: {
        back: 'Terug',
        next: 'Volgende Stap',
        confirm: 'Bevestig Afspraak',
        bookAnother: 'Nog een afspraak maken',
      },
      success: {
        title: 'Afspraak Bevestigd!',
        msg1: 'Bedankt',
        msg2: 'We zien u graag op',
        at: 'om',
        emailSent: 'Een bevestiging is gestuurd naar',
      }
    },
    contact: {
      header: 'Contact',
      title: 'Kom Langs',
      location: 'Locatie',
      phone: 'Telefoon',
      email: 'E-mail',
      hours: 'Ma-Vr 08:00-18:00',
      reply: 'Wij reageren binnen 24 uur',
    },
    footer: {
      about: 'Uw vertrouwde partner voor auto-onderhoud in Breda. Professionele service, transparante prijzen en deskundige monteurs.',
      contactHeader: 'Contact',
      hoursHeader: 'Openingstijden',
      navHeader: 'Navigatie',
      days: {
        monfri: 'Ma - Vr',
        sat: 'Zaterdag',
        sun: 'Zondag',
      },
      closed: 'Gesloten',
      rights: 'Breda AutoFix. Alle rechten voorbehouden.',
    },
    ai: {
      title: 'AI Monteur',
      intro: 'Hoi! Ik ben de AutoFix AI Assistent. Beschrijf het probleem met uw auto en ik adviseer een dienst!',
      placeholder: 'Bijv: Mijn remmen piepen...',
      loading: 'Even denken...',
    }
  }
};
