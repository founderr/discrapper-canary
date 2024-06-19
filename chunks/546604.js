t.r(a), t.d(a, {
  default: function() {
    return N
  }
});
var s = t(735250);
t(470079);
var n = t(512722),
  r = t.n(n),
  i = t(990547),
  l = t(442837),
  o = t(481060),
  c = t(100527),
  d = t(213609),
  u = t(240657),
  x = t(809086),
  m = t(430824),
  h = t(240864),
  _ = t(942833),
  j = t(409110),
  g = t(226060),
  p = t(689938),
  D = t(905643);

function N(e) {
  var a, t;
  let {
    transitionState: n,
    guildProductListingId: N,
    analyticsLocation: v,
    guildId: I,
    onClose: O
  } = e, Z = (0, l.e7)([h.Z], () => h.Z.getGuildProduct(N));
  r()(null != Z, "guildProductListing cannot be null"), (0, d.Z)({
    type: i.ImpressionTypes.MODAL,
    name: i.ImpressionNames.GUILD_PRODUCT_LISTING_INFO_MODAL,
    properties: {
      guild_product_listing_id: N,
      has_entitlement: !0 === Z.has_entitlement,
      location: v
    }
  });
  let C = null !== (a = (0, _.C)(Z)) && void 0 !== a ? a : "",
    L = (0, _.k)(Z),
    T = (0, l.e7)([m.Z], () => m.Z.getGuild(I));
  return (0, s.jsxs)(o.ModalRoot, {
    className: D.modal,
    size: o.ModalSize.MEDIUM,
    transitionState: n,
    "aria-label": Z.name,
    children: [(0, s.jsxs)(o.ModalHeader, {
      separator: !1,
      children: [(0, s.jsx)(x.e, {
        height: 267,
        listing: Z,
        className: D.headerImage,
        alt: ""
      }), (0, s.jsx)(o.ModalCloseButton, {
        className: D.closeButton,
        onClick: O,
        withCircleBackground: !0
      })]
    }), (0, s.jsx)(o.ModalContent, {
      children: (0, s.jsxs)("div", {
        className: D.body,
        children: [(0, s.jsx)(o.Heading, {
          variant: "heading-xl/medium",
          color: "header-primary",
          children: Z.name
        }), (0, s.jsx)(o.Spacer, {
          size: 4
        }), (0, s.jsx)(o.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: p.Z.Messages.GUILD_PRODUCT_INFO_MODAL_PRODUCT_OFFER.format({
            productType: C,
            personName: null !== (t = null == T ? void 0 : T.name) && void 0 !== t ? t : ""
          })
        }), (0, s.jsx)(o.Spacer, {
          size: 16
        }), (0, s.jsx)(j.Z, {
          listing: Z
        }), (0, s.jsx)(o.Spacer, {
          size: 16
        }), (0, s.jsx)("div", {
          className: D.seperator
        }), (0, s.jsx)(o.Spacer, {
          size: 16
        }), (0, s.jsx)(o.Heading, {
          variant: "heading-lg/medium",
          color: "header-primary",
          children: p.Z.Messages.GUILD_PRODUCT_INFO_MODAL_DETAIL_HEADER
        }), (0, s.jsx)(o.Spacer, {
          size: 12
        }), (0, s.jsx)(u.Z, {
          className: D.description,
          variant: "text-md/normal",
          color: "text-muted",
          text: Z.description
        })]
      })
    }), (0, s.jsxs)(o.ModalFooter, {
      className: D.footer,
      children: [(0, s.jsx)(g.Z, {
        guildId: I,
        guildProductListingId: N,
        sourceAnalyticsLocations: c.Z.GUILD_PRODUCT_INFO_MODAL
      }), (0, s.jsx)(o.Text, {
        tag: "div",
        variant: "heading-xl/semibold",
        color: "header-primary",
        children: L
      })]
    })]
  })
}