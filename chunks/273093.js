"use strict";
n.r(t), n.d(t, {
  useGuildProductPurchaseContext: function() {
    return c
  },
  GuildProductPurchaseContextProvider: function() {
    return d
  }
});
var u = n("37983"),
  r = n("884691"),
  a = n("627445"),
  i = n.n(a),
  l = n("446674"),
  s = n("565559");
let o = r.createContext(void 0);

function c() {
  let e = r.useContext(o);
  return i(null != e, "GuildProductPurchaseContext not found"), e
}

function d(e) {
  let {
    children: t,
    guildProductListingId: n,
    ...r
  } = e, a = (0, l.useStateFromStores)([s.default], () => s.default.getGuildProduct(n));
  return i(null != a, "guildProductListing cannot be null"), (0, u.jsx)(o.Provider, {
    value: {
      guildProductListing: a,
      ...r
    },
    children: t
  })
}