var i,
    a = r(47120);
var s = r(789020);
var o = r(392711),
    l = r.n(o),
    u = r(442837),
    c = r(570140),
    d = r(798140),
    f = r(131704),
    _ = r(314897);
function h(e, n, r) {
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
let p = {},
    m = new d.ZP(),
    g = new Set();
function E(e) {
    p = l()(p)
        .reject((n) => n.guildId === e)
        .keyBy('threadId')
        .value();
}
function v(e) {
    var n;
    null === (n = e.threads) || void 0 === n || n.forEach(I);
}
function I(e) {
    f.AW.has(e.type) &&
        null != e.member &&
        ((p[e.id] = {
            threadId: e.id,
            guildId: e.guild_id,
            flags: e.member.flags,
            muted: e.member.muted,
            muteConfig: e.member.muteConfig,
            joinTimestamp: new Date(e.member.joinTimestamp)
        }),
        T(e.id));
}
function T(e) {
    let n = p[e];
    m.clearTimer(e),
        !0 === n.muted
            ? ((g = new Set(g)).add(e),
              m.setTimer(e, n.muteConfig, () => {
                  (p[e].muted = !1), (g = new Set(g)).delete(e), w.emitChange();
              }) && ((p[e].muted = !1), (g = new Set(g)).delete(e)))
            : (g = new Set(g)).delete(e);
}
function b(e) {
    m.reset(),
        (g = new Set()),
        (p = {}),
        e.guilds.forEach((e) => {
            v(e);
        });
}
function y(e) {
    let { joinedThreads: n } = e;
    p = l()(n)
        .map((e) => ({
            ...e,
            joinTimestamp: new Date(e.joinTimestamp)
        }))
        .keyBy('threadId')
        .value();
}
function S(e) {
    let { guild: n } = e;
    E(n.id), v(n);
}
function A(e) {
    let { guild: n } = e;
    E(n.id);
}
function N(e) {
    let { channel: n } = e;
    I(n);
}
function C(e) {
    let { guildId: n, members: r } = e;
    null != n &&
        null != r &&
        r.forEach((e) => {
            (p[e.id] = {
                threadId: e.id,
                guildId: n,
                flags: e.flags,
                muted: e.muted,
                muteConfig: e.muteConfig,
                joinTimestamp: new Date(e.joinTimestamp)
            }),
                T(e.id);
        });
}
function R(e) {
    let { channel: n } = e;
    if (!(n.id in p)) return !1;
    (p = { ...p }), delete p[n.id];
}
function O(e) {
    if (_.default.getId() !== e.userId) return !1;
    (p[e.id] = {
        threadId: e.id,
        guildId: e.guildId,
        flags: e.flags,
        muted: e.muted,
        muteConfig: e.muteConfig,
        joinTimestamp: new Date(e.joinTimestamp)
    }),
        T(e.id);
}
function D(e) {
    let { id: n, userId: r, guildId: i, isJoining: a } = e;
    if (_.default.getId() !== r || null === i) return !1;
    a
        ? (p[n] = {
              threadId: n,
              guildId: i,
              flags: 0,
              muted: !0,
              muteConfig: { end_time: void 0 },
              joinTimestamp: new Date()
          })
        : delete p[n];
}
function L(e) {
    var n, r;
    let i = !1;
    return (
        (null === (n = e.removedMemberIds) || void 0 === n ? void 0 : n.includes(_.default.getId())) && e.id in p && ((p = { ...p }), delete p[e.id], (i = !0)),
        null === (r = e.addedMembers) ||
            void 0 === r ||
            r.forEach((n) => {
                n.userId === _.default.getId() &&
                    (((p = { ...p })[e.id] = {
                        threadId: e.id,
                        guildId: e.guildId,
                        flags: n.flags,
                        muted: n.muted,
                        muteConfig: n.muteConfig,
                        joinTimestamp: new Date(n.joinTimestamp)
                    }),
                    T(e.id),
                    (i = !0));
            }),
        i
    );
}
class x extends (i = u.ZP.Store) {
    hasJoined(e) {
        return e in p;
    }
    joinTimestamp(e) {
        var n;
        return null === (n = p[e]) || void 0 === n ? void 0 : n.joinTimestamp;
    }
    flags(e) {
        var n;
        return null === (n = p[e]) || void 0 === n ? void 0 : n.flags;
    }
    getInitialOverlayState() {
        return Object.values(p);
    }
    getMuteConfig(e) {
        var n;
        return null === (n = p[e]) || void 0 === n ? void 0 : n.muteConfig;
    }
    getMutedThreads() {
        return g;
    }
    isMuted(e) {
        return g.has(e);
    }
}
h(x, 'displayName', 'JoinedThreadsStore');
let w = new x(c.Z, {
    CONNECTION_OPEN: b,
    OVERLAY_INITIALIZE: y,
    GUILD_CREATE: S,
    GUILD_DELETE: A,
    THREAD_CREATE: N,
    THREAD_LIST_SYNC: C,
    SEARCH_FINISH: C,
    MOD_VIEW_SEARCH_FINISH: C,
    LOAD_THREADS_SUCCESS: C,
    LOAD_ARCHIVED_THREADS_SUCCESS: C,
    THREAD_DELETE: R,
    THREAD_MEMBER_UPDATE: O,
    THREAD_MEMBER_LOCAL_UPDATE: D,
    THREAD_MEMBERS_UPDATE: L
});
n.Z = w;
