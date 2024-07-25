s.d(a, {
  Z: function() {
return o;
  }
}), s(47120);
var n = s(470079),
  t = s(442837),
  l = s(594174),
  r = s(823379);
let i = [];

function o(e) {
  let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
s = (0, t.Wu)([l.default], () => {
  let a = e.participants.map(e => l.default.getUser(e)).filter(r.lm),
    s = a.find(a => a.id === e.author_id),
    n = a.filter(a => a.id !== e.author_id);
  return null == s ? i : [
    ...n,
    s
  ];
}, [e]),
o = n.useMemo(() => s.slice(-a), [
  a,
  s
]),
c = o[o.length - 1],
E = o[o.length - 2],
_ = s.length - 1;
  return {
orderedParticipants: s,
displayParticipants: o,
participant1: c,
participant2: E,
numOtherParticipants: _
  };
}