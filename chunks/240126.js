n.d(t, {
  Z: function() {
    return o
  }
});
var s = n(735250);
n(470079);
var i = n(481060),
  l = n(499033),
  a = n(689938),
  r = n(930960);

function o(e) {
  let {
    Icon: t,
    header: n,
    tip: o,
    disableStars: c
  } = e;
  return (0, s.jsxs)("div", {
    className: r.container,
    children: [(0, s.jsxs)("div", {
      className: r.iconContainer,
      children: [(0, s.jsx)(t, {
        color: "currentColor",
        size: "custom",
        className: r.icon,
        width: 36,
        height: 36
      }), c ? null : (0, s.jsx)(l.Z, {
        className: r.stars
      })]
    }), (0, s.jsx)(i.Heading, {
      className: r.header,
      variant: "heading-xl/semibold",
      children: n
    }), (0, s.jsxs)(i.Text, {
      color: "header-secondary",
      variant: "text-xs/normal",
      children: [c ? null : (0, s.jsxs)(i.Text, {
        tag: "span",
        className: r.protip,
        variant: "text-xs/bold",
        color: "text-positive",
        children: [a.Z.Messages.FORM_LABEL_ROLES_PRO_TIP, ":", " "]
      }), o]
    })]
  })
}