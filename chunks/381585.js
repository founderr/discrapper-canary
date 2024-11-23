n.d(t, {
    k0: function () {
        return s;
    },
    sp: function () {
        return l;
    }
});
var r = n(200651),
    a = n(192379);
let i = a.createContext(null);
function l() {
    return a.useContext(i);
}
function s(e) {
    let { newValue: t, children: n } = e,
        s = l(),
        o = a.useMemo(
            () => ({
                ...s,
                ...t
            }),
            [s, t]
        );
    return (0, r.jsx)(i.Provider, {
        value: o,
        children: n
    });
}
