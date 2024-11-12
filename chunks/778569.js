n.d(t, {
    Z: function () {
        return a;
    }
}),
    n(47120);
var i = n(192379),
    r = n(81063);
let l = ['embedded_cover', 'embedded_background'];
function a(e) {
    let { applicationId: t, size: n, names: a = l } = e,
        [o, s] = i.useState(null),
        [c, d] = i.useState(!0),
        u = (0, r.getAssetImage)(t, o, n);
    return (
        i.useEffect(() => {
            (0, r.getAssets)(t).then((e) => {
                for (let [t, n] of (d(!1), Object.entries(e)))
                    if (null != n && '' !== n.id && a.includes(n.name)) {
                        s(n.id);
                        return;
                    }
            });
        }, [t]),
        {
            url: u,
            state: c ? 'loading' : null != u ? 'fetched' : 'not-found'
        }
    );
}
