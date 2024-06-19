t.d(n, {
  S: function() {
    return r
  },
  Y: function() {
    return E
  }
}), t(411104);
var r, s, l = t(512722),
  o = t.n(l),
  a = t(493683),
  i = t(904245),
  u = t(957730),
  c = t(592125),
  d = t(669079);
(s = r || (r = {})).ACTION = "action", s.LOOP = "loop", s.IDLE = "idle";
let E = async (e, n) => {
  if (null == n) throw Error("giftCode must be defined");
  if (null == e) throw Error("Recipient must be defined");
  let t = await a.Z.openPrivateChannel(e.id).then(e => {
      let n = c.Z.getChannel(e);
      if (o()(null != n, "PrivateChannel is null"), null == n) throw Error("Channel must be defined");
      return n
    }),
    r = (0, d.Nz)(n);
  return i.Z.sendMessage(t.id, u.ZP.parse(t, r), void 0, {
    isGiftLinkSentOnBehalfOfUser: !0
  })
}