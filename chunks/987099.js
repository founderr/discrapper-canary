"use strict";
n.r(t), n.d(t, {
  InvalidQuestsEmbed: function() {
    return c
  }
});
var s = n("37983");
n("884691");
var l = n("77078"),
  a = n("79112"),
  i = n("49111"),
  r = n("782340"),
  o = n("567782"),
  u = n("238554");

function d() {
  return (0, s.jsx)(l.TooltipContainer, {
    text: r.default.Messages.GIFT_INVENTORY,
    className: o.giftInventoryButton,
    tooltipContentClassName: o.giftInventoryButtonTooltipCopy,
    children: (0, s.jsx)(l.Button, {
      color: l.ButtonColors.BRAND_NEW,
      onClick: () => {
        a.default.open(i.UserSettingsSections.INVENTORY)
      },
      children: r.default.Messages.GIFT_INVENTORY
    })
  })
}

function c() {
  return (0, s.jsxs)("div", {
    className: o.invalidContainer,
    children: [(0, s.jsxs)("div", {
      className: o.invalidLeftSideOuterContainer,
      children: [(0, s.jsxs)("div", {
        className: o.invalidLeftSideInnerContainer,
        children: [(0, s.jsx)(l.Heading, {
          variant: "heading-xl/bold",
          color: "header-primary",
          children: r.default.Messages.QUESTS_EMBED_INVALID_HEADING
        }), (0, s.jsx)(l.Text, {
          variant: "text-sm/medium",
          color: "text-normal",
          className: o.mobileWebCopy,
          children: r.default.Messages.QUESTS_EMBED_INVALID_BODY
        })]
      }), (0, s.jsx)(d, {})]
    }), (0, s.jsx)("div", {
      className: o.invalidRightSideOuterContainer,
      children: (0, s.jsx)("img", {
        src: u,
        alt: "",
        className: o.missingQuestImage
      })
    })]
  })
}