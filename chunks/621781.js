e.d(n, {
    Z: function () {
        return o;
    }
});
var i = e(192379),
    l = e(442837),
    a = e(706454),
    r = e(356659),
    u = e(388032);
function o() {
    let t = (0, l.e7)([a.default], () => a.default.locale);
    return i.useMemo(
        () => [
            {
                value: r.OT.SECONDS_30,
                label: u.intl.formatToPlainString(u.t['bTFv//'], { count: 30 })
            },
            {
                value: r.OT.MINUTES_1,
                label: u.intl.formatToPlainString(u.t.ICo9Nj, { count: 1 })
            },
            {
                value: r.OT.MINUTES_2,
                label: u.intl.formatToPlainString(u.t.ICo9Nj, { count: 2 })
            }
        ],
        [t]
    );
}
