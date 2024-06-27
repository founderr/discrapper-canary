"use strict";
var i, r, s, o, a = n(442837),
  l = n(570140),
  u = n(287734),
  _ = n(579806),
  c = n(695346),
  d = n(70956),
  E = n(358085),
  I = n(314897),
  T = n(981631),
  h = n(65154);
let f = Date.now(),
  S = !1,
  A = !1,
  N = !1,
  m = !1,
  O = !1;

function R() {
  return N || m || (0, E.isAndroid)() && O
}

function p() {
  Date.now() - f > T.OSm || R() ? S || l.Z.dispatch({
    type: "IDLE",
    idle: !0,
    idleSince: f
  }) : S && l.Z.dispatch({
    type: "IDLE",
    idle: !1
  }), Date.now() - f > Math.min(c.CM.getSetting() * d.Z.Millis.SECOND, T.OSm) || R() ? A || l.Z.dispatch({
    type: "AFK",
    afk: !0
  }) : A && l.Z.dispatch({
    type: "AFK",
    afk: !1
  })
}!__OVERLAY__ && (E.isPlatformEmbedded && (null === _.Z || void 0 === _.Z ? void 0 : _.Z.remotePowerMonitor) != null ? (! function e() {
  var t;
  let n = t => {
    f = Math.max(Date.now() - t, f), p(), setTimeout(e, 10 * d.Z.Millis.SECOND)
  };
  if ((null === _.Z || void 0 === _.Z ? void 0 : null === (t = _.Z.remotePowerMonitor) || void 0 === t ? void 0 : t.getSystemIdleTimeMs) != null) {
    let e = _.Z.remotePowerMonitor.getSystemIdleTimeMs();
    e instanceof Promise ? e.then(n) : n(e)
  }
}(), _.Z.remotePowerMonitor.on("resume", () => {
  N = !1, g({})
}), _.Z.remotePowerMonitor.on("suspend", () => {
  N = !0, g({}), u.default.disconnect()
}), _.Z.remotePowerMonitor.on("lock-screen", () => {
  m = !0, g({})
}), _.Z.remotePowerMonitor.on("unlock-screen", () => {
  m = !1, g({})
})) : setInterval(p, .25 * T.OSm));

function g(e) {
  let {
    timestamp: t,
    type: n
  } = e, i = "OVERLAY_SET_NOT_IDLE" === n && null != t;
  return (!i || !(t <= f)) && (f = i ? t : Date.now(), __OVERLAY__ ? l.Z.dispatch({
    type: "OVERLAY_SET_NOT_IDLE",
    timestamp: f
  }) : p(), !1)
}
class C extends(o = a.ZP.Store) {
  isIdle() {
    return S
  }
  isAFK() {
    return A
  }
  getIdleSince() {
    return S ? f : null
  }
}
s = "IdleStore", (r = "displayName") in(i = C) ? Object.defineProperty(i, r, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[r] = s, t.Z = new C(l.Z, {
  IDLE: function(e) {
    S = e.idle
  },
  AFK: function(e) {
    A = e.afk
  },
  SPEAKING: function(e) {
    let {
      userId: t,
      speakingFlags: n
    } = e;
    return n !== h.Dg.NONE && t === I.default.getId() && g({}), !1
  },
  APP_STATE_UPDATE: function(e) {
    let {
      state: t
    } = e;
    return O = t === T.$7l.BACKGROUND, f = Date.now(), p(), !1
  },
  OVERLAY_SET_NOT_IDLE: g,
  CHANNEL_SELECT: g,
  VOICE_CHANNEL_SELECT: g,
  WINDOW_FOCUS: g,
  OVERLAY_INITIALIZE: g,
  OVERLAY_SET_INPUT_LOCKED: g,
  USER_SETTINGS_PROTO_UPDATE: g
})