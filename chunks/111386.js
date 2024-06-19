n(47120);
var l = n(735250),
  i = n(470079),
  s = n(704215),
  a = n(481060),
  r = n(243778),
  o = n(689938),
  c = n(604598),
  u = n(442937);
let d = () => (0, l.jsxs)("div", {
  className: c.coachtipInner,
  children: [(0, l.jsx)("img", {
    src: u,
    alt: o.Z.Messages.CONTENT_INVENTORY_COACHTIP_IMAGE_ALT,
    className: c.coachtipAsset
  }), (0, l.jsxs)("div", {
    className: c.coachtipTextContainer,
    children: [(0, l.jsx)(a.Heading, {
      variant: "heading-lg/semibold",
      children: o.Z.Messages.CONTENT_INVENTORY_COACHTIP_HEADER
    }), (0, l.jsx)(a.Text, {
      variant: "text-md/normal",
      color: "text-secondary",
      children: o.Z.Messages.CONTENT_INVENTORY_COACHTIP_TEXT
    })]
  })]
});
t.Z = e => {
  let {
    children: t
  } = e, [n] = (0, r.U)([s.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP]), [o, u] = i.useState(!1);
  return (i.useEffect(() => {
    setTimeout(() => {
      u(!0)
    }, 300)
  }), n !== s.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP) ? (0, l.jsx)(l.Fragment, {
    children: t
  }) : (0, l.jsx)(a.Tooltip, {
    text: (0, l.jsx)(d, {}),
    tooltipClassName: c.coachtip,
    tooltipContentClassName: c.coachtipContent,
    position: "left",
    allowOverflow: !0,
    forceOpen: o,
    shouldShow: o,
    hideOnClick: !1,
    "aria-label": "test",
    children: e => (0, l.jsx)("div", {
      ...e,
      children: t
    })
  })
}