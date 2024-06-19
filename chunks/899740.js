n.d(t, {
  T: function() {
    return d
  },
  q: function() {
    return c
  }
});
var l = n(442837),
  i = n(306680),
  s = n(709054),
  r = n(879041),
  a = n(355298),
  o = n(177033),
  u = n(490897);

function c() {
  return (0, l.e7)([a.Z], () => a.Z.getMessageRequestsCount())
}

function d() {
  let e = (0, r.e)({
      location: "use-message-requests-count"
    }),
    t = (0, l.e7)([i.ZP], () => i.ZP.getNonChannelAckId(u.W.MESSAGE_REQUESTS)),
    n = (0, o.Z)();
  return e ? n.filter(e => s.default.compare(e.channel.id, t) > 0).length : n.length
}