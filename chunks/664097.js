"use strict";
l.r(t), l.d(t, {
  useDeveloperActivityShelfItems: function() {
    return d
  }
});
var i = l("470079"),
  n = l("442837"),
  a = l("115130"),
  u = l("701488");
let d = () => {
  let {
    isEnabled: e,
    lastUsedObject: t
  } = (0, n.useStateFromStoresObject)([a.default], () => ({
    isEnabled: a.default.getIsEnabled(),
    lastUsedObject: a.default.getLastUsedObject()
  }), []), l = (0, n.useStateFromStoresArray)([a.default], () => a.default.getDeveloperShelfItems(), []);
  return i.useMemo(() => e ? l.map(e => ({
    application: e,
    activity: {
      ...u.DEFAULT_EMBEDDED_ACTIVITY_CONFIG,
      ...e.embeddedActivityConfig,
      application_id: e.id
    }
  })).sort((e, l) => {
    let i = t[e.application.id],
      n = t[l.application.id];
    return null == i ? 1 : null == n ? -1 : n - i
  }) : [], [l, e, t])
}