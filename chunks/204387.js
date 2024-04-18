"use strict";
s.r(t), s.d(t, {
  Steps: function() {
    return i
  }
}), s("47120");
var i, a, l = s("735250"),
  r = s("470079"),
  C = s("481060"),
  n = s("281494"),
  d = s("687555"),
  o = s("596583");
(a = i || (i = {}))[a.SELECT_FRIENDS = 1] = "SELECT_FRIENDS", a[a.CONFIRMATION = 2] = "CONFIRMATION";
t.default = e => {
  let t, {
      transitionState: s,
      onClose: i
    } = e,
    [a, c] = r.useState(1),
    [f, u] = r.useState(new Set);
  switch (a) {
    case 1:
      t = (0, l.jsx)(d.default, {
        onShare: async e => {
          try {
            await (0, n.createReferralTrials)(e.map(e => e.id)), c(2), u(new Set(e))
          } catch {}
        },
        onClose: i
      });
      break;
    case 2:
      t = (0, l.jsx)(o.default, {
        selectedUsers: f,
        onClose: i
      });
      break;
    default:
      i()
  }
  return (0, l.jsx)(C.ModalRoot, {
    transitionState: s,
    children: t
  })
}