t.d(n, {
    Z: function () {
        return d;
    }
});
var i = t(442837),
    r = t(846027),
    a = t(314897),
    o = t(131951),
    l = t(981631),
    u = t(65154);
function d(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.Yn.DEFAULT,
        t = (0, i.e7)([a.default], () => a.default.getId()),
        d = (0, i.e7)([o.Z], () => o.Z.supports(u.AN.DISABLE_VIDEO) && o.Z.isVideoEnabled()),
        s = (0, i.e7)([o.Z], () => o.Z.isLocalVideoDisabled(t, n), [t, n]),
        c = null == e || e === t;
    return [
        c && (d || s),
        s,
        (e) => {
            let i = e ? l.ZUi.DISABLED : l.ZUi.MANUAL_ENABLED;
            r.Z.setDisableLocalVideo(t, i, n);
        }
    ];
}
