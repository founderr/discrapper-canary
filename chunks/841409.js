"use strict";
s.r(t);
var n = s("399606"),
  a = s("626135"),
  l = s("280570"),
  i = s("914788"),
  r = s("292352"),
  o = s("981631");
t.default = () => {
  let e = (0, n.useStateFromStores)([i.default], () => i.default.getSelectedTab());
  return {
    selectedTab: e,
    handleTabChange: e => {
      l.default.selectTab(e), a.default.track(o.AnalyticEvents.FAMILY_CENTER_ACTION, {
        action: r.FamilyCenterAction.TabChange,
        tab: e
      })
    }
  }
}