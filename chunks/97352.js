n.d(t, {
  Z: function() {
    return d
  }
});
var l = n(470079),
  i = n(399606),
  s = n(570140),
  a = n(607070),
  r = n(222677),
  o = n(695346),
  c = n(960020),
  u = n(566006);

function d() {
  let e = o.Yk.useSetting(),
    t = (0, i.e7)([a.Z], () => a.Z.useReducedMotion);
  l.useEffect(() => {
    function n(n) {
      let {
        messageId: l,
        channelId: i,
        emoji: s,
        optimistic: a,
        reactionType: o
      } = n;
      if (!a && o === u.O.BURST && !!e && !t)(0, r.T6)({
        channelId: i,
        messageId: l,
        emoji: s,
        key: c.I.EXTERNAL
      })
    }
    return s.Z.subscribe("MESSAGE_REACTION_ADD", n), () => {
      s.Z.unsubscribe("MESSAGE_REACTION_ADD", n)
    }
  }, [e, t])
}