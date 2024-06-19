n.d(t, {
  z: function() {
    return o
  }
});
var l = n(359119),
  i = n(897769),
  s = n(237292),
  a = n(403485),
  r = n(604849);

function o(e, t) {
  let n = (0, s.y0)({
      location: t
    }),
    o = (0, r.c)(),
    c = (0, a.h)(e),
    u = (0, i.S)(e, l.pj.INAPPROPRIATE_CONVERSATION_TIER_2);
  if (!(!n || !o || 0 === c.length || c.some(e => e.type === l.pj.INAPPROPRIATE_CONVERSATION_TIER_1 || e.type === l.pj.INAPPROPRIATE_CONVERSATION_TIER_2 && null != e.dismiss_timestamp))) return u
}