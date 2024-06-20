var s = n(735250);
n(470079);
var a = n(399606),
  i = n(481060),
  l = n(594174),
  r = n(785681),
  c = n(780985),
  o = n(631885),
  d = n(552045),
  u = n(87792),
  E = n(302289),
  _ = n(946690),
  h = n(456771),
  T = n(292352),
  I = n(689938),
  C = n(399484);
t.Z = () => {
  let e = (0, o.mq)(T.ne.ACTIVE),
    t = (0, c.c)(),
    n = (0, a.e7)([l.default], () => l.default.getCurrentUser()),
    N = (0, r.o)(I.Z.Messages.FAMILY_CENTER_FEATURE_CARD_MESSAGES_DESCRIPTION_TEEN, I.Z.Messages.FAMILY_CENTER_FEATURE_CARD_MESSAGES_DESCRIPTION_PARENT),
    g = (0, r.o)(I.Z.Messages.FAMILY_CENTER_FEATURE_CARD_SHARING_DESCRIPTION_TEEN, I.Z.Messages.FAMILY_CENTER_FEATURE_CARD_SHARING_DESCRIPTION_PARENT),
    A = (0, r.o)(I.Z.Messages.FAMILY_CENTER_FEATURE_CARD_PAIRING_DESCRIPTION_TEEN, I.Z.Messages.FAMILY_CENTER_FEATURE_CARD_PAIRING_DESCRIPTION_PARENT),
    m = (0, i.useRedesignIconContext)().enabled;
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
        header: I.Z.Messages.FAMILY_CENTER_FEATURE_CARD_MESSAGES_HEADER,
        description: N
      }), (0, s.jsx)(_.Z, {
        icon: i.EyeIcon,
        header: I.Z.Messages.FAMILY_CENTER_FEATURE_CARD_SHARING_HEADER,
        description: g
      }), (0, s.jsx)(_.Z, {
        icon: m ? i.QrCodeCameraIcon : (0, i.makeIconCompat)(h.Z),
        header: I.Z.Messages.FAMILY_CENTER_FEATURE_CARD_PAIRING_HEADER,
        description: A
      })]
    }), 0 === e.length ? (0, s.jsx)(E.Z, {}) : null, void 0 !== t && e.length > 0 ? (0, s.jsx)(u.Z, {
      user: t
    }) : null]
  })
}