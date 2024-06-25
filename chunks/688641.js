n.d(t, {
  Z: function() {
    return c
  }
});
var l = n(735250);
n(470079);
var i = n(120356),
  s = n.n(i),
  a = n(481060),
  r = n(689938),
  o = n(935560);

function c(e) {
  let {
    className: t,
    iconContainerClassName: n,
    icon: i,
    color: c,
    title: u,
    description: d,
    userCount: h,
    onClick: m,
    highlight: E
  } = e;
  return (0, l.jsxs)(a.Clickable, {
    className: s()(o.container, t, null != E && {
      [o.pulse]: E
    }),
    onClick: m,
    children: [(0, l.jsx)("div", {
      style: {
        backgroundColor: c
      },
      className: s()(o.icon, n),
      children: i
    }), (0, l.jsxs)("div", {
      className: o.textContainer,
      children: [(0, l.jsx)(a.Heading, {
        variant: "heading-md/semibold",
        children: u
      }), (0, l.jsx)(a.Text, {
        variant: "text-xs/normal",
        color: "header-secondary",
        className: o.inline,
        children: d
      }), null != h && h > 0 ? (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(a.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          className: o.dot,
          children: "•"
        }), (0, l.jsx)(a.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          className: o.inline,
          children: r.Z.Messages.GUILD_EVENT_INTERESTED.format({
            count: h
          })
        })]
      }) : null]
    }), (0, l.jsx)(a.ChevronSmallRightIcon, {
      size: "xs",
      color: "currentColor",
      className: o.caret
    })]
  })
}