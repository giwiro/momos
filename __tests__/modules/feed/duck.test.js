// @flow
import reducer, {
  FeedFetchPosts,
  FeedFetchPostsSuccess,
  FeedFetchPostsError,
  initialState,
  fetchPostsEpic,
} from '../../../src/modules/feed/duck';
import {TestScheduler} from 'rxjs/testing';
import {fetchPostsApi} from '../../../src/modules/feed/api';

jest.mock('../../../src/modules/feed/api');

const mockApiResponse = {
  data: [
    {
      type: 'gif',
      id: '2fPig3PMSsZqIbq0Tc',
      url:
        'https:\\/\\/giphy.com\\/stickers\\/thanks-thank-you-2fPig3PMSsZqIbq0Tc',
      slug: 'thanks-thank-you-2fPig3PMSsZqIbq0Tc',
      bitly_gif_url: 'https:\\/\\/gph.is\\/2mmhfxf',
      bitly_url: 'https:\\/\\/gph.is\\/2mmhfxf',
      embed_url: 'https:\\/\\/giphy.com\\/embed\\/2fPig3PMSsZqIbq0Tc',
      username: 'carawrrr',
      source: 'www.carawrrr.com',
      title: 'Thanks Thank You Sticker by Carawrrr',
      rating: 'g',
      content_url: '',
      source_tld: '',
      source_post_url: 'www.carawrrr.com',
      is_sticker: 1,
      import_datetime: '2018-07-16 15:11:56',
      trending_datetime: '2020-03-25 22:00:28',
      images: {
        hd: {
          height: '1388',
          mp4:
            'https:\\/\\/media1.giphy.com\\/media\\/2fPig3PMSsZqIbq0Tc\\/giphy-hd.mp4?cid=4a60ab043af3077f5a679962db54a09c17ddc5c6b6fa5d7a&rid=giphy-hd.mp4',
          mp4_size: '409144',
          width: '1920',
        },
        downsized_large: {
          height: '347',
          size: '63193',
          url:
            'https:\\/\\/media1.giphy.com\\/media\\/2fPig3PMSsZqIbq0Tc\\/giphy.gif?cid=4a60ab043af3077f5a679962db54a09c17ddc5c6b6fa5d7a&rid=giphy.gif',
          width: '480',
        },
        fixed_height_small_still: {
          height: '100',
          size: '6541',
          url:
            'https:\\/\\/media1.giphy.com\\/media\\/2fPig3PMSsZqIbq0Tc\\/100_s.gif?cid=4a60ab043af3077f5a679962db54a09c17ddc5c6b6fa5d7a&rid=100_s.gif',
          width: '139',
        },
        original: {
          frames: '3',
          hash: '8b4f0894ae3c31235a56fb6ea3ba06e8',
          height: '347',
          mp4:
            'https:\\/\\/media1.giphy.com\\/media\\/2fPig3PMSsZqIbq0Tc\\/giphy.mp4?cid=4a60ab043af3077f5a679962db54a09c17ddc5c6b6fa5d7a&rid=giphy.mp4',
          mp4_size: '65578',
          size: '63193',
          url:
            'https:\\/\\/media1.giphy.com\\/media\\/2fPig3PMSsZqIbq0Tc\\/giphy.gif?cid=4a60ab043af3077f5a679962db54a09c17ddc5c6b6fa5d7a&rid=giphy.gif',
          webp:
            'https:\\/\\/media1.giphy.com\\/media\\/2fPig3PMSsZqIbq0Tc\\/giphy.webp?cid=4a60ab043af3077f5a679962db54a09c17ddc5c6b6fa5d7a&rid=giphy.webp',
          webp_size: '60870',
          width: '480',
        },
        user: {
          avatar_url:
            'https:\\/\\/media3.giphy.com\\/avatars\\/carawrrr\\/nZ9QpWObQIAE.jpg',
          banner_url: '',
          profile_url: 'https:\\/\\/giphy.com\\/carawrrr\\/',
          username: 'carawrrr',
          display_name: 'Carawrrr',
          is_verified: true,
        },
        analytics_response_payload:
          'e=Z2lmX2lkPTJmUGlnM1BNU3NacUlicTBUYyZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9NGE2MGFiMDQzYWYzMDc3ZjVhNjc5OTYyZGI1NGEwOWMxN2RkYzVjNmI2ZmE1ZDdh',
        analytics: {
          onload: {
            url:
              'https:\\/\\/giphy-analytics.giphy.com\\/simple_analytics?response_id=3af3077f5a679962db54a09c17ddc5c6b6fa5d7a&event_type=GIF_TRENDING&gif_id=2fPig3PMSsZqIbq0Tc&action_type=SEEN',
          },
          onclick: {
            url:
              'https:\\/\\/giphy-analytics.giphy.com\\/simple_analytics?response_id=3af3077f5a679962db54a09c17ddc5c6b6fa5d7a&event_type=GIF_TRENDING&gif_id=2fPig3PMSsZqIbq0Tc&action_type=CLICK',
          },
          consent: {
            url:
              'https:\\/\\/giphy-analytics.giphy.com\\/simple_analytics?response_id=3af3077f5a679962db54a09c17ddc5c6b6fa5d7a&event_type=GIF_TRENDING&gif_id=2fPig3PMSsZqIbq0Tc&action_type=SENT',
          },
        },
      },
    },
  ],
  pagination: {
    total_count: 34021,
    count: 30,
    offset: 0,
  },
  meta: {
    status: 200,
    msg: 'OK',
    response_id: '3af3077f5a679962db54a09c17ddc5c6b6fa5d7a',
  },
};

