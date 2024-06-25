t.d(n, {
  Z: function() {
    return u
  }
});
var r = t(735250);
t(470079);
var o = t(120356),
  a = t.n(o),
  l = t(481060),
  s = t(809086),
  i = t(612704);

function c(e) {
  let {
    className: n,
    onClose: t
  } = e;
  return (0, r.jsx)(l.Clickable, {
    className: a()(i.closeButtonContainer, n),
    onClick: t,
    children: (0, r.jsx)(l.CloseSmallIcon, {
      size: "xs",
      color: "currentColor",
      className: i.closeButtonIcon
    })
  })
}

function u(e) {
  let {
    guildProductListing: n,
    onClose: t,
    className: o
  } = e;
  return (0, r.jsxs)(l.ModalHeader, {
    className: a()(i.header, o),
    separator: !1,
    children: [(0, r.jsx)(s.Z, {
      className: i.headerImage,
      listing: n,
      imageSize: 500,
      alt: ""
    }), (0, r.jsx)(c, {
      className: i.closeButton,
      onClose: t
    })]
  })
}