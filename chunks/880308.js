"use strict";
n.r(t), n.d(t, {
  useFetchDeveloperActivityShelfItems: function() {
    return c
  }
});
var i = n("470079"),
  s = n("442837"),
  u = n("695346"),
  a = n("115130"),
  l = n("566620"),
  r = n("782769");

function c() {
  let e = (0, r.useIsActivitiesEnabledForCurrentPlatform)(),
    t = u.DeveloperMode.getSetting(),
    n = (0, s.useStateFromStores)([a.default], () => a.default.getFetchState(), []);
  return i.useEffect(() => {
    e && t && null == n && (0, l.fetchDeveloperApplications)()
  }, [e, n, t]), null
}