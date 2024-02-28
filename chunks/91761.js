"use strict";
l.r(t), l.d(t, {
  default: function() {
    return o
  }
}), l("222007");
var i = l("446674"),
  n = l("84460"),
  a = l("743925"),
  d = l("807106"),
  u = l("119420");

function o(e) {
  let {
    guildId: t,
    enableFilter: l = !1
  } = e, {
    filter: o
  } = (0, i.useStateFromStoresObject)([n.default], () => ({
    filter: n.default.getFilter()
  })), r = (0, a.useActivityShelfData)(t), c = (0, d.default)(r), s = (0, u.useDeveloperActivityShelfItems)();
  return [...s, ...c].filter(e => !l || "" === o || e.application.name.toLocaleLowerCase().includes(o.toLocaleLowerCase()))
}