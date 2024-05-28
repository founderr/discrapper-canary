"use strict";
n.r(t), n.d(t, {
  PurchaseConfirmationLite: function() {
    return c
  }
});
var s = n("735250");
n("470079");
var a = n("442837"),
  i = n("481060"),
  l = n("17894"),
  r = n("430824"),
  u = n("313550"),
  o = n("689938"),
  d = n("684351");
let c = e => {
  let {
    onClose: t,
    listing: n,
    guildId: c
  } = e, E = (0, a.useStateFromStores)([r.default], () => r.default.getGuild(c), [c]), f = (0, u.default)({
    listing: n,
    guildId: c
  });
  return (0, s.jsxs)("div", {
    className: d.confirmationContainer,
    children: [(0, s.jsx)(i.Heading, {
      className: d.confirmationHeader,
      variant: "heading-lg/extrabold",
      children: o.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_TITLE.format({
        serverName: null == E ? void 0 : E.toString(),
        tierName: n.name
      })
    }), !f.isEmpty() && (0, s.jsx)(i.Text, {
      className: d.confirmationSubtitle,
      variant: "text-sm/normal",
      color: "header-secondary",
      children: o.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_SUBTITLE.format({
        benefits: f.asString()
      })
    }), (0, s.jsx)(i.Button, {
      className: d.openDiscordButton,
      onClick: () => (0, l.default)("role_sub_mweb_success_modal"),
      children: o.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_OPEN_DISCORD_BUTTON
    }), (0, s.jsx)(i.Button, {
      className: d.doneButton,
      look: i.Button.Looks.BLANK,
      onClick: () => t(!0),
      children: o.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_DONE_BUTTON
    })]
  })
}