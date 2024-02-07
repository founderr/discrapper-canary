"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var r = n("37983");
n("884691");
var u = n("414456"),
  i = n.n(u),
  a = n("77078"),
  l = n("750482"),
  s = n("945330"),
  o = n("516864");

function c(e) {
  let {
    className: t,
    onClose: n
  } = e;
  return (0, r.jsx)(a.Clickable, {
    className: i(o.closeButtonContainer, t),
    onClick: n,
    children: (0, r.jsx)(s.default, {
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
    className: u
  } = e;
  return (0, r.jsxs)(a.ModalHeader, {
    className: i(o.header, u),
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