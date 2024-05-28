"use strict";
s.r(t);
var a = s("399606"),
  n = s("626135"),
  l = s("280570"),
  i = s("914788"),
  r = s("292352"),
  u = s("981631");
t.default = () => {
  let e = (0, a.useStateFromStores)([i.default], () => i.default.getSelectedTab());
  return {
    selectedTab: e,
    handleTabChange: e => {
      l.default.selectTab(e), n.default.track(u.AnalyticEvents.FAMILY_CENTER_ACTION, {
        action: r.FamilyCenterAction.TabChange,
        tab: e
      })
    }
  }
}