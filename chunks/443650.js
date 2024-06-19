t.d(n, {
  Z: function() {
    return u
  }
});
var r = t(735250);
t(470079);
var s = t(120356),
  l = t.n(s),
  a = t(481060),
  o = t(809086),
  i = t(612704);

function c(e) {
  let {
    className: n,
    onClose: t
  } = e;
  return (0, r.jsx)(a.Clickable, {
    className: l()(i.closeButtonContainer, n),
    onClick: t,
    children: (0, r.jsx)(a.CloseSmallIcon, {
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
    className: s
  } = e;
  return (0, r.jsxs)(a.ModalHeader, {
    className: l()(i.header, s),
    separator: !1,
    children: [(0, r.jsx)(o.Z, {
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