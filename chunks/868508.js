a.r(t), a.d(t, {
  default: function() {
    return b
  }
});
var r = a(735250);
a(470079);
var n = a(442837),
  s = a(704215),
  o = a(481060),
  l = a(2052),
  c = a(100527),
  d = a(906732),
  i = a(963249),
  u = a(706454),
  _ = a(594174),
  N = a(626135),
  E = a(63063),
  h = a(74538),
  g = a(290347),
  m = a(474936),
  O = a(981631),
  M = a(689938),
  C = a(870108),
  A = a(913907),
  p = a(82341),
  f = a(309539),
  x = a(74316);
let D = "2023_summer_bogo",
  T = "DnkvLW5052Y";

function b(e) {
  let {
    renderModalProps: t
  } = e, {
    onClose: a
  } = t, b = (0, n.e7)([u.default], () => u.default.locale), R = b.split("-")[0], G = "zh-CN" === b ? "zh-Hans" : "zh-TW" === b ? "zh-Hant" : R, L = {
    url: "".concat((0, O.ivE)(T), "?vq=large&rel=0&controls=0&showinfo=0&cc_load_policy=").concat("en" === R ? "0" : "1", "&cc_lang_pref=").concat(G),
    width: 498,
    height: 280
  }, {
    location: v
  } = (0, l.O)(), {
    analyticsLocations: y
  } = (0, d.ZP)(c.Z.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL), B = (0, n.e7)([_.default], () => _.default.getCurrentUser()), S = (0, h.M5)(B, m.p9.TIER_2), j = (0, h.I5)(B) && !S;
  return (0, r.jsx)(g.Z, {
    renderModalProps: t,
    heroArt: {
      type: "embed",
      embed: L,
      thumbnail: {
        url: "https://i.ytimg.com/vi/".concat(T, "/maxresdefault.jpg"),
        width: 498,
        height: 280
      },
      href: "https://youtu.be/".concat(T)
    },
    modalDismissibleContent: s.z.SUMMER_2023_BOGO_ANNOUNCEMENT_MODAL,
    header: M.Z.Messages.BOGO_ANNOUNCEMENT_MODAL_HEADER,
    subHeader: M.Z.Messages.BOGO_ANNOUNCEMENT_MODAL_SUBHEADER,
    subHeaderExtra: () => (0, r.jsx)(o.Anchor, {
      className: C.termsApplyAnchor,
      href: E.Z.getArticleURL(O.BhN.SUMMER_2023_BOGO),
      children: (0, r.jsx)(o.Heading, {
        variant: "heading-md/normal",
        className: C.termsApplyBodyText,
        children: M.Z.Messages.BOGO_TERMS_APPLY
      })
    }),
    featureCards: [{
      header: M.Z.Messages.BOGO_ANNOUNCEMENT_MODAL_REMIXING_CARD_HEADER,
      subHeader: M.Z.Messages.BOGO_ANNOUNCEMENT_MODAL_REMIXING_CARD_BODY_FORMATTED.format({
        helpCenterLink: E.Z.getArticleURL(O.BhN.REMIXING)
      }),
      imageSrc: A,
      tagText: M.Z.Messages.EARLY_ACCESS
    }, {
      header: M.Z.Messages.BOGO_ANNOUNCEMENT_MODAL_THEMES_CARD_HEADER,
      subHeader: M.Z.Messages.BOGO_ANNOUNCEMENT_MODAL_THEMES_CARD_BODY,
      imageSrc: f
    }, {
      header: M.Z.Messages.BOGO_ANNOUNCEMENT_MODAL_SOUNDBOARD_CARD_HEADER,
      subHeader: M.Z.Messages.BOGO_ANNOUNCEMENT_MODAL_SOUNDBOARD_CARD_BODY_FORMATTED,
      imageSrc: p
    }],
    changeLogId: D,
    button: () => {
      let e = j ? "upgrade_plan_button" : "get_nitro_button",
        t = Date.now();
      return (0, r.jsxs)(o.ShinyButton, {
        className: C.buttonWide,
        innerClassName: C.innerButton,
        color: o.Button.Colors.GREEN,
        size: o.Button.Sizes.SMALL,
        onClick: () => {
          N.default.track(O.rMx.CHANGE_LOG_CTA_CLICKED, {
            change_log_id: D,
            cta_type: e,
            seconds_open: Math.round((Date.now() - t) / 1e3),
            target: "bogo_payment_model"
          }), (0, i.Z)({
            subscriptionTier: m.Si.TIER_2,
            analyticsLocations: y,
            analyticsObject: {
              ...v,
              object: O.qAy.BUTTON_CTA,
              objectType: O.Qqv.TIER_2
            },
            onClose: e => {
              e && a()
            }
          })
        },
        children: [(0, r.jsx)("img", {
          alt: "",
          className: C.nitroIconSubHeader,
          src: x
        }), M.Z.Messages.BOGO_CLAIM_OFFER]
      })
    }
  })
}