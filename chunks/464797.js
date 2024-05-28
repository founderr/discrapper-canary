"use strict";
r.r(t), r.d(t, {
  GuildProductPurchaseContextProvider: function() {
    return o
  },
  useGuildProductPurchaseContext: function() {
    return d
  }
});
var n = r("735250"),
  a = r("470079"),
  s = r("512722"),
  l = r.n(s),
  u = r("442837"),
  i = r("240864");
let c = a.createContext(void 0);

function d() {
  let e = a.useContext(c);
  return l()(null != e, "GuildProductPurchaseContext not found"), e
}

function o(e) {
  let {
    children: t,
    guildProductListingId: r,
    ...a
  } = e, s = (0, u.useStateFromStores)([i.default], () => i.default.getGuildProduct(r));
  return l()(null != s, "guildProductListing cannot be null"), (0, n.jsx)(c.Provider, {
    value: {
      guildProductListing: s,
      ...a
    },
    children: t
  })
}