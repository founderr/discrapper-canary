"use strict";
n.r(t), n.d(t, {
  AnimationState: function() {
    return s
  },
  sendGiftMessage: function() {
    return f
  }
}), n("411104");
var s, r, a = n("512722"),
  l = n.n(a),
  u = n("493683"),
  i = n("904245"),
  o = n("957730"),
  c = n("592125"),
  d = n("669079");
(r = s || (s = {})).ACTION = "action", r.LOOP = "loop", r.IDLE = "idle";
let f = async (e, t) => {
  if (null == t) throw Error("giftCode must be defined");
  if (null == e) throw Error("Recipient must be defined");
  let n = await u.default.openPrivateChannel(e.id).then(e => {
      let t = c.default.getChannel(e);
      if (l()(null != t, "PrivateChannel is null"), null == t) throw Error("Channel must be defined");
      return t
    }),
    s = (0, d.getGiftCodeURL)(t);
  return i.default.sendMessage(n.id, o.default.parse(n, s), void 0, {
    isGiftLinkSentOnBehalfOfUser: !0
  })
}