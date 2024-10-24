n.d(t, {
    k0: function () {
        return l;
    },
    sp: function () {
        return i;
    }
});
var r = n(200651),
    s = n(192379);
let a = s.createContext(null);
function i() {
    return s.useContext(a);
}
function l(e) {
    let { newValue: t, children: n } = e,
        l = i(),
        o = s.useMemo(
            () => ({
                ...l,
                ...t
            }),
            [l, t]
        );
    return (0, r.jsx)(a.Provider, {
        value: o,
        children: n
    });
}
