n.d(t, {
    M: function () {
        return d;
    }
}),
    n(852437);
var i = n(70956),
    l = n(359119),
    r = n(116347),
    s = n(444957),
    a = n(403485),
    o = n(276618);
let c = 1 * i.Z.Millis.HOUR,
    u = 12 * i.Z.Millis.HOUR;
function d(e) {
    var t;
    let n = (0, s.h)(e),
        i = (0, a.h)(e),
        d = (0, o.o)(e);
    if (null == n || d || (0, r.tX)(i)) return;
    let h = i.some((e) => e.type === l.pj.INAPPROPRIATE_CONVERSATION_TIER_1),
        m = i.filter((e) => null != e.dismiss_timestamp).sort((e, t) => (t.dismiss_timestamp < e.dismiss_timestamp ? -1 : 1));
    if (
        m.length < 1 ||
        !(function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (null == e) return !0;
            let n = new Date(e).getTime() + (t ? c : u);
            return new Date().getTime() >= n;
        })(m[0].dismiss_timestamp, h)
    )
        return;
    let p = i.filter((e) => null == e.dismiss_timestamp);
    return null !== (t = p.findLast((e) => e.type === l.pj.INAPPROPRIATE_CONVERSATION_TIER_1)) && void 0 !== t ? t : p.findLast((e) => e.type === l.pj.INAPPROPRIATE_CONVERSATION_TIER_2);
}
