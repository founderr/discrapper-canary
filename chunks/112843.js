r.d(n, {
    Z: function () {
        return u;
    }
});
var i = r(192379),
    a = r(399606),
    s = r(745510),
    o = r(351780);
let l = 7;
function u() {
    let { createMultipleConfettiAt: e } = i.useContext(s.h),
        n = (0, a.e7)([o.Z], () => o.Z.getState()),
        r = i.useCallback(
            (e) => ({
                size: {
                    type: 'static-random',
                    minValue: e.confettiSize - l,
                    maxValue: e.confettiSize + l
                }
            }),
            []
        );
    return i.useMemo(
        () => ({
            fire: (i, a, s) => {
                var o, l;
                let u =
                    (null == s ? void 0 : s.settings) != null
                        ? {
                              ...n,
                              ...s.settings
                          }
                        : n;
                e(i, a, r(u), (null !== (o = null == s ? void 0 : s.count) && void 0 !== o ? o : u.confettiCount) * (null !== (l = null == s ? void 0 : s.countMultiplier) && void 0 !== l ? l : 1), { sprite: null == s ? void 0 : s.sprite });
            }
        }),
        [e, r, n]
    );
}
