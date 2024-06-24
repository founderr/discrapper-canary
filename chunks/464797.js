r.d(n, {
  R: function() {
    return d
  },
  _: function() {
    return u
  }
});
var t = r(735250),
  o = r(470079),
  a = r(512722),
  i = r.n(a),
  l = r(442837),
  s = r(240864);
let c = o.createContext(void 0);

function u() {
  let e = o.useContext(c);
  return i()(null != e, "GuildProductPurchaseContext not found"), e
}

function d(e) {
  let {
    children: n,
    guildProductListingId: r,
    ...o
  } = e, a = (0, l.e7)([s.Z], () => s.Z.getGuildProduct(r));
  return i()(null != a, "guildProductListing cannot be null"), (0, t.jsx)(c.Provider, {
    value: {
      guildProductListing: a,
      ...o
    },
    children: n
  })
}