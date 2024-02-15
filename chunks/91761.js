"use strict";
i.r(t), i.d(t, {
  default: function() {
    return d
  }
}), i("222007");
var l = i("446674"),
  a = i("84460"),
  n = i("807106"),
  r = i("119420"),
  o = i("243244");

function d(e) {
  let {
    guildId: t,
    isWatchTogetherPromoEnabled: i = !1,
    enableFilter: d = !1
  } = e, {
    filter: u
  } = (0, l.useStateFromStoresObject)([a.default], () => ({
    filter: a.default.getFilter()
  })), c = (0, o.default)(t, i), s = (0, n.default)(c), f = (0, r.useDeveloperActivityShelfItems)();
  return [...f, ...s].map(e => {
    let [t, i] = e;
    return [t, i.filter(e => !d || "" === u || e.application.name.toLocaleLowerCase().includes(u.toLocaleLowerCase()))]
  })
}