let r;
n.d(t, {
    k1: function () {
        return en;
    }
}),
    n(653041),
    n(733860),
    n(757143),
    n(47120);
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
    h = n(339085),
    p = n(31445),
    m = n(931261),
    g = n(285651),
    E = n(822179),
    v = n(926491),
    I = n(373228),
    S = n(601070),
    b = n(675478),
    T = n(131704),
    y = n(598077),
    A = n(592125),
    N = n(984933),
    C = n(271383),
    R = n(430824),
    O = n(375954),
    D = n(496675),
    L = n(158776),
    x = n(699516),
    w = n(944486),
    M = n(914010),
    P = n(594174),
    k = n(55563),
    U = n(823379),
    G = n(892880),
    B = n(700785),
    Z = n(226951),
    F = n(709054),
    V = n(624138),
    H = n(51144),
    j = n(981631),
    Y = n(727785),
    W = n(176505),
    K = n(388032);
let z = new _.Z('AutocompleteUtils'),
    q = () => !0,
    Q = /(\t|\s)/,
    X = [],
    J = (r = n(786074).Z).MENTION_EVERYONE,
    $ = r.MENTION_HERE,
    ee = r.LAUNCHABLE_APPLICATIONS;
function et() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
        t = arguments.length > 1 ? arguments[1] : void 0;
    return 1000 * e * (null != t ? t : 1);
}
let en = [N.sH, N.Zb, j.d4z.GUILD_CATEGORY];
function er(e, t) {
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
        if (((l = i), (u = e), l.split(/(?:,| )+/).every((e) => RegExp(Z.Z.escape(e), 'i').test(u)))) return 3;
        if (o && a()(i, e)) return 1;
    } catch (e) {
        z.error(e);
    }
    return 0;
}
function ei(e) {
    return (null == e ? void 0 : e.joinedAt) != null && !e.isPending;
}
function ea(e) {
    let { query: t, members: n, limit: r, filter: i, allowSnowflake: s } = e,
        o = P.default.getUsers(),
        l = M.Z.getGuildId(),
        c = t.toLocaleLowerCase(),
        d = (0, V.Fv)(c),
        f = [],
        _ = [],
        h = n.length,
        p = 0,
        m = 0;
    for (; p < h; ) {
        var g, E, v, I, S, b, T, A, N;
        let e, r;
        let u = n[p];
        u instanceof y.Z ? ((r = u), (e = null === (E = C.ZP.getNick(l, r.id)) || void 0 === E ? void 0 : E.toLocaleLowerCase())) : ((e = null === (v = u.nick) || void 0 === v ? void 0 : v.toLocaleLowerCase()), (r = o[u.userId]));
        let h = null === (g = H.ZP.getGlobalName(r)) || void 0 === g ? void 0 : g.toLocaleLowerCase();
        if (null != r && (null == i || i(r))) {
            let n = r.username.toLocaleLowerCase(),
                i = (0, V._I)(n),
                o = (0, V.Fv)(i),
                l = null != e ? (0, V._I)(e) : null,
                u = null != l ? (0, V.Fv)(l) : null,
                p = null != h ? (0, V._I)(h) : null,
                g = null != p ? (0, V.Fv)(p) : null;
            (s && t === r.id) || n.substring(0, c.length) === c || i.substring(0, c.length) === c || (null == e ? void 0 : e.substring(0, c.length)) === c || (null == l ? void 0 : l.substring(0, c.length)) === c || (null == h ? void 0 : h.substring(0, c.length)) === c || (null == p ? void 0 : p.substring(0, c.length)) === c
                ? f.push({
                      type: Y.h8.USER,
                      record: r,
                      score: 10,
                      comparator: null !== (I = null != h ? h : e) && void 0 !== I ? I : n,
                      sortable: null !== (S = null != p ? p : l) && void 0 !== S ? S : i
                  })
                : o.substring(0, d.length) === d || (null == u ? void 0 : u.substring(0, d.length)) === d || (null == g ? void 0 : g.substring(0, d.length)) === d
                  ? f.push({
                        type: Y.h8.USER,
                        record: r,
                        score: 1,
                        comparator: null !== (b = null != h ? h : e) && void 0 !== b ? b : n,
                        sortable: null !== (T = null != p ? p : l) && void 0 !== T ? T : i
                    })
                  : m < 50 &&
                    (a()(c, i) || a()(d, o) || (null != l && a()(c, l)) || (null != u && a()(d, u)) || (null != p && a()(c, p)) || (null != g && a()(d, g))) &&
                    (_.push({
                        type: Y.h8.USER,
                        record: r,
                        score: 1,
                        comparator: null !== (A = null != h ? h : e) && void 0 !== A ? A : n,
                        sortable: null !== (N = null != p ? p : l) && void 0 !== N ? N : i
                    }),
                    (m += 1));
        }
        p += 1;
    }
    return f.sort(u.Z), f.length < r && (_.sort(u.Z), (f = f.concat(_.slice(0, Math.max(0, r - f.length))))), f.length > r && (f.length = r), f;
}
function es(e, t, n) {
    let r = 0,
        i = null;
    for (let a of t) {
        let t = er(e, a, n);
        t > r && ((r = t), (i = a));
    }
    return null != i && (i.isFullMatch ? (t.length = 0) : t.splice(t.indexOf(i), 1)), r;
}
function eo(e, t) {
    let n = A.Z.getChannel(e);
    return null == e || null == n
        ? []
        : o()(O.Z.getMessages(e).toArray())
              .reverse()
              .uniqBy((e) => e.author.id)
              .map((e) => P.default.getUser(e.author.id))
              .filter((e) => {
                  if (null == e || e.isNonUserBot()) return !1;
                  let t = n.getGuildId();
                  return null == t || ei(C.ZP.getMember(t, e.id));
              })
              .map((e) => {
                  var t;
                  let r = n.getGuildId(),
                      i = null != r ? C.ZP.getMember(r, e.id) : null;
                  return {
                      type: Y.h8.USER,
                      record: e,
                      score: 0,
                      comparator: null !== (t = null == i ? void 0 : i.nick) && void 0 !== t ? t : H.ZP.getName(e)
                  };
              })
              .take(t)
              .value();
}
t.ZP = {
    queryFriends(e) {
        let { query: t, limit: n = 10, _fuzzy: r = !0, filter: i } = e;
        return ea({
            query: t,
            members: x.Z.getFriendIDs()
                .map((e) => P.default.getUser(e))
                .filter(U.lm),
            limit: n,
            filter: i
        });
    },
    queryDMUsers(e) {
        let { query: t, limit: n = 10, filter: r } = e;
        return ea({
            query: t,
            members: A.Z.getDMUserIds()
                .map((e) => P.default.getUser(e))
                .filter(U.lm),
            limit: n,
            filter: r
        });
    },
    queryChannelUsers(e) {
        let t,
            { channelId: n, query: r, limit: i = 10, request: a = !0, checkRecentlyTalkedOnEmptyQuery: s = !0, allowSnowflake: o = !1 } = e,
            l = A.Z.getChannel(n);
        if (null == l) return [];
        let u = l.isThread() ? A.Z.getChannel(l.parent_id) : null,
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
            let e = P.default.getCurrentUser();
            null != e &&
                t.push({
                    userId: e.id,
                    nick: null
                });
        } else {
            if (0 === r.length && s) {
                let e = eo(l.id, i);
                if (e.length > 0) return e;
            }
            (t = C.ZP.getMembers(c.guild_id).filter(ei)), a && G.Z.requestMembers(c.guild_id, r, i);
        }
        return ea({
            query: r,
            members: t,
            limit: i,
            filter: (e) =>
                c.isPrivate() ||
                B.BT({
                    permission: j.Plq.VIEW_CHANNEL,
                    user: e,
                    context: c
                }),
            allowSnowflake: o
        });
    },
    queryGuildUsers(e) {
        let { guildId: t, query: n, limit: r = 10, request: i = !0, checkRecentlyTalkedOnEmptyQuery: a = !0, filter: s, allowSnowflake: o } = e;
        if (null == R.Z.getGuild(t)) return [];
        if (0 === n.length && a) {
            let e = eo(w.Z.getChannelId(t), r);
            if (e.length > 0) return e;
        }
        let l = C.ZP.getMembers(t).filter(ei);
        return (
            i && n.length > 0 && G.Z.requestMembers(t, n, r),
            ea({
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
            n && e.length > 0 && G.Z.requestMembers(null, e, t),
            ea({
                query: e,
                members: o()(P.default.getUsers()).values().value(),
                limit: t,
                filter: r
            })
        );
    },
    queryChannels(e) {
        let t,
            { query: n, guildId: r, limit: i = j.rnv, fuzzy: a = !0, filter: s = q, type: l = N.sH, allowEmptyQueries: d = !1, requireVocalConnectAccess: f = !0, boosters: _ = {}, allowSnowflake: h } = e,
            p = (function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = e
                        .split(' ')
                        .filter((e) => '' !== e || t)
                        .map((e) => {
                            let t = e.toLocaleLowerCase();
                            return {
                                queryLower: t,
                                exactQuery: RegExp('^'.concat(Z.Z.escape(t)), 'i'),
                                containQuery: RegExp(Z.Z.escape(t), 'i'),
                                isFullMatch: !1
                            };
                        });
                if (e.includes(' ')) {
                    let t = e.toLocaleLowerCase();
                    n.unshift({
                        queryLower: t,
                        exactQuery: RegExp('^'.concat(Z.Z.escape(t).replace(' ', '( |-)')), 'i'),
                        containQuery: RegExp(Z.Z.escape(t).replace(' ', '( |-)'), 'i'),
                        isFullMatch: !0
                    });
                }
                return n;
            })(n, d);
        t =
            null != r
                ? o()(N.ZP.getChannels(r)[l])
                      .map((e) => e.channel)
                      .concat(S.Z.computeAllActiveJoinedThreads(r))
                      .value()
                : o()(A.Z.loadAllGuildAndPrivateChannelsFromDisk()).values().concat(S.Z.computeAllActiveJoinedThreads()).value();
        let m = {},
            g = [];
        for (let e of t) {
            var E, v, I, b, y;
            if (((E = l), (v = e.type), (I = null != r), !(E === v || ((I || (0, T.Km)(v)) && (E === N.sH ? (0, T.r8)(v) || (0, T.bw)(v) : E === N.Zb && (0, T.bw)(v)))) || ((0, T.Km)(e.type) && !D.Z.can(f ? e.accessPermissions : j.Plq.VIEW_CHANNEL, e)) || !s(e))) continue;
            let t = [...p],
                i = e.name.toLocaleLowerCase(),
                o = h && n === e.id,
                u = o ? 10 : es(i, t, a);
            if (0 !== u) {
                if (t.length > 0) {
                    for (let n of [
                        (function (e, t) {
                            if (null == e.guild_id) return;
                            let n = t[e.guild_id];
                            if (null == n) {
                                var r;
                                n = t[e.guild_id] = null === (r = R.Z.getGuild(e.guild_id)) || void 0 === r ? void 0 : r.toString().toLocaleLowerCase();
                            }
                            return n;
                        })(e, m),
                        (function (e, t) {
                            if (null == e.parent_id) return;
                            let n = t[e.parent_id];
                            if (null == n) {
                                var r;
                                n = t[e.parent_id] = null === (r = A.Z.getChannel(e.parent_id)) || void 0 === r ? void 0 : r.name.toLocaleLowerCase();
                            }
                            return n;
                        })(e, m)
                    ]) {
                        if (null == n || '' === n) continue;
                        let e = es(n, t, !1);
                        0 !== e && (u += 0.5 * e);
                    }
                    u = Math.min(6, u);
                }
                if (0 === u || t.length > 1 || (1 === t.length && !t[0].isFullMatch && !o)) continue;
                if (((b = l), (y = e.type), b === N.sH && (0, T.bw)(y))) u = Math.max(u - 1, 0.5);
                g.push({
                    type: (0, T.bw)(e.type) ? Y.h8.VOICE_CHANNEL : Y.h8.TEXT_CHANNEL,
                    record: e,
                    score: et(u, _[e.id]),
                    comparator: (0, c.F6)(e, P.default, x.Z),
                    sortable: i
                });
            }
        }
        return g.sort(u.Z), null != i && g.length > i && (g.length = i), g;
    },
    queryGuilds(e) {
        let { query: t, limit: n = 10, fuzzy: r = !0, filter: i = q, boosters: a = {} } = e,
            s = '' === t ? '' : t.toLocaleLowerCase(),
            l = {
                exactQuery: RegExp('^'.concat(Z.Z.escape(s)), 'i'),
                containQuery: RegExp(Z.Z.escape(s), 'i'),
                queryLower: s
            },
            c = [];
        for (let e of o()(R.Z.getGuilds()).values().value()) {
            if (!i(e)) continue;
            let t = e.name.toLocaleLowerCase(),
                n = er(t, l, r);
            n > 0 &&
                c.push({
                    type: Y.h8.GUILD,
                    record: e,
                    score: et(n, a[e.id]),
                    comparator: e.toString(),
                    sortable: t
                });
        }
        return c.sort(u.Z), c.length > n && (c.length = n), c;
    },
    queryGroupDMs(e) {
        let { query: t, limit: n = 10, fuzzy: r = !0, filter: i = q, boosters: a = {} } = e,
            s = (0, V._I)((0, V.Fv)(t.toLocaleLowerCase())),
            l = {
                exactQuery: RegExp('^'.concat(Z.Z.escape(s)), 'i'),
                containQuery: RegExp(Z.Z.escape(s), 'i'),
                queryLower: s
            },
            d = o()(A.Z.getMutablePrivateChannels()).values().value(),
            f = [];
        for (let e of d) {
            if (!e.isMultiUserDM() || !i(e)) continue;
            let t = (0, c.F6)(e, P.default, x.Z).toLocaleLowerCase(),
                n = (0, V._I)((0, V.Fv)(t)),
                s = er(n, l, r);
            s > 0 &&
                f.push({
                    type: Y.h8.GROUP_DM,
                    record: e,
                    score: et(s, a[e.id]),
                    comparator: (0, c.F6)(e, P.default, x.Z),
                    sortable: n
                });
        }
        return f.sort(u.Z), f.length > n && (f.length = n), f;
    },
    queryApplications(e) {
        let { query: t, limit: n = 10, fuzzy: r = !0, filter: i = q } = e,
            a = t.toLocaleLowerCase(),
            s = {
                exactQuery: RegExp('^'.concat(Z.Z.escape(a)), 'i'),
                containQuery: RegExp(Z.Z.escape(a), 'i'),
                queryLower: a
            },
            o = ee(),
            l = [];
        for (let { application: e } of o) {
            if (!i(e)) continue;
            let t = e.name.toLocaleLowerCase(),
                n = er(t, s, r);
            n > 0 &&
                l.push({
                    type: Y.h8.APPLICATION,
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
                exactQuery: RegExp('^'.concat(Z.Z.escape(i)), 'i'),
                containQuery: RegExp(Z.Z.escape(i), 'i'),
                queryLower: i
            },
            s = {
                [l.Ky.SHOP]: K.intl.string(K.t.pWG4zc),
                [l.Ky.NITRO_HOME]: K.intl.string(K.t.Ipxkoq),
                [l.Ky.QUEST_HOME]: K.intl.string(K.t.JALI2N)
            },
            o = [];
        for (let e in s) {
            let t = l.Ky[e],
                n = s[t].toLocaleLowerCase(),
                i = er(n, a, r);
            i > 0 &&
                o.push({
                    type: Y.h8.IN_APP_NAVIGATION,
                    record: l.FL.fromType(t),
                    score: et(i),
                    comparator: n,
                    sortable: n
                });
        }
        return o.sort(u.Z), o.length > n && (o.length = n), o;
    },
    querySKUs(e) {
        let { query: t, limit: n = 10, fuzzy: r = !0, filter: i = q } = e,
            a = t.toLocaleLowerCase(),
            s = {
                exactQuery: RegExp('^'.concat(Z.Z.escape(a)), 'i'),
                containQuery: RegExp(Z.Z.escape(a), 'i'),
                queryLower: a
            },
            l = o()(k.Z.getSKUs()).values().value(),
            c = [];
        for (let e of l)
            if (e.type === j.epS.DURABLE_PRIMARY && i(e)) {
                let t = e.name.toLocaleLowerCase(),
                    n = er(t, s, r);
                n > 0 &&
                    c.push({
                        type: Y.h8.SKU,
                        record: e,
                        score: n,
                        comparator: e.name,
                        sortable: t
                    });
            }
        return c.sort(u.Z), c.length > n && (c.length = n), c;
    },
    getRecentlyTalked: eo,
    queryMentionResults(e) {
        let { query: t, channel: n, canMentionEveryone: r = !1, canMentionHere: i = !0, canMentionUsers: s = !0, canMentionRoles: l = !0, includeAllGuildUsers: u = !1, includeNonMentionableRoles: c = !1, checkRecentlyTalkedOnEmptyQuery: d = !0, limit: f = j.rnv, request: _, allowSnowflake: h = !1 } = e,
            p = s
                ? (u && null != n.guild_id
                      ? this.queryGuildUsers({
                            guildId: n.guild_id,
                            query: t,
                            limit: f,
                            checkRecentlyTalkedOnEmptyQuery: d,
                            request: _,
                            allowSnowflake: h
                        })
                      : this.queryChannelUsers({
                            channelId: n.id,
                            query: t,
                            limit: f,
                            checkRecentlyTalkedOnEmptyQuery: d,
                            allowSnowflake: h
                        })
                  ).map((e) => {
                      let { record: t, score: r, comparator: i } = e;
                      return {
                          user: t,
                          score: r,
                          comparator: i,
                          nick: C.ZP.getNick(n.guild_id, t.id),
                          status: L.Z.getStatus(t.id)
                      };
                  })
                : [],
            m = p.length,
            g = t.toLowerCase(),
            E = [];
        if (m < f && l) {
            let e = n.getGuildId(),
                t = R.Z.getGuild(e);
            null != t &&
                (o()(R.Z.getRoles(t.id))
                    .filter((t) => {
                        let { mentionable: n, name: i, id: s } = t;
                        return (n || r || c) && (a()(g, i.toLowerCase()) || (h && g === s)) && s !== F.default.castGuildIdAsEveryoneGuildRoleId(e);
                    })
                    .take(f - m)
                    .forEach((e) => {
                        E.push(e);
                    }),
                (m += E.length));
        }
        let v = [];
        return (
            !n.isPrivate() && r && l && (m < f && a()(g, J().test) && (v.push(J()), (m += 1)), i && m < f && a()(g, $().test) && v.push($())),
            {
                users: p,
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
                      status: L.Z.getStatus(e.record.id)
                  }))
                : [],
            c = u.length,
            f = t.toLowerCase(),
            _ = [];
        if (c < j.rnv && s) {
            let e = R.Z.getGuild(n);
            null != e &&
                (o()(R.Z.getRoles(e.id))
                    .filter((e) => {
                        let { mentionable: t, name: i, id: s } = e;
                        return (t || r || l) && a()(f, i.toLowerCase()) && (0, d.Gy)(n, s);
                    })
                    .take(j.rnv - c)
                    .forEach((e) => {
                        _.push(e);
                    }),
                (c += _.length));
        }
        let h = [];
        return (
            r && s && (c < j.rnv && a()(f, J().test) && (h.push(J()), (c += 1)), c < j.rnv && a()(f, $().test) && h.push($())),
            {
                users: u,
                globals: h,
                roles: _
            }
        );
    },
    queryChoice(e) {
        let { query: t, choices: n, limit: r = 10, fuzzy: i = !0 } = e,
            a = t.toLocaleLowerCase(),
            s = RegExp('^'.concat(Z.Z.escape(a)), 'i'),
            l = RegExp(Z.Z.escape(a), 'i'),
            u = o()(n)
                .map((e, t) => {
                    let n = er(
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
                .filter(U.lm)
                .sortBy((e) => -1 * e.score);
        return null !== r && (u = u.take(r)), u.value();
    },
    queryStaticRouteChannels(e) {
        let { query: t, guild: n } = e,
            r = t.toLocaleLowerCase(),
            i = {
                exactQuery: RegExp('^'.concat(Z.Z.escape(r)), 'i'),
                containQuery: RegExp(Z.Z.escape(r), 'i'),
                queryLower: r
            },
            a = (0, m.s)(n.id) && !n.hasFeature(j.oNc.HUB),
            s = n.hasFeature(j.oNc.COMMUNITY),
            o = (0, p.t)(n) && n.hasFeature(j.oNc.COMMUNITY),
            l = [
                {
                    id: W.HY.SERVER_GUIDE,
                    name: K.intl.string(K.t.VbpLyc)
                },
                {
                    id: W.HY.CHANNEL_BROWSER,
                    name: K.intl.string(K.t.et6wam)
                },
                {
                    id: W.HY.CUSTOMIZE_COMMUNITY,
                    name: K.intl.string(K.t.h9mGOD)
                }
            ],
            u = [];
        for (let e of l) {
            if ((e.id !== W.HY.SERVER_GUIDE || !!a) && (e.id !== W.HY.CHANNEL_BROWSER || !!s) && (e.id !== W.HY.CUSTOMIZE_COMMUNITY || !!o))
                er(e.name.toLocaleLowerCase(), i, !1) > 0 &&
                    u.push(
                        new T.nl({
                            id: e.id,
                            name: e.name,
                            type: j.d4z.UNKNOWN,
                            guild_id: n.id
                        })
                    );
        }
        return u;
    },
    queryChannelResults(e) {
        let { query: t, channel: n, type: r = N.sH, channelTypes: i } = e;
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
        let { query: t, channel: n, channelTypes: r, limit: i = j.rnv, allowSnowflake: a } = e;
        if (null == n.guild_id) {
            let e = [];
            return (null == r || r.includes(n.type)) && e.push(n), { channels: e };
        }
        let s = [];
        for (let e of en)
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
        let { query: t, channel: n, intention: r, maxCount: i = j.rnv, matchComparator: a } = e;
        return (
            b.DZ.loadIfNecessary(),
            {
                emojis: h.ZP.searchWithoutFetchingLatest({
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
            [n, r] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [null, q],
            { stickerMetadata: i } = v.Z,
            a = P.default.getCurrentUser(),
            s = new Set(),
            l = [];
        for (let o of (b.DZ.loadIfNecessary(), e)) {
            if ('' === o) continue;
            let e = o.toLocaleLowerCase(),
                u = (0, V._I)(e),
                c = RegExp('^'.concat(Z.Z.escape(u)), 'i'),
                d = RegExp(''.concat(Z.Z.escape(u)), 'i');
            i.forEach((i, o) => {
                let u = 0,
                    f = null,
                    _ = v.Z.getStickerById(o);
                if (null == _ || !r(_, (0, g.cO)(_, a, n))) return;
                for (let n of i) {
                    let { type: r, value: i } = n,
                        a = (function (e) {
                            switch (e) {
                                case I.MO.STICKER_NAME:
                                    return 11;
                                case I.MO.CORRELATED_EMOJI:
                                    return 6;
                                case I.MO.TAG:
                                    return 1;
                                case I.MO.GUILD_NAME:
                                case I.MO.PACK_NAME:
                                    return 8;
                                default:
                                    return 1;
                            }
                        })(r),
                        s = 0;
                    t ? (i === e ? (s = 10 * a) : c.test(i) ? (s = 7 * a) : (r === I.MO.GUILD_NAME || r === I.MO.PACK_NAME || r === I.MO.STICKER_NAME) && d.test(i) && (s = 5 * a)) : i === e && ((s = 10 * a), (f = i)), s > u && ((u = s), (f = i));
                }
                let h = E.Z.stickerFrecencyWithoutFetchingLatest.getScore(o);
                null != h && (u *= h / 100),
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
                    .value()).length && (l = X),
            l
        );
    },
    matchSentinel: (e, t, n) => !Q.test(t) && e === n,
    hasSameRoleAsUsername(e, t) {
        if (!t.isPomelo()) return !1;
        let n = R.Z.getGuild(e.getGuildId());
        for (let { name: e } of Object.values(null != n ? R.Z.getRoles(n.id) : {})) if (t.username.startsWith(e.toLowerCase())) return !0;
        return !1;
    }
};
