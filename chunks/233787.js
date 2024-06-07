"use strict";
s.r(t);
var l, n, a = s("735250");
s("470079");
var r = s("481060"),
  i = s("285952"),
  c = s("979672");
(l = n || (n = {})).UPGRADE = "UPGRADE", l.CANCEL = "CANCEL", l.UNVERIFIED = "UNVERIFIED", l.UNCLAIMED = "UNCLAIMED", l.GRANDFATHERED = "GRANDFATHERED";
let o = {
    UPGRADE: "imageUpgrade",
    CANCEL: "imageCancel",
    UNVERIFIED: "imageUnverified",
    UNCLAIMED: "imageUnclaimed",
    GRANDFATHERED: "imageCancel"
  },
  u = e => {
    let {
      children: t,
      ...s
    } = e;
    return (0, a.jsx)(r.ModalRoot, {
      ...s,
      children: t
    })
  };
u.Header = e => {
  let {
    children: t,
    onClose: s
  } = e;
  return (0, a.jsxs)(r.ModalHeader, {
    justify: i.default.Justify.BETWEEN,
    separator: !1,
    children: [(0, a.jsx)(r.FormTitle, {
      tag: r.FormTitleTags.H4,
      children: t
    }), null != s ? (0, a.jsx)(r.ModalCloseButton, {
      className: c.__invalid_closeIcon,
      onClick: s
    }) : null]
  })
}, u.Content = e => {
  let {
    children: t,
    type: s
  } = e;
  return (0, a.jsxs)(r.ModalContent, {
    children: [(0, a.jsx)("div", {
      className: c[o[s]]
    }), (0, a.jsx)("div", {
      className: c.message,
      children: t
    })]
  })
}, u.Footer = e => {
  let {
    primary: t,
    primaryRenderer: s,
    secondary: l
  } = e;
  return (0, a.jsx)(r.ModalFooter, {
    children: (0, a.jsxs)(i.default, {
      justify: i.default.Justify.END,
      children: [null != l ? (0, a.jsx)(r.Button, {
        onClick: l.onClick,
        look: r.Button.Looks.LINK,
        innerClassName: c.secondaryButton,
        children: l.label
      }) : null, null != t ? (0, a.jsx)(r.Button, {
        onClick: t.onClick,
        color: r.Button.Colors.BRAND,
        children: t.label
      }) : s]
    })
  })
}, u.Types = n, t.default = u