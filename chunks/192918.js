"use strict";
a.r(t), a.d(t, {
  default: function() {
    return s
  }
}), a("47120");
var n = a("470079"),
  r = a("442837"),
  l = a("594174"),
  i = a("823379");
let o = [];

function s(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
    a = (0, r.useStateFromStoresArray)([l.default], () => {
      let t = e.participants.map(e => l.default.getUser(e)).filter(i.isNotNullish),
        a = t.find(t => t.id === e.author_id),
        n = t.filter(t => t.id !== e.author_id);
      return null == a ? o : [...n, a]
    }, [e]),
    s = n.useMemo(() => a.slice(-t), [t, a]),
    u = s[s.length - 1],
    d = s[s.length - 2],
    c = a.length - 1;
  return {
    orderedParticipants: a,
    displayParticipants: s,
    participant1: u,
    participant2: d,
    numOtherParticipants: c
  }
}