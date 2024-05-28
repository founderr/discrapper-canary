"use strict";
r.r(t), r.d(t, {
  default: function() {
    return o
  }
});
var n = r("735250");
r("470079");
var a = r("120356"),
  s = r.n(a),
  l = r("481060"),
  u = r("809086"),
  i = r("465670"),
  c = r("299741");

function d(e) {
  let {
    className: t,
    onClose: r
  } = e;
  return (0, n.jsx)(l.Clickable, {
    className: s()(c.closeButtonContainer, t),
    onClick: r,
    children: (0, n.jsx)(i.default, {
      width: 16,
      height: 16,
      className: c.closeButtonIcon
    })
  })
}

function o(e) {
  let {
    guildProductListing: t,
    onClose: r,
    className: a
  } = e;
  return (0, n.jsxs)(l.ModalHeader, {
    className: s()(c.header, a),
    separator: !1,
    children: [(0, n.jsx)(u.default, {
      className: c.headerImage,
      listing: t,
      imageSize: 500,
      alt: ""
    }), (0, n.jsx)(d, {
      className: c.closeButton,
      onClose: r
    })]
  })
}