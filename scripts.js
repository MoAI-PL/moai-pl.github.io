const members = [
	{
		name: 'Aleksandra Reja',
		image: 'images/member-profiles/ola.webp',
		linkedin: 'https://www.linkedin.com/in/aleksandra-reja-a736353a8/',
		tags: ['Frontend', 'Web', 'Design']
	},
	{
		name: 'Damian Cybula',
		image: 'images/member-profiles/damian.webp',
		linkedin: 'https://www.linkedin.com/in/damian-cybula/',
		tags: ['AI', 'Hardware', 'Bioinżynieria']
	},
	{
		name: 'Jakub Goleman',
		image: 'images/member-profiles/kuba.webp',
		linkedin: 'https://www.linkedin.com/in/jakubgoleman/',
		tags: ['Mechanika', 'Hardware', 'Pitch']
	},
	{
		name: 'Jan Domański',
		image: 'images/member-profiles/janek.webp',
		linkedin: 'https://www.linkedin.com/in/jandomanski77/',
		tags: ['Biznes', 'Product', 'FinTech']
	},
	{
		name: 'Kacper Gałan',
		image: 'images/member-profiles/kacper.webp',
		linkedin: 'https://www.linkedin.com/in/kacpergalan/',
		tags: ['Data Science', 'ML', 'Analytics']
	},
	{
		name: 'Kamila Bąk',
		image: 'images/member-profiles/kamila.webp',
		linkedin: 'https://www.linkedin.com/in/kamila-b%C4%85k-376b69397/',
		tags: ['Community', 'Content', 'Social Media']
	},
	{
		name: 'Karol Kowal',
		image: 'images/member-profiles/karol.webp',
		linkedin: 'https://www.linkedin.com/in/kowal-karol/',
		tags: ['Data Science', 'ML Ops', 'Events']
	},
	{
		name: 'Kasia Kuczyńska',
		image: 'images/member-profiles/kasiak.webp',
		linkedin: 'https://www.linkedin.com/in/katarzyna-kuczy%C5%84ska/',
		tags: ['Research', 'Community', 'Marketing']
	},
	{
		name: 'Katarzyna Widłak',
		image: 'images/member-profiles/kasiaw.webp',
		linkedin: 'https://www.linkedin.com/in/katarzyna--wid%C5%82ak/',
		tags: ['AI', 'Community', 'Research', 'Elektrotechnika']
	},
	{
		name: 'Krystian Góźdź',
		image: 'images/member-profiles/krystian.webp',
		linkedin: 'https://www.linkedin.com/in/krystian-gozdz/',
		tags: ['Cloud', 'Backend', 'LLM']
	},
	{
		name: 'Maja Sykuła',
		image: 'images/member-profiles/maja.webp',
		linkedin: 'https://www.linkedin.com/in/maja-syku%C5%82a-6a24493b7/',
		tags: ['Events', 'Community', 'Organizacja']
	},
	{
		name: 'Maks Kozieł',
		image: 'images/member-profiles/maks.webp',
		linkedin: 'https://www.linkedin.com/in/maks-koziel/',
		tags: ['AI', 'Growth', 'Strategy']
	},
	{
		name: 'Mikołaj Krzywicki',
		image: 'images/member-profiles/mikolaj.webp',
		linkedin: 'https://www.linkedin.com/in/miko%C5%82aj-krzywicki/',
		tags: ['Cybersec', 'ML', 'Space']
	},
	{
		name: 'Nadia Klimek',
		image: 'images/member-profiles/nadia.webp',
		linkedin: 'https://www.linkedin.com/in/nadia-klimek-a15652390/',
		tags: ['NLP', 'MedTech', 'Chatbot']
	},
	{
		name: 'Piotr Niemiec',
		image: 'images/member-profiles/piotrek.webp',
		linkedin: 'https://www.linkedin.com/in/piotrniemiec/',
		tags: ['Data', 'Operations', 'Mobility']
	},
	{
		name: 'Sandra Zaremba',
		image: 'images/member-profiles/sandra.webp',
		linkedin: 'https://www.linkedin.com/in/sandra-zaremba-4466a4389/',
		tags: ['Design', 'Communications', 'Brand']
	},
	{
		name: 'Szymon Gazdowicz',
		image: 'images/member-profiles/szymon.webp',
		linkedin: 'https://www.linkedin.com/in/szymon-gazdowicz/',
		tags: ['Data Science', 'AgriTech', 'Satellite']
	},
	{
		name: 'Zuzanna Marciniak',
		image: 'images/member-profiles/zuzia.webp',
		linkedin: 'https://www.linkedin.com/in/zuzanna-marciniak-54391938a/',
		tags: ['UX/UI', 'Product', 'Accessibility']
	},
	{
		name: 'Dołącz do nas',
		linkedin: '/thanks/',
		tags: [],
		invite: true
	}
];

