"use strict";
let l;
n.r(t), n.d(t, {
  COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS: function() {
    return ee
  },
  default: function() {
    return ei
  }
}), n("424973"), n("843762"), n("781738"), n("222007");
var r = n("448105"),
  a = n.n(r),
  i = n("917351"),
  u = n.n(i),
  o = n("195547"),
  s = n("679653"),
  c = n("966506"),
  d = n("605250"),
  f = n("385976"),
  p = n("677315"),
  h = n("361776"),
  m = n("290886"),
  g = n("866353"),
  E = n("865372"),
  C = n("364685"),
  y = n("161585"),
  L = n("401690"),
  A = n("872173"),
  S = n("233069"),
  _ = n("766274"),
  T = n("42203"),
  I = n("923959"),
  v = n("26989"),
  N = n("305961"),
  R = n("377253"),
  b = n("957255"),
  M = n("824563"),
  x = n("27618"),
  U = n("18494"),
  O = n("162771"),
  D = n("697218"),
  G = n("552712"),
  P = n("449008"),
  w = n("651879"),
  k = n("991170"),
  F = n("655518"),
  q = n("159885"),
  B = n("158998"),
  H = n("49111"),
  V = n("375822"),
  K = n("724210"),
  j = n("782340");
let Y = new d.default("AutocompleteUtils"),
  Q = () => !0,
  W = /(\t|\s)/,
  z = [];
l = n("905571").default;
let X = l.MENTION_EVERYONE,
  $ = l.MENTION_HERE,
  J = l.LAUNCHABLE_APPLICATIONS;

function Z() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
    t = arguments.length > 1 ? arguments[1] : void 0;
  return 1e3 * e * (null != t ? t : 1)
}
let ee = [I.GUILD_SELECTABLE_CHANNELS_KEY, I.GUILD_VOCAL_CHANNELS_KEY, H.ChannelTypes.GUILD_CATEGORY];

function et(e, t) {
  let {
    exactQuery: n,
    containQuery: l,
    queryLower: r
  } = t, i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
  try {
    if (n.test(e)) {
      if (e.toLocaleLowerCase() === r) return 10;
      return 7
    }
    if (l.test(e)) return 5;
    if (function(e, t) {
        let n = e.split(/(?:,| )+/);
        return n.every(e => {
          let n = RegExp(F.default.escape(e), "i");
          return n.test(t)
        })
      }(r, e)) return 3;
    if (i && a(r, e)) return 1
  } catch (e) {
    Y.error(e)
  }
  return 0
}

function en(e) {
  return (null == e ? void 0 : e.joinedAt) != null && !e.isPending
}

