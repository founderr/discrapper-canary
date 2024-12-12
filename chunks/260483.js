var i,
    a = r(47120);
var s = r(392711),
    o = r.n(s),
    l = r(442837),
    u = r(570140),
    c = r(131704),
    d = r(592125);
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
    _ = o().omitBy(_, (n) => n.guildId === e);
}
function p(e) {
    _ = o().omitBy(_, (n) => n.parentId === e);
}
function m(e) {
    var n;
    null === (n = e.threads) || void 0 === n || n.forEach(E);
}
function g(e) {
    if (!(e.id in _)) {
        var n, r;
        _[e.id] = {
            guildId: e.guild_id,
            parentId: e.parent_id,
            memberCount: null !== (n = e.memberCount) && void 0 !== n ? n : 0,
            memberIdsPreview: null !== (r = e.memberIdsPreview) && void 0 !== r ? r : []
        };
    }
    return _[e.id];
}
function E(e) {
    if (!c.AW.has(e.type)) return !1;
    let n = g(e);
    null != e.memberCount && (n.memberCount = e.memberCount), null != e.memberIdsPreview && (n.memberIdsPreview = e.memberIdsPreview);
}
function v(e) {
    (_ = {}), e.guilds.forEach(m);
}
function I(e) {
    let { threadMembers: n } = e;
    _ = { ...n };
}
function T(e) {
    let { guild: n } = e;
    m(n);
}
function b(e) {
    let { guild: n } = e;
    h(n.id);
}
function y(e) {
    let { channel: n } = e;
    return E(n);
}
function S(e) {
    let { threads: n } = e;
    n.forEach(E);
}
function A(e) {
    let { threads: n } = e;
    n.forEach(D);
}
function N(e) {
    let { channel: n } = e;
    p(n.id);
}
function C(e) {
    let { channel: n } = e;
    delete _[n.id];
}
function R(e) {
    let n = !1;
    for (let r of e.messages) n = D(r.thread) || n;
    return n;
}
function O(e) {
    let n = !1;
    for (let r of e.messages) for (let e of r) n = D(e.thread) || n;
    return (
        e.threads.forEach((e) => {
            n = D(e) || n;
        }),
        n
    );
}
function D(e) {
    if (null != e && !(e.id in _)) {
        let n = d.Z.getChannel(e.id);
        if (null != n) return E(n), !0;
    }
    return !1;
}
function L(e) {
    let n = _[e.id];
    if (null == n) return !1;
    null != e.memberIdsPreview && (n.memberIdsPreview = e.memberIdsPreview), (n.memberCount = e.memberCount);
}
class x extends (i = l.ZP.Store) {
    initialize() {
        this.waitFor(d.Z);
    }
    getMemberCount(e) {
        var n, r;
        return null !== (r = null === (n = _[e]) || void 0 === n ? void 0 : n.memberCount) && void 0 !== r ? r : null;
    }
    getMemberIdsPreview(e) {
        var n, r;
        return null !== (r = null === (n = _[e]) || void 0 === n ? void 0 : n.memberIdsPreview) && void 0 !== r ? r : null;
    }
    getInitialOverlayState() {
        return _;
    }
}
f(x, 'displayName', 'ThreadMembersStore'),
    (n.Z = new x(u.Z, {
        CONNECTION_OPEN: v,
        OVERLAY_INITIALIZE: I,
        GUILD_CREATE: T,
        GUILD_DELETE: b,
        CHANNEL_DELETE: N,
        THREAD_CREATE: y,
        THREAD_UPDATE: y,
        THREAD_LIST_SYNC: S,
        THREAD_MEMBERS_UPDATE: L,
        SEARCH_FINISH: O,
        MOD_VIEW_SEARCH_FINISH: O,
        LOAD_THREADS_SUCCESS: A,
        LOAD_ARCHIVED_THREADS_SUCCESS: A,
        THREAD_DELETE: C,
        LOAD_MESSAGES_SUCCESS: R
    }));
