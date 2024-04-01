"use strict";
n.r(t), n("411104");
var s = n("735250"),
  l = n("470079"),
  a = n("442837"),
  i = n("481060"),
  r = n("239091"),
  o = n("904245"),
  u = n("287734"),
  d = n("872810"),
  c = n("911969"),
  E = n("376484"),
  f = n("362604"),
  _ = n("710845"),
  T = n("825829"),
  I = n("623624"),
  m = n("533694"),
  N = n("182180"),
  p = n("924301"),
  S = n("225890"),
  C = n("434404"),
  A = n("504733"),
  h = n("563959"),
  g = n("703656"),
  M = n("471253"),
  O = n("565799"),
  R = n("590415"),
  v = n("911560"),
  L = n("488131"),
  P = n("814820"),
  D = n("314897"),
  x = n("523746"),
  y = n("592125"),
  U = n("430824"),
  j = n("496675"),
  b = n("158776"),
  G = n("944486"),
  B = n("594174"),
  k = n("979651"),
  F = n("372662"),
  w = n("113039"),
  H = n("755090"),
  V = n("136036"),
  Y = n("676751"),
  K = n("662147"),
  W = n("900316"),
  z = n("493829"),
  Q = n("65667"),
  q = n("36664"),
  J = n("645092"),
  Z = n("464139"),
  X = n("497481"),
  $ = n("705116"),
  ee = n("808641"),
  et = n("318175"),
  en = n("75601"),
  es = n("595162"),
  el = n("407818"),
  ea = n("24971"),
  ei = n("314061"),
  er = n("501217"),
  eo = n("908648"),
  eu = n("774200"),
  ed = n("690249"),
  ec = n("658975"),
  eE = n("147507"),
  ef = n("585483"),
  e_ = n("5192"),
  eT = n("960048"),
  eI = n("709054"),
  em = n("937889"),
  eN = n("942951"),
  ep = n("981631"),
  eS = n("70722"),
  eC = n("689938"),
  eA = n("611818");

function eh(e) {
  let {
    message: t,
    channel: n,
    compact: i
  } = e, {
    author: r
  } = t, {
    guild_id: o
  } = n, u = t.getChannelId(), d = (0, a.useStateFromStores)([U.default], () => U.default.getGuild(o), [o]), c = l.useCallback(() => {
    null != d && (0, I.openGuildBoostingMarketingModal)({
      guildId: d.id,
      location: {
        section: ep.AnalyticsSections.CHANNEL_TEXT_AREA,
        object: ep.AnalyticsObjects.BOOST_ANNOUNCEMENT_UPSELL
      }
    })
  }, [d]), E = (0, eN.useUsernameHook)({
    user: r,
    channelId: u,
    guildId: n.guild_id,
    messageId: t.id,
    stopPropagation: !0
  });
  return (0, s.jsx)(eE.default, {
    message: t,
    compact: i,
    guild: d,
    usernameHook: E,
    onClickMessage: c
  })
}

