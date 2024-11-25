e.d(t, {
    Z: function () {
        return a;
    }
});
var i = e(442837),
    r = e(430824),
    l = e(981631);
function a(n) {
    return (0, i.e7)(
        [r.Z],
        () => {
            var t;
            if (null == n) return !1;
            let e = r.Z.getGuild(n);
            return null !== (t = null == e ? void 0 : e.hasFeature(l.oNc.HUB)) && void 0 !== t && t;
        },
        [n]
    );
}
