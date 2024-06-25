n.d(t, {
  m: function() {
    return d
  }
});
var s = n(735250);
n(470079);
var i = n(442837),
  l = n(481060),
  a = n(17894),
  r = n(430824),
  o = n(313550),
  c = n(689938),
  u = n(750231);
let d = e => {
  let {
    onClose: t,
    listing: n,
    guildId: d
  } = e, E = (0, i.e7)([r.Z], () => r.Z.getGuild(d), [d]), _ = (0, o.Z)({
    listing: n,
    guildId: d
  });
  return (0, s.jsxs)("div", {
    className: u.confirmationContainer,
    children: [(0, s.jsx)(l.Heading, {
      className: u.confirmationHeader,
      variant: "heading-lg/extrabold",
      children: c.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_TITLE.format({
        serverName: null == E ? void 0 : E.toString(),
        tierName: n.name
      })
    }), !_.isEmpty() && (0, s.jsx)(l.Text, {
      className: u.confirmationSubtitle,
      variant: "text-sm/normal",
      color: "header-secondary",
      children: c.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_SUBTITLE.format({
        benefits: _.asString()
      })
    }), (0, s.jsx)(l.Button, {
      className: u.openDiscordButton,
      onClick: () => (0, a.Z)("role_sub_mweb_success_modal"),
      children: c.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_OPEN_DISCORD_BUTTON
    }), (0, s.jsx)(l.Button, {
      className: u.doneButton,
      look: l.Button.Looks.BLANK,
      onClick: () => t(!0),
      children: c.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_DONE_BUTTON
    })]
  })
}