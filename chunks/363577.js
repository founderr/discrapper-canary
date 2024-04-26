"use strict";
a.r(t), a.d(t, {
  useUsernameLiveCheck: function() {
    return u
  }
});
var s = a("470079"),
  i = a("392711"),
  n = a("399606"),
  l = a("986197"),
  o = a("654344"),
  r = a("135200"),
  d = a("346585");
let u = function(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    u = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
    c = (0, n.useStateFromStores)([r.default], () => r.default.validate(e), [e]),
    E = (0, n.useStateFromStores)([r.default], () => r.default.isRateLimited()),
    m = (0, o.usePomeloDebounceDelay)(),
    S = s.useMemo(() => (0, i.debounce)(e => l.default.attemptPomelo(e, a ? "registration" : "modal", a, u), m), [m, a, u]);
  return s.useEffect(() => {
    t && !E && null == c && "" !== e && S(e)
  }, [t, E, c, e, S]), s.useMemo(() => null != c ? (0, d.formatUsernameLiveCheckValidation)(c) : void 0, [c])
}