let r, i, a, o, s, l, u;
n.d(t, {
    C: function () {
        return V;
    }
});
var c,
    d = n(47120);
var _ = n(724458);
var E = n(392711),
    f = n.n(E),
    h = n(442837),
    p = n(433517),
    m = n(570140),
    I = n(57132),
    T = n(703656),
    g = n(131704),
    S = n(823379),
    A = n(314897),
    v = n(592125),
    N = n(984933),
    O = n(430824),
    R = n(131951),
    C = n(914010),
    y = n(981631),
    L = n(176505);
function b(e, t, n) {
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
let D = 'SelectedChannelStore',
    M = 300000,
    P = 60000,
    U = {},
    w = {},
    x = {},
    G = new Set();
function k(e) {
    return String(e);
}
function B() {
    !__OVERLAY__ &&
        p.K.set(D, {
            selectedChannelId: a,
            selectedVoiceChannelId: s,
            lastChannelFollowingDestination: o,
            lastConnectedTime: l,
            selectedChannelIds: U,
            mostRecentSelectedTextChannelIds: x,
            knownThreadIds: f()(U)
                .values()
                .concat(f().values(x))
                .filter(S.lm)
                .uniq()
                .filter((e) => {
                    let t = v.Z.getBasicChannel(e);
                    return G.has(e) || (null != t && g.Ec.has(t.type));
                })
                .value()
        });
}
function F(e) {
    if (null != e) {
        let t = N.ZP.getDefaultChannel(e);
        if (null != t) return t.id;
    }
}
function Z(e, t) {
    if (null == e || null == t || x[e] === t) return !1;
    let n = v.Z.getChannel(t),
        r = null != n && (0, g.zi)(n.type),
        i = (null == n ? void 0 : n.getGuildId()) === e;
    return !!r && !!i && ((x[e] = t), !0);
}
function V(e) {
    let t = v.Z.getMutableBasicGuildChannelsForGuild(e),
        n = f().find(t, (e) => e.type === y.d4z.GUILD_VOICE);
    return null == n ? void 0 : n.id;
}
function H() {
    let e = !1,
        t = O.Z.getGuilds();
    return (
        f().each(U, (t, n) => {
            (null == t || (!v.Z.hasChannel(t) && t !== a && !G.has(t) && !(0, L.ME)(t))) && (delete U[n], delete w[n], (e = !0));
        }),
        f().each(x, (t, n) => {
            (null == t || (!v.Z.hasChannel(t) && !G.has(t))) && (delete x[n], (e = !0));
        }),
        f().each(t, (e) => {
            let t = U[e.id];
            null == x[e.id] && Z(e.id, t);
        }),
        null != l && Date.now() - l >= M && ((s = null), (e = !0)),
        e
    );
}
function Y(e) {
    (r = e.sessionId), null != s && null == v.Z.getChannel(s) && (s = null), H() && B();
}
function j(e) {
    (r = e.sessionId), (s = e.selectedVoiceChannelId), (U = {}), (w = {}), (a = e.selectedChannelId), (U[e.selectedGuildId] = e.selectedChannelId), Z(e.selectedGuildId, a), H();
}
function W() {
    r = null;
}
function K(e) {
    let { guildId: t, channelId: n } = e;
    if (void 0 === t) return !1;
    null == n && (n = F(t)), null != a && n !== a && (i = a), (a = n), Z(t, n), U[k(t)] !== n && ((w[k(t)] = U[k(t)]), (U[k(t)] = a)), B();
}
function z(e) {
    let { channelId: t } = e;
    if (null == t) {
        let e = v.Z.getChannel(s),
            t = null == e ? void 0 : e.guild_id;
        null != t && t !== C.Z.getGuildId() && U[t] === s && (U[t] = F(t));
    }
    (s = t), B();
}
function q(e, t) {
    if ((G.delete(e), null == t)) {
        let n = C.Z.getGuildId();
        U[k(n)] === e && (t = n);
    }
    let n = null != O.Z.getGuild(t) ? t : null,
        r = !1;
    s === e && ((s = null), (r = !0)), !(0, I.cn)() && (U[k(n)] === e && ((U[k(n)] = F(k(n))), C.Z.getGuildId() === n && (0, T.dL)(y.Z5c.CHANNEL(t, U[k(n)])), (r = !0)), null != n && x[n] === e && (delete x[n], (r = !0))), r && B();
}
function Q(e) {
    let {
        channel: { id: t, guild_id: n }
    } = e;
    q(t, n);
}
function X(e) {
    let { channels: t } = e;
    for (let e of t) e.isScheduledForDeletion() && q(e.id, e.guild_id);
}
function $(e) {
    let { guild: t } = e;
    if (null == U[t.id]) {
        let e = F(t.id);
        (U[t.id] = e), Z(t.id, e), B();
    }
}
function J(e) {
    let {
        guild: { id: t, unavailable: n }
    } = e;
    if ((s === U[t] && (s = null), n)) return !1;
    delete x[t], delete U[t], B();
}
function ee(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        var n, i, a;
        if (t.sessionId === r) {
            clearInterval(u);
            let e = null === (n = v.Z.getChannel(s)) || void 0 === n ? void 0 : n.getGuildId();
            (t.guildId !== e && null == t.channelId) || (s = t.channelId),
                (l = Date.now()),
                null != s &&
                    (u = setInterval(() => {
                        (l = Date.now()), B();
                    }, P)),
                B();
        } else {
            if (t.userId !== A.default.getId()) return e;
            clearInterval(u), (u = void 0), (l = 0);
            let n = null === (i = v.Z.getChannel(s)) || void 0 === i ? void 0 : i.getGuildId(),
                r = null === (a = v.Z.getChannel(t.channelId)) || void 0 === a ? void 0 : a.getGuildId();
            ((null != n && r === n) || s === t.channelId) && (s = null), B();
        }
        return !0;
    }, !1);
}
function et(e) {
    let { channelId: t, guildId: n } = e;
    (null == o || t !== o.channelId) &&
        ((o = {
            channelId: t,
            guildId: n
        }),
        B());
}
function en() {
    (U = {}), (a = null), (i = void 0), (x = {}), (o = {}), (s = null), p.K.remove(D);
}
function er(e) {
    let { channel: t } = e;
    switch (t.type) {
        case y.d4z.GUILD_ANNOUNCEMENT:
        case y.d4z.GUILD_TEXT:
            let n = t.guild_id;
            if ((null != n && null == x[n] && (x[n] = t.id), null != n && null == U[n])) return (U[n] = F(n)), !0;
    }
    return !1;
}
class ei extends (c = h.ZP.Store) {
    initialize() {
        if (!__OVERLAY__) {
            var e, t;
            let n =
                null !== (e = p.K.get(D)) && void 0 !== e
                    ? e
                    : {
                          selectedChannelId: a,
                          selectedVoiceChannelId: s,
                          lastChannelFollowingDestination: o,
                          lastConnectedTime: l,
                          selectedChannelIds: U,
                          mostRecentSelectedTextChannelIds: x
                      };
            null != n.knownThreadIds && (G = new Set(n.knownThreadIds)),
                (s = n.selectedVoiceChannelId),
                (o = n.lastChannelFollowingDestination),
                (l = n.lastConnectedTime),
                (x = null !== (t = n.mostRecentSelectedTextChannelIds) && void 0 !== t ? t : {}),
                null != n.selectedChannelIds &&
                    (U = {
                        ...n.selectedChannelIds,
                        null: null
                    });
        }
        this.mustEmitChanges((e) => 'CONNECTION_OPEN' !== e.type && 'VOICE_STATE_UPDATES' !== e.type), this.waitFor(O.Z, v.Z, C.Z, N.ZP, R.Z);
    }
    getChannelId(e) {
        var t, n;
        let r = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            i = k(e === y.ME ? null : null !== (t = null != e ? e : C.Z.getGuildId()) && void 0 !== t ? t : null);
        return r ? (null !== (n = U[i]) && void 0 !== n ? n : F(i)) : U[i];
    }
    getVoiceChannelId() {
        return R.Z.isSupported() ? s : null;
    }
    getMostRecentSelectedTextChannelId(e) {
        var t;
        return null == e ? null : null !== (t = x[e]) && void 0 !== t ? t : null;
    }
    getCurrentlySelectedChannelId(e) {
        return null != e ? U[e] : a;
    }
    getLastSelectedChannelId(e) {
        return null != e ? w[e] : i;
    }
    getLastSelectedChannels(e) {
        return w[e];
    }
    getLastChannelFollowingDestination() {
        return o;
    }
}
b(ei, 'displayName', 'SelectedChannelStore'),
    (t.Z = new ei(m.Z, {
        CONNECTION_OPEN: Y,
        OVERLAY_INITIALIZE: j,
        CONNECTION_CLOSED: W,
        CHANNEL_SELECT: K,
        CHANNEL_CREATE: er,
        CHANNEL_DELETE: Q,
        CHANNEL_UPDATES: X,
        THREAD_DELETE: Q,
        GUILD_CREATE: $,
        GUILD_DELETE: J,
        VOICE_CHANNEL_SELECT: z,
        VOICE_STATE_UPDATES: ee,
        CHANNEL_FOLLOWER_CREATED: et,
        LOGOUT: en
    }));
