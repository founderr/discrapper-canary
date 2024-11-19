let r, i, a, s, o, l, u;
n.d(t, {
    C: function () {
        return Z;
    }
}),
    n(47120),
    n(724458);
var c,
    d,
    f,
    _,
    p = n(392711),
    h = n.n(p),
    m = n(442837),
    g = n(433517),
    E = n(570140),
    v = n(57132),
    b = n(703656),
    I = n(131704),
    T = n(823379),
    S = n(314897),
    y = n(592125),
    A = n(984933),
    N = n(430824),
    C = n(131951),
    R = n(914010),
    O = n(981631),
    D = n(176505);
let L = 'SelectedChannelStore',
    x = {},
    w = {},
    M = {},
    P = new Set();
function k(e) {
    return String(e);
}
function U() {
    !__OVERLAY__ &&
        g.K.set(L, {
            selectedChannelId: a,
            selectedVoiceChannelId: o,
            lastChannelFollowingDestination: s,
            lastConnectedTime: l,
            selectedChannelIds: x,
            mostRecentSelectedTextChannelIds: M,
            knownThreadIds: h()(x)
                .values()
                .concat(h().values(M))
                .filter(T.lm)
                .uniq()
                .filter((e) => {
                    let t = y.Z.getBasicChannel(e);
                    return P.has(e) || (null != t && I.Ec.has(t.type));
                })
                .value()
        });
}
function B(e) {
    if (null != e) {
        let t = A.ZP.getDefaultChannel(e);
        if (null != t) return t.id;
    }
}
function G(e, t) {
    if (null == e || null == t || M[e] === t) return !1;
    let n = y.Z.getChannel(t),
        r = null != n && (0, I.zi)(n.type),
        i = (null == n ? void 0 : n.getGuildId()) === e;
    return !!r && !!i && ((M[e] = t), !0);
}
function Z(e) {
    let t = y.Z.getMutableBasicGuildChannelsForGuild(e),
        n = h().find(t, (e) => e.type === O.d4z.GUILD_VOICE);
    return null == n ? void 0 : n.id;
}
function F() {
    let e = !1,
        t = N.Z.getGuilds();
    return (
        h().each(x, (t, n) => {
            (null == t || (!y.Z.hasChannel(t) && t !== a && !P.has(t) && !(0, D.ME)(t))) && (delete x[n], delete w[n], (e = !0));
        }),
        h().each(M, (t, n) => {
            (null == t || (!y.Z.hasChannel(t) && !P.has(t))) && (delete M[n], (e = !0));
        }),
        h().each(t, (e) => {
            let t = x[e.id];
            null == M[e.id] && G(e.id, t);
        }),
        null != l && Date.now() - l >= 300000 && ((o = null), (e = !0)),
        e
    );
}
function V(e, t) {
    if ((P.delete(e), null == t)) {
        let n = R.Z.getGuildId();
        x[k(n)] === e && (t = n);
    }
    let n = null != N.Z.getGuild(t) ? t : null,
        r = !1;
    o === e && ((o = null), (r = !0)), !(0, v.cn)() && (x[k(n)] === e && ((x[k(n)] = B(k(n))), R.Z.getGuildId() === n && (0, b.dL)(O.Z5c.CHANNEL(t, x[k(n)])), (r = !0)), null != n && M[n] === e && (delete M[n], (r = !0))), r && U();
}
function j(e) {
    let {
        channel: { id: t, guild_id: n }
    } = e;
    V(t, n);
}
class H extends (c = m.ZP.Store) {
    initialize() {
        if (!__OVERLAY__) {
            var e, t;
            let n =
                null !== (e = g.K.get(L)) && void 0 !== e
                    ? e
                    : {
                          selectedChannelId: a,
                          selectedVoiceChannelId: o,
                          lastChannelFollowingDestination: s,
                          lastConnectedTime: l,
                          selectedChannelIds: x,
                          mostRecentSelectedTextChannelIds: M
                      };
            null != n.knownThreadIds && (P = new Set(n.knownThreadIds)),
                (o = n.selectedVoiceChannelId),
                (s = n.lastChannelFollowingDestination),
                (l = n.lastConnectedTime),
                (M = null !== (t = n.mostRecentSelectedTextChannelIds) && void 0 !== t ? t : {}),
                null != n.selectedChannelIds &&
                    (x = {
                        ...n.selectedChannelIds,
                        null: null
                    });
        }
        this.mustEmitChanges((e) => 'CONNECTION_OPEN' !== e.type && 'VOICE_STATE_UPDATES' !== e.type), this.waitFor(N.Z, y.Z, R.Z, A.ZP, C.Z);
    }
    getChannelId(e) {
        var t, n;
        let r = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            i = k(e === O.ME ? null : null !== (t = null != e ? e : R.Z.getGuildId()) && void 0 !== t ? t : null);
        return r ? (null !== (n = x[i]) && void 0 !== n ? n : B(i)) : x[i];
    }
    getVoiceChannelId() {
        return C.Z.isSupported() ? o : null;
    }
    getMostRecentSelectedTextChannelId(e) {
        var t;
        return null == e ? null : null !== (t = M[e]) && void 0 !== t ? t : null;
    }
    getCurrentlySelectedChannelId(e) {
        return null != e ? x[e] : a;
    }
    getLastSelectedChannelId(e) {
        return null != e ? w[e] : i;
    }
    getLastSelectedChannels(e) {
        return w[e];
    }
    getLastChannelFollowingDestination() {
        return s;
    }
}
(_ = 'SelectedChannelStore'),
    (f = 'displayName') in (d = H)
        ? Object.defineProperty(d, f, {
              value: _,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (d[f] = _),
    (t.Z = new H(E.Z, {
        CONNECTION_OPEN: function (e) {
            (r = e.sessionId), null != o && null == y.Z.getChannel(o) && (o = null), F() && U();
        },
        OVERLAY_INITIALIZE: function (e) {
            (r = e.sessionId), (o = e.selectedVoiceChannelId), (x = {}), (w = {}), (a = e.selectedChannelId), (x[e.selectedGuildId] = e.selectedChannelId), G(e.selectedGuildId, a), F();
        },
        CONNECTION_CLOSED: function () {
            r = null;
        },
        CHANNEL_SELECT: function (e) {
            let { guildId: t, channelId: n } = e;
            if (void 0 === t) return !1;
            null == n && (n = B(t)), null != a && n !== a && (i = a), (a = n), G(t, n), x[k(t)] !== n && ((w[k(t)] = x[k(t)]), (x[k(t)] = a)), U();
        },
        CHANNEL_CREATE: function (e) {
            let { channel: t } = e;
            switch (t.type) {
                case O.d4z.GUILD_ANNOUNCEMENT:
                case O.d4z.GUILD_TEXT:
                    let n = t.guild_id;
                    if ((null != n && null == M[n] && (M[n] = t.id), null != n && null == x[n])) return (x[n] = B(n)), !0;
            }
            return !1;
        },
        CHANNEL_DELETE: j,
        CHANNEL_UPDATES: function (e) {
            let { channels: t } = e;
            for (let e of t) e.isScheduledForDeletion() && V(e.id, e.guild_id);
        },
        THREAD_DELETE: j,
        GUILD_CREATE: function (e) {
            let { guild: t } = e;
            if (null == x[t.id]) {
                let e = B(t.id);
                (x[t.id] = e), G(t.id, e), U();
            }
        },
        GUILD_DELETE: function (e) {
            let {
                guild: { id: t, unavailable: n }
            } = e;
            if ((o === x[t] && (o = null), n)) return !1;
            delete M[t], delete x[t], U();
        },
        VOICE_CHANNEL_SELECT: function (e) {
            let { channelId: t } = e;
            if (null == t) {
                let e = y.Z.getChannel(o),
                    t = null == e ? void 0 : e.guild_id;
                null != t && t !== R.Z.getGuildId() && x[t] === o && (x[t] = B(t));
            }
            (o = t), U();
        },
        VOICE_STATE_UPDATES: function (e) {
            let { voiceStates: t } = e;
            return t.reduce((e, t) => {
                var n, i, a;
                if (t.sessionId === r) {
                    clearInterval(u);
                    let e = null === (n = y.Z.getChannel(o)) || void 0 === n ? void 0 : n.getGuildId();
                    (t.guildId !== e && null == t.channelId) || (o = t.channelId),
                        (l = Date.now()),
                        null != o &&
                            (u = setInterval(() => {
                                (l = Date.now()), U();
                            }, 60000)),
                        U();
                } else {
                    if (t.userId !== S.default.getId()) return e;
                    clearInterval(u), (u = void 0), (l = 0);
                    let n = null === (i = y.Z.getChannel(o)) || void 0 === i ? void 0 : i.getGuildId(),
                        r = null === (a = y.Z.getChannel(t.channelId)) || void 0 === a ? void 0 : a.getGuildId();
                    ((null != n && r === n) || o === t.channelId) && (o = null), U();
                }
                return !0;
            }, !1);
        },
        CHANNEL_FOLLOWER_CREATED: function (e) {
            let { channelId: t, guildId: n } = e;
            (null == s || t !== s.channelId) &&
                ((s = {
                    channelId: t,
                    guildId: n
                }),
                U());
        },
        LOGOUT: function () {
            (x = {}), (a = null), (i = void 0), (M = {}), (s = {}), (o = null), g.K.remove(L);
        }
    }));
