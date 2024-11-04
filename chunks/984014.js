n.d(t, {
    Z: function () {
        return a;
    }
});
var i = n(442837),
    l = n(872810),
    r = n(199902),
    s = n(314897);
function a(e, t) {
    let n = (0, i.e7)([s.default], () => s.default.getId()),
        a = (0, i.e7)(
            [r.Z],
            () => {
                let t = r.Z.getCurrentUserActiveStream();
                return null != t && t.channelId === e;
            },
            [e]
        ),
        o = (0, i.e7)([r.Z], () => r.Z.isSelfStreamHidden(e), [e]);
    return [
        (null == t || t === n) && a,
        o,
        (t) => {
            (0, l.pR)(e, t);
        }
    ];
}
