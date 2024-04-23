"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
}), n("390547"), n("653041");
var s = n("735250");
n("470079");
var l = n("392711"),
  a = n.n(l),
  i = n("132338"),
  r = n("289481"),
  o = n("809780"),
  u = n("689938"),
  d = n("7674");

function c(e, t, n) {
  let {
    markChannelRead: l,
    markGuildRead: c,
    deleteChannel: f,
    toggle: E,
    getNumUnreadChannels: _
  } = t, m = null;
  return a().flatMap(e, e => {
    let t = e.sortOrder !== m;
    m = e.sortOrder;
    let a = [];
    return t && (e.hasLoadedAnything && e.sortOrder === o.SortOrder.ReallyOldChannel ? a.push((0, s.jsx)(i.default, {
      className: d.divider,
      contentClassName: d.dividerContent,
      children: u.default.Messages.UNREADS_OLD_CHANNELS_DIVIDER
    }, "old-divider")) : e.hasLoadedAnything && e.sortOrder === o.SortOrder.NoNotifications && a.push((0, s.jsx)(i.default, {
      className: d.divider,
      contentClassName: d.dividerContent,
      children: u.default.Messages.UNREADS_NO_NOTIFICATIONS_DIVIDER
    }, "disabled-divider"))), a.push((0, s.jsx)(r.default, {
      channel: e,
      markChannelRead: l,
      markGuildRead: c,
      toggle: E,
      deleteChannel: f,
      onJump: n,
      getNumUnreadChannels: _
    }, e.channelId)), a
  })
}