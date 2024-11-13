n.d(t, {
    Z: function () {
        return o;
    }
}),
    n(47120);
var i = n(192379),
    r = n(81063);
let l = ['embedded_cover', 'embedded_background'];
function o(e) {
    let { applicationId: t, size: n, names: o = l } = e,
        [a, s] = i.useState(null),
        [u, c] = i.useState(!0),
        d = (0, r.getAssetImage)(t, a, n);
    return (
        i.useEffect(() => {
            (0, r.getAssets)(t).then((e) => {
                for (let [t, n] of (c(!1), Object.entries(e)))
                    if (null != n && '' !== n.id && o.includes(n.name)) {
                        s(n.id);
                        return;
                    }
            });
        }, [t]),
        {
            url: d,
            state: u ? 'loading' : null != d ? 'fetched' : 'not-found'
        }
    );
}
