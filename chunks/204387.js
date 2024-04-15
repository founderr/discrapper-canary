"use strict";
t.r(s), t.d(s, {
  Steps: function() {
    return i
  }
}), t("47120");
var i, l, C = t("735250"),
  a = t("470079"),
  r = t("481060"),
  n = t("687555"),
  o = t("596583");
(l = i || (i = {}))[l.SELECT_FRIENDS = 1] = "SELECT_FRIENDS", l[l.CONFIRMATION = 2] = "CONFIRMATION";
s.default = e => {
  let s, {
      transitionState: t,
      onClose: i
    } = e,
    [l, d] = a.useState(1),
    [c, x] = a.useState(new Set);
  switch (l) {
    case 1:
      s = (0, C.jsx)(n.default, {
        onShare: () => d(2),
        onClose: i,
        setSelectedUsers: x
      });
      break;
    case 2:
      s = (0, C.jsx)(o.default, {
        selectedUsers: c,
        onClose: i
      });
      break;
    default:
      i()
  }
  return (0, C.jsx)(r.ModalRoot, {
    transitionState: t,
    children: s
  })
}