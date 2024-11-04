var i,
    l,
    a,
    r,
    s,
    o,
    c = n(442837),
    d = n(570140);
((i = s || (s = {})).FAILED = 'failed'), (i.SUCCEEDED = 'succeeded');
let u = {};
class h extends (o = c.ZP.Store) {
    getFollowerStatsForChannel(e) {
        return u[e];
    }
}
(r = 'ChannelFollowerStatsStore'),
    (a = 'displayName') in (l = h)
        ? Object.defineProperty(l, a, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[a] = r),
    (t.Z = new h(d.Z, {
        CONNECTION_OPEN: function () {
            u = {};
        },
        CHANNEL_FOLLOWER_STATS_FETCH_SUCCESS: function (e) {
            let { channelId: t, stats: n } = e;
            (n = null != n ? n : {}),
                (u[t] = {
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
            let { channelId: t } = e;
            u[t] = {
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
