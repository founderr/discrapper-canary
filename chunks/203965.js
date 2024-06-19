n.d(t, {
  N: function() {
    return c
  }
}), n(47120);
var s = n(470079),
  i = n(442837),
  l = n(904245),
  a = n(592125),
  r = n(375954),
  o = n(822893);

function c(e) {
  let t = (0, i.Wu)([a.Z, r.Z], () => e.filter(e => null != a.Z.getChannel(e.channelId)).map(e => r.Z.getMessage(e.channelId, e.messageId)).filter(e => null != e)),
    n = e.filter(e => null == r.Z.getMessage(e.channelId, e.messageId)),
    [c, u] = s.useState(0 === n.length);
  return s.useEffect(() => {
    (0, o.sE)()
  }, []), s.useEffect(() => {
    if (!c) n.forEach(e => {
      try {
        l.Z.fetchMessages({
          channelId: e.channelId,
          limit: 1,
          jump: {
            messageId: e.messageId,
            flash: !1,
            offset: 1
          }
        })
      } catch {}
    }), u(!0)
  }, [n, c]), t
}