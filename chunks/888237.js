"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var l = n("37983");
n("884691");
var a = n("414456"),
  s = n.n(a),
  i = n("77078"),
  r = n("772280"),
  u = n("782340"),
  o = n("673224");

function d(e) {
  let {
    className: t,
    iconContainerClassName: n,
    icon: a,
    color: d,
    title: c,
    description: f,
    userCount: h,
    onClick: m,
    highlight: p
  } = e;
  return (0, l.jsxs)(i.Clickable, {
    className: s(o.container, t, null != p && {
      [o.pulse]: p
    }),
    onClick: m,
    children: [(0, l.jsx)("div", {
      style: {
        backgroundColor: d
      },
      className: s(o.icon, n),
      children: a
    }), (0, l.jsxs)("div", {
      className: o.textContainer,
      children: [(0, l.jsx)(i.Heading, {
        variant: "heading-md/semibold",
        children: c
      }), (0, l.jsx)(i.Text, {
        variant: "text-xs/normal",
        color: "header-secondary",
        className: o.inline,
        children: f
      }), null != h && h > 0 ? (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(i.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          className: o.dot,
          children: "•"
        }), (0, l.jsx)(i.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          className: o.inline,
          children: u.default.Messages.GUILD_EVENT_INTERESTED.format({
            count: h
          })
        })]
      }) : null]
    }), (0, l.jsx)(r.default, {
      height: 16,
      width: 16,
      className: o.caret
    })]
  })
}