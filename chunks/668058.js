n.d(t, {
    $: function () {
        return l;
    }
}),
    n(47120);
var i = n(192379),
    r = n(881052);
function l(e) {
    let { onError: t, onSuccess: n, report: l } = e,
        [a, o] = i.useState(!1);
    return {
        reportFalsePositive: i.useCallback(async () => {
            if (!a) {
                o(!0);
                try {
                    await l(), null == n || n();
                } catch (n) {
                    let e = new r.Hx(n);
                    null == t || t(e);
                } finally {
                    o(!1);
                }
            }
        }, [a, t, n, l]),
        isReportFalsePositiveLoading: a
    };
}
