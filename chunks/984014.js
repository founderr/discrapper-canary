n.d(t, {
    Z: function () {
        return s;
    }
});
var i = n(442837),
    l = n(872810),
    r = n(199902),
    a = n(314897);
function s(e, t) {
    let n = (0, i.e7)([a.default], () => a.default.getId()),
        s = (0, i.e7)(
            [r.Z],
            () => {
                let t = r.Z.getCurrentUserActiveStream();
                return null != t && t.channelId === e;
            },
            [e]
        ),
        o = (0, i.e7)([r.Z], () => r.Z.isSelfStreamHidden(e), [e]);
    return [
        (null == t || t === n) && s,
        o,
        (t) => {
            (0, l.pR)(e, t);
        }
    ];
}
