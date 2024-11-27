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
        [o, s] = r.useState(null),
        [a, d] = r.useState(!0),
        c = (0, i.getAssetImage)(t, o, n);
    return (
        r.useEffect(() => {
            (0, i.getAssets)(t).then((e) => {
                for (let [t, n] of (d(!1), Object.entries(e)))
                    if (null != n && '' !== n.id && l.includes(n.name)) {
                        s(n.id);
                        return;
                    }
            });
        }, [t]),
        {
            url: c,
            state: a ? 'loading' : null != c ? 'fetched' : 'not-found'
        }
    );
}
