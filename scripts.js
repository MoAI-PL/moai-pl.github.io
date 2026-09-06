const members = [
	{
		name: 'Aleksandra Reja',
		image: 'images/member-profiles/ola.webp',
		linkedin: 'https://www.linkedin.com/in/aleksandra-reja-a736353a8/',
		tags: ['Zespół', 'Profil w budowie']
	},
	{
		name: 'Damian Cybula',
		image: 'images/member-profiles/damian.webp',
		linkedin: 'https://www.linkedin.com/in/damian-cybula/',
		tags: ['AI', 'Hardware']
	},
	{
		name: 'Jakub Goleman',
		image: 'images/member-profiles/kuba.webp',
		linkedin: 'https://www.linkedin.com/in/jakubgoleman/',
		tags: ['Biznes', 'Partnerships']
	},
	{
		name: 'Jan Domański',
		image: 'images/member-profiles/janek.webp',
		linkedin: 'https://www.linkedin.com/in/jandomanski77/',
		tags: ['Biznes', 'Product']
	},
	{
		name: 'Kacper Gałan',
		image: 'images/member-profiles/kacper.webp',
		linkedin: 'https://www.linkedin.com/in/kacpergalan/',
		tags: ['Zespół', 'Profil w budowie']
	},
	{
		name: 'Kamila Bąk',
		image: 'images/member-profiles/kamila.webp',
		linkedin: 'https://www.linkedin.com/in/kamila-b%C4%85k-376b69397/',
		tags: ['Zespół', 'Profil w budowie']
	},
	{
		name: 'Karol Kowal',
		image: 'images/member-profiles/karol.webp',
		linkedin: 'https://www.linkedin.com/in/kowal-karol/',
		tags: ['Ops', 'Events']
	},
	{
		name: 'Kasia Kuczyńska',
		image: 'images/member-profiles/kasiak.webp',
		linkedin: 'https://www.linkedin.com/in/katarzyna-kuczy%C5%84ska/',
		tags: ['Research', 'Community']
	},
	{
		name: 'Katarzyna Widłak',
		image: 'images/member-profiles/kasiaw.webp',
		linkedin: 'https://www.linkedin.com/in/katarzyna--wid%C5%82ak/',
		tags: ['AI', 'Community', 'Research']
	},
	{
		name: 'Krystian Góźdź',
		image: 'images/member-profiles/krystian.webp',
		linkedin: 'https://www.linkedin.com/in/krystian-gozdz/',
		tags: ['Zespół', 'Profil w budowie']
	},
	{
		name: 'Maja Sykuła',
		image: 'images/member-profiles/maja.webp',
		linkedin: 'https://www.linkedin.com/in/maja-syku%C5%82a-6a24493b7/',
		tags: ['Zespół', 'Profil w budowie']
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
		tags: ['Zespół', 'Profil w budowie']
	},
	{
		name: 'Nadia Klimek',
		image: 'images/member-profiles/nadia.webp',
		linkedin: 'https://www.linkedin.com/in/nadia-klimek-a15652390/',
		tags: ['Zespół', 'Profil w budowie']
	},
	{
		name: 'Piotr Niemiec',
		image: 'images/member-profiles/piotrek.webp',
		linkedin: 'https://www.linkedin.com/in/piotrniemiec/',
		tags: ['Data', 'Operations']
	},
	{
		name: 'Sandra Zaremba',
		image: 'images/member-profiles/sandra.webp',
		linkedin: 'https://www.linkedin.com/in/sandra-zaremba-4466a4389/',
		tags: ['Design', 'Communications']
	},
	{
		name: 'Szymon Gazdowicz',
		image: 'images/member-profiles/szymon.webp',
		linkedin: 'https://www.linkedin.com/in/szymon-gazdowicz/',
		tags: ['Zespół', 'Profil w budowie']
	},
	{
		name: 'Zuzanna Marciniak',
		image: 'images/member-profiles/zuzia.webp',
		linkedin: 'https://www.linkedin.com/in/zuzanna-marciniak-54391938a/',
		tags: ['Zespół', 'Profil w budowie']
	},
	{
		name: 'Dołącz do nas',
		image: 'images/mics/czekamy_na_ciebie.webp',
		linkedin: '/thanks/',
		tags: ['Nowy członek', 'Otwarta rekrutacja'],
		invite: true
	}
];

