n.d(t, {
  Z: function() {
    return d
  }
}), n(390547), n(653041);
var s = n(735250);
n(470079);
var i = n(392711),
  l = n.n(i),
  a = n(661824),
  r = n(289481),
  o = n(809780),
  c = n(689938),
  u = n(521173);

function d(e, t, n) {
  let {
    markChannelRead: i,
    markGuildRead: d,
    deleteChannel: E,
    toggle: _,
    getNumUnreadChannels: I
  } = t, T = null;
  return l().flatMap(e, e => {
    let t = e.sortOrder !== T;
    T = e.sortOrder;
    let l = [];
    return t && (e.hasLoadedAnything && e.sortOrder === o.As.ReallyOldChannel ? l.push((0, s.jsx)(a.Z, {
      className: u.divider,
      contentClassName: u.dividerContent,
      children: c.Z.Messages.UNREADS_OLD_CHANNELS_DIVIDER
    }, "old-divider")) : e.hasLoadedAnything && e.sortOrder === o.As.NoNotifications && l.push((0, s.jsx)(a.Z, {
      className: u.divider,
      contentClassName: u.dividerContent,
      children: c.Z.Messages.UNREADS_NO_NOTIFICATIONS_DIVIDER
    }, "disabled-divider"))), l.push((0, s.jsx)(r.Z, {
      channel: e,
      markChannelRead: i,
      markGuildRead: d,
      toggle: _,
      deleteChannel: E,
      onJump: n,
      getNumUnreadChannels: I
    }, e.channelId)), l
  })
}