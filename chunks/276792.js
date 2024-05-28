"use strict";
n.r(t), n.d(t, {
  adaptAnnouncementModalVariant1: function() {
    return m
  }
});
var a = n("735250");
n("470079");
var s = n("524437"),
  l = n("740111"),
  i = n("481060"),
  r = n("963249"),
  o = n("703656"),
  u = n("976644"),
  d = n("626135"),
  c = n("63063"),
  f = n("823188"),
  E = n("474936"),
  C = n("981631"),
  h = n("689938"),
  _ = n("715588"),
  S = n("74316");

function m(e) {
  var t, n;
  let {
    content: m,
    renderModalProps: p,
    analyticsLocations: I,
    analyticsLocation: g,
    isLightTheme: T
  } = e, A = "AnnouncementModalVariant1_".concat(s.DismissibleContent[Number(m.dismissKey)]), {
    onClose: N
  } = p, v = null != m.button && "" !== m.button.copy ? m.button.copy : h.default.Messages.BILLING_SUBSCRIBE_TO_PLAN, R = (null === (t = m.button) || void 0 === t ? void 0 : t.buttonAction) === l.ButtonAction.OPEN_MARKETING_PAGE ? "jump_to_mkt_button" : "get_nitro_button", O = (null === (n = m.button) || void 0 === n ? void 0 : n.buttonAction) === l.ButtonAction.OPEN_MARKETING_PAGE ? () => {
    (0, o.transitionTo)(C.Routes.APPLICATION_STORE), N()
  } : () => (0, r.default)({
    subscriptionTier: E.PremiumSubscriptionSKUs.TIER_2,
    analyticsLocations: I,
    analyticsObject: {
      ...g,
      object: C.AnalyticsObjects.BUTTON_CTA,
      objectType: C.AnalyticsObjectTypes.TIER_2
    },
    onClose: e => {
      e && N()
    }
  }), L = "" !== m.helpArticleId ? () => (0, a.jsx)(i.Anchor, {
    className: _.termsApplyAnchor,
    href: c.default.getArticleURL(m.helpArticleId),
    children: (0, a.jsx)(i.Heading, {
      variant: "heading-md/normal",
      className: _.termsApplyBodyText,
      children: h.default.Messages.BOGO_TERMS_APPLY
    })
  }) : void 0, P = {
    type: "video",
    src: T ? m.heroArtVideoLinkLightTheme : m.videoLink
  };
  ("" !== m.heroArtImageLinkDarkTheme || "" !== m.heroArtImageLinkLightTheme) && (P = {
    type: "image",
    src: T ? m.heroArtImageLinkLightTheme : m.heroArtImageLinkDarkTheme
  });
  let y = T ? f.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_OLD_GRADIENT_FILL : f.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_WHITE_FILL,
    M = "" !== m.modalTopPill ? () => (0, a.jsx)(f.PremiumPillWithSparkles, {
      text: m.modalTopPill,
      className: _.modalTopPill,
      colorOptions: y
    }) : void 0;
  return {
    renderModalProps: p,
    header: m.header,
    modalTopExtra: M,
    subHeader: m.subheader,
    subHeaderExtra: L,
    heroArt: P,
    featureCards: m.featureCards.map(e => ({
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
          d.default.track(C.AnalyticEvents.CHANGE_LOG_CTA_CLICKED, {
            change_log_id: A,
            cta_type: R,
            seconds_open: Math.round((Date.now() - e) / 1e3),
            target: A
          }), O()
        },
        children: [(0, a.jsx)("img", {
          alt: "",
          className: _.nitroIconSubHeader,
          src: S
        }), v]
      })
    },
    modalDismissibleContent: "" !== m.dismissKey ? Number(m.dismissKey) : void 0
  }
}