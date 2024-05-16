"use strict";
i.r(t), i.d(t, {
  default: function() {
    return c
  }
});
var l = i("735250");
i("470079");
var a = i("120356"),
  n = i.n(a),
  s = i("481060"),
  r = i("689938"),
  o = i("383814");

function c(e) {
  let {
    className: t,
    onClick: i,
    imageSrc: a,
    iconSrc: c,
    header: d,
    headerClassName: u,
    subheaderVariant: p = "text-sm/normal",
    subheader: m,
    children: _,
    animatesOnHover: f,
    ...h
  } = e, I = null != a, g = (0, l.jsxs)(l.Fragment, {
    children: [I && (0, l.jsx)("div", {
      className: o.imageContainer,
      children: (0, l.jsx)("img", {
        alt: "",
        className: o.image,
        src: a
      })
    }), (0, l.jsxs)("div", {
      className: o.textContainer,
      children: [(0, l.jsxs)("div", {
        className: n()(o.topRowContainer),
        children: [null != c && (0, l.jsx)("img", {
          className: o.icon,
          alt: "",
          "aria-hidden": !0,
          src: c,
          width: 48,
          height: 48
        }), (0, l.jsxs)("div", {
          className: o.headerContainer,
          children: [(0, l.jsx)(s.Heading, {
            variant: "heading-md/medium",
            className: u,
            children: d
          }), null != m && (0, l.jsx)(s.Text, {
            className: o.subheader,
            color: "header-secondary",
            variant: p,
            children: m
          })]
        })]
      }), _]
    })]
  }), v = n()(t, o.container, {
    [o.hasImage]: I
  });
  return null != i ? (0, l.jsx)(s.ClickableContainer, {
    tag: "article",
    "aria-label": r.default.Messages.APP_DIRECTORY_LISTING_CARD_BUTTON_A11Y_LABEL.format({
      name: d
    }),
    onClick: i,
    className: n()(v, o.clickable, {
      [o.animatesOnHoverContainer]: f
    }),
    focusProps: {
      offset: 4
    },
    children: g
  }) : (0, l.jsx)("article", {
    className: v,
    ...h,
    children: g
  })
}