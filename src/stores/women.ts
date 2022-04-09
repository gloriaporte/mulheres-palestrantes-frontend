import { defineStore } from 'pinia'
interface IWoman {
	photo: string
	name: string
	email?: string
	interests: string[]
	location: string
	links: {
		facebook?: string
		twitter?: string
		github?: string
		behance?: string
		linkedin?: string
		other?: string
	}
}

export const useWomanStore = defineStore({
	id: 'women',
	state: () => ({
		all: [
			{
				photo: 'https://secure.gravatar.com/avatar/07ac697bcff40050a82cb4503de9eb68?r=PG&d=http://insideoutproject.xyz/mulheres-palestrantes/img/placeholder-female.jpg',
				name: 'Alda Rocha',
				interests: [
					'UX design',
					'Front-end',
					'Rails',
					'Web design',
					'Design thinking',
					'Leadership',
					'Creative process',
					'Empreendedorismo',
				],
				location: 'São Paulo/SP',
				links: {
					facebook: 'https://facebook.com/mjcoffeholick',
					twitter: 'https://twitter.com/mjcoffeeholick',
					github: 'https://github.com/mjcoffeeholick',
					linkedin: 'https://www.linkedin.com/in/mjcoffeeholick',
				},
			},
			{
				photo: 'https://secure.gravatar.com/avatar/3ab1d4a265ad9289afe10956a78271df?r=PG&d=http://insideoutproject.xyz/mulheres-palestrantes/img/placeholder-female.jpg',
				name: 'Amanda Vilela',
				interests: ['Front-end', 'UI design', 'Web design'],
				location: 'Sorocaba/SP',
				links: {
					github: 'https://github.com/amandavilela',
					linkedin: 'https://www.linkedin.com/in/amanda-vilela',
					other: 'http://amandavilela.com/',
				},
			},
		] as IWoman[],
	}),
	getters: {},
	actions: {},
})
