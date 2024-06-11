"use strict";
t.r(s), t.d(s, {
  default: function() {
    return j
  }
});
var r = t("735250");
t("470079");
var a = t("512722"),
  o = t.n(a),
  i = t("990547"),
  l = t("442837"),
  n = t("481060"),
  d = t("782568"),
  c = t("213609"),
  u = t("357352"),
  p = t("434404"),
  m = t("695346"),
  S = t("430824"),
  g = t("499150"),
  h = t("153124"),
  _ = t("810090"),
  C = t("63063"),
  N = t("981631"),
  f = t("921944"),
  x = t("20281"),
  A = t("106423");
let R = [N.GuildFeatures.CREATOR_MONETIZABLE, N.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL];

function j(e) {
  let {
    transitionState: s,
    onClose: t,
    guildId: a,
    markAsDismissed: j
  } = e, D = (0, h.useUID)(), I = (0, l.useStateFromStores)([S.default], () => S.default.getGuild(a));
  o()(null != I, "Guild must be defined"), (0, c.default)({
    type: x.ImpressionTypes.MODAL,
    name: i.ImpressionNames.GUILD_SHOP_UPSELL,
    properties: {
      passed_in_guild_id: a
    }
  });
  let v = m.GifAutoPlay.useSetting();
  return (0, r.jsxs)(n.ModalRoot, {
    size: n.ModalSize.LARGE,
    className: A.__invalid_root,
    transitionState: s,
    "aria-labelledby": D,
    children: [(0, r.jsxs)(n.ModalHeader, {
      separator: !1,
      className: A.header,
      children: [(0, r.jsx)(n.ModalCloseButton, {
        className: A.closeButton,
        onClick: t
      }), (0, r.jsx)(n.Heading, {
        variant: "heading-xl/medium",
        color: "header-primary",
        id: D,
        children: "Server Shop is now open for business!"
      }), (0, r.jsx)(n.Spacer, {
        size: 6
      }), (0, r.jsx)(n.Text, {
        variant: "text-md/normal",
        className: A.description,
        color: "header-secondary",
        children: "Introducing a single place to sell downloadable products, monthly Server Subscriptions, and Premium Roles right inside Discord. From PDF guides and digital stickers to gated channels and premium roles, Server Shop gives you two new ways to engage your community—and earn from your expertise."
      }), (0, r.jsx)(n.Spacer, {
        size: 8
      }), (0, r.jsx)(g.default, {
        onClick: () => {
          j(f.ContentDismissActionType.SECONDARY);
          let e = "".concat(C.default.getCreatorSupportArticleURL(N.HelpdeskArticles.SERVER_SUBSCRIPTION_AND_PRODUCTS), "#docs-internal-guid-918e991a-7fff-03d5-8326-5d065e5edeb1");
          (0, d.default)(e, !0)
        },
        children: "Learn more"
      })]
    }), (0, r.jsx)("div", {
      className: A.divider
    }), (0, r.jsxs)(n.ModalContent, {
      className: A.content,
      children: [v ? (0, r.jsx)("img", {
        src: (0, u.getAssetCDNUrl)("server_products/upsell/demo2.png"),
        alt: "",
        className: A.demo
      }) : (0, r.jsx)(_.default, {
        autoPlay: !0,
        loop: !0,
        className: A.demo,
        width: 400,
        poster: (0, u.getAssetCDNUrl)("server_products/upsell/demo2.png"),
        src: (0, u.getAssetCDNUrl)("server_products/upsell/demo.mp4")
      }), (0, r.jsx)("img", {
        src: (0, u.getAssetCDNUrl)("server_products/upsell/new_sales.png"),
        alt: "",
        className: A.earningsImage
      })]
    }), (0, r.jsxs)(n.ModalFooter, {
      children: [(0, r.jsx)(n.Button, {
        onClick: () => {
          R.some(e => I.hasFeature(e)) ? p.default.open(a, N.GuildSettingsSections.GUILD_PRODUCTS) : p.default.open(a, N.GuildSettingsSections.ROLE_SUBSCRIPTIONS), j(f.ContentDismissActionType.PRIMARY), t()
        },
        children: "Check it out"
      }), (0, r.jsx)(n.Spacer, {
        size: 12,
        horizontal: !0
      })]
    })]
  })
}