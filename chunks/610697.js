n.d(t, {
  Z: function() {
    return c
  }
}), n(47120);
var s = n(470079),
  i = n(442837),
  l = n(594174),
  a = n(823162),
  r = n(355298);
let o = new Set(["GB"]);

function c() {
  let e = (0, i.e7)([r.Z], () => r.Z.getUserCountryCode()),
    t = !1 === (0, i.e7)([l.default], () => {
      var e;
      return null === (e = l.default.getCurrentUser()) || void 0 === e ? void 0 : e.nsfwAllowed
    });
  return s.useEffect(() => {
    null == e && (0, a.hi)()
  }, [e]), !!(null != e && o.has(e.alpha2)) && !!t || !1
}