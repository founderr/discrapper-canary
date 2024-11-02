t(47120);
var i,
    a,
    l,
    r,
    d = t(392711),
    o = t.n(d),
    c = t(442837),
    s = t(570140),
    u = t(924301),
    _ = t(601964),
    g = t(486527);
let p = !1,
    m = {},
    I = {},
    v = {},
    h = (e) => (
        (v[e.guild_scheduled_event.id] = new _.ZP(e.guild_scheduled_event.guild)),
        (I[e.guild_scheduled_event.id] = e.guild_scheduled_event),
        {
            channelId: e.directory_channel_id,
            scheduledEventId: e.entity_id,
            type: g.C2.GUILD_SCHEDULED_EVENT,
            authorId: e.author_id,
            createdAt: e.created_at
        }
    );
class f extends (i = c.ZP.Store) {
    isFetching() {
        return p;
    }
    getEventDirectoryEntries(e) {
        if (null != e) return m[e];
    }
    getCachedGuildByEventId(e) {
        var n;
        return null !== (n = v[e]) && void 0 !== n ? n : void 0;
    }
    getCachedGuildScheduledEventById(e) {
        var n;
        return null !== (n = I[e]) && void 0 !== n ? n : void 0;
    }
}
(r = 'EventDirectoryStore'),
    (l = 'displayName') in (a = f)
        ? Object.defineProperty(a, l, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[l] = r),
    (n.Z = new f(s.Z, {
        EVENT_DIRECTORY_FETCH_START: function () {
            p = !0;
        },
        EVENT_DIRECTORY_FETCH_SUCCESS: function (e) {
            let { channelId: n, entries: t } = e;
            p = !1;
            let i = o().sortBy(
                    [...t],
                    [
                        function (e) {
                            return (0, u.CQ)(e.guild_scheduled_event);
                        }
                    ]
                ),
                a = o().map(i, h);
            m[n] = a;
        },
        EVENT_DIRECTORY_FETCH_FAILURE: function () {
            p = !1;
        }
    }));
