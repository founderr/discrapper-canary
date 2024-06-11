"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var i = n("735250");
n("470079");
var a = n("120356"),
  s = n.n(a),
  r = n("481060"),
  l = n("528027"),
  u = n("686807"),
  o = n("113318"),
  d = n("615116");

function c(e) {
  let {
    benefit: t,
    guildId: n
  } = e, a = (0, o.default)(n, t.ref_id), c = (0, i.jsx)(l.default, {
    guildId: n,
    emojiId: t.emoji_id,
    emojiName: t.emoji_name
  }), f = null != a ? (0, i.jsx)(r.Clickable, {
    className: d.__invalid_channelLink,
    onClick: a.navigateToChannel,
    "aria-label": a.ariaLabel,
    role: "link",
    children: (0, i.jsx)(r.Text, {
      variant: "text-md/medium",
      color: "header-primary",
      className: s()(d.name, d.linkedName),
      children: (0, u.default)(t)
    })
  }) : (0, i.jsx)(r.Text, {
    variant: "text-md/medium",
    color: "header-primary",
    className: d.name,
    children: (0, u.default)(t)
  });
  return (0, i.jsxs)("div", {
    className: d.container,
    children: [(0, i.jsxs)("div", {
      className: d.infoContainer,
      children: [f, (0, i.jsx)(r.Text, {
        color: "interactive-normal",
        variant: "text-sm/normal",
        children: t.description
      })]
    }), (0, i.jsx)("div", {
      className: d.emojiContainer,
      children: c
    })]
  })
}