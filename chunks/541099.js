"use strict";
n.r(t);
var i, r, s, a, o = n("442837"),
  l = n("570140"),
  u = n("827498");
let d = {
  show: !1,
  entrypoint: u.AppLauncherEntrypoint.NONE
};

function _() {
  return d.show = !1, d.entrypoint = u.AppLauncherEntrypoint.NONE, !0
}
class c extends(a = o.default.Store) {
  initialize() {}
  shouldShowPopup() {
    return d.show && d.entrypoint === u.AppLauncherEntrypoint.TEXT
  }
  shouldShowModal() {
    return d.show && d.entrypoint === u.AppLauncherEntrypoint.VOICE
  }
}
s = "AppLauncherStore", (r = "displayName") in(i = c) ? Object.defineProperty(i, r, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[r] = s, t.default = new c(l.default, {
  APP_LAUNCHER_SHOW: function(e) {
    let {
      entrypoint: t
    } = e;
    return d.show = !0, d.entrypoint = t, !0
  },
  APP_LAUNCHER_DISMISS: _,
  CONNECTION_OPEN: _,
  LOGOUT: _,
  CHANNEL_SELECT: _,
  APPLICATION_COMMAND_SET_ACTIVE_COMMAND: _,
  APP_LAUNCHER_SET_ACTIVE_COMMAND: _
})