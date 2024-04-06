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
  _ = n("689938"),
  h = n("464765"),
  C = n("74316");

function m(e) {
  var t, n;
  let {
    content: m,
    renderModalProps: S,
    analyticsLocations: I,
    analyticsLocation: T,
    isLightTheme: p
  } = e, g = "AnnouncementModalVariant1", {
    onClose: A
  } = S, N = null != m.button && "" !== m.button.copy ? m.button.copy : _.default.Messages.BILLING_SUBSCRIBE_TO_PLAN, v = (null === (t = m.button) || void 0 === t ? void 0 : t.buttonAction) === s.ButtonAction.OPEN_MARKETING_PAGE ? "jump_to_mkt_button" : "get_nitro_button", R = (null === (n = m.button) || void 0 === n ? void 0 : n.buttonAction) === s.ButtonAction.OPEN_MARKETING_PAGE ? () => {
    (0, r.transitionTo)(E.Routes.APPLICATION_STORE), A()
  } : () => (0, i.default)({
    subscriptionTier: f.PremiumSubscriptionSKUs.TIER_2,
    analyticsLocations: I,
    analyticsObject: {
      ...T,
      object: E.AnalyticsObjects.BUTTON_CTA,
      objectType: E.AnalyticsObjectTypes.TIER_2
    },
    onClose: e => {
      e && A()
    }
  }), O = "" !== m.helpArticleId ? () => (0, a.jsx)(l.Anchor, {
    className: h.termsApplyAnchor,
    href: d.default.getArticleURL(m.helpArticleId),
    children: (0, a.jsx)(l.Heading, {
      variant: "heading-md/normal",
      className: h.termsApplyBodyText,
      children: _.default.Messages.BOGO_TERMS_APPLY
    })
  }) : void 0, L = {
    type: "video",
    src: p ? m.heroArtVideoLinkLightTheme : m.videoLink
  };
  ("" !== m.heroArtImageLinkDarkTheme || "" !== m.heroArtImageLinkLightTheme) && (L = {
    type: "image",
    src: p ? m.heroArtImageLinkLightTheme : m.heroArtImageLinkDarkTheme
  });
  let M = p ? c.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_OLD_GRADIENT_FILL : c.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_WHITE_FILL,
    P = "" !== m.modalTopPill ? () => (0, a.jsx)(c.PremiumPillWithSparkles, {
      text: m.modalTopPill,
      className: h.modalTopPill,
      colorOptions: M
    }) : void 0;
  return {
    renderModalProps: S,
    header: m.header,
    modalTopExtra: P,
    subHeader: m.subheader,
    subHeaderExtra: O,
    heroArt: L,
    featureCards: m.featureCards.map(e => ({
      header: e.header,
      subHeader: e.body,
      imageSrc: p ? e.imageLinkLightTheme : e.imageLink,
      tagText: "" !== e.pill ? e.pill : void 0
    })),
    changeLogId: g,
    button: () => {
      let e = Date.now();
      return (0, a.jsxs)(o.default, {
        className: h.buttonWide,
        innerClassName: h.innerButton,
        color: l.Button.Colors.GREEN,
        size: l.Button.Sizes.SMALL,
        onClick: () => {
          u.default.track(E.AnalyticEvents.CHANGE_LOG_CTA_CLICKED, {
            change_log_id: g,
            cta_type: v,
            seconds_open: Math.round((Date.now() - e) / 1e3),
            target: g
          }), R()
        },
        children: [(0, a.jsx)("img", {
          alt: "",
          className: h.nitroIconSubHeader,
          src: C
        }), N]
      })
    },
    modalDismissibleContent: "" !== m.dismissKey ? Number(m.dismissKey) : void 0
  }
}