// Config
// ------------
// Description: The configuration file for the website.

export interface Logo {
	src: string
	alt: string
}

export type Mode = 'auto' | 'light' | 'dark'

export interface Config {
	siteTitle: string
	siteDescription: string
	ogImage: string
	logo: Logo
	canonical: boolean
	noindex: boolean
	mode: Mode
	scrollAnimations: boolean
}

export const configData: Config = {
	siteTitle: 'Multi Framework. Idea to App Store in Under an Hour',
	siteDescription:
		'Multi Framework is a single, clean architecture codebase targeting Web, iOS, Android, macOS, Windows and browser extensions, backed by a fully automated deployment pipeline. Write once, deploy everywhere automatically.',
	ogImage: '/og.jpg',
	logo: {
		src: '/logo.png',
		alt: 'Idea to App Store in Under an Hour'
	},
	canonical: true,
	noindex: false,
	mode: 'light',
	scrollAnimations: true
}
