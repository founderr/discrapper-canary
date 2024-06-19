n.d(t, {
  Z: function() {
    return a
  }
});
var l = n(687516),
  i = n(5192),
  s = n(689938);

function a(e, t, n) {
  let a = (0, l.Cf)(n),
    r = i.ZP.getName(e.getGuildId(), e.id, t);
  return null == n ? r : (null == a ? void 0 : a.name) != null ? s.Z.Messages.GO_LIVE_USER_PLAYING.format({
    applicationName: null == a ? void 0 : a.name,
    username: r
  }) : s.Z.Messages.GO_LIVE_TILE_SCREEN.format({
    username: r
  })
}