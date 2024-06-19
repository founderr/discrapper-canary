t.d(n, {
  m: function() {
    return d
  }
});
var i = t(735250);
t(470079);
var l = t(442837),
  s = t(481060),
  r = t(17894),
  a = t(430824),
  o = t(313550),
  u = t(689938),
  c = t(750231);
let d = e => {
  let {
    onClose: n,
    listing: t,
    guildId: d
  } = e, _ = (0, l.e7)([a.Z], () => a.Z.getGuild(d), [d]), I = (0, o.Z)({
    listing: t,
    guildId: d
  });
  return (0, i.jsxs)("div", {
    className: c.confirmationContainer,
    children: [(0, i.jsx)(s.Heading, {
      className: c.confirmationHeader,
      variant: "heading-lg/extrabold",
      children: u.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_TITLE.format({
        serverName: null == _ ? void 0 : _.toString(),
        tierName: t.name
      })
    }), !I.isEmpty() && (0, i.jsx)(s.Text, {
      className: c.confirmationSubtitle,
      variant: "text-sm/normal",
      color: "header-secondary",
      children: u.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_SUBTITLE.format({
        benefits: I.asString()
      })
    }), (0, i.jsx)(s.Button, {
      className: c.openDiscordButton,
      onClick: () => (0, r.Z)("role_sub_mweb_success_modal"),
      children: u.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_OPEN_DISCORD_BUTTON
    }), (0, i.jsx)(s.Button, {
      className: c.doneButton,
      look: s.Button.Looks.BLANK,
      onClick: () => n(!0),
      children: u.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_DONE_BUTTON
    })]
  })
}