t.d(n, {
    Z: function () {
        return r;
    }
}), t(627494), t(757143);
var i = t(470079), l = t(812236);
function r(e) {
    let {
            applicationId: n,
            channel: t
        } = e, r = (0, l.SY)(t, n).commands[0];
    return i.useMemo(() => {
        let e = null == r ? void 0 : r.name;
        if (null != e)
            return (e.charAt(0).toLocaleUpperCase() + e.slice(1)).replaceAll('_', ' ');
    }, [r]);
}
