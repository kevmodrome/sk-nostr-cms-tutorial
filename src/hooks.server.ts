import type { Handle } from '@sveltejs/kit';
import { ndk } from '$lib/server/nostr'

await ndk.init()

export const handle = (async ({ event, resolve }) => {
    const response = await resolve(event);
    return response;
}) satisfies Handle;