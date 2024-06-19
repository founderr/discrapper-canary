n.d(t, {
  Z: function() {
    return F
  }
}), n(653041);
var l = n(735250),
  i = n(470079),
  s = n(120356),
  a = n.n(s),
  r = n(392711),
  o = n.n(r),
  c = n(848246),
  u = n(442837),
  d = n(481060),
  h = n(320007),
  m = n(236091),
  p = n(569545),
  E = n(517525),
  g = n(6242),
  f = n(757692),
  C = n(386542),
  _ = n(141321),
  I = n(44136),
  x = n(651183),
  T = n(618158),
  N = n(390322),
  Z = n(616286),
  S = n(961048),
  v = n(179424),
  A = n(786915),
  M = n(975146),
  R = n(991617),
  j = n(606304),
  L = n(594174),
  O = n(502568),
  P = n(805009),
  y = n(368666),
  b = n(358221),
  D = n(887012),
  U = n(444253),
  k = n(355827),
  w = n(354459),
  H = n(981631),
  B = n(689938),
  G = n(605130);

function V(e) {
  let {
    channelId: t,
    guildId: n
  } = e, i = Date.now(), s = (0, u.e7)([j.Z, b.Z], () => o()(j.Z.getSpeakers()).map(e => b.Z.getParticipant(t, e)).filter(e => null != e && e.type === w.fO.USER && e.speaking && !(0, I.ZP)(e)).sortBy(e => -j.Z.getSpeakingDuration(e.user.id, i)).slice(0, 3).value());
  return 0 === s.length ? null : (0, l.jsx)(l.Fragment, {
    children: s.map((e, t) => (0, l.jsx)(d.Tooltip, {
      position: "bottom",
      color: d.Tooltip.Colors.GREY,
      text: B.Z.Messages.CHANNEL_CALL_CURRENT_SPEAKER.format({
        username: e.user.username
      }),
      children: i => (0, l.jsx)(P.Z, {
        ...i,
        className: a()(G.speaker, {
          [G.last]: t === s.length - 1
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
    appContext: s,
    inCall: a,
    isChatOpen: r,
    exitFullScreen: o
  } = e, I = n.id, {
    voiceParticipantsHidden: j,
    selectedParticipant: P,
    userParticipantCount: B
  } = (0, u.cj)([b.Z], () => ({
    selectedParticipant: b.Z.getSelectedParticipant(I),
    voiceParticipantsHidden: b.Z.getVoiceParticipantsHidden(I),
    userParticipantCount: b.Z.getUserParticipantCount(I)
  }), [I]), F = (0, u.e7)([L.default], () => L.default.getCurrentUser()), z = (0, D.Z)(n), {
    available: W,
    activated: Y,
    hqStreamingState: K
  } = (0, C.k)(c.q.STREAM_HIGH_QUALITY), q = W && Y && K.hqStreamingIsEnabled, X = (0, f.o)(P, F), Q = (0, g.lL)("CallHeader", !0, F, X), {
    preventIdle: J,
    allowIdle: $
  } = (0, T.Y)("popup"), ee = [];
  if (z) {
    let e = (null == P ? void 0 : P.type) === w.fO.STREAM ? (0, p.my)(P.id) : void 0,
      t = (null == P ? void 0 : P.type) === w.fO.ACTIVITY ? P.id : void 0;
    ee.push((0, l.jsx)(A.Z, {
      className: G.button,
      channel: n,
      applicationId: t,
      stream: e,
      exitFullScreen: o,
      analyticsLocation: n.type === H.d4z.GUILD_VOICE ? H.ZY5.GUILD_CHANNEL : H.ZY5.DM_CHANNEL
    }, "invite-button"))
  }
  return j && ee.push((0, l.jsx)(V, {
    channelId: I,
    guildId: n.guild_id
  }, "current-speaker")), ee.push((0, l.jsx)(m.Z, {
    className: G.button,
    channelId: I
  }, "clips-enabled-indicator")), (null == P ? void 0 : P.type) === w.fO.STREAM && (ee.push((0, l.jsx)(x.Z, {
    className: G.button,
    participant: P
  }, "warning")), ee.push((0, l.jsx)(E.Z, {
    size: y.ZP.Sizes.LARGE,
    className: G.button,
    participant: P,
    showQuality: !0,
    premiumIndicator: q || Q.enabled
  }, "live-indicator"))), j && ee.push((0, l.jsx)(d.Popout, {
    position: "bottom",
    renderPopout: () => (0, l.jsx)(N.Z, {
      children: (0, l.jsx)(k.Z, {
        channel: n
      })
    }),
    children: (e, t) => {
      let {
        isShown: n
      } = t;
      return (0, i.createElement)(M.Z, {
        ...e,
        isActive: n,
        count: B,
        key: "call-members",
        className: G.button
      })
    }
  }, "call-members-popout")), a && ee.push(null != P ? (0, l.jsx)(v.Z, {
    className: G.button,
    channelId: I
  }, "deselect-participant") : (0, l.jsx)(R.Z, {
    className: G.button,
    channelId: I,
    isHorizontal: !0
  }, "select-participant")), !t && ee.push((0, l.jsx)(h.Z, {
    className: G.button
  }, "clips")), ee.push((0, l.jsx)(_.Z, {
    onOpen: J,
    onClose: $,
    className: G.button
  }, "recents")), ee.push((0, l.jsx)(d.Popout, {
    position: "bottom",
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, l.jsx)(N.Z, {
        children: (0, l.jsx)(U.Z, {
          channelId: I,
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
      return (0, i.createElement)(S.Z, {
        ...e,
        key: "more-options",
        isActive: n,
        className: G.lastButton
      })
    }
  }, "more-options-popout")), !r && (ee.push((0, l.jsx)(O.ZP.Divider, {
    className: G.divider
  }, "divider")), ee.push((0, l.jsx)(Z.T, {
    channelId: n.id,
    className: G.chatButtonSpacer,
    disabled: !0
  }, "chat-spacer"))), (0, l.jsx)(l.Fragment, {
    children: ee
  })
}