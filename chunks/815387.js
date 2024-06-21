n(411104);
var s = n(735250),
  i = n(470079),
  l = n(442837),
  a = n(481060),
  r = n(239091),
  o = n(904245),
  c = n(287734),
  u = n(872810),
  d = n(911969),
  E = n(376484),
  _ = n(362604),
  I = n(710845),
  T = n(825829),
  N = n(623624),
  m = n(533694),
  h = n(182180),
  C = n(924301),
  S = n(225890),
  A = n(434404),
  p = n(507435),
  g = n(504733),
  f = n(563959),
  O = n(703656),
  R = n(471253),
  M = n(565799),
  x = n(590415),
  v = n(911560),
  L = n(488131),
  Z = n(814820),
  P = n(314897),
  D = n(523746),
  j = n(592125),
  U = n(430824),
  y = n(496675),
  b = n(158776),
  B = n(944486),
  k = n(594174),
  G = n(979651),
  F = n(113039),
  V = n(755090),
  w = n(136036),
  H = n(676751),
  Y = n(662147),
  K = n(900316),
  W = n(493829),
  z = n(65667),
  Q = n(36664),
  X = n(645092),
  q = n(464139),
  J = n(497481),
  $ = n(705116),
  ee = n(808641),
  et = n(318175),
  en = n(75601),
  es = n(595162),
  ei = n(407818),
  el = n(24971),
  ea = n(314061),
  er = n(501217),
  eo = n(908648),
  ec = n(774200),
  eu = n(690249),
  ed = n(658975),
  eE = n(147507),
  e_ = n(585483),
  eI = n(5192),
  eT = n(960048),
  eN = n(709054),
  em = n(937889),
  eh = n(818570),
  eC = n(942951),
  eS = n(981631),
  eA = n(70722),
  ep = n(689938),
  eg = n(518171);

function ef(e) {
  let {
    message: t,
    channel: n,
    compact: a
  } = e, {
    author: r
  } = t, {
    guild_id: o
  } = n, c = t.getChannelId(), u = (0, l.e7)([U.Z], () => U.Z.getGuild(o), [o]), d = i.useCallback(() => {
    if (null != u)(0, N.f)({
      guildId: u.id,
      location: {
        section: eS.jXE.CHANNEL_TEXT_AREA,
        object: eS.qAy.BOOST_ANNOUNCEMENT_UPSELL
      }
    })
  }, [u]), E = (0, eC.l)({
    user: r,
    channelId: c,
    guildId: n.guild_id,
    messageId: t.id,
    stopPropagation: !0
  });
  return (0, s.jsx)(eE.ZP, {
    message: t,
    compact: a,
    guild: u,
    usernameHook: E,
    onClickMessage: d
  })
}

