"use strict";
n.r(t), n.d(t, {
  CardClickSources: function() {
    return i
  },
  getClickHandler: function() {
    return ei
  },
  getEventLocationData: function() {
    return es
  },
  getJoinHandler: function() {
    return er
  },
  getUserNameString: function() {
    return et
  },
  getVoiceChannelUsers: function() {
    return Z
  },
  trackClick: function() {
    return en
  },
  useGetEventCardUsers: function() {
    return ee
  },
  useGetOrFetchEmbeddedActivityApplication: function() {
    return ea
  },
  useGuildPopoutCards: function() {
    return Q
  },
  useSortUserIdsByAffinity: function() {
    return J
  },
  useSortUsersByAffinity: function() {
    return $
  },
  useVoiceChannelUsers: function() {
    return X
  }
}), n("47120"), n("390547"), n("653041"), n("627341"), n("757143");
var i, r, s = n("470079"),
  a = n("392711"),
  o = n("278074"),
  l = n("442837"),
  u = n("925549"),
  d = n("317381"),
  _ = n("841784"),
  c = n("835473"),
  E = n("557135"),
  I = n("471445"),
  T = n("66999"),
  f = n("15274"),
  S = n("924301"),
  h = n("230900"),
  A = n("703656"),
  m = n("881824"),
  N = n("922482"),
  p = n("565799"),
  O = n("501655"),
  C = n("344185"),
  R = n("199902"),
  g = n("592125"),
  L = n("480294"),
  v = n("984933"),
  D = n("271383"),
  M = n("496675"),
  y = n("158776"),
  P = n("699516"),
  U = n("800599"),
  b = n("594174"),
  G = n("979651"),
  w = n("938475"),
  k = n("393112"),
  B = n("626135"),
  V = n("823379"),
  x = n("5192"),
  F = n("51144"),
  H = n("912787"),
  Y = n("126134"),
  j = n("981631"),
  W = n("765305"),
  K = n("689938");
let z = {
  Event: 7,
  Game: 6,
  EmbeddedActivity: 5,
  Stream: 4,
  Video: 3,
  Voice: 2,
  Base: 1
};

