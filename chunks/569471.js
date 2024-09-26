var r,
    i = n(47120);
var a = n(789020);
var o = n(392711),
    s = n.n(o),
    l = n(442837),
    u = n(570140),
    c = n(798140),
    d = n(131704),
    _ = n(314897);
function E(e, t, n) {
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
let f = {},
    h = new c.ZP(),
    p = new Set();
function m(e) {
    f = s()(f)
        .reject((t) => t.guildId === e)
        .keyBy('threadId')
        .value();
}
function I(e) {
    var t;
    null === (t = e.threads) || void 0 === t || t.forEach(T);
}
function T(e) {
    d.AW.has(e.type) &&
        null != e.member &&
        ((f[e.id] = {
            threadId: e.id,
            guildId: e.guild_id,
            flags: e.member.flags,
            muted: e.member.muted,
            muteConfig: e.member.muteConfig,
            joinTimestamp: new Date(e.member.joinTimestamp)
        }),
        g(e.id));
}
function g(e) {
    let t = f[e];
    h.clearTimer(e),
        !0 === t.muted
            ? ((p = new Set(p)).add(e),
              h.setTimer(e, t.muteConfig, () => {
                  (f[e].muted = !1), (p = new Set(p)).delete(e), M.emitChange();
              }) && ((f[e].muted = !1), (p = new Set(p)).delete(e)))
            : (p = new Set(p)).delete(e);
}
function S(e) {
    h.reset(),
        (p = new Set()),
        (f = {}),
        e.guilds.forEach((e) => {
            I(e);
        });
}
function A(e) {
    let { joinedThreads: t } = e;
    f = s()(t)
        .map((e) => ({
            ...e,
            joinTimestamp: new Date(e.joinTimestamp)
        }))
        .keyBy('threadId')
        .value();
}
function v(e) {
    let { guild: t } = e;
    m(t.id), I(t);
}
function N(e) {
    let { guild: t } = e;
    m(t.id);
}
function O(e) {
    let { channel: t } = e;
    T(t);
}
function R(e) {
    let { guildId: t, members: n } = e;
    null != t &&
        null != n &&
        n.forEach((e) => {
            (f[e.id] = {
                threadId: e.id,
                guildId: t,
                flags: e.flags,
                muted: e.muted,
                muteConfig: e.muteConfig,
                joinTimestamp: new Date(e.joinTimestamp)
            }),
                g(e.id);
        });
}
function C(e) {
    let { channel: t } = e;
    if (!(t.id in f)) return !1;
    (f = { ...f }), delete f[t.id];
}
function y(e) {
    if (_.default.getId() !== e.userId) return !1;
    (f[e.id] = {
        threadId: e.id,
        guildId: e.guildId,
        flags: e.flags,
        muted: e.muted,
        muteConfig: e.muteConfig,
        joinTimestamp: new Date(e.joinTimestamp)
    }),
        g(e.id);
}
function L(e) {
    let { id: t, userId: n, guildId: r, isJoining: i } = e;
    if (_.default.getId() !== n || null === r) return !1;
    i
        ? (f[t] = {
              threadId: t,
              guildId: r,
              flags: 0,
              muted: !0,
              muteConfig: { end_time: void 0 },
              joinTimestamp: new Date()
          })
        : delete f[t];
}
function b(e) {
    var t, n;
    let r = !1;
    return (
        (null === (t = e.removedMemberIds) || void 0 === t ? void 0 : t.includes(_.default.getId())) && e.id in f && ((f = { ...f }), delete f[e.id], (r = !0)),
        null === (n = e.addedMembers) ||
            void 0 === n ||
            n.forEach((t) => {
                t.userId === _.default.getId() &&
                    (((f = { ...f })[e.id] = {
                        threadId: e.id,
                        guildId: e.guildId,
                        flags: t.flags,
                        muted: t.muted,
                        muteConfig: t.muteConfig,
                        joinTimestamp: new Date(t.joinTimestamp)
                    }),
                    g(e.id),
                    (r = !0));
            }),
        r
    );
}
class D extends (r = l.ZP.Store) {
    hasJoined(e) {
        return e in f;
    }
    joinTimestamp(e) {
        var t;
        return null === (t = f[e]) || void 0 === t ? void 0 : t.joinTimestamp;
    }
    flags(e) {
        var t;
        return null === (t = f[e]) || void 0 === t ? void 0 : t.flags;
    }
    getInitialOverlayState() {
        return Object.values(f);
    }
    getMuteConfig(e) {
        var t;
        return null === (t = f[e]) || void 0 === t ? void 0 : t.muteConfig;
    }
    getMutedThreads() {
        return p;
    }
    isMuted(e) {
        return p.has(e);
    }
}
E(D, 'displayName', 'JoinedThreadsStore');
let M = new D(u.Z, {
    CONNECTION_OPEN: S,
    OVERLAY_INITIALIZE: A,
    GUILD_CREATE: v,
    GUILD_DELETE: N,
    THREAD_CREATE: O,
    THREAD_LIST_SYNC: R,
    SEARCH_FINISH: R,
    MOD_VIEW_SEARCH_FINISH: R,
    LOAD_THREADS_SUCCESS: R,
    LOAD_ARCHIVED_THREADS_SUCCESS: R,
    THREAD_DELETE: C,
    THREAD_MEMBER_UPDATE: y,
    THREAD_MEMBER_LOCAL_UPDATE: L,
    THREAD_MEMBERS_UPDATE: b
});
t.Z = M;
