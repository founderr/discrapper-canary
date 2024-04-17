"use strict";
t.r(n), t.d(n, {
  GuildProductPurchaseContextProvider: function() {
    return d
  },
  useGuildProductPurchaseContext: function() {
    return c
  }
});
var a = t("735250"),
  r = t("470079"),
  s = t("512722"),
  o = t.n(s),
  i = t("442837"),
  u = t("240864");
let l = r.createContext(void 0);

function c() {
  let e = r.useContext(l);
  return o()(null != e, "GuildProductPurchaseContext not found"), e
}

function d(e) {
  let {
    children: n,
    guildProductListingId: t,
    ...r
  } = e, s = (0, i.useStateFromStores)([u.default], () => u.default.getGuildProduct(t));
  return o()(null != s, "guildProductListing cannot be null"), (0, a.jsx)(l.Provider, {
    value: {
      guildProductListing: s,
      ...r
    },
    children: n
  })
}