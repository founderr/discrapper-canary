"use strict";
a.r(t), a.d(t, {
  useUsernameLiveCheck: function() {
    return u
  }
});
var s = a("884691"),
  n = a("917351"),
  i = a("65597"),
  l = a("255403"),
  r = a("947962"),
  o = a("2581"),
  d = a("415133");
let u = function(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    u = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
    c = (0, i.default)([o.default], () => o.default.validate(e), [e]),
    E = (0, i.default)([o.default], () => o.default.isRateLimited()),
    f = (0, r.usePomeloDebounceDelay)(),
    m = s.useMemo(() => (0, n.debounce)(e => l.default.attemptPomelo(e, a ? "registration" : "modal", a, u), f), [f, a, u]);
  return s.useEffect(() => {
    t && !E && null == c && "" !== e && m(e)
  }, [t, E, c, e, m]), s.useMemo(() => null != c ? (0, d.formatUsernameLiveCheckValidation)(c) : void 0, [c])
}