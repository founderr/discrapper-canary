t.d(s, {
    E: function () {
        return l;
    }
}),
    t(47120);
var n = t(470079),
    a = t(170401),
    i = t(996733),
    r = t(394644),
    o = t(726985);
function l() {
    let e = (0, i.Z7)(),
        s = (0, r.Pt)(),
        t = n.useRef(new a.Z((0, r.ji)(s))),
        [l, c] = n.useState(!1),
        [d, u] = n.useState(o.QF),
        _ = n.useCallback(async (e) => {
            u(await t.current.search(e.trim())), c(!0);
        }, []);
    return (
        n.useEffect(() => {
            '' === e || e.length < 2 ? (u(o.QF), c(!1)) : _(e);
        }, [e, _]),
        {
            hasSearchResults: l,
            searchResults: d
        }
    );
}
