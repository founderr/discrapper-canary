"use strict";
a.r(t), a.d(t, {
  default: function() {
    return p
  }
});
var s = a("735250");
a("470079");
var l = a("512722"),
  n = a.n(l),
  i = a("990547"),
  r = a("442837"),
  d = a("481060"),
  o = a("100527"),
  c = a("213609"),
  u = a("240657"),
  m = a("809086"),
  x = a("430824"),
  f = a("240864"),
  h = a("942833"),
  g = a("409110"),
  j = a("226060"),
  _ = a("689938"),
  v = a("750227");

function p(e) {
  var t, a;
  let {
    transitionState: l,
    guildProductListingId: p,
    analyticsLocation: N,
    guildId: L,
    onClose: I
  } = e, D = (0, r.useStateFromStores)([f.default], () => f.default.getGuildProduct(p));
  n()(null != D, "guildProductListing cannot be null"), (0, c.default)({
    type: i.ImpressionTypes.MODAL,
    name: i.ImpressionNames.GUILD_PRODUCT_LISTING_INFO_MODAL,
    properties: {
      guild_product_listing_id: p,
      has_entitlement: !0 === D.has_entitlement,
      location: N
    }
  });
  let T = null !== (t = (0, h.useProductType)(D)) && void 0 !== t ? t : "",
    C = (0, h.usePrice)(D),
    M = (0, r.useStateFromStores)([x.default], () => x.default.getGuild(L));
  return (0, s.jsxs)(d.ModalRoot, {
    className: v.modal,
    size: d.ModalSize.MEDIUM,
    transitionState: l,
    "aria-label": D.name,
    children: [(0, s.jsxs)(d.ModalHeader, {
      separator: !1,
      children: [(0, s.jsx)(m.MonetizationListingImageAspectStable, {
        height: 267,
        listing: D,
        className: v.headerImage,
        alt: ""
      }), (0, s.jsx)(d.ModalCloseButton, {
        className: v.closeButton,
        onClick: I,
        withCircleBackground: !0
      })]
    }), (0, s.jsx)(d.ModalContent, {
      children: (0, s.jsxs)("div", {
        className: v.body,
        children: [(0, s.jsx)(d.Heading, {
          variant: "heading-xl/medium",
          color: "header-primary",
          children: D.name
        }), (0, s.jsx)(d.Spacer, {
          size: 4
        }), (0, s.jsx)(d.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: _.default.Messages.GUILD_PRODUCT_INFO_MODAL_PRODUCT_OFFER.format({
            productType: T,
            personName: null !== (a = null == M ? void 0 : M.name) && void 0 !== a ? a : ""
          })
        }), (0, s.jsx)(d.Spacer, {
          size: 16
        }), (0, s.jsx)(g.default, {
          listing: D
        }), (0, s.jsx)(d.Spacer, {
          size: 16
        }), (0, s.jsx)("div", {
          className: v.seperator
        }), (0, s.jsx)(d.Spacer, {
          size: 16
        }), (0, s.jsx)(d.Heading, {
          variant: "heading-lg/medium",
          color: "header-primary",
          children: _.default.Messages.GUILD_PRODUCT_INFO_MODAL_DETAIL_HEADER
        }), (0, s.jsx)(d.Spacer, {
          size: 12
        }), (0, s.jsx)(u.default, {
          className: v.description,
          variant: "text-md/normal",
          color: "text-muted",
          text: D.description
        })]
      })
    }), (0, s.jsxs)(d.ModalFooter, {
      className: v.footer,
      children: [(0, s.jsx)(j.default, {
        guildId: L,
        guildProductListingId: p,
        sourceAnalyticsLocations: o.default.GUILD_PRODUCT_INFO_MODAL
      }), (0, s.jsx)(d.Text, {
        tag: "div",
        variant: "heading-xl/semibold",
        color: "header-primary",
        children: C
      })]
    })]
  })
}