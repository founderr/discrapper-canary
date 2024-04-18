"use strict";
a.r(t), a.d(t, {
  default: function() {
    return D
  }
});
var s = a("735250");
a("470079");
var n = a("442837"),
  r = a("524437"),
  l = a("663002"),
  o = a("481060"),
  d = a("2052"),
  i = a("410030"),
  u = a("100527"),
  c = a("906732"),
  _ = a("963249"),
  E = a("594174"),
  m = a("976644"),
  M = a("626135"),
  f = a("63063"),
  A = a("74538"),
  I = a("823188"),
  R = a("290347"),
  g = a("474936"),
  O = a("981631"),
  p = a("689938"),
  T = a("364530"),
  h = a("891594"),
  L = a("607139"),
  C = a("956723"),
  N = a("103052"),
  P = a("74316");
let x = "AnnouncementModalVariant1_PREMIUM_2024_APRIL_MARKETING_MODAL";

function D(e) {
  let {
    renderModalProps: t
  } = e, {
    onClose: a
  } = t, {
    location: D
  } = (0, d.useAnalyticsContext)(), {
    analyticsLocations: b
  } = (0, c.default)(u.default.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL), S = (0, n.useStateFromStores)([E.default], () => E.default.getCurrentUser()), y = (0, A.isPremiumExactly)(S, g.PremiumTypes.TIER_2), v = (0, A.isPremium)(S) && !y, j = (0, i.default)(), H = (0, l.isThemeLight)(j) ? I.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_OLD_GRADIENT_FILL : I.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_WHITE_FILL;
  return (0, s.jsx)(R.default, {
    renderModalProps: t,
    heroArt: {
      type: "image",
      src: N
    },
    modalDismissibleContent: r.DismissibleContent.PREMIUM_2024_APRIL_MARKETING_MODAL,
    header: p.default.Messages.PREMIUM_2024_APRIL_NITRO_OFFER_HEADER,
    modalTopExtra: () => (0, s.jsx)(I.PremiumPillWithSparkles, {
      text: p.default.Messages.PREMIUM_2024_APRIL_NITRO_OFFER_MODAL_MODAL_TOP_PILL,
      className: T.modalTopPill,
      colorOptions: H
    }),
    subHeader: p.default.Messages.PREMIUM_2024_APRIL_NITRO_OFFER_MODAL_SUBHEADER,
    subHeaderExtra: () => (0, s.jsx)(o.Anchor, {
      className: T.termsApplyAnchor,
      href: f.default.getArticleURL(O.HelpdeskArticles.PREMIUM_APRIL_2024_MARKETING_MOMENT),
      children: (0, s.jsx)(o.Heading, {
        variant: "heading-md/normal",
        className: T.termsApplyBodyText,
        children: p.default.Messages.BOGO_TERMS_APPLY
      })
    }),
    featureCards: [{
      header: p.default.Messages.PREMIUM_2024_APRIL_NITRO_OFFER_MODAL_CUSTOM_PROFILE_TILE_HEADER,
      subHeader: p.default.Messages.PREMIUM_2024_APRIL_NITRO_OFFER_MODAL_CUSTOM_PROFILE_TILE_BODY,
      imageSrc: C
    }, {
      header: p.default.Messages.PREMIUM_2024_APRIL_NITRO_OFFER_MODAL_COLOR_THEMES_TILE_HEADER,
      subHeader: p.default.Messages.PREMIUM_2024_APRIL_NITRO_OFFER_MODAL_COLOR_THEMES_TILE_BODY,
      imageSrc: h
    }, {
      header: p.default.Messages.PREMIUM_2024_APRIL_NITRO_OFFER_MODAL_APP_ICONS_TILE_HEADER,
      subHeader: p.default.Messages.PREMIUM_2024_APRIL_NITRO_OFFER_MODAL_APP_ICONS_TILE_BODY,
      imageSrc: L
    }],
    changeLogId: x,
    button: () => {
      let e = v ? "upgrade_plan_button" : "get_nitro_button",
        t = Date.now();
      return (0, s.jsxs)(m.default, {
        className: T.buttonWide,
        innerClassName: T.innerButton,
        color: o.Button.Colors.GREEN,
        size: o.Button.Sizes.SMALL,
        onClick: () => {
          M.default.track(O.AnalyticEvents.CHANGE_LOG_CTA_CLICKED, {
            change_log_id: x,
            cta_type: e,
            seconds_open: Math.round((Date.now() - t) / 1e3),
            target: x
          }), (0, _.default)({
            subscriptionTier: g.PremiumSubscriptionSKUs.TIER_2,
            analyticsLocations: b,
            analyticsObject: {
              ...D,
              object: O.AnalyticsObjects.BUTTON_CTA,
              objectType: O.AnalyticsObjectTypes.TIER_2
            },
            onClose: e => {
              e && a()
            }
          })
        },
        children: [(0, s.jsx)("img", {
          alt: "",
          className: T.nitroIconSubHeader,
          src: P
        }), p.default.Messages.BOGO_CLAIM_OFFER]
      })
    }
  })
}