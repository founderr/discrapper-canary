n.d(t, {
    k0: function () {
        return l;
    },
    sp: function () {
        return s;
    }
});
var r = n(200651),
    a = n(192379);
let i = a.createContext(null);
function s() {
    return a.useContext(i);
}
function l(e) {
    let { newValue: t, children: n } = e,
        l = s(),
        o = a.useMemo(
            () => ({
                ...l,
                ...t
            }),
            [l, t]
        );
    return (0, r.jsx)(i.Provider, {
        value: o,
        children: n
    });
}
