"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var i, a = n("327037"),
  l = n("689988"),
  s = n("42203"),
  r = n("18494"),
  o = n("697218"),
  u = n("569363"),
  d = n("49111");
let c = !1;

function f(e) {
  let t = o.default.getCurrentUser();
  if (null == t) return;
  let n = r.default.getChannelId(),
    i = s.default.getDMFromUserId(u.SYSTEM_USER);
  if (!t.hasUrgentMessages() || i === n) return E({
    channelId: n
  });
  !c && (c = !0, e())
}

function E(e) {
  let {
    channelId: t
  } = e, n = o.default.getCurrentUser(), i = t === s.default.getDMFromUserId(u.SYSTEM_USER);
  null != n && n.hasUrgentMessages() && i && (c = !1, a.setFlag(d.UserFlags.HAS_UNREAD_URGENT_MESSAGES, !1))
}
i = class extends l.default {
  constructor(e) {
    super(), this.handleShowUrgentMessageAlert = e, this.actions = {
      POST_CONNECTION_OPEN: () => f(this.handleShowUrgentMessageAlert),
      MESSAGE_CREATE: () => f(this.handleShowUrgentMessageAlert),
      CHANNEL_SELECT: E
    }
  }
}