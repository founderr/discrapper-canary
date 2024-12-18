n.d(t, {
    Z: function () {
        return a;
    }
});
var i = n(192379),
    r = n(817460),
    o = n(293810),
    l = n(474936),
    u = n(388032);
function a(e) {
    return i.useMemo(() => {
        var t;
        let n = o.DN.map((e) => ({
                value: e,
                label: e.interval === l.rV.DAY && 7 === e.interval_count ? u.intl.formatToPlainString(u.t.XfSsr6, { defaultLimit: (0, r.iG)(e) }) : (0, r.iG)(e),
                isDefault: e.interval === l.rV.DAY && 7 === e.interval_count
            })),
            i = null != e ? (null === (t = n.find((t) => null != t.value && t.value.interval === e.interval && t.value.interval_count === e.interval_count)) || void 0 === t ? void 0 : t.value) : e;
        return {
            options: n,
            selectedOption: i
        };
    }, [e]);
}
