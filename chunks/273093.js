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
  s = n("627445"),
  i = n.n(s),
  l = n("446674"),
  o = n("565559");
let a = u.createContext(void 0);

function c() {
  let e = u.useContext(a);
  return i(null != e, "GuildProductPurchaseContext not found"), e
}

function d(e) {
  let {
    children: t,
    guildProductListingId: n,
    ...u
  } = e, s = (0, l.useStateFromStores)([o.default], () => o.default.getGuildProduct(n));
  return i(null != s, "guildProductListing cannot be null"), (0, r.jsx)(a.Provider, {
    value: {
      guildProductListing: s,
      ...u
    },
    children: t
  })
}