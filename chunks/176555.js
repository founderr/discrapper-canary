"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var a = n("37983");
n("884691");
var s = n("151426"),
  l = n("812204"),
  i = n("685665"),
  r = n("369964"),
  o = n("393414"),
  u = n("21526"),
  d = n("49111"),
  c = n("782340"),
  f = n("262429"),
  E = n("273626"),
  h = () => {
    let {
      analyticsLocations: e
    } = (0, i.default)(l.default.COLLECTIBLES_FEATURE_EDUCATION_TOOLTIP);
    return (0, a.jsx)(r.default, {
      dismissibleContent: s.DismissibleContent.COLLECTIBLES_SHOP_CYBERPUNK_COACHMARK,
      inlineArt: !0,
      tryItText: c.default.Messages.CHECK_IT_OUT,
      onTryFeature: () => {
        (0, o.transitionTo)(d.Routes.COLLECTIBLES_SHOP), (0, u.openCollectiblesShop)({
          openInLayer: !1,
          analyticsLocations: e,
          analyticsSource: l.default.COLLECTIBLES_FEATURE_EDUCATION_TOOLTIP
        })
      },
      header: c.default.Messages.COLLECTIBLES_CYBERPUNK_COACHMARK_TITLE,
      body: c.default.Messages.COLLECTIBLES_CYBERPUNK_COACHMARK_DESCRIPTION,
      dismissText: c.default.Messages.EDUCATION_NEW_FEATURE_DISMISS,
      position: "right",
      align: "top",
      art: (0, a.jsx)("img", {
        className: f.art,
        src: E,
        alt: ""
      })
    })
  }