const projects = [
	{
		id: 'braidak',
		title: 'brAIdak',
		category: 'czerwiec 2026',
		description: 'Zwycięski projekt asystenta AI dla Urzędu Miasta Lublin. Zero-cloud RAG na modelu Bielik, ChromaDB, funkcjonalność TTS i czytelna mapa POI — suwerenna AI na nieustrukturyzowanych danych miasta.',
		cover: 'teal',
		tags: ['GovTech', 'RAG', 'Bielik']
	},
	{
		id: 'banking-innovation',
		title: 'Banking Innovation',
		category: 'maj 2026',
		description: 'Zwycięski projekt 4. edycji SFB. Architektura inteligentnego systemu wykrywania zagrożeń dla klientów banku oraz kierowania celowanych powiadomień do najbardziej narażonych grup.',
		cover: 'steel',
		tags: ['FinTech', 'Cybersec', 'AI', 'ML']
	},
	{
		id: 'obrona-cywilna',
		title: 'Obrona Cywilna Nowej Generacji',
		category: 'kwiecień 2026',
		description: 'Aplikacja webowa LubSHIELD z warstwą dla obywateli i dashbordem zarządzania kryzysowego dla samorządów. Jasny interfejs na czas pokoju i zagrożenia.',
		cover: 'ember',
		tags: ['GovTech', 'Web', 'Bezpieczeństwo', 'Dual Use']
	},
	{
		id: 'moodify',
		title: 'Moodify',
		category: 'marzec 2026',
		description: 'Model rekomendacyjny, który zamienia opis nastroju i wybrany gatunek w spersonalizowaną playlistę. Mood i gatunek trafiają na wejście, na wyjściu — zestaw utworów dopasowany do chwili.',
		cover: 'magenta',
		tags: ['Muzyka', 'NLP', 'Recsys']
	},
	{
		id: 'inticheck',
		title: 'IntiCheck',
		category: 'marzec 2026',
		description: 'System triage\'u dermatologicznego oparty na sieciach neuronowych. Segreguje zgłoszenia ze zdjęć skóry według ryzyka, a finalną decyzję kliniczną zawsze zostawia lekarzowi.',
		cover: 'rose',
		tags: ['MedTech', 'Sieci neuronowe', 'Bezpieczeństwo']
	},
	{
		id: 'taxifleet',
		title: 'TaxiFleet',
		category: 'marzec 2026',
		description: 'Platforma do monitoringu i analizy pracy kierowców floty taxi. Zbiera sygnały z każdego kursu i pokazuje odchylenia w zespole, zanim staną się widoczne w rozliczeniach.',
		cover: 'gold',
		tags: ['Mobility', 'Data', 'ML']
	},
	{
		id: 'planet-twin',
		title: 'Cyfrowy bliźniak planety',
		category: 'marzec 2026',
		description: 'Zwycięski projekt hackathonu Hack4Sages — cyfrowy bliźniak egzoplanety TRAPPIST-1e o nazwie ExoStress Twin. Na danych NASA symuluje w czasie rzeczywistym klimat i transport masy wody, uwzględniając rozbłyski gwiezdne i ich wpływ na biosygnatury.',
		cover: 'indigo',
		tags: ['Space', 'NASA', 'Symulacja']
	},
	{
		id: 'promo-wz',
		title: 'Promocja Wydziału Zarządzania',
		category: 'styczeń 2026',
		description: 'Prezes MoAI zapoczątkował Zespół ds. promocji Wydziału Zarządzania, złożony ze studentów i pracowników wydziału. Zespół stworzył strategię promocji, kampanie marketingowe i zaktualizuje kanały dotarcia do studentów.',
		cover: 'peach',
		tags: ['Marketing', 'Community', 'Uczelnia']
	},
	{
		id: 'ml-admin',
		title: 'ML dla administracji publicznej',
		category: 'grudzień 2025',
		description: 'Prototypy programów uczenia maszynowego w służbie obywateli i jednostek administracji publicznej. Narzędzia, które skracają ścieżkę między danymi urzędu a konkretną decyzją.',
		cover: 'azure',
		tags: ['GovTech', 'ML', 'Prototyp']
	},
	{
		id: 'esa-agri',
		title: 'Dane satelitarne ESA dla rolnictwa',
		category: 'listopad 2025',
		description: 'Model analizujący zobrazowania satelitarne Europejskiej Agencji Kosmicznej na potrzeby rolników, firm i agencji rządowych. Wydobywa z danych orbitalnych to, czego nie widać z poziomu pola.',
		cover: 'ocean',
		tags: ['Space', 'ML', 'AgriTech']
	},
	{
		id: 'jetbrains-co2',
		title: 'Monitor CO₂ w JetBrains',
		category: 'listopad 2025',
		description: 'Wtyczka do środowiska JetBrains, nagrodzona na hackathonie BHL. W czasie rzeczywistym śledzi emisję CO₂ generowaną przez kod, wykrywa nieoptymalne wzorce w Pythonie i podsuwa poprawki z pomocą asystenta AI, zanim energochłonny kod trafi na produkcję.',
		cover: 'lime',
		tags: ['DevTools', 'GreenTech', 'AI']
	},
	{
		id: 'plant-nn',
		title: 'Inteligentna uprawa roślin',
		category: 'czerwiec 2025',
		description: 'Model sieci neuronowej sterujący parametrami uprawy roślin. Zamiast ręcznego strojenia warunków wzrostu, sieć dobiera je samodzielnie na podstawie danych z uprawy — krok w stronę powtarzalnej, innowacyjnej hodowli.',
		cover: 'forest',
		tags: ['Research', 'ML', 'AgriTech']
	},
	{
		id: 'dynamic-ui',
		title: 'Dynamiczny interfejs użytkownika',
		category: 'czerwiec 2025',
		description: 'Case study dynamicznego interfejsu wspomaganego przez AI, zrealizowane na żywym briefie Comarchu podczas 3. edycji SFB. Warstwa UX/UI dopasowuje się do zachowania użytkownika i prowadzi go przez ścieżkę sprzedaży.',
		cover: 'wine',
		tags: ['Marketing', 'AI', 'UX/UI', 'Sprzedaż']
	},
	{
		id: 'julia',
		title: 'Julia — wirtualny asystent pacjenta',
		category: 'czerwiec 2025',
		description: 'Julia — wirtualny asystent pacjenta i zwycięski projekt 3. edycji SFB, zrealizowany dla Luxmedu. Umawia wizyty, tłumaczy procedury, przedstawia lekarzy i nawiguje po stronie centrum medycznego.',
		cover: 'coral',
		tags: ['Chatbot', 'MedTech', 'NLP']
	},
	{
		id: 'onhelo',
		title: 'OnHelo',
		category: 'maj 2024',
		description: 'Aplikacja fitness z elementami medtech, zwyciężczyni 2. edycji Studenckiego Festiwalu Biznesu. Modele uczenia maszynowego pilnują poprawnej techniki wykonywania ćwiczeń i ograniczają ryzyko urazu.',
		cover: 'mint',
		tags: ['Fitness', 'MedTech', 'ML']
	}
];

