t.d(n, {
  R: function() {
    return d
  },
  _: function() {
    return u
  }
});
var r = t(735250),
  o = t(470079),
  a = t(512722),
  l = t.n(a),
  s = t(442837),
  i = t(240864);
let c = o.createContext(void 0);

function u() {
  let e = o.useContext(c);
  return l()(null != e, "GuildProductPurchaseContext not found"), e
}

function d(e) {
  let {
    children: n,
    guildProductListingId: t,
    ...o
  } = e, a = (0, s.e7)([i.Z], () => i.Z.getGuildProduct(t));
  return l()(null != a, "guildProductListing cannot be null"), (0, r.jsx)(c.Provider, {
    value: {
      guildProductListing: a,
      ...o
    },
    children: n
  })
}