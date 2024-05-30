"use strict";
n.r(t), n.d(t, {
  CardClickSources: function() {
    return i
  },
  getClickHandler: function() {
    return et
  },
  getEventLocationData: function() {
    return ei
  },
  getJoinHandler: function() {
    return en
  },
  getUserNameString: function() {
    return $
  },
  getVoiceChannelUsers: function() {
    return K
  },
  trackClick: function() {
    return ee
  },
  useGetEventCardUsers: function() {
    return J
  },
  useGuildPopoutCards: function() {
    return Z
  },
  useSortUserIdsByAffinity: function() {
    return Q
  },
  useSortUsersByAffinity: function() {
    return q
  },
  useVoiceChannelUsers: function() {
    return z
  }
}), n("47120"), n("390547"), n("653041"), n("627341"), n("757143");
var i, r, s = n("470079"),
  a = n("392711"),
  o = n("278074"),
  l = n("442837"),
  u = n("317381"),
  d = n("841784"),
  _ = n("557135"),
  c = n("471445"),
  E = n("66999"),
  I = n("15274"),
  T = n("924301"),
  f = n("230900"),
  S = n("703656"),
  h = n("881824"),
  A = n("922482"),
  m = n("565799"),
  N = n("501655"),
  p = n("344185"),
  O = n("199902"),
  C = n("592125"),
  R = n("480294"),
  g = n("984933"),
  L = n("271383"),
  v = n("496675"),
  D = n("158776"),
  M = n("699516"),
  y = n("800599"),
  P = n("594174"),
  U = n("979651"),
  b = n("938475"),
  G = n("393112"),
  w = n("626135"),
  k = n("823379"),
  B = n("5192"),
  V = n("51144"),
  x = n("912787"),
  F = n("126134"),
  H = n("981631"),
  Y = n("765305"),
  j = n("689938");
let W = {
  Event: 7,
  Game: 6,
  EmbeddedActivity: 5,
  Stream: 4,
  Video: 3,
  Voice: 2,
  Base: 1
};

