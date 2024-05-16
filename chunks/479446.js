"use strict";
n.r(t), n.d(t, {
  AnimationState: function() {
    return s
  },
  sendGiftMessage: function() {
    return f
  }
}), n("411104");
var s, a, l = n("512722"),
  i = n.n(l),
  r = n("493683"),
  u = n("904245"),
  o = n("957730"),
  d = n("592125"),
  c = n("669079");
(a = s || (s = {})).ACTION = "action", a.LOOP = "loop", a.IDLE = "idle";
let f = async (e, t) => {
  if (null == t) throw Error("giftCode must be defined");
  if (null == e) throw Error("Recipient must be defined");
  let n = await r.default.openPrivateChannel(e.id).then(e => {
      let t = d.default.getChannel(e);
      if (i()(null != t, "PrivateChannel is null"), null == t) throw Error("Channel must be defined");
      return t
    }),
    s = (0, c.getGiftCodeURL)(t);
  return u.default.sendMessage(n.id, o.default.parse(n, s), void 0, {
    isGiftLinkSentOnBehalfOfUser: !0
  })
}