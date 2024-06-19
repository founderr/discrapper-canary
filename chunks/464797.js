t.d(n, {
  R: function() {
    return d
  },
  _: function() {
    return u
  }
});
var r = t(735250),
  s = t(470079),
  l = t(512722),
  a = t.n(l),
  o = t(442837),
  i = t(240864);
let c = s.createContext(void 0);

function u() {
  let e = s.useContext(c);
  return a()(null != e, "GuildProductPurchaseContext not found"), e
}

function d(e) {
  let {
    children: n,
    guildProductListingId: t,
    ...s
  } = e, l = (0, o.e7)([i.Z], () => i.Z.getGuildProduct(t));
  return a()(null != l, "guildProductListing cannot be null"), (0, r.jsx)(c.Provider, {
    value: {
      guildProductListing: l,
      ...s
    },
    children: n
  })
}