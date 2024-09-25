n.d(t, {
    $: function () {
        return o;
    }
});
var r = n(47120);
var i = n(470079),
    a = n(881052);
function o(e) {
    let { onError: t, onSuccess: n, report: r } = e,
        [o, s] = i.useState(!1),
        l = o;
    return {
        reportFalsePositive: i.useCallback(async () => {
            if (!l) {
                s(!0);
                try {
                    await r(), null == n || n();
                } catch (n) {
                    let e = new a.Hx(n);
                    null == t || t(e);
                } finally {
                    s(!1);
                }
            }
        }, [l, t, n, r]),
        isReportFalsePositiveLoading: o
    };
}
