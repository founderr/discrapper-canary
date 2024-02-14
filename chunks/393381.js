"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var l = n("37983");
n("884691");
var a = n("77078"),
  s = n("461380"),
  i = n("484456"),
  r = n("559979"),
  o = n("70695"),
  u = n("348091");

function d(e) {
  let {
    benefit: t,
    guildId: n,
    onClick: d
  } = e, c = (0, o.default)(n, t.ref_id), f = (0, l.jsx)(i.default, {
    guildId: n,
    emojiId: t.emoji_id,
    emojiName: t.emoji_name
  });
  return (0, l.jsxs)(a.Clickable, {
    className: u.container,
    onClick: () => {
      null == c || c.navigateToChannel(), d()
    },
    "aria-label": null == c ? void 0 : c.ariaLabel,
    role: "link",
    children: [(0, l.jsx)("div", {
      className: u.emojiContainer,
      children: f
    }), (0, l.jsxs)("div", {
      className: u.infoContainer,
      children: [(0, l.jsx)(a.Text, {
        variant: "text-md/medium",
        color: "header-primary",
        className: u.name,
        children: (0, r.default)(t)
      }), (0, l.jsx)(a.Text, {
        color: "interactive-normal",
        variant: "text-sm/normal",
        children: t.description
      })]
    }), (0, l.jsx)(s.default, {
      direction: s.default.Directions.RIGHT,
      className: u.caret
    })]
  })
}