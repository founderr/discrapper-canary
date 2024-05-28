"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var s = n("735250");
n("470079");
var a = n("120356"),
  i = n.n(a),
  l = n("481060"),
  r = n("528027"),
  u = n("686807"),
  o = n("113318"),
  d = n("615116");

function c(e) {
  let {
    benefit: t,
    guildId: n
  } = e, a = (0, o.default)(n, t.ref_id), c = (0, s.jsx)(r.default, {
    guildId: n,
    emojiId: t.emoji_id,
    emojiName: t.emoji_name
  }), E = null != a ? (0, s.jsx)(l.Clickable, {
    className: d.__invalid_channelLink,
    onClick: a.navigateToChannel,
    "aria-label": a.ariaLabel,
    role: "link",
    children: (0, s.jsx)(l.Text, {
      variant: "text-md/medium",
      color: "header-primary",
      className: i()(d.name, d.linkedName),
      children: (0, u.default)(t)
    })
  }) : (0, s.jsx)(l.Text, {
    variant: "text-md/medium",
    color: "header-primary",
    className: d.name,
    children: (0, u.default)(t)
  });
  return (0, s.jsxs)("div", {
    className: d.container,
    children: [(0, s.jsxs)("div", {
      className: d.infoContainer,
      children: [E, (0, s.jsx)(l.Text, {
        color: "interactive-normal",
        variant: "text-sm/normal",
        children: t.description
      })]
    }), (0, s.jsx)("div", {
      className: d.emojiContainer,
      children: c
    })]
  })
}