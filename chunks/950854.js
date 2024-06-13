"use strict";
i.r(t), i.d(t, {
  default: function() {
    return c
  }
});
var n = i("735250");
i("470079");
var a = i("120356"),
  l = i.n(a),
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
    subheaderVariant: h = "text-sm/normal",
    subheader: p,
    children: m,
    animatesOnHover: f,
    ...g
  } = e, C = null != a, _ = (0, n.jsxs)(n.Fragment, {
    children: [C && (0, n.jsx)("div", {
      className: o.imageContainer,
      children: (0, n.jsx)("img", {
        alt: "",
        className: o.image,
        src: a
      })
    }), (0, n.jsxs)("div", {
      className: o.textContainer,
      children: [(0, n.jsxs)("div", {
        className: l()(o.topRowContainer),
        children: [null != c && (0, n.jsx)("img", {
          className: o.icon,
          alt: "",
          "aria-hidden": !0,
          src: c,
          width: 48,
          height: 48
        }), (0, n.jsxs)("div", {
          className: o.headerContainer,
          children: [(0, n.jsx)(s.Heading, {
            variant: "heading-md/medium",
            className: u,
            children: d
          }), null != p && (0, n.jsx)(s.Text, {
            className: o.subheader,
            color: "header-secondary",
            variant: h,
            children: p
          })]
        })]
      }), m]
    })]
  }), I = l()(t, o.container, {
    [o.hasImage]: C
  });
  return null != i ? (0, n.jsx)(s.ClickableContainer, {
    tag: "article",
    "aria-label": r.default.Messages.APP_DIRECTORY_LISTING_CARD_BUTTON_A11Y_LABEL.format({
      name: d
    }),
    onClick: i,
    className: l()(I, o.clickable, {
      [o.animatesOnHoverContainer]: f
    }),
    focusProps: {
      offset: 4
    },
    children: _
  }) : (0, n.jsx)("article", {
    className: I,
    ...g,
    children: _
  })
}