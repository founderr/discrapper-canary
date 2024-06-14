"use strict";
s.r(t), s.d(t, {
  useActionTotalsForDisplayType: function() {
    return r
  },
  useActionsForDisplayType: function() {
    return i
  },
  useHasActionForAnyDisplayType: function() {
    return o
  }
});
var n = s("399606"),
  a = s("914788"),
  l = s("292352");

function i(e) {
  return (0, n.useStateFromStoresArray)([a.default], () => a.default.getActionsForDisplayType(e))
}

function r(e) {
  return (0, n.useStateFromStores)([a.default], () => a.default.getTotalForDisplayType(e))
}

function o() {
  return (0, n.useStateFromStores)([a.default], () => Object.values(l.TeenActionDisplayType).some(e => a.default.getTotalForDisplayType(e) > 0))
}