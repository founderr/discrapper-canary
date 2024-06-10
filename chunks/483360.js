"use strict";
let i;
n.r(t), n.d(t, {
  COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS: function() {
    return et
  }
}), n("653041"), n("733860"), n("757143"), n("47120");
var r = n("658722"),
  s = n.n(r),
  a = n("392711"),
  o = n.n(a),
  l = n("620490"),
  u = n("933557"),
  d = n("605436"),
  _ = n("565924"),
  c = n("710845"),
  E = n("339085"),
  I = n("31445"),
  T = n("931261"),
  f = n("285651"),
  S = n("822179"),
  h = n("926491"),
  A = n("373228"),
  m = n("601070"),
  N = n("675478"),
  p = n("131704"),
  O = n("598077"),
  C = n("592125"),
  R = n("984933"),
  g = n("271383"),
  L = n("430824"),
  v = n("375954"),
  D = n("496675"),
  M = n("158776"),
  y = n("699516"),
  P = n("944486"),
  U = n("914010"),
  b = n("594174"),
  G = n("55563"),
  w = n("823379"),
  k = n("892880"),
  B = n("700785"),
  V = n("226951"),
  x = n("709054"),
  F = n("624138"),
  H = n("51144"),
  Y = n("981631"),
  j = n("727785"),
  W = n("176505"),
  K = n("689938");
let z = new c.default("AutocompleteUtils"),
  Z = () => !0,
  X = /(\t|\s)/,
  Q = [],
  q = (i = n("786074").default).MENTION_EVERYONE,
  J = i.MENTION_HERE,
  $ = i.LAUNCHABLE_APPLICATIONS;

function ee() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
    t = arguments.length > 1 ? arguments[1] : void 0;
  return 1e3 * e * (null != t ? t : 1)
}
let et = [R.GUILD_SELECTABLE_CHANNELS_KEY, R.GUILD_VOCAL_CHANNELS_KEY, Y.ChannelTypes.GUILD_CATEGORY];

function en(e, t) {
  let {
    exactQuery: n,
    containQuery: i,
    queryLower: r,
    isFullMatch: a
  } = t, o = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
  try {
    var l, u;
    if (n.test(e)) {
      if (e.toLocaleLowerCase() === r) return 10;
      if (!1 === a) {
        let t = r.length / e.length;
        return Math.max(1, 7 * t)
      }
      return 7
    }
    if (i.test(e)) return 5;
    if (l = r, u = e, l.split(/(?:,| )+/).every(e => RegExp(V.default.escape(e), "i").test(u))) return 3;
    if (o && s()(r, e)) return 1
  } catch (e) {
    z.error(e)
  }
  return 0
}

function ei(e) {
  return (null == e ? void 0 : e.joinedAt) != null && !e.isPending
}