const projects = [
	{
		id: 'braidak',
		title: 'brAIdak',
		category: 'czerwiec 2026',
		description: 'Zwycięski ekosystem dla UM Lublin. Zero-cloud RAG na Bieliku i ChromaDB, głosowa dostępność i mapa POI — suwerenna AI na nieustrukturyzowanych danych miasta.',
		cover: 'teal',
		tags: ['GovTech', 'RAG', 'Bielik']
	},
	{
		id: 'banking-innovation',
		title: 'Banking Innovation',
		category: 'maj 2026',
		description: 'Zwycięski projekt 4. edycji SFB. Architektura inteligentnego wykrywania zagrożeń dla klientów banku oraz kierowane powiadomienia do najbardziej narażonych grup.',
		cover: 'steel',
		tags: ['FinTech', 'Cybersec', 'AI', 'ML']
	},
	{
		id: 'obrona-cywilna',
		title: 'Obrona Cywilna Nowej Generacji',
		category: 'kwiecień 2026',
		description: 'Aplikacja webowa z Civil42 dla obywateli i samorządów. Jasny interfejs na sytuacje kryzysowe, bez zbędnej złożoności.',
		cover: 'ember',
		tags: ['GovTech', 'Web', 'Bezpieczeństwo', 'Dual Use']
	},
	{
		id: 'moodify',
		title: 'Moodify',
		category: 'marzec 2026',
		description: 'Tworzy spersonalizowaną playlistę na podstawie opisu uczuć i wybranego gatunku. Mood i gatunek idą w model, na wyjściu jest zestaw utworów dopasowany do chwili.',
		cover: 'magenta',
		tags: ['Muzyka', 'NLP', 'Recsys']
	},
	{
		id: 'inticheck',
		title: 'IntiCheck',
		category: 'marzec 2026',
		description: 'Bezpieczny system triage\'u dermatologicznego oparty na sieciach neuronowych. Segreguje przypadki ze zdjęć skóry i zostawia decyzję kliniczną po stronie lekarza.',
		cover: 'rose',
		tags: ['MedTech', 'Sieci neuronowe', 'Bezpieczeństwo']
	},
	{
		id: 'taxifleet',
		title: 'TaxiFleet',
		category: 'marzec 2026',
		description: 'Platforma do analizy i monitoringu pracy kierowców floty taxi. Zbiera sygnały z kursów i pokazuje, co dzieje się w zespole, zanim problem widać w rozliczeniach.',
		cover: 'gold',
		tags: ['Mobility', 'Data', 'ML']
	},
	{
		id: 'planet-twin',
		title: 'Cyfrowy bliźniak planety',
		category: 'marzec 2026',
		description: 'Zwycięska aplikacja Hack4Sages. Na danych NASA liczy potencjał planety do podtrzymania życia; interaktywny bliźniak przelicza ekstremalny klimat i szanse pod lodem.',
		cover: 'indigo',
		tags: ['Space', 'NASA', 'Symulacja']
	},
	{
		id: 'promo-wz',
		title: 'Promocja Wydziału Zarządzania',
		category: 'styczeń 2026',
		description: 'Zespół ds. promocji WZ powołany przez prezesa MoAI: studenci wszystkich kierunków i pracownicy. Start od profilu w Google Maps, dalej Instagram, TikTok i Facebook wydziału.',
		cover: 'peach',
		tags: ['Marketing', 'Community', 'Uczelnia']
	},
	{
		id: 'ml-admin',
		title: 'ML dla administracji publicznej',
		category: 'grudzień 2025',
		description: 'Prototypy uczenia maszynowego w służbie obywateli i urzędów. Narzędzia, które skracają ścieżkę między danymi państwa a konkretną decyzją.',
		cover: 'azure',
		tags: ['GovTech', 'ML', 'Prototyp']
	},
	{
		id: 'esa-agri',
		title: 'Dane satelitarne ESA dla rolnictwa',
		category: 'listopad 2025',
		description: 'Analiza zobrazowań Europejskiej Agencji Kosmicznej pod decyzje rolników, firm i administracji. AI wyciąga z satelity to, czego nie widać z pola.',
		cover: 'ocean',
		tags: ['Space', 'ML', 'AgriTech']
	},
	{
		id: 'jetbrains-co2',
		title: 'Monitor CO₂ w JetBrains',
		category: 'listopad 2025',
		description: 'Wtyczka do IDE JetBrains z 3. miejsca BHL. W czasie rzeczywistym liczy emisję CO₂ kodu, wykrywa nieoptymalne wzorce i sugeruje poprawki z asystentem AI.',
		cover: 'lime',
		tags: ['DevTools', 'GreenTech', 'AI']
	},
	{
		id: 'music-school',
		title: 'Rebranding szkoły muzycznej',
		category: '2025',
		description: 'Projekt marketingowy dla pobliskiej szkoły muzycznej. Nowa identyfikacja, spójny przekaz i materiały, które da się realnie wdrożyć.',
		cover: 'orchid',
		tags: ['Design', 'Marketing', 'Brand']
	},
	{
		id: 'plant-nn',
		title: 'Inteligentna uprawa roślin',
		category: 'czerwiec 2025',
		description: 'Projekt badawczy sprzed wakacji: sieci neuronowe sterują parametrami uprawy roślin. Celem jest innowacyjna, powtarzalna hodowla — model dobiera warunki wzrostu zamiast ręcznego strojenia.',
		cover: 'forest',
		tags: ['Research', 'ML', 'AgriTech']
	},
	{
		id: 'dynamic-ui',
		title: 'Dynamiczny interfejs użytkownika',
		category: '2025',
		description: 'Badanie i PoC dynamicznego interfejsu opartego na inteligentnych systemach, rozwijane równolegle na 3. edycji SFB. Warstwa UX/UI dopasowuje się do użytkownika i wspiera ścieżkę sprzedaży.',
		cover: 'wine',
		tags: ['Marketing', 'AI', 'UX/UI', 'Sprzedaż']
	},
	{
		id: 'julia',
		title: 'Julia — wirtualny asystent pacjenta',
		category: '2025',
		description: 'Inteligentny asystent wirtualny, który wygrał 3. edycję SFB. Julia umawia wizyty, tłumaczy procedury, przedstawia lekarzy i nawiguje po stronie centrum medycznego.',
		cover: 'coral',
		tags: ['Chatbot', 'MedTech', 'NLP']
	},
	{
		id: 'onhelo',
		title: 'OnHelo',
		category: '2024',
		description: 'Aplikacja fitness z elementami medtech, która wygrała 2. edycję Studenckiego Festiwalu Biznesu. Modele uczenia maszynowego wspierają poprawne wykonywanie ćwiczeń i zmniejszają ryzyko błędnej techniki.',
		cover: 'mint',
		tags: ['Fitness', 'MedTech', 'ML']
	}
];

