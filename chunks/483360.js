let r;
n.d(t, {
    k1: function () {
        return es;
    }
}),
    n(653041),
    n(733860),
    n(757143),
    n(47120),
    n(724458);
var i = n(658722),
    a = n.n(i),
    s = n(392711),
    o = n.n(s),
    l = n(815372),
    u = n(620490),
    c = n(933557),
    d = n(605436),
    f = n(565924),
    _ = n(710845),
    p = n(339085),
    h = n(31445),
    m = n(931261),
    g = n(277078),
    E = n(208049),
    v = n(763296),
    I = n(421673),
    T = n(285651),
    b = n(822179),
    S = n(926491),
    y = n(373228),
    A = n(601070),
    N = n(675478),
    C = n(131704),
    R = n(598077),
    O = n(592125),
    D = n(984933),
    L = n(271383),
    x = n(430824),
    w = n(375954),
    P = n(496675),
    M = n(158776),
    k = n(699516),
    U = n(944486),
    B = n(914010),
    G = n(594174),
    Z = n(55563),
    F = n(823379),
    V = n(892880),
    j = n(700785),
    H = n(226951),
    Y = n(709054),
    W = n(624138),
    K = n(51144),
    z = n(981631),
    q = n(727785),
    Q = n(176505),
    X = n(388032);
let J = new _.Z('AutocompleteUtils'),
    $ = () => !0,
    ee = /(\t|\s)/,
    et = [],
    en = (r = n(786074).Z).MENTION_EVERYONE,
    er = r.MENTION_HERE,
    ei = r.LAUNCHABLE_APPLICATIONS;
