"use strict";
n.r(t), n.d(t, {
  adaptAnnouncementModalVariant1: function() {
    return m
  }
});
var a = n("735250");
n("470079");
var s = n("740111"),
  l = n("481060"),
  i = n("963249"),
  r = n("703656"),
  o = n("976644"),
  u = n("626135"),
  d = n("63063"),
  c = n("823188"),
  f = n("474936"),
  E = n("981631"),
  h = n("689938"),
  _ = n("464765"),
  C = n("74316");

function m(e) {
  var t, n;
  let {
    content: m,
    renderModalProps: S,
    analyticsLocations: I,
    analyticsLocation: p,
    isLightTheme: T
  } = e, g = "AnnouncementModalVariant1", {
    onClose: N
  } = S, A = null != m.button && "" !== m.button.copy ? m.button.copy : h.default.Messages.BILLING_SUBSCRIBE_TO_PLAN, O = (null === (t = m.button) || void 0 === t ? void 0 : t.buttonAction) === s.ButtonAction.OPEN_MARKETING_PAGE ? "jump_to_mkt_button" : "get_nitro_button", R = (null === (n = m.button) || void 0 === n ? void 0 : n.buttonAction) === s.ButtonAction.OPEN_MARKETING_PAGE ? () => {
    (0, r.transitionTo)(E.Routes.APPLICATION_STORE), N()
  } : () => (0, i.default)({
    subscriptionTier: f.PremiumSubscriptionSKUs.TIER_2,
    analyticsLocations: I,
    analyticsObject: {
      ...p,
      object: E.AnalyticsObjects.BUTTON_CTA,
      objectType: E.AnalyticsObjectTypes.TIER_2
    },
    onClose: e => {
      e && N()
    }
  }), v = "" !== m.helpArticleId ? () => (0, a.jsx)(l.Anchor, {
    className: _.termsApplyAnchor,
    href: d.default.getArticleURL(m.helpArticleId),
    children: (0, a.jsx)(l.Heading, {
      variant: "heading-md/normal",
      className: _.termsApplyBodyText,
      children: h.default.Messages.BOGO_TERMS_APPLY
    })
  }) : void 0, L = {
    type: "video",
    src: T ? m.heroArtVideoLinkLightTheme : m.videoLink
  };
  ("" !== m.heroArtImageLinkDarkTheme || "" !== m.heroArtImageLinkLightTheme) && (L = {
    type: "image",
    src: T ? m.heroArtImageLinkLightTheme : m.heroArtImageLinkDarkTheme
  });
  let P = T ? c.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_OLD_GRADIENT_FILL : c.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_WHITE_FILL,
    M = "" !== m.modalTopPill ? () => (0, a.jsx)(c.PremiumPillWithSparkles, {
      text: m.modalTopPill,
      className: _.modalTopPill,
      colorOptions: P
    }) : void 0;
  return {
    renderModalProps: S,
    header: m.header,
    modalTopExtra: M,
    subHeader: m.subheader,
    subHeaderExtra: v,
    heroArt: L,
    featureCards: m.featureCards.map(e => ({
      header: e.header,
      subHeader: e.body,
      imageSrc: T ? e.imageLinkLightTheme : e.imageLink,
      tagText: "" !== e.pill ? e.pill : void 0
    })),
    changeLogId: g,
    button: () => {
      let e = Date.now();
      return (0, a.jsxs)(o.default, {
        className: _.buttonWide,
        innerClassName: _.innerButton,
        color: l.Button.Colors.GREEN,
        size: l.Button.Sizes.SMALL,
        onClick: () => {
          u.default.track(E.AnalyticEvents.CHANGE_LOG_CTA_CLICKED, {
            change_log_id: g,
            cta_type: O,
            seconds_open: Math.round((Date.now() - e) / 1e3),
            target: g
          }), R()
        },
        children: [(0, a.jsx)("img", {
          alt: "",
          className: _.nitroIconSubHeader,
          src: C
        }), A]
      })
    },
    modalDismissibleContent: "" !== m.dismissKey ? Number(m.dismissKey) : void 0
  }
}