"use strict";
a.r(t), a.d(t, {
  adaptAnnouncementModalVariant1: function() {
    return S
  }
});
var n = a("735250");
a("470079");
var s = a("524437"),
  l = a("740111"),
  i = a("481060"),
  r = a("963249"),
  o = a("703656"),
  u = a("976644"),
  d = a("626135"),
  c = a("63063"),
  f = a("823188"),
  E = a("474936"),
  h = a("981631"),
  _ = a("689938"),
  C = a("464765"),
  m = a("74316");

function S(e) {
  var t, a;
  let {
    content: S,
    renderModalProps: I,
    analyticsLocations: p,
    analyticsLocation: T,
    isLightTheme: g
  } = e, A = "AnnouncementModalVariant1_".concat(s.DismissibleContent[Number(S.dismissKey)]), {
    onClose: N
  } = I, v = null != S.button && "" !== S.button.copy ? S.button.copy : _.default.Messages.BILLING_SUBSCRIBE_TO_PLAN, R = (null === (t = S.button) || void 0 === t ? void 0 : t.buttonAction) === l.ButtonAction.OPEN_MARKETING_PAGE ? "jump_to_mkt_button" : "get_nitro_button", O = (null === (a = S.button) || void 0 === a ? void 0 : a.buttonAction) === l.ButtonAction.OPEN_MARKETING_PAGE ? () => {
    (0, o.transitionTo)(h.Routes.APPLICATION_STORE), N()
  } : () => (0, r.default)({
    subscriptionTier: E.PremiumSubscriptionSKUs.TIER_2,
    analyticsLocations: p,
    analyticsObject: {
      ...T,
      object: h.AnalyticsObjects.BUTTON_CTA,
      objectType: h.AnalyticsObjectTypes.TIER_2
    },
    onClose: e => {
      e && N()
    }
  }), L = "" !== S.helpArticleId ? () => (0, n.jsx)(i.Anchor, {
    className: C.termsApplyAnchor,
    href: c.default.getArticleURL(S.helpArticleId),
    children: (0, n.jsx)(i.Heading, {
      variant: "heading-md/normal",
      className: C.termsApplyBodyText,
      children: _.default.Messages.BOGO_TERMS_APPLY
    })
  }) : void 0, M = {
    type: "video",
    src: g ? S.heroArtVideoLinkLightTheme : S.videoLink
  };
  ("" !== S.heroArtImageLinkDarkTheme || "" !== S.heroArtImageLinkLightTheme) && (M = {
    type: "image",
    src: g ? S.heroArtImageLinkLightTheme : S.heroArtImageLinkDarkTheme
  });
  let P = g ? f.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_OLD_GRADIENT_FILL : f.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_WHITE_FILL,
    x = "" !== S.modalTopPill ? () => (0, n.jsx)(f.PremiumPillWithSparkles, {
      text: S.modalTopPill,
      className: C.modalTopPill,
      colorOptions: P
    }) : void 0;
  return {
    renderModalProps: I,
    header: S.header,
    modalTopExtra: x,
    subHeader: S.subheader,
    subHeaderExtra: L,
    heroArt: M,
    featureCards: S.featureCards.map(e => ({
      header: e.header,
      subHeader: e.body,
      imageSrc: g ? e.imageLinkLightTheme : e.imageLink,
      tagText: "" !== e.pill ? e.pill : void 0
    })),
    changeLogId: A,
    button: () => {
      let e = Date.now();
      return (0, n.jsxs)(u.default, {
        className: C.buttonWide,
        innerClassName: C.innerButton,
        color: i.Button.Colors.GREEN,
        size: i.Button.Sizes.SMALL,
        onClick: () => {
          d.default.track(h.AnalyticEvents.CHANGE_LOG_CTA_CLICKED, {
            change_log_id: A,
            cta_type: R,
            seconds_open: Math.round((Date.now() - e) / 1e3),
            target: A
          }), O()
        },
        children: [(0, n.jsx)("img", {
          alt: "",
          className: C.nitroIconSubHeader,
          src: m
        }), v]
      })
    },
    modalDismissibleContent: "" !== S.dismissKey ? Number(S.dismissKey) : void 0
  }
}