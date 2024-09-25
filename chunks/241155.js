t(47120);
var l,
    i,
    u,
    r,
    a = t(392711),
    d = t.n(a),
    o = t(442837),
    s = t(570140),
    c = t(924301),
    E = t(601964),
    _ = t(486527);
let f = !1,
    N = {},
    Z = {},
    I = {},
    C = (e) => (
        (I[e.guild_scheduled_event.id] = new E.ZP(e.guild_scheduled_event.guild)),
        (Z[e.guild_scheduled_event.id] = e.guild_scheduled_event),
        {
            channelId: e.directory_channel_id,
            scheduledEventId: e.entity_id,
            type: _.C2.GUILD_SCHEDULED_EVENT,
            authorId: e.author_id,
            createdAt: e.created_at
        }
    );
class T extends (l = o.ZP.Store) {
    isFetching() {
        return f;
    }
    getEventDirectoryEntries(e) {
        if (null != e) return N[e];
    }
    getCachedGuildByEventId(e) {
        var n;
        return null !== (n = I[e]) && void 0 !== n ? n : void 0;
    }
    getCachedGuildScheduledEventById(e) {
        var n;
        return null !== (n = Z[e]) && void 0 !== n ? n : void 0;
    }
}
(r = 'EventDirectoryStore'),
    (u = 'displayName') in (i = T)
        ? Object.defineProperty(i, u, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[u] = r),
    (n.Z = new T(s.Z, {
        EVENT_DIRECTORY_FETCH_START: function () {
            f = !0;
        },
        EVENT_DIRECTORY_FETCH_SUCCESS: function (e) {
            let { channelId: n, entries: t } = e;
            f = !1;
            let l = d().sortBy(
                    [...t],
                    [
                        function (e) {
                            return (0, c.CQ)(e.guild_scheduled_event);
                        }
                    ]
                ),
                i = d().map(l, C);
            N[n] = i;
        },
        EVENT_DIRECTORY_FETCH_FAILURE: function () {
            f = !1;
        }
    }));
