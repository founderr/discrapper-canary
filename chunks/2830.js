"use strict";
n.r(t), n.d(t, {
  default: function() {
    return B
  }
}), n("424973");
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("917351"),
  u = n.n(r),
  o = n("446674"),
  d = n("77078"),
  c = n("777274"),
  f = n("76813"),
  h = n("992207"),
  m = n("374014"),
  p = n("336804"),
  E = n("311197"),
  S = n("830251"),
  g = n("170643"),
  C = n("550410"),
  _ = n("124824"),
  I = n("640553"),
  T = n("104815"),
  v = n("925674"),
  x = n("331759"),
  N = n("63260"),
  A = n("422736"),
  M = n("280168"),
  R = n("664336"),
  j = n("68148"),
  L = n("980423"),
  y = n("191145"),
  O = n("598785"),
  P = n("226735"),
  b = n("340513"),
  D = n("99795"),
  U = n("49111"),
  w = n("782340"),
  F = n("963405");

function k(e) {
  let {
    channelId: t,
    guildId: n
  } = e, a = Date.now(), s = (0, o.useStateFromStores)([M.default, y.default], () => u(M.default.getSpeakers()).map(e => y.default.getParticipant(t, e)).filter(e => null != e && e.type === D.ParticipantTypes.USER && e.speaking && !(0, S.default)(e)).sortBy(e => -M.default.getSpeakingDuration(e.user.id, a)).slice(0, 3).value());
  return 0 === s.length ? null : (0, l.jsx)(l.Fragment, {
    children: s.map((e, t) => (0, l.jsx)(d.Tooltip, {
      position: "bottom",
      color: d.Tooltip.Colors.GREY,
      text: w.default.Messages.CHANNEL_CALL_CURRENT_SPEAKER.format({
        username: e.user.username
      }),
      children: a => (0, l.jsx)(j.default, {
        ...a,
        className: i(F.speaker, {
          [F.last]: t === s.length - 1
        }),
        user: e.user,
        speaking: !0,
        collapsed: !0,
        guildId: n
      })
    }, e.id))
  })
}

function B(e) {
  let {
    inPopout: t,
    channel: n,
    appContext: s,
    inCall: i,
    isChatOpen: r,
    exitFullScreen: u
  } = e, S = n.id, {
    voiceParticipantsHidden: M,
    selectedParticipant: j,
    userParticipantCount: w
  } = (0, o.useStateFromStoresObject)([y.default], () => ({
    selectedParticipant: y.default.getSelectedParticipant(S),
    voiceParticipantsHidden: y.default.getVoiceParticipantsHidden(S),
    userParticipantCount: y.default.getUserParticipantCount(S)
  }), [S]), B = (0, O.default)(n), {
    preventIdle: V,
    allowIdle: G
  } = (0, C.usePreventIdle)("popup"), H = [];
  if (B) {
    let e = (null == j ? void 0 : j.type) === D.ParticipantTypes.STREAM ? (0, m.decodeStreamKey)(j.id) : void 0,
      t = (null == j ? void 0 : j.type) === D.ParticipantTypes.ACTIVITY ? j.id : void 0;
    H.push((0, l.jsx)(x.default, {
      className: F.button,
      channel: n,
      applicationId: t,
      stream: e,
      exitFullScreen: u,
      analyticsLocation: n.type === U.ChannelTypes.GUILD_VOICE ? U.AnalyticsPages.GUILD_CHANNEL : U.AnalyticsPages.DM_CHANNEL
    }, "invite-button"))
  }
  return M && H.push((0, l.jsx)(k, {
    channelId: S,
    guildId: n.guild_id
  }, "current-speaker")), H.push((0, l.jsx)(h.default, {
    className: F.button,
    channelId: S
  }, "clips-enabled-indicator")), (null == j ? void 0 : j.type) === D.ParticipantTypes.STREAM && (H.push((0, l.jsx)(g.default, {
    className: F.button,
    participant: j
  }, "warning")), H.push((0, l.jsx)(p.default, {
    size: L.default.Sizes.LARGE,
    className: F.button,
    participant: j,
    showQuality: !0
  }, "live-indicator"))), M && H.push((0, l.jsx)(d.Popout, {
    position: "bottom",
    renderPopout: () => (0, l.jsx)(_.default, {
      children: (0, l.jsx)(b.default, {
        channel: n
      })
    }),
    children: (e, t) => {
      let {
        isShown: n
      } = t;
      return (0, a.createElement)(N.default, {
        ...e,
        isActive: n,
        count: w,
        key: "call-members",
        className: F.button
      })
    }
  }, "call-members-popout")), i && H.push(null != j ? (0, l.jsx)(v.default, {
    className: F.button,
    channelId: S
  }, "deselect-participant") : (0, l.jsx)(A.default, {
    className: F.button,
    channelId: S,
    isHorizontal: !0
  }, "select-participant")), !t && H.push((0, l.jsx)(f.default, {
    className: F.button
  }, "clips")), H.push((0, l.jsx)(E.default, {
    onOpen: V,
    onClose: G,
    className: F.button
  }, "recents")), H.push((0, l.jsx)(c.CallscopeChannelCallIssueMarker, {
    className: F.button
  }, "callscope-marker")), H.push((0, l.jsx)(d.Popout, {
    position: "bottom",
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, l.jsx)(_.default, {
        children: (0, l.jsx)(P.default, {
          channelId: S,
          onClose: t,
          appContext: s,
          exitFullScreen: u
        })
      })
    },
    children: (e, t) => {
      let {
        isShown: n
      } = t;
      return (0, a.createElement)(T.default, {
        ...e,
        key: "more-options",
        isActive: n,
        className: F.lastButton
      })
    }
  }, "more-options-popout")), !r && (H.push((0, l.jsx)(R.default.Divider, {
    className: F.divider
  }, "divider")), H.push((0, l.jsx)(I.ChatButton, {
    channelId: n.id,
    className: F.chatButtonSpacer,
    disabled: !0
  }, "chat-spacer"))), (0, l.jsx)(l.Fragment, {
    children: H
  })
}