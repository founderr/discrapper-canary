n.d(t, {
  M: function() {
    return u
  }
});
var i = n(392711),
  s = n.n(i),
  l = n(283595),
  a = n(808506),
  r = n(996106),
  o = n(186901),
  c = n(981631);
let u = {
  [c.zMe.OVERLAY_UPDATE]: {
    scope: o.lH,
    handler(e) {
      let {
        args: {
          pid: t
        },
        socket: n
      } = e;
      if ("number" != typeof t || t < 10) throw new r.Z({
        errorCode: c.lTL.INVALID_EVENT
      }, "Invalid pid");
      return e => {
        let {
          prevState: i,
          dispatch: r
        } = e, o = a.Z.enabled, c = !0, u = n.application.id;
        if (null != u) {
          let e = l.Z.getActiveLibraryApplication(u);
          null != e && (o = o && e.isOverlayEnabled()), c = a.Z.isInputLocked(t)
        }
        let d = {
          enabled: o,
          locked: c
        };
        return !s().isEqual(d, i) && r(d), d
      }
    }
  }
}