"use strict";
n.r(t), n.d(t, {
  CardClickSources: function() {
    return i
  },
  getClickHandler: function() {
    return es
  },
  getEventLocationData: function() {
    return eu
  },
  getJoinHandler: function() {
    return el
  },
  getUserNameString: function() {
    return ei
  },
  getVoiceChannelUsers: function() {
    return X
  },
  trackClick: function() {
    return er
  },
  useChannelStatus: function() {
    return e_
  },
  useGetEventCardUsers: function() {
    return en
  },
  useGetOrFetchEmbeddedActivityApplication: function() {
    return ed
  },
  useGuildPopoutCards: function() {
    return J
  },
  useSortUserIdsByAffinity: function() {
    return ee
  },
  useSortUsersByAffinity: function() {
    return et
  },
  useVoiceChannelUsers: function() {
    return q
  }
}), n("47120"), n("390547"), n("653041"), n("627341"), n("757143");
var i, r, s = n("470079"),
  a = n("392711"),
  o = n("278074"),
  l = n("442837"),
  u = n("925549"),
  d = n("317381"),
  _ = n("841784"),
  c = n("367907"),
  E = n("835473"),
  I = n("12498"),
  T = n("557135"),
  f = n("471445"),
  S = n("66999"),
  h = n("15274"),
  A = n("924301"),
  m = n("230900"),
  N = n("703656"),
  p = n("881824"),
  O = n("922482"),
  C = n("565799"),
  R = n("501655"),
  g = n("344185"),
  L = n("814443"),
  v = n("199902"),
  D = n("592125"),
  M = n("480294"),
  y = n("984933"),
  P = n("271383"),
  U = n("496675"),
  b = n("158776"),
  G = n("699516"),
  w = n("594174"),
  k = n("979651"),
  B = n("938475"),
  V = n("393112"),
  x = n("626135"),
  F = n("823379"),
  H = n("5192"),
  Y = n("51144"),
  j = n("912787"),
  W = n("126134"),
  K = n("981631"),
  z = n("765305"),
  Z = n("689938");
let Q = {
  Event: 7,
  Game: 6,
  EmbeddedActivity: 5,
  Stream: 4,
  Video: 3,
  Voice: 2,
  Base: 1
};

