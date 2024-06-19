r.r(s), r.d(s, {
  default: function() {
    return I
  }
});
var o = r(735250);
r(470079);
var a = r(512722),
  n = r.n(a),
  i = r(990547),
  t = r(442837),
  l = r(481060),
  d = r(782568),
  c = r(213609),
  p = r(357352),
  u = r(434404),
  m = r(695346),
  h = r(430824),
  S = r(499150),
  g = r(153124),
  _ = r(810090),
  N = r(63063),
  x = r(981631),
  R = r(921944),
  j = r(20281),
  C = r(684578);
let v = [x.oNc.CREATOR_MONETIZABLE, x.oNc.CREATOR_MONETIZABLE_PROVISIONAL];

function I(e) {
  let {
    transitionState: s,
    onClose: r,
    guildId: a,
    markAsDismissed: I
  } = e, L = (0, g.Dt)(), O = (0, t.e7)([h.Z], () => h.Z.getGuild(a));
  n()(null != O, "Guild must be defined"), (0, c.Z)({
    type: j.n.MODAL,
    name: i.ImpressionNames.GUILD_SHOP_UPSELL,
    properties: {
      passed_in_guild_id: a
    }
  });
  let b = m.QK.useSetting();
  return (0, o.jsxs)(l.ModalRoot, {
    size: l.ModalSize.LARGE,
    className: C.__invalid_root,
    transitionState: s,
    "aria-labelledby": L,
    children: [(0, o.jsxs)(l.ModalHeader, {
      separator: !1,
      className: C.header,
      children: [(0, o.jsx)(l.ModalCloseButton, {
        className: C.closeButton,
        onClick: r
      }), (0, o.jsx)(l.Heading, {
        variant: "heading-xl/medium",
        color: "header-primary",
        id: L,
        children: "Server Shop is now open for business!"
      }), (0, o.jsx)(l.Spacer, {
        size: 6
      }), (0, o.jsx)(l.Text, {
        variant: "text-md/normal",
        className: C.description,
        color: "header-secondary",
        children: "Introducing a single place to sell downloadable products, monthly Server Subscriptions, and Premium Roles right inside Discord. From PDF guides and digital stickers to gated channels and premium roles, Server Shop gives you two new ways to engage your community—and earn from your expertise."
      }), (0, o.jsx)(l.Spacer, {
        size: 8
      }), (0, o.jsx)(S.Z, {
        onClick: () => {
          I(R.L.SECONDARY);
          let e = "".concat(N.Z.getCreatorSupportArticleURL(x.BhN.SERVER_SUBSCRIPTION_AND_PRODUCTS), "#docs-internal-guid-918e991a-7fff-03d5-8326-5d065e5edeb1");
          (0, d.Z)(e, !0)
        },
        children: "Learn more"
      })]
    }), (0, o.jsx)("div", {
      className: C.divider
    }), (0, o.jsxs)(l.ModalContent, {
      className: C.content,
      children: [b ? (0, o.jsx)("img", {
        src: (0, p.b)("server_products/upsell/demo2.png"),
        alt: "",
        className: C.demo
      }) : (0, o.jsx)(_.Z, {
        autoPlay: !0,
        loop: !0,
        className: C.demo,
        width: 400,
        poster: (0, p.b)("server_products/upsell/demo2.png"),
        src: (0, p.b)("server_products/upsell/demo.mp4")
      }), (0, o.jsx)("img", {
        src: (0, p.b)("server_products/upsell/new_sales.png"),
        alt: "",
        className: C.earningsImage
      })]
    }), (0, o.jsxs)(l.ModalFooter, {
      children: [(0, o.jsx)(l.Button, {
        onClick: () => {
          v.some(e => O.hasFeature(e)) ? u.Z.open(a, x.pNK.GUILD_PRODUCTS) : u.Z.open(a, x.pNK.ROLE_SUBSCRIPTIONS), I(R.L.PRIMARY), r()
        },
        children: "Check it out"
      }), (0, o.jsx)(l.Spacer, {
        size: 12,
        horizontal: !0
      })]
    })]
  })
}