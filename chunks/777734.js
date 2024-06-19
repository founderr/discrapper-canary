var i = n(735250),
  s = n(470079),
  l = n(481060),
  a = n(920040);
let r = s.forwardRef(function(e, t) {
  let {
    title: n,
    subtitle: s,
    icon: r,
    style: o
  } = e;
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)("div", {
      style: o,
      className: a.sectionHeader,
      children: [(0, i.jsxs)("div", {
        className: a.sectionHeaderTitle,
        children: [r, (0, i.jsx)(l.Heading, {
          variant: "heading-md/medium",
          color: "header-primary",
          children: n
        })]
      }), null != s && (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("div", {
          className: a.sectionHeaderSpacer
        }), (0, i.jsx)(l.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          children: s
        })]
      })]
    }), (0, i.jsx)("div", {
      ref: t
    })]
  })
});
t.Z = s.memo(r)