"use strict";
s.r(t), s.d(t, {
  Steps: function() {
    return a
  }
}), s("47120");
var a, l, i = s("735250"),
  r = s("470079"),
  C = s("481060"),
  n = s("281494"),
  d = s("687555"),
  o = s("596583");
(l = a || (a = {}))[l.SELECT_FRIENDS = 1] = "SELECT_FRIENDS", l[l.CONFIRMATION = 2] = "CONFIRMATION";
t.default = e => {
  let t, {
      transitionState: s,
      onClose: a
    } = e,
    [l, c] = r.useState(1),
    [u, f] = r.useState(new Set);
  switch (l) {
    case 1:
      t = (0, i.jsx)(d.default, {
        onShare: async e => {
          try {
            await (0, n.createReferralTrials)(e.map(e => e.id)), c(2), f(new Set(e))
          } catch {}
        },
        onClose: a
      });
      break;
    case 2:
      t = (0, i.jsx)(o.default, {
        selectedUsers: u,
        onClose: a
      });
      break;
    default:
      a()
  }
  return (0, i.jsx)(C.ModalRoot, {
    transitionState: s,
    children: t
  })
}