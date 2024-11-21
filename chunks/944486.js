let r, i, a, s, o, l, u;
n.d(t, {
    C: function () {
        return B;
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
    v = n(703656),
    b = n(131704),
    I = n(823379),
    T = n(314897),
    S = n(592125),
    y = n(984933),
    A = n(430824),
    N = n(131951),
    C = n(914010),
    R = n(981631),
    O = n(176505);
let D = 'SelectedChannelStore',
    L = {},
    x = {},
    w = {},
    M = new Set();
function P(e) {
    return String(e);
}
function k() {
    !__OVERLAY__ &&
        g.K.set(D, {
            selectedChannelId: a,
            selectedVoiceChannelId: o,
            lastChannelFollowingDestination: s,
            lastConnectedTime: l,
            selectedChannelIds: L,
            mostRecentSelectedTextChannelIds: w,
            knownThreadIds: h()(L)
                .values()
                .concat(h().values(w))
                .filter(I.lm)
                .uniq()
                .filter((e) => {
                    let t = S.Z.getBasicChannel(e);
                    return M.has(e) || (null != t && b.Ec.has(t.type));
                })
                .value()
        });
}
function U(e) {
    if (null != e) {
        let t = y.ZP.getDefaultChannel(e);
        if (null != t) return t.id;
    }
}
function G(e, t) {
    if (null == e || null == t || w[e] === t) return !1;
    let n = S.Z.getChannel(t),
        r = null != n && (0, b.zi)(n.type),
        i = (null == n ? void 0 : n.getGuildId()) === e;
    return !!r && !!i && ((w[e] = t), !0);
}
function B(e) {
    let t = S.Z.getMutableBasicGuildChannelsForGuild(e),
        n = h().find(t, (e) => e.type === R.d4z.GUILD_VOICE);
    return null == n ? void 0 : n.id;
}
function Z() {
    let e = !1,
        t = A.Z.getGuilds();
    return (
        h().each(L, (t, n) => {
            (null == t || (!S.Z.hasChannel(t) && t !== a && !M.has(t) && !(0, O.ME)(t))) && (delete L[n], delete x[n], (e = !0));
        }),
        h().each(w, (t, n) => {
            (null == t || (!S.Z.hasChannel(t) && !M.has(t))) && (delete w[n], (e = !0));
        }),
        h().each(t, (e) => {
            let t = L[e.id];
            null == w[e.id] && G(e.id, t);
        }),
        null != l && Date.now() - l >= 300000 && ((o = null), (e = !0)),
        e
    );
}
function F(e, t) {
    if ((M.delete(e), null == t)) {
        let n = C.Z.getGuildId();
        L[P(n)] === e && (t = n);
    }
    let n = null != A.Z.getGuild(t) ? t : null,
        r = !1;
    o === e && ((o = null), (r = !0));
    L[P(n)] === e && ((L[P(n)] = U(P(n))), C.Z.getGuildId() === n && (0, v.dL)(R.Z5c.CHANNEL(t, L[P(n)])), (r = !0)), null != n && w[n] === e && (delete w[n], (r = !0)), r && k();
}
function V(e) {
    let {
        channel: { id: t, guild_id: n }
    } = e;
    F(t, n);
}
class j extends (c = m.ZP.Store) {
    initialize() {
        if (!__OVERLAY__) {
            var e, t;
            let n =
                null !== (e = g.K.get(D)) && void 0 !== e
                    ? e
                    : {
                          selectedChannelId: a,
                          selectedVoiceChannelId: o,
                          lastChannelFollowingDestination: s,
                          lastConnectedTime: l,
                          selectedChannelIds: L,
                          mostRecentSelectedTextChannelIds: w
                      };
            null != n.knownThreadIds && (M = new Set(n.knownThreadIds)),
                (o = n.selectedVoiceChannelId),
                (s = n.lastChannelFollowingDestination),
                (l = n.lastConnectedTime),
                (w = null !== (t = n.mostRecentSelectedTextChannelIds) && void 0 !== t ? t : {}),
                null != n.selectedChannelIds &&
                    (L = {
                        ...n.selectedChannelIds,
                        null: null
                    });
        }
        this.mustEmitChanges((e) => 'CONNECTION_OPEN' !== e.type && 'VOICE_STATE_UPDATES' !== e.type), this.waitFor(A.Z, S.Z, C.Z, y.ZP, N.Z);
    }
    getChannelId(e) {
        var t, n;
        let r = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            i = P(e === R.ME ? null : null !== (t = null != e ? e : C.Z.getGuildId()) && void 0 !== t ? t : null);
        return r ? (null !== (n = L[i]) && void 0 !== n ? n : U(i)) : L[i];
    }
    getVoiceChannelId() {
        return N.Z.isSupported() ? o : null;
    }
    getMostRecentSelectedTextChannelId(e) {
        var t;
        return null == e ? null : null !== (t = w[e]) && void 0 !== t ? t : null;
    }
    getCurrentlySelectedChannelId(e) {
        return null != e ? L[e] : a;
    }
    getLastSelectedChannelId(e) {
        return null != e ? x[e] : i;
    }
    getLastSelectedChannels(e) {
        return x[e];
    }
    getLastChannelFollowingDestination() {
        return s;
    }
}
(_ = 'SelectedChannelStore'),
    (f = 'displayName') in (d = j)
        ? Object.defineProperty(d, f, {
              value: _,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (d[f] = _),
    (t.Z = new j(E.Z, {
        CONNECTION_OPEN: function (e) {
            (r = e.sessionId), null != o && null == S.Z.getChannel(o) && (o = null), Z() && k();
        },
        OVERLAY_INITIALIZE: function (e) {
            (r = e.sessionId), (o = e.selectedVoiceChannelId), (L = {}), (x = {}), (a = e.selectedChannelId), (L[e.selectedGuildId] = e.selectedChannelId), G(e.selectedGuildId, a), Z();
        },
        CONNECTION_CLOSED: function () {
            r = null;
        },
        CHANNEL_SELECT: function (e) {
            let { guildId: t, channelId: n } = e;
            if (void 0 === t) return !1;
            null == n && (n = U(t)), null != a && n !== a && (i = a), (a = n), G(t, n), L[P(t)] !== n && ((x[P(t)] = L[P(t)]), (L[P(t)] = a)), k();
        },
        CHANNEL_CREATE: function (e) {
            let { channel: t } = e;
            switch (t.type) {
                case R.d4z.GUILD_ANNOUNCEMENT:
                case R.d4z.GUILD_TEXT:
                    let n = t.guild_id;
                    if ((null != n && null == w[n] && (w[n] = t.id), null != n && null == L[n])) return (L[n] = U(n)), !0;
            }
            return !1;
        },
        CHANNEL_DELETE: V,
        CHANNEL_UPDATES: function (e) {
            let { channels: t } = e;
            for (let e of t) e.isScheduledForDeletion() && F(e.id, e.guild_id);
        },
        THREAD_DELETE: V,
        GUILD_CREATE: function (e) {
            let { guild: t } = e;
            if (null == L[t.id]) {
                let e = U(t.id);
                (L[t.id] = e), G(t.id, e), k();
            }
        },
        GUILD_DELETE: function (e) {
            let {
                guild: { id: t, unavailable: n }
            } = e;
            if ((o === L[t] && (o = null), n)) return !1;
            delete w[t], delete L[t], k();
        },
        VOICE_CHANNEL_SELECT: function (e) {
            let { channelId: t } = e;
            if (null == t) {
                let e = S.Z.getChannel(o),
                    t = null == e ? void 0 : e.guild_id;
                null != t && t !== C.Z.getGuildId() && L[t] === o && (L[t] = U(t));
            }
            (o = t), k();
        },
        VOICE_STATE_UPDATES: function (e) {
            let { voiceStates: t } = e;
            return t.reduce((e, t) => {
                var n, i, a;
                if (t.sessionId === r) {
                    clearInterval(u);
                    let e = null === (n = S.Z.getChannel(o)) || void 0 === n ? void 0 : n.getGuildId();
                    (t.guildId !== e && null == t.channelId) || (o = t.channelId),
                        (l = Date.now()),
                        null != o &&
                            (u = setInterval(() => {
                                (l = Date.now()), k();
                            }, 60000)),
                        k();
                } else {
                    if (t.userId !== T.default.getId()) return e;
                    clearInterval(u), (u = void 0), (l = 0);
                    let n = null === (i = S.Z.getChannel(o)) || void 0 === i ? void 0 : i.getGuildId(),
                        r = null === (a = S.Z.getChannel(t.channelId)) || void 0 === a ? void 0 : a.getGuildId();
                    ((null != n && r === n) || o === t.channelId) && (o = null), k();
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
                k());
        },
        LOGOUT: function () {
            (L = {}), (a = null), (i = void 0), (w = {}), (s = {}), (o = null), g.K.remove(D);
        }
    }));
