var r,
    i = n(913527),
    a = n.n(i),
    s = n(442837),
    o = n(570140),
    l = n(709054);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let c = { lastSeenNewlyAddedEmojiIds: {} },
    d = c,
    f = {};
function _() {
    for (let e in f) d.lastSeenNewlyAddedEmojiIds[e] = f[e];
}
class p extends (r = s.ZP.PersistedStore) {
    initialize(e) {
        d = null != e ? e : c;
    }
    getState() {
        return d;
    }
    getLastSeenEmojiByGuild(e) {
        return d.lastSeenNewlyAddedEmojiIds[e];
    }
    isNewerThanLastSeen(e, t) {
        if (null == e || null == t) return !1;
        let n = this.getLastSeenEmojiByGuild(e);
        if (null == n) return !0;
        if (l.default.compare(t, n.id) > 0) return !0;
        {
            let e = a()(n.lastSeen);
            return a()().isBefore(e.add(2, 'weeks')) && !n.acknowledged;
        }
    }
}
u(p, 'displayName', 'NewlyAddedEmojiStore'),
    u(p, 'persistKey', 'NewlyAddedEmojiStore'),
    u(p, 'migrations', [
        (e) => {
            let t = e.lastSeenNewlyAddedEmojiIds,
                n = {};
            for (let e in t) {
                let r = t[e];
                n[e] = {
                    id: r,
                    lastSeen: Date.now(),
                    acknowledged: !1
                };
            }
            return { lastSeenNewlyAddedEmojiIds: n };
        }
    ]),
    (t.Z = new p(o.Z, {
        LOGOUT: function () {
            (d = c), (f = {});
        },
        NEWLY_ADDED_EMOJI_SEEN_ACKNOWLEDGED: function (e) {
            var t;
            let { guildId: n, emojiId: r } = e,
                i = null !== (t = f[n]) && void 0 !== t ? t : d.lastSeenNewlyAddedEmojiIds[n];
            null == i || 0 > l.default.compare(i.id, r)
                ? (f[n] = {
                      id: r,
                      lastSeen: Date.now(),
                      acknowledged: !0
                  })
                : (f[n] = {
                      ...i,
                      acknowledged: !0
                  });
        },
        NEWLY_ADDED_EMOJI_SEEN_PENDING: function (e) {
            var t;
            let { guildId: n, emojiId: r } = e,
                i = null !== (t = f[n]) && void 0 !== t ? t : d.lastSeenNewlyAddedEmojiIds[n];
            (null == i || 0 > l.default.compare(i.id, r)) &&
                (f[n] = {
                    id: r,
                    lastSeen: Date.now(),
                    acknowledged: !1
                });
        },
        NEWLY_ADDED_EMOJI_SEEN_UPDATED: _,
        CLEAR_CACHES: function () {
            (d = c), _();
        },
        CONNECTION_CLOSED: _
    }));
