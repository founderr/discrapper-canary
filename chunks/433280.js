n.d(t, {
  Z: function() {
    return I
  }
});
var s = n(735250);
n(470079);
var i = n(990547),
  l = n(399606),
  a = n(213609),
  r = n(434404),
  o = n(970731),
  c = n(430824),
  u = n(594174),
  d = n(981631),
  E = n(689938),
  h = n(207009),
  _ = n(217110);

function I(e) {
  let {
    guildId: t,
    markAsDismissed: n
  } = e, I = (0, l.e7)([c.Z, u.default], () => {
    let e = u.default.getCurrentUser(),
      n = c.Z.getGuild(t);
    return (null == n ? void 0 : n.isOwner(e)) === !0
  });
  return (0, a.Z)({
    type: i.ImpressionTypes.POPOUT,
    name: i.ImpressionNames.ENABLE_CREATOR_MONETIZATION_GUILD_HEADER_UPSELL,
    properties: {
      guild_id: t,
      is_owner: I
    }
  }), (0, s.jsx)("div", {
    className: h.container,
    children: (0, s.jsx)(o.ZP, {
      header: E.Z.Messages.GUILD_ROLE_SUBSCRIPTION_UPSELL_HEADER,
      content: E.Z.Messages.GUILD_ROLE_SUBSCRIPTION_UPSELL_BODY,
      asset: (0, s.jsx)("div", {
        className: h.image,
        children: (0, s.jsx)("img", {
          alt: E.Z.Messages.GUILD_ROLE_SUBSCRIPTION_UPSELL_IMG_ALT,
          src: _,
          className: h.image
        })
      }),
      buttonCTA: E.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_UPSELL_CTA,
      onClick: () => {
        r.Z.open(t, d.pNK.ROLE_SUBSCRIPTIONS)
      },
      secondaryButtonCTA: E.Z.Messages.DISMISS,
      markAsDismissed: n
    })
  })
}