function er(e) {
  let {
    query: t,
    members: n,
    limit: i,
    filter: r,
    allowSnowflake: a
  } = e, o = b.default.getUsers(), u = U.default.getGuildId(), d = t.toLocaleLowerCase(), _ = (0, F.normalize)(d), c = [], E = [], I = n.length, T = 0, f = 0;
  for (; T < I;) {
    var S, h, A, m, N, p, C, R, L;
    let e, i;
    let l = n[T];
    l instanceof O.default ? (i = l, e = null === (h = g.default.getNick(u, i.id)) || void 0 === h ? void 0 : h.toLocaleLowerCase()) : (e = null === (A = l.nick) || void 0 === A ? void 0 : A.toLocaleLowerCase(), i = o[l.userId]);
    let I = null === (S = H.default.getGlobalName(i)) || void 0 === S ? void 0 : S.toLocaleLowerCase();
    if (null == r || r(i)) {
      let n = i.username.toLocaleLowerCase(),
        r = (0, F.stripDiacritics)(n),
        o = (0, F.normalize)(r),
        l = null != e ? (0, F.stripDiacritics)(e) : null,
        u = null != l ? (0, F.normalize)(l) : null,
        T = null != I ? (0, F.stripDiacritics)(I) : null,
        S = null != T ? (0, F.normalize)(T) : null;
      a && t === i.id || n.substring(0, d.length) === d || r.substring(0, d.length) === d || (null == e ? void 0 : e.substring(0, d.length)) === d || (null == l ? void 0 : l.substring(0, d.length)) === d || (null == I ? void 0 : I.substring(0, d.length)) === d || (null == T ? void 0 : T.substring(0, d.length)) === d ? c.push({
        type: j.AutocompleterResultTypes.USER,
        record: i,
        score: 10,
        comparator: null !== (m = null != I ? I : e) && void 0 !== m ? m : n,
        sortable: null !== (N = null != T ? T : l) && void 0 !== N ? N : r
      }) : o.substring(0, _.length) === _ || (null == u ? void 0 : u.substring(0, _.length)) === _ || (null == S ? void 0 : S.substring(0, _.length)) === _ ? c.push({
        type: j.AutocompleterResultTypes.USER,
        record: i,
        score: 1,
        comparator: null !== (p = null != I ? I : e) && void 0 !== p ? p : n,
        sortable: null !== (C = null != T ? T : l) && void 0 !== C ? C : r
      }) : f < 50 && (s()(d, r) || s()(_, o) || null != l && s()(d, l) || null != u && s()(_, u) || null != T && s()(d, T) || null != S && s()(_, S)) && (E.push({
        type: j.AutocompleterResultTypes.USER,
        record: i,
        score: 1,
        comparator: null !== (R = null != I ? I : e) && void 0 !== R ? R : n,
        sortable: null !== (L = null != T ? T : l) && void 0 !== L ? L : r
      }), f += 1)
    }
    T += 1
  }
  return c.sort(l.default), c.length < i && (E.sort(l.default), c = c.concat(E.slice(0, Math.max(0, i - c.length)))), c.length > i && (c.length = i), c
}

function es(e, t, n) {
  let i = 0,
    r = null;
  for (let s of t) {
    let t = en(e, s, n);
    t > i && (i = t, r = s)
  }
  return null != r && (r.isFullMatch ? t.length = 0 : t.splice(t.indexOf(r), 1)), i
}

