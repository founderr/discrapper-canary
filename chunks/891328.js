"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var r = n("37983");
n("884691");
var s = n("414456"),
  u = n.n(s),
  o = n("77078"),
  l = n("750482"),
  i = n("945330"),
  a = n("516864");

function c(e) {
  let {
    className: t,
    onClose: n
  } = e;
  return (0, r.jsx)(o.Clickable, {
    className: u(a.closeButtonContainer, t),
    onClick: n,
    children: (0, r.jsx)(i.default, {
      width: 16,
      height: 16,
      className: a.closeButtonIcon
    })
  })
}

function d(e) {
  let {
    guildProductListing: t,
    onClose: n,
    className: s
  } = e;
  return (0, r.jsxs)(o.ModalHeader, {
    className: u(a.header, s),
    separator: !1,
    children: [(0, r.jsx)(l.default, {
      className: a.headerImage,
      listing: t,
      imageSize: 500,
      alt: ""
    }), (0, r.jsx)(c, {
      className: a.closeButton,
      onClose: n
    })]
  })
}