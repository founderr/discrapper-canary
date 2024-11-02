n.d(t, {
    Z: function () {
        return a;
    }
});
var i = n(70956),
    r = n(709054);
let l = 2 * i.Z.Millis.HOUR;
function a(e, t, n) {
    if (null == e) return !1;
    let i = null != t.activity ? t.activity.party_id : null,
        a = null != i && (null == e.party || e.party.id !== i),
        o = r.default.extractTimestamp(t.id) + l < Date.now(),
        s = null != e.application_id && e.application_id !== n;
    return !a && !o && !s;
}
