"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
}), n("390547"), n("653041");
var a = n("735250");
n("470079");
var l = n("392711"),
  s = n.n(l),
  i = n("132338"),
  r = n("289481"),
  o = n("809780"),
  u = n("689938"),
  d = n("403770");

function c(e, t, n) {
  let {
    markChannelRead: l,
    markGuildRead: c,
    deleteChannel: f,
    toggle: h,
    getNumUnreadChannels: E
  } = t, m = null;
  return s().flatMap(e, e => {
    let t = e.sortOrder !== m;
    m = e.sortOrder;
    let s = [];
    return t && (e.hasLoadedAnything && e.sortOrder === o.SortOrder.ReallyOldChannel ? s.push((0, a.jsx)(i.default, {
      className: d.divider,
      contentClassName: d.dividerContent,
      children: u.default.Messages.UNREADS_OLD_CHANNELS_DIVIDER
    }, "old-divider")) : e.hasLoadedAnything && e.sortOrder === o.SortOrder.NoNotifications && s.push((0, a.jsx)(i.default, {
      className: d.divider,
      contentClassName: d.dividerContent,
      children: u.default.Messages.UNREADS_NO_NOTIFICATIONS_DIVIDER
    }, "disabled-divider"))), s.push((0, a.jsx)(r.default, {
      channel: e,
      markChannelRead: l,
      markGuildRead: c,
      toggle: h,
      deleteChannel: f,
      onJump: n,
      getNumUnreadChannels: E
    }, e.channelId)), s
  })
}