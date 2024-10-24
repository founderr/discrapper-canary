n.d(t, {
    Zb: function () {
        return C;
    },
    sH: function () {
        return v;
    }
}),
    n(653041),
    n(47120),
    n(724458);
var r,
    i,
    a,
    s,
    o = n(392711),
    l = n.n(o),
    u = n(149765),
    c = n(442837),
    d = n(570140),
    _ = n(430198),
    E = n(933557),
    f = n(853856),
    h = n(846787),
    p = n(131704),
    I = n(700785),
    m = n(314897),
    T = n(592125),
    S = n(271383),
    g = n(430824),
    A = n(496675),
    N = n(699516),
    R = n(594174),
    O = n(981631);
let v = 'SELECTABLE',
    C = 'VOCAL',
    L = null,
    D = {},
    y = {},
    b = {},
    M = null,
    P = {},
    U = {
        comparator: -1,
        channel: (0, p.kt)({
            id: O.Sc2,
            type: O.d4z.GUILD_CATEGORY,
            name: 'Uncategorized'
        })
    },
    w = k(O.kod),
    x = [],
    G = {};
function k(e) {
    return {
        id: e,
        [v]: [],
        [C]: [],
        [O.d4z.GUILD_CATEGORY]: [U],
        count: 0
    };
}
function B(e, t) {
    let { comparator: n } = e,
        { comparator: r } = t;
    return n - r;
}
function F() {
    (D = {}), (P = {}), (y = {}), (b = {}), null != L && V(L);
}
function V(e) {
    var t;
    let n = k(e);
    return (
        (D[e] = n),
        (P[e] = []),
        !(function (e) {
            let { id: t } = e,
                n = (function (e) {
                    if (e === O.I_8)
                        return (function () {
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
                        })();
                    let t = {},
                        n = T.Z.getMutableGuildChannelsForGuild(e);
                    for (let e in n)
                        t[e] = {
                            channel: n[e],
                            comparator: n[e].position
                        };
                    return t;
                })(t);
            l().forEach(n, (n) => {
                var r;
                let i = n.channel;
                if (((e.count += 1), p.zS.has(i.type) && !A.Z.can(O.Plq.VIEW_CHANNEL, i) && !_.Z.isChannelGated(i.guild_id, i.id) && i.id !== M)) return;
                let a = ((r = i.type), (0, p.r8)(r) ? v : (0, p.bw)(r) ? C : r);
                i.type === O.d4z.GUILD_DIRECTORY && (null == P[t] && (P[t] = []), P[t].push(n)), null != e[a] && e[a].push(n);
            });
        })(n),
        (t = n)[v].sort(B),
        t[C].sort(B),
        t[O.d4z.GUILD_CATEGORY].sort(B),
        (function (e) {
            let t = (y[e.id] = {}),
                n = {};
            e[v].forEach((e) => {
                let { channel: r } = e,
                    i = (0, E.F6)(r, R.default, N.Z),
                    a = Object.prototype.hasOwnProperty.call(n, i) ? n[i] : null;
                null == a ? (n[i] = 1) : ((n[i] = a + 1), (i += '~'.concat(a))),
                    (t[r.id] = {
                        id: r.id,
                        name: i
                    });
            });
        })(n),
        (function (e) {
            (function (e, t) {
                let n = g.Z.getGuild(t);
                if (null != n && j(e, n)) return !0;
                let r = D[t];
                null == r && (r = V(t));
                let { [v]: i, [C]: a } = r;
                for (let { channel: t } of i) if (j(e, t)) return !0;
                for (let { channel: t } of a) if (j(e, t)) return !0;
                return !1;
            })(R.default.getCurrentUser(), e)
                ? (b[e] = !0)
                : delete b[e];
        })(e),
        n
    );
}
function H(e) {
    let {
        guild: { id: t }
    } = e;
    if (null == t) return !1;
    (D[t] = void 0), L === t && V(t);
}
function Z(e) {
    let {
        channel: { guild_id: t }
    } = e;
    if (null == t) return !1;
    (D[t] = void 0), t === L && V(t);
}
function Y(e) {
    let { guildId: t } = e;
    (D[t] = void 0), t === L && V(t);
}
function j(e, t) {
    return u.Db(
        I.uB({
            user: e,
            context: t,
            checkElevated: !1
        }),
        O.TC2
    );
}
function W(e, t) {
    var n;
    M = t;
    let r = null !== (n = null == e ? void 0 : e.getGuildId()) && void 0 !== n ? n : null;
    if (null == r) return !1;
    (D[r] = void 0), r === L && V(r);
}
function K() {
    V(O.I_8);
}
class z extends (r = c.ZP.Store) {
    initialize() {
        this.waitFor(g.Z, S.ZP, T.Z, A.Z, m.default, _.Z, f.Z), this.syncWith([f.Z], K);
    }
    getAllGuilds() {
        return D;
    }
    getChannels(e) {
        var t;
        let n;
        return null != e ? (null == (n = D[(t = e)]) && (n = V(t)), n) : w;
    }
    getFirstChannelOfType(e, t, n) {
        let r = this.getChannels(e)[n].find(t);
        return null != r ? r.channel : null;
    }
    getFirstChannel(e, t) {
        var n;
        let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return null !== (n = this.getFirstChannelOfType(e, t, v)) && void 0 !== n ? n : r ? this.getFirstChannelOfType(e, t, C) : null;
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
        return this.getChannels(e)[v].map((e) => {
            let { channel: t } = e;
            return t.id;
        });
    }
    getSelectableChannels(e) {
        return this.getChannels(e)[v];
    }
    getVocalChannelIds(e) {
        return this.getChannels(e)[C].map((e) => {
            let { channel: t } = e;
            return t.id;
        });
    }
    getDirectoryChannelIds(e) {
        var t, n;
        return null !==
            (n =
                null === (t = P[e]) || void 0 === t
                    ? void 0
                    : t.map((e) => {
                          let { channel: t } = e;
                          return t.id;
                      })) && void 0 !== n
            ? n
            : x;
    }
    hasSelectableChannel(e, t) {
        return this.getSelectableChannelIds(e).includes(t);
    }
    hasElevatedPermissions(e) {
        return b[e] || !1;
    }
    hasChannels(e) {
        return this.getChannels(e).count > 0;
    }
    hasCategories(e) {
        return this.getChannels(e)[O.d4z.GUILD_CATEGORY].length > 1;
    }
    getTextChannelNameDisambiguations(e) {
        var t;
        return null != e && null !== (t = y[e]) && void 0 !== t ? t : G;
    }
}
(s = 'GuildChannelStore'),
    (a = 'displayName') in (i = z)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.ZP = new z(d.Z, {
        BACKGROUND_SYNC: F,
        CHANNEL_SELECT: function (e) {
            let { guildId: t } = e;
            if (((L = null != t ? t : null), null == t || null != D[t])) return !1;
            V(t);
        },
        CONNECTION_OPEN: F,
        OVERLAY_INITIALIZE: F,
        CACHE_LOADED_LAZY: F,
        GUILD_CREATE: H,
        GUILD_UPDATE: H,
        GUILD_DELETE: function (e) {
            let {
                guild: { id: t }
            } = e;
            return delete D[t], delete y[t], delete b[t], delete P[t], !0;
        },
        GUILD_MEMBER_UPDATE: function (e) {
            let { guildId: t, user: n } = e;
            if (m.default.getId() !== n.id) return !1;
            (D[t] = void 0), t === L && V(t);
        },
        CHANNEL_CREATE: Z,
        CHANNEL_DELETE: Z,
        CHANNEL_UPDATES: function (e) {
            let { channels: t } = e,
                n = !1;
            for (let e of t) {
                let { guild_id: t } = e;
                if (null != t) (D[t] = void 0), (n = !0), L === t && V(t);
            }
            return n;
        },
        GUILD_ROLE_CREATE: Y,
        GUILD_ROLE_UPDATE: Y,
        GUILD_ROLE_DELETE: Y,
        IMPERSONATE_UPDATE: Y,
        IMPERSONATE_STOP: Y,
        VOICE_CHANNEL_SELECT: function (e) {
            let { channelId: t } = e;
            return null == t && null != M ? W(T.Z.getChannel(M), null) : W(T.Z.getChannel(t), t);
        },
        VOICE_CHANNEL_STATUS_UPDATE: function (e) {
            let t = T.Z.getBasicChannel(e.id);
            null != t && null != t.guild_id && V(t.guild_id);
        },
        VOICE_STATE_UPDATES: function (e) {
            let { voiceStates: t } = e;
            return t.reduce((e, t) => {
                let { channelId: n, sessionId: r } = t;
                return m.default.getSessionId() !== r ? e : W(T.Z.getChannel(n), n) || e;
            }, !1);
        }
    }));
