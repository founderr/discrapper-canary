n.d(t, {
  N: function() {
    return p
  }
});
var i = n(735250);
n(470079);
var s = n(704215),
  a = n(740111),
  r = n(481060),
  l = n(963249),
  o = n(703656),
  c = n(626135),
  d = n(63063),
  u = n(823188),
  _ = n(474936),
  E = n(981631),
  h = n(689938),
  I = n(954440),
  m = n(74316);

function p(e) {
  var t, n;
  let {
    content: p,
    renderModalProps: g,
    analyticsLocations: T,
    analyticsLocation: C,
    isLightTheme: S
  } = e, f = "AnnouncementModalVariant1_".concat(s.z[Number(p.dismissKey)]), {
    onClose: N
  } = g, A = null != p.button && "" !== p.button.copy ? p.button.copy : h.Z.Messages.BILLING_SUBSCRIBE_TO_PLAN, Z = (null === (t = p.button) || void 0 === t ? void 0 : t.buttonAction) === a.Wc.OPEN_MARKETING_PAGE ? "jump_to_mkt_button" : "get_nitro_button", L = (null === (n = p.button) || void 0 === n ? void 0 : n.buttonAction) === a.Wc.OPEN_MARKETING_PAGE ? () => {
    (0, o.uL)(E.Z5c.APPLICATION_STORE), N()
  } : () => (0, l.Z)({
    subscriptionTier: _.Si.TIER_2,
    analyticsLocations: T,
    analyticsObject: {
      ...C,
      object: E.qAy.BUTTON_CTA,
      objectType: E.Qqv.TIER_2
    },
    onClose: e => {
      e && N()
    }
  }), v = "" !== p.helpArticleId ? () => (0, i.jsx)(r.Anchor, {
    className: I.termsApplyAnchor,
    href: d.Z.getArticleURL(p.helpArticleId),
    children: (0, i.jsx)(r.Heading, {
      variant: "heading-md/normal",
      className: I.termsApplyBodyText,
      children: h.Z.Messages.BOGO_TERMS_APPLY
    })
  }) : void 0, O = {
    type: "video",
    src: S ? p.heroArtVideoLinkLightTheme : p.videoLink
  };
  ("" !== p.heroArtImageLinkDarkTheme || "" !== p.heroArtImageLinkLightTheme) && (O = {
    type: "image",
    src: S ? p.heroArtImageLinkLightTheme : p.heroArtImageLinkDarkTheme
  });
  let R = S ? u.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL : u.VE.PREMIUM_TIER_2_WHITE_FILL,
    x = "" !== p.modalTopPill ? () => (0, i.jsx)(u.Cy, {
      text: p.modalTopPill,
      className: I.modalTopPill,
      colorOptions: R
    }) : void 0;
  return {
    renderModalProps: g,
    header: p.header,
    modalTopExtra: x,
    subHeader: p.subheader,
    subHeaderExtra: v,
    heroArt: O,
    featureCards: p.featureCards.map(e => ({
      header: e.header,
      subHeader: e.body,
      imageSrc: S ? e.imageLinkLightTheme : e.imageLink,
      tagText: "" !== e.pill ? e.pill : void 0
    })),
    changeLogId: f,
    button: () => {
      let e = Date.now();
      return (0, i.jsxs)(r.ShinyButton, {
        className: I.buttonWide,
        innerClassName: I.innerButton,
        color: r.Button.Colors.GREEN,
        size: r.Button.Sizes.SMALL,
        onClick: () => {
          c.default.track(E.rMx.CHANGE_LOG_CTA_CLICKED, {
            change_log_id: f,
            cta_type: Z,
            seconds_open: Math.round((Date.now() - e) / 1e3),
            target: f
          }), L()
        },
        children: [(0, i.jsx)("img", {
          alt: "",
          className: I.nitroIconSubHeader,
          src: m
        }), A]
      })
    },
    modalDismissibleContent: "" !== p.dismissKey ? Number(p.dismissKey) : void 0
  }
}