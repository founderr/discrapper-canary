t.d(n, {
    Z: function () {
        return l;
    }
});
var i = t(442837),
    r = t(846027),
    o = t(314897),
    a = t(131951),
    u = t(981631),
    s = t(65154);
function l(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.Yn.DEFAULT,
        t = (0, i.e7)([o.default], () => o.default.getId()),
        l = (0, i.e7)([a.Z], () => a.Z.supports(s.AN.DISABLE_VIDEO) && a.Z.isVideoEnabled()),
        d = (0, i.e7)([a.Z], () => a.Z.isLocalVideoDisabled(t, n), [t, n]),
        E = null == e || e === t;
    return [
        E && (l || d),
        d,
        (e) => {
            let i = e ? u.ZUi.DISABLED : u.ZUi.MANUAL_ENABLED;
            r.Z.setDisableLocalVideo(t, i, n);
        }
    ];
}
