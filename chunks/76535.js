e.d(n, {
    H: function () {
        return s;
    },
    R: function () {
        return a;
    }
});
var i = e(192379),
    r = e(442837),
    l = e(584825),
    o = e(17079),
    u = e(281320);
function a(t, n) {
    let e = (0, r.e7)([u.Z], () => u.Z.getPriceTiersForGuildAndType(t, n)),
        l = (0, r.e7)([u.Z], () => u.Z.getPriceTiersFetchStateForGuildAndType(t, n));
    return (
        i.useEffect(() => {
            l === u.M.NOT_FETCHED && (0, o.T)(t, n);
        }, [t, l, n]),
        {
            loading: l === u.M.FETCHING,
            priceTiers: e
        }
    );
}
function s(t) {
    let { fetchSubscriptionsSettings: n, loading: e, error: r } = (0, l.JH)();
    i.useEffect(() => {
        n(t);
    }, [n, t]);
    let o = (0, l.YB)(t);
    return {
        loaded: null != o && !e,
        subscriptionsSettings: o,
        loading: e,
        error: r
    };
}
