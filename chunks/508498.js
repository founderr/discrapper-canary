"use strict";
s.r(t), s.d(t, {
  useCollectiblesShopRouting: function() {
    return u
  }
}), s("610138"), s("216116"), s("78328"), s("815648"), s("47120");
var a, l, r = s("470079"),
  n = s("613828"),
  i = s("37234"),
  o = s("703656"),
  c = s("981631");

function u() {
  let {
    search: e
  } = (0, n.useLocation)(), t = (0, n.useParams)(), s = r.useMemo(() => new URLSearchParams(e), [e]).get("source"), a = null != s ? parseInt(s, 10) : null;
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
}(l = a || (a = {}))[l.SETTINGS = 0] = "SETTINGS", l[l.CHANGELOG = 1] = "CHANGELOG", l[l.DM_LIST = 2] = "DM_LIST"