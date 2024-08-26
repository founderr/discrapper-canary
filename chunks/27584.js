n.d(t, {
    Z: function () {
        return u;
    }
});
var r = n(442837),
    i = n(846027),
    a = n(314897),
    o = n(131951),
    s = n(981631),
    l = n(65154);
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.Yn.DEFAULT,
        n = (0, r.e7)([a.default], () => a.default.getId()),
        u = (0, r.e7)([o.Z], () => o.Z.supports(l.AN.DISABLE_VIDEO) && o.Z.isVideoEnabled()),
        d = (0, r.e7)([o.Z], () => o.Z.isLocalVideoDisabled(n, t), [n, t]),
        c = null == e || e === n;
    return [
        c && (u || d),
        d,
        (e) => {
            let r = e ? s.ZUi.DISABLED : s.ZUi.MANUAL_ENABLED;
            i.Z.setDisableLocalVideo(n, r, t);
        }
    ];
}
