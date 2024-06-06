"use strict";
n.r(t), n.d(t, {
  PurchaseConfirmationLite: function() {
    return c
  }
});
var i = n("735250");
n("470079");
var a = n("442837"),
  s = n("481060"),
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
  } = e, f = (0, a.useStateFromStores)([r.default], () => r.default.getGuild(c), [c]), E = (0, u.default)({
    listing: n,
    guildId: c
  });
  return (0, i.jsxs)("div", {
    className: d.confirmationContainer,
    children: [(0, i.jsx)(s.Heading, {
      className: d.confirmationHeader,
      variant: "heading-lg/extrabold",
      children: o.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_TITLE.format({
        serverName: null == f ? void 0 : f.toString(),
        tierName: n.name
      })
    }), !E.isEmpty() && (0, i.jsx)(s.Text, {
      className: d.confirmationSubtitle,
      variant: "text-sm/normal",
      color: "header-secondary",
      children: o.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_SUBTITLE.format({
        benefits: E.asString()
      })
    }), (0, i.jsx)(s.Button, {
      className: d.openDiscordButton,
      onClick: () => (0, l.default)("role_sub_mweb_success_modal"),
      children: o.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_OPEN_DISCORD_BUTTON
    }), (0, i.jsx)(s.Button, {
      className: d.doneButton,
      look: s.Button.Looks.BLANK,
      onClick: () => t(!0),
      children: o.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_DONE_BUTTON
    })]
  })
}