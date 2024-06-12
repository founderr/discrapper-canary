"use strict";
n.r(t), n.d(t, {
  default: function() {
    return W
  }
}), n("653041");
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("392711"),
  o = n.n(r),
  u = n("848246"),
  d = n("442837"),
  c = n("481060"),
  f = n("320007"),
  h = n("236091"),
  m = n("569545"),
  p = n("517525"),
  E = n("6242"),
  g = n("757692"),
  C = n("386542"),
  S = n("141321"),
  _ = n("44136"),
  T = n("651183"),
  I = n("618158"),
  A = n("390322"),
  v = n("616286"),
  x = n("961048"),
  N = n("179424"),
  M = n("786915"),
  y = n("975146"),
  R = n("991617"),
  L = n("606304"),
  O = n("594174"),
  j = n("502568"),
  P = n("805009"),
  D = n("368666"),
  b = n("358221"),
  U = n("887012"),
  F = n("444253"),
  w = n("355827"),
  k = n("354459"),
  H = n("981631"),
  G = n("689938"),
  B = n("122993");

function V(e) {
  let {
    channelId: t,
    guildId: n
  } = e, l = Date.now(), s = (0, d.useStateFromStores)([L.default, b.default], () => o()(L.default.getSpeakers()).map(e => b.default.getParticipant(t, e)).filter(e => null != e && e.type === k.ParticipantTypes.USER && e.speaking && !(0, _.default)(e)).sortBy(e => -L.default.getSpeakingDuration(e.user.id, l)).slice(0, 3).value());
  return 0 === s.length ? null : (0, a.jsx)(a.Fragment, {
    children: s.map((e, t) => (0, a.jsx)(c.Tooltip, {
      position: "bottom",
      color: c.Tooltip.Colors.GREY,
      text: G.default.Messages.CHANNEL_CALL_CURRENT_SPEAKER.format({
        username: e.user.username
      }),
      children: l => (0, a.jsx)(P.default, {
        ...l,
        className: i()(B.speaker, {
          [B.last]: t === s.length - 1
        }),
        user: e.user,
        speaking: !0,
        collapsed: !0,
        guildId: n
      })
    }, e.id))
  })
}

function W(e) {
  let {
    inPopout: t,
    channel: n,
    appContext: s,
    inCall: i,
    isChatOpen: r,
    exitFullScreen: o
  } = e, _ = n.id, {
    voiceParticipantsHidden: L,
    selectedParticipant: P,
    userParticipantCount: G
  } = (0, d.useStateFromStoresObject)([b.default], () => ({
    selectedParticipant: b.default.getSelectedParticipant(_),
    voiceParticipantsHidden: b.default.getVoiceParticipantsHidden(_),
    userParticipantCount: b.default.getUserParticipantCount(_)
  }), [_]), W = (0, d.useStateFromStores)([O.default], () => O.default.getCurrentUser()), Y = (0, U.default)(n), {
    available: z,
    activated: K,
    hqStreamingState: Z
  } = (0, C.usePerksDemo)(u.EntitlementFeatureNames.STREAM_HIGH_QUALITY), X = z && K && Z.hqStreamingIsEnabled, q = (0, g.canStreamParticipantSetting)(P, W), J = (0, E.useHDStreamingViewerExperiment)("CallHeader", !0, W, q), {
    preventIdle: Q,
    allowIdle: $
  } = (0, I.usePreventIdle)("popup"), ee = [];
  if (Y) {
    let e = (null == P ? void 0 : P.type) === k.ParticipantTypes.STREAM ? (0, m.decodeStreamKey)(P.id) : void 0,
      t = (null == P ? void 0 : P.type) === k.ParticipantTypes.ACTIVITY ? P.id : void 0;
    ee.push((0, a.jsx)(M.default, {
      className: B.button,
      channel: n,
      applicationId: t,
      stream: e,
      exitFullScreen: o,
      analyticsLocation: n.type === H.ChannelTypes.GUILD_VOICE ? H.AnalyticsPages.GUILD_CHANNEL : H.AnalyticsPages.DM_CHANNEL
    }, "invite-button"))
  }
  return L && ee.push((0, a.jsx)(V, {
    channelId: _,
    guildId: n.guild_id
  }, "current-speaker")), ee.push((0, a.jsx)(h.default, {
    className: B.button,
    channelId: _
  }, "clips-enabled-indicator")), (null == P ? void 0 : P.type) === k.ParticipantTypes.STREAM && (ee.push((0, a.jsx)(T.default, {
    className: B.button,
    participant: P
  }, "warning")), ee.push((0, a.jsx)(p.default, {
    size: D.default.Sizes.LARGE,
    className: B.button,
    participant: P,
    showQuality: !0,
    premiumIndicator: X || J.enabled
  }, "live-indicator"))), L && ee.push((0, a.jsx)(c.Popout, {
    position: "bottom",
    renderPopout: () => (0, a.jsx)(A.default, {
      children: (0, a.jsx)(w.default, {
        channel: n
      })
    }),
    children: (e, t) => {
      let {
        isShown: n
      } = t;
      return (0, l.createElement)(y.default, {
        ...e,
        isActive: n,
        count: G,
        key: "call-members",
        className: B.button
      })
    }
  }, "call-members-popout")), i && ee.push(null != P ? (0, a.jsx)(N.default, {
    className: B.button,
    channelId: _
  }, "deselect-participant") : (0, a.jsx)(R.default, {
    className: B.button,
    channelId: _,
    isHorizontal: !0
  }, "select-participant")), !t && ee.push((0, a.jsx)(f.default, {
    className: B.button
  }, "clips")), ee.push((0, a.jsx)(S.default, {
    onOpen: Q,
    onClose: $,
    className: B.button
  }, "recents")), ee.push((0, a.jsx)(c.Popout, {
    position: "bottom",
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, a.jsx)(A.default, {
        children: (0, a.jsx)(F.default, {
          channelId: _,
          onClose: t,
          appContext: s,
          exitFullScreen: o
        })
      })
    },
    children: (e, t) => {
      let {
        isShown: n
      } = t;
      return (0, l.createElement)(x.default, {
        ...e,
        key: "more-options",
        isActive: n,
        className: B.lastButton
      })
    }
  }, "more-options-popout")), !r && (ee.push((0, a.jsx)(j.default.Divider, {
    className: B.divider
  }, "divider")), ee.push((0, a.jsx)(v.ChatButton, {
    channelId: n.id,
    className: B.chatButtonSpacer,
    disabled: !0
  }, "chat-spacer"))), (0, a.jsx)(a.Fragment, {
    children: ee
  })
}