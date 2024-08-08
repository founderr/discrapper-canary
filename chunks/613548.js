n.d(t, {
  Z: function() {
return F;
  }
}), n(653041);
var i = n(735250),
  a = n(470079),
  s = n(120356),
  l = n.n(s),
  r = n(392711),
  o = n.n(r),
  c = n(848246),
  u = n(442837),
  d = n(481060),
  h = n(194082),
  p = n(320007),
  m = n(236091),
  _ = n(569545),
  f = n(517525),
  E = n(665149),
  C = n(6242),
  g = n(757692),
  I = n(141321),
  x = n(44136),
  T = n(651183),
  N = n(618158),
  v = n(390322),
  S = n(616286),
  Z = n(961048),
  A = n(179424),
  M = n(786915),
  b = n(975146),
  R = n(991617),
  j = n(597998),
  L = n(606304),
  P = n(594174),
  O = n(74538),
  y = n(358221),
  D = n(887012),
  k = n(444253),
  U = n(355827),
  w = n(354459),
  B = n(981631),
  H = n(689938),
  G = n(867358);

function V(e) {
  let {
channelId: t,
guildId: n
  } = e, a = Date.now(), s = (0, u.e7)([
L.Z,
y.Z
  ], () => o()(L.Z.getSpeakers()).map(e => y.Z.getParticipant(t, e)).filter(e => null != e && e.type === w.fO.USER && e.speaking && !(0, x.ZP)(e)).sortBy(e => -L.Z.getSpeakingDuration(e.user.id, a)).slice(0, 3).value());
  return 0 === s.length ? null : (0, i.jsx)(i.Fragment, {
children: s.map((e, t) => (0, i.jsx)(d.Tooltip, {
  position: 'bottom',
  color: d.Tooltip.Colors.GREY,
  text: H.Z.Messages.CHANNEL_CALL_CURRENT_SPEAKER.format({
    username: e.user.username
  }),
  children: a => (0, i.jsx)(j.Z, {
    ...a,
    className: l()(G.speaker, {
      [G.last]: t === s.length - 1
    }),
    user: e.user,
    speaking: !0,
    collapsed: !0,
    guildId: n
  })
}, e.id))
  });
}

function F(e) {
  let {
inPopout: t,
channel: n,
appContext: s,
inCall: l,
isChatOpen: r,
exitFullScreen: o
  } = e, x = n.id, {
voiceParticipantsHidden: j,
selectedParticipant: L,
userParticipantCount: H
  } = (0, u.cj)([y.Z], () => ({
selectedParticipant: y.Z.getSelectedParticipant(x),
voiceParticipantsHidden: y.Z.getVoiceParticipantsHidden(x),
userParticipantCount: y.Z.getUserParticipantCount(x)
  }), [x]), F = (0, u.e7)([P.default], () => P.default.getCurrentUser()), W = (0, D.Z)(n), z = (0, O.So)(c.q.STREAM_HIGH_QUALITY), Y = (0, g.o)(L, F), K = (0, C.lL)('CallHeader', !0, F, Y), {
preventIdle: q,
allowIdle: X
  } = (0, N.Y)('popup'), Q = [];
  if (W) {
let e = (null == L ? void 0 : L.type) === w.fO.STREAM ? (0, _.my)(L.id) : void 0,
  t = (null == L ? void 0 : L.type) === w.fO.ACTIVITY ? L.id : void 0;
Q.push((0, i.jsx)(M.Z, {
  className: G.button,
  channel: n,
  applicationId: t,
  stream: e,
  exitFullScreen: o,
  analyticsLocation: n.type === B.d4z.GUILD_VOICE ? B.ZY5.GUILD_CHANNEL : B.ZY5.DM_CHANNEL
}, 'invite-button'));
  }
  return j && Q.push((0, i.jsx)(V, {
channelId: x,
guildId: n.guild_id
  }, 'current-speaker')), Q.push((0, i.jsx)(m.Z, {
className: G.button,
channelId: x
  }, 'clips-enabled-indicator')), (null == L ? void 0 : L.type) === w.fO.STREAM && (Q.push((0, i.jsx)(T.Z, {
className: G.button,
participant: L
  }, 'warning')), Q.push((0, i.jsx)(f.Z, {
size: h.ZP.Sizes.LARGE,
className: G.button,
participant: L,
showQuality: !0,
premiumIndicator: z || K.enabled
  }, 'live-indicator'))), j && Q.push((0, i.jsx)(d.Popout, {
position: 'bottom',
renderPopout: () => (0, i.jsx)(v.Z, {
  children: (0, i.jsx)(U.Z, {
    channel: n
  })
}),
children: (e, t) => {
  let {
    isShown: n
  } = t;
  return (0, a.createElement)(b.Z, {
    ...e,
    isActive: n,
    count: H,
    key: 'call-members',
    className: G.button
  });
}
  }, 'call-members-popout')), l && Q.push(null != L ? (0, i.jsx)(A.Z, {
className: G.button,
channelId: x
  }, 'deselect-participant') : (0, i.jsx)(R.Z, {
className: G.button,
channelId: x,
isHorizontal: !0
  }, 'select-participant')), !t && Q.push((0, i.jsx)(p.Z, {
className: G.button
  }, 'clips')), Q.push((0, i.jsx)(I.Z, {
onOpen: q,
onClose: X,
className: G.button
  }, 'recents')), Q.push((0, i.jsx)(d.Popout, {
position: 'bottom',
renderPopout: e => {
  let {
    closePopout: t
  } = e;
  return (0, i.jsx)(v.Z, {
    children: (0, i.jsx)(k.Z, {
      channelId: x,
      onClose: t,
      appContext: s,
      exitFullScreen: o
    })
  });
},
children: (e, t) => {
  let {
    isShown: n
  } = t;
  return (0, a.createElement)(Z.Z, {
    ...e,
    key: 'more-options',
    isActive: n,
    className: G.lastButton
  });
}
  }, 'more-options-popout')), !r && (Q.push((0, i.jsx)(E.ZP.Divider, {
className: G.divider
  }, 'divider')), Q.push((0, i.jsx)(S.T, {
channelId: n.id,
className: G.chatButtonSpacer,
disabled: !0
  }, 'chat-spacer'))), (0, i.jsx)(i.Fragment, {
children: Q
  });
}