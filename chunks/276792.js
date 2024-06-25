n.d(t, {
  N: function() {
    return T
  }
});
var s = n(735250);
n(470079);
var i = n(704215),
  l = n(740111),
  a = n(481060),
  r = n(963249),
  o = n(703656),
  c = n(626135),
  u = n(63063),
  d = n(823188),
  E = n(474936),
  h = n(981631),
  _ = n(689938),
  I = n(954440),
  m = n(74316);

function T(e) {
  var t, n;
  let {
    content: T,
    renderModalProps: g,
    analyticsLocations: p,
    analyticsLocation: N,
    isLightTheme: S
  } = e, C = "AnnouncementModalVariant1_".concat(i.z[Number(T.dismissKey)]), {
    onClose: A
  } = g, f = null != T.button && "" !== T.button.copy ? T.button.copy : _.Z.Messages.BILLING_SUBSCRIBE_TO_PLAN, Z = (null === (t = T.button) || void 0 === t ? void 0 : t.buttonAction) === l.Wc.OPEN_MARKETING_PAGE ? "jump_to_mkt_button" : "get_nitro_button", L = (null === (n = T.button) || void 0 === n ? void 0 : n.buttonAction) === l.Wc.OPEN_MARKETING_PAGE ? () => {
    (0, o.uL)(h.Z5c.APPLICATION_STORE), A()
  } : () => (0, r.Z)({
    subscriptionTier: E.Si.TIER_2,
    analyticsLocations: p,
    analyticsObject: {
      ...N,
      object: h.qAy.BUTTON_CTA,
      objectType: h.Qqv.TIER_2
    },
    onClose: e => {
      e && A()
    }
  }), O = "" !== T.helpArticleId ? () => (0, s.jsx)(a.Anchor, {
    className: I.termsApplyAnchor,
    href: u.Z.getArticleURL(T.helpArticleId),
    children: (0, s.jsx)(a.Heading, {
      variant: "heading-md/normal",
      className: I.termsApplyBodyText,
      children: _.Z.Messages.BOGO_TERMS_APPLY
    })
  }) : void 0, v = {
    type: "video",
    src: S ? T.heroArtVideoLinkLightTheme : T.videoLink
  };
  ("" !== T.heroArtImageLinkDarkTheme || "" !== T.heroArtImageLinkLightTheme) && (v = {
    type: "image",
    src: S ? T.heroArtImageLinkLightTheme : T.heroArtImageLinkDarkTheme
  });
  let R = S ? d.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL : d.VE.PREMIUM_TIER_2_WHITE_FILL,
    P = "" !== T.modalTopPill ? () => (0, s.jsx)(d.Cy, {
      text: T.modalTopPill,
      className: I.modalTopPill,
      colorOptions: R
    }) : void 0;
  return {
    renderModalProps: g,
    header: T.header,
    modalTopExtra: P,
    subHeader: T.subheader,
    subHeaderExtra: O,
    heroArt: v,
    featureCards: T.featureCards.map(e => ({
      header: e.header,
      subHeader: e.body,
      imageSrc: S ? e.imageLinkLightTheme : e.imageLink,
      tagText: "" !== e.pill ? e.pill : void 0
    })),
    changeLogId: C,
    button: () => {
      let e = Date.now();
      return (0, s.jsxs)(a.ShinyButton, {
        className: I.buttonWide,
        innerClassName: I.innerButton,
        color: a.Button.Colors.GREEN,
        size: a.Button.Sizes.SMALL,
        onClick: () => {
          c.default.track(h.rMx.CHANGE_LOG_CTA_CLICKED, {
            change_log_id: C,
            cta_type: Z,
            seconds_open: Math.round((Date.now() - e) / 1e3),
            target: C
          }), L()
        },
        children: [(0, s.jsx)("img", {
          alt: "",
          className: I.nitroIconSubHeader,
          src: m
        }), f]
      })
    },
    modalDismissibleContent: "" !== T.dismissKey ? Number(T.dismissKey) : void 0
  }
}