function Z(e, t) {
  let n = w.default.getVoiceStatesForChannelAlt(e, t).map(e => {
      let {
        user: t
      } = e;
      return t.id
    }),
    i = L.default.hasConsented(j.Consents.PERSONALIZATION),
    r = U.default.getUserAffinities();
  return (i && r.length > 0 ? (0, a.orderBy)(n, [e => {
    var t, n;
    return null !== (n = null === (t = U.default.getUserAffinity(e)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0
  }], ["desc"]) : n).map(e => b.default.getUser(e)).filter(V.isNotNullish)
}

function X(e, t) {
  return function(e, t, n, i) {
    let r;
    let a = J(e),
      o = s.useMemo(() => a.map(e => b.default.getUser(e)).filter(V.isNotNullish), [a]),
      l = o.slice(0, 6),
      u = Math.max(0, o.length - l.length);
    if (null != i && i.length > 0) {
      let e = x.default.getName(t, n, b.default.getUser(i[0]));
      r = 1 === i.length ? K.default.Messages.GUILD_POPOUT_ACTIVITY_STREAMER.format({
        username: e
      }) : K.default.Messages.GUILD_POPOUT_USERS_STREAMING.format({
        username: e,
        count: i.length - 1
      })
    } else if (l.length > 0) {
      let e = x.default.getName(t, n, b.default.getUser(l[0].id));
      r = 1 === l.length ? K.default.Messages.GUILD_POPOUT_USER_IN_VOICE.format({
        username: e
      }) : K.default.Messages.GUILD_POPOUT_USERS_IN_VOICE.format({
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
  }((0, l.useStateFromStores)([w.default], () => w.default.getVoiceStatesForChannelAlt(e, t), [e, t]).map(e => {
    let {
      user: t
    } = e;
    return t.id
  }), t, e)
}

function Q(e) {
  let t = e.id,
    [n, i] = s.useState([]),
    [r, u] = s.useState(0),
    c = (0, l.useStateFromStoresArray)([v.default, C.default], () => {
      let e = v.default.getChannels(t)[v.GUILD_VOCAL_CHANNELS_KEY].map(e => {
        let {
          channel: t
        } = e;
        return t.id
      });
      return [...e, ...Object.values(C.default.getThreadsForGuild(t)).flatMap(e => Object.keys(e))]
    }, [t]),
    E = (0, l.useStateFromStores)([S.default, g.default], () => S.default.getGuildScheduledEventsForGuild(t).filter(e => (0, S.isGuildScheduledEventActive)(e)).map(e => {
      var t;
      return {
        category: Y.CardCategory.EVENT,
        event: e,
        isStage: !!(null === (t = g.default.getChannel(e.channel_id)) || void 0 === t ? void 0 : t.isGuildStageVoice())
      }
    }), [t], a.isEqual),
    I = E.map(e => {
      let {
        event: t
      } = e;
      return t.channel_id
    }),
    T = (0, l.useStateFromStores)([P.default], () => P.default.getRelationships()),
    f = s.useMemo(() => Object.keys(T).filter(e => T[e] === j.RelationshipTypes.BLOCKED), [T]),
    h = (0, l.useStateFromStores)([w.default], () => w.default.getVoiceStates(t), [t]),
    A = s.useMemo(() => {
      let t = Object.keys(h);
      return 0 === t.length ? [] : t.filter(t => {
        let n = h[t].filter(V.isNotNullish);
        return !(0 === n.length || I.includes(t)) && null == n.find(e => {
          let {
            user: t
          } = e;
          return f.includes(t.id)
        }) && t !== e.afkChannelId && c.includes(t)
      })
    }, [h, I, c, f, e.afkChannelId]),
    m = (0, l.useStateFromStores)([d.default, G.default, R.default, y.default, g.default], () => A.map(e => {
      var t;
      let n = R.default.getAllApplicationStreamsForChannel(e).map(e => e.ownerId),
        i = h[e].filter(V.isNotNullish),
        r = d.default.getEmbeddedActivitiesForChannel(e),
        s = Y.CardCategory.HANGOUT,
        a = [],
        o = i.map(e => {
          let {
            user: t
          } = e;
          return t.id
        }),
        l = G.default.hasVideo(e),
        u = [],
        c = [];
      for (let e of (r.length > 0 && (s = Y.CardCategory.EMBEDDED_ACTIVITY), i)) {
        let t = y.default.findActivity(e.user.id, q(e));
        null != t && !(0, _.default)(t) && (s = Y.CardCategory.GAMING, a.push(t), u.push(e.user.id)), e.voiceState.selfVideo && c.push(e.user.id)
      }
      if (s === Y.CardCategory.EMBEDDED_ACTIVITY) return {
        category: s,
        embeddedActivities: r,
        streamersCount: n.length,
        voiceUsersCount: i.length
      };
      if (s === Y.CardCategory.GAMING) return {
        category: s,
        channelId: e,
        games: a,
        voiceStates: i,
        streamersCount: n.length,
        gameUserIds: u
      };
      return {
        category: s,
        channelId: e,
        userIds: o,
        streamUserIds: n,
        channelHasVideo: l,
        videoUserIds: c,
        isStage: !!(null === (t = g.default.getChannel(e)) || void 0 === t ? void 0 : t.isGuildStageVoice())
      }
    }), [h, A], a.isEqual),
    N = (0, l.useStateFromStores)([L.default], () => L.default.hasConsented(j.Consents.PERSONALIZATION)),
    p = (0, l.useStateFromStores)([U.default], () => U.default.getUserAffinities()),
    O = N && p.length > 0,
    D = [...m, ...E];
  return r !== D.length && (i((function(e, t) {
    return (0, a.orderBy)(e, [e => (function(e, t) {
      let n = e => e > 0 ? Math.log(e + 1) : 0,
        i = e => e.map(e => {
          var t, n;
          return null !== (n = null === (t = U.default.getUserAffinity(e)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0
        }).map(n),
        r = (0, o.match)(e).with({
          category: Y.CardCategory.EVENT
        }, () => 7).with({
          category: Y.CardCategory.GAMING
        }, () => 6).with({
          category: Y.CardCategory.EMBEDDED_ACTIVITY
        }, () => 5).with({
          streamUserIds: o.P.when(e => e.length > 0)
        }, () => 4).with({
          channelHasVideo: !0
        }, () => 3).with({
          category: Y.CardCategory.HANGOUT
        }, () => 2).otherwise(() => 1),
        s = 0;
      if (t) {
        if ("userIds" in e && (s += Math.max(...i(e.userIds))), "embeddedActivities" in e) {
          let t = new Set;
          e.embeddedActivities.forEach(e => {
            t = new Set([...t, ...e.userIds])
          }), s += Math.max(...i([...t]))
        }
        "voiceStates" in e && (s += Math.max(...i(e.voiceStates.filter(V.isNotNullish).map(e => {
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
        "voiceStates" in e && (s += e.voiceStates.filter(V.isNotNullish).map(e => {
          let {
            user: t
          } = e;
          return t.id
        }).length)
      }
      return s = s > 0 ? s * r : 1e-5 * r
    })(e, t)], ["desc"])
  })(D, O).slice(0, 3)), u(D.length)), n
}(r = i || (i = {})).CARD = "card", r.JOIN_BUTTON = "join_button";
let q = e => e => [j.ActivityTypes.PLAYING, j.ActivityTypes.WATCHING].includes(e.type) && (null != e.assets || null != e.state || null != e.details || null != e.party) && !1;

function J(e) {
  return (0, l.useStateFromStoresArray)([L.default, U.default], () => {
    let t = L.default.hasConsented(j.Consents.PERSONALIZATION),
      n = U.default.getUserAffinities();
    return t && n.length > 0 ? (0, a.orderBy)(e, [e => {
      var t, n;
      return null !== (n = null === (t = U.default.getUserAffinity(e)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0
    }], ["desc"]) : e
  }, [e])
}

function $(e) {
  return (0, l.useStateFromStoresArray)([L.default, U.default], () => {
    let t = L.default.hasConsented(j.Consents.PERSONALIZATION),
      n = U.default.getUserAffinities();
    return t && n.length > 0 ? (0, a.orderBy)(e, [e => {
      var t, n;
      return null !== (n = null === (t = U.default.getUserAffinity(e.id)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0
    }], ["desc"]) : e
  }, [e])
}

function ee(e) {
  let t = (0, l.useStateFromStores)([p.default], () => null == e ? null : p.default.getParticipantCount(e.id, O.StageChannelParticipantNamedIndex.AUDIENCE)),
    n = (0, l.useStateFromStoresArray)([p.default], () => null == e ? [] : p.default.getMutableParticipants(e.id, O.StageChannelParticipantNamedIndex.SPEAKER).filter(e => e.type === O.StageChannelParticipantTypes.VOICE).map(e => {
      let {
        user: t
      } = e;
      return t
    })),
    i = (0, l.useStateFromStoresArray)([w.default], () => null == e ? [] : w.default.getVoiceStatesForChannel(e).filter(V.isNotNullish).map(e => {
      let {
        user: t
      } = e;
      return t
    }));
  if ((null == e ? void 0 : e.type) === j.ChannelTypes.GUILD_STAGE_VOICE) {
    let e = n.slice(0, 3),
      i = Math.max(0, n.length - e.length);
    return {
      usersToShow: n,
      othersCount: i,
      audienceCount: null != t ? t : 0
    }
  }
  if ((null == e ? void 0 : e.type) === j.ChannelTypes.GUILD_VOICE) {
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

function et(e, t) {
  var n, i;
  let r = (n = e, i = t, n.map(e => {
      var t;
      let n = b.default.getUser(e);
      if (null == n) return null;
      let r = D.default.getNick(i, n.id);
      return null !== (t = null != r ? r : F.default.getGlobalName(n)) && void 0 !== t ? t : F.default.getUserTag(n)
    }).filter(e => null != e)),
    s = r.length;
  if (s > 0) return 1 === s ? r[0] : (2 === s ? K.default.Messages.USER_SUMMARY_TWO : 3 === s ? K.default.Messages.USER_SUMMARY_THREE : K.default.Messages.USER_SUMMARY_THREE_AND_OTHERS).format({
    first: r[0],
    second: null == r ? void 0 : r[1],
    third: null == r ? void 0 : r[2],
    count: s - 3
  })
}

function en(e, t, n, i) {
  var r, s;
  let a = {},
    o = null !== (s = (0, H.getChannelIdFromCardData)(e)) && void 0 !== s ? s : "";
  a.source = i, a.card_type = e.category, a.card_position = n, a.channel_id = o, a.channel_type = null === (r = g.default.getChannel(o)) || void 0 === r ? void 0 : r.type;
  let l = Z(o, t);
  a.card_affinity_users_count = Math.min(l.length, 6), a.card_total_users_count = l.length, a.card_affinity_user_ids = l.slice(0, 6).map(e => e.id), a.card_max_affinity_user_id = l.length > 0 ? l[0].id : "0", a.card_user_affinity_scores = l.slice(0, 6).map(e => {
    var t, n;
    return null !== (n = null === (t = U.default.getUserAffinity(e.id)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0
  }), B.default.track(j.AnalyticEvents.GUILD_TOOLTIP_CARD_CLICKED, {
    ...a,
    guild_id: t
  })
}

function ei(e, t, n) {
  let {
    category: i
  } = e;
  switch (i) {
    case Y.CardCategory.HANGOUT:
    case Y.CardCategory.GAMING:
      return () => {
        let {
          channelId: i
        } = e, r = g.default.getChannel(i), s = M.default.can(j.Permissions.CONNECT, r);
        en(e, t, n, "card"), s ? (0, A.transitionToGuild)(t, i) : ((0, A.transitionToGuild)(t), u.default.channelListScrollTo(t, i))
      };
    case Y.CardCategory.EMBEDDED_ACTIVITY:
      return () => {
        let {
          channelId: i
        } = e.embeddedActivities[0], r = g.default.getChannel(i), s = M.default.can(j.Permissions.CONNECT, r);
        en(e, t, n, "card"), s ? (0, A.transitionToGuild)(t, i) : ((0, A.transitionToGuild)(t), u.default.channelListScrollTo(t, i))
      };
    case Y.CardCategory.EVENT:
      return () => {
        en(e, t, n, "card"), (0, f.openGuildEventDetails)({
          eventId: e.event.id
        })
      };
    default:
      return null
  }
}

function er(e, t) {
  let {
    category: n
  } = e;
  switch (n) {
    case Y.CardCategory.HANGOUT:
    case Y.CardCategory.GAMING:
      return () => {
        let {
          channelId: n
        } = e, i = g.default.getChannel(n);
        null != i && i.type === j.ChannelTypes.GUILD_VOICE && M.default.can(j.Permissions.CONNECT, i) && (E.default.handleVoiceConnect({
          channel: i,
          connected: G.default.isInChannel(n),
          needSubscriptionToAccess: (0, T.getChannelRoleSubscriptionStatus)(n).needSubscriptionToAccess,
          locked: !1
        }), (0, A.transitionToGuild)(t, n))
      };
    case Y.CardCategory.EMBEDDED_ACTIVITY:
      return () => {
        let {
          channelId: n
        } = e.embeddedActivities[0], i = g.default.getChannel(n);
        null != i && i.type === j.ChannelTypes.GUILD_VOICE && M.default.can(j.Permissions.CONNECT, i) && (E.default.handleVoiceConnect({
          channel: i,
          connected: G.default.isInChannel(n),
          needSubscriptionToAccess: (0, T.getChannelRoleSubscriptionStatus)(n).needSubscriptionToAccess,
          locked: !1
        }), (0, A.transitionToGuild)(t, n))
      };
    case Y.CardCategory.EVENT:
      return () => {
        let {
          event: t
        } = e, {
          channel_id: n,
          guild_id: i,
          entity_type: r
        } = t, s = g.default.getChannel(n);
        if (null == n || null == s || !M.default.can(j.Permissions.CONNECT, s)) {
          (0, f.openGuildEventDetails)({
            eventId: t.id
          });
          return
        }
        let a = async () => {
          let e = await (0, N.connectOrLurkStage)(i, n);
          (0, m.navigateToStage)(e, null, !1)
        };
        r === W.GuildScheduledEventEntityTypes.STAGE_INSTANCE ? a() : r === W.GuildScheduledEventEntityTypes.VOICE && (E.default.handleVoiceConnect({
          channel: s,
          connected: G.default.isInChannel(n),
          needSubscriptionToAccess: (0, T.getChannelRoleSubscriptionStatus)(n).needSubscriptionToAccess,
          locked: !1
        }), (0, A.transitionToGuild)(i, n))
      };
    default:
      return null
  }
}

function es(e) {
  let t, n;
  let i = (0, h.getLocationFromEvent)(e),
    r = null == i ? void 0 : i.replace(/[<#>]/g, ""),
    s = null != r ? g.default.getChannel(r) : g.default.getChannel(e.channel_id),
    a = M.default.can(j.Permissions.VIEW_CHANNEL, s);
  if (null != s && a) t = (0, I.getSimpleChannelIconComponent)(s.type), n = s.name;
  else {
    if (null == i) return null;
    t = k.default, n = i
  }
  return {
    IconComponent: t,
    locationName: n
  }
}

function ea(e) {
  let t = e.category === Y.CardCategory.EMBEDDED_ACTIVITY ? e.embeddedActivities[0].applicationId : null;
  return (0, c.useGetOrFetchApplication)(t)
}