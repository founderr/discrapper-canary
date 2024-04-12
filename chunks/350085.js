"use strict";
a.r(t), a.d(t, {
  overlayEventHandlers: function() {
    return d
  }
});
var n = a("392711"),
  s = a.n(n),
  l = a("283595"),
  i = a("808506"),
  r = a("996106"),
  o = a("186901"),
  u = a("981631");
let d = {
  [u.RPCEvents.OVERLAY_UPDATE]: {
    scope: o.RPC_LOCAL_SCOPE,
    handler(e) {
      let {
        args: {
          pid: t
        },
        socket: a
      } = e;
      if ("number" != typeof t || t < 10) throw new r.default({
        errorCode: u.RPCErrors.INVALID_EVENT
      }, "Invalid pid");
      return e => {
        let {
          prevState: n,
          dispatch: r
        } = e, o = i.default.enabled, u = !0, d = a.application.id;
        if (null != d) {
          let e = l.default.getActiveLibraryApplication(d);
          null != e && (o = o && e.isOverlayEnabled()), u = i.default.isInputLocked(t)
        }
        let c = {
          enabled: o,
          locked: u
        };
        return !s().isEqual(c, n) && r(c), c
      }
    }
  }
}