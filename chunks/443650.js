"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var r = n("735250");
n("470079");
var s = n("120356"),
  u = n.n(s),
  a = n("481060"),
  l = n("809086"),
  i = n("465670"),
  o = n("299741");

function c(e) {
  let {
    className: t,
    onClose: n
  } = e;
  return (0, r.jsx)(a.Clickable, {
    className: u()(o.closeButtonContainer, t),
    onClick: n,
    children: (0, r.jsx)(i.default, {
      width: 16,
      height: 16,
      className: o.closeButtonIcon
    })
  })
}

function d(e) {
  let {
    guildProductListing: t,
    onClose: n,
    className: s
  } = e;
  return (0, r.jsxs)(a.ModalHeader, {
    className: u()(o.header, s),
    separator: !1,
    children: [(0, r.jsx)(l.default, {
      className: o.headerImage,
      listing: t,
      imageSize: 500,
      alt: ""
    }), (0, r.jsx)(c, {
      className: o.closeButton,
      onClose: n
    })]
  })
}