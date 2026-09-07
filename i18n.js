const MoAI = (() => {
	const LANG_KEY = 'moai-lang';
	const POLISH_TZ = 'Europe/Warsaw';

	const MONTHS_EN = {
		styczeń: 'January',
		luty: 'February',
		marzec: 'March',
		kwiecień: 'April',
		maj: 'May',
		czerwiec: 'June',
		lipiec: 'July',
		sierpień: 'August',
		wrzesień: 'September',
		październik: 'October',
		listopad: 'November',
		grudzień: 'December'
	};

	const TAGS_EN = {
		Bioinżynieria: 'Bioengineering',
		Mechanika: 'Mechanics',
		Biznes: 'Business',
		Organizacja: 'Organisation',
		Elektrotechnika: 'Electrical Engineering',
		Bezpieczeństwo: 'Security',
		Muzyka: 'Music',
		'Sieci neuronowe': 'Neural networks',
		Symulacja: 'Simulation',
		Uczelnia: 'University',
		Turystyka: 'Tourism',
		Prawo: 'Law',
		Sprzedaż: 'Sales',
		Konferencja: 'Conference',
		Zwycięstwo: 'Winner',
		Partnerstwo: 'Partnership',
		Sympozjum: 'Symposium',
		'Rekrutacja': 'Recruitment',
		Warszawa: 'Warsaw',
		Nauka: 'Research',
		Prelekcja: 'Talk',
		'Obrona cywilna': 'Civil defence',
		Spotkanie: 'Meetup',
		Finał: 'Final',
		Pokazy: 'Demos',
		Warsztaty: 'Workshop',
		Matematyka: 'Maths',
		Współpraca: 'Collaboration',
		'Rynek pracy': 'Labour market'
	};

	const strings = {
		pl: {
			'meta.index.title': 'MoAI – Koło Naukowe Sztucznej Inteligencji',
			'meta.index.desc': 'MoAI Politechnika Lubelska – Koło Naukowe Sztucznej Inteligencji. Zajmujemy się sztuczną inteligencją, uczeniem maszynowym, programowaniem, sieciami komputerowymi i cyberbezpieczeństwem – dołącz do nas!',
			'meta.events.title': 'MoAI - Wydarzenia',
			'meta.events.desc': 'Wydarzenia MoAI Politechnika Lubelska: konkursy, hackathony, konferencje naukowe i warsztaty organizowane przez Koło Naukowe Sztucznej Inteligencji.',
			'meta.projects.title': 'MoAI - Projekty',
			'meta.projects.desc': 'Projekty MoAI Politechnika Lubelska: sztuczna inteligencja, uczenie maszynowe, programowanie, sieci komputerowe i cyberbezpieczeństwo.',
			'meta.members.title': 'MoAI - Członkowie',
			'meta.members.desc': 'Poznaj członków MoAI Politechnika Lubelska – studentów tworzących Koło Naukowe Sztucznej Inteligencji.',
			'meta.thanks.title': 'MoAI – Dziękujemy',
			'meta.thanks.desc': 'MoAI Politechnika Lubelska – dziękujemy za zainteresowanie. Sprawdź status rekrutacji i skontaktuj się z nami.',
			'nav.events': 'Wydarzenia',
			'nav.projects': 'Projekty',
			'nav.join': 'Dołącz',
			'nav.contact': 'Kontakt',
			'lang.toEn': 'Switch to English',
			'lang.toPl': 'Przełącz na polski',
			'preloader': 'Trwa ładowanie strony',
			'noscript': 'Ta strona wymaga JavaScript do animacji i losowania projektów.',
			'hero.title': 'Twój start <span class="hero-title__line">w tworzeniu</span> <span class="hero-title__line">technologii jutra</span>',
			'hero.lead': 'Koło Naukowe Sztucznej Inteligencji MoAI <span class="hero-lead__line">na Politechnice Lubelskiej.</span>',
			'hero.join': 'Dołącz do MoAI',
			'hero.write': 'Napisz do nas',
			'who.title': 'Kim jesteśmy?',
			'who.body': 'Cześć! Tu Zespół MoAI z Politechniki Lubelskiej. Jesteśmy pasjonatami Sztucznej Inteligencji w praktycznym wydaniu. Skupiamy się na aktywnym promowaniu umiejętności i wiedzy na temat AI. Zrzeszamy najlepszych studentów z czterech wydziałów Poltechniki Lubelskiej.',
			'members.seeAll': 'Zobacz wszystkich',
			'events.title': 'Wydarzenia',
			'events.body': 'Bierzemy udział w konkursach, hackathonach, konferencjach naukowych, spotkaniach z biznesem, seminariach i imprezach uczelnianych. <br> Orgnizujemy własne wydarzenia zgodne z misją MoAI.',
			'events.all': 'Pełna lista wydarzeń',
			'events.pageTitle': 'Wydarzenia',
			'events.pageBody': 'Nie przestajemy się rozwijać - chętnie bierzemy udział w technologicznych, biznesowych i akademickich. Zobacz gdzie byliśmy:',
			'projects.title': 'Projekty',
			'projects.body': 'Zajmujemy się sztuczną inteligencją, uczeniem maszynowym, programowaniem, sieciami komputerowymi, cyberbezpieczeństwem, projektami biznesowymi, marketingiem oraz badaniami i popularyzacją nauki.',
			'projects.all': 'Pełna lista projektów',
			'projects.pageTitle': 'Wybrane Projekty',
			'projects.pageBody': 'Stawiamy na praktykę! Nasz interdyscyplinarny zespół uwielbia się uczyć i rozwiązywać nowe problemy. Sprawdź efekty naszej pracy:',
			'join.title': 'Dołącz do MoAI',
			'join.body': 'Zbuduj portfolio, wejdź do świata biznesu, poznaj ludzi i zdobywaj kompetencje przyszłości. Nauka to więcej niż studia...',
			'join.cta': 'Rekrutacja',
			'follow.title': 'Obserwuj nas',
			'follow.body': 'Nie przegap eventów, warsztatów i aktualności.',
			'contact.title': 'Chcesz współpracować?',
			'contact.body': 'Masz pomysł? Chcesz umówić się na spotkanie lub odwiedzić nas na uczelni? Wyślij nam wiadomość - odpowiemy tak szybko, jak będzie to możliwe.',
			'footer.rules': 'Regulamin',
			'footer.wz': 'Wydział Zarządzania Politechniki Lubelskiej',
			'invite.name': 'Czekamy na Ciebie',
			'invite.cta': 'Dołącz do nas',
			'members.ctaTitle': 'Wszyscy członkowie',
			'members.ctaCopy': 'Poznaj cały zespół i przejdź do profili LinkedIn.',
			'members.ctaBtn': 'Cała drużyna',
			'members.hero': 'Poznaj wszystkich członków MoAI',
			'members.intro': 'Każdy wnosi unikalne kompetencje: AI, biznes, design, operacje i społeczność.',
			'members.listCta': 'Przejdź do listy',
			'members.listTitle': 'Pełna lista',
			'members.listBody': 'Kliknij, aby przejść do profilu na LinkedIn.',
			'thanks.pill': 'Dziękujemy za zainteresowanie',
			'thanks.title': 'Aktualnie nie prowadzimy rekrutacji',
			'thanks.body': 'Jeśli mimo tego chcesz z nami współpracować, napisz na <a href="mailto:moai@pollub.edu.pl">moai@pollub.edu.pl</a>. Odpowiadamy możliwie szybko.',
			'thanks.write': 'Napisz do nas',
			'thanks.home': 'Wróć na stronę główną'
		},
		en: {
			'meta.index.title': 'MoAI – AI Student Research Club',
			'meta.index.desc': 'MoAI at Lublin University of Technology is a student research club for artificial intelligence, machine learning, programming, computer networks and cybersecurity. Join us!',
			'meta.events.title': 'MoAI - Events',
			'meta.events.desc': 'MoAI events at Lublin University of Technology: competitions, hackathons, academic conferences and workshops by the AI student research club.',
			'meta.projects.title': 'MoAI - Projects',
			'meta.projects.desc': 'MoAI projects at Lublin University of Technology: artificial intelligence, machine learning, programming, computer networks and cybersecurity.',
			'meta.members.title': 'MoAI - Members',
			'meta.members.desc': 'Meet the MoAI team at Lublin University of Technology — students behind the AI research club.',
			'meta.thanks.title': 'MoAI – Thank you',
			'meta.thanks.desc': 'MoAI at Lublin University of Technology — thank you for your interest. Check recruitment and get in touch.',
			'nav.events': 'Events',
			'nav.projects': 'Projects',
			'nav.join': 'Join',
			'nav.contact': 'Contact',
			'lang.toEn': 'Switch to English',
			'lang.toPl': 'Switch to Polish',
			'preloader': 'Loading…',
			'noscript': 'This page needs JavaScript for animations and featured projects.',
			'hero.title': 'Your start <span class="hero-title__line">in building</span> <span class="hero-title__line">tomorrow’s technology</span>',
			'hero.lead': 'MoAI, the student AI research club <span class="hero-lead__line">at Lublin University of Technology.</span>',
			'hero.join': 'Join MoAI',
			'hero.write': 'Get in touch',
			'who.title': 'Who we are',
			'who.body': 'Hi — we’re the MoAI team at Lublin University of Technology. We’re passionate about putting AI into practice. We promote AI skills and knowledge, and bring together students from four faculties across the university.',
			'members.seeAll': 'See all members',
			'events.title': 'Events',
			'events.body': 'We take part in competitions, hackathons, academic conferences, business meetings, seminars and campus events. <br> We also run our own events that match the MoAI mission.',
			'events.all': 'All events',
			'events.pageTitle': 'Events',
			'events.pageBody': 'We’re always learning — we show up at technology, business and academic events. Here’s where we’ve been:',
			'projects.title': 'Projects',
			'projects.body': 'We work on artificial intelligence, machine learning, programming, computer networks, cybersecurity, business projects, marketing, research and science outreach.',
			'projects.all': 'All projects',
			'projects.pageTitle': 'Selected projects',
			'projects.pageBody': 'We learn by building. Our interdisciplinary team loves picking up new skills and solving new problems. Here’s some of our work:',
			'join.title': 'Join MoAI',
			'join.body': 'Build a portfolio, get closer to business, meet people and pick up skills that will matter. Learning is more than a degree...',
			'join.cta': 'Recruitment',
			'follow.title': 'Follow us',
			'follow.body': 'Don’t miss our events, workshops and updates.',
			'contact.title': 'Want to work together?',
			'contact.body': 'Got an idea? Want to set up a meeting or visit us on campus? Send us a message — we’ll reply as soon as we can.',
			'footer.rules': 'Statute',
			'footer.wz': 'Faculty of Management, Lublin University of Technology',
			'invite.name': 'We’re waiting for you',
			'invite.cta': 'Join us',
			'members.ctaTitle': 'All members',
			'members.ctaCopy': 'Meet the full team and visit their LinkedIn profiles.',
			'members.ctaBtn': 'Full team',
			'members.hero': 'Meet the MoAI team',
			'members.intro': 'Everyone brings something different: AI, business, design, operations and community.',
			'members.listCta': 'See the list',
			'members.listTitle': 'Full list',
			'members.listBody': 'Click through to a LinkedIn profile.',
			'thanks.pill': 'Thank you for your interest',
			'thanks.title': 'We’re not recruiting right now',
			'thanks.body': 'If you’d still like to work with us, write to <a href="mailto:moai@pollub.edu.pl">moai@pollub.edu.pl</a>. We’ll get back to you as soon as we can.',
			'thanks.write': 'Email us',
			'thanks.home': 'Back to the homepage'
		}
	};

	const PROJECT_EN = {
		braidak: {
			description: 'The winning AI assistant for the City of Lublin. Zero-cloud RAG on the Bielik model, ChromaDB, text-to-speech and a clear map of points of interest — local AI that runs on the city’s unstructured data.',
			alt: 'brAIdak project graphic: an AI assistant for the City of Lublin.'
		},
		'banking-innovation': {
			description: 'Winning project from the 4th Student Business Festival. An intelligent system that spots threats for bank customers and sends targeted alerts to the groups most at risk.',
			alt: 'Banking Innovation graphic: threat detection and alerts for bank customers.'
		},
		'obrona-cywilna': {
			title: 'Next-generation civil defence',
			description: 'LubSHIELD is a web app with a view for residents and a crisis-management dashboard for local governments. The interface stays clear in peacetime and in an emergency.',
			alt: 'LubShield graphic: a geospatial decision dashboard for the Marshal of the Lublin Voivodeship.'
		},
		ledger: {
			description: 'A Civil42 2026 hackathon project: pre-seeded wallets and an offline transaction console for crisis work and field logistics — with online, partitioned-network and emergency modes.',
			alt: 'Secure Enclave Wallets dashboard: crisis wallets and an offline transaction console.'
		},
		moodify: {
			description: 'A recommendation model that turns a mood description and a chosen genre into a personalised playlist. Mood and genre go in; a set of tracks for the moment comes out.'
		},
		inticheck: {
			description: 'A neural-network triage system for dermatology. It ranks skin-image cases by risk and always leaves the final clinical decision to a doctor.'
		},
		taxifleet: {
			description: 'A platform for monitoring and analysing taxi-fleet drivers. It collects signals from every ride and flags unusual patterns before they show up in the books.'
		},
		'planet-twin': {
			title: 'Digital twin of a planet',
			description: 'The winning Hack4Sages project — a digital twin of exoplanet TRAPPIST-1e called ExoStress Twin. Using NASA data, it simulates climate and water-mass transport in real time, including stellar flares and their effect on biosignatures.'
		},
		'promo-wz': {
			title: 'Promoting the Faculty of Management',
			description: 'MoAI’s president set up a Faculty of Management promotion team of students and staff. The team built a promotion strategy and marketing campaigns, and is refreshing the channels used to reach students.',
			alt: 'Promotion materials of the Faculty of Management at Lublin University of Technology.'
		},
		bydgo: {
			description: 'An interactive guide to Bydgoszcz, built at HackNation for the Ministry of Sport and Tourism. A map, routes and visit stats help you explore the city at your own pace.',
			alt: 'BydGO app mockup: a map of Bydgoszcz, routes and visit statistics.'
		},
		'ml-admin': {
			title: 'ML for public administration',
			description: 'Legis 2.0 from HackNation: machine-learning models that analyse legal acts and keep them consistent, with tools for officials and citizens — plain-language law without sending data to a foreign cloud.',
			alt: 'Legis 2.0 login screen: law that understands you, sign-in via Poland’s National Node.'
		},
		'esa-agri': {
			title: 'ESA satellite data for agriculture',
			description: 'A model that analyses European Space Agency satellite imagery for farmers, companies and government agencies. It pulls from orbit what you cannot see from the field.',
			alt: 'AgrAI slide: NDVI on Sentinel-2 data and an app mockup with a field map.'
		},
		slower: {
			description: 'A CASSINI hackathon app: slow-travel navigation on Copernicus data. It looks for the lowest-CO₂ route and maps “green oases”, instead of sending you down the fastest road every time.',
			alt: 'slower app mockups: oasis map and eco-route on Copernicus data around Wrocław.'
		},
		'jetbrains-co2': {
			title: 'CO₂ monitor in JetBrains',
			description: 'A JetBrains plugin awarded at the BHL hackathon. It tracks the CO₂ from your code in real time, spots inefficient Python patterns and suggests AI-assisted fixes before energy-heavy code ships.',
			alt: 'codeGreen plugin demo in PyCharm: code efficiency and carbon-footprint analysis.'
		},
		cardioscan: {
			description: 'A heart-murmur analysis tool trained on the CirCor DigiScope dataset — a diagnostic model with sensitivity and specificity around 90%.',
			alt: 'CardioScan interface: a diagnostic terminal with auscultation case examples.'
		},
		'plant-nn': {
			title: 'Intelligent plant cultivation',
			description: 'A neural network that controls plant-growth parameters. Instead of tuning conditions by hand, the network sets them from cultivation data — a step toward repeatable, innovative growing.',
			alt: 'Smart-cultivation setup: a coding station and basil under an LED lamp.'
		},
		'dynamic-ui': {
			title: 'Dynamic user interface',
			description: 'A case study of an AI-assisted dynamic interface, built on a live Comarch brief during the 3rd Student Business Festival. The UX/UI layer adapts to how people behave and guides them through the sales journey.'
		},
		julia: {
			title: 'Julia — virtual patient assistant',
			description: 'Julia is a virtual patient assistant and the winning project of the 3rd Student Business Festival, built for Luxmed. It books appointments, explains procedures, introduces doctors and helps people find their way around the clinic website.',
			alt: 'Graphic of Julia, a virtual patient assistant built for Luxmed.'
		},
		onhelo: {
			description: 'A fitness app with medtech elements, winner of the 2nd Student Business Festival. Machine-learning models watch exercise form and help lower the risk of injury.',
			alt: 'OnHelo app mockups: profile setup, specialist contact, workouts and progress.'
		}
	};

	const EVENT_EN = {
		'it-unplugged': {
			description: 'We went to the IT Unplugged conference for talks on AI, data engineering, system architecture, cybersecurity and professional wellbeing — and came back with new contacts in IT.',
			alt: 'IT Unplugged 2026 panel: three people on stage in armchairs, blue lighting and the IT UNPLUGGED sign.'
		},
		'urban-lab': {
			description: 'We took 1st place and the City of Lublin grand prize. We built “brAIdak” — a zero-cloud RAG agent on Bielik, with voice access and a map of points of interest.',
			alt: 'MoAI team with a 1st-place diploma at Urban Lab Challenge — Lublin City of Energy.'
		},
		sfb4: {
			title: '4th Student Business Festival',
			description: 'Three MoAI teams joined the 4th Student Business Festival, working on briefs from the county office, CEWAR and UniCredit. We won for the third year in a row — this time with “Banking Innovation” for UniCredit.',
			alt: 'MoAI team and organisers on stage at the 4th Student Business Festival with a PLN 8,000 prize cheque.'
		},
		'hackology-2': {
			description: 'Two MoAI teams joined Hackology 2, where participants designed industrial solutions for image processing.',
			alt: 'Group photo of Hackology 2 participants on stage, with strategic partner Asseco in the background.'
		},
		cybermil: {
			title: 'CyberMil CTF final',
			description: 'MoAI’s president and a cross-faculty team represented Lublin University of Technology at the CyberMil Academy Final, hosted by a Ministry of National Defence unit in Warsaw.',
			alt: 'Participants of the CyberMil Academy CTF final on 6 May 2026, including people in uniform, in front of the event slide.'
		},
		'erasmus-startup': {
			description: 'We invited Erasmus students to work on business and research projects. Two teams presented at the StartUp Horizon Conference and took 1st and 2nd place.',
			alt: 'Lecture hall during an Erasmus StartUp Projects presentation: Our Team slide and Faculty of Management banners.'
		},
		'bielik-google': {
			title: 'Bielik AI × Google workshop',
			description: 'One of our members ran a workshop with Google for Developers and SpeakLeash. Together we set up Bielik LLM infrastructure on Google Cloud, built a BigQuery vector store and orchestrated the full RAG system.',
			alt: 'Participants of the Bielik AI × Google workshop in front of the Bielik Squadron slide.'
		},
		'civil42-2026': {
			description: 'We joined Civil42, a civil-defence hackathon organised by Instytut 42. We built a web app to support residents and local governments in emergencies, testing our skills in practice and meeting civil-security experts.',
			alt: 'Welcome for Civil42 hackathon participants in 2026 at Instytut 42.'
		},
		'dni-otwarte-2026': {
			title: 'Open Days at Lublin University of Technology 2026',
			description: 'We ran a stand for Artificial Intelligence in Business at LUT Open Days. We showed AR models, gesture tracking and image editing, talked to future students and gave campus tours.',
			alt: 'MoAI members at a booth with monitors during LUT Open Days 2026.'
		},
		'mit-ai-summit': {
			description: 'MoAI members attended the MIT AI Summit in Warsaw. We heard from experts such as Prof. Włodzisław Duch and Prof. Piotr Sankowski. Talks on the future of AI and resilient systems mixed academic thinking with industry reality.',
			alt: 'MIT AI Summit stage with the panel From Lab to Market: Rewiring Polish Science for the 21st Century.'
		},
		seminarium: {
			title: 'Inter-faculty research seminar',
			description: 'At the Inter-faculty Research Seminar we presented three projects: TaxiFleet for fleet management, IntiCheck for spotting skin lesions in photos, and Moodify for recommending content from mood.',
			alt: 'Hall during the Inter-faculty Research Seminar: audience and a speaker by the screen.'
		},
		'pollubmy-marketing': {
			description: 'We spoke at Pollubmy Marketing about upstream modelling from the causal-inference family — how machine-learning models help agencies meet business needs and cut campaign costs.',
			alt: 'Auditorium at the 4th Young Researchers’ Marketing Conference: audience and a screen with the event title.'
		},
		'ensemble-warsaw': {
			title: 'Ensemble AI — Warsaw',
			description: 'We solved every Ensemble AI hackathon task in Warsaw and finished 6th out of nearly 50 teams, reaching the final presentations. The brief covered ML in medical diagnostics, molecular biology and LLM security.',
			alt: 'MoAI team on the Ensemble AI stage in Warsaw during the final presentation.'
		},
		hack4sages: {
			description: 'We won international Hack4Sages among 200+ participants from six continents. Our digital twin of TRAPPIST-1e beat teams from Harvard and Cambridge, and in September we present it at the Origins Federation conference at ETH Zürich.'
		},
		'brave-community': {
			title: '2nd Brave Community meetup',
			description: 'We started working with Lublin’s Brave Community at its 2nd meetup. We keep going back to later editions and are preparing a talk of our own for an upcoming meeting.',
			alt: 'Participants of the 2nd Brave Community meetup on the auditorium steps, group photo.'
		},
		'polska-siega-gwiazd': {
			title: 'Poland Reaches for the Stars',
			description: 'We joined a meeting with Sławosz Uznański, astronaut of the IGNIS mission, and asked him questions live. Afterwards we met people from other research clubs and partner institutions.',
			alt: 'Sławosz Uznański in a flight suit on stage at Poland Reaches for the Stars.'
		},
		hacknation: {
			description: 'We tackled 16 tasks in 24 hours at HackNation in Bydgoszcz, organised by the Ministry of Digital Affairs, the Ministry of Finance, the Ministry of National Defence and the Ministry of Science. What came out of it included BydGO for the Ministry of Sport and Tourism and Legis 2.0 for analysing legal acts.',
			alt: 'MoAI team on the HackNation stage with red boards spelling HACK NATION.'
		},
		'hackathon-google': {
			description: 'We joined a Google hackathon in Warsaw, prototyping with mentors in short, intense team sprints on real business problems.',
			alt: 'MoAI team at the Google Hackathon in Warsaw, December 2025.'
		},
		'akademia-inzynierska': {
			title: '46th Assembly of the Academy of Engineering',
			description: 'At the 46th Assembly of the Academy of Engineering we presented MoAI’s work and plans, representing Lublin University of Technology. We also saw other research clubs show their technology live.',
			alt: 'MoAI club presentation with a we are MoAI slide, LinkedIn and Instagram at the Academy of Engineering assembly.'
		},
		bhl: {
			title: 'BHL hackathon final',
			description: 'We took 3rd place in the AI category at the 11th BHL hackathon in Warsaw. We built a JetBrains plugin that tracks CO₂ from code and suggests AI-assisted fixes.',
			alt: 'MoAI team with diplomas and bags on the BHL hackathon final stage.'
		},
		cassini: {
			description: 'A seven-person MoAI team spent three days at the CASSINI hackathon in Wrocław, looking for uses of ESA satellite data. We built an app that rethinks slow travel — personalised routes powered by data straight from orbit.',
			alt: 'MoAI team at the CASSINI hackathon in Wrocław.'
		},
		'targi-kol': {
			title: '4th LUT Student Research Club Fair',
			description: 'At the 4th LUT Student Research Club Fair we showed models that generate video-game worlds and Stable Diffusion for images — promoting AI and ML among students and secondary-school pupils.',
			alt: 'MoAI stand at the 4th Student Research Club Fair of Lublin University of Technology, October 2025.'
		},
		'warsztaty-matematyczne': {
			title: 'Maths workshop for new students',
			description: 'We ran a maths workshop for new students — together we revised the basics to make the start of university easier and to prepare for the first tests.',
			alt: 'MoAI maths workshop: students at desks, a tutor at a green blackboard.'
		},
		sfb3: {
			title: '3rd Student Business Festival',
			description: 'We won the Student Business Festival again — one team presented the Julia chatbot for Luxmed, while another worked in parallel on a live Comarch brief for an AI-assisted dynamic interface.',
			alt: 'MoAI team at the 3rd Student Business Festival, in front of the Festiwal Biznesu sign.'
		},
		ghostday: {
			description: 'We went to GhostDay: Applied Machine Learning in Poznań to hear from experts and swap notes with other ML enthusiasts. We came back with new ideas and new contacts.',
			alt: 'GhostDay 2025 stage: a speaker by a slide with formulas, next to the Ghost Day banner.'
		},
		spaceshield: {
			description: 'We reached the SpaceShield hackathon final in Stalowa Wola. Our TITAN project made crisis-communications systems harder to jam or eavesdrop on.',
			alt: 'MoAI team at the SpaceShield hackathon final in Stalowa Wola.'
		},
		'civil42-2025': {
			description: 'We joined the Civil42 hackathon and built a web app that supports residents and local governments in emergencies.',
			alt: 'Civil42 hackathon participants in May 2025 at Instytut 42.'
		},
		'dni-otwarte-2025': {
			title: 'Open Days at Lublin University of Technology 2025',
			description: 'We set up a stand at LUT Open Days — showing our projects, talking to applicants and inviting them to the club.',
			alt: 'LUT corridor during Open Days 2025, a stand and conversations with applicants.'
		},
		'ensemble-krakow': {
			title: 'Ensemble AI — Kraków',
			description: 'We reached the Ensemble AI final in Kraków, finishing 4th on tasks prepared by the CISPA Helmholtz Center.',
			alt: 'MoAI team at the international Ensemble AI hackathon in Kraków.'
		},
		sfb2: {
			title: '2nd Student Business Festival',
			description: 'We took 1st place at the 2nd Student Business Festival with the OnHelo fitness app — MoAI’s first major win on the business stage.',
			alt: 'MoAI team with a PLN 5,000 cheque at the 2nd Student Business Festival, 24 May 2024.'
		},
		'sympozjum-xxxii': {
			title: '32nd Scientific Symposium',
			description: 'We spoke at the 32nd International Scientific Symposium “AI – opportunity or threat?”, presenting the club’s skills and research projects to the LUT academic community.',
			alt: 'Auditorium of the 32nd International Scientific Symposium at LUT, 15–17 May 2024: screen with the title AI – opportunity or threat?'
		},
		pip: {
			title: 'National Labour Inspectorate 105th-anniversary conference',
			description: 'We spoke at the National Labour Inspectorate’s 105th-anniversary conference about AI in the labour market — the regulatory challenges and the opportunities this technology opens for workers and institutions.',
			alt: 'MoAI team speaking at the National Labour Inspectorate’s 105th-anniversary conference.'
		}
	};

	let lang = 'pl';
	let rerender = () => {};

	function readSavedLang() {
		try {
			const saved = localStorage.getItem(LANG_KEY);
			if (saved === 'pl' || saved === 'en') return saved;
		} catch {
			// Ignore storage errors.
		}
		return null;
	}

	function timezoneLang() {
		try {
			if (Intl.DateTimeFormat().resolvedOptions().timeZone === POLISH_TZ) return 'pl';
		} catch {
			// Ignore.
		}
		return 'en';
	}

	function detectLang() {
		return readSavedLang() || timezoneLang();
	}

	function t(key) {
		return strings[lang]?.[key] ?? strings.pl[key] ?? key;
	}

	function translateCategory(value) {
		if (lang === 'pl' || typeof value !== 'string') return value;
		return value.replace(/styczeń|luty|marzec|kwiecień|maj|czerwiec|lipiec|sierpień|wrzesień|październik|listopad|grudzień/gi, (month) => (
			MONTHS_EN[month.toLowerCase()] || month
		));
	}

	function translateTag(tag) {
		if (lang === 'pl') return tag;
		return TAGS_EN[tag] || tag;
	}

	function localizeEntry(item, kind) {
		if (!item) return item;
		const pack = kind === 'event' ? EVENT_EN : PROJECT_EN;
		const extra = lang === 'en' ? (pack[item.id] || {}) : {};
		return {
			...item,
			title: extra.title || item.title,
			description: extra.description || item.description,
			alt: extra.alt || item.alt,
			category: extra.category || translateCategory(item.category),
			tags: (item.tags || []).map(translateTag)
		};
	}

	function applyDocumentMeta() {
		const page = document.body?.dataset?.page || 'index';
		document.title = t(`meta.${page}.title`);
		const desc = document.querySelector('meta[name="description"]');
		if (desc) desc.setAttribute('content', t(`meta.${page}.desc`));
		document.documentElement.lang = lang;
		document.documentElement.setAttribute('data-lang', lang);
	}

	function applyStatic() {
		applyDocumentMeta();
		document.querySelectorAll('[data-i18n]').forEach((el) => {
			el.textContent = t(el.dataset.i18n);
		});
		document.querySelectorAll('[data-i18n-html]').forEach((el) => {
			el.innerHTML = t(el.dataset.i18nHtml);
		});
		document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
			el.setAttribute('aria-label', t(el.dataset.i18nAria));
		});
		document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
			el.setAttribute('alt', t(el.dataset.i18nAlt));
		});
		updateToggles();
	}

	function updateToggles() {
		const label = lang === 'pl' ? t('lang.toEn') : t('lang.toPl');
		document.querySelectorAll('[data-lang-toggle]').forEach((btn) => {
			btn.textContent = lang === 'pl' ? 'EN' : 'PL';
			btn.setAttribute('aria-label', label);
			btn.setAttribute('title', label);
		});
	}

	function setLang(next, { persist = true } = {}) {
		if (next !== 'pl' && next !== 'en') return;
		lang = next;
		if (persist) {
			try {
				localStorage.setItem(LANG_KEY, lang);
			} catch {
				// Ignore storage errors.
			}
		}
		applyStatic();
		rerender();
	}

	function toggleLang() {
		setLang(lang === 'pl' ? 'en' : 'pl', { persist: true });
	}

	function bindToggles() {
		document.querySelectorAll('[data-lang-toggle]').forEach((btn) => {
			btn.addEventListener('click', toggleLang);
		});
	}

	async function refineFromGeo() {
		if (readSavedLang()) return;
		try {
			const controller = new AbortController();
			const timer = window.setTimeout(() => controller.abort(), 1500);
			const response = await fetch('https://ipwho.is/?fields=success,country_code', {
				signal: controller.signal
			});
			window.clearTimeout(timer);
			const data = await response.json();
			if (!data?.success || !data.country_code) return;
			const next = data.country_code === 'PL' ? 'pl' : 'en';
			if (next !== lang) setLang(next, { persist: false });
		} catch {
			// Keep timezone-based language if geo lookup fails.
		}
	}

	function init(options = {}) {
		if (typeof options.rerender === 'function') rerender = options.rerender;
		lang = detectLang();
		applyStatic();
		bindToggles();
		refineFromGeo();
	}

	return {
		get lang() { return lang; },
		t,
		translateTag,
		localizeEntry,
		applyStatic,
		setLang,
		init
	};
})();
