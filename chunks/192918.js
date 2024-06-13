"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
}), n("47120");
var a = n("470079"),
  r = n("442837"),
  l = n("594174"),
  i = n("823379");
let o = [];

function s(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
    n = (0, r.useStateFromStoresArray)([l.default], () => {
      let t = e.participants.map(e => l.default.getUser(e)).filter(i.isNotNullish),
        n = t.find(t => t.id === e.author_id),
        a = t.filter(t => t.id !== e.author_id);
      return null == n ? o : [...a, n]
    }, [e]),
    s = a.useMemo(() => n.slice(-t), [t, n]),
    u = s[s.length - 1],
    d = s[s.length - 2],
    c = n.length - 1;
  return {
    orderedParticipants: n,
    displayParticipants: s,
    participant1: u,
    participant2: d,
    numOtherParticipants: c
  }
}