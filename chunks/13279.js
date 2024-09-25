n.d(t, {
    z: function () {
        return l;
    }
});
var i = n(359119),
    r = n(897769),
    o = n(237292),
    a = n(403485),
    u = n(604849);
function l(e, t) {
    let n = (0, o.y0)({ location: t }),
        l = (0, u.c)(),
        d = (0, a.h)(e),
        s = (0, r.S)(e, i.pj.INAPPROPRIATE_CONVERSATION_TIER_2);
    if (!(!n || !l || 0 === d.length || d.some((e) => e.type === i.pj.INAPPROPRIATE_CONVERSATION_TIER_1 || (e.type === i.pj.INAPPROPRIATE_CONVERSATION_TIER_2 && null != e.dismiss_timestamp)))) return s;
}
