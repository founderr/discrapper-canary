t.d(n, {
    Z: function () {
        return l;
    }
});
var i = t(442837),
    r = t(846027),
    a = t(314897),
    s = t(131951),
    o = t(981631),
    d = t(65154);
function l(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.Yn.DEFAULT,
        t = (0, i.e7)([a.default], () => a.default.getId()),
        l = (0, i.e7)([s.Z], () => s.Z.supports(d.AN.DISABLE_VIDEO) && s.Z.isVideoEnabled()),
        u = (0, i.e7)([s.Z], () => s.Z.isLocalVideoDisabled(t, n), [t, n]),
        c = null == e || e === t;
    return [
        c && (l || u),
        u,
        (e) => {
            let i = e ? o.ZUi.DISABLED : o.ZUi.MANUAL_ENABLED;
            r.Z.setDisableLocalVideo(t, i, n);
        }
    ];
}
