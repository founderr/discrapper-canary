e.d(n, {
    z: function () {
        return l;
    }
});
var i = e(359119),
    r = e(897769),
    o = e(237292),
    a = e(403485),
    u = e(604849);
function l(t, n) {
    let e = (0, o.y0)({ location: n }),
        l = (0, u.c)(),
        d = (0, a.h)(t),
        s = (0, r.S)(t, i.pj.INAPPROPRIATE_CONVERSATION_TIER_2);
    if (!(!e || !l || 0 === d.length || d.some((t) => t.type === i.pj.INAPPROPRIATE_CONVERSATION_TIER_1 || (t.type === i.pj.INAPPROPRIATE_CONVERSATION_TIER_2 && null != t.dismiss_timestamp)))) return s;
}
