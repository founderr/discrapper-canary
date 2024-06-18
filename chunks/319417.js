"use strict";
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(481060),
  l = n(147915),
  u = n(689938),
  _ = n(286172);
t.Z = r.memo(function(e) {
  let {
    onClick: t,
    disabled: n = !1
  } = e;
  return (0, i.jsx)("div", {
    className: _.separator,
    children: (0, i.jsx)("div", {
      className: _.buttonContainer,
      children: (0, i.jsx)(l.Z, {
        className: _.button,
        innerClassName: _.innerButton,
        childClassName: o()(_.buttonChild, {
          [_.disabled]: n,
          [_.activeButtonChild]: !n
        }),
        onClick: t,
        disabled: n,
        isActive: !1,
        "aria-label": u.Z.Messages.SEND_MESSAGE,
        children: (0, i.jsx)(a.SendMessageIcon, {
          size: "xs",
          color: "currentColor",
          className: _.sendIcon
        })
      })
    })
  })
})