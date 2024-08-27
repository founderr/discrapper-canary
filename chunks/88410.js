t.d(n, {
    Z: function () {
        return o;
    }
});
var i = t(470079),
    a = t(812236),
    l = t(783097);
function o(e) {
    let { applicationId: n, channel: t } = e,
        o = (0, a.SY)(t, n).commands[0];
    return i.useMemo(() => {
        var e;
        return (0, l.XZ)(null !== (e = null == o ? void 0 : o.name) && void 0 !== e ? e : '');
    }, [null == o ? void 0 : o.name]);
}
