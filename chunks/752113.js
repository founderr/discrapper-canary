"use strict";
s.r(t), s.d(t, {
  default: function() {
    return d
  }
});
var n, l, a = s("37983");
s("884691");
var r = s("77078"),
  c = s("145131"),
  o = s("917570");
(n = l || (l = {})).UPGRADE = "UPGRADE", n.CANCEL = "CANCEL", n.UNVERIFIED = "UNVERIFIED", n.UNCLAIMED = "UNCLAIMED", n.GRANDFATHERED = "GRANDFATHERED";
let i = {
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
    justify: c.default.Justify.BETWEEN,
    separator: !1,
    children: [(0, a.jsx)(r.FormTitle, {
      tag: r.FormTitleTags.H4,
      children: t
    }), null != s ? (0, a.jsx)(r.ModalCloseButton, {
      className: o.closeIcon,
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
      className: o[i[s]]
    }), (0, a.jsx)("div", {
      className: o.message,
      children: t
    })]
  })
}, u.Footer = e => {
  let {
    primary: t,
    primaryRenderer: s,
    secondary: n
  } = e;
  return (0, a.jsx)(r.ModalFooter, {
    children: (0, a.jsxs)(c.default, {
      justify: c.default.Justify.END,
      children: [null != n ? (0, a.jsx)(r.Button, {
        onClick: n.onClick,
        look: r.Button.Looks.LINK,
        innerClassName: o.secondaryButton,
        children: n.label
      }) : null, null != t ? (0, a.jsx)(r.Button, {
        onClick: t.onClick,
        color: r.Button.Colors.BRAND,
        children: t.label
      }) : s]
    })
  })
}, u.Types = l;
var d = u