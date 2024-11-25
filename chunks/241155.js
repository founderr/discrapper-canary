e(47120);
var i,
    r,
    l,
    a,
    d = e(392711),
    c = e.n(d),
    u = e(442837),
    o = e(570140),
    _ = e(924301),
    s = e(601964),
    E = e(486527);
let p = !1,
    I = {},
    T = {},
    g = {},
    C = (n) => (
        (g[n.guild_scheduled_event.id] = new s.ZP(n.guild_scheduled_event.guild)),
        (T[n.guild_scheduled_event.id] = n.guild_scheduled_event),
        {
            channelId: n.directory_channel_id,
            scheduledEventId: n.entity_id,
            type: E.C2.GUILD_SCHEDULED_EVENT,
            authorId: n.author_id,
            createdAt: n.created_at
        }
    );
class f extends (i = u.ZP.Store) {
    isFetching() {
        return p;
    }
    getEventDirectoryEntries(n) {
        if (null != n) return I[n];
    }
    getCachedGuildByEventId(n) {
        var t;
        return null !== (t = g[n]) && void 0 !== t ? t : void 0;
    }
    getCachedGuildScheduledEventById(n) {
        var t;
        return null !== (t = T[n]) && void 0 !== t ? t : void 0;
    }
}
(a = 'EventDirectoryStore'),
    (l = 'displayName') in (r = f)
        ? Object.defineProperty(r, l, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[l] = a),
    (t.Z = new f(o.Z, {
        EVENT_DIRECTORY_FETCH_START: function () {
            p = !0;
        },
        EVENT_DIRECTORY_FETCH_SUCCESS: function (n) {
            let { channelId: t, entries: e } = n;
            p = !1;
            let i = c().sortBy(
                    [...e],
                    [
                        function (n) {
                            return (0, _.CQ)(n.guild_scheduled_event);
                        }
                    ]
                ),
                r = c().map(i, C);
            I[t] = r;
        },
        EVENT_DIRECTORY_FETCH_FAILURE: function () {
            p = !1;
        }
    }));
