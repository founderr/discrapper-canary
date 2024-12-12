r.d(n, {
    Z: function () {
        return l;
    }
});
var i = r(978003),
    a = r(786761),
    s = r(901461),
    o = r(981631);
function l(e, n) {
    return !(null == n || e.author.id !== n || e.state !== o.yb.SENT || (0, s.Z)(e) || !(0, a.lp)(e) || e.hasFlag(o.iLy.IS_VOICE_MESSAGE) || null != e.referralTrialOfferId || e.isPoll() || (0, i.Z)(e)) && !0;
}
