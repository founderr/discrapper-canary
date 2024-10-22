r.d(t, {
    k0: function () {
        return l;
    },
    sp: function () {
        return i;
    }
});
var s = r(200651),
    n = r(192379);
let a = n.createContext(null);
function i() {
    return n.useContext(a);
}
function l(e) {
    let { newValue: t, children: r } = e,
        l = i(),
        o = n.useMemo(
            () => ({
                ...l,
                ...t
            }),
            [l, t]
        );
    return (0, s.jsx)(a.Provider, {
        value: o,
        children: r
    });
}