const events = [
	{
		id: 'it-unplugged',
		title: 'IT Unplugged',
		category: 'czerwiec 2026',
		description: 'Wzięliśmy udział w konferencji IT Unplugged, słuchając prelekcji o AI, inżynierii danych, architekturze systemów, cyberbezpieczeństwie i wellbeingu zawodowym — i wracając z nowymi kontaktami w branży IT.',
		image: 'images/events/it-unplugged-2026-moai-pl.webp',
		alt: 'Panel IT Unplugged 2026: trzy osoby na scenie w fotelach, niebieskie oświetlenie i napis IT UNPLUGGED.',
		tags: ['Konferencja', 'IT', 'Networking']
	},
	{
		id: 'urban-lab',
		title: 'Urban Lab Challenge',
		category: 'czerwiec 2026',
		description: 'Zajęliśmy 1. miejsce i zdobyliśmy nagrodę główną Urzędu Miasta Lublin. Zbudowaliśmy „brAIdak” — agenta AI na architekturze zero-cloud RAG z modelem Bielik, z głosową dostępnością i mapą punktów POI.',
		image: 'images/events/urban-lab-challenge-2026-moai-pl.webp',
		alt: 'Zespół MoAI z dyplomem za 1. miejsce w Urban Lab Challenge — Lublin City of Energy.',
		tags: ['Hackathon', 'GovTech', 'Zwycięstwo']
	},
	{
		id: 'sfb4',
		title: 'Studencki Festiwal Biznesu IV',
		category: 'maj 2026',
		description: 'Trzy zespoły MoAI wzięły udział w IV edycji SFB, pracując z briefami Starostwa, CEWAR i UniCredit. Trzeci rok z rzędu wygraliśmy — tym razem projektem „Banking Innovation” dla UniCredit.',
		image: 'images/events/studencki-festiwal-biznesu-iv-2026-moai-pl.webp',
		alt: 'Zespół MoAI i organizatorzy na scenie IV edycji Studenckiego Festiwalu Biznesu z czekiem nagrody 8000 zł.',
		tags: ['Biznes', 'Pitch', 'Zwycięstwo']
	},
	{
		id: 'hackology-2',
		title: 'Hackology 2',
		category: 'maj 2026',
		description: 'Dwie drużyny MoAI wzięły udział w hackathonie Hackology 2, podczas którego uczestnicy projektowali rozwiązania przemysłowe z dziedziny przetwarzania obrazów.',
		image: 'images/events/hackology-2-2026-moai-pl.webp',
		alt: 'Zdjęcie grupowe uczestników Hackology 2 na scenie, w tle partner strategiczny Asseco.',
		tags: ['Hackathon', 'Organizacja', 'Partnerstwo']
	},
	{
		id: 'cybermil',
		title: 'Finał CTF CyberMil',
		category: 'maj 2026',
		description: 'Prezes MoAI z międzywydziałowym zespołem reprezentował Politechnikę Lubelską podczas Finału Akademii CyberMil w jednostce MON w Warszawie.',
		image: 'images/events/final-ctf-cybermil-2026-moai-pl.webp',
		alt: 'Uczestnicy finału CTF Akademii CyberMil 6 maja 2026, w tym osoby w mundurach, na tle slajdu wydarzenia.',
		tags: ['Cybersecurity', 'CTF', 'MON']
	},
	{
		id: 'erasmus-startup',
		title: 'Erasmus StartUp Projects',
		category: 'kwiecień 2026',
		description: 'Zaprosiliśmy studentów zagranicznych z programu Erasmus do współpracy nad projektami biznesowo-badawczymi. Stworzyliśmy dwa zespoły, które zaprezentowały swoje pomysły podczas Konferencji StartUp Horizon, gdzie zajęliśmy 1. i 2. miejsce.',
		image: 'images/events/erasmus-startup-projects-2026-moai-pl.webp',
		alt: 'Sala wykładowa podczas prezentacji zespołu Erasmus StartUp Projects: slajd Our Team i banery Wydziału Zarządzania.',
		tags: ['Erasmus', 'Startup', 'Sympozjum']
	},
	{
		id: 'bielik-google',
		title: 'Warsztaty Bielik AI × Google',
		category: 'kwiecień 2026',
		description: 'Jeden z naszych członków poprowadził warsztaty organizowane z Google for Developers i SpeakLeash. Wspólnie uruchomiliśmy infrastrukturę LLM Bielik w Google Cloud, zbudowaliśmy bazę wektorową w BigQuery i przeprowadziliśmy orkiestrację całego systemu RAG.',
		image: 'images/events/warsztaty-bielik-ai-google-2026-moai-pl.webp',
		alt: 'Uczestnicy warsztatów Bielik AI × Google na tle slajdu Eskadra Bielika.',
		tags: ['LLM', 'Google Cloud', 'RAG']
	},
	{
		id: 'civil42-2026',
		title: 'Hackathon Civil42 2026',
		category: 'kwiecień 2026',
		description: 'Wzięliśmy udział w hackathonie obrony cywilnej Civil42, organizowanym przez Instytut 42. Zbudowaliśmy aplikację webową wspierającą obywateli i samorządy w sytuacjach kryzysowych, testując nasze umiejętności w praktyce i poznając ekspertów bezpieczeństwa cywilnego.',
		image: 'images/events/hackathon-civil42-2026-moai-pl.webp',
		alt: 'Powitanie uczestników hackathonu Civil42 w 2026 roku w przestrzeni Instytutu 42.',
		tags: ['Hackathon', 'Cyber', 'Obrona cywilna']
	},
	{
		id: 'dni-otwarte-2026',
		title: 'Dni Otwarte Politechniki Lubelskiej 2026',
		category: 'kwiecień 2026',
		description: 'Przygotowaliśmy stoisko kierunku Sztuczna Inteligencja w Biznesie na Dniach Otwartych PL. Pokazywaliśmy modele AR, śledzenie gestów i edycję obrazów, a przyszłym studentom opowiadaliśmy o studiach i oprowadzaliśmy ich po kampusie.',
		image: 'images/events/dni-otwarte-politechniki-lubelskiej-2026-moai-pl.webp',
		alt: 'Członkowie MoAI przy stoisku z monitorami na Dniach Otwartych Politechniki Lubelskiej 2026.',
		tags: ['Rekrutacja', 'AR', 'Uczelnia']
	},
	{
		id: 'mit-ai-summit',
		title: 'MIT AI Summit',
		category: 'marzec 2026',
		description: 'Reprezentacja MoAI wzięła udział w konferencji MIT AI Summit w Warszawie. Słuchaliśmy ekspertów jak prof. Włodzisław Duch i prof. Piotr Sankowski. Dyskusje o przyszłości AI i budowaniu odpornych systemów zderzyły wiedzę akademicką z realiami branży.',
		image: 'images/events/mit-ai-summit-2026-moai-pl.webp',
		alt: 'Scena MIT AI Summit z panelem From Lab to Market: Rewiring Polish Science for the 21st Century.',
		tags: ['Konferencja', 'AI', 'Warszawa']
	},
	{
		id: 'seminarium',
		title: 'Międzywydziałowe Seminarium Naukowe',
		category: 'marzec 2026',
		description: 'Zaprezentowaliśmy na Międzywydziałowym Seminarium Naukowym trzy projekty: TaxiFleet do zarządzania flotą, IntiCheck do diagnozy zmian skórnych na zdjęciach oraz Moodify do sugerowania treści na podstawie nastroju.',
		cover: 'lilac',
		tags: ['Nauka', 'Prelekcja', 'AI']
	},
	{
		id: 'pollubmy-marketing',
		title: 'Pollubmy Marketing',
		category: 'marzec 2026',
		description: 'Wystąpiliśmy na konferencji Pollubmy Marketing z prelekcją o upstream modelingu z rodziny metod inferencji kauzalnej — jak modele ML pomagają agencjom trafiać w potrzeby biznesowe i ograniczać koszt kampanii.',
		cover: 'blush',
		tags: ['Konferencja', 'Marketing', 'Causal ML']
	},
	{
		id: 'ensemble-warsaw',
		title: 'Ensemble AI — Warszawa',
		category: 'marzec 2026',
		description: 'Rozwiązaliśmy wszystkie zadania hackathonu Ensemble AI w Warszawie i zajęliśmy 6. miejsce na blisko 50 zespołów, awansując do etapu prezentacji finałowych. Tematy obejmowały ML w diagnostyce medycznej, biologię molekularną i bezpieczeństwo dużych modeli językowych.',
		image: 'images/events/ensemble-ai-warszawa-2026-moai-pl.webp',
		alt: 'Zespół MoAI na scenie Ensemble AI w Warszawie podczas prezentacji finałowej.',
		tags: ['Hackathon', 'MedTech', 'LLM']
	},
	{
		id: 'hack4sages',
		title: 'Hack4Sages',
		category: 'marzec 2026',
		description: 'Zwyciężyliśmy w międzynarodowym Hack4Sages wśród ponad 200 uczestników z 6 kontynentów. Nasz cyfrowy bliźniak planety TRAPPIST-1e wyprzedził zespoły z Harvardu i Cambridge, a we wrześniu prezentujemy go na konferencji Origins Federation w ETH Zürich.',
		cover: 'ice',
		tags: ['Hackathon', 'Space', 'Zwycięstwo']
	},
	{
		id: 'brave-community',
		title: 'II spotkanie Brave Community',
		category: 'marzec 2026',
		description: 'Nawiązaliśmy współpracę z lubelską społecznością Brave Community podczas jej II spotkania. Regularnie bierzemy udział w kolejnych edycjach i szykujemy własne wystąpienie na jedno z najbliższych spotkań.',
		image: 'images/events/ii-spotkanie-brave-community-2026-moai-pl.webp',
		alt: 'Uczestnicy II spotkania Brave Community na stopniach auli, zdjęcie grupowe.',
		tags: ['Community', 'Lublin', 'Networking']
	},
	{
		id: 'polska-siega-gwiazd',
		title: 'Polska Sięga Gwiazd',
		category: 'grudzień 2025',
		description: 'Wzięliśmy udział w spotkaniu ze Sławoszem Uznańskim, astronautą misji IGNIS, gdzie mogliśmy zadać mu pytania na żywo. Po wydarzeniu poznaliśmy przedstawicieli innych kół naukowych i instytucji partnerskich.',
		image: 'images/events/polska-siega-gwiazd-2025-moai-pl.webp',
		alt: 'Sławosz Uznański w kombinezonie lotniczym na scenie spotkania Polska Sięga Gwiazd.',
		tags: ['Space', 'Spotkanie', 'Networking']
	},
	{
		id: 'hacknation',
		title: 'Hackathon HackNation',
		category: 'grudzień 2025',
		description: 'Zmierzyliśmy się z 16 zadaniami w 24 godziny na HackNation w Bydgoszczy, organizowanym przez Ministerstwo Cyfryzacji, MF, MON i MNiSW. Zbudowaliśmy prototypy ML w służbie obywateli i poznaliśmy liderów cyfryzacji z całej Polski.',
		image: 'images/events/hackathon-hacknation-2025-moai-pl.webp',
		alt: 'Zespół MoAI na scenie HackNation z czerwonymi tablicami układającymi napis HACK NATION.',
		tags: ['Hackathon', 'GovTech', 'ML']
	},
	{
		id: 'hackathon-google',
		title: 'Hackathon Google',
		category: 'grudzień 2025',
		description: 'Wzięliśmy udział w hackathonie Google w Warszawie, prototypując rozwiązania z mentorami w krótkich, intensywnych sprintach zespołowych nad realnymi problemami biznesowymi.',
		image: 'images/events/hackathon-google-2025-moai-pl.webp',
		alt: 'Zespół MoAI na Hackathonie Google w Warszawie, grudzień 2025.',
		tags: ['Hackathon', 'AI', 'Google']
	},
	{
		id: 'akademia-inzynierska',
		title: '46. Zgromadzenie Akademii Inżynierskiej',
		category: 'grudzień 2025',
		description: 'Podczas 46. Zgromadzenia Akademii Inżynierskiej zaprezentowaliśmy dotychczasowe osiągnięcia i plany MoAI, reprezentując Politechnikę Lubelską. Mieliśmy też okazję zobaczyć na żywo technologie prezentowane przez inne koła naukowe.',
		image: 'images/events/46-zgromadzenie-akademii-inzynierskiej-2025-moai-pl.webp',
		alt: 'Prezentacja koła MoAI z slajdem we are MoAI, LinkedIn i Instagram podczas zgromadzenia Akademii Inżynierskiej.',
		tags: ['Nauka', 'Prestige', 'Uczelnia']
	},
	{
		id: 'bhl',
		title: 'Finał hackathonu BHL',
		category: 'listopad 2025',
		description: 'Zdobyliśmy 3. miejsce w kategorii AI na 11. edycji hackathonu BHL w Warszawie. Zbudowaliśmy wtyczkę do JetBrains, która śledzi emisję CO₂ generowaną przez kod i podsuwa poprawki z pomocą AI.',
		image: 'images/events/final-hackathonu-bhl-2025-moai-pl.webp',
		alt: 'Zespół MoAI z dyplomami i torbami na scenie finału hackathonu BHL.',
		tags: ['Hackathon', 'GreenTech', 'Finał']
	},
	{
		id: 'cassini',
		title: 'Hackathon CASSINI',
		category: 'listopad 2025',
		description: 'Siedmioosobowy zespół MoAI spędził trzy dni na hackathonie CASSINI we Wrocławiu, szukając zastosowań danych satelitarnych ESA. Zbudowaliśmy aplikację redefiniującą koncepcję slow travellingu — spersonalizowane trasy wzmocnione danymi prosto z orbity.',
		image: 'images/events/hackathon-cassini-2025-moai-pl.webp',
		alt: 'Zespół MoAI na hackathonie CASSINI we Wrocławiu.',
		tags: ['Hackathon', 'Space', 'ESA']
	},
	{
		id: 'targi-kol',
		title: 'IV Targi Kół Naukowych PL',
		category: 'październik 2025',
		description: 'Na IV Targach Kół Naukowych PL pokazywaliśmy modele generujące światy gier wideo oraz Stable Diffusion do tworzenia obrazów — promując AI i ML wśród studentów i uczniów szkół ponadpodstawowych.',
		image: 'images/events/iv-targi-kol-naukowych-pl-2025-moai-pl.webp',
		alt: 'Stoisko MoAI na IV Targach Kół Naukowych Politechniki Lubelskiej, październik 2025.',
		tags: ['Uczelnia', 'ML', 'Pokazy']
	},
	{
		id: 'warsztaty-matematyczne',
		title: 'Warsztaty matematyczne dla nowych studentów',
		category: 'październik 2025',
		description: 'Zorganizowaliśmy warsztaty matematyczne dla nowych studentów — wspólnie przypomnieliśmy podstawy, żeby łatwiej wystartować na uczelni i przygotować się do pierwszych kolokwiów.',
		image: 'images/events/warsztaty-matematyczne-dla-nowych-studentow-2025-moai-pl.webp',
		alt: 'Warsztaty matematyczne MoAI: studenci przy ławkach, prowadzący przy zielonej tablicy.',
		tags: ['Warsztaty', 'Matematyka', 'Uczelnia']
	},
	{
		id: 'sfb3',
		title: 'Studencki Festiwal Biznesu III',
		category: 'czerwiec 2025',
		description: 'Znów wygraliśmy Studencki Festiwal Biznesu — jeden zespół zaprezentował chatbota Julię dla Luxmedu, a drugi równolegle pracował na żywym briefie Comarchu nad dynamicznym interfejsem wspomaganym AI.',
		image: 'images/events/studencki-festiwal-biznesu-iii-2025-moai-pl.webp',
		alt: 'Zespół MoAI na III edycji Studenckiego Festiwalu Biznesu, na tle napisu Festiwal Biznesu.',
		tags: ['Biznes', 'Pitch', 'Zwycięstwo']
	},
	{
		id: 'ghostday',
		title: 'GhostDay 2025',
		category: 'maj 2025',
		description: 'Pojechaliśmy na konferencję GhostDay: Applied Machine Learning w Poznaniu, żeby posłuchać ekspertów i wymienić doświadczenia z innymi entuzjastami ML. Wróciliśmy pełni nowych pomysłów i kontaktów.',
		image: 'images/events/ghostday-2025-moai-pl.webp',
		alt: 'Scena GhostDay 2025: prelegent przy slajdzie z wzorami, obok baner Ghost Day.',
		tags: ['Konferencja', 'AI', 'Networking']
	},
	{
		id: 'sympozjum-xxxiii',
		title: 'XXXIII Sympozjum Naukowe',
		category: 'maj 2025',
		description: 'Wystąpiliśmy na XXXIII Sympozjum Naukowym, prezentując kompetencje koła i nasze projekty badawcze przed społecznością akademicką Politechniki Lubelskiej.',
		cover: 'violet',
		tags: ['Nauka', 'Prelekcja', 'Uczelnia']
	},
	{
		id: 'spaceshield',
		title: 'Hackathon SpaceShield',
		category: 'maj 2025',
		description: 'Dotarliśmy do finału hackathonu SpaceShield w Stalowej Woli. Nasz projekt TITAN wzmacniał odporność systemów łączności kryzysowej na zakłócenia i podsłuch.',
		image: 'images/events/hackathon-spaceshield-2025-moai-pl.webp',
		alt: 'Zespół MoAI na finale hackathonu SpaceShield w Stalowej Woli.',
		tags: ['Hackathon', 'Space', 'Finał']
	},
	{
		id: 'civil42-2025',
		title: 'Hackathon Civil42 2025',
		category: 'maj 2025',
		description: 'Wzięliśmy udział w hackathonie Civil42, budując aplikację webową wspierającą obywateli i samorządy w sytuacjach kryzysowych.',
		image: 'images/events/hackathon-civil42-2025-moai-pl.webp',
		alt: 'Uczestnicy hackathonu Civil42 w maju 2025 w przestrzeni Instytutu 42.',
		tags: ['Hackathon', 'Cyber', 'Obrona cywilna']
	},
	{
		id: 'dni-otwarte-2025',
		title: 'Dni Otwarte Politechniki Lubelskiej 2025',
		category: 'kwiecień 2025',
		description: 'Postawiliśmy stoisko na Dniach Otwartych PL — pokazywaliśmy nasze projekty, rozmawialiśmy z kandydatami i zapraszaliśmy do koła.',
		image: 'images/events/dni-otwarte-politechniki-lubelskiej-2025-moai-pl.webp',
		alt: 'Korytarz Politechniki Lubelskiej podczas Dni Otwartych 2025, stoisko i rozmowy z kandydatami.',
		tags: ['Rekrutacja', 'Uczelnia', 'Pokazy']
	},
	{
		id: 'ensemble-krakow',
		title: 'Ensemble AI — Kraków',
		category: 'marzec 2025',
		description: 'Awansowaliśmy do finału Ensemble AI w Krakowie, zajmując 4. miejsce w rankingu na zadaniach przygotowanych przez CISPA Helmholtz Center.',
		image: 'images/events/ensemble-ai-krakow-2025-moai-pl.webp',
		alt: 'Zespół MoAI na międzynarodowym hackathonie Ensemble AI w Krakowie.',
		tags: ['Hackathon', 'AI', 'Finał']
	},
	{
		id: 'sfb2',
		title: 'Studencki Festiwal Biznesu II',
		category: 'maj 2024',
		description: 'Zdobyliśmy 1. miejsce w II edycji Studenckiego Festiwalu Biznesu z aplikacją fitness OnHelo — pierwszy duży sukces MoAI na scenie biznesowej.',
		image: 'images/events/studencki-festiwal-biznesu-ii-2024-moai-pl.webp',
		alt: 'Zespół MoAI z czekiem 5000 zł na II edycji Studenckiego Festiwalu Biznesu, 24 maja 2024.',
		tags: ['Biznes', 'Pitch', 'Współpraca']
	},
	{
		id: 'pip',
		title: 'Konferencja 105-lecia Państwowej Inspekcji Pracy',
		category: 'październik 2024',
		description: 'Wystąpiliśmy na konferencji 105-lecia Państwowej Inspekcji Pracy z referatem o AI na rynku pracy — o wyzwaniach regulacyjnych i szansach, jakie ta technologia otwiera przed pracownikami i instytucjami.',
		image: 'images/events/konferencja-105-lecia-pip-2024-moai-pl.webp',
		alt: 'Wystąpienie zespołu MoAI na konferencji 105-lecia Państwowej Inspekcji Pracy.',
		tags: ['Konferencja', 'Prawo', 'Rynek pracy']
	}
];

