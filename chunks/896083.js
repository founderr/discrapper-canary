n.d(t, {
    F: function () {
        return l;
    }
}),
    n(47120);
var r = n(470079),
    i = n(295141);
let l = () => {
    let [e, t] = r.useState(!1),
        [n, l] = r.useState(null);
    return {
        loading: e,
        error: n,
        getTrialPurchaseEligibility: r.useCallback(async (e, n, r) => {
            t(!0), l(null);
            try {
                return await (0, i.LB)(e, n, r);
            } catch (e) {
                l(e);
            } finally {
                t(!1);
            }
        }, [])
    };
};
