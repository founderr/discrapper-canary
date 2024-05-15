"use strict";
n.r(t), n.d(t, {
  useGetCardUsers: function() {
    return P
  },
  useGetEventCardUsers: function() {
    return U
  },
  useGuildPopoutCards: function() {
    return v
  },
  useSortUserIdsByAffinity: function() {
    return M
  },
  useSortUsersByAffinity: function() {
    return y
  }
}), n("47120"), n("390547"), n("653041"), n("627341");
var i = n("470079"),
  r = n("392711"),
  a = n("278074"),
  s = n("442837"),
  o = n("317381"),
  l = n("841784"),
  u = n("924301"),
  d = n("565799"),
  _ = n("501655"),
  c = n("344185"),
  E = n("199902"),
  I = n("480294"),
  T = n("984933"),
  f = n("158776"),
  S = n("699516"),
  h = n("800599"),
  A = n("594174"),
  m = n("979651"),
  N = n("938475"),
  p = n("823379"),
  O = n("5192"),
  C = n("126134"),
  R = n("981631"),
  g = n("689938");
let L = {
  Event: 7,
  Game: 6,
  EmbeddedActivity: 5,
  Stream: 4,
  Video: 3,
  Voice: 2,
  Base: 1
};

function v(e) {
  let t = e.id,
    [n, d] = i.useState([]),
    [_, A] = i.useState(0),
    O = (0, s.useStateFromStoresArray)([T.default, c.default], () => {
      let e = T.default.getChannels(t)[T.GUILD_VOCAL_CHANNELS_KEY].filter(e => {
        let {
          channel: t
        } = e;
        return t.type === R.ChannelTypes.GUILD_VOICE
      }).map(e => {
        let {
          channel: t
        } = e;
        return t.id
      });
      return [...e, ...Object.values(c.default.getThreadsForGuild(t)).flatMap(e => Object.keys(e))]
    }, [t]),
    g = (0, s.useStateFromStoresArray)([u.default], () => u.default.getGuildScheduledEventsForGuild(t).filter(e => (0, u.isGuildScheduledEventActive)(e)).map(e => ({
      category: C.CardCategory.EVENT,
      event: e
    })), [t]),
    L = g.map(e => {
      let {
        event: t
      } = e;
      return t.channel_id
    }),
    v = (0, s.useStateFromStores)([S.default], () => S.default.getRelationships()),
    M = i.useMemo(() => Object.keys(v).filter(e => v[e] === R.RelationshipTypes.BLOCKED), [v]),
    y = (0, s.useStateFromStores)([N.default], () => N.default.getVoiceStates(t), [t]),
    P = i.useMemo(() => {
      let t = Object.keys(y);
      return 0 === t.length ? [] : t.filter(t => {
        let n = y[t].filter(p.isNotNullish);
        return !(0 === n.length || L.includes(t)) && null == n.find(e => {
          let {
            user: t
          } = e;
          return M.includes(t.id)
        }) && t !== e.afkChannelId && O.includes(t)
      })
    }, [y, L, O, M, e.afkChannelId]),
    U = (0, s.useStateFromStoresArray)([o.default, m.default, f.default, E.default], () => P.map(e => {
      let t = E.default.getAllApplicationStreamsForChannel(e).map(e => e.ownerId),
        n = y[e].filter(p.isNotNullish),
        i = o.default.getEmbeddedActivitiesForChannel(e),
        r = C.CardCategory.HANGOUT,
        a = [],
        s = [],
        u = n.map(e => {
          let {
            user: t
          } = e;
          return t.id
        }),
        d = m.default.hasVideo(e),
        _ = [],
        c = [];
      if (i.length > 0)
        for (let e of (r = C.CardCategory.EMBEDDED_ACTIVITY, i)) a.push(e);
      for (let e of n) {
        let t = f.default.findActivity(e.user.id, D(e));
        null != t && !(0, l.default)(t) && (r = C.CardCategory.GAMING, s.push(t), _.push(e.user.id)), e.voiceState.selfVideo && c.push(e.user.id)
      }
      return r === C.CardCategory.EMBEDDED_ACTIVITY ? {
        category: r,
        embeddedActivities: a,
        streamersCount: t.length,
        voiceUsersCount: n.length
      } : r === C.CardCategory.GAMING ? {
        category: r,
        channelId: e,
        games: s,
        voiceStates: n,
        streamersCount: t.length,
        gameUserIds: _
      } : {
        category: r,
        channelId: e,
        userIds: u,
        streamUserIds: t,
        channelHasVideo: d,
        videoUserIds: c
      }
    }), [y, P]),
    b = (0, s.useStateFromStores)([I.default], () => I.default.hasConsented(R.Consents.PERSONALIZATION)),
    G = (0, s.useStateFromStores)([h.default], () => h.default.getUserAffinities());
  if (0 === U.length && 0 === g.length) return 0 === O.length ? [] : O.slice(0, 2).map(e => ({
    category: C.CardCategory.EMPTY,
    channelId: e
  }));
  let w = b && G.length > 0,
    B = [...U, ...g];
  return _ !== B.length && (d((function(e, t) {
    return (0, r.orderBy)(e, [e => (function(e, t) {
      let n = e => e > 0 ? Math.log(e + 1) : 0,
        i = e => e.map(e => {
          var t, n;
          return null !== (n = null === (t = h.default.getUserAffinity(e)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0
        }).map(n),
        r = (0, a.match)(e).with({
          category: C.CardCategory.EVENT
        }, () => 7).with({
          category: C.CardCategory.GAMING
        }, () => 6).with({
          category: C.CardCategory.EMBEDDED_ACTIVITY
        }, () => 5).with({
          streamUserIds: a.P.when(e => e.length > 0)
        }, () => 4).with({
          channelHasVideo: !0
        }, () => 3).with({
          category: C.CardCategory.HANGOUT
        }, () => 2).otherwise(() => 1),
        s = 0;
      if (t) {
        if ("userIds" in e && (s += Math.max(...i(e.userIds))), "embeddedActivities" in e) {
          let t = new Set;
          e.embeddedActivities.forEach(e => {
            t = new Set([...t, ...e.userIds])
          }), s += Math.max(...i([...t]))
        }
        "voiceStates" in e && (s += Math.max(...i(e.voiceStates.filter(p.isNotNullish).map(e => {
          let {
            user: t
          } = e;
          return t.id
        }))))
      } else {
        if ("userIds" in e && (s += e.userIds.length), "embeddedActivities" in e) {
          let t = new Set;
          e.embeddedActivities.forEach(e => {
            t = new Set([t, ...e.userIds])
          }), s += t.size
        }
        "voiceStates" in e && (s += e.voiceStates.filter(p.isNotNullish).map(e => {
          let {
            user: t
          } = e;
          return t.id
        }).length)
      }
      return s = s > 0 ? s * r : 1e-5 * r
    })(e, t)], ["desc"])
  })(B, w).slice(0, 3)), A(B.length)), n
}
let D = e => t => [R.ActivityTypes.PLAYING, R.ActivityTypes.WATCHING].includes(t.type) && (null != t.assets || null != t.state || null != t.details || null != t.party) && (null == t.session_id || t.session_id === e.voiceState.sessionId);

function M(e) {
  return (0, s.useStateFromStoresArray)([I.default, h.default], () => {
    let t = I.default.hasConsented(R.Consents.PERSONALIZATION),
      n = h.default.getUserAffinities();
    return t && n.length > 0 ? (0, r.orderBy)(e, [e => {
      var t, n;
      return null !== (n = null === (t = h.default.getUserAffinity(e)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0
    }], ["desc"]) : e
  }, [e])
}

function y(e) {
  return (0, s.useStateFromStoresArray)([I.default, h.default], () => {
    let t = I.default.hasConsented(R.Consents.PERSONALIZATION),
      n = h.default.getUserAffinities();
    return t && n.length > 0 ? (0, r.orderBy)(e, [e => {
      var t, n;
      return null !== (n = null === (t = h.default.getUserAffinity(e.id)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0
    }], ["desc"]) : e
  }, [e])
}

function P(e, t, n, r) {
  let a;
  let s = M(e),
    o = i.useMemo(() => s.map(e => A.default.getUser(e)).filter(p.isNotNullish), [s]),
    l = o.slice(0, 6),
    u = Math.max(0, o.length - l.length);
  if (null != r && r.length > 0) {
    let e = O.default.getName(t, n, A.default.getUser(r[0]));
    a = 1 === r.length ? g.default.Messages.GUILD_POPOUT_ACTIVITY_STREAMER.format({
      username: e
    }) : g.default.Messages.GUILD_POPOUT_USERS_STREAMING.format({
      username: e,
      count: r.length - 1
    })
  } else {
    let e = O.default.getName(t, n, A.default.getUser(l[0].id));
    a = 1 === l.length ? g.default.Messages.GUILD_POPOUT_USER_IN_VOICE.format({
      username: e
    }) : g.default.Messages.GUILD_POPOUT_USERS_IN_VOICE.format({
      username: e,
      count: l.length - 1
    })
  }
  return {
    totalUsers: o.length,
    usersToShow: l,
    othersCount: u,
    usersText: a
  }
}

function U(e) {
  let t = (0, s.useStateFromStores)([d.default], () => null == e ? null : d.default.getParticipantCount(e.id, _.StageChannelParticipantNamedIndex.AUDIENCE)),
    n = (0, s.useStateFromStoresArray)([d.default], () => null == e ? [] : d.default.getMutableParticipants(e.id, _.StageChannelParticipantNamedIndex.SPEAKER).filter(e => e.type === _.StageChannelParticipantTypes.VOICE).map(e => {
      let {
        user: t
      } = e;
      return t
    })),
    i = (0, s.useStateFromStoresArray)([N.default], () => null == e ? [] : N.default.getVoiceStatesForChannel(e).filter(p.isNotNullish).map(e => {
      let {
        user: t
      } = e;
      return t
    }));
  if ((null == e ? void 0 : e.type) === R.ChannelTypes.GUILD_STAGE_VOICE) {
    let e = n.slice(0, 3),
      i = Math.max(0, n.length - e.length);
    return {
      usersToShow: e,
      othersCount: i,
      audienceCount: null != t ? t : 0
    }
  }
  if ((null == e ? void 0 : e.type) === R.ChannelTypes.GUILD_VOICE) {
    let e = i.slice(0, 7),
      t = Math.max(0, i.length - e.length);
    return {
      usersToShow: e,
      othersCount: t,
      audienceCount: null
    }
  }
  return {
    usersToShow: [],
    othersCount: 0,
    audienceCount: null
  }
}