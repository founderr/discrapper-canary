"use strict";
n.r(t), n.d(t, {
  GuildProductPurchaseContextProvider: function() {
    return d
  },
  useGuildProductPurchaseContext: function() {
    return c
  }
});
var r = n("735250"),
  s = n("470079"),
  u = n("512722"),
  a = n.n(u),
  l = n("442837"),
  i = n("240864");
let o = s.createContext(void 0);

function c() {
  let e = s.useContext(o);
  return a()(null != e, "GuildProductPurchaseContext not found"), e
}

function d(e) {
  let {
    children: t,
    guildProductListingId: n,
    ...s
  } = e, u = (0, l.useStateFromStores)([i.default], () => i.default.getGuildProduct(n));
  return a()(null != u, "guildProductListing cannot be null"), (0, r.jsx)(o.Provider, {
    value: {
      guildProductListing: u,
      ...s
    },
    children: t
  })
}