"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var i = n("735250");
n("470079");
var r = n("990547"),
  s = n("442837"),
  a = n("780384"),
  o = n("481060"),
  l = n("410030"),
  u = n("100527"),
  d = n("906732"),
  _ = n("213609"),
  c = n("703656"),
  E = n("430824"),
  I = n("465670"),
  T = n("687476"),
  f = n("761966"),
  S = n("981631"),
  h = n("176505"),
  A = n("689938"),
  m = n("763959");
let N = () => {
  let e = (0, l.default)();
  return (0, a.isThemeLight)(e) ? n("537381") : n("341048")
};

function p(e) {
  let {
    onClose: t,
    guildId: n,
    emojiId: a
  } = e, l = N(), {
    analyticsLocations: p
  } = (0, d.default)(u.default.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL);
  (0, _.default)({
    type: r.ImpressionTypes.MODAL,
    name: r.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
    properties: {
      location_stack: p,
      emoji_guild_id: n,
      emoji_id: null != a ? a : null
    }
  });
  let O = (0, s.useStateFromStores)([E.default], () => E.default.getGuild(n)),
    C = (0, s.useStateFromStores)([T.default], () => null != n && T.default.getUserSubscriptionRoles(n).size > 0),
    R = C ? A.default.Messages.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPGRADE_UPSELL_DESCRIPTION : A.default.Messages.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_PURCHASE_UPSELL_DESCRIPTION.format({
      serverName: null == O ? void 0 : O.name
    }),
    g = C ? A.default.Messages.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL_UPGRADE_CTA : A.default.Messages.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL_PURCHASE_CTA;
  return (0, i.jsxs)("div", {
    className: m.container,
    children: [(0, i.jsx)("div", {
      className: m.background
    }), (0, i.jsxs)("div", {
      className: m.content,
      children: [(0, i.jsx)(o.Button, {
        look: o.Button.Looks.BLANK,
        size: o.Button.Sizes.ICON,
        className: m.closeButton,
        onClick: t,
        children: (0, i.jsx)(I.default, {
          "aria-label": A.default.Messages.CLOSE,
          width: 16,
          height: 16,
          className: m.closeButtonIcon
        })
      }), (0, i.jsx)("img", {
        alt: "",
        src: l,
        className: m.upsellImage
      }), (0, i.jsx)(o.Spacer, {
        size: 22
      }), (0, i.jsx)(o.Heading, {
        color: "header-primary",
        variant: "heading-lg/extrabold",
        className: m.header,
        children: A.default.Messages.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL_TITLE
      }), (0, i.jsx)(o.Spacer, {
        size: 4
      }), (0, i.jsx)(o.Text, {
        color: "header-secondary",
        variant: "text-md/normal",
        className: m.description,
        children: R
      }), (0, i.jsx)(o.Spacer, {
        size: 24
      }), (0, i.jsx)(f.default, {
        onClick: () => {
          (0, c.transitionTo)(S.Routes.CHANNEL(n, h.StaticChannelRoute.ROLE_SUBSCRIPTIONS), void 0, void 0, p)
        },
        children: g
      })]
    })]
  })
}