var r,
    i = n(47120);
var a = n(392711),
    o = n.n(a),
    s = n(442837),
    l = n(570140),
    u = n(131704),
    c = n(592125);
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
    _ = o().omitBy(_, (t) => t.guildId === e);
}
function f(e) {
    _ = o().omitBy(_, (t) => t.parentId === e);
}
function h(e) {
    var t;
    null === (t = e.threads) || void 0 === t || t.forEach(m);
}
function p(e) {
    if (!(e.id in _)) {
        var t, n;
        _[e.id] = {
            guildId: e.guild_id,
            parentId: e.parent_id,
            memberCount: null !== (t = e.memberCount) && void 0 !== t ? t : 0,
            memberIdsPreview: null !== (n = e.memberIdsPreview) && void 0 !== n ? n : []
        };
    }
    return _[e.id];
}
function m(e) {
    if (!u.AW.has(e.type)) return !1;
    let t = p(e);
    null != e.memberCount && (t.memberCount = e.memberCount), null != e.memberIdsPreview && (t.memberIdsPreview = e.memberIdsPreview);
}
function I(e) {
    (_ = {}), e.guilds.forEach(h);
}
function T(e) {
    let { threadMembers: t } = e;
    _ = { ...t };
}
function g(e) {
    let { guild: t } = e;
    h(t);
}
function S(e) {
    let { guild: t } = e;
    E(t.id);
}
function A(e) {
    let { channel: t } = e;
    return m(t);
}
function v(e) {
    let { threads: t } = e;
    t.forEach(m);
}
function N(e) {
    let { threads: t } = e;
    t.forEach(L);
}
function O(e) {
    let { channel: t } = e;
    f(t.id);
}
function R(e) {
    let { channel: t } = e;
    delete _[t.id];
}
function C(e) {
    let t = !1;
    for (let n of e.messages) t = L(n.thread) || t;
    return t;
}
function y(e) {
    let t = !1;
    for (let n of e.messages) for (let e of n) t = L(e.thread) || t;
    return (
        e.threads.forEach((e) => {
            t = L(e) || t;
        }),
        t
    );
}
function L(e) {
    if (null != e && !(e.id in _)) {
        let t = c.Z.getChannel(e.id);
        if (null != t) return m(t), !0;
    }
    return !1;
}
function b(e) {
    let t = _[e.id];
    if (null == t) return !1;
    null != e.memberIdsPreview && (t.memberIdsPreview = e.memberIdsPreview), (t.memberCount = e.memberCount);
}
class D extends (r = s.ZP.Store) {
    initialize() {
        this.waitFor(c.Z);
    }
    getMemberCount(e) {
        var t, n;
        return null !== (n = null === (t = _[e]) || void 0 === t ? void 0 : t.memberCount) && void 0 !== n ? n : null;
    }
    getMemberIdsPreview(e) {
        var t, n;
        return null !== (n = null === (t = _[e]) || void 0 === t ? void 0 : t.memberIdsPreview) && void 0 !== n ? n : null;
    }
    getInitialOverlayState() {
        return _;
    }
}
d(D, 'displayName', 'ThreadMembersStore'),
    (t.Z = new D(l.Z, {
        CONNECTION_OPEN: I,
        OVERLAY_INITIALIZE: T,
        GUILD_CREATE: g,
        GUILD_DELETE: S,
        CHANNEL_DELETE: O,
        THREAD_CREATE: A,
        THREAD_UPDATE: A,
        THREAD_LIST_SYNC: v,
        THREAD_MEMBERS_UPDATE: b,
        SEARCH_FINISH: y,
        MOD_VIEW_SEARCH_FINISH: y,
        LOAD_THREADS_SUCCESS: N,
        LOAD_ARCHIVED_THREADS_SUCCESS: N,
        THREAD_DELETE: R,
        LOAD_MESSAGES_SUCCESS: C
    }));
