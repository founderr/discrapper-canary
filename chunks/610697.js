n.d(t, {
    Z: function () {
        return c;
    }
}),
    n(47120);
var r = n(470079),
    i = n(442837),
    l = n(594174),
    s = n(823162),
    a = n(355298);
let o = new Set(['GB']);
function c() {
    let e = (0, i.e7)([a.Z], () => a.Z.getUserCountryCode()),
        t =
            !1 ===
            (0, i.e7)([l.default], () => {
                var e;
                return null === (e = l.default.getCurrentUser()) || void 0 === e ? void 0 : e.nsfwAllowed;
            });
    return (
        r.useEffect(() => {
            null == e && (0, s.hi)();
        }, [e]),
        (!!(null != e && o.has(e.alpha2)) && !!t) || !1
    );
}
