"use strict";
a.r(t), a.d(t, {
  default: function() {
    return x
  }
});
var s = a("735250");
a("470079");
var n = a("442837"),
  r = a("704215"),
  l = a("481060"),
  o = a("2052"),
  d = a("100527"),
  i = a("906732"),
  c = a("963249"),
  u = a("706454"),
  _ = a("594174"),
  m = a("626135"),
  E = a("63063"),
  N = a("74538"),
  h = a("290347"),
  g = a("474936"),
  f = a("981631"),
  A = a("689938"),
  O = a("841959"),
  C = a("913907"),
  p = a("82341"),
  M = a("309539"),
  D = a("74316");
let T = "2023_summer_bogo",
  b = "DnkvLW5052Y";

function x(e) {
  let {
    renderModalProps: t
  } = e, {
    onClose: a
  } = t, x = (0, n.useStateFromStores)([u.default], () => u.default.locale), y = x.split("-")[0], R = {
    url: "".concat((0, f.YOUTUBE_EMBED_URL)(b), "?vq=large&rel=0&controls=0&showinfo=0&cc_load_policy=").concat("en" === y ? "0" : "1", "&cc_lang_pref=").concat("zh-CN" === x ? "zh-Hans" : "zh-TW" === x ? "zh-Hant" : y),
    width: 498,
    height: 280
  }, {
    location: S
  } = (0, o.useAnalyticsContext)(), {
    analyticsLocations: v
  } = (0, i.default)(d.default.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL), L = (0, n.useStateFromStores)([_.default], () => _.default.getCurrentUser()), G = (0, N.isPremiumExactly)(L, g.PremiumTypes.TIER_2), B = (0, N.isPremium)(L) && !G;
  return (0, s.jsx)(h.default, {
    renderModalProps: t,
    heroArt: {
      type: "embed",
      embed: R,
      thumbnail: {
        url: "https://i.ytimg.com/vi/".concat(b, "/maxresdefault.jpg"),
        width: 498,
        height: 280
      },
      href: "https://youtu.be/".concat(b)
    },
    modalDismissibleContent: r.DismissibleContent.SUMMER_2023_BOGO_ANNOUNCEMENT_MODAL,
    header: A.default.Messages.BOGO_ANNOUNCEMENT_MODAL_HEADER,
    subHeader: A.default.Messages.BOGO_ANNOUNCEMENT_MODAL_SUBHEADER,
    subHeaderExtra: () => (0, s.jsx)(l.Anchor, {
      className: O.termsApplyAnchor,
      href: E.default.getArticleURL(f.HelpdeskArticles.SUMMER_2023_BOGO),
      children: (0, s.jsx)(l.Heading, {
        variant: "heading-md/normal",
        className: O.termsApplyBodyText,
        children: A.default.Messages.BOGO_TERMS_APPLY
      })
    }),
    featureCards: [{
      header: A.default.Messages.BOGO_ANNOUNCEMENT_MODAL_REMIXING_CARD_HEADER,
      subHeader: A.default.Messages.BOGO_ANNOUNCEMENT_MODAL_REMIXING_CARD_BODY_FORMATTED.format({
        helpCenterLink: E.default.getArticleURL(f.HelpdeskArticles.REMIXING)
      }),
      imageSrc: C,
      tagText: A.default.Messages.EARLY_ACCESS
    }, {
      header: A.default.Messages.BOGO_ANNOUNCEMENT_MODAL_THEMES_CARD_HEADER,
      subHeader: A.default.Messages.BOGO_ANNOUNCEMENT_MODAL_THEMES_CARD_BODY,
      imageSrc: M
    }, {
      header: A.default.Messages.BOGO_ANNOUNCEMENT_MODAL_SOUNDBOARD_CARD_HEADER,
      subHeader: A.default.Messages.BOGO_ANNOUNCEMENT_MODAL_SOUNDBOARD_CARD_BODY_FORMATTED,
      imageSrc: p
    }],
    changeLogId: T,
    button: () => {
      let e = B ? "upgrade_plan_button" : "get_nitro_button",
        t = Date.now();
      return (0, s.jsxs)(l.ShinyButton, {
        className: O.buttonWide,
        innerClassName: O.innerButton,
        color: l.Button.Colors.GREEN,
        size: l.Button.Sizes.SMALL,
        onClick: () => {
          m.default.track(f.AnalyticEvents.CHANGE_LOG_CTA_CLICKED, {
            change_log_id: T,
            cta_type: e,
            seconds_open: Math.round((Date.now() - t) / 1e3),
            target: "bogo_payment_model"
          }), (0, c.default)({
            subscriptionTier: g.PremiumSubscriptionSKUs.TIER_2,
            analyticsLocations: v,
            analyticsObject: {
              ...S,
              object: f.AnalyticsObjects.BUTTON_CTA,
              objectType: f.AnalyticsObjectTypes.TIER_2
            },
            onClose: e => {
              e && a()
            }
          })
        },
        children: [(0, s.jsx)("img", {
          alt: "",
          className: O.nitroIconSubHeader,
          src: D
        }), A.default.Messages.BOGO_CLAIM_OFFER]
      })
    }
  })
}