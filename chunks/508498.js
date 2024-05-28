"use strict";
a.r(t), a.d(t, {
  useCollectiblesShopRouting: function() {
    return u
  }
}), a("610138"), a("216116"), a("78328"), a("815648"), a("47120");
var s, r, n = a("470079"),
  l = a("613828"),
  o = a("37234"),
  i = a("703656"),
  c = a("981631");

function u() {
  let {
    search: e
  } = (0, l.useLocation)(), t = (0, l.useParams)(), a = n.useMemo(() => new URLSearchParams(e), [e]).get("source"), s = null != a ? parseInt(a, 10) : null;
  return {
    onClose: n.useCallback(() => {
      if (0 === s) {
        (0, i.back)(), (0, o.pushLayer)(c.Layers.USER_SETTINGS);
        return
      }
      if ((0, i.currentRouteHasBackNavigation)()) {
        (0, i.back)();
        return
      }(0, i.transitionTo)(c.Routes.APP)
    }, [s]),
    source: s,
    ...t
  }
}(r = s || (s = {}))[r.SETTINGS = 0] = "SETTINGS", r[r.CHANGELOG = 1] = "CHANGELOG", r[r.DM_LIST = 2] = "DM_LIST"