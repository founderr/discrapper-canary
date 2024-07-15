n.d(t, {
  g: function() {
return s;
  }
});
var i = n(470079),
  a = n(900849);

function s(e, t) {
  let n = i.useCallback((n, i) => a.Lq({
loadId: t,
guildId: n,
index: i,
analyticsContext: a.P1.GLOBAL_DISCOVERY,
categoryId: e
  }), [
e,
t
  ]);
  return {
handleViewGuild: n,
onGuildCardSeen: i.useCallback(() => !1, [])
  };
}