n.d(t, {
  H: function() {
return r;
  }
});
var i = n(470079),
  s = n(900849),
  a = n(231338);

function r(e) {
  let {
categoryId: t,
loadId: n
  } = e, r = i.useCallback((e, i) => s.Lq({
loadId: n,
guildId: e,
index: i,
analyticsContext: s.P1.GLOBAL_DISCOVERY,
categoryId: t
  }), [
t,
n
  ]);
  return i.useMemo(() => ({
onGuildCardSeen: a.dG,
onGuildCardClick: r
  }), [r]);
}