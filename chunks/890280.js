n.d(e, {
    Z: function () {
        return i;
    }
});
var o = n(192379),
    a = n(442837),
    r = n(110924),
    c = n(317381);
function i(t) {
    let { applicationId: e, channelId: n, launchingComponentId: i, onSubmissionComplete: u } = t,
        l = (0, a.e7)([c.ZP], () => c.ZP.getLaunchState(e, n)),
        s = null != l && l.isLaunching && l.componentId === i,
        E = (0, r.Z)(s);
    return (
        o.useEffect(() => {
            !s && E && (null == u || u());
        }, [s, E, u]),
        {
            submitting: s,
            wasSubmitting: E
        }
    );
}
