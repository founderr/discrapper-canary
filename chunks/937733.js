"use strict";
a.r(t), a.d(t, {
  default: function() {
    return x
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
  R = a("63063"),
  A = a("74538"),
  I = a("823188"),
  O = a("290347"),
  f = a("474936"),
  g = a("981631"),
  T = a("689938"),
  h = a("364530"),
  p = a("913907"),
  L = a("82341"),
  C = a("309539"),
  N = a("74316");
let P = "AnnouncementModalVariant1_PREMIUM_2024_APRIL_MARKETING_MODAL";

function x(e) {
  let {
    renderModalProps: t
  } = e, {
    onClose: a
  } = t, {
    location: x
  } = (0, d.useAnalyticsContext)(), {
    analyticsLocations: D
  } = (0, c.default)(u.default.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL), b = (0, n.useStateFromStores)([E.default], () => E.default.getCurrentUser()), S = (0, A.isPremiumExactly)(b, f.PremiumTypes.TIER_2), y = (0, A.isPremium)(b) && !S, v = (0, i.default)(), U = (0, l.isThemeLight)(v) ? I.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_OLD_GRADIENT_FILL : I.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_WHITE_FILL;
  return (0, s.jsx)(O.default, {
    renderModalProps: t,
    heroArt: {
      type: "video",
      src: ""
    },
    modalDismissibleContent: r.DismissibleContent.PREMIUM_2024_APRIL_MARKETING_MODAL,
    header: T.default.Messages.PREMIUM_2024_APRIL_NITRO_OFFER_HEADER,
    modalTopExtra: () => (0, s.jsx)(I.PremiumPillWithSparkles, {
      text: T.default.Messages.PREMIUM_2024_APRIL_NITRO_OFFER_MODAL_MODAL_TOP_PILL,
      className: h.modalTopPill,
      colorOptions: U
    }),
    subHeader: T.default.Messages.PREMIUM_2024_APRIL_NITRO_OFFER_MODAL_SUBHEADER,
    subHeaderExtra: () => (0, s.jsx)(o.Anchor, {
      className: h.termsApplyAnchor,
      href: R.default.getArticleURL(g.HelpdeskArticles.SUMMER_2023_BOGO),
      children: (0, s.jsx)(o.Heading, {
        variant: "heading-md/normal",
        className: h.termsApplyBodyText,
        children: T.default.Messages.BOGO_TERMS_APPLY
      })
    }),
    featureCards: [{
      header: T.default.Messages.PREMIUM_2024_APRIL_NITRO_OFFER_MODAL_CUSTOM_PROFILE_TILE_HEADER,
      subHeader: T.default.Messages.PREMIUM_2024_APRIL_NITRO_OFFER_MODAL_CUSTOM_PROFILE_TILE_BODY,
      imageSrc: p
    }, {
      header: T.default.Messages.PREMIUM_2024_APRIL_NITRO_OFFER_MODAL_COLOR_THEMES_TILE_HEADER,
      subHeader: T.default.Messages.PREMIUM_2024_APRIL_NITRO_OFFER_MODAL_COLOR_THEMES_TILE_BODY,
      imageSrc: C
    }, {
      header: T.default.Messages.PREMIUM_2024_APRIL_NITRO_OFFER_MODAL_APP_ICONS_TILE_HEADER,
      subHeader: T.default.Messages.PREMIUM_2024_APRIL_NITRO_OFFER_MODAL_APP_ICONS_TILE_BODY,
      imageSrc: L
    }],
    changeLogId: P,
    button: () => {
      let e = y ? "upgrade_plan_button" : "get_nitro_button",
        t = Date.now();
      return (0, s.jsxs)(m.default, {
        className: h.buttonWide,
        innerClassName: h.innerButton,
        color: o.Button.Colors.GREEN,
        size: o.Button.Sizes.SMALL,
        onClick: () => {
          M.default.track(g.AnalyticEvents.CHANGE_LOG_CTA_CLICKED, {
            change_log_id: P,
            cta_type: e,
            seconds_open: Math.round((Date.now() - t) / 1e3),
            target: P
          }), (0, _.default)({
            subscriptionTier: f.PremiumSubscriptionSKUs.TIER_2,
            analyticsLocations: D,
            analyticsObject: {
              ...x,
              object: g.AnalyticsObjects.BUTTON_CTA,
              objectType: g.AnalyticsObjectTypes.TIER_2
            },
            onClose: e => {
              e && a()
            }
          })
        },
        children: [(0, s.jsx)("img", {
          alt: "",
          className: h.nitroIconSubHeader,
          src: N
        }), T.default.Messages.PREMIUM_2024_APRIL_NITRO_OFFER_MODAL_BUTTON_CTA_NON_SUB]
      })
    }
  })
}