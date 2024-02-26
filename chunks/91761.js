"use strict";
i.r(t), i.d(t, {
  default: function() {
    return o
  }
}), i("222007");
var l = i("446674"),
  a = i("84460"),
  n = i("807106"),
  r = i("119420"),
  u = i("243244");

function o(e) {
  let {
    guildId: t,
    isWatchTogetherPromoEnabled: i = !1,
    enableFilter: o = !1
  } = e, {
    filter: d
  } = (0, l.useStateFromStoresObject)([a.default], () => ({
    filter: a.default.getFilter()
  })), c = (0, u.default)(t, i), s = (0, n.default)(c), f = (0, r.useDeveloperActivityShelfItems)();
  return [...f, ...s].map(e => {
    let [t, i] = e;
    return [t, i.filter(e => !o || "" === d || e.application.name.toLocaleLowerCase().includes(d.toLocaleLowerCase()))]
  })
}