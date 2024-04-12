"use strict";
a.r(t);
var n = a("399606"),
  s = a("626135"),
  l = a("280570"),
  i = a("914788"),
  r = a("292352"),
  o = a("981631");
t.default = () => {
  let e = (0, n.useStateFromStores)([i.default], () => i.default.getSelectedTab());
  return {
    selectedTab: e,
    handleTabChange: e => {
      l.default.selectTab(e), s.default.track(o.AnalyticEvents.FAMILY_CENTER_ACTION, {
        action: r.FamilyCenterAction.TabChange,
        tab: e
      })
    }
  }
}