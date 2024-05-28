"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var s = n("735250");
n("470079");
var a = n("481060"),
  i = n("259580"),
  l = n("528027"),
  r = n("686807"),
  u = n("113318"),
  o = n("946260");

function d(e) {
  let {
    benefit: t,
    guildId: n,
    onClick: d
  } = e, c = (0, u.default)(n, t.ref_id), E = (0, s.jsx)(l.default, {
    guildId: n,
    emojiId: t.emoji_id,
    emojiName: t.emoji_name
  });
  return (0, s.jsxs)(a.Clickable, {
    className: o.container,
    onClick: () => {
      null == c || c.navigateToChannel(), d()
    },
    "aria-label": null == c ? void 0 : c.ariaLabel,
    role: "link",
    children: [(0, s.jsx)("div", {
      className: o.emojiContainer,
      children: E
    }), (0, s.jsxs)("div", {
      className: o.infoContainer,
      children: [(0, s.jsx)(a.Text, {
        variant: "text-md/medium",
        color: "header-primary",
        className: o.name,
        children: (0, r.default)(t)
      }), (0, s.jsx)(a.Text, {
        color: "interactive-normal",
        variant: "text-sm/normal",
        children: t.description
      })]
    }), (0, s.jsx)(i.default, {
      direction: i.default.Directions.RIGHT,
      className: o.caret
    })]
  })
}