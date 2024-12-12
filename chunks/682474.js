var i,
    a = r(442837),
    s = r(570140),
    o = r(786761),
    l = r(592125),
    u = r(594174),
    c = r(823379),
    d = r(709054);
function f(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let _ = {};
function h(e) {
    var n;
    let r = l.Z.getChannel(null == e ? void 0 : e.channel_id);
    if (null == r || !r.isForumPost()) return !1;
    let i = _[r.id];
    return d.default.compare(null == e ? void 0 : e.id, null == i ? void 0 : null === (n = i.message) || void 0 === n ? void 0 : n.id) > -1;
}
function p(e, n) {
    let r = null == n ? null : (0, o.e5)(n);
    return (
        (_[e] = {
            loaded: !0,
            message: r
        }),
        !0
    );
}
function m(e, n) {
    let r = E(e),
        i = v(e);
    return (
        null != r &&
        null != i &&
        ((_[e] = {
            ...r,
            message: (0, o.wi)(i, n)
        }),
        !0)
    );
}
function g(e, n) {
    let r = v(e);
    return (null == r ? void 0 : r.id) === n && (delete _[e], !0);
}
function E(e) {
    return _[e];
}
function v(e) {
    var n;
    return null === (n = E(e)) || void 0 === n ? void 0 : n.message;
}
function I() {
    _ = {};
}
function T(e) {
    let { threads: n } = e;
    for (let e in n) p(e, n[e].most_recent_message);
}
function b(e) {
    if (e.isPushNotification || !h(e.message)) return !1;
    e.message.channel_id === d.default.castMessageIdAsChannelId(e.message.id) ? p(e.message.channel_id, null) : p(e.message.channel_id, e.message);
}
function y(e) {
    if (!h(e.message) || e.message.channel_id === e.message.id) return !1;
    m(e.message.channel_id, e.message);
}
function S(e) {
    return g(e.channelId, e.id);
}
function A(e) {
    let { threads: n, mostRecentMessages: r } = e;
    n.forEach((e) => p(e.id, null)),
        null == r ||
            r.filter(c.lm).forEach((e) => {
                p(e.channel_id, e);
            });
}
class N extends (i = a.ZP.Store) {
    initialize() {
        this.waitFor(l.Z, u.default);
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
f(N, 'displayName', 'ForumPostRecentMessageStore'),
    new N(s.Z, {
        CONNECTION_OPEN: I,
        MESSAGE_CREATE: b,
        MESSAGE_UPDATE: y,
        MESSAGE_DELETE: S,
        LOAD_FORUM_POSTS: T,
        LOAD_ARCHIVED_THREADS_SUCCESS: A,
        LOAD_THREADS_SUCCESS: A
    });
