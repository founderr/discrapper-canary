"use strict";
n.d(t, {
  $1: function() {
    return ec
  },
  CE: function() {
    return ef
  },
  DE: function() {
    return eI
  },
  Es: function() {
    return el
  },
  FP: function() {
    return eo
  },
  K6: function() {
    return eu
  },
  NZ: function() {
    return eT
  },
  QO: function() {
    return ei
  },
  V1: function() {
    return er
  },
  bA: function() {
    return en
  },
  fd: function() {
    return ea
  },
  ni: function() {
    return eh
  },
  ob: function() {
    return e_
  },
  pV: function() {
    return i
  }
}), n(47120), n(390547), n(653041), n(627341), n(757143);
var i, r, s = n(470079),
  o = n(392711),
  a = n(278074),
  l = n(442837),
  u = n(481060),
  _ = n(925549),
  c = n(317381),
  d = n(841784),
  E = n(367907),
  I = n(835473),
  T = n(12498),
  h = n(557135),
  f = n(471445),
  S = n(66999),
  A = n(15274),
  N = n(924301),
  m = n(230900),
  O = n(703656),
  R = n(881824),
  p = n(922482),
  g = n(565799),
  C = n(501655),
  v = n(344185),
  L = n(814443),
  D = n(199902),
  M = n(592125),
  P = n(480294),
  y = n(984933),
  U = n(271383),
  b = n(496675),
  G = n(158776),
  w = n(699516),
  B = n(594174),
  x = n(979651),
  k = n(938475),
  V = n(626135),
  Z = n(823379),
  H = n(5192),
  F = n(51144),
  Y = n(912787),
  j = n(126134),
  W = n(981631),
  K = n(765305),
  z = n(689938);
let q = 7,
  X = 6,
  Q = 5,
  J = 4,
  $ = 3,
  ee = 2,
  et = 1;

