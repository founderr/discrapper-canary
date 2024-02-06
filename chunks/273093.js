"use strict";
n.r(t), n.d(t, {
  useGuildProductPurchaseContext: function() {
    return c
  },
  GuildProductPurchaseContextProvider: function() {
    return d
  }
});
var r = n("37983"),
  s = n("884691"),
  u = n("627445"),
  o = n.n(u),
  l = n("446674"),
  i = n("565559");
let a = s.createContext(void 0);

function c() {
  let e = s.useContext(a);
  return o(null != e, "GuildProductPurchaseContext not found"), e
}

function d(e) {
  let {
    children: t,
    guildProductListingId: n,
    ...s
  } = e, u = (0, l.useStateFromStores)([i.default], () => i.default.getGuildProduct(n));
  return o(null != u, "guildProductListing cannot be null"), (0, r.jsx)(a.Provider, {
    value: {
      guildProductListing: u,
      ...s
    },
    children: t
  })
}