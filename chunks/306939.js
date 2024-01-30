"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var l = n("37983");
n("884691");
var a = n("446674"),
  i = n("77078"),
  s = n("139321"),
  r = n("597517"),
  u = n("782340"),
  d = n("8341"),
  o = n("533662");
let c = () => (0, l.jsxs)(l.Fragment, {
  children: [(0, l.jsx)(i.Text, {
    color: "header-primary",
    variant: "text-xs/normal",
    className: d.inlineText,
    children: u.default.Messages.GUILD_EVENT_STAGE_UPSELL_HINT_1
  }), (0, l.jsx)(i.Text, {
    color: "header-primary",
    variant: "text-xs/normal",
    className: d.inlineText,
    children: u.default.Messages.GUILD_EVENT_STAGE_UPSELL_HINT_2
  }), (0, l.jsx)(i.Text, {
    color: "header-primary",
    variant: "text-xs/normal",
    className: d.inlineText,
    children: u.default.Messages.GUILD_EVENT_STAGE_UPSELL_HINT_3
  }), (0, l.jsx)(i.Text, {
    color: "header-primary",
    variant: "text-xs/normal",
    className: d.inlineText,
    children: u.default.Messages.GUILD_EVENT_STAGE_UPSELL_HINT_4
  })]
});

function f(e) {
  let {
    onClick: t
  } = e, n = (0, a.useStateFromStores)([s.HotspotStore], () => !s.HotspotStore.hasHotspot(s.HotspotLocations.STAGE_CHANNEL_UPSELL));
  return n ? null : (0, l.jsxs)("div", {
    className: d.container,
    children: [(0, l.jsxs)("div", {
      className: d.content,
      children: [(0, l.jsxs)("div", {
        className: d.textContainer,
        children: [(0, l.jsx)(i.Heading, {
          variant: "heading-md/semibold",
          children: u.default.Messages.GUILD_EVENT_STAGE_UPSELL_TITLE
        }), (0, l.jsx)(i.Text, {
          color: "header-secondary",
          variant: "text-xs/normal",
          className: d.descriptionText,
          children: u.default.Messages.GUILD_EVENT_STAGE_TOOLTIP_BODY
        }), (0, l.jsx)(i.Text, {
          color: "header-secondary",
          variant: "text-xs/normal",
          children: u.default.Messages.GUILD_EVENT_STAGE_UPSELL.format({
            suggestionsHook: c
          })
        })]
      }), (0, l.jsx)("div", {
        className: d.image,
        children: (0, l.jsx)("img", {
          src: o,
          alt: u.default.Messages.GUILD_EVENT_STAGE_UPSELL_ALT_IMAGE
        })
      })]
    }), (0, l.jsxs)("div", {
      className: d.footer,
      children: [(0, l.jsx)(i.Button, {
        onClick: t,
        color: i.Button.Colors.PRIMARY,
        size: i.Button.Sizes.SMALL,
        className: d.button,
        children: u.default.Messages.CREATE_STAGE_CHANNEL
      }), (0, l.jsx)(i.Button, {
        onClick: () => {
          r.hideHotspot(s.HotspotLocations.STAGE_CHANNEL_UPSELL)
        },
        color: i.Button.Colors.TRANSPARENT,
        size: i.Button.Sizes.SMALL,
        look: i.ButtonLooks.LINK,
        children: u.default.Messages.DONT_SHOW_AGAIN
      })]
    })]
  })
}