// Footer Navigation
// ------------
// Description: The footer navigation data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface FooterAbout {
	title: string
	aboutText: string
	logo: Logo
}

export interface SubCategory {
	subCategory: string
	subCategoryLink: string
}

export interface FooterColumn {
	category: string
	subCategories: SubCategory[]
}

export interface SubFooter {
	copywriteText: string
}

export interface FooterData {
	footerAbout: FooterAbout
	footerColumns: FooterColumn[]
	subFooter: SubFooter
}

export const footerNavigationData: FooterData = {
	footerAbout: {
		title: 'Multi Framework',
		aboutText:
			'Multi Framework is a single, clean architecture codebase targeting Web, iOS, Android, macOS, and Windows, backed by a fully automated deployment pipeline. Write once, deploy everywhere automatically.',
		logo: {
			src: '/logo.png',
			alt: 'Idea to App Store in Under an Hour',
			text: 'Multi Framework'
		}
	},
	footerColumns: [
		{
			category: 'Product',
			subCategories: [
				{
					subCategory: 'Home',
					subCategoryLink: '/'
				},
				{
					subCategory: 'Features',
					subCategoryLink: '/features'
				},
				{
					subCategory: 'FAQ',
					subCategoryLink: '/faq'
				},
				{
					subCategory: 'Pricing',
					subCategoryLink: '/pricing'
				},
				// {
				// 	subCategory: 'Changelog',
				// 	subCategoryLink: '/changelog'
				// },
				// {
				// 	subCategory: 'Terms',
				// 	subCategoryLink: '/terms'
				// }
			]
		},
		// {
		// 	category: 'About us',
		// 	subCategories: [
		// 		{
		// 			subCategory: 'About us',
		// 			subCategoryLink: '/'
		// 		},
		// 		{
		// 			subCategory: 'News',
		// 			subCategoryLink: '/blog'
		// 		},
		// 		{
		// 			subCategory: 'Careers',
		// 			subCategoryLink: '/blog'
		// 		}
		// 	]
		// },
		// {
		// 	category: 'Get in touch',
		// 	subCategories: [
		// 		{
		// 			subCategory: 'Contact',
		// 			subCategoryLink: '/contact'
		// 		},
		// 		{
		// 			subCategory: 'Support',
		// 			subCategoryLink: '/contact'
		// 		},
		// 		{
		// 			subCategory: 'Join us',
		// 			subCategoryLink: '/contact'
		// 		}
		// 	]
		// }
	],
	subFooter: {
		copywriteText: '© Simply Consulting Ltd 2026.'
	}
}
