"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("222007");
var i = n("689988"),
  a = n("42203"),
  l = n("18494"),
  s = n("821240"),
  r = n("761771"),
  o = n("537597");

function u(e) {
  let {
    channelId: t
  } = e;
  if (null == t || !(0, r.isEligibleForInappropriateConversationWarning)({
      location: "channel_select"
    })) return !1;
  let n = a.default.getChannel(t);
  if (null == n || !n.isDM()) return !1;
  let i = (0, s.getInappropriateConversationTakeoverForChannel)(t);
  return null != i && ((0, o.showTakeoverModal)({
    warningId: i.id,
    senderId: n.getRecipientId(),
    channelId: t
  }), !0)
}

function d(e) {
  let {
    channels: t
  } = e;
  if (!(0, r.isEligibleForInappropriateConversationWarning)({
      location: "channel_updates"
    })) return !1;
  let n = l.default.getCurrentlySelectedChannelId();
  if (null == n) return !1;
  let i = t.find(e => e.id === n);
  if (null == i) return !1;
  let a = (0, s.getInappropriateConversationTakeoverForChannel)(i.id);
  return !!(null != a && i.isDM()) && ((0, o.showTakeoverModal)({
    warningId: a.id,
    senderId: i.getRecipientId(),
    channelId: i.id
  }), !0)
}
class c extends i.default {
  constructor(...e) {
    super(...e), this.actions = {
      CHANNEL_SELECT: u,
      CHANNEL_UPDATES: d
    }
  }
}
var f = new c