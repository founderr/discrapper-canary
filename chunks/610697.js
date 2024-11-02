n.d(t, {
    Z: function () {
        return c;
    }
}),
    n(47120);
var i = n(192379),
    r = n(442837),
    l = n(594174),
    a = n(823162),
    o = n(355298);
let s = new Set(['GB']);
function c() {
    let e = (0, r.e7)([o.Z], () => o.Z.getUserCountryCode()),
        t =
            !1 ===
            (0, r.e7)([l.default], () => {
                var e;
                return null === (e = l.default.getCurrentUser()) || void 0 === e ? void 0 : e.nsfwAllowed;
            });
    return (
        i.useEffect(() => {
            null == e && (0, a.hi)();
        }, [e]),
        (!!(null != e && s.has(e.alpha2)) && !!t) || !1
    );
}
