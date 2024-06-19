i.d(t, {
  Z: function() {
    return c
  }
});
var n = i(735250);
i(470079);
var s = i(120356),
  a = i.n(s),
  r = i(481060),
  l = i(689938),
  o = i(681474);

function c(e) {
  let {
    className: t,
    onClick: i,
    imageSrc: s,
    iconSrc: c,
    header: d,
    headerClassName: u,
    subheaderVariant: h = "text-sm/normal",
    subheader: m,
    children: p,
    animatesOnHover: _,
    ...x
  } = e, g = null != s, C = (0, n.jsxs)(n.Fragment, {
    children: [g && (0, n.jsx)("div", {
      className: o.imageContainer,
      children: (0, n.jsx)("img", {
        alt: "",
        className: o.image,
        src: s
      })
    }), (0, n.jsxs)("div", {
      className: o.textContainer,
      children: [(0, n.jsxs)("div", {
        className: a()(o.topRowContainer),
        children: [null != c && (0, n.jsx)("img", {
          className: o.icon,
          alt: "",
          "aria-hidden": !0,
          src: c,
          width: 48,
          height: 48
        }), (0, n.jsxs)("div", {
          className: o.headerContainer,
          children: [(0, n.jsx)(r.Heading, {
            variant: "heading-md/medium",
            className: u,
            children: d
          }), null != m && (0, n.jsx)(r.Text, {
            className: o.subheader,
            color: "header-secondary",
            variant: h,
            children: m
          })]
        })]
      }), p]
    })]
  }), I = a()(t, o.container, {
    [o.hasImage]: g
  });
  return null != i ? (0, n.jsx)(r.ClickableContainer, {
    tag: "article",
    "aria-label": l.Z.Messages.APP_DIRECTORY_LISTING_CARD_BUTTON_A11Y_LABEL.format({
      name: d
    }),
    onClick: i,
    className: a()(I, o.clickable, {
      [o.animatesOnHoverContainer]: _
    }),
    focusProps: {
      offset: 4
    },
    children: C
  }) : (0, n.jsx)("article", {
    className: I,
    ...x,
    children: C
  })
}