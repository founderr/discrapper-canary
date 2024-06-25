var n = s(735250);
s(470079);
var a = s(399606),
  i = s(481060),
  r = s(594174),
  l = s(785681),
  o = s(780985),
  c = s(631885),
  E = s(552045),
  _ = s(87792),
  u = s(302289),
  d = s(946690),
  T = s(456771),
  I = s(292352),
  R = s(689938),
  A = s(399484);
t.Z = () => {
  let e = (0, c.mq)(I.ne.ACTIVE),
    t = (0, o.c)(),
    s = (0, a.e7)([r.default], () => r.default.getCurrentUser()),
    N = (0, l.o)(R.Z.Messages.FAMILY_CENTER_FEATURE_CARD_MESSAGES_DESCRIPTION_TEEN, R.Z.Messages.FAMILY_CENTER_FEATURE_CARD_MESSAGES_DESCRIPTION_PARENT),
    C = (0, l.o)(R.Z.Messages.FAMILY_CENTER_FEATURE_CARD_SHARING_DESCRIPTION_TEEN, R.Z.Messages.FAMILY_CENTER_FEATURE_CARD_SHARING_DESCRIPTION_PARENT),
    g = (0, l.o)(R.Z.Messages.FAMILY_CENTER_FEATURE_CARD_PAIRING_DESCRIPTION_TEEN, R.Z.Messages.FAMILY_CENTER_FEATURE_CARD_PAIRING_DESCRIPTION_PARENT),
    m = (0, i.useRedesignIconContext)().enabled;
  return void 0 === s ? null : (0, n.jsxs)("div", {
    className: A.container,
    children: [(0, n.jsx)("div", {
      className: A.banner,
      children: (0, n.jsx)(E.Z, {})
    }), (0, n.jsxs)("div", {
      className: A.featureCards,
      children: [(0, n.jsx)(d.Z, {
        iconClassName: A.chatCheckIcon,
        icon: i.ChatCheckIcon,
        header: R.Z.Messages.FAMILY_CENTER_FEATURE_CARD_MESSAGES_HEADER,
        description: N
      }), (0, n.jsx)(d.Z, {
        icon: i.EyeIcon,
        header: R.Z.Messages.FAMILY_CENTER_FEATURE_CARD_SHARING_HEADER,
        description: C
      }), (0, n.jsx)(d.Z, {
        icon: m ? i.QrCodeCameraIcon : (0, i.makeIconCompat)(T.Z),
        header: R.Z.Messages.FAMILY_CENTER_FEATURE_CARD_PAIRING_HEADER,
        description: g
      })]
    }), 0 === e.length ? (0, n.jsx)(u.Z, {}) : null, void 0 !== t && e.length > 0 ? (0, n.jsx)(_.Z, {
      user: t
    }) : null]
  })
}