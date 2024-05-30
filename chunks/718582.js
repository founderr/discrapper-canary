"use strict";
n.r(t), n.d(t, {
  CardClickSources: function() {
    return i
  },
  getClickHandler: function() {
    return en
  },
  getEventLocationData: function() {
    return er
  },
  getJoinHandler: function() {
    return ei
  },
  getUserNameString: function() {
    return ee
  },
  getVoiceChannelUsers: function() {
    return z
  },
  trackClick: function() {
    return et
  },
  useGetEventCardUsers: function() {
    return $
  },
  useGetOrFetchEmbeddedActivityApplication: function() {
    return es
  },
  useGuildPopoutCards: function() {
    return X
  },
  useSortUserIdsByAffinity: function() {
    return q
  },
  useSortUsersByAffinity: function() {
    return J
  },
  useVoiceChannelUsers: function() {
    return Z
  }
}), n("47120"), n("390547"), n("653041"), n("627341"), n("757143");
var i, r, s = n("470079"),
  a = n("392711"),
  o = n("278074"),
  l = n("442837"),
  u = n("317381"),
  d = n("841784"),
  _ = n("835473"),
  c = n("557135"),
  E = n("471445"),
  I = n("66999"),
  T = n("15274"),
  f = n("924301"),
  S = n("230900"),
  h = n("703656"),
  A = n("881824"),
  m = n("922482"),
  N = n("565799"),
  p = n("501655"),
  O = n("344185"),
  C = n("199902"),
  R = n("592125"),
  g = n("480294"),
  L = n("984933"),
  v = n("271383"),
  D = n("496675"),
  M = n("158776"),
  y = n("699516"),
  P = n("800599"),
  U = n("594174"),
  b = n("979651"),
  G = n("938475"),
  w = n("393112"),
  k = n("626135"),
  B = n("823379"),
  V = n("5192"),
  x = n("51144"),
  F = n("912787"),
  H = n("126134"),
  Y = n("981631"),
  j = n("765305"),
  W = n("689938");
let K = {
  Event: 7,
  Game: 6,
  EmbeddedActivity: 5,
  Stream: 4,
  Video: 3,
  Voice: 2,
  Base: 1
};

