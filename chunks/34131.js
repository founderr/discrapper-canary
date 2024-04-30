"use strict";
a.r(t), a.d(t, {
  default: function() {
    return d
  }
});
var n = a("735250");
a("470079");
var s = a("434404"),
  l = a("970731"),
  i = a("810090"),
  r = a("981631"),
  o = a("689938"),
  u = a("314656");

function d(e) {
  let {
    guildId: t,
    markAsDismissed: a
  } = e;
  return (0, n.jsx)("div", {
    className: u.container,
    children: (0, n.jsx)(l.default, {
      header: o.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATE_UPSELL_TITLE,
      content: o.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATE_UPSELL_BODY,
      asset: (0, n.jsx)(i.default, {
        className: u.video,
        src: "https://cdn.discordapp.com/assets/server-subscription-tier-template/upsell.mov",
        autoPlay: !0,
        loop: !0
      }),
      buttonCTA: o.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATE_UPSELL_CTA,
      onClick: () => {
        s.default.open(t, r.GuildSettingsSections.ROLE_SUBSCRIPTIONS, void 0, r.GuildSettingsSubsections.ROLE_SUBSCRIPTION_TIER_TEMPLATE)
      },
      secondaryButtonCTA: o.default.Messages.DISMISS,
      markAsDismissed: a
    })
  })
}