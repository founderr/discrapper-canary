"use strict";
a.r(t), a.d(t, {
  default: function() {
    return C
  },
  extractAnnouncementModalContent: function() {
    return _
  }
});
var n = a("735250");
a("470079");
var s = a("578012"),
  l = a("8853"),
  i = a("663002"),
  r = a("2052"),
  o = a("410030"),
  u = a("100527"),
  d = a("906732"),
  c = a("605236"),
  f = a("960048"),
  E = a("276792"),
  h = a("290347");

function _(e) {
  let {
    content: t,
    isPreview: a
  } = e, n = l.PremiumMarketingComponentProperties.fromBinary((0, s.base64decode)(t));
  return "announcementModalVariant1" !== n.properties.oneofKind ? null : !a && (0 === n.properties.announcementModalVariant1.dismissKey.trim().length || (0, c.isDismissibleContentDismissed)(Number(n.properties.announcementModalVariant1.dismissKey))) ? null : (a && (n.properties.announcementModalVariant1.dismissKey = ""), n)
}

function C(e) {
  let {
    renderModalProps: t,
    properties: a
  } = e, {
    location: s
  } = (0, r.useAnalyticsContext)(), {
    analyticsLocations: l
  } = (0, d.default)(u.default.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL), c = (0, o.default)(), _ = (0, i.isThemeLight)(c);
  if ("announcementModalVariant1" === a.properties.oneofKind) {
    let e = (0, E.adaptAnnouncementModalVariant1)({
      content: a.properties.announcementModalVariant1,
      renderModalProps: t,
      analyticsLocations: l,
      analyticsLocation: s,
      isLightTheme: _
    });
    return (0, n.jsx)(h.default, {
      ...e
    })
  }
  return f.default.captureMessage("Property type ".concat(a.properties.oneofKind, " is not supported to render ServerDriveAnnouncementModal")), null
}