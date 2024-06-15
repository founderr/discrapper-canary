"use strict";
n.r(t), n.d(t, {
  AppLauncherHistoryContext: function() {
    return a
  },
  HistoryItemType: function() {
    return r
  },
  useAppLauncherHistoryContext: function() {
    return o
  }
});
var i, r, s = n("470079");
(i = r || (r = {})).HOME = "home", i.LIST = "list", i.APPLICATION = "application";
let a = s.createContext({
  history: [],
  setHistory: () => {},
  currentView: void 0,
  pushHistory: () => {},
  goBack: () => {}
});

function o() {
  return s.useContext(a)
}