n.d(t, {
    Z: function () {
        return d;
    },
    s: function () {
        return c;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    s = n(512722),
    o = n.n(s),
    l = n(333866);
let a = i.createContext(void 0);
function c() {
    let e = i.useContext(a);
    return o()(null != e, 'must use useGuildShopSortContext within a GuildShopSortOptionsContextProvider'), e;
}
function d(e) {
    let { children: t, defaultSortOption: n = l.zJ.NEWEST_ARRIVALS } = e,
        [s, o] = i.useState(n);
    return (0, r.jsx)(a.Provider, {
        value: {
            sortOption: s,
            setSortOption: o,
            onReset: () => o(n)
        },
        children: t
    });
}