function ea(e, t) {
  let n = C.default.getChannel(e);
  return null == e || null == n ? [] : o()(v.default.getMessages(e).toArray()).reverse().uniqBy(e => e.author.id).map(e => b.default.getUser(e.author.id)).filter(e => {
    if (null == e || e.isNonUserBot()) return !1;
    let t = n.getGuildId();
    return null == t || ei(g.default.getMember(t, e.id))
  }).map(e => {
    var t;
    let i = n.getGuildId(),
      r = null != i ? g.default.getMember(i, e.id) : null;
    return {
      type: j.AutocompleterResultTypes.USER,
      record: e,
      score: 0,
      comparator: null !== (t = null == r ? void 0 : r.nick) && void 0 !== t ? t : H.default.getName(e)
    }
  }).take(t).value()
}
t.default = {
  queryFriends(e) {
    let {
      query: t,
      limit: n = 10,
      _fuzzy: i = !0,
      filter: r
    } = e;
    return er({
      query: t,
      members: y.default.getFriendIDs().map(e => b.default.getUser(e)).filter(w.isNotNullish),
      limit: n,
      filter: r
    })
  },
  queryDMUsers(e) {
    let {
      query: t,
      limit: n = 10,
      filter: i
    } = e;
    return er({
      query: t,
      members: C.default.getDMUserIds().map(e => b.default.getUser(e)).filter(w.isNotNullish),
      limit: n,
      filter: i
    })
  },
  queryChannelUsers(e) {
    let t, {
        channelId: n,
        query: i,
        limit: r = 10,
        request: s = !0,
        checkRecentlyTalkedOnEmptyQuery: a = !0,
        allowSnowflake: o = !1
      } = e,
      l = C.default.getChannel(n);
    if (null == l) return [];
    let u = l.isThread() ? C.default.getChannel(l.parent_id) : null,
      d = null != u ? u : l;
    if (null == d) return [];
    if (d.isPrivate()) {
      t = d.recipients.map(e => {
        var t;
        return {
          userId: e,
          nick: null !== (t = y.default.getNickname(e)) && void 0 !== t ? t : null
        }
      });
      let e = b.default.getCurrentUser();
      null != e && t.push({
        userId: e.id,
        nick: null
      })
    } else {
      if (0 === i.length && a) {
        let e = ea(l.id, r);
        if (e.length > 0) return e
      }
      t = g.default.getMembers(d.guild_id).filter(ei), s && k.default.requestMembers(d.guild_id, i, r)
    }
    return er({
      query: i,
      members: t,
      limit: r,
      filter: e => d.isPrivate() || B.can({
        permission: Y.Permissions.VIEW_CHANNEL,
        user: e,
        context: d
      }),
      allowSnowflake: o
    })
  },
  queryGuildUsers(e) {
    let {
      guildId: t,
      query: n,
      limit: i = 10,
      request: r = !0,
      checkRecentlyTalkedOnEmptyQuery: s = !0,
      filter: a,
      allowSnowflake: o
    } = e;
    if (null == L.default.getGuild(t)) return [];
    if (0 === n.length && s) {
      let e = ea(P.default.getChannelId(t), i);
      if (e.length > 0) return e
    }
    let l = g.default.getMembers(t).filter(ei);
    return r && n.length > 0 && k.default.requestMembers(t, n, i), er({
      query: n,
      members: l,
      limit: i,
      filter: a,
      allowSnowflake: o
    })
  },
  queryUsers(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
      n = (arguments.length > 2 && void 0 !== arguments[2] && arguments[2], !(arguments.length > 3) || void 0 === arguments[3] || arguments[3]),
      i = arguments.length > 4 ? arguments[4] : void 0;
    return n && e.length > 0 && k.default.requestMembers(null, e, t), er({
      query: e,
      members: o()(b.default.getUsers()).values().value(),
      limit: t,
      filter: i
    })
  },
  queryChannels(e) {
    let t, {
        query: n,
        guildId: i,
        limit: r = Y.MAX_AUTOCOMPLETE_RESULTS,
        fuzzy: s = !0,
        filter: a = Z,
        type: d = R.GUILD_SELECTABLE_CHANNELS_KEY,
        allowEmptyQueries: _ = !1,
        requireVocalConnectAccess: c = !0,
        boosters: E = {},
        allowSnowflake: I
      } = e,
      T = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = e.split(" ").filter(e => "" !== e || t).map(e => {
            let t = e.toLocaleLowerCase();
            return {
              queryLower: t,
              exactQuery: RegExp("^".concat(V.default.escape(t)), "i"),
              containQuery: RegExp(V.default.escape(t), "i"),
              isFullMatch: !1
            }
          });
        if (e.includes(" ")) {
          let t = e.toLocaleLowerCase();
          n.unshift({
            queryLower: t,
            exactQuery: RegExp("^".concat(V.default.escape(t).replace(" ", "( |-)")), "i"),
            containQuery: RegExp(V.default.escape(t).replace(" ", "( |-)"), "i"),
            isFullMatch: !0
          })
        }
        return n
      }(n, _);
    t = null != i ? o()(R.default.getChannels(i)[d]).map(e => e.channel).concat(m.default.computeAllActiveJoinedThreads(i)).value() : o()(C.default.loadAllGuildAndPrivateChannelsFromDisk()).values().concat(m.default.computeAllActiveJoinedThreads()).value();
    let f = {},
      S = [];
    for (let e of t) {
      var h, A, N, O, g;
      if (h = d, A = e.type, N = null != i, !(h === A || (N || (0, p.isGuildChannelType)(A)) && (h === R.GUILD_SELECTABLE_CHANNELS_KEY ? (0, p.isGuildSelectableChannelType)(A) || (0, p.isGuildVocalChannelType)(A) : h === R.GUILD_VOCAL_CHANNELS_KEY && (0, p.isGuildVocalChannelType)(A))) || (0, p.isGuildChannelType)(e.type) && !D.default.can(c ? e.accessPermissions : Y.Permissions.VIEW_CHANNEL, e) || !a(e)) continue;
      let t = [...T],
        r = e.name.toLocaleLowerCase(),
        o = I && n === e.id,
        l = o ? 10 : es(r, t, s);
      if (0 !== l) {
        if (t.length > 0) {
          for (let n of [function(e, t) {
              if (null == e.guild_id) return;
              let n = t[e.guild_id];
              if (null == n) {
                var i;
                n = t[e.guild_id] = null === (i = L.default.getGuild(e.guild_id)) || void 0 === i ? void 0 : i.toString().toLocaleLowerCase()
              }
              return n
            }(e, f), function(e, t) {
              if (null == e.parent_id) return;
              let n = t[e.parent_id];
              if (null == n) {
                var i;
                n = t[e.parent_id] = null === (i = C.default.getChannel(e.parent_id)) || void 0 === i ? void 0 : i.name.toLocaleLowerCase()
              }
              return n
            }(e, f)]) {
            if (null == n || "" === n) continue;
            let e = es(n, t, !1);
            0 !== e && (l += .5 * e)
          }
          l = Math.min(6, l)
        }
        if (0 !== l && !(t.length > 1) && (1 !== t.length || t[0].isFullMatch || o)) {
          ;
          if (O = d, g = e.type, O === R.GUILD_SELECTABLE_CHANNELS_KEY && (0, p.isGuildVocalChannelType)(g)) l = Math.max(l - 1, .5);
          S.push({
            type: (0, p.isGuildVocalChannelType)(e.type) ? j.AutocompleterResultTypes.VOICE_CHANNEL : j.AutocompleterResultTypes.TEXT_CHANNEL,
            record: e,
            score: ee(l, E[e.id]),
            comparator: (0, u.computeChannelName)(e, b.default, y.default),
            sortable: r
          })
        }
      }
    }
    return S.sort(l.default), null != r && S.length > r && (S.length = r), S
  },
  queryGuilds(e) {
    let {
      query: t,
      limit: n = 10,
      fuzzy: i = !0,
      filter: r = Z,
      boosters: s = {}
    } = e, a = "" === t ? "" : t.toLocaleLowerCase(), u = {
      exactQuery: RegExp("^".concat(V.default.escape(a)), "i"),
      containQuery: RegExp(V.default.escape(a), "i"),
      queryLower: a
    }, d = [];
    for (let e of o()(L.default.getGuilds()).values().value()) {
      if (!r(e)) continue;
      let t = e.name.toLocaleLowerCase(),
        n = en(t, u, i);
      n > 0 && d.push({
        type: j.AutocompleterResultTypes.GUILD,
        record: e,
        score: ee(n, s[e.id]),
        comparator: e.toString(),
        sortable: t
      })
    }
    return d.sort(l.default), d.length > n && (d.length = n), d
  },
  queryGroupDMs(e) {
    let {
      query: t,
      limit: n = 10,
      fuzzy: i = !0,
      filter: r = Z,
      boosters: s = {}
    } = e, a = (0, F.stripDiacritics)((0, F.normalize)(t.toLocaleLowerCase())), d = {
      exactQuery: RegExp("^".concat(V.default.escape(a)), "i"),
      containQuery: RegExp(V.default.escape(a), "i"),
      queryLower: a
    }, _ = o()(C.default.getMutablePrivateChannels()).values().value(), c = [];
    for (let e of _) {
      if (!e.isMultiUserDM() || !r(e)) continue;
      let t = (0, u.computeChannelName)(e, b.default, y.default).toLocaleLowerCase(),
        n = (0, F.stripDiacritics)((0, F.normalize)(t)),
        a = en(n, d, i);
      a > 0 && c.push({
        type: j.AutocompleterResultTypes.GROUP_DM,
        record: e,
        score: ee(a, s[e.id]),
        comparator: (0, u.computeChannelName)(e, b.default, y.default),
        sortable: n
      })
    }
    return c.sort(l.default), c.length > n && (c.length = n), c
  },
  queryApplications(e) {
    let {
      query: t,
      limit: n = 10,
      fuzzy: i = !0,
      filter: r = Z
    } = e, s = t.toLocaleLowerCase(), a = {
      exactQuery: RegExp("^".concat(V.default.escape(s)), "i"),
      containQuery: RegExp(V.default.escape(s), "i"),
      queryLower: s
    }, o = $(), u = [];
    for (let {
        application: e
      }
      of o) {
      if (!r(e)) continue;
      let t = e.name.toLocaleLowerCase(),
        n = en(t, a, i);
      n > 0 && u.push({
        type: j.AutocompleterResultTypes.APPLICATION,
        record: e,
        score: n,
        comparator: e.name,
        sortable: t
      })
    }
    return u.sort(l.default), u.length > n && (u.length = n), u
  },
  querySKUs(e) {
    let {
      query: t,
      limit: n = 10,
      fuzzy: i = !0,
      filter: r = Z
    } = e, s = t.toLocaleLowerCase(), a = {
      exactQuery: RegExp("^".concat(V.default.escape(s)), "i"),
      containQuery: RegExp(V.default.escape(s), "i"),
      queryLower: s
    }, u = o()(G.default.getSKUs()).values().value(), d = [];
    for (let e of u)
      if (e.type === Y.SKUTypes.DURABLE_PRIMARY && r(e)) {
        let t = e.name.toLocaleLowerCase(),
          n = en(t, a, i);
        n > 0 && d.push({
          type: j.AutocompleterResultTypes.SKU,
          record: e,
          score: n,
          comparator: e.name,
          sortable: t
        })
      } return d.sort(l.default), d.length > n && (d.length = n), d
  },
  getRecentlyTalked: ea,
  queryMentionResults(e) {
    let {
      query: t,
      channel: n,
      canMentionEveryone: i = !1,
      canMentionHere: r = !0,
      canMentionUsers: a = !0,
      canMentionRoles: l = !0,
      includeAllGuildUsers: u = !1,
      includeNonMentionableRoles: d = !1,
      checkRecentlyTalkedOnEmptyQuery: _ = !0,
      limit: c = Y.MAX_AUTOCOMPLETE_RESULTS,
      request: E,
      allowSnowflake: I = !1
    } = e, T = a ? (u && null != n.guild_id ? this.queryGuildUsers({
      guildId: n.guild_id,
      query: t,
      limit: c,
      checkRecentlyTalkedOnEmptyQuery: _,
      request: E,
      allowSnowflake: I
    }) : this.queryChannelUsers({
      channelId: n.id,
      query: t,
      limit: c,
      checkRecentlyTalkedOnEmptyQuery: _,
      allowSnowflake: I
    })).map(e => {
      let {
        record: t,
        score: i,
        comparator: r
      } = e;
      return {
        user: t,
        score: i,
        comparator: r,
        nick: g.default.getNick(n.guild_id, t.id),
        status: M.default.getStatus(t.id)
      }
    }) : [], f = T.length, S = t.toLowerCase(), h = [];
    if (f < c && l) {
      let e = n.getGuildId(),
        t = L.default.getGuild(e);
      null != t && (o()(L.default.getRoles(t.id)).filter(t => {
        let {
          mentionable: n,
          name: r,
          id: a
        } = t;
        return (n || i || d) && (s()(S, r.toLowerCase()) || I && S === a) && a !== x.default.castGuildIdAsEveryoneGuildRoleId(e)
      }).take(c - f).forEach(e => {
        h.push(e)
      }), f += h.length)
    }
    let A = [];
    return !n.isPrivate() && i && l && (f < c && s()(S, q().test) && (A.push(q()), f += 1), r && f < c && s()(S, J().test) && A.push(J())), {
      users: T,
      globals: A,
      roles: h
    }
  },
  queryGuildMentionResults(e) {
    let {
      query: t,
      guildId: n,
      canMentionEveryone: i = !1,
      canMentionUsers: r = !0,
      canMentionRoles: a = !0,
      canMentionNonMentionableRoles: l = !1
    } = e, u = r ? this.queryGuildUsers({
      guildId: n,
      query: t
    }).map(e => ({
      ...e,
      status: M.default.getStatus(e.record.id)
    })) : [], _ = u.length, c = t.toLowerCase(), E = [];
    if (_ < Y.MAX_AUTOCOMPLETE_RESULTS && a) {
      let e = L.default.getGuild(n);
      null != e && (o()(L.default.getRoles(e.id)).filter(e => {
        let {
          mentionable: t,
          name: r,
          id: a
        } = e;
        return (t || i || l) && s()(c, r.toLowerCase()) && (0, d.isNotEveryoneRoleId)(n, a)
      }).take(Y.MAX_AUTOCOMPLETE_RESULTS - _).forEach(e => {
        E.push(e)
      }), _ += E.length)
    }
    let I = [];
    return i && a && (_ < Y.MAX_AUTOCOMPLETE_RESULTS && s()(c, q().test) && (I.push(q()), _ += 1), _ < Y.MAX_AUTOCOMPLETE_RESULTS && s()(c, J().test) && I.push(J())), {
      users: u,
      globals: I,
      roles: E
    }
  },
  queryChoice(e) {
    let {
      query: t,
      choices: n,
      limit: i = 10,
      fuzzy: r = !0
    } = e, s = t.toLocaleLowerCase(), a = RegExp("^".concat(V.default.escape(s)), "i"), l = RegExp(V.default.escape(s), "i"), u = o()(n).map((e, t) => {
      let n = en(e.displayName.toLocaleLowerCase(), {
        exactQuery: a,
        containQuery: l,
        queryLower: s
      }, r);
      return n > 0 ? {
        choice: e,
        score: n,
        originalIndex: t
      } : null
    }).filter(w.isNotNullish).sortBy(e => -1 * e.score);
    return null !== i && (u = u.take(i)), u.value()
  },
  queryStaticRouteChannels(e) {
    let {
      query: t,
      guild: n
    } = e, i = t.toLocaleLowerCase(), r = {
      exactQuery: RegExp("^".concat(V.default.escape(i)), "i"),
      containQuery: RegExp(V.default.escape(i), "i"),
      queryLower: i
    }, s = (0, T.canSeeOnboardingHome)(n.id) && !n.hasFeature(Y.GuildFeatures.HUB), a = n.hasFeature(Y.GuildFeatures.COMMUNITY), o = (0, I.isGuildOnboardingAvailable)(n) && n.hasFeature(Y.GuildFeatures.COMMUNITY), l = [{
      id: W.StaticChannelId.SERVER_GUIDE,
      name: K.default.Messages.SERVER_GUIDE
    }, {
      id: W.StaticChannelId.CHANNEL_BROWSER,
      name: K.default.Messages.CHANNEL_BROWSER_TITLE
    }, {
      id: W.StaticChannelId.CUSTOMIZE_COMMUNITY,
      name: K.default.Messages.CHANNELS_AND_ROLES
    }], u = [];
    for (let e of l) {
      if ((e.id !== W.StaticChannelId.SERVER_GUIDE || !!s) && (e.id !== W.StaticChannelId.CHANNEL_BROWSER || !!a) && (e.id !== W.StaticChannelId.CUSTOMIZE_COMMUNITY || !!o)) en(e.name.toLocaleLowerCase(), r, !1) > 0 && u.push(new p.UnknownChannelRecord({
        id: e.id,
        name: e.name,
        type: Y.ChannelTypes.UNKNOWN,
        guild_id: n.id
      }))
    }
    return u
  },
  queryChannelResults(e) {
    let {
      query: t,
      channel: n,
      type: i = R.GUILD_SELECTABLE_CHANNELS_KEY,
      channelTypes: r
    } = e;
    return {
      channels: this.queryChannels({
        query: t,
        guildId: n.getGuildId(),
        limit: void 0,
        fuzzy: void 0,
        filter: e => null == r || r.includes(e.type),
        type: i,
        allowEmptyQueries: !0
      }).map(e => e.record)
    }
  },
  queryApplicationCommandChannelResults(e) {
    let {
      query: t,
      channel: n,
      channelTypes: i,
      limit: r = Y.MAX_AUTOCOMPLETE_RESULTS,
      allowSnowflake: s
    } = e;
    if (null == n.guild_id) {
      let e = [];
      return (null == i || i.includes(n.type)) && e.push(n), {
        channels: e
      }
    }
    let a = [];
    for (let e of et) a = a.concat(this.queryChannels({
      query: t,
      guildId: n.guild_id,
      limit: r,
      fuzzy: !0,
      filter: e => null == i || i.includes(e.type),
      type: e,
      allowEmptyQueries: !0,
      requireVocalConnectAccess: !1,
      allowSnowflake: s
    }));
    return a = a.filter(e => {
      let {
        record: t
      } = e;
      return "null" !== t.id
    }).sort(_.default), null != r && a.length > r && (a = a.slice(0, r)), {
      channels: a.map(e => e.record)
    }
  },
  queryChoiceResults(e) {
    let {
      query: t,
      choices: n
    } = e;
    return {
      choices: this.queryChoice({
        query: t,
        choices: n,
        limit: null
      }).map(e => e.choice)
    }
  },
  queryEmojiResults(e) {
    let {
      query: t,
      channel: n,
      intention: i,
      maxCount: r = Y.MAX_AUTOCOMPLETE_RESULTS,
      matchComparator: s
    } = e;
    return N.FrecencyUserSettingsActionCreators.loadIfNecessary(), {
      emojis: E.default.searchWithoutFetchingLatest({
        channel: n,
        query: t,
        count: r,
        intention: i,
        matchComparator: s
      })
    }
  },
  queryStickers(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
      [n, i] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [null, Z],
      {
        stickerMetadata: r
      } = h.default,
      s = b.default.getCurrentUser(),
      a = new Set,
      l = [];
    for (let o of (N.FrecencyUserSettingsActionCreators.loadIfNecessary(), e)) {
      if ("" === o) continue;
      let e = o.toLocaleLowerCase(),
        u = (0, F.stripDiacritics)(e),
        d = RegExp("^".concat(V.default.escape(u)), "i"),
        _ = RegExp("".concat(V.default.escape(u)), "i");
      r.forEach((r, o) => {
        let u = 0,
          c = null,
          E = h.default.getStickerById(o);
        if (null == E || !i(E, (0, f.getStickerSendability)(E, s, n))) return;
        for (let n of r) {
          let {
            type: i,
            value: r
          } = n, s = function(e) {
            switch (e) {
              case A.StickerMetadataTypes.STICKER_NAME:
                return 11;
              case A.StickerMetadataTypes.CORRELATED_EMOJI:
                return 6;
              case A.StickerMetadataTypes.TAG:
                return 1;
              case A.StickerMetadataTypes.GUILD_NAME:
              case A.StickerMetadataTypes.PACK_NAME:
                return 8;
              default:
                return 1
            }
          }(i), a = 0;
          t ? r === e ? a = 10 * s : d.test(r) ? a = 7 * s : (i === A.StickerMetadataTypes.GUILD_NAME || i === A.StickerMetadataTypes.PACK_NAME || i === A.StickerMetadataTypes.STICKER_NAME) && _.test(r) && (a = 5 * s) : r === e && (a = 10 * s, c = r), a > u && (u = a, c = r)
        }
        let I = S.default.stickerFrecencyWithoutFetchingLatest.getScore(o);
        null != I && (u *= I / 100), u > 0 && null != c && !a.has(E.id) && (a.add(E.id), l.push({
          sticker: E,
          comparator: c,
          score: u
        }))
      })
    }
    return 0 === (l = o()(l).sortBy(e => -1 * e.score).value()).length && (l = Q), l
  },
  matchSentinel: (e, t, n) => !X.test(t) && e === n,
  hasSameRoleAsUsername(e, t) {
    if (!t.isPomelo()) return !1;
    let n = L.default.getGuild(e.getGuildId());
    for (let {
        name: e
      }
      of Object.values(null != n ? L.default.getRoles(n.id) : {}))
      if (t.username.startsWith(e.toLowerCase())) return !0;
    return !1
  }
}