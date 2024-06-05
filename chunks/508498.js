"use strict";
a.r(t), a.d(t, {
  useCollectiblesShopRouting: function() {
    return u
  }
}), a("610138"), a("216116"), a("78328"), a("815648"), a("47120");
var s, l, r = a("470079"),
  n = a("613828"),
  i = a("37234"),
  o = a("703656"),
  c = a("981631");

function u() {
  let {
    search: e
  } = (0, n.useLocation)(), t = (0, n.useParams)(), a = r.useMemo(() => new URLSearchParams(e), [e]).get("source"), s = null != a ? parseInt(a, 10) : null;
  return {
    onClose: r.useCallback(() => {
      if (0 === s) {
        (0, o.back)(), (0, i.pushLayer)(c.Layers.USER_SETTINGS);
        return
      }
      if ((0, o.currentRouteHasBackNavigation)()) {
        (0, o.back)();
        return
      }(0, o.transitionTo)(c.Routes.APP)
    }, [s]),
    source: s,
    ...t
  }
}(l = s || (s = {}))[l.SETTINGS = 0] = "SETTINGS", l[l.CHANGELOG = 1] = "CHANGELOG", l[l.DM_LIST = 2] = "DM_LIST"