n.d(t, {
    Zb: function () {
        return L;
    },
    sH: function () {
        return y;
    }
});
var r,
    i = n(653041);
var a = n(47120);
var o = n(724458);
var s = n(392711),
    l = n.n(s),
    u = n(149765),
    c = n(442837),
    d = n(570140),
    _ = n(430198),
    E = n(933557),
    f = n(853856),
    h = n(846787),
    p = n(131704),
    m = n(700785),
    I = n(314897),
    T = n(592125),
    g = n(271383),
    S = n(430824),
    A = n(496675),
    v = n(699516),
    N = n(594174),
    O = n(981631),
    R = n(689938);
function C(e, t, n) {
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
let y = 'SELECTABLE',
    L = 'VOCAL',
    b = null,
    D = {},
    M = {},
    P = {},
    U = null,
    w = {},
    x = {
        comparator: -1,
        channel: (0, p.kt)({
            id: O.Sc2,
            type: O.d4z.GUILD_CATEGORY,
            name: R.Z.Messages.UNCATEGORIZED
        })
    },
    G = F(O.kod),
    k = [],
    B = {};
function F(e) {
    return {
        id: e,
        [y]: [],
        [L]: [],
        [O.d4z.GUILD_CATEGORY]: [x],
        count: 0
    };
}
function Z(e) {
    let t = D[e];
    return null == t && (t = q(e)), t;
}
function V(e, t) {
    let { comparator: n } = e,
        { comparator: r } = t;
    return n - r;
}
function H(e) {
    e[y].sort(V), e[L].sort(V), e[O.d4z.GUILD_CATEGORY].sort(V);
}
function Y(e) {
    return (0, p.r8)(e) ? y : (0, p.bw)(e) ? L : e;
}
function j() {
    let e = {},
        t = f.Z.getFavoriteChannels();
    for (let n in t) {
        let r = T.Z.getChannel(n);
        if (null == r) continue;
        let i = t[n],
            a = (0, h.r)(t, i, r);
        e[n] = {
            channel: a,
            comparator: a.position
        };
    }
    return e;
}
function W(e) {
    if (e === O.I_8) return j();
    let t = {},
        n = T.Z.getMutableGuildChannelsForGuild(e);
    for (let e in n)
        t[e] = {
            channel: n[e],
            comparator: n[e].position
        };
    return t;
}
function K(e) {
    let { id: t } = e,
        n = W(t);
    return (
        l().forEach(n, (n) => {
            let r = n.channel;
            if (((e.count += 1), p.zS.has(r.type) && !A.Z.can(O.Plq.VIEW_CHANNEL, r) && !_.Z.isChannelGated(r.guild_id, r.id) && r.id !== U)) return;
            let i = Y(r.type);
            r.type === O.d4z.GUILD_DIRECTORY && (null == w[t] && (w[t] = []), w[t].push(n)), null != e[i] && e[i].push(n);
        }),
        e
    );
}
function z() {
    (D = {}), (w = {}), (M = {}), (P = {}), null != b && q(b);
}
function q(e) {
    let t = F(e);
    return (D[e] = t), (w[e] = []), K(t), H(t), Q(t), eo(e), t;
}
function Q(e) {
    let t = (M[e.id] = {}),
        n = {};
    e[y].forEach((e) => {
        let { channel: r } = e,
            i = (0, E.F6)(r, N.default, v.Z),
            a = Object.prototype.hasOwnProperty.call(n, i) ? n[i] : null;
        null == a ? (n[i] = 1) : ((n[i] = a + 1), (i += '~'.concat(a))),
            (t[r.id] = {
                id: r.id,
                name: i
            });
    });
}
function X(e) {
    let {
        guild: { id: t }
    } = e;
    if (null == t) return !1;
    (D[t] = void 0), b === t && q(t);
}
function $(e) {
    let {
        guild: { id: t }
    } = e;
    return delete D[t], delete M[t], delete P[t], delete w[t], !0;
}
function J(e) {
    let { guildId: t, user: n } = e;
    if (I.default.getId() !== n.id) return !1;
    (D[t] = void 0), t === b && q(t);
}
function ee(e) {
    let t = T.Z.getBasicChannel(e.id);
    null != t && null != t.guild_id && q(t.guild_id);
}
function et(e) {
    let {
        channel: { guild_id: t }
    } = e;
    if (null == t) return !1;
    (D[t] = void 0), t === b && q(t);
}
function en(e) {
    let { channels: t } = e,
        n = !1;
    for (let e of t) {
        let { guild_id: t } = e;
        if (null != t) (D[t] = void 0), (n = !0), b === t && q(t);
    }
    return n;
}
function er(e) {
    let { guildId: t } = e;
    (D[t] = void 0), t === b && q(t);
}
function ei(e, t) {
    return u.Db(
        m.uB({
            user: e,
            context: t,
            checkElevated: !1
        }),
        O.TC2
    );
}
function ea(e, t) {
    let n = S.Z.getGuild(t);
    if (null != n && ei(e, n)) return !0;
    let r = D[t];
    null == r && (r = q(t));
    let { [y]: i, [L]: a } = r;
    for (let { channel: t } of i) if (ei(e, t)) return !0;
    for (let { channel: t } of a) if (ei(e, t)) return !0;
    return !1;
}
function eo(e) {
    ea(N.default.getCurrentUser(), e) ? (P[e] = !0) : delete P[e];
}
function es(e, t) {
    var n;
    U = t;
    let r = null !== (n = null == e ? void 0 : e.getGuildId()) && void 0 !== n ? n : null;
    if (null == r) return !1;
    (D[r] = void 0), r === b && q(r);
}
function el(e) {
    let { channelId: t } = e;
    return null == t && null != U ? es(T.Z.getChannel(U), null) : es(T.Z.getChannel(t), t);
}
function eu(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        let { channelId: n, sessionId: r } = t;
        return I.default.getSessionId() !== r ? e : es(T.Z.getChannel(n), n) || e;
    }, !1);
}
function ec(e) {
    let { guildId: t } = e;
    if (((b = null != t ? t : null), null == t || null != D[t])) return !1;
    q(t);
}
function ed() {
    q(O.I_8);
}
class e_ extends (r = c.ZP.Store) {
    initialize() {
        this.waitFor(S.Z, g.ZP, T.Z, A.Z, I.default, _.Z, f.Z), this.syncWith([f.Z], ed);
    }
    getAllGuilds() {
        return D;
    }
    getChannels(e) {
        return null != e ? Z(e) : G;
    }
    getFirstChannelOfType(e, t, n) {
        let r = this.getChannels(e)[n].find(t);
        return null != r ? r.channel : null;
    }
    getFirstChannel(e, t) {
        var n;
        let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return null !== (n = this.getFirstChannelOfType(e, t, y)) && void 0 !== n ? n : r ? this.getFirstChannelOfType(e, t, L) : null;
    }
    getDefaultChannel(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : O.Plq.VIEW_CHANNEL;
        return this.getFirstChannel(e, (e) => A.Z.can(n, e.channel), t);
    }
    getSFWDefaultChannel(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : O.Plq.VIEW_CHANNEL;
        return this.getFirstChannel(e, (e) => A.Z.can(n, e.channel) && !e.channel.nsfw, t);
    }
    getSelectableChannelIds(e) {
        return this.getChannels(e)[y].map((e) => {
            let { channel: t } = e;
            return t.id;
        });
    }
    getSelectableChannels(e) {
        return this.getChannels(e)[y];
    }
    getVocalChannelIds(e) {
        return this.getChannels(e)[L].map((e) => {
            let { channel: t } = e;
            return t.id;
        });
    }
    getDirectoryChannelIds(e) {
        var t, n;
        return null !==
            (n =
                null === (t = w[e]) || void 0 === t
                    ? void 0
                    : t.map((e) => {
                          let { channel: t } = e;
                          return t.id;
                      })) && void 0 !== n
            ? n
            : k;
    }
    hasSelectableChannel(e, t) {
        return this.getSelectableChannelIds(e).includes(t);
    }
    hasElevatedPermissions(e) {
        return P[e] || !1;
    }
    hasChannels(e) {
        return this.getChannels(e).count > 0;
    }
    hasCategories(e) {
        return this.getChannels(e)[O.d4z.GUILD_CATEGORY].length > 1;
    }
    getTextChannelNameDisambiguations(e) {
        var t;
        return null != e && null !== (t = M[e]) && void 0 !== t ? t : B;
    }
}
C(e_, 'displayName', 'GuildChannelStore'),
    (t.ZP = new e_(d.Z, {
        BACKGROUND_SYNC: z,
        CHANNEL_SELECT: ec,
        CONNECTION_OPEN: z,
        OVERLAY_INITIALIZE: z,
        CACHE_LOADED_LAZY: z,
        GUILD_CREATE: X,
        GUILD_UPDATE: X,
        GUILD_DELETE: $,
        GUILD_MEMBER_UPDATE: J,
        CHANNEL_CREATE: et,
        CHANNEL_DELETE: et,
        CHANNEL_UPDATES: en,
        GUILD_ROLE_CREATE: er,
        GUILD_ROLE_UPDATE: er,
        GUILD_ROLE_DELETE: er,
        IMPERSONATE_UPDATE: er,
        IMPERSONATE_STOP: er,
        VOICE_CHANNEL_SELECT: el,
        VOICE_CHANNEL_STATUS_UPDATE: ee,
        VOICE_STATE_UPDATES: eu
    }));
