t(47120);
var u,
    r,
    i,
    l,
    o = t(512722),
    a = t.n(o),
    d = t(442837),
    c = t(570140),
    s = t(344185),
    f = t(592125),
    g = t(306680);
let Z = {},
    m = new Set();
class v extends (u = d.ZP.Store) {
    initialize() {
        this.waitFor(s.Z, f.Z, g.ZP);
    }
    getCount(e) {
        return Z[e];
    }
    getThreadIdsMissingCounts(e, n) {
        return a()(s.Z.hasLoaded(e), 'must wait for THREAD_LIST_SYNC before calling this'), n.filter((e) => !(e in Z) && !m.has(e));
    }
}
(l = 'ForumPostUnreadCountStore'),
    (i = 'displayName') in (r = v)
        ? Object.defineProperty(r, i, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[i] = l),
    (n.Z = new v(c.Z, {
        CONNECTION_OPEN: function () {
            (Z = {}), (m = new Set());
        },
        THREAD_CREATE: function (e) {
            let { channel: n, isNewlyCreated: t } = e;
            if (!t || !s.Z.hasLoaded(n.guild_id)) return !1;
            Z[n.id] = 0;
        },
        MESSAGE_CREATE: function (e) {
            let { channelId: n, optimistic: t, isPushNotification: u } = e;
            if (t || u || !(n in Z)) return !1;
            Z[n]++;
        },
        FORUM_UNREADS: function (e) {
            let { threads: n } = e;
            n.forEach((e) => {
                null != e.count && (Z[e.threadId] = e.count);
            });
        },
        MESSAGE_ACK: function (e) {
            let { channelId: n } = e;
            if (!(n in Z)) {
                let e = f.Z.getChannel(n),
                    t = f.Z.getChannel(null == e ? void 0 : e.parent_id);
                if (!(null == t ? void 0 : t.isForumLikeChannel())) return !1;
            }
            Z[n] = g.ZP.getUnreadCount(n);
        },
        REQUEST_FORUM_UNREADS: function (e) {
            let { threads: n } = e;
            n.forEach((e) => {
                let { threadId: n } = e;
                return m.add(n);
            });
        }
    }));
