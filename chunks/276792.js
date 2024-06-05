"use strict";
n.r(t), n.d(t, {
  adaptAnnouncementModalVariant1: function() {
    return S
  }
});
var a = n("735250");
n("470079");
var s = n("704215"),
  l = n("740111"),
  i = n("481060"),
  r = n("963249"),
  o = n("703656"),
  u = n("976644"),
  d = n("626135"),
  c = n("63063"),
  f = n("823188"),
  E = n("474936"),
  h = n("981631"),
  C = n("689938"),
  _ = n("715588"),
  m = n("74316");

function S(e) {
  var t, n;
  let {
    content: S,
    renderModalProps: p,
    analyticsLocations: I,
    analyticsLocation: g,
    isLightTheme: T
  } = e, A = "AnnouncementModalVariant1_".concat(s.DismissibleContent[Number(S.dismissKey)]), {
    onClose: N
  } = p, v = null != S.button && "" !== S.button.copy ? S.button.copy : C.default.Messages.BILLING_SUBSCRIBE_TO_PLAN, R = (null === (t = S.button) || void 0 === t ? void 0 : t.buttonAction) === l.ButtonAction.OPEN_MARKETING_PAGE ? "jump_to_mkt_button" : "get_nitro_button", O = (null === (n = S.button) || void 0 === n ? void 0 : n.buttonAction) === l.ButtonAction.OPEN_MARKETING_PAGE ? () => {
    (0, o.transitionTo)(h.Routes.APPLICATION_STORE), N()
  } : () => (0, r.default)({
    subscriptionTier: E.PremiumSubscriptionSKUs.TIER_2,
    analyticsLocations: I,
    analyticsObject: {
      ...g,
      object: h.AnalyticsObjects.BUTTON_CTA,
      objectType: h.AnalyticsObjectTypes.TIER_2
    },
    onClose: e => {
      e && N()
    }
  }), L = "" !== S.helpArticleId ? () => (0, a.jsx)(i.Anchor, {
    className: _.termsApplyAnchor,
    href: c.default.getArticleURL(S.helpArticleId),
    children: (0, a.jsx)(i.Heading, {
      variant: "heading-md/normal",
      className: _.termsApplyBodyText,
      children: C.default.Messages.BOGO_TERMS_APPLY
    })
  }) : void 0, P = {
    type: "video",
    src: T ? S.heroArtVideoLinkLightTheme : S.videoLink
  };
  ("" !== S.heroArtImageLinkDarkTheme || "" !== S.heroArtImageLinkLightTheme) && (P = {
    type: "image",
    src: T ? S.heroArtImageLinkLightTheme : S.heroArtImageLinkDarkTheme
  });
  let M = T ? f.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_OLD_GRADIENT_FILL : f.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_WHITE_FILL,
    y = "" !== S.modalTopPill ? () => (0, a.jsx)(f.PremiumPillWithSparkles, {
      text: S.modalTopPill,
      className: _.modalTopPill,
      colorOptions: M
    }) : void 0;
  return {
    renderModalProps: p,
    header: S.header,
    modalTopExtra: y,
    subHeader: S.subheader,
    subHeaderExtra: L,
    heroArt: P,
    featureCards: S.featureCards.map(e => ({
      header: e.header,
      subHeader: e.body,
      imageSrc: T ? e.imageLinkLightTheme : e.imageLink,
      tagText: "" !== e.pill ? e.pill : void 0
    })),
    changeLogId: A,
    button: () => {
      let e = Date.now();
      return (0, a.jsxs)(u.default, {
        className: _.buttonWide,
        innerClassName: _.innerButton,
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
        children: [(0, a.jsx)("img", {
          alt: "",
          className: _.nitroIconSubHeader,
          src: m
        }), v]
      })
    },
    modalDismissibleContent: "" !== S.dismissKey ? Number(S.dismissKey) : void 0
  }
}