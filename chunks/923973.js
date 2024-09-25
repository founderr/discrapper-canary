n.d(t, {
    Z: function () {
        return u;
    }
});
var r = n(47120);
var i = n(392711),
    a = n.n(i),
    o = n(442837),
    s = n(131951),
    l = n(65154);
function u() {
    let { enabled: e, cameraUnavailable: t } = (0, o.cj)([s.Z], () => {
        var e, t;
        let n = null === (t = null === (e = a()(s.Z.getVideoDevices()).values().first()) || void 0 === e ? void 0 : e.disabled) || void 0 === t || t;
        return {
            enabled: s.Z.isVideoEnabled(),
            cameraUnavailable: n || !s.Z.supports(l.AN.VIDEO)
        };
    });
    return {
        enabled: e,
        cameraUnavailable: t
    };
}
