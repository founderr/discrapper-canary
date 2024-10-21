t.d(s, {
    Z: function () {
        return o;
    }
}),
    t(47120);
var n = t(192379),
    a = t(304445),
    i = t(997383);
let r = [];
function o(e) {
    let { visible: s, autocompleterResultTypes: t, autocompleterOptions: o, autocompleterBeforeCreateSearchContext: l } = e,
        [c, d] = n.useState(''),
        [_, u] = n.useState(r),
        E = n.useCallback((e, s) => {
            '' === (s = s.trim()).trim() ? u(r) : u(e);
        }, []);
    n.useEffect(
        () =>
            a.Z.addRouteChangeListener(() => {
                d('');
            }),
        []
    );
    let [T] = n.useState(() => new i.Z(E, t, void 0, o));
    return (
        n.useEffect(() => {
            s ? (null == l || l(T), T.createSearchContext()) : (T.clean(), d(''));
        }, [s, T, l]),
        {
            queryResults: _,
            query: c,
            updateQuery: n.useCallback(
                (e) => {
                    d(e), T.search(e);
                },
                [T]
            )
        }
    );
}
