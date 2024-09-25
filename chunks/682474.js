var r,
    i = n(442837),
    a = n(570140),
    o = n(786761),
    s = n(592125),
    l = n(594174),
    u = n(823379),
    c = n(709054);
function d(e, t, n) {
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
let _ = {};
function E(e) {
    var t;
    let n = s.Z.getChannel(null == e ? void 0 : e.channel_id);
    if (null == n || !n.isForumPost()) return !1;
    let r = _[n.id];
    return c.default.compare(null == e ? void 0 : e.id, null == r ? void 0 : null === (t = r.message) || void 0 === t ? void 0 : t.id) > -1;
}
function f(e, t) {
    let n = null == t ? null : (0, o.e5)(t);
    return (
        (_[e] = {
            loaded: !0,
            message: n
        }),
        !0
    );
}
function h(e, t) {
    let n = m(e),
        r = I(e);
    return (
        null != n &&
        null != r &&
        ((_[e] = {
            ...n,
            message: (0, o.wi)(r, t)
        }),
        !0)
    );
}
function p(e, t) {
    let n = I(e);
    return (null == n ? void 0 : n.id) === t && (delete _[e], !0);
}
function m(e) {
    return _[e];
}
function I(e) {
    var t;
    return null === (t = m(e)) || void 0 === t ? void 0 : t.message;
}
function T() {
    _ = {};
}
function g(e) {
    let { threads: t } = e;
    for (let e in t) f(e, t[e].most_recent_message);
}
function S(e) {
    if (e.isPushNotification || !E(e.message)) return !1;
    e.message.channel_id === c.default.castMessageIdAsChannelId(e.message.id) ? f(e.message.channel_id, null) : f(e.message.channel_id, e.message);
}
function A(e) {
    if (!E(e.message) || e.message.channel_id === e.message.id) return !1;
    h(e.message.channel_id, e.message);
}
function v(e) {
    return p(e.channelId, e.id);
}
function N(e) {
    let { threads: t, mostRecentMessages: n } = e;
    t.forEach((e) => f(e.id, null)),
        null == n ||
            n.filter(u.lm).forEach((e) => {
                f(e.channel_id, e);
            });
}
class O extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(s.Z, l.default);
    }
    getMessageState(e) {
        return (
            !(e in _) &&
                (_[e] = {
                    loaded: !1,
                    message: null
                }),
            _[e]
        );
    }
}
d(O, 'displayName', 'ForumPostRecentMessageStore'),
    new O(a.Z, {
        CONNECTION_OPEN: T,
        MESSAGE_CREATE: S,
        MESSAGE_UPDATE: A,
        MESSAGE_DELETE: v,
        LOAD_FORUM_POSTS: g,
        LOAD_ARCHIVED_THREADS_SUCCESS: N,
        LOAD_THREADS_SUCCESS: N
    });
