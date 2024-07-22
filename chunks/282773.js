n.d(t, {
  H: function() {
return a;
  }
});
var i = n(470079),
  s = n(900849);

function a(e) {
  let {
guildDiscoveryCardSeenManager: t,
loadId: n
  } = e, a = i.useCallback((e, i) => {
t.markAsSeen(i, e, n);
  }, [
t,
n
  ]), r = i.useCallback((e, t, i) => s.Lq({
loadId: n,
guildId: e,
index: t,
analyticsContext: s.P1.GLOBAL_DISCOVERY,
categoryId: i
  }), [n]);
  return i.useMemo(() => ({
onGuildCardSeen: a,
onGuildCardClick: r
  }), [
r,
a
  ]);
}