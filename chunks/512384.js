n.d(t, {
  Z: function() {
    return o
  }
});
var l = n(735250);
n(470079);
var i = n(399606),
  s = n(481060),
  a = n(351780),
  r = n(170248);

function o(e) {
  let {
    isShaking: t,
    shakeLocation: n,
    children: o,
    className: c
  } = e, u = (0, r.Z)(n);
  return (0, i.e7)([a.Z], () => a.Z.isEnabled({
    shakeLocation: n
  })) ? (0, l.jsx)(s.Shaker, {
    isShaking: t,
    intensity: u,
    className: c,
    children: o
  }) : (0, l.jsx)(l.Fragment, {
    children: o
  })
}