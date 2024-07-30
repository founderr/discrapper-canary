t.d(r, {
  Z: function() {
return c;
  }
}), t(47120);
var a = t(470079),
  n = t(442837),
  i = t(594174),
  o = t(823379);
let l = [];

function c(e) {
  let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
t = (0, n.Wu)([i.default], () => {
  let r = e.participants.map(e => i.default.getUser(e)).filter(o.lm),
    t = r.find(r => r.id === e.author_id),
    a = r.filter(r => r.id !== e.author_id);
  return null == t ? l : [
    ...a,
    t
  ];
}, [e]),
c = a.useMemo(() => t.slice(-r), [
  r,
  t
]),
s = c[c.length - 1],
d = c[c.length - 2],
u = t.length - 1;
  return {
orderedParticipants: t,
displayParticipants: c,
participant1: s,
participant2: d,
numOtherParticipants: u
  };
}