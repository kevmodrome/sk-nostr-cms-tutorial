import type { NDKTag } from "@nostr-dev-kit/ndk";

export function generateSlug(headline: string): string {
    const lowerCaseHeadline = headline.toLowerCase();
    const slug = lowerCaseHeadline.replace(/[^\w\s]/g, '').replace(/\s+/g, '-');
    return slug;
  }

export function mapTags(tuple_tags: NDKTag[]): Record<string, string | string[]> {
  let tags = tuple_tags.reduce((acc, [key, value]) => {
      if (!acc[key]) acc[key] = value
      else if (typeof acc[key] === 'string') {
        acc[key] = [acc[key], value] as string[]
      } else {
        (acc[key] as string[]).push(value)
      }
      return acc
  }, {} as Record<string, string | string[]>)
    
  return tags
}