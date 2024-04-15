"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var r = n("735250");
n("470079");
var s = n("120356"),
  a = n.n(s),
  u = n("481060"),
  l = n("809086"),
  i = n("465670"),
  c = n("649202");

function d(e) {
  let {
    className: t,
    onClose: n
  } = e;
  return (0, r.jsx)(u.Clickable, {
    className: a()(c.closeButtonContainer, t),
    onClick: n,
    children: (0, r.jsx)(i.default, {
      width: 16,
      height: 16,
      className: c.closeButtonIcon
    })
  })
}

function o(e) {
  let {
    guildProductListing: t,
    onClose: n,
    className: s
  } = e;
  return (0, r.jsxs)(u.ModalHeader, {
    className: a()(c.header, s),
    separator: !1,
    children: [(0, r.jsx)(l.default, {
      className: c.headerImage,
      listing: t,
      imageSize: 500,
      alt: ""
    }), (0, r.jsx)(d, {
      className: c.closeButton,
      onClose: n
    })]
  })
}