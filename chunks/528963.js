"use strict";
n.r(t);
var s = n("544891"),
  l = n("570140"),
  a = n("981631");
t.default = {
  createChannelFollower: (e, t) => s.HTTP.post({
    url: a.Endpoints.CHANNEL_FOLLOWERS(t),
    body: {
      webhook_channel_id: e
    },
    oldFormErrors: !0
  }),
  async fetchChannelFollowerStats(e) {
    l.default.dispatch({
      type: "CHANNEL_FOLLOWER_STATS_FETCH_START"
    });
    try {
      let t = await s.HTTP.get({
        url: a.Endpoints.CHANNEL_FOLLOWER_STATS(e),
        body: {
          channel_id: e
        },
        oldFormErrors: !0
      });
      l.default.dispatch({
        type: "CHANNEL_FOLLOWER_STATS_FETCH_SUCCESS",
        stats: t.body,
        channelId: e
      })
    } catch (t) {
      l.default.dispatch({
        type: "CHANNEL_FOLLOWER_STATS_FETCH_FAILURE",
        channelId: e
      })
    }
  },
  dismissPublishBump(e) {
    l.default.dispatch({
      type: "CHANNEL_FOLLOWING_PUBLISH_BUMP_DISMISSED",
      messageId: e
    })
  },
  permanentlyHidePublishBump(e) {
    l.default.dispatch({
      type: "CHANNEL_FOLLOWING_PUBLISH_BUMP_HIDE_PERMANENTLY",
      channelId: e
    })
  }
}