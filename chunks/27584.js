t.d(e, {
    Z: function () {
        return d;
    }
});
var i = t(442837),
    r = t(846027),
    l = t(314897),
    u = t(131951),
    a = t(981631),
    o = t(65154);
function d(n) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.Yn.DEFAULT,
        t = (0, i.e7)([l.default], () => l.default.getId()),
        d = (0, i.e7)([u.Z], () => u.Z.supports(o.AN.DISABLE_VIDEO) && u.Z.isVideoEnabled()),
        c = (0, i.e7)([u.Z], () => u.Z.isLocalVideoDisabled(t, e), [t, e]),
        s = null == n || n === t;
    return [
        s && (d || c),
        c,
        (n) => {
            let i = n ? a.ZUi.DISABLED : a.ZUi.MANUAL_ENABLED;
            r.Z.setDisableLocalVideo(t, i, e);
        }
    ];
}
