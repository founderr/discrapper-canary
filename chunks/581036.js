var r,
    i = n(47120);
var a = n(512722),
    o = n.n(a),
    s = n(442837),
    l = n(570140),
    u = n(344185),
    c = n(592125),
    d = n(306680);
function _(e, t, n) {
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
let E = {},
    f = new Set();
function h() {
    (E = {}), (f = new Set());
}
function p(e) {
    let { channel: t, isNewlyCreated: n } = e;
    if (!n || !u.Z.hasLoaded(t.guild_id)) return !1;
    E[t.id] = 0;
}
function m(e) {
    let { channelId: t, optimistic: n, isPushNotification: r } = e;
    if (n || r || !(t in E)) return !1;
    E[t]++;
}
function I(e) {
    let { threads: t } = e;
    t.forEach((e) => {
        null != e.count && (E[e.threadId] = e.count);
    });
}
function T(e) {
    let { channelId: t } = e;
    if (!(t in E)) {
        let e = c.Z.getChannel(t),
            n = c.Z.getChannel(null == e ? void 0 : e.parent_id);
        if (!(null == n ? void 0 : n.isForumLikeChannel())) return !1;
    }
    E[t] = d.ZP.getUnreadCount(t);
}
function g(e) {
    let { threads: t } = e;
    t.forEach((e) => {
        let { threadId: t } = e;
        return f.add(t);
    });
}
class S extends (r = s.ZP.Store) {
    initialize() {
        this.waitFor(u.Z, c.Z, d.ZP);
    }
    getCount(e) {
        return E[e];
    }
    getThreadIdsMissingCounts(e, t) {
        return o()(u.Z.hasLoaded(e), 'must wait for THREAD_LIST_SYNC before calling this'), t.filter((e) => !(e in E) && !f.has(e));
    }
}
_(S, 'displayName', 'ForumPostUnreadCountStore'),
    (t.Z = new S(l.Z, {
        CONNECTION_OPEN: h,
        THREAD_CREATE: p,
        MESSAGE_CREATE: m,
        FORUM_UNREADS: I,
        MESSAGE_ACK: T,
        REQUEST_FORUM_UNREADS: g
    }));
