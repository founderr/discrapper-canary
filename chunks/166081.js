t.d(n, {
  U: function() {
    return u
  }
});
var i = t(470079),
  r = t(695346),
  o = t(73346),
  l = t(834431);

function u(e, n) {
  let {
    shouldAnimate: t = !0
  } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, u = r.QK.useSetting(), s = (0, l.n)(), a = t && s && u;
  return i.useMemo(() => {
    if ((null == e ? void 0 : e.image_asset) != null) return (0, o._W)(e.application_id, e.image_asset, n, a ? void 0 : "webp")
  }, [n, e, a])
}