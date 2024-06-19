var t, l, a = n(735250);
n(470079);
var o = n(481060),
  r = n(285952),
  c = n(83171);
(t = l || (l = {})).UPGRADE = "UPGRADE", t.CANCEL = "CANCEL", t.UNVERIFIED = "UNVERIFIED", t.UNCLAIMED = "UNCLAIMED", t.GRANDFATHERED = "GRANDFATHERED";
let i = {
    UPGRADE: "imageUpgrade",
    CANCEL: "imageCancel",
    UNVERIFIED: "imageUnverified",
    UNCLAIMED: "imageUnclaimed",
    GRANDFATHERED: "imageCancel"
  },
  u = e => {
    let {
      children: s,
      ...n
    } = e;
    return (0, a.jsx)(o.ModalRoot, {
      ...n,
      children: s
    })
  };
u.Header = e => {
  let {
    children: s,
    onClose: n
  } = e;
  return (0, a.jsxs)(o.ModalHeader, {
    justify: r.Z.Justify.BETWEEN,
    separator: !1,
    children: [(0, a.jsx)(o.FormTitle, {
      tag: o.FormTitleTags.H4,
      children: s
    }), null != n ? (0, a.jsx)(o.ModalCloseButton, {
      className: c.__invalid_closeIcon,
      onClick: n
    }) : null]
  })
}, u.Content = e => {
  let {
    children: s,
    type: n
  } = e;
  return (0, a.jsxs)(o.ModalContent, {
    children: [(0, a.jsx)("div", {
      className: c[i[n]]
    }), (0, a.jsx)("div", {
      className: c.message,
      children: s
    })]
  })
}, u.Footer = e => {
  let {
    primary: s,
    primaryRenderer: n,
    secondary: t
  } = e;
  return (0, a.jsx)(o.ModalFooter, {
    children: (0, a.jsxs)(r.Z, {
      justify: r.Z.Justify.END,
      children: [null != t ? (0, a.jsx)(o.Button, {
        onClick: t.onClick,
        look: o.Button.Looks.LINK,
        innerClassName: c.secondaryButton,
        children: t.label
      }) : null, null != s ? (0, a.jsx)(o.Button, {
        onClick: s.onClick,
        color: o.Button.Colors.BRAND,
        children: s.label
      }) : n]
    })
  })
}, u.Types = l, s.Z = u