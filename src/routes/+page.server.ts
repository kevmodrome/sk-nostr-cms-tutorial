import { ndk } from '$lib/server/nostr';

export const load = async () => {
    const articles = await ndk.getAllArticles()

    return {
        title: 'A list of blog posts',
        meta: {
            title: "A list of blog posts",
            description: 'This blog is an experiment. It uses Nostr as a CMS for all my articles.'
        },
        articles
    };
}