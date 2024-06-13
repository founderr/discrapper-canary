"use strict";
s.r(t), s.d(t, {
  PurchaseConfirmationLite: function() {
    return c
  }
});
var n = s("735250");
s("470079");
var i = s("442837"),
  l = s("481060"),
  a = s("17894"),
  r = s("430824"),
  u = s("313550"),
  o = s("689938"),
  d = s("684351");
let c = e => {
  let {
    onClose: t,
    listing: s,
    guildId: c
  } = e, f = (0, i.useStateFromStores)([r.default], () => r.default.getGuild(c), [c]), _ = (0, u.default)({
    listing: s,
    guildId: c
  });
  return (0, n.jsxs)("div", {
    className: d.confirmationContainer,
    children: [(0, n.jsx)(l.Heading, {
      className: d.confirmationHeader,
      variant: "heading-lg/extrabold",
      children: o.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_TITLE.format({
        serverName: null == f ? void 0 : f.toString(),
        tierName: s.name
      })
    }), !_.isEmpty() && (0, n.jsx)(l.Text, {
      className: d.confirmationSubtitle,
      variant: "text-sm/normal",
      color: "header-secondary",
      children: o.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_SUBTITLE.format({
        benefits: _.asString()
      })
    }), (0, n.jsx)(l.Button, {
      className: d.openDiscordButton,
      onClick: () => (0, a.default)("role_sub_mweb_success_modal"),
      children: o.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_OPEN_DISCORD_BUTTON
    }), (0, n.jsx)(l.Button, {
      className: d.doneButton,
      look: l.Button.Looks.BLANK,
      onClick: () => t(!0),
      children: o.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_DONE_BUTTON
    })]
  })
}