const qs = (sel) => document.querySelector(sel);
const qsa = (sel) => Array.from(document.querySelectorAll(sel));

const basePath = document.querySelector('script[src*="../scripts.js"]') ? '../' : './';

function shuffle(array) {
	const copy = [...array];
	for (let i = copy.length - 1; i > 0; i -= 1) {
		const j = Math.floor(Math.random() * (i + 1));
		[copy[i], copy[j]] = [copy[j], copy[i]];
	}
	return copy;
}

function createInviteCover() {
	const cover = document.createElement('div');
	cover.className = 'member-card__invite-cover';
	cover.setAttribute('aria-hidden', 'true');
	cover.innerHTML = `
		<span class="member-card__invite-blob member-card__invite-blob--a"></span>
		<span class="member-card__invite-blob member-card__invite-blob--b"></span>
		<span class="member-card__invite-blob member-card__invite-blob--c"></span>
		<span class="member-card__invite-glass"></span>
		<svg class="invite-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
			<g class="invite-icon__avatar">
				<path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
				<path d="M6 21v-2a4 4 0 0 1 4 -4h4" />
			</g>
			<g transform="translate(12.05 11.85) scale(0.62)">
				<g class="invite-icon__q">
					<path class="invite-icon__q-mark" pathLength="1" stroke-width="2.9" d="M8 8a3.5 3 0 0 1 3.5 -3h1a3.5 3 0 0 1 3.5 3a3 3 0 0 1 -2 3a3 4 0 0 0 -2 4" />
					<path class="invite-icon__q-dot" pathLength="1" stroke-width="3.6" d="M12 19l0 .01" />
				</g>
			</g>
		</svg>
	`;
	return cover;
}

