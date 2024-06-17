"use strict";
n.r(t), n.d(t, {
  adaptAnnouncementModalVariant1: function() {
    return m
  }
});
var a = n("735250");
n("470079");
var s = n("704215"),
  l = n("740111"),
  i = n("481060"),
  r = n("963249"),
  o = n("703656"),
  u = n("626135"),
  d = n("63063"),
  c = n("823188"),
  f = n("474936"),
  E = n("981631"),
  h = n("689938"),
  C = n("715588"),
  _ = n("74316");

function m(e) {
  var t, n;
  let {
    content: m,
    renderModalProps: S,
    analyticsLocations: p,
    analyticsLocation: I,
    isLightTheme: g
  } = e, T = "AnnouncementModalVariant1_".concat(s.DismissibleContent[Number(m.dismissKey)]), {
    onClose: A
  } = S, N = null != m.button && "" !== m.button.copy ? m.button.copy : h.default.Messages.BILLING_SUBSCRIBE_TO_PLAN, v = (null === (t = m.button) || void 0 === t ? void 0 : t.buttonAction) === l.ButtonAction.OPEN_MARKETING_PAGE ? "jump_to_mkt_button" : "get_nitro_button", R = (null === (n = m.button) || void 0 === n ? void 0 : n.buttonAction) === l.ButtonAction.OPEN_MARKETING_PAGE ? () => {
    (0, o.transitionTo)(E.Routes.APPLICATION_STORE), A()
  } : () => (0, r.default)({
    subscriptionTier: f.PremiumSubscriptionSKUs.TIER_2,
    analyticsLocations: p,
    analyticsObject: {
      ...I,
      object: E.AnalyticsObjects.BUTTON_CTA,
      objectType: E.AnalyticsObjectTypes.TIER_2
    },
    onClose: e => {
      e && A()
    }
  }), O = "" !== m.helpArticleId ? () => (0, a.jsx)(i.Anchor, {
    className: C.termsApplyAnchor,
    href: d.default.getArticleURL(m.helpArticleId),
    children: (0, a.jsx)(i.Heading, {
      variant: "heading-md/normal",
      className: C.termsApplyBodyText,
      children: h.default.Messages.BOGO_TERMS_APPLY
    })
  }) : void 0, L = {
    type: "video",
    src: g ? m.heroArtVideoLinkLightTheme : m.videoLink
  };
  ("" !== m.heroArtImageLinkDarkTheme || "" !== m.heroArtImageLinkLightTheme) && (L = {
    type: "image",
    src: g ? m.heroArtImageLinkLightTheme : m.heroArtImageLinkDarkTheme
  });
  let P = g ? c.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_OLD_GRADIENT_FILL : c.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_WHITE_FILL,
    M = "" !== m.modalTopPill ? () => (0, a.jsx)(c.PremiumPillWithSparkles, {
      text: m.modalTopPill,
      className: C.modalTopPill,
      colorOptions: P
    }) : void 0;
  return {
    renderModalProps: S,
    header: m.header,
    modalTopExtra: M,
    subHeader: m.subheader,
    subHeaderExtra: O,
    heroArt: L,
    featureCards: m.featureCards.map(e => ({
      header: e.header,
      subHeader: e.body,
      imageSrc: g ? e.imageLinkLightTheme : e.imageLink,
      tagText: "" !== e.pill ? e.pill : void 0
    })),
    changeLogId: T,
    button: () => {
      let e = Date.now();
      return (0, a.jsxs)(i.ShinyButton, {
        className: C.buttonWide,
        innerClassName: C.innerButton,
        color: i.Button.Colors.GREEN,
        size: i.Button.Sizes.SMALL,
        onClick: () => {
          u.default.track(E.AnalyticEvents.CHANGE_LOG_CTA_CLICKED, {
            change_log_id: T,
            cta_type: v,
            seconds_open: Math.round((Date.now() - e) / 1e3),
            target: T
          }), R()
        },
        children: [(0, a.jsx)("img", {
          alt: "",
          className: C.nitroIconSubHeader,
          src: _
        }), N]
      })
    },
    modalDismissibleContent: "" !== m.dismissKey ? Number(m.dismissKey) : void 0
  }
}