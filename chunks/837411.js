r.d(n, {
    Z: function () {
        return c;
    }
});
var i = r(442837),
    a = r(41776),
    s = r(695346),
    o = r(314897),
    l = r(271383),
    u = r(699516);
function c(e, n) {
    let r = (0, i.e7)([o.default], () => o.default.getId() === e),
        c = (0, i.e7)([a.Z], () => null != n && a.Z.isLurking(n)),
        d = s.h2.useSetting();
    return (0, i.e7)([u.Z, l.ZP], () => !r && !c && (u.Z.isFriend(e) || null != l.ZP.memberOf(e).find((e) => !d.includes(e))));
}
