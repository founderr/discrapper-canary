t.d(s, {
  Z: function() {
    return d
  },
  s: function() {
    return c
  }
}), t(47120);
var n = t(735250),
  r = t(470079),
  i = t(512722),
  l = t.n(i),
  o = t(333866);
let a = r.createContext(void 0);

function c() {
  let e = r.useContext(a);
  return l()(null != e, "must use useGuildShopSortContext within a GuildShopSortOptionsContextProvider"), e
}

function d(e) {
  let {
    children: s,
    defaultSortOption: t = o.zJ.NEWEST_ARRIVALS
  } = e, [i, l] = r.useState(t);
  return (0, n.jsx)(a.Provider, {
    value: {
      sortOption: i,
      setSortOption: l,
      onReset: () => l(t)
    },
    children: s
  })
}