"use strict";
s.r(t), s.d(t, {
  default: function() {
    return d
  }
});
var n = s("735250");
s("470079");
var i = s("481060"),
  l = s("259580"),
  a = s("528027"),
  r = s("686807"),
  u = s("113318"),
  o = s("946260");

function d(e) {
  let {
    benefit: t,
    guildId: s,
    onClick: d
  } = e, c = (0, u.default)(s, t.ref_id), f = (0, n.jsx)(a.default, {
    guildId: s,
    emojiId: t.emoji_id,
    emojiName: t.emoji_name
  });
  return (0, n.jsxs)(i.Clickable, {
    className: o.container,
    onClick: () => {
      null == c || c.navigateToChannel(), d()
    },
    "aria-label": null == c ? void 0 : c.ariaLabel,
    role: "link",
    children: [(0, n.jsx)("div", {
      className: o.emojiContainer,
      children: f
    }), (0, n.jsxs)("div", {
      className: o.infoContainer,
      children: [(0, n.jsx)(i.Text, {
        variant: "text-md/medium",
        color: "header-primary",
        className: o.name,
        children: (0, r.default)(t)
      }), (0, n.jsx)(i.Text, {
        color: "interactive-normal",
        variant: "text-sm/normal",
        children: t.description
      })]
    }), (0, n.jsx)(l.default, {
      direction: l.default.Directions.RIGHT,
      className: o.caret
    })]
  })
}