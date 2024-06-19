n.d(t, {
  l: function() {
    return c
  }
});
var l = n(570140),
  i = n(944486),
  s = n(914010),
  a = n(626135),
  r = n(146282),
  o = n(981631);
let c = () => {
  l.Z.dispatch({
    type: "CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN"
  }), a.default.track(o.rMx.MEMBERLIST_CONTENT_FEED_HIDDEN, {
    channel_id: i.Z.getChannelId(),
    guild_id: s.Z.getGuildId(),
    hidden: r.Z.hidden
  })
}