function X(e, t) {
  let n = B.default.getVoiceStatesForChannelAlt(e, t).map(e => {
      let {
        user: t
      } = e;
      return t.id
    }),
    i = M.default.hasConsented(K.Consents.PERSONALIZATION),
    r = L.default.getUserAffinities();
  return (i && r.length > 0 ? (0, a.orderBy)(n, [e => {
    var t, n;
    return null !== (n = null === (t = L.default.getUserAffinity(e)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0
  }], ["desc"]) : n).map(e => w.default.getUser(e)).filter(F.isNotNullish)
}

function q(e, t) {
  return function(e, t, n, i) {
    let r;
    let a = ee(e),
      o = s.useMemo(() => a.map(e => w.default.getUser(e)).filter(F.isNotNullish), [a]),
      l = o.slice(0, 6),
      u = Math.max(0, o.length - l.length);
    if (null != i && i.length > 0) {
      let e = H.default.getName(t, n, w.default.getUser(i[0]));
      r = 1 === i.length ? Z.default.Messages.GUILD_POPOUT_ACTIVITY_STREAMER.format({
        username: e
      }) : Z.default.Messages.GUILD_POPOUT_USERS_STREAMING.format({
        username: e,
        count: i.length - 1
      })
    } else if (l.length > 0) {
      let e = H.default.getName(t, n, w.default.getUser(l[0].id));
      r = 1 === l.length ? Z.default.Messages.GUILD_POPOUT_USER_IN_VOICE.format({
        username: e
      }) : Z.default.Messages.GUILD_POPOUT_USERS_IN_VOICE.format({
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
  }((0, l.useStateFromStores)([B.default], () => B.default.getVoiceStatesForChannelAlt(e, t), [e, t]).map(e => {
    let {
      user: t
    } = e;
    return t.id
  }), t, e)
}(r = i || (i = {})).CARD = "card", r.JOIN_BUTTON = "join_button";

function J(e) {
  let t = e.id,
    [n, i] = s.useState([]),
    [r, u] = s.useState(0),
    c = (0, l.useStateFromStoresArray)([y.default, g.default], () => {
      let e = y.default.getChannels(t)[y.GUILD_VOCAL_CHANNELS_KEY].map(e => {
        let {
          channel: t
        } = e;
        return t.id
      });
      return [...e, ...Object.values(g.default.getThreadsForGuild(t)).flatMap(e => Object.keys(e))]
    }, [t]),
    E = (0, l.useStateFromStores)([A.default, D.default], () => A.default.getGuildScheduledEventsForGuild(t).filter(e => (0, A.isGuildScheduledEventActive)(e)).map(e => {
      var t;
      return {
        category: W.CardCategory.EVENT,
        event: e,
        isStage: !!(null === (t = D.default.getChannel(e.channel_id)) || void 0 === t ? void 0 : t.isGuildStageVoice())
      }
    }), [t], a.isEqual),
    I = E.map(e => {
      let {
        event: t
      } = e;
      return t.channel_id
    }),
    T = (0, l.useStateFromStores)([G.default], () => G.default.getRelationships()),
    f = s.useMemo(() => Object.keys(T).filter(e => T[e] === K.RelationshipTypes.BLOCKED), [T]),
    S = (0, l.useStateFromStores)([B.default], () => B.default.getVoiceStates(t), [t]),
    h = s.useMemo(() => {
      let t = Object.keys(S);
      return 0 === t.length ? [] : t.filter(t => {
        let n = S[t].filter(F.isNotNullish);
        return !(0 === n.length || I.includes(t)) && null == n.find(e => {
          let {
            user: t
          } = e;
          return f.includes(t.id)
        }) && t !== e.afkChannelId && c.includes(t)
      })
    }, [S, I, c, f, e.afkChannelId]),
    m = (0, l.useStateFromStores)([d.default, k.default, v.default, b.default, D.default], () => h.map(e => {
      var t;
      let n = v.default.getAllApplicationStreamsForChannel(e).map(e => e.ownerId),
        i = S[e].filter(F.isNotNullish),
        r = d.default.getEmbeddedActivitiesForChannel(e),
        s = W.CardCategory.HANGOUT,
        a = [],
        o = i.map(e => {
          let {
            user: t
          } = e;
          return t.id
        }),
        l = k.default.hasVideo(e),
        u = [],
        c = [];
      for (let e of (r.length > 0 && (s = W.CardCategory.EMBEDDED_ACTIVITY), i)) {
        let t = b.default.findActivity(e.user.id, $(e));
        null != t && !(0, _.default)(t) && (s = W.CardCategory.GAMING, a.push(t), u.push(e.user.id)), e.voiceState.selfVideo && c.push(e.user.id)
      }
      if (s === W.CardCategory.EMBEDDED_ACTIVITY) return {
        category: s,
        embeddedActivities: r,
        streamersCount: n.length,
        voiceUsersCount: i.length
      };
      if (s === W.CardCategory.GAMING) return {
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
        isStage: !!(null === (t = D.default.getChannel(e)) || void 0 === t ? void 0 : t.isGuildStageVoice())
      }
    }), [S, h], a.isEqual),
    N = (0, l.useStateFromStores)([M.default], () => M.default.hasConsented(K.Consents.PERSONALIZATION)),
    p = (0, l.useStateFromStores)([L.default], () => L.default.getUserAffinities()),
    O = N && p.length > 0,
    C = [...m, ...E];
  return r !== C.length && C.length > 0 && (i((function(e) {
    let t = [...e],
      n = t[0].category,
      i = t.findIndex(e => e.category === W.CardCategory.EVENT),
      r = t.findIndex(e => e.category === W.CardCategory.HANGOUT && e.isStage),
      s = t.findIndex(e => e.category === W.CardCategory.EMBEDDED_ACTIVITY),
      a = t.findIndex(e => e.category === W.CardCategory.HANGOUT && e.streamUserIds.length > 0),
      o = t.findIndex(e => e.category === W.CardCategory.HANGOUT && e.videoUserIds.length > 0),
      l = t.findIndex(e => e.category === W.CardCategory.GAMING);
    if (n === W.CardCategory.EVENT && 0 === i || n === W.CardCategory.HANGOUT && 0 === r || n === W.CardCategory.EMBEDDED_ACTIVITY && 0 === s || n === W.CardCategory.HANGOUT && 0 === a && -1 === r || n === W.CardCategory.HANGOUT && 0 === o && -1 === r && -1 === a || n === W.CardCategory.GAMING && 0 === l || -1 === i && -1 === r && -1 === s && -1 === a && -1 === o && -1 === l) return e;
    if (-1 !== i) {
      let e = t.splice(i, 1);
      return t.splice(0, 0, e[0]), t
    }
    if (-1 !== r) {
      let e = t.splice(r, 1);
      return t.splice(0, 0, e[0]), t
    }
    if (-1 !== s) {
      let e = t.splice(s, 1);
      return t.splice(0, 0, e[0]), t
    }
    if (-1 !== a) {
      let e = t.splice(a, 1);
      return t.splice(0, 0, e[0]), t
    }
    if (-1 !== o) {
      let e = t.splice(o, 1);
      return t.splice(0, 0, e[0]), t
    }
    if (-1 !== l) {
      let e = t.splice(l, 1);
      return t.splice(0, 0, e[0]), t
    }
    return e
  })(function(e, t) {
    return (0, a.orderBy)(e, [e => (function(e, t) {
      let n = e => e > 0 ? Math.log(e + 1) : 0,
        i = e => e.map(e => {
          var t, n;
          return null !== (n = null === (t = L.default.getUserAffinity(e)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0
        }).map(n),
        r = (0, o.match)(e).with({
          category: W.CardCategory.EVENT
        }, () => 7).with({
          category: W.CardCategory.GAMING
        }, () => 6).with({
          category: W.CardCategory.EMBEDDED_ACTIVITY
        }, () => 5).with({
          streamUserIds: o.P.when(e => e.length > 0)
        }, () => 4).with({
          channelHasVideo: !0
        }, () => 3).with({
          category: W.CardCategory.HANGOUT
        }, () => 2).otherwise(() => 1),
        s = 0;
      if (t) {
        if ("userIds" in e && (s += Math.max(...i(e.userIds))), "embeddedActivities" in e) {
          let t = new Set;
          e.embeddedActivities.forEach(e => {
            t = new Set([...t, ...e.userIds])
          }), s += Math.max(...i([...t]))
        }
        "voiceStates" in e && (s += Math.max(...i(e.voiceStates.filter(F.isNotNullish).map(e => {
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
        "voiceStates" in e && (s += e.voiceStates.filter(F.isNotNullish).map(e => {
          let {
            user: t
          } = e;
          return t.id
        }).length)
      }
      return s = s > 0 ? s * r : 1e-5 * r
    })(e, t)], ["desc"])
  }(C, O)).slice(0, 3)), u(C.length)), n
}
let $ = e => e => [K.ActivityTypes.PLAYING, K.ActivityTypes.WATCHING].includes(e.type) && (null != e.assets || null != e.state || null != e.details || null != e.party) && !1;

function ee(e) {
  return (0, l.useStateFromStoresArray)([M.default, L.default], () => {
    let t = M.default.hasConsented(K.Consents.PERSONALIZATION),
      n = L.default.getUserAffinities();
    return t && n.length > 0 ? (0, a.orderBy)(e, [e => {
      var t, n;
      return null !== (n = null === (t = L.default.getUserAffinity(e)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0
    }], ["desc"]) : e
  }, [e])
}

function et(e) {
  return (0, l.useStateFromStoresArray)([M.default, L.default], () => {
    let t = M.default.hasConsented(K.Consents.PERSONALIZATION),
      n = L.default.getUserAffinities();
    return t && n.length > 0 ? (0, a.orderBy)(e, [e => {
      var t, n;
      return null !== (n = null === (t = L.default.getUserAffinity(e.id)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0
    }], ["desc"]) : e
  }, [e])
}

function en(e) {
  let t = (0, l.useStateFromStores)([C.default], () => null == e ? null : C.default.getParticipantCount(e.id, R.StageChannelParticipantNamedIndex.AUDIENCE)),
    n = (0, l.useStateFromStoresArray)([C.default], () => null == e ? [] : C.default.getMutableParticipants(e.id, R.StageChannelParticipantNamedIndex.SPEAKER).filter(e => e.type === R.StageChannelParticipantTypes.VOICE).map(e => {
      let {
        user: t
      } = e;
      return t
    })),
    i = (0, l.useStateFromStoresArray)([B.default], () => null == e ? [] : B.default.getVoiceStatesForChannel(e).filter(F.isNotNullish).map(e => {
      let {
        user: t
      } = e;
      return t
    }));
  if ((null == e ? void 0 : e.type) === K.ChannelTypes.GUILD_STAGE_VOICE) {
    let e = n.slice(0, 3),
      i = Math.max(0, n.length - e.length);
    return {
      usersToShow: n,
      othersCount: i,
      audienceCount: null != t ? t : 0
    }
  }
  if ((null == e ? void 0 : e.type) === K.ChannelTypes.GUILD_VOICE) {
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

function ei(e, t) {
  var n, i;
  let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  let s = (n = e, i = t, n.map(e => {
      var t;
      let n = w.default.getUser(e);
      if (null == n) return null;
      let r = P.default.getNick(i, n.id);
      return null !== (t = null != r ? r : Y.default.getGlobalName(n)) && void 0 !== t ? t : Y.default.getUserTag(n)
    }).filter(e => null != e)),
    a = s.length;
  if (a > 0) return 1 === a || r ? Z.default.Messages.USER_SUMMARY_ONE.format({
    first: s[0]
  }) : (2 === a ? Z.default.Messages.USER_SUMMARY_TWO : 3 === a ? Z.default.Messages.USER_SUMMARY_THREE : Z.default.Messages.USER_SUMMARY_THREE_AND_OTHERS).format({
    first: s[0],
    second: null == s ? void 0 : s[1],
    third: null == s ? void 0 : s[2],
    count: a - 3
  })
}

function er(e, t, n, i) {
  var r, s;
  let a = {},
    o = null !== (s = (0, j.getChannelIdFromCardData)(e)) && void 0 !== s ? s : "";
  a.source = i, a.card_type = e.category, a.card_position = n, a.channel_id = o, a.channel_type = null === (r = D.default.getChannel(o)) || void 0 === r ? void 0 : r.type;
  let l = X(o, t);
  a.card_affinity_users_count = Math.min(l.length, 6), a.card_total_users_count = l.length, a.card_affinity_user_ids = l.slice(0, 6).map(e => e.id), a.card_max_affinity_user_id = l.length > 0 ? l[0].id : "0", a.card_user_affinity_scores = l.slice(0, 6).map(e => {
    var t, n;
    return null !== (n = null === (t = L.default.getUserAffinity(e.id)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0
  }), x.default.track(K.AnalyticEvents.GUILD_TOOLTIP_CARD_CLICKED, {
    ...a,
    ...(0, c.collectGuildAnalyticsMetadata)(t)
  })
}

function es(e, t, n) {
  let {
    category: i
  } = e;
  switch (i) {
    case W.CardCategory.HANGOUT:
    case W.CardCategory.GAMING:
      return () => {
        let {
          channelId: i
        } = e, r = D.default.getChannel(i), s = U.default.can(K.Permissions.CONNECT, r);
        er(e, t, n, "card"), s ? (0, N.transitionToGuild)(t, i) : ((0, N.transitionToGuild)(t), u.default.channelListScrollTo(t, i))
      };
    case W.CardCategory.EMBEDDED_ACTIVITY:
      return () => {
        let {
          channelId: i
        } = e.embeddedActivities[0], r = D.default.getChannel(i), s = U.default.can(K.Permissions.CONNECT, r);
        er(e, t, n, "card"), s ? (0, N.transitionToGuild)(t, i) : ((0, N.transitionToGuild)(t), u.default.channelListScrollTo(t, i))
      };
    case W.CardCategory.EVENT:
      return () => {
        er(e, t, n, "card"), (0, h.openGuildEventDetails)({
          eventId: e.event.id
        })
      };
    default:
      return null
  }
}
let ea = async (e, t) => {
  let n = await (0, O.connectOrLurkStage)(e, t);
  (0, p.navigateToStage)(n, null, !1)
}, eo = (e, t) => {
  T.default.handleVoiceConnect({
    channel: t,
    connected: k.default.isInChannel(t.id),
    needSubscriptionToAccess: (0, S.getChannelRoleSubscriptionStatus)(t.id).needSubscriptionToAccess,
    locked: !1
  }), (0, N.transitionToGuild)(e, t.id)
};

function el(e, t) {
  let {
    category: n
  } = e;
  switch (n) {
    case W.CardCategory.HANGOUT:
    case W.CardCategory.GAMING:
      return () => {
        let {
          channelId: n
        } = e, i = D.default.getChannel(n);
        null != i && U.default.can(K.Permissions.CONNECT, i) && (i.isGuildStageVoice() ? ea(t, n) : i.isGuildVoice() && eo(t, i))
      };
    case W.CardCategory.EMBEDDED_ACTIVITY:
      return () => {
        let {
          channelId: n
        } = e.embeddedActivities[0], i = D.default.getChannel(n);
        null != i && i.type === K.ChannelTypes.GUILD_VOICE && U.default.can(K.Permissions.CONNECT, i) && eo(t, i)
      };
    case W.CardCategory.EVENT:
      return () => {
        let {
          event: t
        } = e, {
          channel_id: n,
          guild_id: i,
          entity_type: r
        } = t, s = D.default.getChannel(n);
        if (null == n || null == s || !U.default.can(K.Permissions.CONNECT, s)) {
          (0, h.openGuildEventDetails)({
            eventId: t.id
          });
          return
        }
        r === z.GuildScheduledEventEntityTypes.STAGE_INSTANCE ? ea(i, n) : r === z.GuildScheduledEventEntityTypes.VOICE && eo(i, s)
      };
    default:
      return null
  }
}

function eu(e) {
  let t, n;
  let i = (0, m.getLocationFromEvent)(e),
    r = null == i ? void 0 : i.replace(/[<#>]/g, ""),
    s = null != r ? D.default.getChannel(r) : D.default.getChannel(e.channel_id),
    a = U.default.can(K.Permissions.VIEW_CHANNEL, s);
  if (null != s && a) t = (0, f.getSimpleChannelIconComponent)(s.type), n = s.name;
  else {
    if (null == i) return null;
    t = V.default, n = i
  }
  return {
    IconComponent: t,
    locationName: n
  }
}

function ed(e) {
  let t = e.category === W.CardCategory.EMBEDDED_ACTIVITY ? e.embeddedActivities[0].applicationId : null;
  return (0, E.useGetOrFetchApplication)(t)
}

function e_(e) {
  let t = (0, l.useStateFromStores)([I.default], () => I.default.getChannelStatus(e)),
    n = null != t && t.trim().length > 0;
  return {
    channelStatus: t,
    hasChannelStatus: n
  }
}