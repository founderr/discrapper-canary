e.d(n, {
    Z: function () {
        return d;
    }
});
var i = e(442837),
    r = e(846027),
    o = e(314897),
    a = e(131951),
    u = e(981631),
    l = e(65154);
function d(t) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.Yn.DEFAULT,
        e = (0, i.e7)([o.default], () => o.default.getId()),
        d = (0, i.e7)([a.Z], () => a.Z.supports(l.AN.DISABLE_VIDEO) && a.Z.isVideoEnabled()),
        s = (0, i.e7)([a.Z], () => a.Z.isLocalVideoDisabled(e, n), [e, n]),
        c = null == t || t === e;
    return [
        c && (d || s),
        s,
        (t) => {
            let i = t ? u.ZUi.DISABLED : u.ZUi.MANUAL_ENABLED;
            r.Z.setDisableLocalVideo(e, i, n);
        }
    ];
}
