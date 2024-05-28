"use strict";
s.r(t), s.d(t, {
  useActionTotalsForDisplayType: function() {
    return r
  },
  useActionsForDisplayType: function() {
    return i
  },
  useHasActionForAnyDisplayType: function() {
    return u
  }
});
var a = s("399606"),
  n = s("914788"),
  l = s("292352");

function i(e) {
  return (0, a.useStateFromStoresArray)([n.default], () => n.default.getActionsForDisplayType(e))
}

function r(e) {
  return (0, a.useStateFromStores)([n.default], () => n.default.getTotalForDisplayType(e))
}

function u() {
  return (0, a.useStateFromStores)([n.default], () => Object.values(l.TeenActionDisplayType).some(e => n.default.getTotalForDisplayType(e) > 0))
}