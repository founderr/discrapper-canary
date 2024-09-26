let r;
n.d(t, {
    k1: function () {
        return eI;
    }
});
var i = n(653041);
var a = n(733860);
var o = n(757143);
var s = n(47120);
var l = n(658722),
    u = n.n(l),
    c = n(392711),
    d = n.n(c),
    _ = n(815372),
    E = n(620490),
    f = n(933557),
    h = n(605436),
    p = n(565924),
    m = n(710845),
    I = n(339085),
    T = n(31445),
    g = n(931261),
    S = n(285651),
    A = n(822179),
    v = n(926491),
    N = n(373228),
    O = n(601070),
    R = n(675478),
    C = n(131704),
    y = n(598077),
    L = n(592125),
    b = n(984933),
    D = n(271383),
    M = n(430824),
    P = n(375954),
    U = n(496675),
    w = n(158776),
    x = n(699516),
    G = n(944486),
    k = n(914010),
    B = n(594174),
    F = n(55563),
    Z = n(823379),
    V = n(892880),
    H = n(700785),
    Y = n(226951),
    j = n(709054),
    W = n(624138),
    K = n(51144),
    z = n(981631),
    q = n(727785),
    Q = n(176505),
    X = n(689938);
let $ = new m.Z('AutocompleteUtils'),
    J = 10,
    ee = 7,
    et = 5,
    en = 3,
    er = 1,
    ei = 1,
    ea = 11,
    eo = 6,
    es = 8,
    el = 1,
    eu = 1000,
    ec = 50,
    ed = () => !0,
    e_ = /(\t|\s)/,
    eE = [],
    ef = (r = n(786074).Z).MENTION_EVERYONE,
    eh = r.MENTION_HERE,
    ep = r.LAUNCHABLE_APPLICATIONS;