describe('Action creators', () => {
  it('should return an action to fetch posts', () =>
    expect(new FeedFetchPosts()).toMatchSnapshot());

  it('should return an action to fetch posts success', () =>
    expect(
      new FeedFetchPostsSuccess({
        posts: (mockApiResponse.data: any),
        fetchFromTop: true,
      }),
    ).toMatchSnapshot());

  it('should return an action to fetch posts error', () =>
    expect(new FeedFetchPostsError()).toMatchSnapshot());
});

describe('Reducer', () => {
  it('should return initialState', () =>
    expect(initialState).toMatchSnapshot());

  it('should return the state with is loading', () =>
    expect(reducer(initialState, new FeedFetchPosts())).toMatchSnapshot());

  it('should return the state with is loading from top', () =>
    expect(
      reducer(initialState, new FeedFetchPosts({fetchFromTop: true})),
    ).toMatchSnapshot());

  it('should return the state with the posts when there were none', () => {
    jest.spyOn(Date, 'now').mockImplementation(() => 1585202345469);
    expect(
      reducer(
        initialState,
        new FeedFetchPostsSuccess({
          fetchFromTop: true,
          posts: (mockApiResponse.data: any),
        }),
      ),
    ).toMatchSnapshot();
  });

  it('should return the state without loading', () =>
    expect(reducer(initialState, new FeedFetchPostsError())).toMatchSnapshot());
});

describe('Epics', () => {
  let testScheduler: TestScheduler;

  beforeEach(() => {
    testScheduler = new TestScheduler((actual, expected) =>
      expect(actual).toEqual(expected),
    );
  });

  describe('fetchPostsEpic', () => {
    it('should succeed fetching posts', () => {
      testScheduler.run(({hot, cold, expectObservable}) => {
        const action$ = hot('-a|', {
          a: {
            type: FeedFetchPosts.name,
          },
        });
        const state = {
          value: {
            feed: initialState,
          },
        };
        const output$ = fetchPostsEpic(action$, state);
        // $FlowFixMe
        fetchPostsApi.mockImplementation(() =>
          cold('--a|', {
            a: mockApiResponse,
          }),
        );
        expectObservable(output$).toBe('---a|', {
          a: {
            type: 'FeedFetchPostsSuccess',
            posts: mockApiResponse.data,
            fetchFromTop: undefined,
          },
        });
      });
    });
  });
});
