t.d(n, {
    Z: function () {
        return s;
    }
});
var r = t(192379),
    i = t(817460),
    l = t(293810),
    o = t(474936),
    u = t(689938);
function s(e) {
    return r.useMemo(() => {
        var n;
        let t = l.DN.map((e) => ({
                value: e,
                label: e.interval === o.rV.DAY && 7 === e.interval_count ? u.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_TRIAL_TIME_LIMIT_DEFAULT_OPTION.format({ defaultLimit: (0, i.iG)(e) }) : (0, i.iG)(e),
                isDefault: e.interval === o.rV.DAY && 7 === e.interval_count
            })),
            r = null != e ? (null === (n = t.find((n) => null != n.value && n.value.interval === e.interval && n.value.interval_count === e.interval_count)) || void 0 === n ? void 0 : n.value) : e;
        return {
            options: t,
            selectedOption: r
        };
    }, [e]);
}
