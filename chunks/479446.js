n.d(t, {
  S: function() {
    return s
  },
  Y: function() {
    return _
  }
}), n(411104);
var s, i, r = n(512722),
  a = n.n(r),
  l = n(493683),
  o = n(904245),
  c = n(957730),
  u = n(592125),
  d = n(669079);
(i = s || (s = {})).ACTION = "action", i.LOOP = "loop", i.IDLE = "idle";
let _ = async (e, t) => {
  if (null == t) throw Error("giftCode must be defined");
  if (null == e) throw Error("Recipient must be defined");
  let n = await l.Z.openPrivateChannel(e.id).then(e => {
      let t = u.Z.getChannel(e);
      if (a()(null != t, "PrivateChannel is null"), null == t) throw Error("Channel must be defined");
      return t
    }),
    s = (0, d.Nz)(t);
  return o.Z.sendMessage(n.id, c.ZP.parse(n, s), void 0, {
    isGiftLinkSentOnBehalfOfUser: !0
  })
}