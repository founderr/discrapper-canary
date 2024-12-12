r.d(n, {
    Z: function () {
        return c;
    }
});
var i = r(47120);
var a = r(192379),
    s = r(442837),
    o = r(232567),
    l = r(110924),
    u = r(314897);
function c() {
    let [e, n] = (0, s.Wu)([u.default], () => [u.default.isAuthenticated(), null != u.default.getAnalyticsToken()]),
        r = (0, l.Z)(e);
    a.useEffect(() => {
        !r && e && !n && o.k({ withAnalyticsToken: !0 });
    }, [r, e, n]);
}
