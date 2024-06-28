"use strict";
var i, r, s, o, a = n(442837),
  l = n(570140),
  u = n(827498);
let _ = {
  show: !1,
  entrypoint: u._b.NONE,
  closeReason: u.ti.DISMISSED
};

function c(e) {
  let {
    closeReason: t = u.ti.DISMISSED
  } = e;
  return _.show = !1, _.entrypoint = u._b.NONE, _.closeReason = t, !0
}
class d extends(o = a.ZP.Store) {
  initialize() {}
  shouldShowPopup() {
    return _.show && _.entrypoint === u._b.TEXT
  }
  shouldShowModal() {
    return _.show && _.entrypoint === u._b.VOICE
  }
  entrypoint() {
    return _.entrypoint
  }
  closeReason() {
    return _.closeReason
  }
}

function E() {
  c({
    closeReason: u.ti.DISMISSED
  })
}

function I() {
  c({
    closeReason: u.ti.COMMAND
  })
}
s = "AppLauncherStore", (r = "displayName") in(i = d) ? Object.defineProperty(i, r, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[r] = s, t.Z = new d(l.Z, {
  APP_LAUNCHER_SHOW: function(e) {
    let {
      entrypoint: t
    } = e;
    return _.show = !0, _.entrypoint = t, _.closeReason = u.ti.DISMISSED, !0
  },
  APP_LAUNCHER_DISMISS: c,
  CONNECTION_OPEN: E,
  LOGOUT: E,
  CHANNEL_SELECT: E,
  APPLICATION_COMMAND_SET_ACTIVE_COMMAND: I,
  APP_LAUNCHER_SET_ACTIVE_COMMAND: I
})