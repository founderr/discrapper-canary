"use strict";
l.r(t), l.d(t, {
  default: function() {
    return c
  }
});
var i = l("735250");
l("470079");
var a = l("120356"),
  n = l.n(a),
  s = l("481060"),
  r = l("689938"),
  o = l("383814");

function c(e) {
  let {
    className: t,
    onClick: l,
    imageSrc: a,
    iconSrc: c,
    header: d,
    headerClassName: u,
    subheaderVariant: p = "text-sm/normal",
    subheader: _,
    children: m,
    animatesOnHover: f,
    ...h
  } = e, I = null != a, g = (0, i.jsxs)(i.Fragment, {
    children: [I && (0, i.jsx)("div", {
      className: o.imageContainer,
      children: (0, i.jsx)("img", {
        alt: "",
        className: o.image,
        src: a
      })
    }), (0, i.jsxs)("div", {
      className: o.textContainer,
      children: [(0, i.jsxs)("div", {
        className: n()(o.topRowContainer),
        children: [null != c && (0, i.jsx)("img", {
          className: o.icon,
          alt: "",
          "aria-hidden": !0,
          src: c,
          width: 48,
          height: 48
        }), (0, i.jsxs)("div", {
          className: o.headerContainer,
          children: [(0, i.jsx)(s.Heading, {
            variant: "heading-md/medium",
            className: u,
            children: d
          }), null != _ && (0, i.jsx)(s.Text, {
            className: o.subheader,
            color: "header-secondary",
            variant: p,
            children: _
          })]
        })]
      }), m]
    })]
  }), v = n()(t, o.container, {
    [o.hasImage]: I
  });
  return null != l ? (0, i.jsx)(s.ClickableContainer, {
    tag: "article",
    "aria-label": r.default.Messages.APP_DIRECTORY_LISTING_CARD_BUTTON_A11Y_LABEL.format({
      name: d
    }),
    onClick: l,
    className: n()(v, o.clickable, {
      [o.animatesOnHoverContainer]: f
    }),
    focusProps: {
      offset: 4
    },
    children: g
  }) : (0, i.jsx)("article", {
    className: v,
    ...h,
    children: g
  })
}