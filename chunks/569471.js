n(47120), n(789020);
var r,
    i,
    a,
    s,
    o = n(392711),
    l = n.n(o),
    u = n(442837),
    c = n(570140),
    d = n(798140),
    f = n(131704),
    _ = n(314897);
let p = {},
    h = new d.ZP(),
    m = new Set();
function g(e) {
    p = l()(p)
        .reject((t) => t.guildId === e)
        .keyBy('threadId')
        .value();
}
function E(e) {
    var t;
    null === (t = e.threads) || void 0 === t || t.forEach(v);
}
function v(e) {
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
        b(e.id));
}
function b(e) {
    let t = p[e];
    h.clearTimer(e),
        !0 === t.muted
            ? ((m = new Set(m)).add(e),
              h.setTimer(e, t.muteConfig, () => {
                  (p[e].muted = !1), (m = new Set(m)).delete(e), T.emitChange();
              }) && ((p[e].muted = !1), (m = new Set(m)).delete(e)))
            : (m = new Set(m)).delete(e);
}
function I(e) {
    let { guildId: t, members: n } = e;
    null != t &&
        null != n &&
        n.forEach((e) => {
            (p[e.id] = {
                threadId: e.id,
                guildId: t,
                flags: e.flags,
                muted: e.muted,
                muteConfig: e.muteConfig,
                joinTimestamp: new Date(e.joinTimestamp)
            }),
                b(e.id);
        });
}
class S extends (r = u.ZP.Store) {
    hasJoined(e) {
        return e in p;
    }
    joinTimestamp(e) {
        var t;
        return null === (t = p[e]) || void 0 === t ? void 0 : t.joinTimestamp;
    }
    flags(e) {
        var t;
        return null === (t = p[e]) || void 0 === t ? void 0 : t.flags;
    }
    getInitialOverlayState() {
        return Object.values(p);
    }
    getMuteConfig(e) {
        var t;
        return null === (t = p[e]) || void 0 === t ? void 0 : t.muteConfig;
    }
    getMutedThreads() {
        return m;
    }
    isMuted(e) {
        return m.has(e);
    }
}
(s = 'JoinedThreadsStore'),
    (a = 'displayName') in (i = S)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s);
let T = new S(c.Z, {
    CONNECTION_OPEN: function (e) {
        h.reset(),
            (m = new Set()),
            (p = {}),
            e.guilds.forEach((e) => {
                E(e);
            });
    },
    OVERLAY_INITIALIZE: function (e) {
        let { joinedThreads: t } = e;
        p = l()(t)
            .map((e) => ({
                ...e,
                joinTimestamp: new Date(e.joinTimestamp)
            }))
            .keyBy('threadId')
            .value();
    },
    GUILD_CREATE: function (e) {
        let { guild: t } = e;
        g(t.id), E(t);
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        g(t.id);
    },
    THREAD_CREATE: function (e) {
        let { channel: t } = e;
        v(t);
    },
    THREAD_LIST_SYNC: I,
    SEARCH_FINISH: I,
    MOD_VIEW_SEARCH_FINISH: I,
    LOAD_THREADS_SUCCESS: I,
    LOAD_ARCHIVED_THREADS_SUCCESS: I,
    THREAD_DELETE: function (e) {
        let { channel: t } = e;
        if (!(t.id in p)) return !1;
        (p = { ...p }), delete p[t.id];
    },
    THREAD_MEMBER_UPDATE: function (e) {
        if (_.default.getId() !== e.userId) return !1;
        (p[e.id] = {
            threadId: e.id,
            guildId: e.guildId,
            flags: e.flags,
            muted: e.muted,
            muteConfig: e.muteConfig,
            joinTimestamp: new Date(e.joinTimestamp)
        }),
            b(e.id);
    },
    THREAD_MEMBER_LOCAL_UPDATE: function (e) {
        let { id: t, userId: n, guildId: r, isJoining: i } = e;
        if (_.default.getId() !== n || null === r) return !1;
        i
            ? (p[t] = {
                  threadId: t,
                  guildId: r,
                  flags: 0,
                  muted: !0,
                  muteConfig: { end_time: void 0 },
                  joinTimestamp: new Date()
              })
            : delete p[t];
    },
    THREAD_MEMBERS_UPDATE: function (e) {
        var t, n;
        let r = !1;
        return (
            (null === (t = e.removedMemberIds) || void 0 === t ? void 0 : t.includes(_.default.getId())) && e.id in p && ((p = { ...p }), delete p[e.id], (r = !0)),
            null === (n = e.addedMembers) ||
                void 0 === n ||
                n.forEach((t) => {
                    t.userId === _.default.getId() &&
                        (((p = { ...p })[e.id] = {
                            threadId: e.id,
                            guildId: e.guildId,
                            flags: t.flags,
                            muted: t.muted,
                            muteConfig: t.muteConfig,
                            joinTimestamp: new Date(t.joinTimestamp)
                        }),
                        b(e.id),
                        (r = !0));
                }),
            r
        );
    }
});
t.Z = T;
