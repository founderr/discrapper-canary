t.d(n, {
  Z: function() {
return u;
  }
}), t(47120);
var a = t(470079),
  l = t(442837),
  r = t(594174),
  i = t(823379);
let o = [];

function u(e) {
  let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
t = (0, l.Wu)([r.default], () => {
  let n = e.participants.map(e => r.default.getUser(e)).filter(i.lm),
    t = n.find(n => n.id === e.author_id),
    a = n.filter(n => n.id !== e.author_id);
  return null == t ? o : [
    ...a,
    t
  ];
}, [e]),
u = a.useMemo(() => t.slice(-n), [
  n,
  t
]),
c = u[u.length - 1],
s = u[u.length - 2],
d = t.length - 1;
  return {
orderedParticipants: t,
displayParticipants: u,
participant1: c,
participant2: s,
numOtherParticipants: d
  };
}