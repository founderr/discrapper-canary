"use strict";
l.r(t), l.d(t, {
  useDeveloperActivityShelfItems: function() {
    return u
  }
});
var i = l("884691"),
  n = l("446674"),
  a = l("84460"),
  d = l("954016");
let u = () => {
  let {
    isEnabled: e,
    lastUsedObject: t
  } = (0, n.useStateFromStoresObject)([a.default], () => ({
    isEnabled: a.default.getIsEnabled(),
    lastUsedObject: a.default.getLastUsedObject()
  }), []), l = (0, n.useStateFromStoresArray)([a.default], () => a.default.getDeveloperShelfItems(), []), u = i.useMemo(() => e ? l.map(e => {
    let t = {
      application: e,
      activity: {
        ...d.DEFAULT_EMBEDDED_ACTIVITY_CONFIG,
        ...e.embeddedActivityConfig,
        application_id: e.id
      }
    };
    return t
  }).sort((e, l) => {
    let i = t[e.application.id],
      n = t[l.application.id];
    return null == i ? 1 : null == n ? -1 : n - i
  }) : [], [l, e, t]);
  return u
}