function z(e, t) {
  let n = G.default.getVoiceStatesForChannelAlt(e, t).map(e => {
      let {
        user: t
      } = e;
      return t.id
    }),
    i = g.default.hasConsented(Y.Consents.PERSONALIZATION),
    r = P.default.getUserAffinities();
  return (i && r.length > 0 ? (0, a.orderBy)(n, [e => {
    var t, n;
    return null !== (n = null === (t = P.default.getUserAffinity(e)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0
  }], ["desc"]) : n).map(e => U.default.getUser(e)).filter(B.isNotNullish)
}

function Z(e, t) {
  return function(e, t, n, i) {
    let r;
    let a = q(e),
      o = s.useMemo(() => a.map(e => U.default.getUser(e)).filter(B.isNotNullish), [a]),
      l = o.slice(0, 6),
      u = Math.max(0, o.length - l.length);
    if (null != i && i.length > 0) {
      let e = V.default.getName(t, n, U.default.getUser(i[0]));
      r = 1 === i.length ? W.default.Messages.GUILD_POPOUT_ACTIVITY_STREAMER.format({
        username: e
      }) : W.default.Messages.GUILD_POPOUT_USERS_STREAMING.format({
        username: e,
        count: i.length - 1
      })
    } else if (l.length > 0) {
      let e = V.default.getName(t, n, U.default.getUser(l[0].id));
      r = 1 === l.length ? W.default.Messages.GUILD_POPOUT_USER_IN_VOICE.format({
        username: e
      }) : W.default.Messages.GUILD_POPOUT_USERS_IN_VOICE.format({
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
  }((0, l.useStateFromStores)([G.default], () => G.default.getVoiceStatesForChannelAlt(e, t), [e, t]).map(e => {
    let {
      user: t
    } = e;
    return t.id
  }), t, e)
}

function X(e) {
  let t = e.id,
    [n, i] = s.useState([]),
    [r, _] = s.useState(0),
    c = (0, l.useStateFromStoresArray)([L.default, O.default], () => {
      let e = L.default.getChannels(t)[L.GUILD_VOCAL_CHANNELS_KEY].map(e => {
        let {
          channel: t
        } = e;
        return t.id
      });
      return [...e, ...Object.values(O.default.getThreadsForGuild(t)).flatMap(e => Object.keys(e))]
    }, [t]),
    E = (0, l.useStateFromStores)([f.default, R.default], () => f.default.getGuildScheduledEventsForGuild(t).filter(e => (0, f.isGuildScheduledEventActive)(e)).map(e => {
      var t;
      return {
        category: H.CardCategory.EVENT,
        event: e,
        isStage: !!(null === (t = R.default.getChannel(e.channel_id)) || void 0 === t ? void 0 : t.isGuildStageVoice())
      }
    }), [t], a.isEqual),
    I = E.map(e => {
      let {
        event: t
      } = e;
      return t.channel_id
    }),
    T = (0, l.useStateFromStores)([y.default], () => y.default.getRelationships()),
    S = s.useMemo(() => Object.keys(T).filter(e => T[e] === Y.RelationshipTypes.BLOCKED), [T]),
    h = (0, l.useStateFromStores)([G.default], () => G.default.getVoiceStates(t), [t]),
    A = s.useMemo(() => {
      let t = Object.keys(h);
      return 0 === t.length ? [] : t.filter(t => {
        let n = h[t].filter(B.isNotNullish);
        return !(0 === n.length || I.includes(t)) && null == n.find(e => {
          let {
            user: t
          } = e;
          return S.includes(t.id)
        }) && t !== e.afkChannelId && c.includes(t)
      })
    }, [h, I, c, S, e.afkChannelId]),
    m = (0, l.useStateFromStores)([u.default, b.default, C.default, M.default, R.default], () => A.map(e => {
      var t;
      let n = C.default.getAllApplicationStreamsForChannel(e).map(e => e.ownerId),
        i = h[e].filter(B.isNotNullish),
        r = u.default.getEmbeddedActivitiesForChannel(e),
        s = H.CardCategory.HANGOUT,
        a = [],
        o = i.map(e => {
          let {
            user: t
          } = e;
          return t.id
        }),
        l = b.default.hasVideo(e),
        _ = [],
        c = [];
      for (let e of (r.length > 0 && (s = H.CardCategory.EMBEDDED_ACTIVITY), i)) {
        let t = M.default.findActivity(e.user.id, Q(e));
        null != t && !(0, d.default)(t) && (s = H.CardCategory.GAMING, a.push(t), _.push(e.user.id)), e.voiceState.selfVideo && c.push(e.user.id)
      }
      if (s === H.CardCategory.EMBEDDED_ACTIVITY) return {
        category: s,
        embeddedActivities: r,
        streamersCount: n.length,
        voiceUsersCount: i.length
      };
      if (s === H.CardCategory.GAMING) return {
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
        isStage: !!(null === (t = R.default.getChannel(e)) || void 0 === t ? void 0 : t.isGuildStageVoice())
      }
    }), [h, A], a.isEqual),
    N = (0, l.useStateFromStores)([g.default], () => g.default.hasConsented(Y.Consents.PERSONALIZATION)),
    p = (0, l.useStateFromStores)([P.default], () => P.default.getUserAffinities()),
    v = N && p.length > 0,
    D = [...m, ...E];
  return r !== D.length && (i((function(e, t) {
    return (0, a.orderBy)(e, [e => (function(e, t) {
      let n = e => e > 0 ? Math.log(e + 1) : 0,
        i = e => e.map(e => {
          var t, n;
          return null !== (n = null === (t = P.default.getUserAffinity(e)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0
        }).map(n),
        r = (0, o.match)(e).with({
          category: H.CardCategory.EVENT
        }, () => 7).with({
          category: H.CardCategory.GAMING
        }, () => 6).with({
          category: H.CardCategory.EMBEDDED_ACTIVITY
        }, () => 5).with({
          streamUserIds: o.P.when(e => e.length > 0)
        }, () => 4).with({
          channelHasVideo: !0
        }, () => 3).with({
          category: H.CardCategory.HANGOUT
        }, () => 2).otherwise(() => 1),
        s = 0;
      if (t) {
        if ("userIds" in e && (s += Math.max(...i(e.userIds))), "embeddedActivities" in e) {
          let t = new Set;
          e.embeddedActivities.forEach(e => {
            t = new Set([...t, ...e.userIds])
          }), s += Math.max(...i([...t]))
        }
        "voiceStates" in e && (s += Math.max(...i(e.voiceStates.filter(B.isNotNullish).map(e => {
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
        "voiceStates" in e && (s += e.voiceStates.filter(B.isNotNullish).map(e => {
          let {
            user: t
          } = e;
          return t.id
        }).length)
      }
      return s = s > 0 ? s * r : 1e-5 * r
    })(e, t)], ["desc"])
  })(D, v).slice(0, 3)), _(D.length)), n
}(r = i || (i = {})).CARD = "card", r.JOIN_BUTTON = "join_button";
let Q = e => e => [Y.ActivityTypes.PLAYING, Y.ActivityTypes.WATCHING].includes(e.type) && (null != e.assets || null != e.state || null != e.details || null != e.party) && !1;

function q(e) {
  return (0, l.useStateFromStoresArray)([g.default, P.default], () => {
    let t = g.default.hasConsented(Y.Consents.PERSONALIZATION),
      n = P.default.getUserAffinities();
    return t && n.length > 0 ? (0, a.orderBy)(e, [e => {
      var t, n;
      return null !== (n = null === (t = P.default.getUserAffinity(e)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0
    }], ["desc"]) : e
  }, [e])
}

function J(e) {
  return (0, l.useStateFromStoresArray)([g.default, P.default], () => {
    let t = g.default.hasConsented(Y.Consents.PERSONALIZATION),
      n = P.default.getUserAffinities();
    return t && n.length > 0 ? (0, a.orderBy)(e, [e => {
      var t, n;
      return null !== (n = null === (t = P.default.getUserAffinity(e.id)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0
    }], ["desc"]) : e
  }, [e])
}

function $(e) {
  let t = (0, l.useStateFromStores)([N.default], () => null == e ? null : N.default.getParticipantCount(e.id, p.StageChannelParticipantNamedIndex.AUDIENCE)),
    n = (0, l.useStateFromStoresArray)([N.default], () => null == e ? [] : N.default.getMutableParticipants(e.id, p.StageChannelParticipantNamedIndex.SPEAKER).filter(e => e.type === p.StageChannelParticipantTypes.VOICE).map(e => {
      let {
        user: t
      } = e;
      return t
    })),
    i = (0, l.useStateFromStoresArray)([G.default], () => null == e ? [] : G.default.getVoiceStatesForChannel(e).filter(B.isNotNullish).map(e => {
      let {
        user: t
      } = e;
      return t
    }));
  if ((null == e ? void 0 : e.type) === Y.ChannelTypes.GUILD_STAGE_VOICE) {
    let e = n.slice(0, 3),
      i = Math.max(0, n.length - e.length);
    return {
      usersToShow: n,
      othersCount: i,
      audienceCount: null != t ? t : 0
    }
  }
  if ((null == e ? void 0 : e.type) === Y.ChannelTypes.GUILD_VOICE) {
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

function ee(e, t) {
  var n, i;
  let r = (n = e, i = t, n.map(e => {
      var t;
      let n = U.default.getUser(e);
      if (null == n) return null;
      let r = v.default.getNick(i, n.id);
      return null !== (t = null != r ? r : x.default.getGlobalName(n)) && void 0 !== t ? t : x.default.getUserTag(n)
    }).filter(e => null != e)),
    s = r.length;
  if (s > 0) return 1 === s ? r[0] : (2 === s ? W.default.Messages.USER_SUMMARY_TWO : 3 === s ? W.default.Messages.USER_SUMMARY_THREE : W.default.Messages.USER_SUMMARY_THREE_AND_OTHERS).format({
    first: r[0],
    second: null == r ? void 0 : r[1],
    third: null == r ? void 0 : r[2],
    count: s - 3
  })
}

function et(e, t, n, i) {
  var r, s;
  let a = {},
    o = null !== (s = (0, F.getChannelIdFromCardData)(e)) && void 0 !== s ? s : "";
  a.source = i, a.card_type = e.category, a.card_position = n, a.channel_id = o, a.channel_type = null === (r = R.default.getChannel(o)) || void 0 === r ? void 0 : r.type;
  let l = z(o, t);
  a.card_affinity_users_count = Math.min(l.length, 6), a.card_total_users_count = l.length, a.card_affinity_user_ids = l.slice(0, 6).map(e => e.id), a.card_max_affinity_user_id = l.length > 0 ? l[0].id : "0", a.card_user_affinity_scores = l.slice(0, 6).map(e => {
    var t, n;
    return null !== (n = null === (t = P.default.getUserAffinity(e.id)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0
  }), k.default.track(Y.AnalyticEvents.GUILD_TOOLTIP_CARD_CLICKED, {
    ...a,
    guild_id: t
  })
}

function en(e, t, n) {
  let {
    category: i
  } = e;
  switch (i) {
    case H.CardCategory.GAMING:
      return () => {
        et(e, t, n, "card"), (0, h.transitionToGuild)(t, e.channelId)
      };
    case H.CardCategory.EMBEDDED_ACTIVITY:
      return () => {
        et(e, t, n, "card"), (0, h.transitionToGuild)(t, e.embeddedActivities[0].channelId)
      };
    case H.CardCategory.EVENT:
      return () => {
        et(e, t, n, "card"), (0, T.openGuildEventDetails)({
          eventId: e.event.id
        })
      };
    case H.CardCategory.HANGOUT:
      return () => {
        et(e, t, n, "card"), (0, h.transitionToGuild)(t, e.channelId)
      };
    default:
      return null
  }
}

function ei(e, t) {
  let {
    category: n
  } = e;
  switch (n) {
    case H.CardCategory.HANGOUT:
    case H.CardCategory.GAMING:
      return () => {
        let {
          channelId: n
        } = e, i = R.default.getChannel(n);
        null != i && i.type === Y.ChannelTypes.GUILD_VOICE && D.default.can(Y.Permissions.CONNECT, i) && (c.default.handleVoiceConnect({
          channel: i,
          connected: b.default.isInChannel(n),
          needSubscriptionToAccess: (0, I.getChannelRoleSubscriptionStatus)(n).needSubscriptionToAccess,
          locked: !1
        }), (0, h.transitionToGuild)(t, n))
      };
    case H.CardCategory.EMBEDDED_ACTIVITY:
      return () => {
        let {
          channelId: n
        } = e.embeddedActivities[0], i = R.default.getChannel(n);
        null != i && i.type === Y.ChannelTypes.GUILD_VOICE && D.default.can(Y.Permissions.CONNECT, i) && (c.default.handleVoiceConnect({
          channel: i,
          connected: b.default.isInChannel(n),
          needSubscriptionToAccess: (0, I.getChannelRoleSubscriptionStatus)(n).needSubscriptionToAccess,
          locked: !1
        }), (0, h.transitionToGuild)(t, n))
      };
    case H.CardCategory.EVENT:
      return () => {
        let {
          event: t
        } = e, {
          channel_id: n,
          guild_id: i,
          entity_type: r
        } = t, s = R.default.getChannel(n);
        if (null == n || null == s || !D.default.can(Y.Permissions.CONNECT, s)) {
          (0, T.openGuildEventDetails)({
            eventId: t.id
          });
          return
        }
        let a = async () => {
          let e = await (0, m.connectOrLurkStage)(i, n);
          (0, A.navigateToStage)(e, null, !1)
        };
        r === j.GuildScheduledEventEntityTypes.STAGE_INSTANCE ? a() : r === j.GuildScheduledEventEntityTypes.VOICE && (c.default.handleVoiceConnect({
          channel: s,
          connected: b.default.isInChannel(n),
          needSubscriptionToAccess: (0, I.getChannelRoleSubscriptionStatus)(n).needSubscriptionToAccess,
          locked: !1
        }), (0, h.transitionToGuild)(i, n))
      };
    default:
      return null
  }
}

function er(e) {
  let t, n;
  let i = (0, S.getLocationFromEvent)(e),
    r = null == i ? void 0 : i.replace(/[<#>]/g, ""),
    s = null != r ? R.default.getChannel(r) : R.default.getChannel(e.channel_id),
    a = D.default.can(Y.Permissions.VIEW_CHANNEL, s);
  if (null != s && a) t = (0, E.getSimpleChannelIconComponent)(s.type), n = s.name;
  else {
    if (null == i) return null;
    t = w.default, n = i
  }
  return {
    IconComponent: t,
    locationName: n
  }
}

function es(e) {
  let t = e.category === H.CardCategory.EMBEDDED_ACTIVITY ? e.embeddedActivities[0].applicationId : null;
  return (0, _.useGetOrFetchApplication)(t)
}