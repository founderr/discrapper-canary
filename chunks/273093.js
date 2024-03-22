"use strict";
n.r(t), n.d(t, {
  useGuildProductPurchaseContext: function() {
    return o
  },
  GuildProductPurchaseContextProvider: function() {
    return c
  }
});
var r = n("37983"),
  u = n("884691"),
  a = n("627445"),
  i = n.n(a),
  l = n("446674"),
  s = n("565559");
let d = u.createContext(void 0);

function o() {
  let e = u.useContext(d);
  return i(null != e, "GuildProductPurchaseContext not found"), e
}

function c(e) {
  let {
    children: t,
    guildProductListingId: n,
    ...u
  } = e, a = (0, l.useStateFromStores)([s.default], () => s.default.getGuildProduct(n));
  return i(null != a, "guildProductListing cannot be null"), (0, r.jsx)(d.Provider, {
    value: {
      guildProductListing: a,
      ...u
    },
    children: t
  })
}