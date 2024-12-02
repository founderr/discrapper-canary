n.d(e, {
    Z: function () {
        return i;
    }
});
var a = n(695346),
    s = n(875425);
let l = Object.values(s.F)
    .filter((t) => 'number' == typeof t)
    .sort((t, e) => t - e);
function i() {
    var t, e, n;
    let i = a.Ok.getSetting();
    if (null == i || '' === i.expiresAtMs) return s.F.TODAY;
    let o = Number(i.expiresAtMs);
    if (isNaN(o)) return s.F.TODAY;
    if (0 === o) return s.F.DONT_CLEAR;
    let r = new Date(),
        u = new Date(o);
    if (((e = r), (n = u), e.getFullYear() !== n.getFullYear() || e.getMonth() !== n.getMonth() || e.getDate() !== n.getDate())) return s.F.TODAY;
    let d = Number(o) - Date.now();
    return null !== (t = l.find((t) => d <= t)) && void 0 !== t ? t : s.F.TODAY;
}
