t.d(n, {
  Z: function() {
    return x
  }
});
var o = t(735250);
t(470079);
var s = t(481060),
  r = t(726542),
  i = t(277390),
  a = t(63063),
  c = t(376340),
  l = t(981631),
  d = t(927923),
  u = t(689938),
  C = t(916839),
  _ = t(418811);

function O() {
  return (0, o.jsxs)("div", {
    className: C.getXboxApp,
    children: [(0, o.jsxs)("div", {
      className: C.getXboxAppBody,
      children: [(0, o.jsxs)(s.Heading, {
        className: C.getXboxAppHeading,
        variant: "text-lg/semibold",
        children: [(0, o.jsx)("div", {
          className: C.xboxLogoBox,
          children: (0, o.jsx)("img", {
            src: r.Z.get(l.ABu.XBOX).icon.whiteSVG,
            alt: ""
          })
        }), u.Z.Messages.GET_XBOX_APP]
      }), (0, o.jsx)(s.Text, {
        tag: "p",
        variant: "text-md/normal",
        color: "header-secondary",
        children: u.Z.Messages.CONNECT_XBOX_SUCCESS_APP_BODY
      }), (0, o.jsx)(s.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: (0, o.jsx)(s.Anchor, {
          href: a.Z.getArticleURL(l.BhN.XBOX_CONNECTION),
          children: u.Z.Messages.LEARN_MORE
        })
      })]
    }), (0, o.jsx)(i.ZP, {
      className: C.getXboxAppQR,
      text: d.X3,
      size: 90
    })]
  })
}

function x(e) {
  let {
    onClose: n
  } = e;
  return (0, o.jsx)(c.L, {
    img: (0, o.jsx)("img", {
      src: _,
      width: "232",
      height: "113",
      alt: ""
    }),
    title: u.Z.Messages.CONNECT_XBOX_SUCCESS_TITLE,
    body: u.Z.Messages.CONNECT_XBOX_SUCCESS_BODY,
    content: (0, o.jsx)(O, {}),
    onClose: n
  })
}