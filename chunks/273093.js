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
  u = n("884691"),
  i = n("627445"),
  a = n.n(i),
  l = n("446674"),
  s = n("565559");
let o = u.createContext(void 0);

function c() {
  let e = u.useContext(o);
  return a(null != e, "GuildProductPurchaseContext not found"), e
}

function d(e) {
  let {
    children: t,
    guildProductListingId: n,
    ...u
  } = e, i = (0, l.useStateFromStores)([s.default], () => s.default.getGuildProduct(n));
  return a(null != i, "guildProductListing cannot be null"), (0, r.jsx)(o.Provider, {
    value: {
      guildProductListing: i,
      ...u
    },
    children: t
  })
}