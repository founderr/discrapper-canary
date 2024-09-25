n.d(t, {
    Gt: function () {
        return d;
    },
    LZ: function () {
        return c;
    },
    ZP: function () {
        return E;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(348327),
    s = n.n(o),
    l = n(392711),
    u = n.n(l);
let c = a.createContext([]);
function d(e) {
    let { children: t, value: n } = e;
    return (0, i.jsx)(c.Provider, {
        value: n,
        children: t
    });
}
function _(e, t) {
    return 0 === t.length ? e : [...e, ...u().flatten(t)];
}
function E() {
    for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
    let [i, o] = a.useState(n),
        l = a.useContext(c),
        u = a.useMemo(() => _(l, i), [i, l]),
        d = a.useMemo(() => _(l, i.slice(0, i.length - 1)), [i, l]);
    return (
        a.useEffect(() => {
            !s()(n, i) && o(n);
        }, [n]),
        {
            analyticsLocations: u,
            sourceAnalyticsLocations: d,
            newestAnalyticsLocation: null !== (e = u[u.length - 1]) && void 0 !== e ? e : null
        }
    );
}
