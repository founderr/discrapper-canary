"use strict";
n.r(t), n.d(t, {
  useFetchDeveloperActivityShelfItems: function() {
    return u
  }
});
var i = n("470079"),
  r = n("442837"),
  s = n("695346"),
  a = n("115130"),
  o = n("566620"),
  l = n("782769");

function u() {
  let e = (0, l.useIsActivitiesEnabledForCurrentPlatform)(),
    t = s.DeveloperMode.getSetting(),
    n = (0, r.useStateFromStores)([a.default], () => a.default.getFetchState(), []);
  return i.useEffect(() => {
    e && t && null == n && (0, o.fetchDeveloperApplications)()
  }, [e, n, t]), null
}