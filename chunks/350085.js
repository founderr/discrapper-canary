"use strict";
n.r(t), n.d(t, {
  overlayEventHandlers: function() {
    return d
  }
});
var a = n("392711"),
  s = n.n(a),
  i = n("283595"),
  l = n("808506"),
  r = n("996106"),
  o = n("186901"),
  u = n("981631");
let d = {
  [u.RPCEvents.OVERLAY_UPDATE]: {
    scope: o.RPC_LOCAL_SCOPE,
    handler(e) {
      let {
        args: {
          pid: t
        },
        socket: n
      } = e;
      if ("number" != typeof t || t < 10) throw new r.default({
        errorCode: u.RPCErrors.INVALID_EVENT
      }, "Invalid pid");
      return e => {
        let {
          prevState: a,
          dispatch: r
        } = e, o = l.default.enabled, u = !0, d = n.application.id;
        if (null != d) {
          let e = i.default.getActiveLibraryApplication(d);
          null != e && (o = o && e.isOverlayEnabled()), u = l.default.isInputLocked(t)
        }
        let c = {
          enabled: o,
          locked: u
        };
        return !s().isEqual(c, a) && r(c), c
      }
    }
  }
}