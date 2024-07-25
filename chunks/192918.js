n.d(t, {
  Z: function() {
return c;
  }
}), n(47120);
var l = n(470079),
  i = n(442837),
  s = n(594174),
  a = n(823379);
let r = [];

function c(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
n = (0, i.Wu)([s.default], () => {
  let t = e.participants.map(e => s.default.getUser(e)).filter(a.lm),
    n = t.find(t => t.id === e.author_id),
    l = t.filter(t => t.id !== e.author_id);
  return null == n ? r : [
    ...l,
    n
  ];
}, [e]),
c = l.useMemo(() => n.slice(-t), [
  t,
  n
]),
o = c[c.length - 1],
d = c[c.length - 2],
u = n.length - 1;
  return {
orderedParticipants: n,
displayParticipants: c,
participant1: o,
participant2: d,
numOtherParticipants: u
  };
}