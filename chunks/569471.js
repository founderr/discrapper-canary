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
let h = {},
    p = new d.ZP(),
    m = new Set();
function g(e) {
    h = l()(h)
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
        ((h[e.id] = {
            threadId: e.id,
            guildId: e.guild_id,
            flags: e.member.flags,
            muted: e.member.muted,
            muteConfig: e.member.muteConfig,
            joinTimestamp: new Date(e.member.joinTimestamp)
        }),
        I(e.id));
}
function I(e) {
    let t = h[e];
    p.clearTimer(e),
        !0 === t.muted
            ? ((m = new Set(m)).add(e),
              p.setTimer(e, t.muteConfig, () => {
                  (h[e].muted = !1), (m = new Set(m)).delete(e), T.emitChange();
              }) && ((h[e].muted = !1), (m = new Set(m)).delete(e)))
            : (m = new Set(m)).delete(e);
}
function S(e) {
    let { guildId: t, members: n } = e;
    null != t &&
        null != n &&
        n.forEach((e) => {
            (h[e.id] = {
                threadId: e.id,
                guildId: t,
                flags: e.flags,
                muted: e.muted,
                muteConfig: e.muteConfig,
                joinTimestamp: new Date(e.joinTimestamp)
            }),
                I(e.id);
        });
}
class b extends (r = u.ZP.Store) {
    hasJoined(e) {
        return e in h;
    }
    joinTimestamp(e) {
        var t;
        return null === (t = h[e]) || void 0 === t ? void 0 : t.joinTimestamp;
    }
    flags(e) {
        var t;
        return null === (t = h[e]) || void 0 === t ? void 0 : t.flags;
    }
    getInitialOverlayState() {
        return Object.values(h);
    }
    getMuteConfig(e) {
        var t;
        return null === (t = h[e]) || void 0 === t ? void 0 : t.muteConfig;
    }
    getMutedThreads() {
        return m;
    }
    isMuted(e) {
        return m.has(e);
    }
}
(s = 'JoinedThreadsStore'),
    (a = 'displayName') in (i = b)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s);
let T = new b(c.Z, {
    CONNECTION_OPEN: function (e) {
        p.reset(),
            (m = new Set()),
            (h = {}),
            e.guilds.forEach((e) => {
                E(e);
            });
    },
    OVERLAY_INITIALIZE: function (e) {
        let { joinedThreads: t } = e;
        h = l()(t)
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
    THREAD_LIST_SYNC: S,
    SEARCH_FINISH: S,
    MOD_VIEW_SEARCH_FINISH: S,
    LOAD_THREADS_SUCCESS: S,
    LOAD_ARCHIVED_THREADS_SUCCESS: S,
    THREAD_DELETE: function (e) {
        let { channel: t } = e;
        if (!(t.id in h)) return !1;
        (h = { ...h }), delete h[t.id];
    },
    THREAD_MEMBER_UPDATE: function (e) {
        if (_.default.getId() !== e.userId) return !1;
        (h[e.id] = {
            threadId: e.id,
            guildId: e.guildId,
            flags: e.flags,
            muted: e.muted,
            muteConfig: e.muteConfig,
            joinTimestamp: new Date(e.joinTimestamp)
        }),
            I(e.id);
    },
    THREAD_MEMBER_LOCAL_UPDATE: function (e) {
        let { id: t, userId: n, guildId: r, isJoining: i } = e;
        if (_.default.getId() !== n || null === r) return !1;
        i
            ? (h[t] = {
                  threadId: t,
                  guildId: r,
                  flags: 0,
                  muted: !0,
                  muteConfig: { end_time: void 0 },
                  joinTimestamp: new Date()
              })
            : delete h[t];
    },
    THREAD_MEMBERS_UPDATE: function (e) {
        var t, n;
        let r = !1;
        return (
            (null === (t = e.removedMemberIds) || void 0 === t ? void 0 : t.includes(_.default.getId())) && e.id in h && ((h = { ...h }), delete h[e.id], (r = !0)),
            null === (n = e.addedMembers) ||
                void 0 === n ||
                n.forEach((t) => {
                    t.userId === _.default.getId() &&
                        (((h = { ...h })[e.id] = {
                            threadId: e.id,
                            guildId: e.guildId,
                            flags: t.flags,
                            muted: t.muted,
                            muteConfig: t.muteConfig,
                            joinTimestamp: new Date(t.joinTimestamp)
                        }),
                        I(e.id),
                        (r = !0));
                }),
            r
        );
    }
});
t.Z = T;
