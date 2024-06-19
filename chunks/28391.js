n.d(t, {
  Z: function() {
    return o
  }
});
var l = n(92114),
  i = n(9156),
  s = n(621600),
  a = n(113449),
  r = n(981631);

function o(e, t, n) {
  l.Z.updateChannelOverrideSettings(e, t, {
    flags: (0, a.pq)(i.ZP.getChannelIdFlags(e, t), n)
  }, s.UE.unreads(n), {
    object: r.qAy.NOTIFICATION_SETTING_UNREAD_NOTICE
  })
}