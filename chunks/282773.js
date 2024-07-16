n.d(t, {
  H: function() {
return r;
  }
});
var i = n(470079),
  a = n(900849),
  s = n(231338);

function r(e) {
  let {
categoryId: t,
loadId: n
  } = e, r = i.useCallback((e, i) => a.Lq({
loadId: n,
guildId: e,
index: i,
analyticsContext: a.P1.GLOBAL_DISCOVERY,
categoryId: t
  }), [
t,
n
  ]);
  return i.useMemo(() => ({
onGuildCardSeen: s.dG,
onGuildCardClick: r
  }), [r]);
}