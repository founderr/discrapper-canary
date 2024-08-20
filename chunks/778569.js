n.d(t, {
    Z: function () {
        return c;
    }
}),
    n(47120);
var r = n(470079),
    o = n(81063);
let a = ['embedded_cover', 'embedded_background'];
function c(e) {
    let { applicationId: t, size: n, names: c = a } = e,
        [i, l] = r.useState(null),
        [u, s] = r.useState(!0),
        E = (0, o.getAssetImage)(t, i, n);
    return (
        r.useEffect(() => {
            (0, o.getAssets)(t).then((e) => {
                for (let [t, n] of (s(!1), Object.entries(e)))
                    if (null != n && '' !== n.id && c.includes(n.name)) {
                        l(n.id);
                        return;
                    }
            });
        }, [t]),
        {
            url: E,
            state: u ? 'loading' : null != E ? 'fetched' : 'not-found'
        }
    );
}