function K(e, t) {
  let n = b.default.getVoiceStatesForChannelAlt(e, t).map(e => {
      let {
        user: t
      } = e;
      return t.id
    }),
    i = R.default.hasConsented(H.Consents.PERSONALIZATION),
    r = y.default.getUserAffinities();
  return (i && r.length > 0 ? (0, a.orderBy)(n, [e => {
    var t, n;
    return null !== (n = null === (t = y.default.getUserAffinity(e)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0
  }], ["desc"]) : n).map(e => P.default.getUser(e)).filter(k.isNotNullish)
}

function z(e, t) {
  return function(e, t, n, i) {
    let r;
    let a = Q(e),
      o = s.useMemo(() => a.map(e => P.default.getUser(e)).filter(k.isNotNullish), [a]),
      l = o.slice(0, 6),
      u = Math.max(0, o.length - l.length);
    if (null != i && i.length > 0) {
      let e = B.default.getName(t, n, P.default.getUser(i[0]));
      r = 1 === i.length ? j.default.Messages.GUILD_POPOUT_ACTIVITY_STREAMER.format({
        username: e
      }) : j.default.Messages.GUILD_POPOUT_USERS_STREAMING.format({
        username: e,
        count: i.length - 1
      })
    } else if (l.length > 0) {
      let e = B.default.getName(t, n, P.default.getUser(l[0].id));
      r = 1 === l.length ? j.default.Messages.GUILD_POPOUT_USER_IN_VOICE.format({
        username: e
      }) : j.default.Messages.GUILD_POPOUT_USERS_IN_VOICE.format({
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
  }((0, l.useStateFromStores)([b.default], () => b.default.getVoiceStatesForChannelAlt(e, t), [e, t]).map(e => {
    let {
      user: t
    } = e;
    return t.id
  }), t, e)
}

function Z(e) {
  let t = e.id,
    [n, i] = s.useState([]),
    [r, _] = s.useState(0),
    c = (0, l.useStateFromStoresArray)([g.default, p.default], () => {
      let e = g.default.getChannels(t)[g.GUILD_VOCAL_CHANNELS_KEY].map(e => {
        let {
          channel: t
        } = e;
        return t.id
      });
      return [...e, ...Object.values(p.default.getThreadsForGuild(t)).flatMap(e => Object.keys(e))]
    }, [t]),
    E = (0, l.useStateFromStores)([T.default, C.default], () => T.default.getGuildScheduledEventsForGuild(t).filter(e => (0, T.isGuildScheduledEventActive)(e)).map(e => {
      var t;
      return {
        category: F.CardCategory.EVENT,
        event: e,
        isStage: !!(null === (t = C.default.getChannel(e.channel_id)) || void 0 === t ? void 0 : t.isGuildStageVoice())
      }
    }), [t], a.isEqual),
    I = E.map(e => {
      let {
        event: t
      } = e;
      return t.channel_id
    }),
    f = (0, l.useStateFromStores)([M.default], () => M.default.getRelationships()),
    S = s.useMemo(() => Object.keys(f).filter(e => f[e] === H.RelationshipTypes.BLOCKED), [f]),
    h = (0, l.useStateFromStores)([b.default], () => b.default.getVoiceStates(t), [t]),
    A = s.useMemo(() => {
      let t = Object.keys(h);
      return 0 === t.length ? [] : t.filter(t => {
        let n = h[t].filter(k.isNotNullish);
        return !(0 === n.length || I.includes(t)) && null == n.find(e => {
          let {
            user: t
          } = e;
          return S.includes(t.id)
        }) && t !== e.afkChannelId && c.includes(t)
      })
    }, [h, I, c, S, e.afkChannelId]),
    m = (0, l.useStateFromStores)([u.default, U.default, O.default, D.default, C.default], () => A.map(e => {
      var t;
      let n = O.default.getAllApplicationStreamsForChannel(e).map(e => e.ownerId),
        i = h[e].filter(k.isNotNullish),
        r = u.default.getEmbeddedActivitiesForChannel(e),
        s = F.CardCategory.HANGOUT,
        a = [],
        o = i.map(e => {
          let {
            user: t
          } = e;
          return t.id
        }),
        l = U.default.hasVideo(e),
        _ = [],
        c = [];
      for (let e of (r.length > 0 && (s = F.CardCategory.EMBEDDED_ACTIVITY), i)) {
        let t = D.default.findActivity(e.user.id, X(e));
        null != t && !(0, d.default)(t) && (s = F.CardCategory.GAMING, a.push(t), _.push(e.user.id)), e.voiceState.selfVideo && c.push(e.user.id)
      }
      if (s === F.CardCategory.EMBEDDED_ACTIVITY) return {
        category: s,
        embeddedActivities: r,
        streamersCount: n.length,
        voiceUsersCount: i.length
      };
      if (s === F.CardCategory.GAMING) return {
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
        isStage: !!(null === (t = C.default.getChannel(e)) || void 0 === t ? void 0 : t.isGuildStageVoice())
      }
    }), [h, A], a.isEqual),
    N = (0, l.useStateFromStores)([R.default], () => R.default.hasConsented(H.Consents.PERSONALIZATION)),
    L = (0, l.useStateFromStores)([y.default], () => y.default.getUserAffinities()),
    v = N && L.length > 0,
    P = [...m, ...E];
  return r !== P.length && (i((function(e, t) {
    return (0, a.orderBy)(e, [e => (function(e, t) {
      let n = e => e > 0 ? Math.log(e + 1) : 0,
        i = e => e.map(e => {
          var t, n;
          return null !== (n = null === (t = y.default.getUserAffinity(e)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0
        }).map(n),
        r = (0, o.match)(e).with({
          category: F.CardCategory.EVENT
        }, () => 7).with({
          category: F.CardCategory.GAMING
        }, () => 6).with({
          category: F.CardCategory.EMBEDDED_ACTIVITY
        }, () => 5).with({
          streamUserIds: o.P.when(e => e.length > 0)
        }, () => 4).with({
          channelHasVideo: !0
        }, () => 3).with({
          category: F.CardCategory.HANGOUT
        }, () => 2).otherwise(() => 1),
        s = 0;
      if (t) {
        if ("userIds" in e && (s += Math.max(...i(e.userIds))), "embeddedActivities" in e) {
          let t = new Set;
          e.embeddedActivities.forEach(e => {
            t = new Set([...t, ...e.userIds])
          }), s += Math.max(...i([...t]))
        }
        "voiceStates" in e && (s += Math.max(...i(e.voiceStates.filter(k.isNotNullish).map(e => {
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
        "voiceStates" in e && (s += e.voiceStates.filter(k.isNotNullish).map(e => {
          let {
            user: t
          } = e;
          return t.id
        }).length)
      }
      return s = s > 0 ? s * r : 1e-5 * r
    })(e, t)], ["desc"])
  })(P, v).slice(0, 3)), _(P.length)), n
}(r = i || (i = {})).CARD = "card", r.JOIN_BUTTON = "join_button";
let X = e => e => [H.ActivityTypes.PLAYING, H.ActivityTypes.WATCHING].includes(e.type) && (null != e.assets || null != e.state || null != e.details || null != e.party) && !1;

function Q(e) {
  return (0, l.useStateFromStoresArray)([R.default, y.default], () => {
    let t = R.default.hasConsented(H.Consents.PERSONALIZATION),
      n = y.default.getUserAffinities();
    return t && n.length > 0 ? (0, a.orderBy)(e, [e => {
      var t, n;
      return null !== (n = null === (t = y.default.getUserAffinity(e)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0
    }], ["desc"]) : e
  }, [e])
}

function q(e) {
  return (0, l.useStateFromStoresArray)([R.default, y.default], () => {
    let t = R.default.hasConsented(H.Consents.PERSONALIZATION),
      n = y.default.getUserAffinities();
    return t && n.length > 0 ? (0, a.orderBy)(e, [e => {
      var t, n;
      return null !== (n = null === (t = y.default.getUserAffinity(e.id)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0
    }], ["desc"]) : e
  }, [e])
}

function J(e) {
  let t = (0, l.useStateFromStores)([m.default], () => null == e ? null : m.default.getParticipantCount(e.id, N.StageChannelParticipantNamedIndex.AUDIENCE)),
    n = (0, l.useStateFromStoresArray)([m.default], () => null == e ? [] : m.default.getMutableParticipants(e.id, N.StageChannelParticipantNamedIndex.SPEAKER).filter(e => e.type === N.StageChannelParticipantTypes.VOICE).map(e => {
      let {
        user: t
      } = e;
      return t
    })),
    i = (0, l.useStateFromStoresArray)([b.default], () => null == e ? [] : b.default.getVoiceStatesForChannel(e).filter(k.isNotNullish).map(e => {
      let {
        user: t
      } = e;
      return t
    }));
  if ((null == e ? void 0 : e.type) === H.ChannelTypes.GUILD_STAGE_VOICE) {
    let e = n.slice(0, 3),
      i = Math.max(0, n.length - e.length);
    return {
      usersToShow: n,
      othersCount: i,
      audienceCount: null != t ? t : 0
    }
  }
  if ((null == e ? void 0 : e.type) === H.ChannelTypes.GUILD_VOICE) {
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

function $(e, t) {
  var n, i;
  let r = (n = e, i = t, n.map(e => {
      var t;
      let n = P.default.getUser(e);
      if (null == n) return null;
      let r = L.default.getNick(i, n.id);
      return null !== (t = null != r ? r : V.default.getGlobalName(n)) && void 0 !== t ? t : V.default.getUserTag(n)
    }).filter(e => null != e)),
    s = r.length;
  if (s > 0) return 1 === s ? r[0] : (2 === s ? j.default.Messages.USER_SUMMARY_TWO : 3 === s ? j.default.Messages.USER_SUMMARY_THREE : j.default.Messages.USER_SUMMARY_THREE_AND_OTHERS).format({
    first: r[0],
    second: null == r ? void 0 : r[1],
    third: null == r ? void 0 : r[2],
    count: s - 3
  })
}

function ee(e, t, n, i) {
  var r, s;
  let a = {},
    o = null !== (s = (0, x.getChannelIdFromCardData)(e)) && void 0 !== s ? s : "";
  a.source = i, a.card_type = e.category, a.card_position = n, a.channel_id = o, a.channel_type = null === (r = C.default.getChannel(o)) || void 0 === r ? void 0 : r.type;
  let l = K(o, t);
  a.card_affinity_users_count = Math.min(l.length, 6), a.card_total_users_count = l.length, a.card_affinity_user_ids = l.slice(0, 6).map(e => e.id), a.card_max_affinity_user_id = l.length > 0 ? l[0].id : "0", a.card_user_affinity_scores = l.slice(0, 6).map(e => {
    var t, n;
    return null !== (n = null === (t = y.default.getUserAffinity(e.id)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0
  }), w.default.track(H.AnalyticEvents.GUILD_TOOLTIP_CARD_CLICKED, {
    ...a,
    guild_id: t
  })
}

function et(e, t, n) {
  let {
    category: i
  } = e;
  switch (i) {
    case F.CardCategory.GAMING:
      return () => {
        ee(e, t, n, "card"), (0, S.transitionToGuild)(t, e.channelId)
      };
    case F.CardCategory.EMBEDDED_ACTIVITY:
      return () => {
        ee(e, t, n, "card"), (0, S.transitionToGuild)(t, e.embeddedActivities[0].channelId)
      };
    case F.CardCategory.EVENT:
      return () => {
        ee(e, t, n, "card"), (0, I.openGuildEventDetails)({
          eventId: e.event.id
        })
      };
    case F.CardCategory.HANGOUT:
      return () => {
        ee(e, t, n, "card"), (0, S.transitionToGuild)(t, e.channelId)
      };
    default:
      return null
  }
}

function en(e, t) {
  let {
    category: n
  } = e;
  switch (n) {
    case F.CardCategory.HANGOUT:
    case F.CardCategory.GAMING:
      return () => {
        let {
          channelId: n
        } = e, i = C.default.getChannel(n);
        null != i && i.type === H.ChannelTypes.GUILD_VOICE && v.default.can(H.Permissions.CONNECT, i) && (_.default.handleVoiceConnect({
          channel: i,
          connected: U.default.isInChannel(n),
          needSubscriptionToAccess: (0, E.getChannelRoleSubscriptionStatus)(n).needSubscriptionToAccess,
          locked: !1
        }), (0, S.transitionToGuild)(t, n))
      };
    case F.CardCategory.EMBEDDED_ACTIVITY:
      return () => {
        let {
          channelId: n
        } = e.embeddedActivities[0], i = C.default.getChannel(n);
        null != i && i.type === H.ChannelTypes.GUILD_VOICE && v.default.can(H.Permissions.CONNECT, i) && (_.default.handleVoiceConnect({
          channel: i,
          connected: U.default.isInChannel(n),
          needSubscriptionToAccess: (0, E.getChannelRoleSubscriptionStatus)(n).needSubscriptionToAccess,
          locked: !1
        }), (0, S.transitionToGuild)(t, n))
      };
    case F.CardCategory.EVENT:
      return () => {
        let {
          event: t
        } = e, {
          channel_id: n,
          guild_id: i,
          entity_type: r
        } = t, s = C.default.getChannel(n);
        if (null == n || null == s || !v.default.can(H.Permissions.CONNECT, s)) {
          (0, I.openGuildEventDetails)({
            eventId: t.id
          });
          return
        }
        let a = async () => {
          let e = await (0, A.connectOrLurkStage)(i, n);
          (0, h.navigateToStage)(e, null, !1)
        };
        r === Y.GuildScheduledEventEntityTypes.STAGE_INSTANCE ? a() : r === Y.GuildScheduledEventEntityTypes.VOICE && (_.default.handleVoiceConnect({
          channel: s,
          connected: U.default.isInChannel(n),
          needSubscriptionToAccess: (0, E.getChannelRoleSubscriptionStatus)(n).needSubscriptionToAccess,
          locked: !1
        }), (0, S.transitionToGuild)(i, n))
      };
    default:
      return null
  }
}

function ei(e) {
  let t, n;
  let i = (0, f.getLocationFromEvent)(e),
    r = null == i ? void 0 : i.replace(/[<#>]/g, ""),
    s = null != r ? C.default.getChannel(r) : C.default.getChannel(e.channel_id),
    a = v.default.can(H.Permissions.VIEW_CHANNEL, s);
  if (null != s && a) t = (0, c.getSimpleChannelIconComponent)(s.type), n = s.name;
  else {
    if (null == i) return null;
    t = G.default, n = i
  }
  return {
    IconComponent: t,
    locationName: n
  }
}