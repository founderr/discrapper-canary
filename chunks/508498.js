"use strict";
l.r(t), l.d(t, {
  useCollectiblesShopRouting: function() {
    return u
  }
}), l("610138"), l("216116"), l("78328"), l("815648"), l("47120");
var a, s, r = l("470079"),
  n = l("613828"),
  i = l("37234"),
  o = l("703656"),
  c = l("981631");

function u() {
  let {
    search: e
  } = (0, n.useLocation)(), t = (0, n.useParams)(), l = r.useMemo(() => new URLSearchParams(e), [e]).get("source"), a = null != l ? parseInt(l, 10) : null;
  return {
    onClose: r.useCallback(() => {
      if (0 === a) {
        (0, o.back)(), (0, i.pushLayer)(c.Layers.USER_SETTINGS);
        return
      }
      if ((0, o.currentRouteHasBackNavigation)()) {
        (0, o.back)();
        return
      }(0, o.transitionTo)(c.Routes.APP)
    }, [a]),
    source: a,
    ...t
  }
}(s = a || (a = {}))[s.SETTINGS = 0] = "SETTINGS", s[s.CHANGELOG = 1] = "CHANGELOG", s[s.DM_LIST = 2] = "DM_LIST"