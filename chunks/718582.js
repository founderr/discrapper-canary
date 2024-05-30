"use strict";
n.r(t), n.d(t, {
  CardClickSources: function() {
    return i
  },
  getClickHandler: function() {
    return J
  },
  getJoinHandler: function() {
    return $
  },
  getUserNameString: function() {
    return Q
  },
  getVoiceChannelUsers: function() {
    return Y
  },
  trackClick: function() {
    return q
  },
  useGetEventCardUsers: function() {
    return X
  },
  useGuildPopoutCards: function() {
    return W
  },
  useSortUserIdsByAffinity: function() {
    return z
  },
  useSortUsersByAffinity: function() {
    return Z
  },
  useVoiceChannelUsers: function() {
    return j
  }
}), n("47120"), n("390547"), n("653041"), n("627341");
var i, r, s = n("470079"),
  a = n("392711"),
  o = n("278074"),
  l = n("442837"),
  u = n("317381"),
  d = n("841784"),
  _ = n("557135"),
  c = n("66999"),
  E = n("15274"),
  I = n("924301"),
  T = n("703656"),
  f = n("881824"),
  S = n("922482"),
  h = n("565799"),
  A = n("501655"),
  m = n("344185"),
  N = n("199902"),
  p = n("592125"),
  O = n("480294"),
  C = n("984933"),
  R = n("271383"),
  g = n("496675"),
  L = n("158776"),
  v = n("699516"),
  D = n("800599"),
  M = n("594174"),
  y = n("979651"),
  P = n("938475"),
  U = n("626135"),
  b = n("823379"),
  G = n("5192"),
  w = n("51144"),
  k = n("912787"),
  B = n("126134"),
  V = n("981631"),
  x = n("765305"),
  F = n("689938");
let H = {
  Event: 7,
  Game: 6,
  EmbeddedActivity: 5,
  Stream: 4,
  Video: 3,
  Voice: 2,
  Base: 1
};