function en(e, t) {
  let n = k.ZP.getVoiceStatesForChannelAlt(e, t).map(e => {
      let {
        user: t
      } = e;
      return t.id
    }),
    i = P.Z.hasConsented(W.pjP.PERSONALIZATION),
    r = L.Z.getUserAffinities();
  return (i && r.length > 0 ? (0, o.orderBy)(n, [e => {
    var t, n;
    return null !== (n = null === (t = L.Z.getUserAffinity(e)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0
  }], ["desc"]) : n).map(e => B.default.getUser(e)).filter(Z.lm)
}

function ei(e, t) {
  return function(e, t, n, i) {
    let r;
    let o = eo(e),
      a = s.useMemo(() => o.map(e => B.default.getUser(e)).filter(Z.lm), [o]),
      l = a.slice(0, 6),
      u = Math.max(0, a.length - l.length);
    if (null != i && i.length > 0) {
      let e = H.ZP.getName(t, n, B.default.getUser(i[0]));
      r = 1 === i.length ? z.Z.Messages.GUILD_POPOUT_ACTIVITY_STREAMER.format({
        username: e
      }) : z.Z.Messages.GUILD_POPOUT_USERS_STREAMING.format({
        username: e,
        count: i.length - 1
      })
    } else if (l.length > 0) {
      let e = H.ZP.getName(t, n, B.default.getUser(l[0].id));
      r = 1 === l.length ? z.Z.Messages.GUILD_POPOUT_USER_IN_VOICE.format({
        username: e
      }) : z.Z.Messages.GUILD_POPOUT_USERS_IN_VOICE.format({
        username: e,
        count: l.length - 1
      })
    }
    return {
      totalUsers: a.length,
      usersToShow: l,
      othersCount: u,
      usersText: r
    }
  }((0, l.e7)([k.ZP], () => k.ZP.getVoiceStatesForChannelAlt(e, t), [e, t]).map(e => {
    let {
      user: t
    } = e;
    return t.id
  }), t, e)
}(r = i || (i = {})).CARD = "card", r.JOIN_BUTTON = "join_button";

function er(e) {
  let t = e.id,
    [n, i] = s.useState([]),
    [r, u] = s.useState(0),
    _ = (0, l.Wu)([y.ZP, v.Z], () => {
      let e = y.ZP.getChannels(t)[y.Zb].map(e => {
        let {
          channel: t
        } = e;
        return t.id
      });
      return [...e, ...Object.values(v.Z.getThreadsForGuild(t)).flatMap(e => Object.keys(e))]
    }, [t]),
    E = (0, l.e7)([N.ZP, M.Z], () => N.ZP.getGuildScheduledEventsForGuild(t).filter(e => (0, N.xt)(e)).map(e => {
      var t;
      return {
        category: j.L.EVENT,
        event: e,
        isStage: !!(null === (t = M.Z.getChannel(e.channel_id)) || void 0 === t ? void 0 : t.isGuildStageVoice())
      }
    }), [t], o.isEqual),
    I = E.map(e => {
      let {
        event: t
      } = e;
      return t.channel_id
    }),
    T = (0, l.e7)([w.Z], () => w.Z.getRelationships()),
    h = s.useMemo(() => Object.keys(T).filter(e => T[e] === W.OGo.BLOCKED), [T]),
    f = (0, l.e7)([k.ZP], () => k.ZP.getVoiceStates(t), [t]),
    S = s.useMemo(() => {
      let t = Object.keys(f);
      return 0 === t.length ? [] : t.filter(t => {
        let n = f[t].filter(Z.lm);
        return !(0 === n.length || I.includes(t)) && null == n.find(e => {
          let {
            user: t
          } = e;
          return h.includes(t.id)
        }) && t !== e.afkChannelId && _.includes(t)
      })
    }, [f, I, _, h, e.afkChannelId]),
    A = (0, l.e7)([c.ZP, x.Z, D.Z, G.Z, M.Z], () => S.map(e => {
      var t;
      let n = D.Z.getAllApplicationStreamsForChannel(e).map(e => e.ownerId),
        i = f[e].filter(Z.lm),
        r = c.ZP.getEmbeddedActivitiesForChannel(e),
        s = j.L.HANGOUT,
        o = [],
        a = i.map(e => {
          let {
            user: t
          } = e;
          return t.id
        }),
        l = x.Z.hasVideo(e),
        u = [],
        _ = [];
      for (let e of (r.length > 0 && (s = j.L.EMBEDDED_ACTIVITY), i)) {
        let t = G.Z.findActivity(e.user.id, es(e));
        null != t && !(0, d.Z)(t) && (s = j.L.GAMING, o.push(t), u.push(e.user.id)), e.voiceState.selfVideo && _.push(e.user.id)
      }
      if (s === j.L.EMBEDDED_ACTIVITY) return {
        category: s,
        embeddedActivities: r,
        streamersCount: n.length,
        voiceUsersCount: i.length
      };
      if (s === j.L.GAMING) return {
        category: s,
        channelId: e,
        games: o,
        voiceStates: i,
        streamersCount: n.length,
        gameUserIds: u
      };
      return {
        category: s,
        channelId: e,
        userIds: a,
        streamUserIds: n,
        channelHasVideo: l,
        videoUserIds: _,
        isStage: !!(null === (t = M.Z.getChannel(e)) || void 0 === t ? void 0 : t.isGuildStageVoice())
      }
    }), [f, S], o.isEqual),
    m = (0, l.e7)([P.Z], () => P.Z.hasConsented(W.pjP.PERSONALIZATION)),
    O = (0, l.e7)([L.Z], () => L.Z.getUserAffinities()),
    R = m && O.length > 0,
    p = [...A, ...E];
  return r !== p.length && p.length > 0 && (i((function(e) {
    let t = [...e],
      n = t[0].category,
      i = t.findIndex(e => e.category === j.L.EVENT),
      r = t.findIndex(e => e.category === j.L.HANGOUT && e.isStage),
      s = t.findIndex(e => e.category === j.L.EMBEDDED_ACTIVITY),
      o = t.findIndex(e => e.category === j.L.HANGOUT && e.streamUserIds.length > 0),
      a = t.findIndex(e => e.category === j.L.HANGOUT && e.videoUserIds.length > 0),
      l = t.findIndex(e => e.category === j.L.GAMING);
    if (n === j.L.EVENT && 0 === i || n === j.L.HANGOUT && 0 === r || n === j.L.EMBEDDED_ACTIVITY && 0 === s || n === j.L.HANGOUT && 0 === o && -1 === r || n === j.L.HANGOUT && 0 === a && -1 === r && -1 === o || n === j.L.GAMING && 0 === l || -1 === i && -1 === r && -1 === s && -1 === o && -1 === a && -1 === l) return e;
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
    if (-1 !== o) {
      let e = t.splice(o, 1);
      return t.splice(0, 0, e[0]), t
    }
    if (-1 !== a) {
      let e = t.splice(a, 1);
      return t.splice(0, 0, e[0]), t
    }
    if (-1 !== l) {
      let e = t.splice(l, 1);
      return t.splice(0, 0, e[0]), t
    }
    return e
  })(function(e, t) {
    return (0, o.orderBy)(e, [e => (function(e, t) {
      let n = e => e > 0 ? Math.log(e + 1) : 0,
        i = e => e.map(e => {
          var t, n;
          return null !== (n = null === (t = L.Z.getUserAffinity(e)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0
        }).map(n),
        r = (0, a.EQ)(e).with({
          category: j.L.EVENT
        }, () => q).with({
          category: j.L.GAMING
        }, () => X).with({
          category: j.L.EMBEDDED_ACTIVITY
        }, () => Q).with({
          streamUserIds: a.P.when(e => e.length > 0)
        }, () => J).with({
          channelHasVideo: !0
        }, () => $).with({
          category: j.L.HANGOUT
        }, () => ee).otherwise(() => et),
        s = 0;
      if (t) {
        if ("userIds" in e && (s += Math.max(...i(e.userIds))), "embeddedActivities" in e) {
          let t = new Set;
          e.embeddedActivities.forEach(e => {
            t = new Set([...t, ...e.userIds])
          }), s += Math.max(...i([...t]))
        }
        "voiceStates" in e && (s += Math.max(...i(e.voiceStates.filter(Z.lm).map(e => {
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
        "voiceStates" in e && (s += e.voiceStates.filter(Z.lm).map(e => {
          let {
            user: t
          } = e;
          return t.id
        }).length)
      }
      return s = s > 0 ? s * r : 1e-5 * r
    })(e, t)], ["desc"])
  }(p, R)).slice(0, 3)), u(p.length)), n
}
let es = e => e => [W.IIU.PLAYING, W.IIU.WATCHING].includes(e.type) && (null != e.assets || null != e.state || null != e.details || null != e.party) && !1;

function eo(e) {
  return (0, l.Wu)([P.Z, L.Z], () => {
    let t = P.Z.hasConsented(W.pjP.PERSONALIZATION),
      n = L.Z.getUserAffinities();
    return t && n.length > 0 ? (0, o.orderBy)(e, [e => {
      var t, n;
      return null !== (n = null === (t = L.Z.getUserAffinity(e)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0
    }], ["desc"]) : e
  }, [e])
}

function ea(e) {
  return (0, l.Wu)([P.Z, L.Z], () => {
    let t = P.Z.hasConsented(W.pjP.PERSONALIZATION),
      n = L.Z.getUserAffinities();
    return t && n.length > 0 ? (0, o.orderBy)(e, [e => {
      var t, n;
      return null !== (n = null === (t = L.Z.getUserAffinity(e.id)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0
    }], ["desc"]) : e
  }, [e])
}

function el(e) {
  let t = (0, l.e7)([g.Z], () => null == e ? null : g.Z.getParticipantCount(e.id, C.pV.AUDIENCE)),
    n = (0, l.Wu)([g.Z], () => null == e ? [] : g.Z.getMutableParticipants(e.id, C.pV.SPEAKER).filter(e => e.type === C.Ui.VOICE).map(e => {
      let {
        user: t
      } = e;
      return t
    })),
    i = (0, l.Wu)([k.ZP], () => null == e ? [] : k.ZP.getVoiceStatesForChannel(e).filter(Z.lm).map(e => {
      let {
        user: t
      } = e;
      return t
    }));
  if ((null == e ? void 0 : e.type) === W.d4z.GUILD_STAGE_VOICE) {
    let e = n.slice(0, 3),
      i = Math.max(0, n.length - e.length);
    return {
      usersToShow: n,
      othersCount: i,
      audienceCount: null != t ? t : 0
    }
  }
  if ((null == e ? void 0 : e.type) === W.d4z.GUILD_VOICE) {
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

function eu(e, t) {
  var n, i;
  let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  let s = (n = e, i = t, n.map(e => {
      var t;
      let n = B.default.getUser(e);
      if (null == n) return null;
      let r = U.ZP.getNick(i, n.id);
      return null !== (t = null != r ? r : F.ZP.getGlobalName(n)) && void 0 !== t ? t : F.ZP.getUserTag(n)
    }).filter(e => null != e)),
    o = s.length;
  if (o > 0) return 1 === o || r ? z.Z.Messages.USER_SUMMARY_ONE.format({
    first: s[0]
  }) : (2 === o ? z.Z.Messages.USER_SUMMARY_TWO : 3 === o ? z.Z.Messages.USER_SUMMARY_THREE : z.Z.Messages.USER_SUMMARY_THREE_AND_OTHERS).format({
    first: s[0],
    second: null == s ? void 0 : s[1],
    third: null == s ? void 0 : s[2],
    count: o - 3
  })
}

function e_(e, t, n, i) {
  var r, s;
  let o = {},
    a = null !== (s = (0, Y.i)(e)) && void 0 !== s ? s : "";
  o.source = i, o.card_type = e.category, o.card_position = n, o.channel_id = a, o.channel_type = null === (r = M.Z.getChannel(a)) || void 0 === r ? void 0 : r.type;
  let l = en(a, t);
  o.card_affinity_users_count = Math.min(l.length, 6), o.card_total_users_count = l.length, o.card_affinity_user_ids = l.slice(0, 6).map(e => e.id), o.card_max_affinity_user_id = l.length > 0 ? l[0].id : "0", o.card_user_affinity_scores = l.slice(0, 6).map(e => {
    var t, n;
    return null !== (n = null === (t = L.Z.getUserAffinity(e.id)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0
  }), V.default.track(W.rMx.GUILD_TOOLTIP_CARD_CLICKED, {
    ...o,
    ...(0, E.hH)(t)
  })
}

function ec(e, t, n) {
  let {
    category: i
  } = e;
  switch (i) {
    case j.L.HANGOUT:
    case j.L.GAMING:
      return () => {
        let {
          channelId: i
        } = e, r = M.Z.getChannel(i), s = b.Z.can(W.Plq.CONNECT, r);
        e_(e, t, n, "card"), s ? (0, O.XU)(t, i) : ((0, O.XU)(t), _.Z.channelListScrollTo(t, i))
      };
    case j.L.EMBEDDED_ACTIVITY:
      return () => {
        let {
          channelId: i
        } = e.embeddedActivities[0], r = M.Z.getChannel(i), s = b.Z.can(W.Plq.CONNECT, r);
        e_(e, t, n, "card"), s ? (0, O.XU)(t, i) : ((0, O.XU)(t), _.Z.channelListScrollTo(t, i))
      };
    case j.L.EVENT:
      return () => {
        e_(e, t, n, "card"), (0, A.bO)({
          eventId: e.event.id
        })
      };
    default:
      return null
  }
}
let ed = async (e, t) => {
  let n = await (0, p.AC)(e, t);
  (0, R.R5)(n, null, !1)
}, eE = (e, t) => {
  h.Z.handleVoiceConnect({
    channel: t,
    connected: x.Z.isInChannel(t.id),
    needSubscriptionToAccess: (0, S.$)(t.id).needSubscriptionToAccess,
    locked: !1
  }), (0, O.XU)(e, t.id)
};

function eI(e, t) {
  let {
    category: n
  } = e;
  switch (n) {
    case j.L.HANGOUT:
    case j.L.GAMING:
      return () => {
        let {
          channelId: n
        } = e, i = M.Z.getChannel(n);
        if (null != i && !!b.Z.can(W.Plq.CONNECT, i)) i.isGuildStageVoice() ? ed(t, n) : i.isGuildVoice() && eE(t, i)
      };
    case j.L.EMBEDDED_ACTIVITY:
      return () => {
        let {
          channelId: n
        } = e.embeddedActivities[0], i = M.Z.getChannel(n);
        if (null != i && i.type === W.d4z.GUILD_VOICE && !!b.Z.can(W.Plq.CONNECT, i)) eE(t, i)
      };
    case j.L.EVENT:
      return () => {
        let {
          event: t
        } = e, {
          channel_id: n,
          guild_id: i,
          entity_type: r
        } = t, s = M.Z.getChannel(n);
        if (null == n || null == s || !b.Z.can(W.Plq.CONNECT, s)) {
          (0, A.bO)({
            eventId: t.id
          });
          return
        }
        r === K.WX.STAGE_INSTANCE ? ed(i, n) : r === K.WX.VOICE && eE(i, s)
      };
    default:
      return null
  }
}

function eT(e) {
  let t, n;
  let i = (0, m.cS)(e),
    r = null == i ? void 0 : i.replace(/[<#>]/g, ""),
    s = null != r ? M.Z.getChannel(r) : M.Z.getChannel(e.channel_id),
    o = b.Z.can(W.Plq.VIEW_CHANNEL, s);
  if (null != s && o) t = (0, f.Th)(s.type), n = s.name;
  else {
    if (null == i) return null;
    t = u.LocationIcon, n = i
  }
  return {
    IconComponent: t,
    locationName: n
  }
}

function eh(e) {
  let t = e.category === j.L.EMBEDDED_ACTIVITY ? e.embeddedActivities[0].applicationId : null;
  return (0, I.q)(t)
}

function ef(e) {
  let t = (0, l.e7)([T.Z], () => T.Z.getChannelStatus(e)),
    n = null != t && t.trim().length > 0;
  return {
    channelStatus: t,
    hasChannelStatus: n
  }
}