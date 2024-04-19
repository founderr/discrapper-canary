"use strict";
s.r(t), s.d(t, {
  Steps: function() {
    return a
  }
}), s("47120");
var a, i, l = s("735250"),
  r = s("470079"),
  C = s("481060"),
  n = s("281494"),
  d = s("687555"),
  o = s("596583");
(i = a || (a = {}))[i.SELECT_FRIENDS = 1] = "SELECT_FRIENDS", i[i.CONFIRMATION = 2] = "CONFIRMATION";
t.default = e => {
  let t, {
      transitionState: s,
      onClose: a
    } = e,
    [i, c] = r.useState(1),
    [u, f] = r.useState(new Set);
  switch (i) {
    case 1:
      t = (0, l.jsx)(d.default, {
        onShare: async e => {
          try {
            await (0, n.createReferralTrials)(e.map(e => e.id)), c(2), f(new Set(e))
          } catch {}
        },
        onClose: a
      });
      break;
    case 2:
      t = (0, l.jsx)(o.default, {
        selectedUsers: u,
        onClose: a
      });
      break;
    default:
      a()
  }
  return (0, l.jsx)(C.ModalRoot, {
    transitionState: s,
    children: t
  })
}