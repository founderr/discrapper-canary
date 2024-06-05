"use strict";
s.r(t), s.d(t, {
  canDeleteAndReportMessage: function() {
    return r
  },
  canReportMessage: function() {
    return d
  }
});
var n = s("592125"),
  a = s("650774"),
  l = s("496675"),
  i = s("594174"),
  u = s("981631");

function d(e) {
  return null != e && function(e) {
    if (null == e) return !1;
    let t = e.id,
      s = i.default.getCurrentUser();
    return null != s && s.id !== t && !0 !== e.system && !0
  }(e.author)
}

function r(e) {
  return null != e && d(e) && function(e) {
    let t = n.default.getChannel(e);
    if (null == t) return !1;
    if (t.type === u.ChannelTypes.DM || t.type === u.ChannelTypes.GROUP_DM) return !0;
    if (l.default.canWithPartialContext(u.Permissions.MANAGE_MESSAGES, {
        channelId: e
      })) {
      let e = a.default.getMemberCount(t.getGuildId());
      return null != e && e >= 50
    }
    return !1
  }(e.getChannelId())
}