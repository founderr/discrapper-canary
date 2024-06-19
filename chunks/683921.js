n.d(t, {
  Z: function() {
    return s
  }
});
var l = n(442837),
  i = n(317381);

function s(e) {
  let {
    channelId: t
  } = e;
  return (0, l.e7)([i.ZP], () => i.ZP.getEmbeddedActivitiesForChannel(t).some(e => e.userIds.size > 0))
}