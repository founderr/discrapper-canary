"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var i = n("735250");
n("470079");
var a = n("481060"),
  s = n("259580"),
  l = n("528027"),
  r = n("686807"),
  u = n("113318"),
  o = n("946260");

function d(e) {
  let {
    benefit: t,
    guildId: n,
    onClick: d
  } = e, c = (0, u.default)(n, t.ref_id), f = (0, i.jsx)(l.default, {
    guildId: n,
    emojiId: t.emoji_id,
    emojiName: t.emoji_name
  });
  return (0, i.jsxs)(a.Clickable, {
    className: o.container,
    onClick: () => {
      null == c || c.navigateToChannel(), d()
    },
    "aria-label": null == c ? void 0 : c.ariaLabel,
    role: "link",
    children: [(0, i.jsx)("div", {
      className: o.emojiContainer,
      children: f
    }), (0, i.jsxs)("div", {
      className: o.infoContainer,
      children: [(0, i.jsx)(a.Text, {
        variant: "text-md/medium",
        color: "header-primary",
        className: o.name,
        children: (0, r.default)(t)
      }), (0, i.jsx)(a.Text, {
        color: "interactive-normal",
        variant: "text-sm/normal",
        children: t.description
      })]
    }), (0, i.jsx)(s.default, {
      direction: s.default.Directions.RIGHT,
      className: o.caret
    })]
  })
}