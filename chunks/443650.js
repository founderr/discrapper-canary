r.d(n, {
  Z: function() {
    return u
  }
});
var t = r(735250);
r(470079);
var o = r(120356),
  a = r.n(o),
  i = r(481060),
  l = r(809086),
  s = r(612704);

function c(e) {
  let {
    className: n,
    onClose: r
  } = e;
  return (0, t.jsx)(i.Clickable, {
    className: a()(s.closeButtonContainer, n),
    onClick: r,
    children: (0, t.jsx)(i.CloseSmallIcon, {
      size: "xs",
      color: "currentColor",
      className: s.closeButtonIcon
    })
  })
}

function u(e) {
  let {
    guildProductListing: n,
    onClose: r,
    className: o
  } = e;
  return (0, t.jsxs)(i.ModalHeader, {
    className: a()(s.header, o),
    separator: !1,
    children: [(0, t.jsx)(l.Z, {
      className: s.headerImage,
      listing: n,
      imageSize: 500,
      alt: ""
    }), (0, t.jsx)(c, {
      className: s.closeButton,
      onClose: r
    })]
  })
}