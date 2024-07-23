n.d(t, {
  z: function() {
return u;
  }
});
var i = n(359119),
  r = n(897769),
  a = n(237292),
  o = n(403485),
  s = n(604849);

function u(e, t) {
  let n = (0, a.y0)({
  location: t
}),
u = (0, s.c)(),
d = (0, o.h)(e),
l = (0, r.S)(e, i.pj.INAPPROPRIATE_CONVERSATION_TIER_2);
  if (!(!n || !u || 0 === d.length || d.some(e => e.type === i.pj.INAPPROPRIATE_CONVERSATION_TIER_1 || e.type === i.pj.INAPPROPRIATE_CONVERSATION_TIER_2 && null != e.dismiss_timestamp)))
return l;
}