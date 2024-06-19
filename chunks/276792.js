n.d(t, {
  N: function() {
    return g
  }
});
var i = n(735250);
n(470079);
var s = n(704215),
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

function g(e) {
  var t, n;
  let {
    content: g,
    renderModalProps: p,
    analyticsLocations: T,
    analyticsLocation: N,
    isLightTheme: S
  } = e, C = "AnnouncementModalVariant1_".concat(s.z[Number(g.dismissKey)]), {
    onClose: A
  } = p, f = null != g.button && "" !== g.button.copy ? g.button.copy : _.Z.Messages.BILLING_SUBSCRIBE_TO_PLAN, Z = (null === (t = g.button) || void 0 === t ? void 0 : t.buttonAction) === l.Wc.OPEN_MARKETING_PAGE ? "jump_to_mkt_button" : "get_nitro_button", v = (null === (n = g.button) || void 0 === n ? void 0 : n.buttonAction) === l.Wc.OPEN_MARKETING_PAGE ? () => {
    (0, o.uL)(h.Z5c.APPLICATION_STORE), A()
  } : () => (0, r.Z)({
    subscriptionTier: E.Si.TIER_2,
    analyticsLocations: T,
    analyticsObject: {
      ...N,
      object: h.qAy.BUTTON_CTA,
      objectType: h.Qqv.TIER_2
    },
    onClose: e => {
      e && A()
    }
  }), L = "" !== g.helpArticleId ? () => (0, i.jsx)(a.Anchor, {
    className: I.termsApplyAnchor,
    href: u.Z.getArticleURL(g.helpArticleId),
    children: (0, i.jsx)(a.Heading, {
      variant: "heading-md/normal",
      className: I.termsApplyBodyText,
      children: _.Z.Messages.BOGO_TERMS_APPLY
    })
  }) : void 0, O = {
    type: "video",
    src: S ? g.heroArtVideoLinkLightTheme : g.videoLink
  };
  ("" !== g.heroArtImageLinkDarkTheme || "" !== g.heroArtImageLinkLightTheme) && (O = {
    type: "image",
    src: S ? g.heroArtImageLinkLightTheme : g.heroArtImageLinkDarkTheme
  });
  let R = S ? d.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL : d.VE.PREMIUM_TIER_2_WHITE_FILL,
    x = "" !== g.modalTopPill ? () => (0, i.jsx)(d.Cy, {
      text: g.modalTopPill,
      className: I.modalTopPill,
      colorOptions: R
    }) : void 0;
  return {
    renderModalProps: p,
    header: g.header,
    modalTopExtra: x,
    subHeader: g.subheader,
    subHeaderExtra: L,
    heroArt: O,
    featureCards: g.featureCards.map(e => ({
      header: e.header,
      subHeader: e.body,
      imageSrc: S ? e.imageLinkLightTheme : e.imageLink,
      tagText: "" !== e.pill ? e.pill : void 0
    })),
    changeLogId: C,
    button: () => {
      let e = Date.now();
      return (0, i.jsxs)(a.ShinyButton, {
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
          }), v()
        },
        children: [(0, i.jsx)("img", {
          alt: "",
          className: I.nitroIconSubHeader,
          src: m
        }), f]
      })
    },
    modalDismissibleContent: "" !== g.dismissKey ? Number(g.dismissKey) : void 0
  }
}