"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var l = n("37983");
n("884691");
var a = n("414456"),
  s = n.n(a),
  i = n("77078"),
  r = n("484456"),
  u = n("559979"),
  o = n("70695"),
  d = n("191169");

function c(e) {
  let {
    benefit: t,
    guildId: n
  } = e, a = (0, o.default)(n, t.ref_id), c = (0, l.jsx)(r.default, {
    guildId: n,
    emojiId: t.emoji_id,
    emojiName: t.emoji_name
  }), f = null != a ? (0, l.jsx)(i.Clickable, {
    className: d.channelLink,
    onClick: a.navigateToChannel,
    "aria-label": a.ariaLabel,
    role: "link",
    children: (0, l.jsx)(i.Text, {
      variant: "text-md/medium",
      color: "header-primary",
      className: s(d.name, d.linkedName),
      children: (0, u.default)(t)
    })
  }) : (0, l.jsx)(i.Text, {
    variant: "text-md/medium",
    color: "header-primary",
    className: d.name,
    children: (0, u.default)(t)
  });
  return (0, l.jsxs)("div", {
    className: d.container,
    children: [(0, l.jsxs)("div", {
      className: d.infoContainer,
      children: [f, (0, l.jsx)(i.Text, {
        color: "interactive-normal",
        variant: "text-sm/normal",
        children: t.description
      })]
    }), (0, l.jsx)("div", {
      className: d.emojiContainer,
      children: c
    })]
  })
}