var s = n(735250),
  i = n(470079),
  l = n(481060),
  a = n(920040);
let r = i.forwardRef(function(e, t) {
  let {
    title: n,
    subtitle: i,
    icon: r,
    style: o
  } = e;
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsxs)("div", {
      style: o,
      className: a.sectionHeader,
      children: [(0, s.jsxs)("div", {
        className: a.sectionHeaderTitle,
        children: [r, (0, s.jsx)(l.Heading, {
          variant: "heading-md/medium",
          color: "header-primary",
          children: n
        })]
      }), null != i && (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)("div", {
          className: a.sectionHeaderSpacer
        }), (0, s.jsx)(l.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          children: i
        })]
      })]
    }), (0, s.jsx)("div", {
      ref: t
    })]
  })
});
t.Z = i.memo(r)