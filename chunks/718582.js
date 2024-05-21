"use strict";
n.r(t), n.d(t, {
  useGetCardUsers: function() {
    return G
  },
  useGetEventCardUsers: function() {
    return w
  },
  useGuildPopoutCards: function() {
    return y
  },
  useSortUserIdsByAffinity: function() {
    return U
  },
  useSortUsersByAffinity: function() {
    return b
  },
  useVoiceChannelUsers: function() {
    return M
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
  I = n("592125"),
  T = n("480294"),
  f = n("984933"),
  S = n("496675"),
  h = n("158776"),
  A = n("699516"),
  m = n("800599"),
  N = n("594174"),
  p = n("979651"),
  O = n("938475"),
  C = n("823379"),
  R = n("5192"),
  g = n("126134"),
  L = n("981631"),
  v = n("689938");
let D = {
  Event: 7,
  Game: 6,
  EmbeddedActivity: 5,
  Stream: 4,
  Video: 3,
  Voice: 2,
  Base: 1
};

function M(e, t) {
  return G((0, s.useStateFromStores)([O.default], () => O.default.getVoiceStatesForChannelAlt(e, t), [e, t]).map(e => {
    let {
      user: t
    } = e;
    return t.id
  }), t, e)
}

function y(e) {
  let t = e.id,
    [n, d] = i.useState([]),
    [_, N] = i.useState(0),
    R = (0, s.useStateFromStoresArray)([f.default, c.default], () => {
      let e = f.default.getChannels(t)[f.GUILD_VOCAL_CHANNELS_KEY].map(e => {
        let {
          channel: t
        } = e;
        return t.id
      });
      return [...e, ...Object.values(c.default.getThreadsForGuild(t)).flatMap(e => Object.keys(e))]
    }, [t]),
    v = (0, s.useStateFromStores)([u.default, I.default], () => u.default.getGuildScheduledEventsForGuild(t).filter(e => (0, u.isGuildScheduledEventActive)(e)).map(e => {
      var t;
      return {
        category: g.CardCategory.EVENT,
        event: e,
        isStage: !!(null === (t = I.default.getChannel(e.channel_id)) || void 0 === t ? void 0 : t.isGuildStageVoice())
      }
    }), [t], r.isEqual),
    D = v.map(e => {
      let {
        event: t
      } = e;
      return t.channel_id
    }),
    M = (0, s.useStateFromStores)([A.default], () => A.default.getRelationships()),
    y = i.useMemo(() => Object.keys(M).filter(e => M[e] === L.RelationshipTypes.BLOCKED), [M]),
    U = (0, s.useStateFromStores)([O.default], () => O.default.getVoiceStates(t), [t]),
    b = i.useMemo(() => {
      let t = Object.keys(U);
      return 0 === t.length ? [] : t.filter(t => {
        let n = U[t].filter(C.isNotNullish);
        return !(0 === n.length || D.includes(t)) && !!S.default.can(L.Permissions.CONNECT, I.default.getChannel(t)) && null == n.find(e => {
          let {
            user: t
          } = e;
          return y.includes(t.id)
        }) && t !== e.afkChannelId && R.includes(t)
      })
    }, [U, D, R, y, e.afkChannelId]),
    G = (0, s.useStateFromStores)([o.default, p.default, E.default, h.default, I.default], () => b.map(e => {
      var t;
      let n = E.default.getAllApplicationStreamsForChannel(e).map(e => e.ownerId),
        i = U[e].filter(C.isNotNullish),
        r = o.default.getEmbeddedActivitiesForChannel(e),
        a = g.CardCategory.HANGOUT,
        s = [],
        u = i.map(e => {
          let {
            user: t
          } = e;
          return t.id
        }),
        d = p.default.hasVideo(e),
        _ = [],
        c = [];
      for (let e of (r.length > 0 && (a = g.CardCategory.EMBEDDED_ACTIVITY), i)) {
        let t = h.default.findActivity(e.user.id, P(e));
        null != t && !(0, l.default)(t) && (a = g.CardCategory.GAMING, s.push(t), _.push(e.user.id)), e.voiceState.selfVideo && c.push(e.user.id)
      }
      if (a === g.CardCategory.EMBEDDED_ACTIVITY) return {
        category: a,
        embeddedActivities: r,
        streamersCount: n.length,
        voiceUsersCount: i.length
      };
      if (a === g.CardCategory.GAMING) return {
        category: a,
        channelId: e,
        games: s,
        voiceStates: i,
        streamersCount: n.length,
        gameUserIds: _
      };
      return {
        category: a,
        channelId: e,
        userIds: u,
        streamUserIds: n,
        channelHasVideo: d,
        videoUserIds: c,
        isStage: !!(null === (t = I.default.getChannel(e)) || void 0 === t ? void 0 : t.isGuildStageVoice())
      }
    }), [U, b], r.isEqual),
    w = (0, s.useStateFromStores)([T.default], () => T.default.hasConsented(L.Consents.PERSONALIZATION)),
    k = (0, s.useStateFromStores)([m.default], () => m.default.getUserAffinities());
  if (0 === G.length && 0 === v.length) return 0 === R.length ? [] : R.slice(0, 2).map(e => ({
    category: g.CardCategory.EMPTY,
    channelId: e
  }));
  let B = w && k.length > 0,
    V = [...G, ...v];
  return _ !== V.length && (d((function(e, t) {
    return (0, r.orderBy)(e, [e => (function(e, t) {
      let n = e => e > 0 ? Math.log(e + 1) : 0,
        i = e => e.map(e => {
          var t, n;
          return null !== (n = null === (t = m.default.getUserAffinity(e)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0
        }).map(n),
        r = (0, a.match)(e).with({
          category: g.CardCategory.EVENT
        }, () => 7).with({
          category: g.CardCategory.GAMING
        }, () => 6).with({
          category: g.CardCategory.EMBEDDED_ACTIVITY
        }, () => 5).with({
          streamUserIds: a.P.when(e => e.length > 0)
        }, () => 4).with({
          channelHasVideo: !0
        }, () => 3).with({
          category: g.CardCategory.HANGOUT
        }, () => 2).otherwise(() => 1),
        s = 0;
      if (t) {
        if ("userIds" in e && (s += Math.max(...i(e.userIds))), "embeddedActivities" in e) {
          let t = new Set;
          e.embeddedActivities.forEach(e => {
            t = new Set([...t, ...e.userIds])
          }), s += Math.max(...i([...t]))
        }
        "voiceStates" in e && (s += Math.max(...i(e.voiceStates.filter(C.isNotNullish).map(e => {
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
        "voiceStates" in e && (s += e.voiceStates.filter(C.isNotNullish).map(e => {
          let {
            user: t
          } = e;
          return t.id
        }).length)
      }
      return s = s > 0 ? s * r : 1e-5 * r
    })(e, t)], ["desc"])
  })(V, B).slice(0, 3)), N(V.length)), n
}
let P = e => e => [L.ActivityTypes.PLAYING, L.ActivityTypes.WATCHING].includes(e.type) && (null != e.assets || null != e.state || null != e.details || null != e.party) && !1;

function U(e) {
  return (0, s.useStateFromStoresArray)([T.default, m.default], () => {
    let t = T.default.hasConsented(L.Consents.PERSONALIZATION),
      n = m.default.getUserAffinities();
    return t && n.length > 0 ? (0, r.orderBy)(e, [e => {
      var t, n;
      return null !== (n = null === (t = m.default.getUserAffinity(e)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0
    }], ["desc"]) : e
  }, [e])
}

function b(e) {
  return (0, s.useStateFromStoresArray)([T.default, m.default], () => {
    let t = T.default.hasConsented(L.Consents.PERSONALIZATION),
      n = m.default.getUserAffinities();
    return t && n.length > 0 ? (0, r.orderBy)(e, [e => {
      var t, n;
      return null !== (n = null === (t = m.default.getUserAffinity(e.id)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0
    }], ["desc"]) : e
  }, [e])
}

function G(e, t, n, r) {
  let a;
  let s = U(e),
    o = i.useMemo(() => s.map(e => N.default.getUser(e)).filter(C.isNotNullish), [s]),
    l = o.slice(0, 6),
    u = Math.max(0, o.length - l.length);
  if (null != r && r.length > 0) {
    let e = R.default.getName(t, n, N.default.getUser(r[0]));
    a = 1 === r.length ? v.default.Messages.GUILD_POPOUT_ACTIVITY_STREAMER.format({
      username: e
    }) : v.default.Messages.GUILD_POPOUT_USERS_STREAMING.format({
      username: e,
      count: r.length - 1
    })
  } else if (l.length > 0) {
    let e = R.default.getName(t, n, N.default.getUser(l[0].id));
    a = 1 === l.length ? v.default.Messages.GUILD_POPOUT_USER_IN_VOICE.format({
      username: e
    }) : v.default.Messages.GUILD_POPOUT_USERS_IN_VOICE.format({
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

function w(e) {
  let t = (0, s.useStateFromStores)([d.default], () => null == e ? null : d.default.getParticipantCount(e.id, _.StageChannelParticipantNamedIndex.AUDIENCE)),
    n = (0, s.useStateFromStoresArray)([d.default], () => null == e ? [] : d.default.getMutableParticipants(e.id, _.StageChannelParticipantNamedIndex.SPEAKER).filter(e => e.type === _.StageChannelParticipantTypes.VOICE).map(e => {
      let {
        user: t
      } = e;
      return t
    })),
    i = (0, s.useStateFromStoresArray)([O.default], () => null == e ? [] : O.default.getVoiceStatesForChannel(e).filter(C.isNotNullish).map(e => {
      let {
        user: t
      } = e;
      return t
    }));
  if ((null == e ? void 0 : e.type) === L.ChannelTypes.GUILD_STAGE_VOICE) {
    let e = n.slice(0, 3),
      i = Math.max(0, n.length - e.length);
    return {
      usersToShow: n,
      othersCount: i,
      audienceCount: null != t ? t : 0
    }
  }
  if ((null == e ? void 0 : e.type) === L.ChannelTypes.GUILD_VOICE) {
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