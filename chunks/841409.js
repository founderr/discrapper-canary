"use strict";
n.r(t);
var a = n("399606"),
  s = n("626135"),
  i = n("280570"),
  l = n("914788"),
  r = n("292352"),
  o = n("981631");
t.default = () => {
  let e = (0, a.useStateFromStores)([l.default], () => l.default.getSelectedTab());
  return {
    selectedTab: e,
    handleTabChange: e => {
      i.default.selectTab(e), s.default.track(o.AnalyticEvents.FAMILY_CENTER_ACTION, {
        action: r.FamilyCenterAction.TabChange,
        tab: e
      })
    }
  }
}