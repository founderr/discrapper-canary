n.d(t, {
  H: function() {
return a;
  }
});
var i = n(470079),
  s = n(900849);

function a(e) {
  let {
categoryId: t,
guildDiscoveryCardSeenManager: n,
loadId: a
  } = e, r = i.useCallback(e => {
n.markAsSeen(t, e, a);
  }, [
t,
n,
a
  ]), l = i.useCallback((e, n) => s.Lq({
loadId: a,
guildId: e,
index: n,
analyticsContext: s.P1.GLOBAL_DISCOVERY,
categoryId: t
  }), [
t,
a
  ]);
  return i.useMemo(() => ({
onGuildCardSeen: r,
onGuildCardClick: l
  }), [
l,
r
  ]);
}