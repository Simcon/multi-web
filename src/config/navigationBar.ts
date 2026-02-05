// Navigation Bar
// ------------
// Description: The navigation bar data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface NavSubItem {
	name: string
	link: string
}

export interface NavItem {
	name: string
	link: string
	submenu?: NavSubItem[]
}

export interface NavAction {
	name: string
	link: string
	style: string
	size: string
}

export interface NavData {
	logo: Logo
	navItems: NavItem[]
	navActions: NavAction[]
}

export const navigationBarData: NavData = {
	logo: {
		src: '/logo.png',
		alt: 'Idea to App Store in Under an Hour',
		text: 'Multi Framework'
	},
	navItems: [
		{ name: 'Features', link: '/features' },
		{ name: 'Pricing', link: '/pricing' },
		{
			name: 'Resources',
			link: '#',
			submenu: [
				//{ name: 'Changelog', link: '/changelog' },
				{ name: 'Home', link: '/' },
				{ name: 'Blog', link: '/blog' },
				{ name: 'FAQ', link: '/faq' },
				{ name: 'Demo app', link: '/demo' },
				//{ name: 'Terms', link: '/terms' }
			]
		},
	],
	navActions: [
		{ name: '50% early-access discount', link: 'https://tally.so/r/Gx6VYz', style: 'primary', size: 'lg' }
	]
}
