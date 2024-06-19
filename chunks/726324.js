n.d(t, {
  Z: function() {
    return u
  }
}), n(47120);
var i = n(735250);
n(470079);
var s = n(481060),
  l = n(695346),
  a = n(346656),
  r = n(506071),
  o = n(353254),
  c = n(759475);

function u(e) {
  let {
    coverImageAsset: t,
    title: n,
    guild: u,
    description: d,
    children: E
  } = e, h = l.QK.useSetting(), _ = (0, r.n)(), [I, m] = (0, o.Z)(t, _ && h);
  return (0, i.jsxs)("div", {
    className: c.container,
    children: [(0, i.jsx)("div", {
      ref: I,
      className: c.coverImageContainer,
      children: null != m && (0, i.jsx)("img", {
        src: m,
        alt: "",
        className: c.coverImage
      })
    }), (0, i.jsx)("div", {
      className: c.guildIconContainer,
      children: (0, i.jsx)(a.Z, {
        guild: u,
        size: a.Z.Sizes.XLARGE
      })
    }), (0, i.jsx)(s.Heading, {
      variant: "heading-xl/semibold",
      className: c.ctaTitle,
      children: n
    }), (0, i.jsx)(s.Text, {
      className: c.ctaSubtitle,
      variant: "text-md/normal",
      color: "header-secondary",
      children: d
    }), E]
  })
}