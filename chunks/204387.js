"use strict";
t.r(s), t.d(s, {
  Steps: function() {
    return i
  }
}), t("47120");
var i, a, l = t("735250"),
  r = t("470079"),
  C = t("481060"),
  n = t("281494"),
  d = t("687555"),
  o = t("596583");
(a = i || (i = {}))[a.SELECT_FRIENDS = 1] = "SELECT_FRIENDS", a[a.CONFIRMATION = 2] = "CONFIRMATION";
s.default = e => {
  let s, {
      transitionState: t,
      onClose: i
    } = e,
    [a, c] = r.useState(1),
    [u, f] = r.useState(new Set);
  switch (a) {
    case 1:
      s = (0, l.jsx)(d.default, {
        onShare: async e => {
          try {
            await (0, n.createReferralTrials)(e.map(e => e.id)), c(2), f(new Set(e))
          } catch {}
        },
        onClose: i
      });
      break;
    case 2:
      s = (0, l.jsx)(o.default, {
        selectedUsers: u,
        onClose: i
      });
      break;
    default:
      i()
  }
  return (0, l.jsx)(C.ModalRoot, {
    transitionState: t,
    children: s
  })
}