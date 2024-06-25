n.d(t, {
  N: function() {
    return c
  }
}), n(47120);
var i = n(470079),
  a = n(442837),
  s = n(904245),
  l = n(592125),
  r = n(375954),
  o = n(822893);

function c(e) {
  let t = (0, a.Wu)([l.Z, r.Z], () => e.filter(e => null != l.Z.getChannel(e.channelId)).map(e => r.Z.getMessage(e.channelId, e.messageId)).filter(e => null != e)),
    n = e.filter(e => null == r.Z.getMessage(e.channelId, e.messageId)),
    [c, d] = i.useState(0 === n.length);
  return i.useEffect(() => {
    (0, o.sE)()
  }, []), i.useEffect(() => {
    if (!c) n.forEach(e => {
      try {
        s.Z.fetchMessages({
          channelId: e.channelId,
          limit: 1,
          jump: {
            messageId: e.messageId,
            flash: !1,
            offset: 1
          }
        })
      } catch {}
    }), d(!0)
  }, [n, c]), t
}