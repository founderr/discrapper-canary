n.d(t, {
  Z: function() {
    return F
  }
}), n(653041);
var i = n(735250),
  a = n(470079),
  l = n(120356),
  s = n.n(l),
  r = n(392711),
  o = n.n(r),
  c = n(848246),
  u = n(442837),
  d = n(481060),
  h = n(320007),
  p = n(236091),
  m = n(569545),
  _ = n(517525),
  f = n(6242),
  E = n(757692),
  g = n(386542),
  C = n(141321),
  I = n(44136),
  x = n(651183),
  T = n(618158),
  N = n(390322),
  v = n(616286),
  S = n(961048),
  Z = n(179424),
  A = n(786915),
  M = n(975146),
  b = n(991617),
  R = n(606304),
  j = n(594174),
  L = n(502568),
  P = n(805009),
  O = n(368666),
  y = n(358221),
  D = n(887012),
  k = n(444253),
  U = n(355827),
  w = n(354459),
  B = n(981631),
  H = n(689938),
  G = n(605130);

function V(e) {
  let {
    channelId: t,
    guildId: n
  } = e, a = Date.now(), l = (0, u.e7)([R.Z, y.Z], () => o()(R.Z.getSpeakers()).map(e => y.Z.getParticipant(t, e)).filter(e => null != e && e.type === w.fO.USER && e.speaking && !(0, I.ZP)(e)).sortBy(e => -R.Z.getSpeakingDuration(e.user.id, a)).slice(0, 3).value());
  return 0 === l.length ? null : (0, i.jsx)(i.Fragment, {
    children: l.map((e, t) => (0, i.jsx)(d.Tooltip, {
      position: "bottom",
      color: d.Tooltip.Colors.GREY,
      text: H.Z.Messages.CHANNEL_CALL_CURRENT_SPEAKER.format({
        username: e.user.username
      }),
      children: a => (0, i.jsx)(P.Z, {
        ...a,
        className: s()(G.speaker, {
          [G.last]: t === l.length - 1
        }),
        user: e.user,
        speaking: !0,
        collapsed: !0,
        guildId: n
      })
    }, e.id))
  })
}

function F(e) {
  let {
    inPopout: t,
    channel: n,
    appContext: l,
    inCall: s,
    isChatOpen: r,
    exitFullScreen: o
  } = e, I = n.id, {
    voiceParticipantsHidden: R,
    selectedParticipant: P,
    userParticipantCount: H
  } = (0, u.cj)([y.Z], () => ({
    selectedParticipant: y.Z.getSelectedParticipant(I),
    voiceParticipantsHidden: y.Z.getVoiceParticipantsHidden(I),
    userParticipantCount: y.Z.getUserParticipantCount(I)
  }), [I]), F = (0, u.e7)([j.default], () => j.default.getCurrentUser()), W = (0, D.Z)(n), {
    available: z,
    activated: Y,
    hqStreamingState: K
  } = (0, g.k)(c.q.STREAM_HIGH_QUALITY), q = z && Y && K.hqStreamingIsEnabled, X = (0, E.o)(P, F), Q = (0, f.lL)("CallHeader", !0, F, X), {
    preventIdle: J,
    allowIdle: $
  } = (0, T.Y)("popup"), ee = [];
  if (W) {
    let e = (null == P ? void 0 : P.type) === w.fO.STREAM ? (0, m.my)(P.id) : void 0,
      t = (null == P ? void 0 : P.type) === w.fO.ACTIVITY ? P.id : void 0;
    ee.push((0, i.jsx)(A.Z, {
      className: G.button,
      channel: n,
      applicationId: t,
      stream: e,
      exitFullScreen: o,
      analyticsLocation: n.type === B.d4z.GUILD_VOICE ? B.ZY5.GUILD_CHANNEL : B.ZY5.DM_CHANNEL
    }, "invite-button"))
  }
  return R && ee.push((0, i.jsx)(V, {
    channelId: I,
    guildId: n.guild_id
  }, "current-speaker")), ee.push((0, i.jsx)(p.Z, {
    className: G.button,
    channelId: I
  }, "clips-enabled-indicator")), (null == P ? void 0 : P.type) === w.fO.STREAM && (ee.push((0, i.jsx)(x.Z, {
    className: G.button,
    participant: P
  }, "warning")), ee.push((0, i.jsx)(_.Z, {
    size: O.ZP.Sizes.LARGE,
    className: G.button,
    participant: P,
    showQuality: !0,
    premiumIndicator: q || Q.enabled
  }, "live-indicator"))), R && ee.push((0, i.jsx)(d.Popout, {
    position: "bottom",
    renderPopout: () => (0, i.jsx)(N.Z, {
      children: (0, i.jsx)(U.Z, {
        channel: n
      })
    }),
    children: (e, t) => {
      let {
        isShown: n
      } = t;
      return (0, a.createElement)(M.Z, {
        ...e,
        isActive: n,
        count: H,
        key: "call-members",
        className: G.button
      })
    }
  }, "call-members-popout")), s && ee.push(null != P ? (0, i.jsx)(Z.Z, {
    className: G.button,
    channelId: I
  }, "deselect-participant") : (0, i.jsx)(b.Z, {
    className: G.button,
    channelId: I,
    isHorizontal: !0
  }, "select-participant")), !t && ee.push((0, i.jsx)(h.Z, {
    className: G.button
  }, "clips")), ee.push((0, i.jsx)(C.Z, {
    onOpen: J,
    onClose: $,
    className: G.button
  }, "recents")), ee.push((0, i.jsx)(d.Popout, {
    position: "bottom",
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, i.jsx)(N.Z, {
        children: (0, i.jsx)(k.Z, {
          channelId: I,
          onClose: t,
          appContext: l,
          exitFullScreen: o
        })
      })
    },
    children: (e, t) => {
      let {
        isShown: n
      } = t;
      return (0, a.createElement)(S.Z, {
        ...e,
        key: "more-options",
        isActive: n,
        className: G.lastButton
      })
    }
  }, "more-options-popout")), !r && (ee.push((0, i.jsx)(L.ZP.Divider, {
    className: G.divider
  }, "divider")), ee.push((0, i.jsx)(v.T, {
    channelId: n.id,
    className: G.chatButtonSpacer,
    disabled: !0
  }, "chat-spacer"))), (0, i.jsx)(i.Fragment, {
    children: ee
  })
}