function el(e) {
  let {
    query: t,
    members: n,
    limit: l,
    filter: r,
    allowSnowflake: i
  } = e, u = D.default.getUsers(), s = O.default.getGuildId(), c = t.toLocaleLowerCase(), d = (0, q.normalize)(c), f = [], p = [], h = n.length, m = 0, g = 0;
  for (; m < h;) {
    var E, C, y, L, A, S, T, I, N;
    let e, l;
    let o = n[m];
    o instanceof _.default ? (l = o, e = null === (C = v.default.getNick(s, l.id)) || void 0 === C ? void 0 : C.toLocaleLowerCase()) : (e = null === (y = o.nick) || void 0 === y ? void 0 : y.toLocaleLowerCase(), l = u[o.userId]);
    let h = null === (E = B.default.getGlobalName(l)) || void 0 === E ? void 0 : E.toLocaleLowerCase();
    if (null == r || r(l)) {
      let n = l.username.toLocaleLowerCase(),
        r = (0, q.stripDiacritics)(n),
        u = (0, q.normalize)(r),
        o = null != e ? (0, q.stripDiacritics)(e) : null,
        s = null != o ? (0, q.normalize)(o) : null,
        m = null != h ? (0, q.stripDiacritics)(h) : null,
        E = null != m ? (0, q.normalize)(m) : null;
      i && t === l.id || n.substring(0, c.length) === c || r.substring(0, c.length) === c || (null == e ? void 0 : e.substring(0, c.length)) === c || (null == o ? void 0 : o.substring(0, c.length)) === c || (null == h ? void 0 : h.substring(0, c.length)) === c || (null == m ? void 0 : m.substring(0, c.length)) === c ? f.push({
        type: V.AutocompleterResultTypes.USER,
        record: l,
        score: 10,
        comparator: null !== (L = null != h ? h : e) && void 0 !== L ? L : n,
        sortable: null !== (A = null != m ? m : o) && void 0 !== A ? A : r
      }) : u.substring(0, d.length) === d || (null == s ? void 0 : s.substring(0, d.length)) === d || (null == E ? void 0 : E.substring(0, d.length)) === d ? f.push({
        type: V.AutocompleterResultTypes.USER,
        record: l,
        score: 1,
        comparator: null !== (S = null != h ? h : e) && void 0 !== S ? S : n,
        sortable: null !== (T = null != m ? m : o) && void 0 !== T ? T : r
      }) : g < 50 && (a(c, r) || a(d, u) || null != o && a(c, o) || null != s && a(d, s) || null != m && a(c, m) || null != E && a(d, E)) && (p.push({
        type: V.AutocompleterResultTypes.USER,
        record: l,
        score: 1,
        comparator: null !== (I = null != h ? h : e) && void 0 !== I ? I : n,
        sortable: null !== (N = null != m ? m : o) && void 0 !== N ? N : r
      }), g += 1)
    }
    m += 1
  }
  return f.sort(o.default), f.length < l && (p.sort(o.default), f = f.concat(p.slice(0, Math.max(0, l - f.length)))), f.length > l && (f.length = l), f
}

function er(e, t, n) {
  let l = 0,
    r = null;
  for (let a of t) {
    let t = et(e, a, n);
    t > l && (l = t, r = a)
  }
  return null != r && (r.isFullMatch ? t.length = 0 : t.splice(t.indexOf(r), 1)), l
}

