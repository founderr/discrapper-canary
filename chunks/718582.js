"use strict";
n.r(t), n.d(t, {
  useGetCardUsers: function() {
    return y
  },
  useGetEventCardUsers: function() {
    return P
  },
  useGuildPopoutCards: function() {
    return D
  }
}), n("47120"), n("390547"), n("653041"), n("627341");
var i = n("470079"),
  r = n("392711"),
  a = n.n(r),
  s = n("278074"),
  o = n("442837"),
  l = n("317381"),
  u = n("841784"),
  d = n("924301"),
  _ = n("565799"),
  c = n("501655"),
  E = n("344185"),
  I = n("199902"),
  T = n("480294"),
  f = n("984933"),
  S = n("158776"),
  h = n("699516"),
  A = n("800599"),
  m = n("594174"),
  N = n("979651"),
  p = n("938475"),
  O = n("823379"),
  C = n("5192"),
  R = n("126134"),
  g = n("981631"),
  L = n("689938");
let v = {
  Event: 7,
  Game: 6,
  EmbeddedActivity: 5,
  Stream: 4,
  Video: 3,
  Voice: 2,
  Base: 1
};

function D(e) {
  let t = e.id,
    [n, a] = i.useState([]),
    [_, c] = i.useState(0),
    m = (0, o.useStateFromStoresArray)([f.default, E.default], () => {
      let e = f.default.getChannels(t)[f.GUILD_VOCAL_CHANNELS_KEY].filter(e => {
        let {
          channel: t
        } = e;
        return t.type === g.ChannelTypes.GUILD_VOICE
      }).map(e => {
        let {
          channel: t
        } = e;
        return t.id
      });
      return [...e, ...Object.values(E.default.getThreadsForGuild(t)).flatMap(e => Object.keys(e))]
    }, [t]),
    C = (0, o.useStateFromStoresArray)([d.default], () => d.default.getGuildScheduledEventsForGuild(t).filter(e => (0, d.isGuildScheduledEventActive)(e)).map(e => ({
      category: R.CardCategory.EVENT,
      event: e
    })), [t]),
    L = C.map(e => {
      let {
        event: t
      } = e;
      return t.channel_id
    }),
    v = (0, o.useStateFromStores)([h.default], () => h.default.getRelationships()),
    D = i.useMemo(() => Object.keys(v).filter(e => v[e] === g.RelationshipTypes.BLOCKED), [v]),
    y = (0, o.useStateFromStores)([p.default], () => p.default.getVoiceStates(t), [t]),
    P = i.useMemo(() => {
      let t = Object.keys(y);
      return 0 === t.length ? [] : t.filter(t => {
        let n = y[t].filter(O.isNotNullish);
        return !(0 === n.length || L.includes(t)) && null == n.find(e => {
          let {
            user: t
          } = e;
          return D.includes(t.id)
        }) && t !== e.afkChannelId && m.includes(t)
      })
    }, [y, L, m, D, e.afkChannelId]),
    U = (0, o.useStateFromStoresArray)([l.default, N.default, S.default, I.default], () => P.map(e => {
      let t = I.default.getAllApplicationStreamsForChannel(e).map(e => e.ownerId),
        n = y[e].filter(O.isNotNullish),
        i = l.default.getEmbeddedActivitiesForChannel(e),
        r = R.CardCategory.HANGOUT,
        a = [],
        s = [],
        o = n.map(e => {
          let {
            user: t
          } = e;
          return t.id
        }),
        d = N.default.hasVideo(e),
        _ = [];
      if (i.length > 0)
        for (let e of (r = R.CardCategory.EMBEDDED_ACTIVITY, i)) a.push(e);
      for (let e of n) {
        let t = S.default.findActivity(e.user.id, M(e));
        null != t && !(0, u.default)(t) && (r = R.CardCategory.GAMING, s.push(t), _.push(e.user.id))
      }
      return r === R.CardCategory.EMBEDDED_ACTIVITY ? {
        category: r,
        embeddedActivities: a,
        streamersCount: t.length,
        voiceUsersCount: n.length
      } : r === R.CardCategory.GAMING ? {
        category: r,
        channelId: e,
        games: s,
        voiceStates: n,
        streamersCount: t.length,
        gameUserIds: _
      } : {
        category: r,
        channelId: e,
        userIds: o,
        streamUserIds: t,
        channelHasVideo: d
      }
    }), [y, P]),
    b = (0, o.useStateFromStores)([T.default], () => T.default.hasConsented(g.Consents.PERSONALIZATION)),
    G = (0, o.useStateFromStores)([A.default], () => A.default.getUserAffinities());
  if (0 === U.length && 0 === C.length) return 0 === m.length ? [] : m.slice(0, 2).map(e => ({
    category: R.CardCategory.EMPTY,
    channelId: e
  }));
  let w = b && G.length > 0,
    B = [...U, ...C];
  return _ !== B.length && (a((function(e, t) {
    return (0, r.orderBy)(e, [e => (function(e, t) {
      let n = e => e > 0 ? Math.log(e + 1) : 0,
        i = e => e.map(e => {
          var t, n;
          return null !== (n = null === (t = A.default.getUserAffinity(e)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0
        }).map(n),
        r = (0, s.match)(e).with({
          category: R.CardCategory.EVENT
        }, () => 7).with({
          category: R.CardCategory.GAMING
        }, () => 6).with({
          category: R.CardCategory.EMBEDDED_ACTIVITY
        }, () => 5).with({
          streamUserIds: s.P.when(e => e.length > 0)
        }, () => 4).with({
          channelHasVideo: !0
        }, () => 3).with({
          category: R.CardCategory.HANGOUT
        }, () => 2).otherwise(() => 1),
        a = 0;
      if (t) {
        if ("userIds" in e && (a += Math.max(...i(e.userIds))), "embeddedActivities" in e) {
          let t = new Set;
          e.embeddedActivities.forEach(e => {
            t = new Set([...t, ...e.userIds])
          }), a += Math.max(...i([...t]))
        }
        "voiceStates" in e && (a += Math.max(...i(e.voiceStates.filter(O.isNotNullish).map(e => {
          let {
            user: t
          } = e;
          return t.id
        }))))
      } else {
        if ("userIds" in e && (a += e.userIds.length), "embeddedActivities" in e) {
          let t = new Set;
          e.embeddedActivities.forEach(e => {
            t = new Set([t, ...e.userIds])
          }), a += t.size
        }
        "voiceStates" in e && (a += e.voiceStates.filter(O.isNotNullish).map(e => {
          let {
            user: t
          } = e;
          return t.id
        }).length)
      }
      return a = a > 0 ? a * r : 1e-5 * r
    })(e, t)], ["desc"])
  })(B, w).slice(0, 3)), c(B.length)), n
}
let M = e => t => [g.ActivityTypes.PLAYING, g.ActivityTypes.WATCHING].includes(t.type) && (null != t.assets || null != t.state || null != t.details || null != t.party) && (null == t.session_id || t.session_id === e.voiceState.sessionId);

function y(e, t, n, i) {
  let s;
  let l = (0, o.useStateFromStoresArray)([T.default, A.default, m.default], () => {
      let t = T.default.hasConsented(g.Consents.PERSONALIZATION),
        n = A.default.getUserAffinities(),
        i = a()(e).map(e => m.default.getUser(e)).filter(O.isNotNullish).value();
      return t && n.length > 0 ? (0, r.orderBy)(i, [e => {
        var t, n;
        return null !== (n = null === (t = A.default.getUserAffinity(e.id)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0
      }], ["desc"]) : i
    }),
    u = l.slice(0, 7),
    d = Math.max(0, l.length - u.length);
  if (null != i && i.length > 0) {
    let e = C.default.getName(t, n, m.default.getUser(i[0]));
    s = 1 === i.length ? L.default.Messages.GUILD_POPOUT_ACTIVITY_STREAMER.format({
      username: e
    }) : L.default.Messages.GUILD_POPOUT_USERS_STREAMING.format({
      username: e,
      count: i.length - 1
    })
  } else {
    let e = C.default.getName(t, n, m.default.getUser(u[0].id));
    s = 1 === u.length ? L.default.Messages.GUILD_POPOUT_USER_IN_VOICE.format({
      username: e
    }) : L.default.Messages.GUILD_POPOUT_USERS_IN_VOICE.format({
      username: e,
      count: u.length - 1
    })
  }
  return {
    totalUsers: l.length,
    usersToShow: u,
    othersCount: d,
    usersText: s
  }
}

function P(e) {
  let t = (0, o.useStateFromStores)([_.default], () => null == e ? null : _.default.getParticipantCount(e.id, c.StageChannelParticipantNamedIndex.AUDIENCE)),
    n = (0, o.useStateFromStoresArray)([_.default], () => null == e ? [] : _.default.getMutableParticipants(e.id, c.StageChannelParticipantNamedIndex.SPEAKER).filter(e => e.type === c.StageChannelParticipantTypes.VOICE).map(e => {
      let {
        user: t
      } = e;
      return t
    })),
    i = (0, o.useStateFromStoresArray)([p.default], () => null == e ? [] : p.default.getVoiceStatesForChannel(e).filter(O.isNotNullish).map(e => {
      let {
        user: t
      } = e;
      return t
    }));
  if ((null == e ? void 0 : e.type) === g.ChannelTypes.GUILD_STAGE_VOICE) {
    let e = n.slice(0, 3),
      i = Math.max(0, n.length - e.length);
    return {
      usersToShow: e,
      othersCount: i,
      audienceCount: null != t ? t : 0
    }
  }
  if ((null == e ? void 0 : e.type) === g.ChannelTypes.GUILD_VOICE) {
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