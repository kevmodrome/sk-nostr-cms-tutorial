import NDK from "@nostr-dev-kit/ndk";
import type { NDKEvent } from "@nostr-dev-kit/ndk";
import { generateSlug, mapTags } from './utils'
import 'websocket-polyfill'

const relays = ['wss://relay.damus.io', 'wss://purplepag.es']

class Nostr {
    private ndk: NDK

    constructor(relays: string[]) {
        this.ndk = new NDK({ explicitRelayUrls: relays })
    }
    public async init() {
        try {
            await this.ndk.connect()
        } catch (error) {
            console.error('Error connecting to NDK:', error)
        }
    }
    public async getAllArticles(): Promise<Article[]> {
        let events: NDKEvent[];
            try {
                events = [...await this.ndk.fetchEvents({ kinds: [ 30023 ], limit: 5 })]
            } catch (error) {
                console.error('Error fetching events:', error)
                events = []
            }
        const articles = events.map(({tags}) => {
            const { summary, image, published_at, title, t, d } = mapTags(tags)

            return {
                slug: generateSlug(title as string),
                d,
                summary, 
                image, 
                published_at, 
                title,
                tags: t || []
                }
            })
        if (articles.length === 0) {
            return []
        }
        
        return articles as Article[]
  }

}

export const ndk = new Nostr(relays);