function Y(e, t) {
  let n = P.default.getVoiceStatesForChannelAlt(e, t).map(e => {
      let {
        user: t
      } = e;
      return t.id
    }),
    i = O.default.hasConsented(V.Consents.PERSONALIZATION),
    r = D.default.getUserAffinities();
  return (i && r.length > 0 ? (0, a.orderBy)(n, [e => {
    var t, n;
    return null !== (n = null === (t = D.default.getUserAffinity(e)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0
  }], ["desc"]) : n).map(e => M.default.getUser(e)).filter(b.isNotNullish)
}

function j(e, t) {
  return function(e, t, n, i) {
    let r;
    let a = z(e),
      o = s.useMemo(() => a.map(e => M.default.getUser(e)).filter(b.isNotNullish), [a]),
      l = o.slice(0, 6),
      u = Math.max(0, o.length - l.length);
    if (null != i && i.length > 0) {
      let e = G.default.getName(t, n, M.default.getUser(i[0]));
      r = 1 === i.length ? F.default.Messages.GUILD_POPOUT_ACTIVITY_STREAMER.format({
        username: e
      }) : F.default.Messages.GUILD_POPOUT_USERS_STREAMING.format({
        username: e,
        count: i.length - 1
      })
    } else if (l.length > 0) {
      let e = G.default.getName(t, n, M.default.getUser(l[0].id));
      r = 1 === l.length ? F.default.Messages.GUILD_POPOUT_USER_IN_VOICE.format({
        username: e
      }) : F.default.Messages.GUILD_POPOUT_USERS_IN_VOICE.format({
        username: e,
        count: l.length - 1
      })
    }
    return {
      totalUsers: o.length,
      usersToShow: l,
      othersCount: u,
      usersText: r
    }
  }((0, l.useStateFromStores)([P.default], () => P.default.getVoiceStatesForChannelAlt(e, t), [e, t]).map(e => {
    let {
      user: t
    } = e;
    return t.id
  }), t, e)
}

function W(e) {
  let t = e.id,
    [n, i] = s.useState([]),
    [r, _] = s.useState(0),
    c = (0, l.useStateFromStoresArray)([C.default, m.default], () => {
      let e = C.default.getChannels(t)[C.GUILD_VOCAL_CHANNELS_KEY].map(e => {
        let {
          channel: t
        } = e;
        return t.id
      });
      return [...e, ...Object.values(m.default.getThreadsForGuild(t)).flatMap(e => Object.keys(e))]
    }, [t]),
    E = (0, l.useStateFromStores)([I.default, p.default], () => I.default.getGuildScheduledEventsForGuild(t).filter(e => (0, I.isGuildScheduledEventActive)(e)).map(e => {
      var t;
      return {
        category: B.CardCategory.EVENT,
        event: e,
        isStage: !!(null === (t = p.default.getChannel(e.channel_id)) || void 0 === t ? void 0 : t.isGuildStageVoice())
      }
    }), [t], a.isEqual),
    T = E.map(e => {
      let {
        event: t
      } = e;
      return t.channel_id
    }),
    f = (0, l.useStateFromStores)([v.default], () => v.default.getRelationships()),
    S = s.useMemo(() => Object.keys(f).filter(e => f[e] === V.RelationshipTypes.BLOCKED), [f]),
    h = (0, l.useStateFromStores)([P.default], () => P.default.getVoiceStates(t), [t]),
    A = s.useMemo(() => {
      let t = Object.keys(h);
      return 0 === t.length ? [] : t.filter(t => {
        let n = h[t].filter(b.isNotNullish);
        return !(0 === n.length || T.includes(t)) && null == n.find(e => {
          let {
            user: t
          } = e;
          return S.includes(t.id)
        }) && t !== e.afkChannelId && c.includes(t)
      })
    }, [h, T, c, S, e.afkChannelId]),
    R = (0, l.useStateFromStores)([u.default, y.default, N.default, L.default, p.default], () => A.map(e => {
      var t;
      let n = N.default.getAllApplicationStreamsForChannel(e).map(e => e.ownerId),
        i = h[e].filter(b.isNotNullish),
        r = u.default.getEmbeddedActivitiesForChannel(e),
        s = B.CardCategory.HANGOUT,
        a = [],
        o = i.map(e => {
          let {
            user: t
          } = e;
          return t.id
        }),
        l = y.default.hasVideo(e),
        _ = [],
        c = [];
      for (let e of (r.length > 0 && (s = B.CardCategory.EMBEDDED_ACTIVITY), i)) {
        let t = L.default.findActivity(e.user.id, K(e));
        null != t && !(0, d.default)(t) && (s = B.CardCategory.GAMING, a.push(t), _.push(e.user.id)), e.voiceState.selfVideo && c.push(e.user.id)
      }
      if (s === B.CardCategory.EMBEDDED_ACTIVITY) return {
        category: s,
        embeddedActivities: r,
        streamersCount: n.length,
        voiceUsersCount: i.length
      };
      if (s === B.CardCategory.GAMING) return {
        category: s,
        channelId: e,
        games: a,
        voiceStates: i,
        streamersCount: n.length,
        gameUserIds: _
      };
      return {
        category: s,
        channelId: e,
        userIds: o,
        streamUserIds: n,
        channelHasVideo: l,
        videoUserIds: c,
        isStage: !!(null === (t = p.default.getChannel(e)) || void 0 === t ? void 0 : t.isGuildStageVoice())
      }
    }), [h, A], a.isEqual),
    g = (0, l.useStateFromStores)([O.default], () => O.default.hasConsented(V.Consents.PERSONALIZATION)),
    M = (0, l.useStateFromStores)([D.default], () => D.default.getUserAffinities()),
    U = g && M.length > 0,
    G = [...R, ...E];
  return r !== G.length && (i((function(e, t) {
    return (0, a.orderBy)(e, [e => (function(e, t) {
      let n = e => e > 0 ? Math.log(e + 1) : 0,
        i = e => e.map(e => {
          var t, n;
          return null !== (n = null === (t = D.default.getUserAffinity(e)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0
        }).map(n),
        r = (0, o.match)(e).with({
          category: B.CardCategory.EVENT
        }, () => 7).with({
          category: B.CardCategory.GAMING
        }, () => 6).with({
          category: B.CardCategory.EMBEDDED_ACTIVITY
        }, () => 5).with({
          streamUserIds: o.P.when(e => e.length > 0)
        }, () => 4).with({
          channelHasVideo: !0
        }, () => 3).with({
          category: B.CardCategory.HANGOUT
        }, () => 2).otherwise(() => 1),
        s = 0;
      if (t) {
        if ("userIds" in e && (s += Math.max(...i(e.userIds))), "embeddedActivities" in e) {
          let t = new Set;
          e.embeddedActivities.forEach(e => {
            t = new Set([...t, ...e.userIds])
          }), s += Math.max(...i([...t]))
        }
        "voiceStates" in e && (s += Math.max(...i(e.voiceStates.filter(b.isNotNullish).map(e => {
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
        "voiceStates" in e && (s += e.voiceStates.filter(b.isNotNullish).map(e => {
          let {
            user: t
          } = e;
          return t.id
        }).length)
      }
      return s = s > 0 ? s * r : 1e-5 * r
    })(e, t)], ["desc"])
  })(G, U).slice(0, 3)), _(G.length)), n
}(r = i || (i = {})).CARD = "card", r.JOIN_BUTTON = "join_button";
let K = e => e => [V.ActivityTypes.PLAYING, V.ActivityTypes.WATCHING].includes(e.type) && (null != e.assets || null != e.state || null != e.details || null != e.party) && !1;

function z(e) {
  return (0, l.useStateFromStoresArray)([O.default, D.default], () => {
    let t = O.default.hasConsented(V.Consents.PERSONALIZATION),
      n = D.default.getUserAffinities();
    return t && n.length > 0 ? (0, a.orderBy)(e, [e => {
      var t, n;
      return null !== (n = null === (t = D.default.getUserAffinity(e)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0
    }], ["desc"]) : e
  }, [e])
}

function Z(e) {
  return (0, l.useStateFromStoresArray)([O.default, D.default], () => {
    let t = O.default.hasConsented(V.Consents.PERSONALIZATION),
      n = D.default.getUserAffinities();
    return t && n.length > 0 ? (0, a.orderBy)(e, [e => {
      var t, n;
      return null !== (n = null === (t = D.default.getUserAffinity(e.id)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0
    }], ["desc"]) : e
  }, [e])
}

function X(e) {
  let t = (0, l.useStateFromStores)([h.default], () => null == e ? null : h.default.getParticipantCount(e.id, A.StageChannelParticipantNamedIndex.AUDIENCE)),
    n = (0, l.useStateFromStoresArray)([h.default], () => null == e ? [] : h.default.getMutableParticipants(e.id, A.StageChannelParticipantNamedIndex.SPEAKER).filter(e => e.type === A.StageChannelParticipantTypes.VOICE).map(e => {
      let {
        user: t
      } = e;
      return t
    })),
    i = (0, l.useStateFromStoresArray)([P.default], () => null == e ? [] : P.default.getVoiceStatesForChannel(e).filter(b.isNotNullish).map(e => {
      let {
        user: t
      } = e;
      return t
    }));
  if ((null == e ? void 0 : e.type) === V.ChannelTypes.GUILD_STAGE_VOICE) {
    let e = n.slice(0, 3),
      i = Math.max(0, n.length - e.length);
    return {
      usersToShow: n,
      othersCount: i,
      audienceCount: null != t ? t : 0
    }
  }
  if ((null == e ? void 0 : e.type) === V.ChannelTypes.GUILD_VOICE) {
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

function Q(e, t) {
  var n, i;
  let r = (n = e, i = t, n.map(e => {
      var t;
      let n = M.default.getUser(e);
      if (null == n) return null;
      let r = R.default.getNick(i, n.id);
      return null !== (t = null != r ? r : w.default.getGlobalName(n)) && void 0 !== t ? t : w.default.getUserTag(n)
    }).filter(e => null != e)),
    s = r.length;
  if (s > 0) return 1 === s ? r[0] : (2 === s ? F.default.Messages.USER_SUMMARY_TWO : 3 === s ? F.default.Messages.USER_SUMMARY_THREE : F.default.Messages.USER_SUMMARY_THREE_AND_OTHERS).format({
    first: r[0],
    second: null == r ? void 0 : r[1],
    third: null == r ? void 0 : r[2],
    count: s - 3
  })
}

function q(e, t, n, i) {
  var r, s;
  let a = {},
    o = null !== (s = (0, k.getChannelIdFromCardData)(e)) && void 0 !== s ? s : "";
  a.source = i, a.card_type = e.category, a.card_position = n, a.channel_id = o, a.channel_type = null === (r = p.default.getChannel(o)) || void 0 === r ? void 0 : r.type;
  let l = Y(o, t);
  a.card_affinity_users_count = Math.min(l.length, 6), a.card_total_users_count = l.length, a.card_affinity_user_ids = l.slice(0, 6).map(e => e.id), a.card_max_affinity_user_id = l.length > 0 ? l[0].id : "0", a.card_user_affinity_scores = l.slice(0, 6).map(e => {
    var t, n;
    return null !== (n = null === (t = D.default.getUserAffinity(e.id)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0
  }), U.default.track(V.AnalyticEvents.GUILD_TOOLTIP_CARD_CLICKED, {
    ...a,
    guild_id: t
  })
}

function J(e, t, n) {
  let {
    category: i
  } = e;
  switch (i) {
    case B.CardCategory.GAMING:
      return () => {
        q(e, t, n, "card"), (0, T.transitionToGuild)(t, e.channelId)
      };
    case B.CardCategory.EMBEDDED_ACTIVITY:
      return () => {
        q(e, t, n, "card"), (0, T.transitionToGuild)(t, e.embeddedActivities[0].channelId)
      };
    case B.CardCategory.EVENT:
      return () => {
        q(e, t, n, "card"), (0, E.openGuildEventDetails)({
          eventId: e.event.id
        })
      };
    case B.CardCategory.HANGOUT:
      return () => {
        q(e, t, n, "card"), (0, T.transitionToGuild)(t, e.channelId)
      };
    default:
      return null
  }
}

function $(e, t) {
  let {
    category: n
  } = e;
  switch (n) {
    case B.CardCategory.HANGOUT:
    case B.CardCategory.GAMING:
      return () => {
        let {
          channelId: n
        } = e, i = p.default.getChannel(n);
        null != i && i.type === V.ChannelTypes.GUILD_VOICE && g.default.can(V.Permissions.CONNECT, i) && (_.default.handleVoiceConnect({
          channel: i,
          connected: y.default.isInChannel(n),
          needSubscriptionToAccess: (0, c.getChannelRoleSubscriptionStatus)(n).needSubscriptionToAccess,
          locked: !1
        }), (0, T.transitionToGuild)(t, n))
      };
    case B.CardCategory.EMBEDDED_ACTIVITY:
      return () => {
        let {
          channelId: n
        } = e.embeddedActivities[0], i = p.default.getChannel(n);
        null != i && i.type === V.ChannelTypes.GUILD_VOICE && g.default.can(V.Permissions.CONNECT, i) && (_.default.handleVoiceConnect({
          channel: i,
          connected: y.default.isInChannel(n),
          needSubscriptionToAccess: (0, c.getChannelRoleSubscriptionStatus)(n).needSubscriptionToAccess,
          locked: !1
        }), (0, T.transitionToGuild)(t, n))
      };
    case B.CardCategory.EVENT:
      return () => {
        let {
          event: t
        } = e, {
          channel_id: n,
          guild_id: i,
          entity_type: r
        } = t, s = p.default.getChannel(n);
        if (null == n || null == s || !g.default.can(V.Permissions.CONNECT, s)) {
          (0, E.openGuildEventDetails)({
            eventId: t.id
          });
          return
        }
        let a = async () => {
          let e = await (0, S.connectOrLurkStage)(i, n);
          (0, f.navigateToStage)(e, null, !1)
        };
        r === x.GuildScheduledEventEntityTypes.STAGE_INSTANCE ? a() : r === x.GuildScheduledEventEntityTypes.VOICE && (_.default.handleVoiceConnect({
          channel: s,
          connected: y.default.isInChannel(n),
          needSubscriptionToAccess: (0, c.getChannelRoleSubscriptionStatus)(n).needSubscriptionToAccess,
          locked: !1
        }), (0, T.transitionToGuild)(i, n))
      };
    default:
      return null
  }
}