t.d(n, {
    Z: function () {
        return r;
    }
});
var i = t(192379),
    l = t(442837),
    a = t(110924),
    o = t(317381);
function r(e) {
    let { applicationId: n, channelId: t, launchingComponentId: r, onSubmissionComplete: s } = e,
        c = (0, l.e7)([o.ZP], () => o.ZP.getLaunchState(n, t)),
        d = null != c && c.isLaunching && c.componentId === r,
        u = (0, a.Z)(d);
    return (
        i.useEffect(() => {
            !d && u && (null == s || s());
        }, [d, u, s]),
        {
            submitting: d,
            wasSubmitting: u
        }
    );
}
