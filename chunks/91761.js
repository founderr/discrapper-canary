"use strict";
i.r(t), i.d(t, {
  default: function() {
    return r
  }
}), i("222007");
var l = i("446674"),
  n = i("84460"),
  a = i("743925"),
  d = i("807106"),
  u = i("119420");

function r(e) {
  let {
    guildId: t,
    enableFilter: i = !1
  } = e, {
    filter: r
  } = (0, l.useStateFromStoresObject)([n.default], () => ({
    filter: n.default.getFilter()
  })), o = (0, a.useActivityShelfData)(t), c = (0, d.default)(o), s = (0, u.useDeveloperActivityShelfItems)();
  return [...s, ...c].filter(e => !i || "" === r || e.application.name.toLocaleLowerCase().includes(r.toLocaleLowerCase()))
}