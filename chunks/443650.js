"use strict";
t.r(n), t.d(n, {
  default: function() {
    return d
  }
});
var a = t("735250");
t("470079");
var r = t("120356"),
  s = t.n(r),
  o = t("481060"),
  i = t("809086"),
  u = t("465670"),
  l = t("299741");

function c(e) {
  let {
    className: n,
    onClose: t
  } = e;
  return (0, a.jsx)(o.Clickable, {
    className: s()(l.closeButtonContainer, n),
    onClick: t,
    children: (0, a.jsx)(u.default, {
      width: 16,
      height: 16,
      className: l.closeButtonIcon
    })
  })
}

function d(e) {
  let {
    guildProductListing: n,
    onClose: t,
    className: r
  } = e;
  return (0, a.jsxs)(o.ModalHeader, {
    className: s()(l.header, r),
    separator: !1,
    children: [(0, a.jsx)(i.default, {
      className: l.headerImage,
      listing: n,
      imageSize: 500,
      alt: ""
    }), (0, a.jsx)(c, {
      className: l.closeButton,
      onClose: t
    })]
  })
}