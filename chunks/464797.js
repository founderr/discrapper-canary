"use strict";
n.r(t), n.d(t, {
  GuildProductPurchaseContextProvider: function() {
    return o
  },
  useGuildProductPurchaseContext: function() {
    return d
  }
});
var r = n("735250"),
  s = n("470079"),
  a = n("512722"),
  u = n.n(a),
  l = n("442837"),
  i = n("240864");
let c = s.createContext(void 0);

function d() {
  let e = s.useContext(c);
  return u()(null != e, "GuildProductPurchaseContext not found"), e
}

function o(e) {
  let {
    children: t,
    guildProductListingId: n,
    ...s
  } = e, a = (0, l.useStateFromStores)([i.default], () => i.default.getGuildProduct(n));
  return u()(null != a, "guildProductListing cannot be null"), (0, r.jsx)(c.Provider, {
    value: {
      guildProductListing: a,
      ...s
    },
    children: t
  })
}