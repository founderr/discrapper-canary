"use strict";
n.r(t), n.d(t, {
  useDeveloperActivityShelfItems: function() {
    return o
  }
});
var i = n("470079"),
  r = n("442837"),
  s = n("115130"),
  a = n("701488");
let o = () => {
  let {
    isEnabled: e,
    lastUsedObject: t
  } = (0, r.useStateFromStoresObject)([s.default], () => ({
    isEnabled: s.default.getIsEnabled(),
    lastUsedObject: s.default.getLastUsedObject()
  }), []), n = (0, r.useStateFromStoresArray)([s.default], () => s.default.getDeveloperShelfItems(), []);
  return i.useMemo(() => e ? n.map(e => ({
    application: e,
    activity: {
      ...a.DEFAULT_EMBEDDED_ACTIVITY_CONFIG,
      ...e.embeddedActivityConfig,
      application_id: e.id
    }
  })).sort((e, n) => {
    let i = t[e.application.id],
      r = t[n.application.id];
    return null == i ? 1 : null == r ? -1 : r - i
  }) : [], [n, e, t])
}