function ea(e, t) {
  let n = T.default.getChannel(e);
  return null == e || null == n ? [] : u(R.default.getMessages(e).toArray()).reverse().uniqBy(e => e.author.id).map(e => D.default.getUser(e.author.id)).filter(e => {
    if (null == e || e.isNonUserBot()) return !1;
    let t = n.getGuildId();
    if (null == t) return !0;
    let l = v.default.getMember(t, e.id);
    return en(l)
  }).map(e => {
    var t;
    let l = n.getGuildId(),
      r = null != l ? v.default.getMember(l, e.id) : null;
    return {
      type: V.AutocompleterResultTypes.USER,
      record: e,
      score: 0,
      comparator: null !== (t = null == r ? void 0 : r.nick) && void 0 !== t ? t : B.default.getName(e)
    }
  }).take(t).value()
}
var ei = {
  queryFriends(e) {
    let {
      query: t,
      limit: n = 10,
      _fuzzy: l = !0,
      filter: r
    } = e;
    return el({
      query: t,
      members: x.default.getFriendIDs().map(e => D.default.getUser(e)).filter(P.isNotNullish),
      limit: n,
      filter: r
    })
  },
  queryDMUsers(e) {
    let {
      query: t,
      limit: n = 10,
      filter: l
    } = e;
    return el({
      query: t,
      members: T.default.getDMUserIds().map(e => D.default.getUser(e)).filter(P.isNotNullish),
      limit: n,
      filter: l
    })
  },
  queryChannelUsers(e) {
    let t, {
        channelId: n,
        query: l,
        limit: r = 10,
        request: a = !0,
        checkRecentlyTalkedOnEmptyQuery: i = !0,
        allowSnowflake: u = !1
      } = e,
      o = T.default.getChannel(n);
    if (null == o) return [];
    let s = o.isThread() ? T.default.getChannel(o.parent_id) : null,
      c = null != s ? s : o;
    if (null == c) return [];
    if (c.isPrivate()) {
      t = c.recipients.map(e => {
        var t;
        return {
          userId: e,
          nick: null !== (t = x.default.getNickname(e)) && void 0 !== t ? t : null
        }
      });
      let e = D.default.getCurrentUser();
      null != e && t.push({
        userId: e.id,
        nick: null
      })
    } else {
      if (0 === l.length && i) {
        let e = ea(o.id, r);
        if (e.length > 0) return e
      }
      t = v.default.getMembers(c.guild_id).filter(en), a && w.default.requestMembers(c.guild_id, l, r)
    }
    return el({
      query: l,
      members: t,
      limit: r,
      filter: e => c.isPrivate() || k.default.can({
        permission: H.Permissions.VIEW_CHANNEL,
        user: e,
        context: c
      }),
      allowSnowflake: u
    })
  },
  queryGuildUsers(e) {
    let {
      guildId: t,
      query: n,
      limit: l = 10,
      request: r = !0,
      checkRecentlyTalkedOnEmptyQuery: a = !0,
      filter: i,
      allowSnowflake: u
    } = e;
    if (null == N.default.getGuild(t)) return [];
    if (0 === n.length && a) {
      let e = ea(U.default.getChannelId(t), l);
      if (e.length > 0) return e
    }
    let o = v.default.getMembers(t).filter(en);
    return r && n.length > 0 && w.default.requestMembers(t, n, l), el({
      query: n,
      members: o,
      limit: l,
      filter: i,
      allowSnowflake: u
    })
  },
  queryUsers(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
      n = (arguments.length > 2 && void 0 !== arguments[2] && arguments[2], !(arguments.length > 3) || void 0 === arguments[3] || arguments[3]),
      l = arguments.length > 4 ? arguments[4] : void 0;
    return n && e.length > 0 && w.default.requestMembers(null, e, t), el({
      query: e,
      members: u(D.default.getUsers()).values().value(),
      limit: t,
      filter: l
    })
  },
  queryChannels(e) {
    let t, {
        query: n,
        guildId: l,
        limit: r = H.MAX_AUTOCOMPLETE_RESULTS,
        fuzzy: a = !0,
        filter: i = Q,
        type: c = I.GUILD_SELECTABLE_CHANNELS_KEY,
        allowEmptyQueries: d = !1,
        requireVocalConnectAccess: f = !0,
        boosters: p = {},
        allowSnowflake: h
      } = e,
      m = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = e.split(" ").filter(e => "" !== e || t).map(e => {
            let t = e.toLocaleLowerCase();
            return {
              queryLower: t,
              exactQuery: RegExp("^".concat(F.default.escape(t)), "i"),
              containQuery: RegExp(F.default.escape(t), "i"),
              isFullMatch: !1
            }
          });
        if (e.includes(" ")) {
          let t = e.toLocaleLowerCase();
          n.unshift({
            queryLower: t,
            exactQuery: RegExp("^".concat(F.default.escape(t).replace(" ", "( |-)")), "i"),
            containQuery: RegExp(F.default.escape(t).replace(" ", "( |-)"), "i"),
            isFullMatch: !0
          })
        }
        return n
      }(n, d);
    t = null != l ? u(I.default.getChannels(l)[c]).map(e => e.channel).concat(L.default.computeAllActiveJoinedThreads(l)).value() : u(T.default.loadAllGuildAndPrivateChannelsFromDisk()).values().concat(L.default.computeAllActiveJoinedThreads()).value();
    let g = {},
      E = [];
    for (let e of t) {
      var C, y, A, _, v;
      if (C = c, y = e.type, A = null != l, !(C === y || (A || (0, S.isGuildChannelType)(y)) && (C === I.GUILD_SELECTABLE_CHANNELS_KEY ? (0, S.isGuildSelectableChannelType)(y) || (0, S.isGuildVocalChannelType)(y) : C === I.GUILD_VOCAL_CHANNELS_KEY && (0, S.isGuildVocalChannelType)(y))) || (0, S.isGuildChannelType)(e.type) && !b.default.can(f ? e.accessPermissions : H.Permissions.VIEW_CHANNEL, e) || !i(e)) continue;
      let t = [...m],
        r = e.name.toLocaleLowerCase(),
        u = h && n === e.id,
        o = u ? 10 : er(r, t, a);
      if (0 !== o) {
        if (t.length > 0) {
          for (let n of [function(e, t) {
              if (null == e.guild_id) return;
              let n = t[e.guild_id];
              if (null == n) {
                var l;
                n = t[e.guild_id] = null === (l = N.default.getGuild(e.guild_id)) || void 0 === l ? void 0 : l.toString().toLocaleLowerCase()
              }
              return n
            }(e, g), function(e, t) {
              if (null == e.parent_id) return;
              let n = t[e.parent_id];
              if (null == n) {
                var l;
                n = t[e.parent_id] = null === (l = T.default.getChannel(e.parent_id)) || void 0 === l ? void 0 : l.name.toLocaleLowerCase()
              }
              return n
            }(e, g)]) {
            if (null == n || "" === n) continue;
            let e = er(n, t, !1);
            0 !== e && (o += .5 * e)
          }
          o = Math.min(9, o)
        }
        if (0 !== o && !(t.length > 1) && (1 !== t.length || t[0].isFullMatch || u)) {
          ;
          if (_ = c, v = e.type, _ === I.GUILD_SELECTABLE_CHANNELS_KEY && (0, S.isGuildVocalChannelType)(v)) o = Math.max(o - 1, .5);
          E.push({
            type: (0, S.isGuildVocalChannelType)(e.type) ? V.AutocompleterResultTypes.VOICE_CHANNEL : V.AutocompleterResultTypes.TEXT_CHANNEL,
            record: e,
            score: Z(o, p[e.id]),
            comparator: (0, s.computeChannelName)(e, D.default, x.default),
            sortable: r
          })
        }
      }
    }
    return E.sort(o.default), null != r && E.length > r && (E.length = r), E
  },
  queryGuilds(e) {
    let {
      query: t,
      limit: n = 10,
      fuzzy: l = !0,
      filter: r = Q,
      boosters: a = {}
    } = e, i = "" === t ? "" : t.toLocaleLowerCase(), s = {
      exactQuery: RegExp("^".concat(F.default.escape(i)), "i"),
      containQuery: RegExp(F.default.escape(i), "i"),
      queryLower: i
    }, c = [], d = u(N.default.getGuilds()).values().value();
    for (let e of d) {
      if (!r(e)) continue;
      let t = e.name.toLocaleLowerCase(),
        n = et(t, s, l);
      n > 0 && c.push({
        type: V.AutocompleterResultTypes.GUILD,
        record: e,
        score: Z(n, a[e.id]),
        comparator: e.toString(),
        sortable: t
      })
    }
    return c.sort(o.default), c.length > n && (c.length = n), c
  },
  queryGroupDMs(e) {
    let {
      query: t,
      limit: n = 10,
      fuzzy: l = !0,
      filter: r = Q,
      boosters: a = {}
    } = e, i = (0, q.stripDiacritics)((0, q.normalize)(t.toLocaleLowerCase())), c = {
      exactQuery: RegExp("^".concat(F.default.escape(i)), "i"),
      containQuery: RegExp(F.default.escape(i), "i"),
      queryLower: i
    }, d = u(T.default.getMutablePrivateChannels()).values().value(), f = [];
    for (let e of d) {
      if (!e.isMultiUserDM() || !r(e)) continue;
      let t = (0, s.computeChannelName)(e, D.default, x.default).toLocaleLowerCase(),
        n = (0, q.stripDiacritics)((0, q.normalize)(t)),
        i = et(n, c, l);
      i > 0 && f.push({
        type: V.AutocompleterResultTypes.GROUP_DM,
        record: e,
        score: Z(i, a[e.id]),
        comparator: (0, s.computeChannelName)(e, D.default, x.default),
        sortable: n
      })
    }
    return f.sort(o.default), f.length > n && (f.length = n), f
  },
  queryApplications(e) {
    let {
      query: t,
      limit: n = 10,
      fuzzy: l = !0,
      filter: r = Q
    } = e, a = t.toLocaleLowerCase(), i = {
      exactQuery: RegExp("^".concat(F.default.escape(a)), "i"),
      containQuery: RegExp(F.default.escape(a), "i"),
      queryLower: a
    }, u = J(), s = [];
    for (let {
        application: e
      }
      of u) {
      if (!r(e)) continue;
      let t = e.name.toLocaleLowerCase(),
        n = et(t, i, l);
      n > 0 && s.push({
        type: V.AutocompleterResultTypes.APPLICATION,
        record: e,
        score: n,
        comparator: e.name,
        sortable: t
      })
    }
    return s.sort(o.default), s.length > n && (s.length = n), s
  },
  querySKUs(e) {
    let {
      query: t,
      limit: n = 10,
      fuzzy: l = !0,
      filter: r = Q
    } = e, a = t.toLocaleLowerCase(), i = {
      exactQuery: RegExp("^".concat(F.default.escape(a)), "i"),
      containQuery: RegExp(F.default.escape(a), "i"),
      queryLower: a
    }, s = u(G.default.getSKUs()).values().value(), c = [];
    for (let e of s)
      if (e.type === H.SKUTypes.DURABLE_PRIMARY && r(e)) {
        let t = e.name.toLocaleLowerCase(),
          n = et(t, i, l);
        n > 0 && c.push({
          type: V.AutocompleterResultTypes.SKU,
          record: e,
          score: n,
          comparator: e.name,
          sortable: t
        })
      } return c.sort(o.default), c.length > n && (c.length = n), c
  },
  getRecentlyTalked: ea,
  queryMentionResults(e) {
    let {
      query: t,
      channel: n,
      canMentionEveryone: l = !1,
      canMentionHere: r = !0,
      canMentionUsers: i = !0,
      canMentionRoles: o = !0,
      includeAllGuildUsers: s = !1,
      includeNonMentionableRoles: c = !1,
      checkRecentlyTalkedOnEmptyQuery: d = !0,
      limit: f = H.MAX_AUTOCOMPLETE_RESULTS,
      request: p,
      allowSnowflake: h = !1
    } = e, m = i ? (s && null != n.guild_id ? this.queryGuildUsers({
      guildId: n.guild_id,
      query: t,
      limit: f,
      checkRecentlyTalkedOnEmptyQuery: d,
      request: p,
      allowSnowflake: h
    }) : this.queryChannelUsers({
      channelId: n.id,
      query: t,
      limit: f,
      checkRecentlyTalkedOnEmptyQuery: d,
      allowSnowflake: h
    })).map(e => {
      let {
        record: t,
        score: l,
        comparator: r
      } = e;
      return {
        user: t,
        score: l,
        comparator: r,
        nick: v.default.getNick(n.guild_id, t.id),
        status: M.default.getStatus(t.id)
      }
    }) : [], g = m.length, E = t.toLowerCase(), C = [];
    if (g < f && o) {
      let e = n.getGuildId(),
        t = N.default.getGuild(e);
      null != t && (u(t.roles).filter(t => {
        let {
          mentionable: n,
          name: r,
          id: i
        } = t;
        return (n || l || c) && (a(E, r.toLowerCase()) || h && E === i) && i !== e
      }).take(f - g).forEach(e => {
        C.push(e)
      }), g += C.length)
    }
    let y = [];
    return !n.isPrivate() && l && o && (g < f && a(E, X().test) && (y.push(X()), g += 1), r && g < f && a(E, $().test) && y.push($())), {
      users: m,
      globals: y,
      roles: C
    }
  },
  queryGuildMentionResults(e) {
    let {
      query: t,
      guildId: n,
      canMentionEveryone: l = !1,
      canMentionUsers: r = !0,
      canMentionRoles: i = !0,
      canMentionNonMentionableRoles: o = !1
    } = e, s = r ? this.queryGuildUsers({
      guildId: n,
      query: t
    }).map(e => ({
      ...e,
      status: M.default.getStatus(e.record.id)
    })) : [], c = s.length, d = t.toLowerCase(), f = [];
    if (c < H.MAX_AUTOCOMPLETE_RESULTS && i) {
      let e = N.default.getGuild(n);
      null != e && (u(e.roles).filter(e => {
        let {
          mentionable: t,
          name: r,
          id: i
        } = e;
        return (t || l || o) && a(d, r.toLowerCase()) && i !== n
      }).take(H.MAX_AUTOCOMPLETE_RESULTS - c).forEach(e => {
        f.push(e)
      }), c += f.length)
    }
    let p = [];
    return l && i && (c < H.MAX_AUTOCOMPLETE_RESULTS && a(d, X().test) && (p.push(X()), c += 1), c < H.MAX_AUTOCOMPLETE_RESULTS && a(d, $().test) && p.push($())), {
      users: s,
      globals: p,
      roles: f
    }
  },
  queryChoice(e) {
    let {
      query: t,
      choices: n,
      limit: l = 10,
      fuzzy: r = !0
    } = e, a = t.toLocaleLowerCase(), i = RegExp("^".concat(F.default.escape(a)), "i"), o = RegExp(F.default.escape(a), "i"), s = u(n).map((e, t) => {
      let n = et(e.displayName.toLocaleLowerCase(), {
        exactQuery: i,
        containQuery: o,
        queryLower: a
      }, r);
      return n > 0 ? {
        choice: e,
        score: n,
        originalIndex: t
      } : null
    }).filter(P.isNotNullish).sortBy(e => -1 * e.score);
    return null !== l && (s = s.take(l)), s.value()
  },
  queryStaticRouteChannels(e) {
    let {
      query: t,
      guild: n
    } = e, l = t.toLocaleLowerCase(), r = {
      exactQuery: RegExp("^".concat(F.default.escape(l)), "i"),
      containQuery: RegExp(F.default.escape(l), "i"),
      queryLower: l
    }, a = ((0, p.canSeeGuildHome)(n.id) || (0, m.canSeeOnboardingHome)(n.id)) && !n.hasFeature(H.GuildFeatures.HUB), i = n.hasFeature(H.GuildFeatures.COMMUNITY), u = (0, h.isGuildOnboardingAvailable)(n) && n.hasFeature(H.GuildFeatures.COMMUNITY), o = [{
      id: K.StaticChannelId.SERVER_GUIDE,
      name: j.default.Messages.SERVER_GUIDE
    }, {
      id: K.StaticChannelId.CHANNEL_BROWSER,
      name: j.default.Messages.CHANNEL_BROWSER_TITLE
    }, {
      id: K.StaticChannelId.CUSTOMIZE_COMMUNITY,
      name: j.default.Messages.CHANNELS_AND_ROLES
    }], s = [];
    for (let e of o) {
      if (e.id === K.StaticChannelId.SERVER_GUIDE && !a || e.id === K.StaticChannelId.CHANNEL_BROWSER && !i || e.id === K.StaticChannelId.CUSTOMIZE_COMMUNITY && !u) continue;
      let t = e.name.toLocaleLowerCase(),
        l = et(t, r, !1);
      l > 0 && s.push(new S.UnknownChannelRecord({
        id: e.id,
        name: e.name,
        type: H.ChannelTypes.UNKNOWN,
        guild_id: n.id
      }))
    }
    return s
  },
  queryChannelResults(e) {
    let {
      query: t,
      channel: n,
      type: l = I.GUILD_SELECTABLE_CHANNELS_KEY,
      channelTypes: r
    } = e, a = this.queryChannels({
      query: t,
      guildId: n.getGuildId(),
      limit: void 0,
      fuzzy: void 0,
      filter: e => null == r || r.includes(e.type),
      type: l,
      allowEmptyQueries: !0
    }).map(e => e.record);
    return {
      channels: a
    }
  },
  queryApplicationCommandChannelResults(e) {
    let {
      query: t,
      channel: n,
      channelTypes: l,
      limit: r = H.MAX_AUTOCOMPLETE_RESULTS,
      allowSnowflake: a
    } = e;
    if (null == n.guild_id) {
      let e = [];
      return (null == l || l.includes(n.type)) && e.push(n), {
        channels: e
      }
    }
    let i = [];
    for (let e of ee) i = i.concat(this.queryChannels({
      query: t,
      guildId: n.guild_id,
      limit: r,
      fuzzy: !0,
      filter: e => null == l || l.includes(e.type),
      type: e,
      allowEmptyQueries: !0,
      requireVocalConnectAccess: !1,
      allowSnowflake: a
    }));
    return i = i.filter(e => {
      let {
        record: t
      } = e;
      return "null" !== t.id
    }).sort(c.default), null != r && i.length > r && (i = i.slice(0, r)), {
      channels: i.map(e => e.record)
    }
  },
  queryChoiceResults(e) {
    let {
      query: t,
      choices: n
    } = e, l = this.queryChoice({
      query: t,
      choices: n,
      limit: null
    }).map(e => e.choice);
    return {
      choices: l
    }
  },
  queryEmojiResults(e) {
    let {
      query: t,
      channel: n,
      intention: l,
      maxCount: r = H.MAX_AUTOCOMPLETE_RESULTS,
      matchComparator: a
    } = e;
    A.FrecencyUserSettingsActionCreators.loadIfNecessary();
    let i = f.default.searchWithoutFetchingLatest({
      channel: n,
      query: t,
      count: r,
      intention: l,
      matchComparator: a
    });
    return {
      emojis: i
    }
  },
  queryStickers(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
      [n, l] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [null, Q],
      {
        stickerMetadata: r
      } = C.default,
      a = D.default.getCurrentUser(),
      i = new Set,
      o = [];
    for (let u of (A.FrecencyUserSettingsActionCreators.loadIfNecessary(), e)) {
      if ("" === u) continue;
      let e = u.toLocaleLowerCase(),
        s = (0, q.stripDiacritics)(e),
        c = RegExp("^".concat(F.default.escape(s)), "i"),
        d = RegExp("".concat(F.default.escape(s)), "i");
      r.forEach((r, u) => {
        let s = 0,
          f = null,
          p = C.default.getStickerById(u);
        if (null == p || !l(p, (0, g.getStickerSendability)(p, a, n))) return;
        for (let n of r) {
          let {
            type: l,
            value: r
          } = n, a = function(e) {
            switch (e) {
              case y.StickerMetadataTypes.STICKER_NAME:
                return 11;
              case y.StickerMetadataTypes.CORRELATED_EMOJI:
                return 6;
              case y.StickerMetadataTypes.TAG:
                return 1;
              case y.StickerMetadataTypes.GUILD_NAME:
              case y.StickerMetadataTypes.PACK_NAME:
                return 8;
              default:
                return 1
            }
          }(l), i = 0;
          t ? r === e ? i = 10 * a : c.test(r) ? i = 7 * a : (l === y.StickerMetadataTypes.GUILD_NAME || l === y.StickerMetadataTypes.PACK_NAME || l === y.StickerMetadataTypes.STICKER_NAME) && d.test(r) && (i = 5 * a) : r === e && (i = 10 * a, f = r), i > s && (s = i, f = r)
        }
        let h = E.default.stickerFrecencyWithoutFetchingLatest.getScore(u);
        null != h && (s *= h / 100), s > 0 && null != f && !i.has(p.id) && (i.add(p.id), o.push({
          sticker: p,
          comparator: f,
          score: s
        }))
      })
    }
    return 0 === (o = u(o).sortBy(e => -1 * e.score).value()).length && (o = z), o
  },
  matchSentinel(e, t, n) {
    let l = W.test(t);
    return !l && e === n
  },
  hasSameRoleAsUsername(e, t) {
    var n;
    if (!t.isPomelo()) return !1;
    let l = N.default.getGuild(e.getGuildId()),
      r = null !== (n = null == l ? void 0 : l.roles) && void 0 !== n ? n : {};
    for (let {
        name: e
      }
      of Object.values(r))
      if (t.username.startsWith(e.toLowerCase())) return !0;
    return !1
  }
}