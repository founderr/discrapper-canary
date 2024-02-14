"use strict";
s.r(t), s.d(t, {
  default: function() {
    return S
  }
});
var a = s("37983");
s("884691");
var n = s("446674"),
  l = s("77078"),
  i = s("915639"),
  r = s("161778"),
  o = s("227231"),
  d = s("45198"),
  u = s("782340"),
  c = s("908616"),
  S = e => {
    let {
      quest: t
    } = e, s = (0, n.useStateFromStores)([i.default], () => i.default.locale), S = (0, n.useStateFromStores)([r.default], () => r.default.getState().theme), E = new Date(t.config.expiresAt).toLocaleDateString(s, {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
    return (0, a.jsxs)("div", {
      className: c.questsCardHeader,
      children: [(0, a.jsx)("img", {
        src: (0, o.getHeroAssetUrl)(t.id),
        alt: "",
        className: c.questSplash
      }), (0, a.jsxs)("div", {
        className: c.headerContent,
        children: [(0, a.jsxs)("div", {
          className: c.iconLogotypeContainer,
          children: [(0, a.jsx)("img", {
            src: (0, o.getGameTileAssetUrl)(t.id),
            alt: "",
            className: c.questIcon
          }), (0, a.jsx)("img", {
            src: (0, o.getGameLogotypeAssetUrl)(t.id, S),
            alt: "",
            className: c.questLogotype
          }), (0, a.jsx)(d.default, {})]
        }), (0, a.jsxs)("div", {
          className: c.questInfo,
          children: [(0, a.jsx)(l.Heading, {
            variant: "heading-xxl/bold",
            children: t.config.messages.questName
          }), (0, a.jsx)(l.Text, {
            variant: "text-xs/normal",
            children: u.default.Messages.QUESTS_AVAILABLE_THROUGH.format({
              date: E
            })
          })]
        })]
      })]
    })
  }