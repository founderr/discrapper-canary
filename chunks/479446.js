n.d(t, {
  S: function() {
    return s
  },
  Y: function() {
    return E
  }
}), n(411104);
var s, r, i = n(512722),
  l = n.n(i),
  a = n(493683),
  o = n(904245),
  u = n(957730),
  c = n(592125),
  d = n(669079);
(r = s || (s = {})).ACTION = "action", r.LOOP = "loop", r.IDLE = "idle";
let E = async (e, t) => {
  if (null == t) throw Error("giftCode must be defined");
  if (null == e) throw Error("Recipient must be defined");
  let n = await a.Z.openPrivateChannel(e.id).then(e => {
      let t = c.Z.getChannel(e);
      if (l()(null != t, "PrivateChannel is null"), null == t) throw Error("Channel must be defined");
      return t
    }),
    s = (0, d.Nz)(t);
  return o.Z.sendMessage(n.id, u.ZP.parse(n, s), void 0, {
    isGiftLinkSentOnBehalfOfUser: !0
  })
}