function em() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
        t = arguments.length > 1 ? arguments[1] : void 0;
    return eu * e * (null != t ? t : 1);
}
let eI = [b.sH, b.Zb, z.d4z.GUILD_CATEGORY];
function eT(e, t) {
    return e.split(/(?:,| )+/).every((e) => RegExp(Y.Z.escape(e), 'i').test(t));
}
function eg(e, t) {
    let { exactQuery: n, containQuery: r, queryLower: i, isFullMatch: a } = t,
        o = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    try {
        if (n.test(e)) {
            if (e.toLocaleLowerCase() === i) return J;
            if (!1 === a) {
                let t = i.length / e.length;
                return Math.max(er, ee * t);
            }
            return ee;
        }
        if (r.test(e)) return et;
        if (eT(i, e)) return en;
        if (o && u()(i, e)) return er;
    } catch (e) {
        $.error(e);
    }
    return 0;
}
function eS(e) {
    return (null == e ? void 0 : e.joinedAt) != null && !e.isPending;
}
function eA(e) {
    let { query: t, members: n, limit: r, filter: i, allowSnowflake: a } = e,
        o = B.default.getUsers(),
        s = k.Z.getGuildId(),
        l = t.toLocaleLowerCase(),
        c = (0, W.Fv)(l),
        d = [],
        _ = [],
        f = n.length,
        h = 0,
        p = 0;
    for (; h < f; ) {
        var m, I, T, g, S, A, v, N, O;
        let e, r;
        let E = n[h];
        E instanceof y.Z ? ((r = E), (e = null === (I = D.ZP.getNick(s, r.id)) || void 0 === I ? void 0 : I.toLocaleLowerCase())) : ((e = null === (T = E.nick) || void 0 === T ? void 0 : T.toLocaleLowerCase()), (r = o[E.userId]));
        let f = null === (m = K.ZP.getGlobalName(r)) || void 0 === m ? void 0 : m.toLocaleLowerCase();
        if (null == i || (null != r && i(r))) {
            let n = r.username.toLocaleLowerCase(),
                i = (0, W._I)(n),
                o = (0, W.Fv)(i),
                s = null != e ? (0, W._I)(e) : null,
                E = null != s ? (0, W.Fv)(s) : null,
                h = null != f ? (0, W._I)(f) : null,
                m = null != h ? (0, W.Fv)(h) : null;
            (a && t === r.id) || n.substring(0, l.length) === l || i.substring(0, l.length) === l || (null == e ? void 0 : e.substring(0, l.length)) === l || (null == s ? void 0 : s.substring(0, l.length)) === l || (null == f ? void 0 : f.substring(0, l.length)) === l || (null == h ? void 0 : h.substring(0, l.length)) === l
                ? d.push({
                      type: q.h8.USER,
                      record: r,
                      score: J,
                      comparator: null !== (g = null != f ? f : e) && void 0 !== g ? g : n,
                      sortable: null !== (S = null != h ? h : s) && void 0 !== S ? S : i
                  })
                : o.substring(0, c.length) === c || (null == E ? void 0 : E.substring(0, c.length)) === c || (null == m ? void 0 : m.substring(0, c.length)) === c
                  ? d.push({
                        type: q.h8.USER,
                        record: r,
                        score: er,
                        comparator: null !== (A = null != f ? f : e) && void 0 !== A ? A : n,
                        sortable: null !== (v = null != h ? h : s) && void 0 !== v ? v : i
                    })
                  : p < ec &&
                    (u()(l, i) || u()(c, o) || (null != s && u()(l, s)) || (null != E && u()(c, E)) || (null != h && u()(l, h)) || (null != m && u()(c, m))) &&
                    (_.push({
                        type: q.h8.USER,
                        record: r,
                        score: er,
                        comparator: null !== (N = null != f ? f : e) && void 0 !== N ? N : n,
                        sortable: null !== (O = null != h ? h : s) && void 0 !== O ? O : i
                    }),
                    (p += 1));
        }
        h += 1;
    }
    return d.sort(E.Z), d.length < r && (_.sort(E.Z), (d = d.concat(_.slice(0, Math.max(0, r - d.length))))), d.length > r && (d.length = r), d;
}
function ev(e) {
    switch (e) {
        case N.MO.STICKER_NAME:
            return ea;
        case N.MO.CORRELATED_EMOJI:
            return eo;
        case N.MO.TAG:
            return el;
        case N.MO.GUILD_NAME:
        case N.MO.PACK_NAME:
            return es;
        default:
            return 1;
    }
}
function eN(e, t, n) {
    return e === t || (!!(n || (0, C.Km)(t)) && (e === b.sH ? (0, C.r8)(t) || (0, C.bw)(t) : e === b.Zb && (0, C.bw)(t)));
}
function eO(e, t) {
    return e === b.sH && (0, C.bw)(t);
}
function eR(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = e
            .split(' ')
            .filter((e) => '' !== e || t)
            .map((e) => {
                let t = e.toLocaleLowerCase();
                return {
                    queryLower: t,
                    exactQuery: RegExp('^'.concat(Y.Z.escape(t)), 'i'),
                    containQuery: RegExp(Y.Z.escape(t), 'i'),
                    isFullMatch: !1
                };
            });
    if (e.includes(' ')) {
        let t = e.toLocaleLowerCase();
        n.unshift({
            queryLower: t,
            exactQuery: RegExp('^'.concat(Y.Z.escape(t).replace(' ', '( |-)')), 'i'),
            containQuery: RegExp(Y.Z.escape(t).replace(' ', '( |-)'), 'i'),
            isFullMatch: !0
        });
    }
    return n;
}
function eC(e, t, n) {
    let r = 0,
        i = null;
    for (let a of t) {
        let t = eg(e, a, n);
        t > r && ((r = t), (i = a));
    }
    return null != i && (i.isFullMatch ? (t.length = 0) : t.splice(t.indexOf(i), 1)), r;
}
function ey(e, t) {
    if (null == e.guild_id) return;
    let n = t[e.guild_id];
    if (null == n) {
        var r;
        n = t[e.guild_id] = null === (r = M.Z.getGuild(e.guild_id)) || void 0 === r ? void 0 : r.toString().toLocaleLowerCase();
    }
    return n;
}
function eL(e, t) {
    if (null == e.parent_id) return;
    let n = t[e.parent_id];
    if (null == n) {
        var r;
        n = t[e.parent_id] = null === (r = L.Z.getChannel(e.parent_id)) || void 0 === r ? void 0 : r.name.toLocaleLowerCase();
    }
    return n;
}
function eb(e, t) {
    let n = L.Z.getChannel(e);
    return null == e || null == n
        ? []
        : d()(P.Z.getMessages(e).toArray())
              .reverse()
              .uniqBy((e) => e.author.id)
              .map((e) => B.default.getUser(e.author.id))
              .filter((e) => {
                  if (null == e || e.isNonUserBot()) return !1;
                  let t = n.getGuildId();
                  return null == t || eS(D.ZP.getMember(t, e.id));
              })
              .map((e) => {
                  var t;
                  let r = n.getGuildId(),
                      i = null != r ? D.ZP.getMember(r, e.id) : null;
                  return {
                      type: q.h8.USER,
                      record: e,
                      score: 0,
                      comparator: null !== (t = null == i ? void 0 : i.nick) && void 0 !== t ? t : K.ZP.getName(e)
                  };
              })
              .take(t)
              .value();
}
t.ZP = {
    queryFriends(e) {
        let { query: t, limit: n = 10, _fuzzy: r = !0, filter: i } = e;
        return eA({
            query: t,
            members: x.Z.getFriendIDs()
                .map((e) => B.default.getUser(e))
                .filter(Z.lm),
            limit: n,
            filter: i
        });
    },
    queryDMUsers(e) {
        let { query: t, limit: n = 10, filter: r } = e;
        return eA({
            query: t,
            members: L.Z.getDMUserIds()
                .map((e) => B.default.getUser(e))
                .filter(Z.lm),
            limit: n,
            filter: r
        });
    },
    queryChannelUsers(e) {
        let t,
            { channelId: n, query: r, limit: i = 10, request: a = !0, checkRecentlyTalkedOnEmptyQuery: o = !0, allowSnowflake: s = !1 } = e,
            l = L.Z.getChannel(n);
        if (null == l) return [];
        let u = l.isThread() ? L.Z.getChannel(l.parent_id) : null,
            c = null != u ? u : l;
        if (null == c) return [];
        if (c.isPrivate()) {
            t = c.recipients.map((e) => {
                var t;
                return {
                    userId: e,
                    nick: null !== (t = x.Z.getNickname(e)) && void 0 !== t ? t : null
                };
            });
            let e = B.default.getCurrentUser();
            null != e &&
                t.push({
                    userId: e.id,
                    nick: null
                });
        } else {
            if (0 === r.length && o) {
                let e = eb(l.id, i);
                if (e.length > 0) return e;
            }
            (t = D.ZP.getMembers(c.guild_id).filter(eS)), a && V.Z.requestMembers(c.guild_id, r, i);
        }
        return eA({
            query: r,
            members: t,
            limit: i,
            filter: (e) =>
                c.isPrivate() ||
                H.BT({
                    permission: z.Plq.VIEW_CHANNEL,
                    user: e,
                    context: c
                }),
            allowSnowflake: s
        });
    },
    queryGuildUsers(e) {
        let { guildId: t, query: n, limit: r = 10, request: i = !0, checkRecentlyTalkedOnEmptyQuery: a = !0, filter: o, allowSnowflake: s } = e;
        if (null == M.Z.getGuild(t)) return [];
        if (0 === n.length && a) {
            let e = eb(G.Z.getChannelId(t), r);
            if (e.length > 0) return e;
        }
        let l = D.ZP.getMembers(t).filter(eS);
        return (
            i && n.length > 0 && V.Z.requestMembers(t, n, r),
            eA({
                query: n,
                members: l,
                limit: r,
                filter: o,
                allowSnowflake: s
            })
        );
    },
    queryUsers(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
            n = (arguments.length > 2 && void 0 !== arguments[2] && arguments[2], !(arguments.length > 3) || void 0 === arguments[3] || arguments[3]),
            r = arguments.length > 4 ? arguments[4] : void 0;
        return (
            n && e.length > 0 && V.Z.requestMembers(null, e, t),
            eA({
                query: e,
                members: d()(B.default.getUsers()).values().value(),
                limit: t,
                filter: r
            })
        );
    },
    queryChannels(e) {
        let t,
            { query: n, guildId: r, limit: i = z.rnv, fuzzy: a = !0, filter: o = ed, type: s = b.sH, allowEmptyQueries: l = !1, requireVocalConnectAccess: u = !0, boosters: c = {}, allowSnowflake: _ } = e,
            h = eR(n, l);
        t =
            null != r
                ? d()(b.ZP.getChannels(r)[s])
                      .map((e) => e.channel)
                      .concat(O.Z.computeAllActiveJoinedThreads(r))
                      .value()
                : d()(L.Z.loadAllGuildAndPrivateChannelsFromDisk()).values().concat(O.Z.computeAllActiveJoinedThreads()).value();
        let p = {},
            m = [];
        for (let e of t) {
            if (!eN(s, e.type, null != r) || ((0, C.Km)(e.type) && !U.Z.can(u ? e.accessPermissions : z.Plq.VIEW_CHANNEL, e)) || !o(e)) continue;
            let t = [...h],
                i = e.name.toLocaleLowerCase(),
                l = _ && n === e.id,
                d = l ? J : eC(i, t, a);
            if (0 !== d) {
                if (t.length > 0) {
                    for (let n of [ey(e, p), eL(e, p)]) {
                        if (null == n || '' === n) continue;
                        let e = eC(n, t, !1);
                        0 !== e && (d += 0.5 * e);
                    }
                    d = Math.min(ee - er, d);
                }
                if (0 === d || t.length > 1 || (1 === t.length && !t[0].isFullMatch && !l)) continue;
                eO(s, e.type) && (d = Math.max(d - ei, er / 2)),
                    m.push({
                        type: (0, C.bw)(e.type) ? q.h8.VOICE_CHANNEL : q.h8.TEXT_CHANNEL,
                        record: e,
                        score: em(d, c[e.id]),
                        comparator: (0, f.F6)(e, B.default, x.Z),
                        sortable: i
                    });
            }
        }
        return m.sort(E.Z), null != i && m.length > i && (m.length = i), m;
    },
    queryGuilds(e) {
        let { query: t, limit: n = 10, fuzzy: r = !0, filter: i = ed, boosters: a = {} } = e,
            o = '' === t ? '' : t.toLocaleLowerCase(),
            s = {
                exactQuery: RegExp('^'.concat(Y.Z.escape(o)), 'i'),
                containQuery: RegExp(Y.Z.escape(o), 'i'),
                queryLower: o
            },
            l = [];
        for (let e of d()(M.Z.getGuilds()).values().value()) {
            if (!i(e)) continue;
            let t = e.name.toLocaleLowerCase(),
                n = eg(t, s, r);
            n > 0 &&
                l.push({
                    type: q.h8.GUILD,
                    record: e,
                    score: em(n, a[e.id]),
                    comparator: e.toString(),
                    sortable: t
                });
        }
        return l.sort(E.Z), l.length > n && (l.length = n), l;
    },
    queryGroupDMs(e) {
        let { query: t, limit: n = 10, fuzzy: r = !0, filter: i = ed, boosters: a = {} } = e,
            o = (0, W._I)((0, W.Fv)(t.toLocaleLowerCase())),
            s = {
                exactQuery: RegExp('^'.concat(Y.Z.escape(o)), 'i'),
                containQuery: RegExp(Y.Z.escape(o), 'i'),
                queryLower: o
            },
            l = d()(L.Z.getMutablePrivateChannels()).values().value(),
            u = [];
        for (let e of l) {
            if (!e.isMultiUserDM() || !i(e)) continue;
            let t = (0, f.F6)(e, B.default, x.Z).toLocaleLowerCase(),
                n = (0, W._I)((0, W.Fv)(t)),
                o = eg(n, s, r);
            o > 0 &&
                u.push({
                    type: q.h8.GROUP_DM,
                    record: e,
                    score: em(o, a[e.id]),
                    comparator: (0, f.F6)(e, B.default, x.Z),
                    sortable: n
                });
        }
        return u.sort(E.Z), u.length > n && (u.length = n), u;
    },
    queryApplications(e) {
        let { query: t, limit: n = 10, fuzzy: r = !0, filter: i = ed } = e,
            a = t.toLocaleLowerCase(),
            o = {
                exactQuery: RegExp('^'.concat(Y.Z.escape(a)), 'i'),
                containQuery: RegExp(Y.Z.escape(a), 'i'),
                queryLower: a
            },
            s = ep(),
            l = [];
        for (let { application: e } of s) {
            if (!i(e)) continue;
            let t = e.name.toLocaleLowerCase(),
                n = eg(t, o, r);
            n > 0 &&
                l.push({
                    type: q.h8.APPLICATION,
                    record: e,
                    score: n,
                    comparator: e.name,
                    sortable: t
                });
        }
        return l.sort(E.Z), l.length > n && (l.length = n), l;
    },
    queryInAppNavigations(e) {
        let { query: t, limit: n = 10, fuzzy: r = !0 } = e,
            i = t.toLocaleLowerCase(),
            a = {
                exactQuery: RegExp('^'.concat(Y.Z.escape(i)), 'i'),
                containQuery: RegExp(Y.Z.escape(i), 'i'),
                queryLower: i
            },
            o = {
                [_.Ky.SHOP]: X.Z.Messages.COLLECTIBLES_SHOP,
                [_.Ky.NITRO_HOME]: X.Z.Messages.PREMIUM,
                [_.Ky.QUEST_HOME]: X.Z.Messages.QUESTS
            },
            s = [];
        for (let e in o) {
            let t = _.Ky[e],
                n = o[t].toLocaleLowerCase(),
                i = eg(n, a, r);
            i > 0 &&
                s.push({
                    type: q.h8.IN_APP_NAVIGATION,
                    record: _.FL.fromType(t),
                    score: em(i),
                    comparator: n,
                    sortable: n
                });
        }
        return s.sort(E.Z), s.length > n && (s.length = n), s;
    },
    querySKUs(e) {
        let { query: t, limit: n = 10, fuzzy: r = !0, filter: i = ed } = e,
            a = t.toLocaleLowerCase(),
            o = {
                exactQuery: RegExp('^'.concat(Y.Z.escape(a)), 'i'),
                containQuery: RegExp(Y.Z.escape(a), 'i'),
                queryLower: a
            },
            s = d()(F.Z.getSKUs()).values().value(),
            l = [];
        for (let e of s)
            if (e.type === z.epS.DURABLE_PRIMARY && i(e)) {
                let t = e.name.toLocaleLowerCase(),
                    n = eg(t, o, r);
                n > 0 &&
                    l.push({
                        type: q.h8.SKU,
                        record: e,
                        score: n,
                        comparator: e.name,
                        sortable: t
                    });
            }
        return l.sort(E.Z), l.length > n && (l.length = n), l;
    },
    getRecentlyTalked: eb,
    queryMentionResults(e) {
        let { query: t, channel: n, canMentionEveryone: r = !1, canMentionHere: i = !0, canMentionUsers: a = !0, canMentionRoles: o = !0, includeAllGuildUsers: s = !1, includeNonMentionableRoles: l = !1, checkRecentlyTalkedOnEmptyQuery: c = !0, limit: _ = z.rnv, request: E, allowSnowflake: f = !1 } = e,
            h = a
                ? (s && null != n.guild_id
                      ? this.queryGuildUsers({
                            guildId: n.guild_id,
                            query: t,
                            limit: _,
                            checkRecentlyTalkedOnEmptyQuery: c,
                            request: E,
                            allowSnowflake: f
                        })
                      : this.queryChannelUsers({
                            channelId: n.id,
                            query: t,
                            limit: _,
                            checkRecentlyTalkedOnEmptyQuery: c,
                            allowSnowflake: f
                        })
                  ).map((e) => {
                      let { record: t, score: r, comparator: i } = e;
                      return {
                          user: t,
                          score: r,
                          comparator: i,
                          nick: D.ZP.getNick(n.guild_id, t.id),
                          status: w.Z.getStatus(t.id)
                      };
                  })
                : [],
            p = h.length,
            m = t.toLowerCase(),
            I = [];
        if (p < _ && o) {
            let e = n.getGuildId(),
                t = M.Z.getGuild(e);
            null != t &&
                (d()(M.Z.getRoles(t.id))
                    .filter((t) => {
                        let { mentionable: n, name: i, id: a } = t;
                        return (n || r || l) && (u()(m, i.toLowerCase()) || (f && m === a)) && a !== j.default.castGuildIdAsEveryoneGuildRoleId(e);
                    })
                    .take(_ - p)
                    .forEach((e) => {
                        I.push(e);
                    }),
                (p += I.length));
        }
        let T = [];
        return (
            !n.isPrivate() && r && o && (p < _ && u()(m, ef().test) && (T.push(ef()), (p += 1)), i && p < _ && u()(m, eh().test) && T.push(eh())),
            {
                users: h,
                globals: T,
                roles: I
            }
        );
    },
    queryGuildMentionResults(e) {
        let { query: t, guildId: n, canMentionEveryone: r = !1, canMentionUsers: i = !0, canMentionRoles: a = !0, canMentionNonMentionableRoles: o = !1 } = e,
            s = i
                ? this.queryGuildUsers({
                      guildId: n,
                      query: t
                  }).map((e) => ({
                      ...e,
                      status: w.Z.getStatus(e.record.id)
                  }))
                : [],
            l = s.length,
            c = t.toLowerCase(),
            _ = [];
        if (l < z.rnv && a) {
            let e = M.Z.getGuild(n);
            null != e &&
                (d()(M.Z.getRoles(e.id))
                    .filter((e) => {
                        let { mentionable: t, name: i, id: a } = e;
                        return (t || r || o) && u()(c, i.toLowerCase()) && (0, h.Gy)(n, a);
                    })
                    .take(z.rnv - l)
                    .forEach((e) => {
                        _.push(e);
                    }),
                (l += _.length));
        }
        let E = [];
        return (
            r && a && (l < z.rnv && u()(c, ef().test) && (E.push(ef()), (l += 1)), l < z.rnv && u()(c, eh().test) && E.push(eh())),
            {
                users: s,
                globals: E,
                roles: _
            }
        );
    },
    queryChoice(e) {
        let { query: t, choices: n, limit: r = 10, fuzzy: i = !0 } = e,
            a = t.toLocaleLowerCase(),
            o = RegExp('^'.concat(Y.Z.escape(a)), 'i'),
            s = RegExp(Y.Z.escape(a), 'i'),
            l = d()(n)
                .map((e, t) => {
                    let n = eg(
                        e.displayName.toLocaleLowerCase(),
                        {
                            exactQuery: o,
                            containQuery: s,
                            queryLower: a
                        },
                        i
                    );
                    return n > 0
                        ? {
                              choice: e,
                              score: n,
                              originalIndex: t
                          }
                        : null;
                })
                .filter(Z.lm)
                .sortBy((e) => -1 * e.score);
        return null !== r && (l = l.take(r)), l.value();
    },
    queryStaticRouteChannels(e) {
        let { query: t, guild: n } = e,
            r = t.toLocaleLowerCase(),
            i = {
                exactQuery: RegExp('^'.concat(Y.Z.escape(r)), 'i'),
                containQuery: RegExp(Y.Z.escape(r), 'i'),
                queryLower: r
            },
            a = (0, g.s)(n.id) && !n.hasFeature(z.oNc.HUB),
            o = n.hasFeature(z.oNc.COMMUNITY),
            s = (0, T.t)(n) && n.hasFeature(z.oNc.COMMUNITY),
            l = [
                {
                    id: Q.HY.SERVER_GUIDE,
                    name: X.Z.Messages.SERVER_GUIDE
                },
                {
                    id: Q.HY.CHANNEL_BROWSER,
                    name: X.Z.Messages.CHANNEL_BROWSER_TITLE
                },
                {
                    id: Q.HY.CUSTOMIZE_COMMUNITY,
                    name: X.Z.Messages.CHANNELS_AND_ROLES
                }
            ],
            u = [];
        for (let e of l) {
            if ((e.id !== Q.HY.SERVER_GUIDE || !!a) && (e.id !== Q.HY.CHANNEL_BROWSER || !!o) && (e.id !== Q.HY.CUSTOMIZE_COMMUNITY || !!s))
                eg(e.name.toLocaleLowerCase(), i, !1) > 0 &&
                    u.push(
                        new C.nl({
                            id: e.id,
                            name: e.name,
                            type: z.d4z.UNKNOWN,
                            guild_id: n.id
                        })
                    );
        }
        return u;
    },
    queryChannelResults(e) {
        let { query: t, channel: n, type: r = b.sH, channelTypes: i } = e;
        return {
            channels: this.queryChannels({
                query: t,
                guildId: n.getGuildId(),
                limit: void 0,
                fuzzy: void 0,
                filter: (e) => null == i || i.includes(e.type),
                type: r,
                allowEmptyQueries: !0
            }).map((e) => e.record)
        };
    },
    queryApplicationCommandChannelResults(e) {
        let { query: t, channel: n, channelTypes: r, limit: i = z.rnv, allowSnowflake: a } = e;
        if (null == n.guild_id) {
            let e = [];
            return (null == r || r.includes(n.type)) && e.push(n), { channels: e };
        }
        let o = [];
        for (let e of eI)
            o = o.concat(
                this.queryChannels({
                    query: t,
                    guildId: n.guild_id,
                    limit: i,
                    fuzzy: !0,
                    filter: (e) => null == r || r.includes(e.type),
                    type: e,
                    allowEmptyQueries: !0,
                    requireVocalConnectAccess: !1,
                    allowSnowflake: a
                })
            );
        return (
            (o = o
                .filter((e) => {
                    let { record: t } = e;
                    return 'null' !== t.id;
                })
                .sort(p.Z)),
            null != i && o.length > i && (o = o.slice(0, i)),
            { channels: o.map((e) => e.record) }
        );
    },
    queryChoiceResults(e) {
        let { query: t, choices: n } = e;
        return {
            choices: this.queryChoice({
                query: t,
                choices: n,
                limit: null
            }).map((e) => e.choice)
        };
    },
    queryEmojiResults(e) {
        let { query: t, channel: n, intention: r, maxCount: i = z.rnv, matchComparator: a } = e;
        return (
            R.DZ.loadIfNecessary(),
            {
                emojis: I.ZP.searchWithoutFetchingLatest({
                    channel: n,
                    query: t,
                    count: i,
                    intention: r,
                    matchComparator: a
                })
            }
        );
    },
    queryStickers(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            [n, r] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [null, ed],
            { stickerMetadata: i } = v.Z,
            a = B.default.getCurrentUser(),
            o = new Set(),
            s = [];
        for (let l of (R.DZ.loadIfNecessary(), e)) {
            if ('' === l) continue;
            let e = l.toLocaleLowerCase(),
                u = (0, W._I)(e),
                c = RegExp('^'.concat(Y.Z.escape(u)), 'i'),
                d = RegExp(''.concat(Y.Z.escape(u)), 'i');
            i.forEach((i, l) => {
                let u = 0,
                    _ = null,
                    E = v.Z.getStickerById(l);
                if (null == E || !r(E, (0, S.cO)(E, a, n))) return;
                for (let n of i) {
                    let { type: r, value: i } = n,
                        a = ev(r),
                        o = 0;
                    t ? (i === e ? (o = J * a) : c.test(i) ? (o = ee * a) : (r === N.MO.GUILD_NAME || r === N.MO.PACK_NAME || r === N.MO.STICKER_NAME) && d.test(i) && (o = et * a)) : i === e && ((o = J * a), (_ = i)), o > u && ((u = o), (_ = i));
                }
                let f = A.Z.stickerFrecencyWithoutFetchingLatest.getScore(l);
                null != f && (u *= f / 100),
                    u > 0 &&
                        null != _ &&
                        !o.has(E.id) &&
                        (o.add(E.id),
                        s.push({
                            sticker: E,
                            comparator: _,
                            score: u
                        }));
            });
        }
        return (
            0 ===
                (s = d()(s)
                    .sortBy((e) => -1 * e.score)
                    .value()).length && (s = eE),
            s
        );
    },
    matchSentinel: (e, t, n) => !e_.test(t) && e === n,
    hasSameRoleAsUsername(e, t) {
        if (!t.isPomelo()) return !1;
        let n = M.Z.getGuild(e.getGuildId());
        for (let { name: e } of Object.values(null != n ? M.Z.getRoles(n.id) : {})) if (t.username.startsWith(e.toLowerCase())) return !0;
        return !1;
    }
};
