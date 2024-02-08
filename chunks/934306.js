"use strict";
n.r(t), n.d(t, {
  isOnNewPanels: function() {
    return a
  },
  isSplitMessagesTab: function() {
    return o
  },
  isSplitMessagesTabAndOnMessagesTab: function() {
    return l
  },
  shouldHandleNewPanelsRoute: function() {
    return u
  }
});
var i = n("21121"),
  r = n("491246"),
  s = n("49111");

function a() {
  return (0, i.isInMainTabsExperiment)()
}

function o() {
  return (0, i.isInMainTabsExperiment)()
}

function l() {
  if (!o()) return !1;
  let e = (0, r.default)();
  return (null == e ? void 0 : e.name) === "messages"
}

function u(e) {
  return !!a() && null != e && e !== s.ME
}