n.d(t, {
  A: function() {
    return c
  },
  T: function() {
    return i
  }
});
var l, i, s = n(735250);
n(470079);
var a = n(120356),
  r = n.n(a),
  o = n(616347);
(l = i || (i = {}))[l.POPOUT = 0] = "POPOUT", l[l.SECONDARY = 1] = "SECONDARY", l[l.BLACK = 2] = "BLACK";
let c = e => {
  let {
    left: t,
    top: n = 0,
    right: l = 0,
    bottom: i,
    size: a = 8,
    alert: c = !1,
    maskColor: u = 1
  } = e;
  return (0, s.jsx)("span", {
    className: r()(o.dot, {
      [o.alert]: c,
      [o.maskPopout]: 0 === u,
      [o.maskSecondary]: 1 === u,
      [o.maskBlack]: 2 === u
    }),
    style: {
      height: a,
      width: a,
      left: t,
      top: n,
      right: l,
      bottom: i
    }
  })
}