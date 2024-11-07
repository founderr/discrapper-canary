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
        [c, u] = i.useState(!0),
        d = (0, r.getAssetImage)(t, o, n);
    return (
        i.useEffect(() => {
            (0, r.getAssets)(t).then((e) => {
                for (let [t, n] of (u(!1), Object.entries(e)))
                    if (null != n && '' !== n.id && a.includes(n.name)) {
                        s(n.id);
                        return;
                    }
            });
        }, [t]),
        {
            url: d,
            state: c ? 'loading' : null != d ? 'fetched' : 'not-found'
        }
    );
}
