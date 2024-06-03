"use strict";
n.r(t), n.d(t, {
  CardClickSources: function() {
    return i
  },
  getClickHandler: function() {
    return er
  },
  getEventLocationData: function() {
    return ea
  },
  getJoinHandler: function() {
    return es
  },
  getUserNameString: function() {
    return en
  },
  getVoiceChannelUsers: function() {
    return X
  },
  trackClick: function() {
    return ei
  },
  useChannelStatus: function() {
    return el
  },
  useGetEventCardUsers: function() {
    return et
  },
  useGetOrFetchEmbeddedActivityApplication: function() {
    return eo
  },
  useGuildPopoutCards: function() {
    return q
  },
  useSortUserIdsByAffinity: function() {
    return $
  },
  useSortUsersByAffinity: function() {
    return ee
  },
  useVoiceChannelUsers: function() {
    return Q
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
  E = n("12498"),
  I = n("557135"),
  T = n("471445"),
  f = n("66999"),
  S = n("15274"),
  h = n("924301"),
  A = n("230900"),
  m = n("703656"),
  N = n("881824"),
  p = n("922482"),
  O = n("565799"),
  C = n("501655"),
  R = n("344185"),
  g = n("199902"),
  L = n("592125"),
  v = n("480294"),
  D = n("984933"),
  M = n("271383"),
  y = n("496675"),
  P = n("158776"),
  U = n("699516"),
  b = n("800599"),
  G = n("594174"),
  w = n("979651"),
  k = n("938475"),
  B = n("393112"),
  V = n("626135"),
  x = n("823379"),
  F = n("5192"),
  H = n("51144"),
  Y = n("912787"),
  j = n("126134"),
  W = n("981631"),
  K = n("765305"),
  z = n("689938");
let Z = {
  Event: 7,
  Game: 6,
  EmbeddedActivity: 5,
  Stream: 4,
  Video: 3,
  Voice: 2,
  Base: 1
};

function X(e, t) {
  let n = k.default.getVoiceStatesForChannelAlt(e, t).map(e => {
      let {
        user: t
      } = e;
      return t.id
    }),
    i = v.default.hasConsented(W.Consents.PERSONALIZATION),
    r = b.default.getUserAffinities();
  return (i && r.length > 0 ? (0, a.orderBy)(n, [e => {
    var t, n;
    return null !== (n = null === (t = b.default.getUserAffinity(e)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0
  }], ["desc"]) : n).map(e => G.default.getUser(e)).filter(x.isNotNullish)
}

function Q(e, t) {
  return function(e, t, n, i) {
    let r;
    let a = $(e),
      o = s.useMemo(() => a.map(e => G.default.getUser(e)).filter(x.isNotNullish), [a]),
      l = o.slice(0, 6),
      u = Math.max(0, o.length - l.length);
    if (null != i && i.length > 0) {
      let e = F.default.getName(t, n, G.default.getUser(i[0]));
      r = 1 === i.length ? z.default.Messages.GUILD_POPOUT_ACTIVITY_STREAMER.format({
        username: e
      }) : z.default.Messages.GUILD_POPOUT_USERS_STREAMING.format({
        username: e,
        count: i.length - 1
      })
    } else if (l.length > 0) {
      let e = F.default.getName(t, n, G.default.getUser(l[0].id));
      r = 1 === l.length ? z.default.Messages.GUILD_POPOUT_USER_IN_VOICE.format({
        username: e
      }) : z.default.Messages.GUILD_POPOUT_USERS_IN_VOICE.format({
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
  }((0, l.useStateFromStores)([k.default], () => k.default.getVoiceStatesForChannelAlt(e, t), [e, t]).map(e => {
    let {
      user: t
    } = e;
    return t.id
  }), t, e)
}

function q(e) {
  let t = e.id,
    [n, i] = s.useState([]),
    [r, u] = s.useState(0),
    c = (0, l.useStateFromStoresArray)([D.default, R.default], () => {
      let e = D.default.getChannels(t)[D.GUILD_VOCAL_CHANNELS_KEY].map(e => {
        let {
          channel: t
        } = e;
        return t.id
      });
      return [...e, ...Object.values(R.default.getThreadsForGuild(t)).flatMap(e => Object.keys(e))]
    }, [t]),
    E = (0, l.useStateFromStores)([h.default, L.default], () => h.default.getGuildScheduledEventsForGuild(t).filter(e => (0, h.isGuildScheduledEventActive)(e)).map(e => {
      var t;
      return {
        category: j.CardCategory.EVENT,
        event: e,
        isStage: !!(null === (t = L.default.getChannel(e.channel_id)) || void 0 === t ? void 0 : t.isGuildStageVoice())
      }
    }), [t], a.isEqual),
    I = E.map(e => {
      let {
        event: t
      } = e;
      return t.channel_id
    }),
    T = (0, l.useStateFromStores)([U.default], () => U.default.getRelationships()),
    f = s.useMemo(() => Object.keys(T).filter(e => T[e] === W.RelationshipTypes.BLOCKED), [T]),
    S = (0, l.useStateFromStores)([k.default], () => k.default.getVoiceStates(t), [t]),
    A = s.useMemo(() => {
      let t = Object.keys(S);
      return 0 === t.length ? [] : t.filter(t => {
        let n = S[t].filter(x.isNotNullish);
        return !(0 === n.length || I.includes(t)) && null == n.find(e => {
          let {
            user: t
          } = e;
          return f.includes(t.id)
        }) && t !== e.afkChannelId && c.includes(t)
      })
    }, [S, I, c, f, e.afkChannelId]),
    m = (0, l.useStateFromStores)([d.default, w.default, g.default, P.default, L.default], () => A.map(e => {
      var t;
      let n = g.default.getAllApplicationStreamsForChannel(e).map(e => e.ownerId),
        i = S[e].filter(x.isNotNullish),
        r = d.default.getEmbeddedActivitiesForChannel(e),
        s = j.CardCategory.HANGOUT,
        a = [],
        o = i.map(e => {
          let {
            user: t
          } = e;
          return t.id
        }),
        l = w.default.hasVideo(e),
        u = [],
        c = [];
      for (let e of (r.length > 0 && (s = j.CardCategory.EMBEDDED_ACTIVITY), i)) {
        let t = P.default.findActivity(e.user.id, J(e));
        null != t && !(0, _.default)(t) && (s = j.CardCategory.GAMING, a.push(t), u.push(e.user.id)), e.voiceState.selfVideo && c.push(e.user.id)
      }
      if (s === j.CardCategory.EMBEDDED_ACTIVITY) return {
        category: s,
        embeddedActivities: r,
        streamersCount: n.length,
        voiceUsersCount: i.length
      };
      if (s === j.CardCategory.GAMING) return {
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
        isStage: !!(null === (t = L.default.getChannel(e)) || void 0 === t ? void 0 : t.isGuildStageVoice())
      }
    }), [S, A], a.isEqual),
    N = (0, l.useStateFromStores)([v.default], () => v.default.hasConsented(W.Consents.PERSONALIZATION)),
    p = (0, l.useStateFromStores)([b.default], () => b.default.getUserAffinities()),
    O = N && p.length > 0,
    C = [...m, ...E];
  return r !== C.length && (i((function(e, t) {
    return (0, a.orderBy)(e, [e => (function(e, t) {
      let n = e => e > 0 ? Math.log(e + 1) : 0,
        i = e => e.map(e => {
          var t, n;
          return null !== (n = null === (t = b.default.getUserAffinity(e)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0
        }).map(n),
        r = (0, o.match)(e).with({
          category: j.CardCategory.EVENT
        }, () => 7).with({
          category: j.CardCategory.GAMING
        }, () => 6).with({
          category: j.CardCategory.EMBEDDED_ACTIVITY
        }, () => 5).with({
          streamUserIds: o.P.when(e => e.length > 0)
        }, () => 4).with({
          channelHasVideo: !0
        }, () => 3).with({
          category: j.CardCategory.HANGOUT
        }, () => 2).otherwise(() => 1),
        s = 0;
      if (t) {
        if ("userIds" in e && (s += Math.max(...i(e.userIds))), "embeddedActivities" in e) {
          let t = new Set;
          e.embeddedActivities.forEach(e => {
            t = new Set([...t, ...e.userIds])
          }), s += Math.max(...i([...t]))
        }
        "voiceStates" in e && (s += Math.max(...i(e.voiceStates.filter(x.isNotNullish).map(e => {
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
        "voiceStates" in e && (s += e.voiceStates.filter(x.isNotNullish).map(e => {
          let {
            user: t
          } = e;
          return t.id
        }).length)
      }
      return s = s > 0 ? s * r : 1e-5 * r
    })(e, t)], ["desc"])
  })(C, O).slice(0, 3)), u(C.length)), n
}(r = i || (i = {})).CARD = "card", r.JOIN_BUTTON = "join_button";
let J = e => e => [W.ActivityTypes.PLAYING, W.ActivityTypes.WATCHING].includes(e.type) && (null != e.assets || null != e.state || null != e.details || null != e.party) && !1;

function $(e) {
  return (0, l.useStateFromStoresArray)([v.default, b.default], () => {
    let t = v.default.hasConsented(W.Consents.PERSONALIZATION),
      n = b.default.getUserAffinities();
    return t && n.length > 0 ? (0, a.orderBy)(e, [e => {
      var t, n;
      return null !== (n = null === (t = b.default.getUserAffinity(e)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0
    }], ["desc"]) : e
  }, [e])
}

function ee(e) {
  return (0, l.useStateFromStoresArray)([v.default, b.default], () => {
    let t = v.default.hasConsented(W.Consents.PERSONALIZATION),
      n = b.default.getUserAffinities();
    return t && n.length > 0 ? (0, a.orderBy)(e, [e => {
      var t, n;
      return null !== (n = null === (t = b.default.getUserAffinity(e.id)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0
    }], ["desc"]) : e
  }, [e])
}

function et(e) {
  let t = (0, l.useStateFromStores)([O.default], () => null == e ? null : O.default.getParticipantCount(e.id, C.StageChannelParticipantNamedIndex.AUDIENCE)),
    n = (0, l.useStateFromStoresArray)([O.default], () => null == e ? [] : O.default.getMutableParticipants(e.id, C.StageChannelParticipantNamedIndex.SPEAKER).filter(e => e.type === C.StageChannelParticipantTypes.VOICE).map(e => {
      let {
        user: t
      } = e;
      return t
    })),
    i = (0, l.useStateFromStoresArray)([k.default], () => null == e ? [] : k.default.getVoiceStatesForChannel(e).filter(x.isNotNullish).map(e => {
      let {
        user: t
      } = e;
      return t
    }));
  if ((null == e ? void 0 : e.type) === W.ChannelTypes.GUILD_STAGE_VOICE) {
    let e = n.slice(0, 3),
      i = Math.max(0, n.length - e.length);
    return {
      usersToShow: n,
      othersCount: i,
      audienceCount: null != t ? t : 0
    }
  }
  if ((null == e ? void 0 : e.type) === W.ChannelTypes.GUILD_VOICE) {
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

function en(e, t) {
  var n, i;
  let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  let s = (n = e, i = t, n.map(e => {
      var t;
      let n = G.default.getUser(e);
      if (null == n) return null;
      let r = M.default.getNick(i, n.id);
      return null !== (t = null != r ? r : H.default.getGlobalName(n)) && void 0 !== t ? t : H.default.getUserTag(n)
    }).filter(e => null != e)),
    a = s.length;
  if (a > 0) return 1 === a || r ? z.default.Messages.USER_SUMMARY_ONE.format({
    first: s[0]
  }) : (2 === a ? z.default.Messages.USER_SUMMARY_TWO : 3 === a ? z.default.Messages.USER_SUMMARY_THREE : z.default.Messages.USER_SUMMARY_THREE_AND_OTHERS).format({
    first: s[0],
    second: null == s ? void 0 : s[1],
    third: null == s ? void 0 : s[2],
    count: a - 3
  })
}

function ei(e, t, n, i) {
  var r, s;
  let a = {},
    o = null !== (s = (0, Y.getChannelIdFromCardData)(e)) && void 0 !== s ? s : "";
  a.source = i, a.card_type = e.category, a.card_position = n, a.channel_id = o, a.channel_type = null === (r = L.default.getChannel(o)) || void 0 === r ? void 0 : r.type;
  let l = X(o, t);
  a.card_affinity_users_count = Math.min(l.length, 6), a.card_total_users_count = l.length, a.card_affinity_user_ids = l.slice(0, 6).map(e => e.id), a.card_max_affinity_user_id = l.length > 0 ? l[0].id : "0", a.card_user_affinity_scores = l.slice(0, 6).map(e => {
    var t, n;
    return null !== (n = null === (t = b.default.getUserAffinity(e.id)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0
  }), V.default.track(W.AnalyticEvents.GUILD_TOOLTIP_CARD_CLICKED, {
    ...a,
    guild_id: t
  })
}

function er(e, t, n) {
  let {
    category: i
  } = e;
  switch (i) {
    case j.CardCategory.HANGOUT:
    case j.CardCategory.GAMING:
      return () => {
        let {
          channelId: i
        } = e, r = L.default.getChannel(i), s = y.default.can(W.Permissions.CONNECT, r);
        ei(e, t, n, "card"), s ? (0, m.transitionToGuild)(t, i) : ((0, m.transitionToGuild)(t), u.default.channelListScrollTo(t, i))
      };
    case j.CardCategory.EMBEDDED_ACTIVITY:
      return () => {
        let {
          channelId: i
        } = e.embeddedActivities[0], r = L.default.getChannel(i), s = y.default.can(W.Permissions.CONNECT, r);
        ei(e, t, n, "card"), s ? (0, m.transitionToGuild)(t, i) : ((0, m.transitionToGuild)(t), u.default.channelListScrollTo(t, i))
      };
    case j.CardCategory.EVENT:
      return () => {
        ei(e, t, n, "card"), (0, S.openGuildEventDetails)({
          eventId: e.event.id
        })
      };
    default:
      return null
  }
}

function es(e, t) {
  let {
    category: n
  } = e;
  switch (n) {
    case j.CardCategory.HANGOUT:
    case j.CardCategory.GAMING:
      return () => {
        let {
          channelId: n
        } = e, i = L.default.getChannel(n);
        null != i && i.type === W.ChannelTypes.GUILD_VOICE && y.default.can(W.Permissions.CONNECT, i) && (I.default.handleVoiceConnect({
          channel: i,
          connected: w.default.isInChannel(n),
          needSubscriptionToAccess: (0, f.getChannelRoleSubscriptionStatus)(n).needSubscriptionToAccess,
          locked: !1
        }), (0, m.transitionToGuild)(t, n))
      };
    case j.CardCategory.EMBEDDED_ACTIVITY:
      return () => {
        let {
          channelId: n
        } = e.embeddedActivities[0], i = L.default.getChannel(n);
        null != i && i.type === W.ChannelTypes.GUILD_VOICE && y.default.can(W.Permissions.CONNECT, i) && (I.default.handleVoiceConnect({
          channel: i,
          connected: w.default.isInChannel(n),
          needSubscriptionToAccess: (0, f.getChannelRoleSubscriptionStatus)(n).needSubscriptionToAccess,
          locked: !1
        }), (0, m.transitionToGuild)(t, n))
      };
    case j.CardCategory.EVENT:
      return () => {
        let {
          event: t
        } = e, {
          channel_id: n,
          guild_id: i,
          entity_type: r
        } = t, s = L.default.getChannel(n);
        if (null == n || null == s || !y.default.can(W.Permissions.CONNECT, s)) {
          (0, S.openGuildEventDetails)({
            eventId: t.id
          });
          return
        }
        let a = async () => {
          let e = await (0, p.connectOrLurkStage)(i, n);
          (0, N.navigateToStage)(e, null, !1)
        };
        r === K.GuildScheduledEventEntityTypes.STAGE_INSTANCE ? a() : r === K.GuildScheduledEventEntityTypes.VOICE && (I.default.handleVoiceConnect({
          channel: s,
          connected: w.default.isInChannel(n),
          needSubscriptionToAccess: (0, f.getChannelRoleSubscriptionStatus)(n).needSubscriptionToAccess,
          locked: !1
        }), (0, m.transitionToGuild)(i, n))
      };
    default:
      return null
  }
}

function ea(e) {
  let t, n;
  let i = (0, A.getLocationFromEvent)(e),
    r = null == i ? void 0 : i.replace(/[<#>]/g, ""),
    s = null != r ? L.default.getChannel(r) : L.default.getChannel(e.channel_id),
    a = y.default.can(W.Permissions.VIEW_CHANNEL, s);
  if (null != s && a) t = (0, T.getSimpleChannelIconComponent)(s.type), n = s.name;
  else {
    if (null == i) return null;
    t = B.default, n = i
  }
  return {
    IconComponent: t,
    locationName: n
  }
}

function eo(e) {
  let t = e.category === j.CardCategory.EMBEDDED_ACTIVITY ? e.embeddedActivities[0].applicationId : null;
  return (0, c.useGetOrFetchApplication)(t)
}

function el(e) {
  let t = (0, l.useStateFromStores)([E.default], () => E.default.getChannelStatus(e)),
    n = null != t && t.trim().length > 0;
  return {
    channelStatus: t,
    hasChannelStatus: n
  }
}