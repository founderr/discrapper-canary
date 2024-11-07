t.d(e, {
    Z: function () {
        return o;
    }
});
var i = t(442837),
    l = t(846027),
    r = t(314897),
    u = t(131951),
    a = t(981631),
    d = t(65154);
function o(n) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.Yn.DEFAULT,
        t = (0, i.e7)([r.default], () => r.default.getId()),
        o = (0, i.e7)([u.Z], () => u.Z.supports(d.AN.DISABLE_VIDEO) && u.Z.isVideoEnabled()),
        s = (0, i.e7)([u.Z], () => u.Z.isLocalVideoDisabled(t, e), [t, e]),
        c = null == n || n === t;
    return [
        c && (o || s),
        s,
        (n) => {
            let i = n ? a.ZUi.DISABLED : a.ZUi.MANUAL_ENABLED;
            l.Z.setDisableLocalVideo(t, i, e);
        }
    ];
}