function eO(e) {
  let {
    message: t,
    compact: n,
    channel: i
  } = e, l = (0, eC.l)({
    user: t.author,
    channelId: i.id,
    guildId: i.guild_id,
    messageId: t.id
  });
  return (0, s.jsx)(z.Z, {
    message: t,
    compact: n,
    usernameHook: l
  })
}
let eR = Object.freeze({
  [eS.uaV.DEFAULT]: void 0,
  [eS.uaV.REPLY]: void 0,
  [eS.uaV.CHAT_INPUT_COMMAND]: void 0,
  [eS.uaV.CONTEXT_MENU_COMMAND]: void 0,
  [eS.uaV.RECIPIENT_ADD]: function(e) {
    let {
      message: t,
      channel: n,
      compact: i
    } = e, {
      author: a
    } = t, r = t.getChannelId(), o = (0, l.e7)([k.default], () => k.default.getUser(t.mentions[0]), [t]), c = eI.ZP.getName(null, r, o), u = (0, eC.l)({
      user: a,
      channelId: r,
      guildId: n.guild_id,
      messageId: t.id
    }), d = (0, eC.l)({
      user: o,
      channelId: r,
      guildId: n.guild_id,
      messageId: t.id
    });
    return n.isThread() ? (0, s.jsx)(eo.Z, {
      message: t,
      channel: n,
      compact: i,
      targetUser: o,
      actorUsernameHook: u,
      targetUsernameHook: d
    }) : (0, s.jsx)(ee.Z, {
      message: t,
      compact: i,
      otherUsername: c,
      usernameHook: u,
      otherUsernameHook: d
    })
  },
  [eS.uaV.RECIPIENT_REMOVE]: function(e) {
    let {
      message: t,
      channel: n,
      compact: i
    } = e, {
      author: a
    } = t, r = t.getChannelId(), o = (0, l.e7)([k.default], () => k.default.getUser(t.mentions[0]), [t]), c = (0, eC.l)({
      user: a,
      channelId: r,
      guildId: n.guild_id,
      messageId: t.id
    }), u = (0, eC.l)({
      user: o,
      channelId: r,
      guildId: n.guild_id,
      messageId: t.id
    });
    return n.isThread() ? (0, s.jsx)(ec.Z, {
      message: t,
      channel: n,
      compact: i,
      targetUser: o,
      actorUsernameHook: c,
      targetUsernameHook: u
    }) : null != o && o.id !== a.id ? (0, s.jsx)(et.Z, {
      message: t,
      channel: n,
      compact: i,
      usernameHook: c,
      otherUser: o,
      otherUsernameHook: u
    }) : (0, s.jsx)(et.Z, {
      message: t,
      channel: n,
      usernameHook: c
    })
  },
  [eS.uaV.CALL]: function(e) {
    let {
      message: t,
      compact: n,
      channel: a
    } = e, {
      id: r,
      author: o
    } = t, u = P.default.getId(), d = t.getChannelId(), E = (0, l.e7)([D.Z], () => D.Z.isCallActive(d, r), [d, r]), _ = (0, l.e7)([G.Z], () => G.Z.getVoiceState(eS.ME, u)), I = !E && null != t.call && !t.call.participants.includes(u), T = E && (null == _ || _.channelId !== d), N = i.useCallback(() => c.default.selectVoiceChannel(d), [d]), m = (0, eC.l)({
      user: o,
      channelId: d,
      guildId: a.guild_id,
      messageId: t.id
    });
    return (0, s.jsx)(w.Z, {
      compact: n,
      message: t,
      missed: I,
      joinable: T,
      usernameHook: m,
      onClickJoinCall: N
    })
  },
  [eS.uaV.CHANNEL_NAME_CHANGE]: function(e) {
    let {
      message: t,
      compact: n,
      channel: i
    } = e, {
      author: l
    } = t, a = t.getChannelId(), r = (0, eC.l)({
      user: l,
      channelId: a,
      guildId: i.guild_id,
      messageId: t.id
    });
    return (0, s.jsx)(K.Z, {
      compact: n,
      message: t,
      usernameHook: r,
      isForumPost: i.isForumPost()
    })
  },
  [eS.uaV.CHANNEL_ICON_CHANGE]: function(e) {
    let {
      message: t,
      compact: n,
      channel: i
    } = e, {
      author: l
    } = t, a = t.getChannelId(), r = (0, eC.l)({
      user: l,
      channelId: a,
      guildId: i.guild_id,
      messageId: t.id
    });
    return (0, s.jsx)(Y.Z, {
      compact: n,
      message: t,
      usernameHook: r
    })
  },
  [eS.uaV.CHANNEL_PINNED_MESSAGE]: function(e) {
    let {
      message: t,
      compact: n,
      channel: l
    } = e, {
      author: a
    } = t, r = t.getChannelId(), o = i.useCallback(() => {
      if (B.Z.getChannelId() !== r) {
        let e = j.Z.getChannel(r);
        null != e && (0, O.XU)(e.guild_id, e.id)
      }
      setTimeout(() => e_.S.dispatch(eS.CkL.TOGGLE_CHANNEL_PINS), 0)
    }, [r]), c = (0, eC.l)({
      user: a,
      channelId: r,
      guildId: l.guild_id,
      messageId: t.id
    });
    return (0, s.jsx)(W.Z, {
      message: t,
      compact: n,
      usernameHook: c,
      onClickPins: __OVERLAY__ ? null : o
    })
  },
  [eS.uaV.USER_JOIN]: function(e) {
    let {
      message: t,
      compact: n,
      channel: i
    } = e, {
      author: l
    } = t, a = t.getChannelId(), r = (0, eC.l)({
      user: l,
      channelId: a,
      guildId: i.guild_id,
      messageId: t.id
    });
    return (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(ed.Z, {
        message: t,
        guildId: i.guild_id,
        compact: n,
        usernameHook: r
      }), (0, s.jsx)(Z.f, {
        channel: i,
        message: t
      })]
    })
  },
  [eS.uaV.GUILD_BOOST]: ef,
  [eS.uaV.GUILD_BOOST_TIER_1]: ef,
  [eS.uaV.GUILD_BOOST_TIER_2]: ef,
  [eS.uaV.GUILD_BOOST_TIER_3]: ef,
  [eS.uaV.CHANNEL_FOLLOW_ADD]: function(e) {
    let {
      message: t,
      compact: n,
      channel: i
    } = e, {
      author: l
    } = t, a = t.getChannelId(), r = (0, eC.l)({
      user: l,
      channelId: a,
      guildId: i.guild_id,
      messageId: t.id
    });
    return (0, s.jsx)(H.Z, {
      message: t,
      compact: n,
      usernameHook: r
    })
  },
  [eS.uaV.GUILD_STREAM]: function(e) {
    let {
      message: t,
      compact: n,
      channel: a
    } = e, {
      author: r,
      author: {
        id: o
      },
      messageReference: c
    } = t, d = t.getChannelId(), E = (0, l.e7)([b.Z], () => b.Z.findActivity(o, e => e.type === eS.IIU.PLAYING), [o]), _ = (0, l.e7)([j.Z], () => null != c ? j.Z.getChannel(c.channel_id) : null, [c]), I = null == c ? void 0 : c.guild_id, T = (0, eC.l)({
      user: r,
      channelId: d,
      guildId: a.guild_id,
      messageId: t.id
    }), N = i.useCallback(() => {
      if (null != _ && null != I)(0, u.iV)({
        streamType: eA.lo.GUILD,
        ownerId: o,
        channelId: _.id,
        guildId: I
      })
    }, [o, _, I]);
    return null != c && null != _ && null != c.guild_id ? (0, s.jsx)(J.Z, {
      message: t,
      compact: n,
      channel: _,
      playingActivity: E,
      onJoinStream: N,
      usernameHook: T
    }) : null
  },
  [eS.uaV.GUILD_DISCOVERY_DISQUALIFIED]: function(e) {
    let {
      message: t,
      compact: n
    } = e, i = t.getChannelId(), a = (0, l.e7)([j.Z], () => j.Z.getChannel(i), [i]), r = null != a ? a.getGuildId() : null;
    return (0, s.jsx)(Q.IF, {
      message: t,
      compact: n,
      onClick: () => {
        null != r && A.Z.open(r, eS.pNK.DISCOVERY)
      }
    })
  },
  [eS.uaV.GUILD_DISCOVERY_REQUALIFIED]: Q.Ci,
  [eS.uaV.GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING]: Q.s0,
  [eS.uaV.GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING]: Q.k$,
  [eS.uaV.THREAD_CREATED]: function(e) {
    let {
      message: t,
      channel: l,
      compact: o
    } = e, c = (0, eC.l)({
      user: t.author,
      channelId: t.channel_id,
      guildId: l.guild_id,
      messageId: t.id
    }), u = i.useCallback(async e => {
      var n;
      let s = null === (n = t.messageReference) || void 0 === n ? void 0 : n.channel_id;
      if (null != s) {
        await v.Z.loadThread(s);
        let t = j.Z.getChannel(s);
        null != t && (0, L.ok)(t, e.shiftKey)
      }
    }, [t]), d = i.useCallback(() => {
      (0, a.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("91315"), n.e("36970")]).then(n.bind(n, 223901));
        return t => (0, s.jsx)(e, {
          channel: l,
          ...t
        })
      })
    }, [l]), E = i.useCallback(e => {
      var i;
      let l = j.Z.getChannel(null === (i = t.messageReference) || void 0 === i ? void 0 : i.channel_id);
      null != l && (0, r.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("39285"), n.e("48800"), n.e("78650")]).then(n.bind(n, 422200));
        return t => (0, s.jsx)(e, {
          ...t,
          channel: l
        })
      })
    }, [t]);
    return (0, s.jsx)(er.Z, {
      message: t,
      compact: o,
      usernameHook: c,
      onClickThread: u,
      onClickViewThreads: d,
      onContextMenuThread: E
    })
  },
  [eS.uaV.THREAD_STARTER_MESSAGE]: eu.Z,
  [eS.uaV.GUILD_INVITE_REMINDER]: function(e) {
    let {
      message: t,
      channel: n,
      compact: i
    } = e, a = (0, l.e7)([k.default], () => k.default.getCurrentUser()), r = (0, l.e7)([U.Z], () => {
      var e, t;
      return null !== (t = null === (e = U.Z.getGuild(n.getGuildId())) || void 0 === e ? void 0 : e.isOwner(a)) && void 0 !== t && t
    });
    return (0, s.jsx)($.Z, {
      message: t,
      compact: i,
      isOwner: r,
      channel: n
    })
  },
  [eS.uaV.AUTO_MODERATION_ACTION]: function(e) {
    let {
      message: t,
      compact: n,
      channel: i
    } = e;
    return (0, T.nY)(t) ? (0, s.jsx)(V.Z, {
      message: t,
      compact: n,
      channel: i
    }) : null
  },
  [eS.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED]: eO,
  [eS.uaV.GUILD_INCIDENT_ALERT_MODE_DISABLED]: eO,
  [eS.uaV.GUILD_INCIDENT_REPORT_RAID]: function(e) {
    let {
      message: t,
      compact: n,
      channel: i
    } = e, l = (0, eC.l)({
      user: t.author,
      channelId: i.id,
      guildId: i.guild_id,
      messageId: t.id
    });
    return (0, s.jsx)(q.Z, {
      message: t,
      compact: n,
      channel: i,
      usernameHook: l
    })
  },
  [eS.uaV.GUILD_INCIDENT_REPORT_FALSE_ALARM]: function(e) {
    let {
      message: t,
      compact: n,
      channel: i
    } = e, l = (0, eC.l)({
      user: t.author,
      channelId: i.id,
      guildId: i.guild_id,
      messageId: t.id
    });
    return (0, s.jsx)(X.Z, {
      message: t,
      compact: n,
      channel: i,
      usernameHook: l
    })
  },
  [eS.uaV.ROLE_SUBSCRIPTION_PURCHASE]: h.Z,
  [eS.uaV.PURCHASE_NOTIFICATION]: function(e) {
    var t;
    let {
      message: n,
      channel: i,
      compact: l
    } = e;
    return (null === (t = n.purchaseNotification) || void 0 === t ? void 0 : t.type) === d.Eh.GUILD_PRODUCT ? (0, s.jsx)(m.Z, {
      message: n,
      channel: i,
      compact: l
    }) : null
  },
  [eS.uaV.INTERACTION_PREMIUM_UPSELL]: void 0,
  [eS.uaV.STAGE_START]: function(e) {
    let {
      message: t,
      channel: n,
      compact: i
    } = e, a = (0, eC.l)({
      user: t.author,
      channelId: n.id,
      guildId: n.guild_id,
      messageId: t.id
    }), r = (0, l.e7)([C.ZP], () => C.ZP.getActiveEventByChannel(n.id), [n.id]);
    return (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(el.Z, {
        message: t,
        compact: i,
        usernameHook: a
      }), null != r && r.name === t.content ? (0, s.jsx)(S.Z, {
        code: "".concat(n.guild_id, "-").concat(r.id)
      }) : null]
    })
  },
  [eS.uaV.STAGE_END]: function(e) {
    let {
      message: t,
      channel: n,
      compact: i
    } = e, l = (0, eC.l)({
      user: t.author,
      channelId: n.id,
      guildId: n.guild_id,
      messageId: t.id
    });
    return (0, s.jsx)(en.Z, {
      message: t,
      compact: i,
      usernameHook: l
    })
  },
  [eS.uaV.STAGE_SPEAKER]: function(e) {
    let {
      message: t,
      channel: n,
      compact: i
    } = e, l = (0, eC.l)({
      user: t.author,
      channelId: n.id,
      guildId: n.guild_id,
      messageId: t.id
    });
    return (0, s.jsx)(ei.Z, {
      message: t,
      compact: i,
      usernameHook: l
    })
  },
  [eS.uaV.STAGE_RAISE_HAND]: function(e) {
    var t, n;
    let {
      message: i,
      channel: r,
      compact: c
    } = e, u = (0, eC.l)({
      user: i.author,
      channelId: r.id,
      guildId: r.guild_id,
      messageId: i.id
    }), d = (0, l.e7)([y.Z], () => y.Z.can(eS.Plq.MUTE_MEMBERS, r)), E = (0, l.e7)([M.Z], () => M.Z.getParticipant(r.id, i.author.id)), _ = new Date(eN.default.extractTimestamp(i.id)).toISOString() === new Date(null !== (n = null == E ? void 0 : null === (t = E.voiceState) || void 0 === t ? void 0 : t.requestToSpeakTimestamp) && void 0 !== n ? n : 0).toISOString(), I = d && (null == E ? void 0 : E.rtsState) === x.xO.REQUESTED_TO_SPEAK && _;
    return (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(es.Z, {
        message: i,
        compact: c,
        usernameHook: u
      }), I ? (0, s.jsxs)(a.Button, {
        wrapperClassName: eg.inviteToSpeakButtonWrapper,
        innerClassName: eg.inviteToSpeakButtonInner,
        look: a.Button.Looks.FILLED,
        color: a.Button.Colors.PRIMARY,
        onClick: () => {
          (0, R.DT)(r, i.author.id, !1), o.Z.deleteMessage(r.id, i.id, !0)
        },
        children: [(0, s.jsx)(a.MicrophoneArrowRightIcon, {
          size: "custom",
          color: "currentColor",
          height: 20,
          width: 20
        }), ep.Z.Messages.REQUEST_TO_SPEAK_ACCEPT]
      }) : null]
    })
  },
  [eS.uaV.STAGE_TOPIC]: function(e) {
    let {
      message: t,
      channel: n,
      compact: i
    } = e, l = (0, eC.l)({
      user: t.author,
      channelId: n.id,
      guildId: n.guild_id,
      messageId: t.id
    });
    return (0, s.jsx)(ea.Z, {
      message: t,
      compact: i,
      usernameHook: l
    })
  },
  [eS.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION]: g.Z,
  [eS.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED]: f.P,
  [eS.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED]: f.e,
  [eS.uaV.PREMIUM_REFERRAL]: void 0,
  [eS.uaV.GUILD_DEADCHAT_REVIVE_PROMPT]: function(e) {
    let {
      message: t,
      channel: n,
      compact: i
    } = e;
    return (0, s.jsx)(_.Z, {
      message: t,
      channel: n,
      compact: i
    })
  },
  [eS.uaV.CUSTOM_GIFT]: void 0,
  [eS.uaV.GUILD_GAMING_STATS_PROMPT]: function(e) {
    let {
      message: t,
      channel: n,
      compact: i
    } = e;
    return (0, s.jsx)(E.Z, {
      message: t,
      channel: n,
      compact: i
    })
  },
  [eS.uaV.VOICE_HANGOUT_INVITE]: void 0,
  [eS.uaV.POLL_RESULT]: p.Z,
  [eS.uaV.CHANGELOG]: void 0,
  [eS.uaV.NITRO_NOTIFICATION]: function(e) {
    let {
      message: t,
      channel: n
    } = e;
    return (0, s.jsx)(eh.Z, {
      message: t,
      channel: n
    })
  }
});
t.Z = i.memo(function(e) {
  let {
    message: t,
    channel: n,
    compact: i
  } = e, {
    type: l
  } = t, a = eR[l];
  if (null == a) {
    var r;
    return r = Error("unknown message type ".concat(t.type)), eT.Z.captureException(r), new I.Z("SystemMessage").error("", r), null
  }
  return (0, s.jsx)(F.ZP, {
    message: t,
    content: (0, em.ZP)(t).content,
    children: (0, s.jsx)(a, {
      message: t,
      channel: n,
      compact: i
    })
  })
})