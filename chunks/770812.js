"use strict";
n.d(t, {
  Z: function() {
    return m
  }
});
var i = n(735250);
n(470079);
var r = n(990547),
  s = n(442837),
  o = n(780384),
  a = n(481060),
  l = n(410030),
  u = n(100527),
  _ = n(906732),
  c = n(213609),
  d = n(703656),
  E = n(430824),
  I = n(687476),
  T = n(761966),
  h = n(981631),
  S = n(176505),
  f = n(689938),
  N = n(763959);
let A = () => {
  let e = (0, l.ZP)();
  return (0, o.ap)(e) ? n(537381) : n(341048)
};

function m(e) {
  let {
    onClose: t,
    guildId: n,
    emojiId: o
  } = e, l = A(), {
    analyticsLocations: m
  } = (0, _.ZP)(u.Z.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL);
  (0, c.Z)({
    type: r.ImpressionTypes.MODAL,
    name: r.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
    properties: {
      location_stack: m,
      emoji_guild_id: n,
      emoji_id: null != o ? o : null
    }
  });
  let O = (0, s.e7)([E.Z], () => E.Z.getGuild(n)),
    R = (0, s.e7)([I.Z], () => null != n && I.Z.getUserSubscriptionRoles(n).size > 0),
    p = R ? f.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPGRADE_UPSELL_DESCRIPTION : f.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_PURCHASE_UPSELL_DESCRIPTION.format({
      serverName: null == O ? void 0 : O.name
    }),
    g = R ? f.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL_UPGRADE_CTA : f.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL_PURCHASE_CTA;
  return (0, i.jsxs)("div", {
    className: N.container,
    children: [(0, i.jsx)("div", {
      className: N.background
    }), (0, i.jsxs)("div", {
      className: N.content,
      children: [(0, i.jsx)(a.Button, {
        look: a.Button.Looks.BLANK,
        size: a.Button.Sizes.ICON,
        className: N.closeButton,
        onClick: t,
        children: (0, i.jsx)(a.CloseSmallIcon, {
          size: "xs",
          color: "currentColor",
          "aria-label": f.Z.Messages.CLOSE,
          className: N.closeButtonIcon
        })
      }), (0, i.jsx)("img", {
        alt: "",
        src: l,
        className: N.upsellImage
      }), (0, i.jsx)(a.Spacer, {
        size: 22
      }), (0, i.jsx)(a.Heading, {
        color: "header-primary",
        variant: "heading-lg/extrabold",
        className: N.header,
        children: f.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL_TITLE
      }), (0, i.jsx)(a.Spacer, {
        size: 4
      }), (0, i.jsx)(a.Text, {
        color: "header-secondary",
        variant: "text-md/normal",
        className: N.description,
        children: p
      }), (0, i.jsx)(a.Spacer, {
        size: 24
      }), (0, i.jsx)(T.Z, {
        onClick: () => {
          (0, d.uL)(h.Z5c.CHANNEL(n, S.oC.ROLE_SUBSCRIPTIONS), void 0, void 0, m)
        },
        children: g
      })]
    })]
  })
}