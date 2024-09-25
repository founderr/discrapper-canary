n.d(t, {
    Z: function () {
        return o;
    }
});
var r = n(70956),
    i = n(709054);
let a = 2 * r.Z.Millis.HOUR;
function o(e, t, n) {
    if (null == e) return !1;
    let r = null != t.activity ? t.activity.party_id : null,
        o = null != r && (null == e.party || e.party.id !== r),
        s = i.default.extractTimestamp(t.id) + a < Date.now(),
        l = null != e.application_id && e.application_id !== n;
    return !o && !s && !l;
}
