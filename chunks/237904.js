var l,
    t,
    o,
    i,
    a,
    r,
    c = n(442837),
    u = n(570140);
((l = a || (a = {})).FAILED = 'failed'), (l.SUCCEEDED = 'succeeded');
let d = {};
class g extends (r = c.ZP.Store) {
    getFollowerStatsForChannel(e) {
        return d[e];
    }
}
(i = 'ChannelFollowerStatsStore'),
    (o = 'displayName') in (t = g)
        ? Object.defineProperty(t, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (t[o] = i),
    (s.Z = new g(u.Z, {
        CONNECTION_OPEN: function () {
            d = {};
        },
        CHANNEL_FOLLOWER_STATS_FETCH_SUCCESS: function (e) {
            let { channelId: s, stats: n } = e;
            (n = null != n ? n : {}),
                (d[s] = {
                    loadingStatus: 'succeeded',
                    lastFetched: Date.now(),
                    channelsFollowing: n.channels_following,
                    guildMembers: n.guild_members,
                    guildsFollowing: n.guilds_following,
                    usersSeenEver: n.users_seen_ever,
                    subscribersGainedSinceLastPost: n.subscribers_gained_since_last_post,
                    subscribersLostSinceLastPost: n.subscribers_lost_since_last_post
                });
        },
        CHANNEL_FOLLOWER_STATS_FETCH_FAILURE: function (e) {
            let { channelId: s } = e;
            d[s] = {
                loadingStatus: 'failed',
                lastFetched: Date.now(),
                channelsFollowing: 0,
                guildMembers: 0,
                guildsFollowing: 0,
                usersSeenEver: 0,
                subscribersGainedSinceLastPost: 0,
                subscribersLostSinceLastPost: 0
            };
        }
    }));
