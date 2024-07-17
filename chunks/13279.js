n.d(t, {
  z: function() {
return s;
  }
});
var i = n(359119),
  r = n(897769),
  a = n(237292),
  o = n(403485),
  u = n(604849);

function s(e, t) {
  let n = (0, a.y0)({
  location: t
}),
s = (0, u.c)(),
d = (0, o.h)(e),
l = (0, r.S)(e, i.pj.INAPPROPRIATE_CONVERSATION_TIER_2);
  if (!(!n || !s || 0 === d.length || d.some(e => e.type === i.pj.INAPPROPRIATE_CONVERSATION_TIER_1 || e.type === i.pj.INAPPROPRIATE_CONVERSATION_TIER_2 && null != e.dismiss_timestamp)))
return l;
}