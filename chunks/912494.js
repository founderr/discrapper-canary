"use strict";
n.r(t), n.d(t, {
  LottieSparkle: function() {
    return d
  }
});
var i = n("735250");
n("470079");
var r = n("120356"),
  s = n.n(r),
  a = n("399606"),
  o = n("607070"),
  l = n("226690"),
  u = n("996980");

function d(e) {
  let {
    className: t
  } = e, r = (0, a.useStateFromStores)([o.default], () => o.default.useReducedMotion);
  async function d() {
    let {
      default: e
    } = await n.e("93698").then(n.t.bind(n, "21368", 19));
    return e
  }
  return (0, i.jsx)(l.LottieAnimation, {
    importData: d,
    shouldAnimate: !r,
    className: s()(u.sparkles, t)
  })
}