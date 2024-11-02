n.d(t, {
    F: function () {
        return l;
    }
}),
    n(47120);
var i = n(192379),
    r = n(295141);
let l = () => {
    let [e, t] = i.useState(!1),
        [n, l] = i.useState(null);
    return {
        loading: e,
        error: n,
        getTrialPurchaseEligibility: i.useCallback(async (e, n, i) => {
            t(!0), l(null);
            try {
                return await (0, r.LB)(e, n, i);
            } catch (e) {
                l(e);
            } finally {
                t(!1);
            }
        }, [])
    };
};
