n.d(t, {
  Z: function() {
    return h
  }
});
var l = n(735250);
n(470079);
var i = n(481060),
  s = n(434404),
  a = n(962086),
  r = n(303737),
  o = n(981631),
  c = n(689938),
  u = n(45341),
  d = n(497224);

function h(e) {
  let {
    guildId: t
  } = e;
  return (0, l.jsx)("div", {
    className: u.upsellPage,
    children: (0, l.jsxs)("div", {
      className: u.upsellContainer,
      children: [(0, l.jsx)("img", {
        src: d,
        alt: ""
      }), (0, l.jsxs)("div", {
        className: u.upsellContent,
        children: [(0, l.jsx)(i.Heading, {
          variant: "heading-xl/semibold",
          children: c.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL_UPSELL_HEADER
        }), (0, l.jsx)(i.Text, {
          variant: "text-sm/normal",
          className: u.bodyText,
          children: c.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL_UPSELL_BODY
        }), (0, l.jsx)(i.Button, {
          size: i.Button.Sizes.MEDIUM,
          onClick: () => {
            (0, a.mL)(t), s.Z.open(t, o.pNK.ROLE_SUBSCRIPTIONS, void 0, o.KsC.ROLE_SUBSCRIPTION_TIERS), (0, r.GN)(t)
          },
          className: u.__invalid_button,
          children: c.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL_UPSELL_BUTTON
        })]
      })]
    })
  })
}