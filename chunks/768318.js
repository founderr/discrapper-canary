n.d(t, {
    Z: function () {
        return l;
    }
});
var i = n(192379),
    r = n(584825);
function l(e, t) {
    let n = (0, r.oC)(t);
    return i.useMemo(() => {
        var e;
        return null != n && (null == n.max_num_active_trial_users || n.max_num_active_trial_users > (null !== (e = n.num_active_trial_users) && void 0 !== e ? e : 0));
    }, [n]);
}
