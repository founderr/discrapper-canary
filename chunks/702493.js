n.d(t, {
    Z: function () {
        return u;
    }
});
var r = n(47120);
var i = n(470079),
    a = n(442837),
    o = n(232567),
    s = n(110924),
    l = n(314897);
function u() {
    let [e, t] = (0, a.Wu)([l.default], () => [l.default.isAuthenticated(), null != l.default.getAnalyticsToken()]),
        n = (0, s.Z)(e);
    i.useEffect(() => {
        !n && e && !t && o.k({ withAnalyticsToken: !0 });
    }, [n, e, t]);
}
