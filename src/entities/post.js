// @flow
export type Post = {
  type: 'gif',
  id: string,
  url: string,
  slug: string,
  username: string,
  user?: {
    avatar_url: string,
    banner_url: string,
    banner_image: string,
    profile_url: string,
    username: string,
    display_name: string,
    is_verified: string,
  },
};
