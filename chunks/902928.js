n.d(t, {
  u: function() {
    return c
  }
});
var a = n(735250),
  r = n(470079),
  o = n(159277),
  s = n(481060),
  l = n(689938),
  u = n(125476),
  i = n(290661);
let c = e => {
  let {
    onComplete: t,
    data: n
  } = e, c = null, d = (0, r.useId)();
  return (n.clientId === o.t.PLAYSTATION_APPLICATION_ID || n.clientId === o.t.PLAYSTATION_STAGING_APPLICATION_ID) && (c = (0, a.jsx)("img", {
    src: i,
    width: "241",
    height: "118",
    alt: "",
    "aria-labelledby": d
  })), (0, a.jsxs)("div", {
    className: u.bodyContent,
    children: [c, (0, a.jsx)(s.Heading, {
      className: u.title,
      variant: "heading-xl/extrabold",
      id: d,
      children: l.Z.Messages.ACTIVATE_DEVICE_SUCCESS_TITLE
    }), null != n.twoWayLinkCode ? (0, a.jsx)(s.Text, {
      tag: "p",
      variant: "text-md/normal",
      color: "header-secondary",
      children: l.Z.Messages.ACTIVATE_DEVICE_SUCCESS_TWO_WAY_BODY
    }) : null, (0, a.jsx)(s.Button, {
      className: u.footerButton,
      color: s.Button.Colors.BRAND,
      onClick: t,
      children: l.Z.Messages.DONE
    })]
  })
}