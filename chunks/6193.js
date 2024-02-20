"use strict";
n.r(t), n.d(t, {
  isHookModuleTooOld: function() {
    return m
  },
  attachToProcess: function() {
    return g
  },
  cancelAttachToProcess: function() {
    return T
  }
}), n("70102");
var i, r, s = n("913144"),
  a = n("363658"),
  o = n("115718"),
  l = n("546463"),
  u = n("568307"),
  c = n("697218"),
  d = n("599110"),
  p = n("773336"),
  h = n("50885"),
  f = n("688225"),
  E = n("49111");
let _ = {
  development: [0, 0, 0, 0],
  canary: [1, 0, 30, 10],
  ptb: [1, 0, 1005, 2],
  stable: [1, 0, 9001, 2]
};

function m() {
  var e;
  return !(null === h.default || void 0 === h.default ? void 0 : null === (e = h.default.isModuleVersionAtLeast) || void 0 === e ? void 0 : e.call(h.default, "discord_hook", _))
}
async function S() {
  if (!(0, p.isWindows)()) return Promise.reject(Error("Hook is only available on Windows"));
  if (m()) return Promise.reject(Error("Hook module is too old"));
  await h.default.ensureModule("discord_hook");
  let e = await h.default.requireModule("discord_hook");
  return function(e) {
    if (null == e.setFlags) return;
    let t = 0,
      n = f.default.getCurrentConfig({
        location: "edd7d3_1"
      }, {
        autoTrackExposure: !1
      });
    n.enableCrashReporting && (console.log("Hook: Enabling crash reporting."), t |= 1);
    let i = c.default.getCurrentUser();
    null != i && (i.isStaff() || n.enableCrashTrigger) && (console.log("Hook: Enabling crash trigger."), t |= 2), e.setFlags(t)
  }(e), e
}(r = i || (i = {}))[r.None = 0] = "None", r[r.EnableCrashReporting = 1] = "EnableCrashReporting", r[r.EnableCrashTrigger = 2] = "EnableCrashTrigger";

function g(e, t) {
  return S().then(n => {
    var i;
    let r = null === (i = u.default.getGameForPID(e)) || void 0 === i ? void 0 : i.name,
      c = l.default.getGameByName(r),
      p = null;
    return new Promise(i => {
      let l = (e, n) => {
          d.default.track(E.AnalyticEvents.HOOK_RESULT, {
            game_name: r,
            game_id: null == c ? null : c.id,
            success: n,
            error: e,
            ...t
          }), null != p && (clearTimeout(p), p = null), n ? i() : i(e = null != e ? e : "Unknown hook error")
        },
        h = u.default.getOverlayOptionsForPID(e),
        f = {
          ...o.DEFAULT_OVERLAY_OPTIONS,
          ...h,
          elevate: u.default.shouldElevateProcessForPID(e)
        };
      null == f.allowHook || f.allowHook ? (p = setTimeout(() => {
        n.cancelAttachToProcess(e), l("Timed out waiting for hook response", !1)
      }, 12e4), n.attachToProcess(e, f, l), s.default.wait(() => a.default.clearElevatedProcess())) : i("Hook is disabled for this game")
    })
  })
}

function T(e) {
  return S().then(t => {
    t.cancelAttachToProcess(e)
  })
}