n.r(t), n.d(t, {
  default: function() {
    return m
  },
  extractAnnouncementModalContent: function() {
    return I
  }
});
var s = n(735250);
n(470079);
var i = n(581282),
  l = n(8853),
  a = n(663002),
  r = n(2052),
  o = n(410030),
  c = n(100527),
  u = n(906732),
  d = n(605236),
  E = n(960048),
  h = n(276792),
  _ = n(290347);

function I(e) {
  let {
    content: t,
    isPreview: n
  } = e, s = l.t.fromBinary((0, i.c)(t));
  return "announcementModalVariant1" !== s.properties.oneofKind ? null : !n && (0 === s.properties.announcementModalVariant1.dismissKey.trim().length || (0, d.un)(Number(s.properties.announcementModalVariant1.dismissKey))) ? null : (n && (s.properties.announcementModalVariant1.dismissKey = ""), s)
}

function m(e) {
  let {
    renderModalProps: t,
    properties: n
  } = e, {
    location: i
  } = (0, r.O)(), {
    analyticsLocations: l
  } = (0, u.ZP)(c.Z.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL), d = (0, o.ZP)(), I = (0, a.a)(d);
  if ("announcementModalVariant1" === n.properties.oneofKind) {
    let e = (0, h.N)({
      content: n.properties.announcementModalVariant1,
      renderModalProps: t,
      analyticsLocations: l,
      analyticsLocation: i,
      isLightTheme: I
    });
    return (0, s.jsx)(_.Z, {
      ...e
    })
  }
  return E.Z.captureMessage("Property type ".concat(n.properties.oneofKind, " is not supported to render ServerDriveAnnouncementModal")), null
}