function renderMembers(targetId, {
	limit = members.length,
	includeCta = false,
	randomize = false,
	pinInviteLast = false,
	includeInvite = true
} = {}) {
	const target = qs(`#${targetId}`);
	if (!target) return;

	let list;
	if (pinInviteLast) {
		const inviteMember = includeInvite ? members.find((member) => member.invite) : null;
		const regularMembers = members.filter((member) => !member.invite);
		const source = randomize ? shuffle(regularMembers) : regularMembers;
		const regularLimit = Math.max(0, limit - (inviteMember ? 1 : 0));
		list = source.slice(0, regularLimit);
		if (inviteMember && list.length < limit) {
			list.push(inviteMember);
		}
	} else {
		const pool = includeInvite ? members : members.filter((member) => !member.invite);
		const source = randomize ? shuffle(pool) : pool;
		list = source.slice(0, limit);
	}

	target.innerHTML = '';

	list.forEach((member) => {
		const card = document.createElement('article');
		card.className = 'member-card fade-in';

		const media = document.createElement('div');
		media.className = 'member-card__media';

		const body = document.createElement('div');
		body.className = 'member-card__body';

		const name = document.createElement('p');
		name.className = 'member-card__name';
		name.textContent = member.name;

		body.appendChild(name);

		if (member.tags?.length) {
			const tagsWrap = document.createElement('div');
			tagsWrap.className = 'tags';
			member.tags.forEach((tag) => {
				const chip = document.createElement('span');
				chip.className = 'tag';
				chip.textContent = tag;
				tagsWrap.appendChild(chip);
			});
			body.appendChild(tagsWrap);
		}

		const overlay = document.createElement('a');
		overlay.className = 'member-card__link';
		overlay.href = member.linkedin;
		overlay.target = '_blank';
		overlay.rel = 'noopener';
		overlay.ariaLabel = `LinkedIn ${member.name}`;
		overlay.innerHTML = `<span><img class="member-card__link-icon" src="${basePath}icons/linkedin.svg" alt="" aria-hidden="true"> LinkedIn</span>`;

		if (member.invite) {
			card.classList.add('member-card--invite');
			overlay.removeAttribute('target');
			overlay.removeAttribute('rel');
			overlay.ariaLabel = 'Dołącz do nas';
			overlay.innerHTML = '<span>Dołącz do nas</span>';
			media.append(createInviteCover(), overlay);
		} else {
			const img = document.createElement('img');
			img.className = 'member-card__photo';
			img.src = basePath + member.image;
			img.alt = member.name;
			img.loading = 'lazy';
			img.draggable = false;
			img.setAttribute('data-protect', 'true');
			media.append(img, overlay);
		}

		card.append(media, body);
		target.appendChild(card);
	});

	if (includeCta) {
		const cta = document.createElement('article');
		cta.className = 'member-card member-card--cta fade-in';
		const body = document.createElement('div');
		body.className = 'member-card__body';
		const title = document.createElement('p');
		title.className = 'member-card__name';
		title.textContent = 'Wszyscy członkowie';
		const copy = document.createElement('p');
		copy.className = 'muted';
		copy.textContent = 'Poznaj cały zespół i przejdź do profili LinkedIn.';
		const btn = document.createElement('a');
		btn.className = 'btn btn--primary';
		btn.textContent = 'Cała drużyna';
		btn.href = '/members/';
		body.append(title, copy, btn);
		cta.append(body);
		target.appendChild(cta);
	}
}

