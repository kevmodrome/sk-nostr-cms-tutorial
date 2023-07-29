// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

interface Article {
	content?: string,
	slug?: string,
	d?: string,
	title: string,
	summary: string,
	tags: string[]
	published_at: string,
}

export {};
