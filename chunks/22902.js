t.d(n, {
    Z: function () {
        return a;
    }
});
var i = t(192379),
    r = t(817460),
    l = t(293810),
    o = t(474936),
    u = t(388032);
function a(e) {
    return i.useMemo(() => {
        var n;
        let t = l.DN.map((e) => ({
                value: e,
                label: e.interval === o.rV.DAY && 7 === e.interval_count ? u.intl.formatToPlainString(u.t.XfSsr6, { defaultLimit: (0, r.iG)(e) }) : (0, r.iG)(e),
                isDefault: e.interval === o.rV.DAY && 7 === e.interval_count
            })),
            i = null != e ? (null === (n = t.find((n) => null != n.value && n.value.interval === e.interval && n.value.interval_count === e.interval_count)) || void 0 === n ? void 0 : n.value) : e;
        return {
            options: t,
            selectedOption: i
        };
    }, [e]);
}
