"use strict";
var i = n(735250),
  r = n(470079),
  s = n(392711),
  o = n.n(s),
  a = n(792986),
  l = n(920906),
  u = n(442837),
  _ = n(317381),
  c = n(966302),
  d = n(378364),
  E = n(197344),
  I = n(474873),
  T = n(292959),
  h = n(944486),
  f = n(246946),
  S = n(340895),
  A = n(557177),
  N = n(918559),
  m = n(871465);
let O = {
    transform: "scale(0.7)",
    opacity: 0
  },
  R = {
    transform: "scale(1)",
    opacity: 1
  };
t.Z = () => {
  let {
    connectedActivityChannelId: e,
    activityPanelMode: t
  } = (0, u.cj)([_.ZP], () => ({
    connectedActivityChannelId: _.ZP.getConnectedActivityChannelId(),
    activityPanelMode: _.ZP.getActivityPanelMode()
  })), {
    currentChannelId: n,
    selectedVoiceChannelId: s
  } = (0, u.cj)([h.Z], () => ({
    currentChannelId: h.Z.getChannelId(),
    selectedVoiceChannelId: h.Z.getVoiceChannelId()
  })), p = (0, u.Wu)([S.Z], () => S.Z.getIncomingCalls().filter(i => {
    let {
      channel: r
    } = i, o = e === r.id && s !== r.id && t === N.Ez.PANEL;
    return n !== r.id || o
  })), g = (0, u.e7)([S.Z], () => S.Z.hasIncomingCalls()), C = (0, u.e7)([T.Z], () => T.Z.isSoundDisabled("call_ringing")), v = E.Z.useIsRingtoneEligible(), L = E.Z.useIsRingtoneDisabled(), D = (0, u.e7)([f.Z], () => f.Z.disableSounds), M = (0, u.e7)([I.Z], () => I.Z.getSoundpack()), P = r.useRef(!1), y = (0, a.Z)(() => {
    let e = "call_ringing";
    return v && !L ? (0, A.tu)(d.Z.ringtone, e) : M === m.YC.CLASSIC ? (0, A.tu)(500 !== o().random(1, 1e3) ? "call_ringing" : o().sample(["call_ringing_beat", "call_ringing_snow_halation"]), e) : (0, A.uk)("call_ringing", M)
  }, [M, L, v]);
  return r.useEffect(() => () => {
    y.stop()
  }, [y]), r.useEffect(() => {
    if (D || C) {
      P.current && (y.stop(), P.current = !1);
      return
    }
    g && !P.current ? (y.loop(), P.current = !0) : !g && P.current && (y.stop(), P.current = !1)
  }, [C, D, g, y]), (0, l.useTransition)(p, {
    keys: e => {
      var t;
      return null === (t = e.channel) || void 0 === t ? void 0 : t.id
    },
    enter: {
      from: O,
      to: R
    },
    leave: O,
    config: {
      mass: 1,
      tension: 500,
      friction: 18,
      clamp: !0
    }
  })((e, t) => (0, i.jsx)(c.Z, {
    ...t,
    animatedStyle: e
  }))
}