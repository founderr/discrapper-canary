"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
}), n("222007");
var i = n("689988"),
  a = n("42203"),
  l = n("612278"),
  s = n("724210");
class r extends i.default {
  handleChannelPreload(e) {
    let {
      channelId: t
    } = e;
    if ((0, s.isStaticChannelRoute)(t)) return;
    let n = a.default.getChannel(t);
    null != n && n.isForumLikeChannel() && (0, l.preloadForumThreads)(n)
  }
  constructor(...e) {
    super(...e), this.actions = {
      CHANNEL_PRELOAD: this.handleChannelPreload
    }
  }
}
var o = new r