function appendCardMedia(media, item) {
	if (item.image) {
		const img = document.createElement('img');
		img.src = basePath + item.image;
		img.alt = item.alt || item.title;
		img.loading = 'lazy';
		img.draggable = false;
		img.setAttribute('data-protect', 'true');
		media.appendChild(img);
		return;
	}

	const cover = document.createElement('div');
	cover.className = 'project-card__cover';
	cover.dataset.cover = item.cover || 'azure';
	cover.setAttribute('aria-hidden', 'true');

	['a', 'b', 'c'].forEach((key) => {
		const blob = document.createElement('span');
		blob.className = `project-card__blob project-card__blob--${key}`;
		cover.appendChild(blob);
	});

	const sheen = document.createElement('span');
	sheen.className = 'project-card__cover-glass';
	cover.appendChild(sheen);
	media.appendChild(cover);
}

function createProjectCard(project, { showTags = false, linkLabel = 'Zobacz', showCategory = true } = {}) {
	const card = document.createElement('article');
	card.className = 'project-card fade-in';

	const media = document.createElement('div');
	media.className = 'project-card__media';
	appendCardMedia(media, project);

	const body = document.createElement('div');
	body.className = 'project-card__body';

	const hasDisplayCategory = showCategory
		&& typeof project.category === 'string'
		&& project.category.trim().toLowerCase() !== 'repo';

	const title = document.createElement('h3');
	title.className = 'project-card__title';
	title.textContent = project.title;

	const desc = document.createElement('p');
	desc.className = 'project-card__desc';
	desc.textContent = project.description;

	if (hasDisplayCategory) {
		const meta = document.createElement('div');
		meta.className = 'project-card__meta';
		meta.textContent = project.category;
		body.append(meta, title, desc);
	} else {
		body.append(title, desc);
	}

	if (showTags && project.tags?.length) {
		const tagsWrap = document.createElement('div');
		tagsWrap.className = 'tags project-card__tags';
		project.tags.forEach((tag) => {
			const chip = document.createElement('span');
			chip.className = 'tag';
			chip.textContent = tag;
			tagsWrap.appendChild(chip);
		});
		body.appendChild(tagsWrap);
	}

	if (project.github) {
		const link = document.createElement('a');
		link.className = 'btn btn--ghost project-card__cta';
		link.href = project.github;
		link.target = '_blank';
		link.rel = 'noopener';
		link.textContent = project.github.replace('https://', '');
		body.appendChild(link);
	}

	card.append(media, body);
	return card;
}

