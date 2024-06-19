t.d(n, {
  Z: function() {
    return u
  }
}), t(47120);
var i = t(470079),
  l = t(442837),
  s = t(594174),
  r = t(823162),
  a = t(355298);
let o = new Set(["GB"]);

function u() {
  let e = (0, l.e7)([a.Z], () => a.Z.getUserCountryCode()),
    n = !1 === (0, l.e7)([s.default], () => {
      var e;
      return null === (e = s.default.getCurrentUser()) || void 0 === e ? void 0 : e.nsfwAllowed
    });
  return i.useEffect(() => {
    null == e && (0, r.hi)()
  }, [e]), !!(null != e && o.has(e.alpha2)) && !!n || !1
}