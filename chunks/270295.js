n.d(t, {
  Z: function() {
    return o
  }
}), n(47120);
var l = n(470079),
  i = n(442837),
  s = n(314897),
  a = n(471253),
  r = n(590415);

function o(e) {
  let t = (0, i.e7)([s.default], () => s.default.getId()),
    n = (0, r.ZP)(t, e.id),
    o = n === r.xO.REQUESTED_TO_SPEAK || n === r.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK,
    [c, u] = l.useState(o);
  return l.useEffect(() => {
    u(o)
  }, [o]), [c, function() {
    n === r.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK ? (0, a.RK)(e, !0) : (0, a.Q1)(e, !c), u(!c)
  }]
}