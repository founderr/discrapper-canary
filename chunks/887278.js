"use strict";
n.d(t, {
  $1: function() {
    return f
  },
  YT: function() {
    return N
  },
  pn: function() {
    return A
  }
}), n(411104);
var i, r, s = n(570140),
  o = n(923928),
  a = n(593472),
  l = n(594190),
  u = n(77498),
  _ = n(594174),
  c = n(626135),
  d = n(358085),
  E = n(998502),
  I = n(96592),
  T = n(981631);
let h = {
  development: [0, 0, 0, 0],
  canary: [1, 0, 30, 10],
  ptb: [1, 0, 1005, 2],
  stable: [1, 0, 9001, 2]
};

function f() {
  var e;
  return !(null === E.ZP || void 0 === E.ZP ? void 0 : null === (e = E.ZP.isModuleVersionAtLeast) || void 0 === e ? void 0 : e.call(E.ZP, "discord_hook", h))
}
async function S() {
  if (!(0, d.isWindows)()) return Promise.reject(Error("Hook is only available on Windows"));
  if (f()) return Promise.reject(Error("Hook module is too old"));
  await E.ZP.ensureModule("discord_hook");
  let e = await E.ZP.requireModule("discord_hook");
  return function(e) {
    if (null == e.setFlags) return;
    let t = 0,
      n = I.Z.getCurrentConfig({
        location: "edd7d3_1"
      }, {
        autoTrackExposure: !1
      });
    n.enableCrashReporting && (console.log("Hook: Enabling crash reporting."), t |= 1);
    let i = _.default.getCurrentUser();
    null != i && (i.isStaff() || n.enableCrashTrigger) && (console.log("Hook: Enabling crash trigger."), t |= 2), e.setFlags(t)
  }(e), e
}(r = i || (i = {}))[r.None = 0] = "None", r[r.EnableCrashReporting = 1] = "EnableCrashReporting", r[r.EnableCrashTrigger = 2] = "EnableCrashTrigger";

function N(e, t) {
  return S().then(n => {
    var i;
    let r = null === (i = l.ZP.getGameForPID(e)) || void 0 === i ? void 0 : i.name,
      _ = u.Z.getGameByName(r),
      d = null;
    return new Promise(i => {
      let u = (e, n) => {
          c.default.track(T.rMx.HOOK_RESULT, {
            game_name: r,
            game_id: null == _ ? null : _.id,
            success: n,
            error: e,
            ...t
          }), null != d && (clearTimeout(d), d = null), n ? i() : i(e = null != e ? e : "Unknown hook error")
        },
        E = l.ZP.getOverlayOptionsForPID(e),
        I = {
          ...a.r,
          ...E,
          elevate: l.ZP.shouldElevateProcessForPID(e)
        };
      null == I.allowHook || I.allowHook ? (d = setTimeout(() => {
        n.cancelAttachToProcess(e), u("Timed out waiting for hook response", !1)
      }, 12e4), n.attachToProcess(e, I, u), s.Z.wait(() => o.Z.clearElevatedProcess())) : i("Hook is disabled for this game")
    })
  })
}

function A(e) {
  return S().then(t => {
    t.cancelAttachToProcess(e)
  })
}