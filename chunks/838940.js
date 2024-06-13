"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
});
var n = s("735250");
s("470079");
var i = s("120356"),
  l = s.n(i),
  a = s("481060"),
  r = s("528027"),
  u = s("686807"),
  o = s("113318"),
  d = s("615116");

function c(e) {
  let {
    benefit: t,
    guildId: s
  } = e, i = (0, o.default)(s, t.ref_id), c = (0, n.jsx)(r.default, {
    guildId: s,
    emojiId: t.emoji_id,
    emojiName: t.emoji_name
  }), f = null != i ? (0, n.jsx)(a.Clickable, {
    className: d.__invalid_channelLink,
    onClick: i.navigateToChannel,
    "aria-label": i.ariaLabel,
    role: "link",
    children: (0, n.jsx)(a.Text, {
      variant: "text-md/medium",
      color: "header-primary",
      className: l()(d.name, d.linkedName),
      children: (0, u.default)(t)
    })
  }) : (0, n.jsx)(a.Text, {
    variant: "text-md/medium",
    color: "header-primary",
    className: d.name,
    children: (0, u.default)(t)
  });
  return (0, n.jsxs)("div", {
    className: d.container,
    children: [(0, n.jsxs)("div", {
      className: d.infoContainer,
      children: [f, (0, n.jsx)(a.Text, {
        color: "interactive-normal",
        variant: "text-sm/normal",
        children: t.description
      })]
    }), (0, n.jsx)("div", {
      className: d.emojiContainer,
      children: c
    })]
  })
}