"use strict";
a.r(t), a.d(t, {
  useCollectiblesShopRouting: function() {
    return c
  }
}), a("610138"), a("216116"), a("78328"), a("815648"), a("47120");
var l, s, r = a("470079"),
  n = a("613828"),
  o = a("37234"),
  i = a("703656"),
  u = a("981631");

function c() {
  let {
    search: e
  } = (0, n.useLocation)(), t = (0, n.useParams)(), a = r.useMemo(() => new URLSearchParams(e), [e]).get("source"), l = null != a ? parseInt(a, 10) : null;
  return {
    onClose: r.useCallback(() => {
      if (0 === l) {
        (0, i.back)(), (0, o.pushLayer)(u.Layers.USER_SETTINGS);
        return
      }
      if ((0, i.currentRouteHasBackNavigation)()) {
        (0, i.back)();
        return
      }(0, i.transitionTo)(u.Routes.APP)
    }, [l]),
    source: l,
    ...t
  }
}(s = l || (l = {}))[s.SETTINGS = 0] = "SETTINGS", s[s.CHANGELOG = 1] = "CHANGELOG", s[s.DM_LIST = 2] = "DM_LIST"