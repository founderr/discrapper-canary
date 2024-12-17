n.d(t, {
    Z: function () {
        return l;
    }
}),
    n(47120);
var r = n(192379),
    i = n(81063);
let u = ['embedded_cover', 'embedded_background'];
function l(e) {
    let { applicationId: t, size: n, names: l = u } = e,
        [s, o] = r.useState(null),
        [d, a] = r.useState(!0),
        E = (0, i.getAssetImage)(t, s, n);
    return (
        r.useEffect(() => {
            (0, i.getAssets)(t).then((e) => {
                for (let [t, n] of (a(!1), Object.entries(e)))
                    if (null != n && '' !== n.id && l.includes(n.name)) {
                        o(n.id);
                        return;
                    }
            });
        }, [t]),
        {
            url: E,
            state: d ? 'loading' : null != E ? 'fetched' : 'not-found'
        }
    );
}
