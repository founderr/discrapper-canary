"use strict";
s.r(t);
var a = s("735250");
s("470079");
var n = s("481060"),
  i = s("86813"),
  l = s("861559");
t.default = e => {
  let {
    label: t,
    onClick: s,
    submitting: r
  } = e;
  return (0, a.jsx)(n.Clickable, {
    onClick: r ? void 0 : s,
    className: l.button,
    children: (0, a.jsxs)("div", {
      className: l.contentContainer,
      children: [r ? (0, a.jsx)(n.Spinner, {
        type: n.Spinner.Type.PULSING_ELLIPSIS,
        className: l.__invalid_spinner
      }) : (0, a.jsx)(n.Text, {
        variant: "text-md/medium",
        className: l.label,
        children: t
      }), (0, a.jsx)(i.default, {
        className: l.arrow
      })]
    })
  })
}