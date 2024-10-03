n.d(t, {
    z: function () {
        return o;
    }
});
var i = n(359119),
    s = n(897769),
    a = n(237292),
    l = n(403485),
    r = n(604849);
function o(e, t) {
    let n = (0, a.y0)({ location: t }),
        o = (0, r.c)(),
        c = (0, l.h)(e),
        u = (0, s.S)(e, i.pj.INAPPROPRIATE_CONVERSATION_TIER_2);
    if (!(!n || !o || 0 === c.length || c.some((e) => e.type === i.pj.INAPPROPRIATE_CONVERSATION_TIER_1 || (e.type === i.pj.INAPPROPRIATE_CONVERSATION_TIER_2 && null != e.dismiss_timestamp)))) return u;
}
