"use strict";
a.r(t), a.d(t, {
  default: function() {
    return _
  }
});
var n = a("735250");
a("470079");
var s = a("990547"),
  l = a("399606"),
  i = a("213609"),
  r = a("434404"),
  o = a("970731"),
  u = a("430824"),
  d = a("594174"),
  c = a("981631"),
  f = a("689938"),
  E = a("842265"),
  h = a("217110");

function _(e) {
  let {
    guildId: t,
    markAsDismissed: a
  } = e, _ = (0, l.useStateFromStores)([u.default, d.default], () => {
    let e = d.default.getCurrentUser(),
      a = u.default.getGuild(t);
    return (null == a ? void 0 : a.isOwner(e)) === !0
  });
  return (0, i.default)({
    type: s.ImpressionTypes.POPOUT,
    name: s.ImpressionNames.ENABLE_CREATOR_MONETIZATION_GUILD_HEADER_UPSELL,
    properties: {
      guild_id: t,
      is_owner: _
    }
  }), (0, n.jsx)("div", {
    className: E.container,
    children: (0, n.jsx)(o.default, {
      header: f.default.Messages.GUILD_ROLE_SUBSCRIPTION_UPSELL_HEADER,
      content: f.default.Messages.GUILD_ROLE_SUBSCRIPTION_UPSELL_BODY,
      asset: (0, n.jsx)("div", {
        className: E.image,
        children: (0, n.jsx)("img", {
          alt: f.default.Messages.GUILD_ROLE_SUBSCRIPTION_UPSELL_IMG_ALT,
          src: h,
          className: E.image
        })
      }),
      buttonCTA: f.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_UPSELL_CTA,
      onClick: () => {
        r.default.open(t, c.GuildSettingsSections.ROLE_SUBSCRIPTIONS)
      },
      secondaryButtonCTA: f.default.Messages.DISMISS,
      markAsDismissed: a
    })
  })
}