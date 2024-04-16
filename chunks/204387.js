"use strict";
t.r(s), t.d(s, {
  Steps: function() {
    return i
  }
}), t("47120");
var i, l, a = t("735250"),
  r = t("470079"),
  C = t("481060"),
  n = t("687555"),
  o = t("596583");
(l = i || (i = {}))[l.SELECT_FRIENDS = 1] = "SELECT_FRIENDS", l[l.CONFIRMATION = 2] = "CONFIRMATION";
s.default = e => {
  let s, {
      transitionState: t,
      onClose: i
    } = e,
    [l, d] = r.useState(1),
    [c, x] = r.useState(new Set);
  switch (l) {
    case 1:
      s = (0, a.jsx)(n.default, {
        onShare: e => {
          d(2), x(e)
        },
        onClose: i
      });
      break;
    case 2:
      s = (0, a.jsx)(o.default, {
        selectedUsers: c,
        onClose: i
      });
      break;
    default:
      i()
  }
  return (0, a.jsx)(C.ModalRoot, {
    transitionState: t,
    children: s
  })
}