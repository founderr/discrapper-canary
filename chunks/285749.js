"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
}), n("222007");
var l = n("37983"),
  i = n("884691"),
  a = n("480647"),
  s = n("235932"),
  r = n("658567"),
  o = e => {
    let {
      activity: t,
      onComplete: n,
      user: o
    } = e, [u, d] = i.useState(null), {
      assetMap: c,
      loaded: f,
      stream: m
    } = (0, r.default)(t, o), p = i.useCallback(e => {
      null != e && f && d(new a.default(e, c))
    }, [c, f]);
    return i.useEffect(() => {
      null != u && f && (0, s.default)({
        renderer: u,
        activity: t,
        user: o,
        onComplete: n,
        stream: m
      })
    }, [u, f, t, o, n, m]), (0, l.jsx)("canvas", {
      style: {
        marginTop: 16,
        position: "fixed",
        zIndex: 10
      },
      ref: p
    })
  }