function hasMainImage(item) {
	return typeof item?.image === 'string' && item.image.trim() !== '';
}

function pickHomepageCards(data, count, random) {
	if (!random) return data.slice(0, count);

	const withImage = [];
	const withoutImage = [];
	data.forEach((item) => {
		if (hasMainImage(item)) withImage.push(item);
		else withoutImage.push(item);
	});

	return [...shuffle(withImage), ...shuffle(withoutImage)].slice(0, count);
}

function renderProjects(targetId, data, { count = data.length, random = false, showTags = false, linkLabel, showCategory = true } = {}) {
	const target = qs(`#${targetId}`);
	if (!target || !data?.length) return;
	const slice = pickHomepageCards(data, count, random);
	target.innerHTML = '';
	slice.forEach((project) => target.appendChild(createProjectCard(project, { showTags, linkLabel, showCategory })));
}

function renderListPage(targetId, data, heading = 'Lista', showMeta = true) {
	const target = qs(`#${targetId}`);
	if (!target) return;
	target.innerHTML = '';
	data.forEach((item) => {
		const row = document.createElement('article');
		row.className = 'list-item fade-in';
		const title = document.createElement('h3');
		title.className = 'list-item__title';
		title.textContent = item.title;
		const rawMeta = item.category || heading;
		const hasDisplayMeta = showMeta
			&& typeof rawMeta === 'string'
			&& rawMeta.trim().toLowerCase() !== 'repo';
		const desc = document.createElement('p');
		desc.className = 'list-item__desc';
		desc.textContent = item.description;
		row.append(title);
		if (hasDisplayMeta) {
			const meta = document.createElement('p');
			meta.className = 'list-item__meta';
			meta.textContent = rawMeta;
			row.appendChild(meta);
		}
		row.appendChild(desc);
		if (item.tags?.length) {
			const tagsWrap = document.createElement('div');
			tagsWrap.className = 'tags';
			item.tags.forEach((tag) => {
				const chip = document.createElement('span');
				chip.className = 'tag';
				chip.textContent = tag;
				tagsWrap.appendChild(chip);
			});
			row.appendChild(tagsWrap);
		}
		if (item.github) {
			const link = document.createElement('a');
			link.className = 'btn btn--ghost project-card__cta';
			link.href = item.github;
			link.target = '_blank';
			link.rel = 'noopener';
			link.textContent = item.github.replace('https://', '');
			row.appendChild(link);
		}
		target.appendChild(row);
	});
}

function handlePreloader() {
	const loader = qs('#preloader');
	if (!loader) return;
	window.addEventListener('load', () => {
		setTimeout(() => loader.classList.add('hidden'), 250);
	});
}

function blockInteractions() {
	const targets = qsa('[data-protect], .hero__image');
	targets.forEach((el) => {
		el.addEventListener('contextmenu', (e) => e.preventDefault());
		el.addEventListener('dragstart', (e) => e.preventDefault());
	});

	document.addEventListener('contextmenu', (e) => {
		const allow = e.target.closest('h1, h2, h3, h4, p, .member-card__name, .list-item__title, .list-item__desc, .list-item__meta, a[href^="mailto"], .selectable, .selectable-text');
		if (allow) return;
		e.preventDefault();
	});
}

