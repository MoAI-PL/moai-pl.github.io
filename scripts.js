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
		id: 'ai-lab',
		title: 'AI Lab Starter',
		category: 'Repo',
		description: 'Placeholder repo dla narzędzi do szybkich eksperymentów AI.',
		image: 'images/projects/ai-lab.webp',
		tags: ['AI', 'Tools', 'Starter'],
		github: 'https://github.com/moai/ai-lab-starter'
	},
	{
		id: 'bizops-dashboard',
		title: 'BizOps Dashboard',
		category: 'Repo',
		description: 'Placeholder panel KPI i growth z integracją CRM.',
		image: 'images/projects/bizops-dashboard.webp',
		tags: ['Biznes', 'Data', 'Growth'],
		github: 'https://github.com/moai/bizops-dashboard'
	},
	{
		id: 'study-buddy',
		title: 'Study Buddy',
		category: 'Repo',
		description: 'Placeholder aplikacja wspierająca studygroup i quizy.',
		image: 'images/projects/study-buddy.webp',
		tags: ['Edu', 'AI', 'Helpers'],
		github: 'https://github.com/moai/study-buddy'
	},
	{
		id: 'event-toolkit',
		title: 'Event Toolkit',
		category: 'Repo',
		description: 'Placeholder zestaw narzędzi do obsługi eventów i rejestracji.',
		image: 'images/projects/event-toolkit.webp',
		tags: ['Events', 'Ops', 'Automation'],
		github: 'https://github.com/moai/event-toolkit'
	},
	{
		id: 'partner-portal',
		title: 'Partner Portal',
		category: 'Repo',
		description: 'Placeholder przestrzeń do współpracy z partnerami i sponsorami.',
		image: 'images/projects/partner-portal.webp',
		tags: ['Partnerships', 'Web', 'Security'],
		github: 'https://github.com/moai/partner-portal'
	},
	{
		id: 'outreach-site',
		title: 'Outreach Site',
		category: 'Repo',
		description: 'Placeholder minisite z formularzem kontaktowym i showcase.',
		image: 'images/projects/outreach-site.webp',
		tags: ['Web', 'Landing', 'UI'],
		github: 'https://github.com/moai/outreach-site'
	}
];

const events = [
	{
		id: 'sfb2',
		title: 'Studencki Festiwal Biznesu II',
		category: 'Wydarzenie',
		description: 'Scena dla innowacyjnych pomysłów, networking z biznesem i AI w praktyce.',
		image: 'images/events/sfb2.webp'
	},
	{
		id: 'sfb3',
		title: 'Studencki Festiwal Biznesu III',
		category: 'Wydarzenie',
		description: 'Kolejna odsłona festiwalu z większą liczbą warsztatów i pitchy.',
		image: 'images/events/sfb3.webp'
	},
	{
		id: 'hackathon-google',
		title: 'Hackathon Google',
		category: 'Hackathon',
		description: 'Szybkie prototypowanie z mentorami, AI i rozwiązania dla realnych problemów.',
		image: 'images/events/hackathon-google.webp'
	},
	{
		id: 'hackathon-ensemble',
		title: 'Hackathon EnsembleAI',
		category: 'Hackathon',
		description: 'Zespół tworzy modele AI i prezentuje je przed jury branżowym.',
		image: 'images/events/hackathon-ensemble.webp'
	},
	{
		id: 'hackathon-spaceshield',
		title: 'Hackathon SpaceShield',
		category: 'Hackathon',
		description: 'Obrona kosmiczna? Budujemy analitykę i symulacje w ekspresowym tempie.',
		image: 'images/events/hackathon-spaceshield.webp'
	},
	{
		id: 'dni-otwarte',
		title: 'Dni Otwarte 2025',
		category: 'Wydarzenie',
		description: 'Prowadzimy prezentacje, pokazujemy projekty i zachęcamy nowych członków.',
		image: 'images/events/dni-otwarte-25.webp'
	},
	{
		id: 'math',
		title: 'Studygroup: matematyka',
		category: 'Warsztat',
		description: 'Seria wspólnych sesji przygotowujących do kolokwiów i egzaminów.',
		image: 'images/events/math.webp'
	},
	{
		id: 'pip',
		title: 'Projekt PIP',
		category: 'Projekt społeczny',
		description: 'Wspieramy inicjatywy społeczne i biznesowe z wykorzystaniem AI.',
		image: 'images/events/pip.webp'
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

function createProjectCard(project, { showTags = false, linkLabel = 'Zobacz', showCategory = true } = {}) {
	const card = document.createElement('article');
	card.className = 'project-card fade-in';

	const media = document.createElement('div');
	media.className = 'project-card__media';
	const img = document.createElement('img');
	img.src = basePath + project.image;
	img.alt = project.title;
	img.loading = 'lazy';
	img.draggable = false;
	img.setAttribute('data-protect', 'true');
	media.appendChild(img);

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

const gapAlignedNavHashes = new Set(['#projects', '#events', '#join']);

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

document.addEventListener('DOMContentLoaded', () => {
	const page = document.body.dataset.page;

	handlePreloader();
	updateFooterYear();

	if (page === 'index') {
		const isMobileMembers = isMobileMembersViewport();
		renderMembers('members-grid', {
			limit: getIndexMembersLimit(),
			includeCta: false,
			randomize: true,
			pinInviteLast: !isMobileMembers,
			includeInvite: !isMobileMembers
		});
		renderProjects('projects-grid', projects, { count: 3, random: true, showTags: true, linkLabel: 'GitHub' });
		renderProjects('events-grid', events, { count: 3, random: true, showCategory: false });
	}

	if (page === 'members') {
		renderMembers('members-grid', { includeInvite: false });
	}

	if (page === 'projects') {
		renderProjects('projects-grid', projects, { showTags: true, linkLabel: 'GitHub' });
	}

	if (page === 'events') {
		renderProjects('projects-grid', events, { showCategory: false });
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