function eg(e) {
  let {
    message: t,
    compact: n,
    channel: l
  } = e, a = (0, eN.useUsernameHook)({
    user: t.author,
    channelId: l.id,
    guildId: l.guild_id,
    messageId: t.id
  });
  return (0, s.jsx)(Q.default, {
    message: t,
    compact: n,
    usernameHook: a
  })
}
let eM = Object.freeze({
  [ep.MessageTypes.DEFAULT]: void 0,
  [ep.MessageTypes.REPLY]: void 0,
  [ep.MessageTypes.CHAT_INPUT_COMMAND]: void 0,
  [ep.MessageTypes.CONTEXT_MENU_COMMAND]: void 0,
  [ep.MessageTypes.RECIPIENT_ADD]: function(e) {
    let {
      message: t,
      channel: n,
      compact: l
    } = e, {
      author: i
    } = t, r = t.getChannelId(), o = (0, a.useStateFromStores)([B.default], () => B.default.getUser(t.mentions[0]), [t]), u = e_.default.getName(null, r, o), d = (0, eN.useUsernameHook)({
      user: i,
      channelId: r,
      guildId: n.guild_id,
      messageId: t.id
    }), c = (0, eN.useUsernameHook)({
      user: o,
      channelId: r,
      guildId: n.guild_id,
      messageId: t.id
    });
    return n.isThread() ? (0, s.jsx)(eo.default, {
      message: t,
      channel: n,
      compact: l,
      targetUser: o,
      actorUsernameHook: d,
      targetUsernameHook: c
    }) : (0, s.jsx)(ee.default, {
      message: t,
      compact: l,
      otherUsername: u,
      usernameHook: d,
      otherUsernameHook: c
    })
  },
  [ep.MessageTypes.RECIPIENT_REMOVE]: function(e) {
    let {
      message: t,
      channel: n,
      compact: l
    } = e, {
      author: i
    } = t, r = t.getChannelId(), o = (0, a.useStateFromStores)([B.default], () => B.default.getUser(t.mentions[0]), [t]), u = (0, eN.useUsernameHook)({
      user: i,
      channelId: r,
      guildId: n.guild_id,
      messageId: t.id
    }), d = (0, eN.useUsernameHook)({
      user: o,
      channelId: r,
      guildId: n.guild_id,
      messageId: t.id
    });
    return n.isThread() ? (0, s.jsx)(eu.default, {
      message: t,
      channel: n,
      compact: l,
      targetUser: o,
      actorUsernameHook: u,
      targetUsernameHook: d
    }) : null != o && o.id !== i.id ? (0, s.jsx)(et.default, {
      message: t,
      channel: n,
      compact: l,
      usernameHook: u,
      otherUser: o,
      otherUsernameHook: d
    }) : (0, s.jsx)(et.default, {
      message: t,
      channel: n,
      usernameHook: u
    })
  },
  [ep.MessageTypes.CALL]: function(e) {
    let {
      message: t,
      compact: n,
      channel: i
    } = e, {
      id: r,
      author: o
    } = t, d = D.default.getId(), c = t.getChannelId(), E = (0, a.useStateFromStores)([x.default], () => x.default.isCallActive(c, r), [c, r]), f = (0, a.useStateFromStores)([k.default], () => k.default.getVoiceState(ep.ME, d)), _ = !E && null != t.call && !t.call.participants.includes(d), T = E && (null == f || f.channelId !== c), I = l.useCallback(() => u.default.selectVoiceChannel(c), [c]), m = (0, eN.useUsernameHook)({
      user: o,
      channelId: c,
      guildId: i.guild_id,
      messageId: t.id
    });
    return (0, s.jsx)(V.default, {
      compact: n,
      message: t,
      missed: _,
      joinable: T,
      usernameHook: m,
      onClickJoinCall: I
    })
  },
  [ep.MessageTypes.CHANNEL_NAME_CHANGE]: function(e) {
    let {
      message: t,
      compact: n,
      channel: l
    } = e, {
      author: a
    } = t, i = t.getChannelId(), r = (0, eN.useUsernameHook)({
      user: a,
      channelId: i,
      guildId: l.guild_id,
      messageId: t.id
    });
    return (0, s.jsx)(W.default, {
      compact: n,
      message: t,
      usernameHook: r,
      isForumPost: l.isForumPost()
    })
  },
  [ep.MessageTypes.CHANNEL_ICON_CHANGE]: function(e) {
    let {
      message: t,
      compact: n,
      channel: l
    } = e, {
      author: a
    } = t, i = t.getChannelId(), r = (0, eN.useUsernameHook)({
      user: a,
      channelId: i,
      guildId: l.guild_id,
      messageId: t.id
    });
    return (0, s.jsx)(K.default, {
      compact: n,
      message: t,
      usernameHook: r
    })
  },
  [ep.MessageTypes.CHANNEL_PINNED_MESSAGE]: function(e) {
    let {
      message: t,
      compact: n,
      channel: a
    } = e, {
      author: i
    } = t, r = t.getChannelId(), o = l.useCallback(() => {
      if (G.default.getChannelId() !== r) {
        let e = y.default.getChannel(r);
        null != e && (0, g.transitionToGuild)(e.guild_id, e.id)
      }
      setTimeout(() => ef.ComponentDispatch.dispatch(ep.ComponentActions.TOGGLE_CHANNEL_PINS), 0)
    }, [r]), u = (0, eN.useUsernameHook)({
      user: i,
      channelId: r,
      guildId: a.guild_id,
      messageId: t.id
    });
    return (0, s.jsx)(z.default, {
      message: t,
      compact: n,
      usernameHook: u,
      onClickPins: __OVERLAY__ ? null : o
    })
  },
  [ep.MessageTypes.USER_JOIN]: function(e) {
    let {
      message: t,
      compact: n,
      channel: l
    } = e, {
      author: a
    } = t, i = t.getChannelId(), r = (0, eN.useUsernameHook)({
      user: a,
      channelId: i,
      guildId: l.guild_id,
      messageId: t.id
    });
    return (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(ec.default, {
        message: t,
        compact: n,
        usernameHook: r
      }), (0, s.jsx)(P.WelcomeCTAContainer, {
        channel: l,
        message: t
      })]
    })
  },
  [ep.MessageTypes.GUILD_BOOST]: eh,
  [ep.MessageTypes.GUILD_BOOST_TIER_1]: eh,
  [ep.MessageTypes.GUILD_BOOST_TIER_2]: eh,
  [ep.MessageTypes.GUILD_BOOST_TIER_3]: eh,
  [ep.MessageTypes.CHANNEL_FOLLOW_ADD]: function(e) {
    let {
      message: t,
      compact: n,
      channel: l
    } = e, {
      author: a
    } = t, i = t.getChannelId(), r = (0, eN.useUsernameHook)({
      user: a,
      channelId: i,
      guildId: l.guild_id,
      messageId: t.id
    });
    return (0, s.jsx)(Y.default, {
      message: t,
      compact: n,
      usernameHook: r
    })
  },
  [ep.MessageTypes.GUILD_STREAM]: function(e) {
    let {
      message: t,
      compact: n,
      channel: i
    } = e, {
      author: r,
      author: {
        id: o
      },
      messageReference: u
    } = t, c = t.getChannelId(), E = (0, a.useStateFromStores)([b.default], () => b.default.findActivity(o, e => e.type === ep.ActivityTypes.PLAYING), [o]), f = (0, a.useStateFromStores)([y.default], () => null != u ? y.default.getChannel(u.channel_id) : null, [u]), _ = null == u ? void 0 : u.guild_id, T = (0, eN.useUsernameHook)({
      user: r,
      channelId: c,
      guildId: i.guild_id,
      messageId: t.id
    }), I = l.useCallback(() => {
      null != f && null != _ && (0, d.watchStreamAndTransitionToStream)({
        streamType: eS.StreamTypes.GUILD,
        ownerId: o,
        channelId: f.id,
        guildId: _
      })
    }, [o, f, _]);
    return null != u && null != f && null != u.guild_id ? (0, s.jsx)(X.default, {
      message: t,
      compact: n,
      channel: f,
      playingActivity: E,
      onJoinStream: I,
      usernameHook: T
    }) : null
  },
  [ep.MessageTypes.GUILD_DISCOVERY_DISQUALIFIED]: function(e) {
    let {
      message: t,
      compact: n
    } = e, l = t.getChannelId(), i = (0, a.useStateFromStores)([y.default], () => y.default.getChannel(l), [l]), r = null != i ? i.getGuildId() : null;
    return (0, s.jsx)(q.UIKitGuildDiscoveryDisqualified, {
      message: t,
      compact: n,
      onClick: () => {
        null != r && C.default.open(r, ep.GuildSettingsSections.DISCOVERY)
      }
    })
  },
  [ep.MessageTypes.GUILD_DISCOVERY_REQUALIFIED]: q.UIKitGuildDiscoveryRequalified,
  [ep.MessageTypes.GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING]: q.UIKitGuildDiscoveryGracePeriodInitialWarning,
  [ep.MessageTypes.GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING]: q.UIKitGuildDiscoveryGracePeriodFinalWarning,
  [ep.MessageTypes.THREAD_CREATED]: function(e) {
    let {
      message: t,
      channel: a,
      compact: o
    } = e, u = (0, eN.useUsernameHook)({
      user: t.author,
      channelId: t.channel_id,
      guildId: a.guild_id,
      messageId: t.id
    }), d = l.useCallback(async e => {
      var n;
      let s = null === (n = t.messageReference) || void 0 === n ? void 0 : n.channel_id;
      if (null != s) {
        await v.default.loadThread(s);
        let t = y.default.getChannel(s);
        null != t && (0, L.openThreadSidebarForViewing)(t, e.shiftKey)
      }
    }, [t]), c = l.useCallback(() => {
      (0, i.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("91315"), n.e("36970")]).then(n.bind(n, "223901"));
        return t => (0, s.jsx)(e, {
          channel: a,
          ...t
        })
      })
    }, [a]), E = l.useCallback(e => {
      var l;
      let a = y.default.getChannel(null === (l = t.messageReference) || void 0 === l ? void 0 : l.channel_id);
      null != a && (0, r.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("39285"), n.e("53466"), n.e("40157")]).then(n.bind(n, "422200"));
        return t => (0, s.jsx)(e, {
          ...t,
          channel: a
        })
      })
    }, [t]);
    return (0, s.jsx)(er.default, {
      message: t,
      compact: o,
      usernameHook: u,
      onClickThread: d,
      onClickViewThreads: c,
      onContextMenuThread: E
    })
  },
  [ep.MessageTypes.THREAD_STARTER_MESSAGE]: ed.default,
  [ep.MessageTypes.GUILD_INVITE_REMINDER]: function(e) {
    let {
      message: t,
      channel: n,
      compact: l
    } = e, i = (0, a.useStateFromStores)([B.default], () => B.default.getCurrentUser()), r = (0, a.useStateFromStores)([U.default], () => {
      var e, t;
      return null !== (t = null === (e = U.default.getGuild(n.getGuildId())) || void 0 === e ? void 0 : e.isOwner(i)) && void 0 !== t && t
    });
    return (0, s.jsx)($.default, {
      message: t,
      compact: l,
      isOwner: r,
      channel: n
    })
  },
  [ep.MessageTypes.AUTO_MODERATION_ACTION]: function(e) {
    let {
      message: t,
      compact: n,
      channel: l
    } = e;
    return (0, T.isAutomodMessageRecord)(t) ? (0, s.jsx)(H.default, {
      message: t,
      compact: n,
      channel: l
    }) : null
  },
  [ep.MessageTypes.GUILD_INCIDENT_ALERT_MODE_ENABLED]: eg,
  [ep.MessageTypes.GUILD_INCIDENT_ALERT_MODE_DISABLED]: eg,
  [ep.MessageTypes.GUILD_INCIDENT_REPORT_RAID]: function(e) {
    let {
      message: t,
      compact: n,
      channel: l
    } = e, a = (0, eN.useUsernameHook)({
      user: t.author,
      channelId: l.id,
      guildId: l.guild_id,
      messageId: t.id
    });
    return (0, s.jsx)(Z.default, {
      message: t,
      compact: n,
      channel: l,
      usernameHook: a
    })
  },
  [ep.MessageTypes.GUILD_INCIDENT_REPORT_FALSE_ALARM]: function(e) {
    let {
      message: t,
      compact: n,
      channel: l
    } = e, a = (0, eN.useUsernameHook)({
      user: t.author,
      channelId: l.id,
      guildId: l.guild_id,
      messageId: t.id
    });
    return (0, s.jsx)(J.default, {
      message: t,
      compact: n,
      channel: l,
      usernameHook: a
    })
  },
  [ep.MessageTypes.ROLE_SUBSCRIPTION_PURCHASE]: N.default,
  [ep.MessageTypes.PURCHASE_NOTIFICATION]: function(e) {
    var t;
    let {
      message: n,
      channel: l,
      compact: a
    } = e;
    return (null === (t = n.purchaseNotification) || void 0 === t ? void 0 : t.type) === c.PurchaseNotificationType.GUILD_PRODUCT ? (0, s.jsx)(m.default, {
      message: n,
      channel: l,
      compact: a
    }) : null
  },
  [ep.MessageTypes.INTERACTION_PREMIUM_UPSELL]: void 0,
  [ep.MessageTypes.STAGE_START]: function(e) {
    let {
      message: t,
      channel: n,
      compact: l
    } = e, i = (0, eN.useUsernameHook)({
      user: t.author,
      channelId: n.id,
      guildId: n.guild_id,
      messageId: t.id
    }), r = (0, a.useStateFromStores)([p.default], () => p.default.getActiveEventByChannel(n.id), [n.id]);
    return (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(ea.default, {
        message: t,
        compact: l,
        usernameHook: i
      }), null != r && r.name === t.content ? (0, s.jsx)(S.default, {
        code: "".concat(n.guild_id, "-").concat(r.id)
      }) : null]
    })
  },
  [ep.MessageTypes.STAGE_END]: function(e) {
    let {
      message: t,
      channel: n,
      compact: l
    } = e, a = (0, eN.useUsernameHook)({
      user: t.author,
      channelId: n.id,
      guildId: n.guild_id,
      messageId: t.id
    });
    return (0, s.jsx)(en.default, {
      message: t,
      compact: l,
      usernameHook: a
    })
  },
  [ep.MessageTypes.STAGE_SPEAKER]: function(e) {
    let {
      message: t,
      channel: n,
      compact: l
    } = e, a = (0, eN.useUsernameHook)({
      user: t.author,
      channelId: n.id,
      guildId: n.guild_id,
      messageId: t.id
    });
    return (0, s.jsx)(el.default, {
      message: t,
      compact: l,
      usernameHook: a
    })
  },
  [ep.MessageTypes.STAGE_RAISE_HAND]: function(e) {
    var t, n;
    let {
      message: l,
      channel: r,
      compact: u
    } = e, d = (0, eN.useUsernameHook)({
      user: l.author,
      channelId: r.id,
      guildId: r.guild_id,
      messageId: l.id
    }), c = (0, a.useStateFromStores)([j.default], () => j.default.can(ep.Permissions.MUTE_MEMBERS, r)), E = (0, a.useStateFromStores)([O.default], () => O.default.getParticipant(r.id, l.author.id)), f = new Date(eI.default.extractTimestamp(l.id)).toISOString() === new Date(null !== (n = null == E ? void 0 : null === (t = E.voiceState) || void 0 === t ? void 0 : t.requestToSpeakTimestamp) && void 0 !== n ? n : 0).toISOString(), _ = c && (null == E ? void 0 : E.rtsState) === R.RequestToSpeakStates.REQUESTED_TO_SPEAK && f;
    return (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(es.default, {
        message: l,
        compact: u,
        usernameHook: d
      }), _ ? (0, s.jsxs)(i.Button, {
        wrapperClassName: eA.inviteToSpeakButtonWrapper,
        innerClassName: eA.inviteToSpeakButtonInner,
        look: i.Button.Looks.FILLED,
        color: i.Button.Colors.PRIMARY,
        onClick: () => {
          (0, M.setUserSuppress)(r, l.author.id, !1), o.default.deleteMessage(r.id, l.id, !0)
        },
        children: [(0, s.jsx)(F.default, {
          height: 20,
          width: 20
        }), eC.default.Messages.REQUEST_TO_SPEAK_ACCEPT]
      }) : null]
    })
  },
  [ep.MessageTypes.STAGE_TOPIC]: function(e) {
    let {
      message: t,
      channel: n,
      compact: l
    } = e, a = (0, eN.useUsernameHook)({
      user: t.author,
      channelId: n.id,
      guildId: n.guild_id,
      messageId: t.id
    });
    return (0, s.jsx)(ei.default, {
      message: t,
      compact: l,
      usernameHook: a
    })
  },
  [ep.MessageTypes.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION]: A.default,
  [ep.MessageTypes.PRIVATE_CHANNEL_INTEGRATION_ADDED]: h.PrivateChannelIntegrationAddedSystemMessage,
  [ep.MessageTypes.PRIVATE_CHANNEL_INTEGRATION_REMOVED]: h.PrivateChannelIntegrationRemovedSystemMessage,
  [ep.MessageTypes.PREMIUM_REFERRAL]: void 0,
  [ep.MessageTypes.GUILD_DEADCHAT_REVIVE_PROMPT]: function(e) {
    let {
      message: t,
      channel: n,
      compact: l
    } = e;
    return (0, s.jsx)(f.default, {
      message: t,
      channel: n,
      compact: l
    })
  },
  [ep.MessageTypes.CUSTOM_GIFT]: void 0,
  [ep.MessageTypes.GUILD_GAMING_STATS_PROMPT]: function(e) {
    let {
      message: t,
      channel: n,
      compact: l
    } = e;
    return (0, s.jsx)(E.default, {
      message: t,
      channel: n,
      compact: l
    })
  },
  [ep.MessageTypes.VOICE_HANGOUT_INVITE]: void 0
});
t.default = l.memo(function(e) {
  let {
    message: t,
    channel: n,
    compact: l
  } = e, {
    type: a
  } = t, i = eM[a];
  if (null == i) {
    var r;
    return r = Error("unknown message type ".concat(t.type)), eT.default.captureException(r), new _.default("SystemMessage").error("", r), null
  }
  return (0, s.jsx)(w.default, {
    message: t,
    content: (0, em.default)(t).content,
    children: (0, s.jsx)(i, {
      message: t,
      channel: n,
      compact: l
    })
  })
})