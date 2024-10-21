t.d(n, {
    H: function () {
        return a;
    },
    R: function () {
        return s;
    }
});
var r = t(192379),
    i = t(442837),
    l = t(584825),
    o = t(17079),
    u = t(281320);
function s(e, n) {
    let t = (0, i.e7)([u.Z], () => u.Z.getPriceTiersForGuildAndType(e, n)),
        l = (0, i.e7)([u.Z], () => u.Z.getPriceTiersFetchStateForGuildAndType(e, n));
    return (
        r.useEffect(() => {
            l === u.M.NOT_FETCHED && (0, o.T)(e, n);
        }, [e, l, n]),
        {
            loading: l === u.M.FETCHING,
            priceTiers: t
        }
    );
}
function a(e) {
    let { fetchSubscriptionsSettings: n, loading: t, error: i } = (0, l.JH)();
    r.useEffect(() => {
        n(e);
    }, [n, e]);
    let o = (0, l.YB)(e);
    return {
        loaded: null != o && !t,
        subscriptionsSettings: o,
        loading: t,
        error: i
    };
}
