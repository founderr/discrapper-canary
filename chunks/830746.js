var s = n(735250);
n(470079);
var a = n(399606),
  i = n(481060),
  l = n(594174),
  r = n(785681),
  o = n(780985),
  c = n(631885),
  d = n(552045),
  u = n(87792),
  E = n(302289),
  _ = n(946690),
  h = n(456771),
  m = n(292352),
  T = n(689938),
  C = n(399484);
t.Z = () => {
  let e = (0, c.mq)(m.ne.ACTIVE),
    t = (0, o.c)(),
    n = (0, a.e7)([l.default], () => l.default.getCurrentUser()),
    g = (0, r.o)(T.Z.Messages.FAMILY_CENTER_FEATURE_CARD_MESSAGES_DESCRIPTION_TEEN, T.Z.Messages.FAMILY_CENTER_FEATURE_CARD_MESSAGES_DESCRIPTION_PARENT),
    p = (0, r.o)(T.Z.Messages.FAMILY_CENTER_FEATURE_CARD_SHARING_DESCRIPTION_TEEN, T.Z.Messages.FAMILY_CENTER_FEATURE_CARD_SHARING_DESCRIPTION_PARENT),
    N = (0, r.o)(T.Z.Messages.FAMILY_CENTER_FEATURE_CARD_PAIRING_DESCRIPTION_TEEN, T.Z.Messages.FAMILY_CENTER_FEATURE_CARD_PAIRING_DESCRIPTION_PARENT),
    I = (0, i.useRedesignIconContext)().enabled;
  return void 0 === n ? null : (0, s.jsxs)("div", {
    className: C.container,
    children: [(0, s.jsx)("div", {
      className: C.banner,
      children: (0, s.jsx)(d.Z, {})
    }), (0, s.jsxs)("div", {
      className: C.featureCards,
      children: [(0, s.jsx)(_.Z, {
        iconClassName: C.chatCheckIcon,
        icon: i.ChatCheckIcon,
        header: T.Z.Messages.FAMILY_CENTER_FEATURE_CARD_MESSAGES_HEADER,
        description: g
      }), (0, s.jsx)(_.Z, {
        icon: i.EyeIcon,
        header: T.Z.Messages.FAMILY_CENTER_FEATURE_CARD_SHARING_HEADER,
        description: p
      }), (0, s.jsx)(_.Z, {
        icon: I ? i.QrCodeCameraIcon : (0, i.makeIconCompat)(h.Z),
        header: T.Z.Messages.FAMILY_CENTER_FEATURE_CARD_PAIRING_HEADER,
        description: N
      })]
    }), 0 === e.length ? (0, s.jsx)(E.Z, {}) : null, void 0 !== t && e.length > 0 ? (0, s.jsx)(u.Z, {
      user: t
    }) : null]
  })
}