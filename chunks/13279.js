t.d(n, {
    z: function () {
        return s;
    }
});
var i = t(359119),
    r = t(897769),
    o = t(237292),
    a = t(403485),
    u = t(604849);
function s(e, n) {
    let t = (0, o.y0)({ location: n }),
        s = (0, u.c)(),
        l = (0, a.h)(e),
        d = (0, r.S)(e, i.pj.INAPPROPRIATE_CONVERSATION_TIER_2);
    if (!(!t || !s || 0 === l.length || l.some((e) => e.type === i.pj.INAPPROPRIATE_CONVERSATION_TIER_1 || (e.type === i.pj.INAPPROPRIATE_CONVERSATION_TIER_2 && null != e.dismiss_timestamp)))) return d;
}
