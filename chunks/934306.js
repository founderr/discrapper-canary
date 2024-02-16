"use strict";
n.r(t), n.d(t, {
  isOnNewPanels: function() {
    return o
  },
  isSplitMessagesTab: function() {
    return l
  },
  isSplitMessagesTabAndOnMessagesTab: function() {
    return u
  },
  shouldHandleNewPanelsRoute: function() {
    return c
  }
});
var i = n("21121"),
  r = n("99317"),
  s = n("491246"),
  a = n("49111");

function o() {
  return (0, i.isInMainTabsExperiment)()
}

function l() {
  return !(0, r.getNavYouBarExperiment)({
    location: "isSplitMessagesTab"
  }).showYouBar && (0, i.isInMainTabsExperiment)()
}

function u() {
  if (!l()) return !1;
  let e = (0, s.default)();
  return (null == e ? void 0 : e.name) === "messages"
}

function c(e) {
  return !!o() && ((0, r.getNavYouBarExperiment)({
    location: "shouldHandleNewPanelsRoute"
  }).showYouBar ? null != e : null != e && e !== a.ME)
}