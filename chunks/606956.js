"use strict";
s.r(t);
var l, n, a, o, i, r, u = s("442837"),
  d = s("570140");
(l = i || (i = {})).FAILED = "failed", l.SUCCEEDED = "succeeded";
let c = {};
class f extends(r = u.default.Store) {
  getFollowerStatsForChannel(e) {
    return c[e]
  }
}
o = "ChannelFollowerStatsStore", (a = "displayName") in(n = f) ? Object.defineProperty(n, a, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : n[a] = o, t.default = new f(d.default, {
  CONNECTION_OPEN: function() {
    c = {}
  },
  CHANNEL_FOLLOWER_STATS_FETCH_SUCCESS: function(e) {
    let {
      channelId: t,
      stats: s
    } = e;
    s = null != s ? s : {}, c[t] = {
      loadingStatus: "succeeded",
      lastFetched: Date.now(),
      channelsFollowing: s.channels_following,
      guildMembers: s.guild_members,
      guildsFollowing: s.guilds_following,
      usersSeenEver: s.users_seen_ever,
      subscribersGainedSinceLastPost: s.subscribers_gained_since_last_post,
      subscribersLostSinceLastPost: s.subscribers_lost_since_last_post
    }
  },
  CHANNEL_FOLLOWER_STATS_FETCH_FAILURE: function(e) {
    let {
      channelId: t
    } = e;
    c[t] = {
      loadingStatus: "failed",
      lastFetched: Date.now(),
      channelsFollowing: 0,
      guildMembers: 0,
      guildsFollowing: 0,
      usersSeenEver: 0,
      subscribersGainedSinceLastPost: 0,
      subscribersLostSinceLastPost: 0
    }
  }
})