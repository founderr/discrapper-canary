"use strict";
t.r(s), t.d(s, {
  Steps: function() {
    return a
  }
}), t("47120");
var a, r, i = t("735250"),
  l = t("470079"),
  n = t("481060"),
  C = t("281494"),
  o = t("687555"),
  d = t("596583");
(r = a || (a = {}))[r.SELECT_FRIENDS = 1] = "SELECT_FRIENDS", r[r.CONFIRMATION = 2] = "CONFIRMATION";
s.default = e => {
  let s, {
      transitionState: t,
      onClose: a
    } = e,
    [r, c] = l.useState(1),
    [u, f] = l.useState(new Set);
  switch (r) {
    case 1:
      s = (0, i.jsx)(o.default, {
        onShare: async e => {
          try {
            await (0, C.createReferralTrials)(e.map(e => e.id)), c(2), f(new Set(e))
          } catch {}
        },
        onClose: a
      });
      break;
    case 2:
      s = (0, i.jsx)(d.default, {
        selectedUsers: u,
        onClose: a
      });
      break;
    default:
      a()
  }
  return (0, i.jsx)(n.ModalRoot, {
    transitionState: t,
    children: s
  })
}