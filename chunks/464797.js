r.d(n, {
    R: function () {
        return u;
    },
    _: function () {
        return d;
    }
});
var t = r(735250),
    a = r(470079),
    o = r(512722),
    i = r.n(o),
    s = r(442837),
    l = r(240864);
let c = a.createContext(void 0);
function d() {
    let e = a.useContext(c);
    return i()(null != e, 'GuildProductPurchaseContext not found'), e;
}
function u(e) {
    let { children: n, guildProductListingId: r, ...a } = e,
        o = (0, s.e7)([l.Z], () => l.Z.getGuildProduct(r));
    return (
        i()(null != o, 'guildProductListing cannot be null'),
        (0, t.jsx)(c.Provider, {
            value: {
                guildProductListing: o,
                ...a
            },
            children: n
        })
    );
}