const events = [
	{
		id: 'it-unplugged',
		title: 'IT Unplugged',
		category: 'czerwiec 2026',
		description: 'Konferencja o AI, data engineering, architekturze, cyberbezpieczeństwie i wellbeing. Wymiana doświadczeń ze środowiskiem IT.',
		cover: 'sky',
		tags: ['Konferencja', 'IT', 'Networking']
	},
	{
		id: 'urban-lab',
		title: 'Urban Lab Challenge',
		category: 'czerwiec 2026',
		description: '1. miejsce i nagroda główna. Ekosystem brAIdak dla Urzędu Miasta Lublin: zero-cloud RAG, Bielik i dostępność głosowa.',
		cover: 'pine',
		tags: ['Hackathon', 'GovTech', 'Zwycięstwo']
	},
	{
		id: 'sfb4',
		title: 'Studencki Festiwal Biznesu IV',
		category: 'maj 2026',
		description: 'Trzeci rok z rzędu 1. miejsce MoAI. Trzy zespoły z briefami Starostwa, CEWAR i UniCredit — nagroda główna za wykrywanie zagrożeń i kierowane powiadomienia dla klientów banku.',
		cover: 'honey',
		tags: ['Biznes', 'Pitch', 'Zwycięstwo']
	},
	{
		id: 'hackology-2',
		title: 'Hackology 2',
		category: 'maj 2026',
		description: 'Współorganizacja z kołem ATLAS: social media, grafiki, patronat, aranżacja i infrastruktura. Mentor z MoAI, opiekun koła w jury.',
		cover: 'dusk',
		tags: ['Hackathon', 'Organizacja', 'Partnerstwo']
	},
	{
		id: 'cybermil',
		title: 'Finał CTF CyberMil',
		category: 'maj 2026',
		description: 'Finał Akademii CyberMil w jednostce MON w Warszawie. Najwyższy wynik w drużynie Politechniki Lubelskiej i Lublina.',
		cover: 'crimson',
		tags: ['Cybersecurity', 'CTF', 'MON']
	},
	{
		id: 'erasmus-startup',
		title: 'Erasmus StartUp Projects',
		category: 'kwiecień 2026',
		description: 'Inicjatywa MoAI: studenci Erasmusa na międzynarodowym sympozjum WZ. Dwa zespoły startupowe zajęły 1. i 2. miejsce.',
		cover: 'dawn',
		tags: ['Erasmus', 'Startup', 'Sympozjum']
	},
	{
		id: 'bielik-google',
		title: 'Warsztaty Bielik AI × Google',
		category: 'kwiecień 2026',
		description: 'Warsztaty Google for Developers i SpeakLeash o polskim modelu Bielik. LLM w Google Cloud, BigQuery i orkiestracja RAG — poprowadzone przez członka MoAI.',
		cover: 'frost',
		tags: ['LLM', 'Google Cloud', 'RAG']
	},
	{
		id: 'civil42',
		title: 'Hackathon Civil42',
		category: 'kwiecień 2026',
		description: 'Pierwszy hackathon obrony cywilnej Instytutu 42. Aplikacja webowa wspierająca obywateli i samorządy w scenariuszach kryzysowych.',
		cover: 'copper',
		tags: ['Hackathon', 'Cyber', 'Obrona cywilna']
	},
	{
		id: 'dni-otwarte-2026',
		title: 'Dni Otwarte Politechniki Lubelskiej 2026',
		category: 'kwiecień 2026',
		description: 'Stoisko kierunku Sztuczna Inteligencja w Biznesie. Modele AR, śledzenie gestów, edycja obrazów oraz oprowadzanie kandydatów po kampusie.',
		cover: 'berry',
		tags: ['Rekrutacja', 'AR', 'Uczelnia']
	},
	{
		id: 'mit-ai-summit',
		title: 'MIT AI Summit',
		category: 'marzec 2026',
		description: 'Szczyt MIT AI Summit w Warszawie. Wykłady m.in. prof. Włodzisława Ducha i prof. Piotra Sankowskiego o odpornych systemach AI.',
		cover: 'lagoon',
		tags: ['Konferencja', 'AI', 'Warszawa']
	},
	{
		id: 'seminarium',
		title: 'Międzywydziałowe Seminarium Naukowe',
		category: 'marzec 2026',
		description: 'Prezentacja TaxiFleet, IntiCheck i Moodify. Seminarium międzywydziałowe na PL.',
		cover: 'lilac',
		tags: ['Nauka', 'Prelekcja', 'AI']
	},
	{
		id: 'pollubmy-marketing',
		title: 'Pollubmy Marketing',
		category: 'marzec 2026',
		description: 'Wystąpienie o upstream modeling i inferencji kauzalnej. Jak modele ML obniżają koszt kampanii i odpowiadają na realne potrzeby agencji.',
		cover: 'blush',
		tags: ['Konferencja', 'Marketing', 'Causal ML']
	},
	{
		id: 'ensemble-warsaw',
		title: 'Ensemble AI — Warszawa',
		category: 'marzec 2026',
		description: '6. miejsce na niemal 50 zespołów i awans do prezentacji finałowych. ML w diagnostyce, biologii molekularnej oraz bezpieczeństwo dużych modeli językowych.',
		image: 'images/events/hackathon-ensemble.webp',
		tags: ['Hackathon', 'MedTech', 'LLM']
	},
	{
		id: 'hack4sages',
		title: 'Hack4Sages',
		category: 'marzec 2026',
		description: '1. miejsce w międzynarodowym Hack4Sages. Aplikacja na danych NASA oceniająca potencjał planety do podtrzymania życia — przed zespołami z Harvardu i Cambridge.',
		cover: 'ice',
		tags: ['Hackathon', 'Space', 'Zwycięstwo']
	},
	{
		id: 'brave-community',
		title: 'II spotkanie Brave Community',
		category: 'marzec 2026',
		description: 'Start współpracy z lubelskim Brave Community. Regularny udział w spotkaniach i przygotowanie własnego wystąpienia.',
		cover: 'amber',
		tags: ['Community', 'Lublin', 'Networking']
	},
	{
		id: 'polska-siega-gwiazd',
		title: 'Polska Sięga Gwiazd',
		category: 'grudzień 2025',
		description: 'Spotkanie ze Sławoszem Uznańskim, astronautą misji IGNIS. Pytania do załogi i networking z kołami oraz instytucjami partnerskimi.',
		cover: 'slate',
		tags: ['Space', 'Spotkanie', 'Networking']
	},
	{
		id: 'hacknation',
		title: 'Hackathon HackNation',
		category: 'grudzień 2025',
		description: 'HackNation w Bydgoszczy (Ministerstwo Cyfryzacji, MF, MON, MNiSW). Prototypy uczenia maszynowego dla obywateli i administracji.',
		cover: 'merlot',
		tags: ['Hackathon', 'GovTech', 'ML']
	},
	{
		id: 'bhl',
		title: 'Finał hackathonu BHL',
		category: 'listopad 2025',
		description: '3. miejsce w 11. edycji BHL w Warszawie. Prototyp wtyczki JetBrains monitorującej ślad CO₂ kodu i podpowiadającej poprawki z asystentem AI.',
		cover: 'moss',
		tags: ['Hackathon', 'GreenTech', 'Finał']
	},
	{
		id: 'cassini',
		title: 'Hackathon CASSINI',
		category: 'listopad 2025',
		description: 'Trzydniowy CASSINI we Wrocławiu. Analiza danych satelitarnych ESA pod kątem rolnictwa, biznesu i administracji.',
		cover: 'sage',
		tags: ['Hackathon', 'Space', 'ESA']
	},
	{
		id: 'targi-kol',
		title: 'IV Targi Kół Naukowych PL',
		category: 'październik 2025',
		description: 'Pokaz modeli generujących świat gier wideo oraz Stable Diffusion. Promocja AI i ML wśród studentów i uczniów szkół ponadpodstawowych.',
		cover: 'plum',
		tags: ['Uczelnia', 'ML', 'Pokazy']
	},
	{
		id: 'sfb3',
		title: 'Studencki Festiwal Biznesu III',
		category: '2025',
		description: '3. edycja SFB: pierwsze miejsce za asystenta Julię oraz równoległy PoC dynamicznego interfejsu. Dwa zespoły MoAI na żywych briefach medycznym i produktowym.',
		image: 'images/events/sfb3.webp',
		tags: ['Biznes', 'Pitch', 'Zwycięstwo']
	},
	{
		id: 'dni-otwarte-2025',
		title: 'Dni Otwarte Politechniki Lubelskiej 2025',
		category: '2025',
		description: 'Stoisko MoAI na Dniach Otwartych. Pokazy projektów, rozmowy z kandydatami i zaproszenie do koła.',
		image: 'images/events/dni-otwarte-25.webp',
		tags: ['Rekrutacja', 'Uczelnia', 'Pokazy']
	},
	{
		id: 'akademia-inzynierska',
		title: '46. Zgromadzenie Akademii Inżynierskiej',
		category: '2025',
		description: 'Prezentacja MoAI podczas 46. Zgromadzenia Akademii Inżynierskiej. Reprezentacja Politechniki Lubelskiej w gronie środowiska inżynierskiego.',
		cover: 'rust',
		tags: ['Nauka', 'Prestige', 'Uczelnia']
	},
	{
		id: 'sympozjum-xxxiii',
		title: 'XXXIII Sympozjum Naukowe',
		category: '2025',
		description: 'Wystąpienie MoAI na XXXIII Sympozjum Naukowym. Prezentacja kompetencji koła i projektów badawczych przed społecznością akademicką.',
		cover: 'violet',
		tags: ['Nauka', 'Prelekcja', 'Uczelnia']
	},
	{
		id: 'ghostday',
		title: 'GhostDay 2025',
		category: '2025',
		description: 'Konferencja GhostDay w Poznaniu. Spotkania z ekspertami branży i zderzenie akademickiego AI z praktyką produktową.',
		cover: 'citrus',
		tags: ['Konferencja', 'AI', 'Networking']
	},
	{
		id: 'ensemble-krakow',
		title: 'Ensemble AI — Kraków',
		category: '2025',
		description: 'Międzynarodowy hackathon Ensemble AI w Krakowie. Zespół MoAI awansował do finału z modelami uczenia maszynowego.',
		cover: 'cobalt',
		tags: ['Hackathon', 'AI', 'Finał']
	},
	{
		id: 'spaceshield',
		title: 'Hackathon SpaceShield',
		category: '2025',
		description: 'Finał SpaceShield w Stalowej Woli. Analityka, symulacje i tempo konkursowe na styku technologii i zastosowań kosmicznych.',
		image: 'images/events/hackathon-spaceshield.webp',
		tags: ['Hackathon', 'Space', 'Finał']
	},
	{
		id: 'hackathon-google',
		title: 'Hackathon Google',
		category: '2025',
		description: 'Prototypowanie z mentorami Google w Warszawie. Szybkie iteracje, realne problemy biznesowe i intensywny sprint zespołowy.',
		image: 'images/events/hackathon-google.webp',
		tags: ['Hackathon', 'AI', 'Google']
	},
	{
		id: 'sfb2',
		title: 'Studencki Festiwal Biznesu II',
		category: '2024',
		description: '2. edycja festiwalu i pierwsze miejsce MoAI z aplikacją fitness OnHelo. Networking z biznesem, żywy brief i scena dla rozwiązań AI.',
		image: 'images/events/sfb2.webp',
		tags: ['Biznes', 'Pitch', 'Współpraca']
	},
	{
		id: 'pip',
		title: 'Konferencja 105-lecia Państwowej Inspekcji Pracy',
		category: 'październik 2024',
		description: 'Konferencja z okazji 105-lecia PIP. Zespół MoAI wygłosił referat o AI na rynku pracy: wyzwania regulacyjne, ryzyka i szanse, które ta technologia otwiera przed pracownikami i instytucjami.',
		image: 'images/events/pip.webp',
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

		const img = document.createElement('img');
		img.className = 'member-card__photo';
		img.src = basePath + member.image;
		img.alt = member.name;
		img.loading = 'lazy';
		img.draggable = false;
		img.setAttribute('data-protect', 'true');

		const body = document.createElement('div');
		body.className = 'member-card__body';

		const name = document.createElement('p');
		name.className = 'member-card__name';
		name.textContent = member.name;

		const tagsWrap = document.createElement('div');
		tagsWrap.className = 'tags';
		member.tags.forEach((tag) => {
			const chip = document.createElement('span');
			chip.className = 'tag';
			chip.textContent = tag;
			tagsWrap.appendChild(chip);
		});

		body.append(name, tagsWrap);

		const overlay = document.createElement('a');
		overlay.className = 'member-card__link';
		overlay.href = member.linkedin;
		overlay.target = '_blank';
		overlay.rel = 'noopener';
		overlay.ariaLabel = `LinkedIn ${member.name}`;
		overlay.innerHTML = `<span><img class="member-card__link-icon" src="${basePath}icons/linkedin.svg" alt="" aria-hidden="true"> LinkedIn</span>`;

		if (member.invite) {
			overlay.innerHTML = '<span>Dołącz do nas</span>';
		}

		media.append(img, overlay);
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
		img.alt = item.title;
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

function renderProjects(targetId, data, { count = data.length, random = false, showTags = false, linkLabel, showCategory = true } = {}) {
	const target = qs(`#${targetId}`);
	if (!target || !data?.length) return;
	const sourceList = random ? shuffle(data) : [...data];
	const slice = sourceList.slice(0, count);
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