function observeFadeIns() {
	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add('visible');
				observer.unobserve(entry.target);
			}
		});
	}, { threshold: 0.15 });

	qsa('.fade-in').forEach((el) => observer.observe(el));
}

function updateFooterYear() {
	const currentYear = String(new Date().getFullYear());
	qsa('[data-current-year]').forEach((el) => {
		el.textContent = currentYear;
	});
}

const gapAlignedNavHashes = new Set(['#events', '#projects', '#join']);

function clampScrollTop(top) {
	const maxTop = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
	return Math.min(Math.max(0, top), maxTop);
}

function smoothScrollToPosition(top) {
	window.scrollTo({ top: clampScrollTop(top), behavior: 'smooth' });
}

function getNavMetrics() {
	const nav = qs('.nav');
	if (!nav) return null;
	const rect = nav.getBoundingClientRect();
	return {
		top: rect.top,
		bottom: rect.bottom,
		height: rect.height,
		center: rect.top + (rect.height / 2)
	};
}

function getSectionFromHash(hash) {
	if (!hash || !hash.startsWith('#')) return null;
	const target = qs(hash);
	if (!target) return null;
	return target.classList.contains('section') ? target : target.closest('.section');
}

function getDefaultSectionTop(section) {
	const nav = getNavMetrics();
	const sectionTop = window.scrollY + section.getBoundingClientRect().top;
	if (!nav) return sectionTop;
	return sectionTop - nav.bottom - 8;
}

function getGapAlignedSectionTop(section) {
	const nav = getNavMetrics();
	const sections = qsa('.page .section');
	const sectionIndex = sections.indexOf(section);
	if (!nav || sectionIndex <= 0) return getDefaultSectionTop(section);

	const previousSection = sections[sectionIndex - 1];
	const previousBottom = window.scrollY + previousSection.getBoundingClientRect().bottom;
	const currentTop = window.scrollY + section.getBoundingClientRect().top;
	const gap = currentTop - previousBottom;

	if (gap > nav.height + 8) {
		return previousBottom + (gap / 2) - nav.center;
	}

	return currentTop - nav.bottom - 8;
}

function scrollByHash(hash, { updateHistory = false } = {}) {
	if (!hash) return;

	if (hash === '#top') {
		smoothScrollToPosition(0);
	} else if (hash === '#bottom') {
		smoothScrollToPosition(document.documentElement.scrollHeight);
	} else {
		const section = getSectionFromHash(hash);
		if (!section) return;

		const scrollTop = gapAlignedNavHashes.has(hash)
			? getGapAlignedSectionTop(section)
			: getDefaultSectionTop(section);

		smoothScrollToPosition(scrollTop);
	}

	if (updateHistory && location.hash !== hash) {
		try {
			history.pushState(null, '', hash);
		} catch {
			// Ignore history updates in restricted environments.
		}
	}
}

function setupNavScrollHandling(page) {
	if (page !== 'index') return;

	qsa('.nav__link[href^="#"]').forEach((link) => {
		link.addEventListener('click', (event) => {
			event.preventDefault();
			scrollByHash(link.getAttribute('href'), { updateHistory: true });
		});
	});

	window.addEventListener('popstate', () => {
		if (!location.hash) return;
		scrollByHash(location.hash);
	});
}

function handleInitialHashScroll(page) {
	if (page !== 'index' || !location.hash) return;

	requestAnimationFrame(() => {
		scrollByHash(location.hash);
	});
}

function getIndexMembersLimit() {
	if (typeof window.matchMedia !== 'function') return 12;
	return window.matchMedia('(max-width: 720px)').matches ? 8 : 12;
}

function isMobileMembersViewport() {
	if (typeof window.matchMedia !== 'function') return false;
	return window.matchMedia('(max-width: 720px)').matches;
}

function renderIndexMembers() {
	const isMobileMembers = isMobileMembersViewport();
	renderMembers('members-grid', {
		limit: getIndexMembersLimit(),
		includeCta: false,
		randomize: true,
		pinInviteLast: !isMobileMembers,
		includeInvite: !isMobileMembers
	});
}

function setupIndexMembersViewportSync() {
	if (typeof window.matchMedia !== 'function') return;
	const mq = window.matchMedia('(max-width: 720px)');
	const onChange = () => {
		renderIndexMembers();
		requestAnimationFrame(observeFadeIns);
	};
	if (typeof mq.addEventListener === 'function') {
		mq.addEventListener('change', onChange);
	} else if (typeof mq.addListener === 'function') {
		mq.addListener(onChange);
	}
}

document.addEventListener('DOMContentLoaded', () => {
	const page = document.body.dataset.page;

	handlePreloader();
	updateFooterYear();

	if (page === 'index') {
		renderIndexMembers();
		setupIndexMembersViewportSync();
		renderProjects('projects-grid', projects, { count: 3, random: true, showTags: true });
		renderProjects('events-grid', events, { count: 3, random: true, showCategory: true });
	}

	if (page === 'members') {
		renderMembers('members-grid', { includeInvite: false });
	}

	if (page === 'projects') {
		renderProjects('projects-grid', projects, { showTags: true });
	}

	if (page === 'events') {
		renderProjects('projects-grid', events, { showTags: true, showCategory: true });
	}

	// Delay observer to ensure nodes are in DOM
	requestAnimationFrame(observeFadeIns);
	blockInteractions();
	setPrettyUrl();
	setupNavScrollHandling(page);
	handleInitialHashScroll(page);
});

function setPrettyUrl() {
	if (location.protocol === 'file:' || location.hostname === '') return;
	const page = document.body.dataset.page;
	if (!page) return;
	const current = location.pathname;
	const targetMap = {
		index: '/',
		members: '/members/',
		events: '/events/',
		projects: '/projects/',
		thanks: '/thanks/'
	};
	const target = targetMap[page];
	if (!target) return;

	if (current.endsWith('.html') || current.endsWith('/index.html')) {
		history.replaceState(null, '', `${target}${location.hash}`);
	}
}
