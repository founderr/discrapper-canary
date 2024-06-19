n.d(t, {
  Z: function() {
    return u
  }
});
var i = n(735250);
n(470079);
var s = n(434404),
  l = n(970731),
  a = n(810090),
  r = n(981631),
  o = n(689938),
  c = n(328814);

function u(e) {
  let {
    guildId: t,
    markAsDismissed: n
  } = e;
  return (0, i.jsx)("div", {
    className: c.container,
    children: (0, i.jsx)(l.ZP, {
      header: o.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATE_UPSELL_TITLE,
      content: o.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATE_UPSELL_BODY,
      asset: (0, i.jsx)(a.Z, {
        className: c.video,
        src: "https://cdn.discordapp.com/assets/server-subscription-tier-template/upsell.mov",
        autoPlay: !0,
        loop: !0
      }),
      buttonCTA: o.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATE_UPSELL_CTA,
      onClick: () => {
        s.Z.open(t, r.pNK.ROLE_SUBSCRIPTIONS, void 0, r.KsC.ROLE_SUBSCRIPTION_TIER_TEMPLATE)
      },
      secondaryButtonCTA: o.Z.Messages.DISMISS,
      markAsDismissed: n
    })
  })
}