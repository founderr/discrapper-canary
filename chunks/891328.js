"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var u = n("37983");
n("884691");
var r = n("414456"),
  a = n.n(r),
  i = n("77078"),
  l = n("750482"),
  s = n("945330"),
  o = n("880672");

function c(e) {
  let {
    className: t,
    onClose: n
  } = e;
  return (0, u.jsx)(i.Clickable, {
    className: a(o.closeButtonContainer, t),
    onClick: n,
    children: (0, u.jsx)(s.default, {
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
    className: r
  } = e;
  return (0, u.jsxs)(i.ModalHeader, {
    className: a(o.header, r),
    separator: !1,
    children: [(0, u.jsx)(l.default, {
      className: o.headerImage,
      listing: t,
      imageSize: 500,
      alt: ""
    }), (0, u.jsx)(c, {
      className: o.closeButton,
      onClose: n
    })]
  })
}