function ea() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
        t = arguments.length > 1 ? arguments[1] : void 0;
    return 1000 * e * (null != t ? t : 1);
}
let es = [D.sH, D.Zb, z.d4z.GUILD_CATEGORY];
function eo(e, t) {
    let { exactQuery: n, containQuery: r, queryLower: i, isFullMatch: s } = t,
        o = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    try {
        var l, u;
        if (n.test(e)) {
            if (e.toLocaleLowerCase() === i) return 10;
            if (!1 === s) {
                let t = i.length / e.length;
                return Math.max(1, 7 * t);
            }
            return 7;
        }
        if (r.test(e)) return 5;
        if (((l = i), (u = e), l.split(/(?:,| )+/).every((e) => RegExp(H.Z.escape(e), 'i').test(u)))) return 3;
        if (o && a()(i, e)) return 1;
    } catch (e) {
        J.error(e);
    }
    return 0;
}
function el(e) {
    return (null == e ? void 0 : e.joinedAt) != null && !e.isPending;
}
function eu(e) {
    let { query: t, members: n, limit: r, filter: i, allowSnowflake: s } = e,
        o = G.default.getUsers(),
        l = B.Z.getGuildId(),
        c = t.toLocaleLowerCase(),
        d = (0, W.Fv)(c),
        f = [],
        _ = [],
        p = n.length,
        h = 0,
        m = 0;
    for (; h < p; ) {
        var g, E, v, I, T, b, S, y, A;
        let e, r;
        let u = n[h];
        u instanceof R.Z ? ((r = u), (e = null === (E = L.ZP.getNick(l, r.id)) || void 0 === E ? void 0 : E.toLocaleLowerCase())) : ((e = null === (v = u.nick) || void 0 === v ? void 0 : v.toLocaleLowerCase()), (r = o[u.userId]));
        let p = null === (g = K.ZP.getGlobalName(r)) || void 0 === g ? void 0 : g.toLocaleLowerCase();
        if (null != r && (null == i || i(r))) {
            let n = r.username.toLocaleLowerCase(),
                i = (0, W._I)(n),
                o = (0, W.Fv)(i),
                l = null != e ? (0, W._I)(e) : null,
                u = null != l ? (0, W.Fv)(l) : null,
                h = null != p ? (0, W._I)(p) : null,
                g = null != h ? (0, W.Fv)(h) : null;
            (s && t === r.id) || n.substring(0, c.length) === c || i.substring(0, c.length) === c || (null == e ? void 0 : e.substring(0, c.length)) === c || (null == l ? void 0 : l.substring(0, c.length)) === c || (null == p ? void 0 : p.substring(0, c.length)) === c || (null == h ? void 0 : h.substring(0, c.length)) === c
                ? f.push({
                      type: q.h8.USER,
                      record: r,
                      score: 10,
                      comparator: null !== (I = null != p ? p : e) && void 0 !== I ? I : n,
                      sortable: null !== (T = null != h ? h : l) && void 0 !== T ? T : i
                  })
                : o.substring(0, d.length) === d || (null == u ? void 0 : u.substring(0, d.length)) === d || (null == g ? void 0 : g.substring(0, d.length)) === d
                  ? f.push({
                        type: q.h8.USER,
                        record: r,
                        score: 1,
                        comparator: null !== (b = null != p ? p : e) && void 0 !== b ? b : n,
                        sortable: null !== (S = null != h ? h : l) && void 0 !== S ? S : i
                    })
                  : m < 50 &&
                    (a()(c, i) || a()(d, o) || (null != l && a()(c, l)) || (null != u && a()(d, u)) || (null != h && a()(c, h)) || (null != g && a()(d, g))) &&
                    (_.push({
                        type: q.h8.USER,
                        record: r,
                        score: 1,
                        comparator: null !== (y = null != p ? p : e) && void 0 !== y ? y : n,
                        sortable: null !== (A = null != h ? h : l) && void 0 !== A ? A : i
                    }),
                    (m += 1));
        }
        h += 1;
    }
    return f.sort(u.Z), f.length < r && (_.sort(u.Z), (f = f.concat(_.slice(0, Math.max(0, r - f.length))))), f.length > r && (f.length = r), f;
}
function ec(e, t, n) {
    let r = 0,
        i = null;
    for (let a of t) {
        let t = eo(e, a, n);
        t > r && ((r = t), (i = a));
    }
    return null != i && (i.isFullMatch ? (t.length = 0) : t.splice(t.indexOf(i), 1)), r;
}
function ed(e, t) {
    let n = O.Z.getChannel(e);
    return null == e || null == n
        ? []
        : o()(w.Z.getMessages(e).toArray())
              .reverse()
              .uniqBy((e) => e.author.id)
              .map((e) => G.default.getUser(e.author.id))
              .filter((e) => {
                  if (null == e || e.isNonUserBot()) return !1;
                  let t = n.getGuildId();
                  return null == t || el(L.ZP.getMember(t, e.id));
              })
              .map((e) => {
                  var t;
                  let r = n.getGuildId(),
                      i = null != r ? L.ZP.getMember(r, e.id) : null;
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
        return eu({
            query: t,
            members: k.Z.getFriendIDs()
                .map((e) => G.default.getUser(e))
                .filter(F.lm),
            limit: n,
            filter: i
        });
    },
    queryDMUsers(e) {
        let { query: t, limit: n = 10, filter: r } = e;
        return eu({
            query: t,
            members: O.Z.getDMUserIds()
                .map((e) => G.default.getUser(e))
                .filter(F.lm),
            limit: n,
            filter: r
        });
    },
    queryChannelUsers(e) {
        let t,
            { channelId: n, query: r, limit: i = 10, request: a = !0, checkRecentlyTalkedOnEmptyQuery: s = !0, allowSnowflake: o = !1 } = e,
            l = O.Z.getChannel(n);
        if (null == l) return [];
        let u = l.isThread() ? O.Z.getChannel(l.parent_id) : null,
            c = null != u ? u : l;
        if (null == c) return [];
        if (c.isPrivate()) {
            t = c.recipients.map((e) => {
                var t;
                return {
                    userId: e,
                    nick: null !== (t = k.Z.getNickname(e)) && void 0 !== t ? t : null
                };
            });
            let e = G.default.getCurrentUser();
            null != e &&
                t.push({
                    userId: e.id,
                    nick: null
                });
        } else {
            if (0 === r.length && s) {
                let e = ed(l.id, i);
                if (e.length > 0) return e;
            }
            (t = L.ZP.getMembers(c.guild_id).filter(el)), a && V.Z.requestMembers(c.guild_id, r, i);
        }
        return eu({
            query: r,
            members: t,
            limit: i,
            filter: (e) =>
                c.isPrivate() ||
                j.BT({
                    permission: z.Plq.VIEW_CHANNEL,
                    user: e,
                    context: c
                }),
            allowSnowflake: o
        });
    },
    queryGuildUsers(e) {
        let { guildId: t, query: n, limit: r = 10, request: i = !0, checkRecentlyTalkedOnEmptyQuery: a = !0, filter: s, allowSnowflake: o } = e;
        if (null == x.Z.getGuild(t)) return [];
        if (0 === n.length && a) {
            let e = ed(U.Z.getChannelId(t), r);
            if (e.length > 0) return e;
        }
        let l = L.ZP.getMembers(t).filter(el);
        return (
            i && n.length > 0 && V.Z.requestMembers(t, n, r),
            eu({
                query: n,
                members: l,
                limit: r,
                filter: s,
                allowSnowflake: o
            })
        );
    },
    queryUsers(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
            n = (arguments.length > 2 && void 0 !== arguments[2] && arguments[2], !(arguments.length > 3) || void 0 === arguments[3] || arguments[3]),
            r = arguments.length > 4 ? arguments[4] : void 0;
        return (
            n && e.length > 0 && V.Z.requestMembers(null, e, t),
            eu({
                query: e,
                members: o()(G.default.getUsers()).values().value(),
                limit: t,
                filter: r
            })
        );
    },
    queryChannels(e) {
        let t,
            { query: n, guildId: r, limit: i = z.rnv, fuzzy: a = !0, filter: s = $, type: l = D.sH, allowEmptyQueries: d = !1, requireVocalConnectAccess: f = !0, boosters: _ = {}, allowSnowflake: p } = e,
            h = (function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = e
                        .split(' ')
                        .filter((e) => '' !== e || t)
                        .map((e) => {
                            let t = e.toLocaleLowerCase();
                            return {
                                queryLower: t,
                                exactQuery: RegExp('^'.concat(H.Z.escape(t)), 'i'),
                                containQuery: RegExp(H.Z.escape(t), 'i'),
                                isFullMatch: !1
                            };
                        });
                if (e.includes(' ')) {
                    let t = e.toLocaleLowerCase();
                    n.unshift({
                        queryLower: t,
                        exactQuery: RegExp('^'.concat(H.Z.escape(t).replace(' ', '( |-)')), 'i'),
                        containQuery: RegExp(H.Z.escape(t).replace(' ', '( |-)'), 'i'),
                        isFullMatch: !0
                    });
                }
                return n;
            })(n, d);
        t =
            null != r
                ? o()(D.ZP.getChannels(r)[l])
                      .map((e) => e.channel)
                      .concat(A.Z.computeAllActiveJoinedThreads(r))
                      .value()
                : o()(O.Z.loadAllGuildAndPrivateChannelsFromDisk()).values().concat(A.Z.computeAllActiveJoinedThreads()).value();
        let m = {},
            g = [];
        for (let e of t) {
            var E, v, I, T, b;
            if (((E = l), (v = e.type), (I = null != r), !(E === v || ((I || (0, C.Km)(v)) && (E === D.sH ? (0, C.r8)(v) || (0, C.bw)(v) : E === D.Zb && (0, C.bw)(v)))) || ((0, C.Km)(e.type) && !P.Z.can(f ? e.accessPermissions : z.Plq.VIEW_CHANNEL, e)) || !s(e))) continue;
            let t = [...h],
                i = e.name.toLocaleLowerCase(),
                o = p && n === e.id,
                u = o ? 10 : ec(i, t, a);
            if (0 !== u) {
                if (t.length > 0) {
                    for (let n of [
                        (function (e, t) {
                            if (null == e.guild_id) return;
                            let n = t[e.guild_id];
                            if (null == n) {
                                var r;
                                n = t[e.guild_id] = null === (r = x.Z.getGuild(e.guild_id)) || void 0 === r ? void 0 : r.toString().toLocaleLowerCase();
                            }
                            return n;
                        })(e, m),
                        (function (e, t) {
                            if (null == e.parent_id) return;
                            let n = t[e.parent_id];
                            if (null == n) {
                                var r;
                                n = t[e.parent_id] = null === (r = O.Z.getChannel(e.parent_id)) || void 0 === r ? void 0 : r.name.toLocaleLowerCase();
                            }
                            return n;
                        })(e, m)
                    ]) {
                        if (null == n || '' === n) continue;
                        let e = ec(n, t, !1);
                        0 !== e && (u += 0.5 * e);
                    }
                    u = Math.min(6, u);
                }
                if (0 === u || t.length > 1 || (1 === t.length && !t[0].isFullMatch && !o)) continue;
                if (((T = l), (b = e.type), T === D.sH && (0, C.bw)(b))) u = Math.max(u - 1, 0.5);
                g.push({
                    type: (0, C.bw)(e.type) ? q.h8.VOICE_CHANNEL : q.h8.TEXT_CHANNEL,
                    record: e,
                    score: ea(u, _[e.id]),
                    comparator: (0, c.F6)(e, G.default, k.Z),
                    sortable: i
                });
            }
        }
        return g.sort(u.Z), null != i && g.length > i && (g.length = i), g;
    },
    queryGuilds(e) {
        let { query: t, limit: n = 10, fuzzy: r = !0, filter: i = $, boosters: a = {} } = e,
            s = '' === t ? '' : t.toLocaleLowerCase(),
            l = {
                exactQuery: RegExp('^'.concat(H.Z.escape(s)), 'i'),
                containQuery: RegExp(H.Z.escape(s), 'i'),
                queryLower: s
            },
            c = [];
        for (let e of o()(x.Z.getGuilds()).values().value()) {
            if (!i(e)) continue;
            let t = e.name.toLocaleLowerCase(),
                n = eo(t, l, r);
            n > 0 &&
                c.push({
                    type: q.h8.GUILD,
                    record: e,
                    score: ea(n, a[e.id]),
                    comparator: e.toString(),
                    sortable: t
                });
        }
        return c.sort(u.Z), c.length > n && (c.length = n), c;
    },
    queryGroupDMs(e) {
        let { query: t, limit: n = 10, fuzzy: r = !0, filter: i = $, boosters: a = {} } = e,
            s = (0, W._I)((0, W.Fv)(t.toLocaleLowerCase())),
            l = {
                exactQuery: RegExp('^'.concat(H.Z.escape(s)), 'i'),
                containQuery: RegExp(H.Z.escape(s), 'i'),
                queryLower: s
            },
            d = o()(O.Z.getMutablePrivateChannels()).values().value(),
            f = [];
        for (let e of d) {
            if (!e.isMultiUserDM() || !i(e)) continue;
            let t = (0, c.F6)(e, G.default, k.Z).toLocaleLowerCase(),
                n = (0, W._I)((0, W.Fv)(t)),
                s = eo(n, l, r);
            s > 0 &&
                f.push({
                    type: q.h8.GROUP_DM,
                    record: e,
                    score: ea(s, a[e.id]),
                    comparator: (0, c.F6)(e, G.default, k.Z),
                    sortable: n
                });
        }
        return f.sort(u.Z), f.length > n && (f.length = n), f;
    },
    queryApplications(e) {
        let { query: t, limit: n = 10, fuzzy: r = !0, filter: i = $ } = e,
            a = t.toLocaleLowerCase(),
            s = {
                exactQuery: RegExp('^'.concat(H.Z.escape(a)), 'i'),
                containQuery: RegExp(H.Z.escape(a), 'i'),
                queryLower: a
            },
            o = ei(),
            l = [];
        for (let { application: e } of o) {
            if (!i(e)) continue;
            let t = e.name.toLocaleLowerCase(),
                n = eo(t, s, r);
            n > 0 &&
                l.push({
                    type: q.h8.APPLICATION,
                    record: e,
                    score: n,
                    comparator: e.name,
                    sortable: t
                });
        }
        return l.sort(u.Z), l.length > n && (l.length = n), l;
    },
    queryInAppNavigations(e) {
        let { query: t, limit: n = 10, fuzzy: r = !0 } = e,
            i = t.toLocaleLowerCase(),
            a = {
                exactQuery: RegExp('^'.concat(H.Z.escape(i)), 'i'),
                containQuery: RegExp(H.Z.escape(i), 'i'),
                queryLower: i
            },
            s = {
                [l.Ky.SHOP]: [X.intl.string(X.t.pWG4zc)],
                [l.Ky.NITRO_HOME]: [X.intl.string(X.t.Ipxkoq)],
                [l.Ky.QUEST_HOME]: [X.intl.string(X.t.JALI2N)],
                [l.Ky.APPS_HOME]: [X.intl.string(X.t.PHjkRE), X.intl.string(X.t.AKcFUl)]
            },
            o = [];
        for (let e in s) {
            let t = l.Ky[e];
            for (let e of s[t]) {
                let n = e.toLocaleLowerCase(),
                    i = eo(n, a, r);
                i > 0 &&
                    o.push({
                        type: q.h8.IN_APP_NAVIGATION,
                        record: l.FL.fromType(t),
                        score: ea(i),
                        comparator: n,
                        sortable: n
                    });
            }
        }
        return o.sort(u.Z), o.length > n && (o.length = n), o;
    },
    querySKUs(e) {
        let { query: t, limit: n = 10, fuzzy: r = !0, filter: i = $ } = e,
            a = t.toLocaleLowerCase(),
            s = {
                exactQuery: RegExp('^'.concat(H.Z.escape(a)), 'i'),
                containQuery: RegExp(H.Z.escape(a), 'i'),
                queryLower: a
            },
            l = o()(Z.Z.getSKUs()).values().value(),
            c = [];
        for (let e of l)
            if (e.type === z.epS.DURABLE_PRIMARY && i(e)) {
                let t = e.name.toLocaleLowerCase(),
                    n = eo(t, s, r);
                n > 0 &&
                    c.push({
                        type: q.h8.SKU,
                        record: e,
                        score: n,
                        comparator: e.name,
                        sortable: t
                    });
            }
        return c.sort(u.Z), c.length > n && (c.length = n), c;
    },
    getRecentlyTalked: ed,
    queryMentionResults(e) {
        let { query: t, channel: n, canMentionEveryone: r = !1, canMentionHere: i = !0, canMentionUsers: s = !0, canMentionRoles: l = !0, includeAllGuildUsers: u = !1, includeNonMentionableRoles: c = !1, checkRecentlyTalkedOnEmptyQuery: d = !0, limit: f = z.rnv, request: _, allowSnowflake: p = !1 } = e,
            h = s
                ? (u && null != n.guild_id
                      ? this.queryGuildUsers({
                            guildId: n.guild_id,
                            query: t,
                            limit: f,
                            checkRecentlyTalkedOnEmptyQuery: d,
                            request: _,
                            allowSnowflake: p
                        })
                      : this.queryChannelUsers({
                            channelId: n.id,
                            query: t,
                            limit: f,
                            checkRecentlyTalkedOnEmptyQuery: d,
                            allowSnowflake: p
                        })
                  ).map((e) => {
                      let { record: t, score: r, comparator: i } = e;
                      return {
                          user: t,
                          score: r,
                          comparator: i,
                          nick: L.ZP.getNick(n.guild_id, t.id),
                          status: M.Z.getStatus(t.id)
                      };
                  })
                : [],
            m = h.length,
            g = t.toLowerCase(),
            E = [];
        if (m < f && l) {
            let e = n.getGuildId(),
                t = x.Z.getGuild(e);
            null != t &&
                (o()(x.Z.getRoles(t.id))
                    .filter((t) => {
                        let { mentionable: n, name: i, id: s } = t;
                        return (n || r || c) && (a()(g, i.toLowerCase()) || (p && g === s)) && s !== Y.default.castGuildIdAsEveryoneGuildRoleId(e);
                    })
                    .take(f - m)
                    .forEach((e) => {
                        E.push(e);
                    }),
                (m += E.length));
        }
        let v = [];
        return (
            !n.isPrivate() && r && l && (m < f && a()(g, en().test) && (v.push(en()), (m += 1)), i && m < f && a()(g, er().test) && v.push(er())),
            {
                users: h,
                globals: v,
                roles: E
            }
        );
    },
    queryGuildMentionResults(e) {
        let { query: t, guildId: n, canMentionEveryone: r = !1, canMentionUsers: i = !0, canMentionRoles: s = !0, canMentionNonMentionableRoles: l = !1 } = e,
            u = i
                ? this.queryGuildUsers({
                      guildId: n,
                      query: t
                  }).map((e) => ({
                      ...e,
                      status: M.Z.getStatus(e.record.id)
                  }))
                : [],
            c = u.length,
            f = t.toLowerCase(),
            _ = [];
        if (c < z.rnv && s) {
            let e = x.Z.getGuild(n);
            null != e &&
                (o()(x.Z.getRoles(e.id))
                    .filter((e) => {
                        let { mentionable: t, name: i, id: s } = e;
                        return (t || r || l) && a()(f, i.toLowerCase()) && (0, d.Gy)(n, s);
                    })
                    .take(z.rnv - c)
                    .forEach((e) => {
                        _.push(e);
                    }),
                (c += _.length));
        }
        let p = [];
        return (
            r && s && (c < z.rnv && a()(f, en().test) && (p.push(en()), (c += 1)), c < z.rnv && a()(f, er().test) && p.push(er())),
            {
                users: u,
                globals: p,
                roles: _
            }
        );
    },
    queryChoice(e) {
        let { query: t, choices: n, limit: r = 10, fuzzy: i = !0 } = e,
            a = t.toLocaleLowerCase(),
            s = RegExp('^'.concat(H.Z.escape(a)), 'i'),
            l = RegExp(H.Z.escape(a), 'i'),
            u = o()(n)
                .map((e, t) => {
                    let n = eo(
                        e.displayName.toLocaleLowerCase(),
                        {
                            exactQuery: s,
                            containQuery: l,
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
                .filter(F.lm)
                .sortBy((e) => -1 * e.score);
        return null !== r && (u = u.take(r)), u.value();
    },
    queryStaticRouteChannels(e) {
        let { query: t, guild: n } = e,
            r = t.toLocaleLowerCase(),
            i = {
                exactQuery: RegExp('^'.concat(H.Z.escape(r)), 'i'),
                containQuery: RegExp(H.Z.escape(r), 'i'),
                queryLower: r
            },
            a = (0, m.s)(n.id) && !n.hasFeature(z.oNc.HUB),
            s = n.hasFeature(z.oNc.COMMUNITY),
            o = (0, h.t)(n) && n.hasFeature(z.oNc.COMMUNITY),
            l = [
                {
                    id: Q.HY.SERVER_GUIDE,
                    name: X.intl.string(X.t.VbpLyc)
                },
                {
                    id: Q.HY.CHANNEL_BROWSER,
                    name: X.intl.string(X.t.et6wam)
                },
                {
                    id: Q.HY.CUSTOMIZE_COMMUNITY,
                    name: X.intl.string(X.t.h9mGOD)
                }
            ],
            u = [];
        for (let e of l) {
            if ((e.id !== Q.HY.SERVER_GUIDE || !!a) && (e.id !== Q.HY.CHANNEL_BROWSER || !!s) && (e.id !== Q.HY.CUSTOMIZE_COMMUNITY || !!o))
                eo(e.name.toLocaleLowerCase(), i, !1) > 0 &&
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
        let { query: t, channel: n, type: r = D.sH, channelTypes: i } = e;
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
        let s = [];
        for (let e of es)
            s = s.concat(
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
            (s = s
                .filter((e) => {
                    let { record: t } = e;
                    return 'null' !== t.id;
                })
                .sort(f.Z)),
            null != i && s.length > i && (s = s.slice(0, i)),
            { channels: s.map((e) => e.record) }
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
            N.DZ.loadIfNecessary(),
            {
                emojis: p.ZP.searchWithoutFetchingLatest({
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
            [n, r] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [null, $],
            { stickerMetadata: i } = S.Z,
            a = G.default.getCurrentUser(),
            s = new Set(),
            l = [];
        for (let o of (N.DZ.loadIfNecessary(), e)) {
            if ('' === o) continue;
            let e = o.toLocaleLowerCase(),
                u = (0, W._I)(e),
                c = RegExp('^'.concat(H.Z.escape(u)), 'i'),
                d = RegExp(''.concat(H.Z.escape(u)), 'i');
            i.forEach((i, o) => {
                let u = 0,
                    f = null,
                    _ = S.Z.getStickerById(o);
                if (null == _ || !r(_, (0, T.cO)(_, a, n))) return;
                for (let n of i) {
                    let { type: r, value: i } = n,
                        a = (function (e) {
                            switch (e) {
                                case y.MO.STICKER_NAME:
                                    return 11;
                                case y.MO.CORRELATED_EMOJI:
                                    return 6;
                                case y.MO.TAG:
                                    return 1;
                                case y.MO.GUILD_NAME:
                                case y.MO.PACK_NAME:
                                    return 8;
                                default:
                                    return 1;
                            }
                        })(r),
                        s = 0;
                    t ? (i === e ? (s = 10 * a) : c.test(i) ? (s = 7 * a) : (r === y.MO.GUILD_NAME || r === y.MO.PACK_NAME || r === y.MO.STICKER_NAME) && d.test(i) && (s = 5 * a)) : i === e && ((s = 10 * a), (f = i)), s > u && ((u = s), (f = i));
                }
                let p = b.Z.stickerFrecencyWithoutFetchingLatest.getScore(o);
                null != p && (u *= p / 100),
                    u > 0 &&
                        null != f &&
                        !s.has(_.id) &&
                        (s.add(_.id),
                        l.push({
                            sticker: _,
                            comparator: f,
                            score: u
                        }));
            });
        }
        return (
            0 ===
                (l = o()(l)
                    .sortBy((e) => -1 * e.score)
                    .value()).length && (l = et),
            l
        );
    },
    querySoundmoji(e, t) {
        let n = G.default.getCurrentUser();
        !v.Z.isFetching() && !v.Z.hasFetchedAllSounds() && (0, E.w)(), N.DZ.loadIfNecessary();
        let r = v.Z.getSounds()
            .values()
            .reduce(
                (e, n) => (
                    n.forEach((n) => {
                        (0, g.Z)(n, null == t ? void 0 : t.id) && e.push(n);
                    }),
                    e
                ),
                []
            );
        return (0, I.cK)(e, r, n, t);
    },
    matchSentinel: (e, t, n) => !ee.test(t) && e === n,
    hasSameRoleAsUsername(e, t) {
        if (!t.isPomelo()) return !1;
        let n = x.Z.getGuild(e.getGuildId());
        for (let { name: e } of Object.values(null != n ? x.Z.getRoles(n.id) : {})) if (t.username.startsWith(e.toLowerCase())) return !0;
        return !1;
    }
};
