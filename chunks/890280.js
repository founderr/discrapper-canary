e.d(t, {
    Z: function () {
        return c;
    }
});
var o = e(192379),
    s = e(442837),
    l = e(110924),
    u = e(317381);
function c(n) {
    let { applicationId: t, channelId: e, launchingComponentId: c, onSubmissionComplete: r } = n,
        a = (0, s.e7)([u.ZP], () => u.ZP.getLaunchState(t, e)),
        i = null != a && a.isLaunching && a.componentId === c,
        d = (0, l.Z)(i);
    return (
        o.useEffect(() => {
            !i && d && (null == r || r());
        }, [i, d, r]),
        {
            submitting: i,
            wasSubmitting: d
        }
    );
}
