"use strict";
a.r(t), a.d(t, {
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
var n = a("399606"),
  s = a("914788"),
  l = a("292352");

function i(e) {
  return (0, n.useStateFromStoresArray)([s.default], () => s.default.getActionsForDisplayType(e))
}

function r(e) {
  return (0, n.useStateFromStores)([s.default], () => s.default.getTotalForDisplayType(e))
}

function o() {
  return (0, n.useStateFromStores)([s.default], () => Object.values(l.TeenActionDisplayType).some(e => s.default.getTotalForDisplayType(e) > 0))
}