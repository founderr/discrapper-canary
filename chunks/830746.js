"use strict";
s.r(t);
var a = s("735250");
s("470079");
var n = s("399606"),
  l = s("155321"),
  i = s("481060"),
  r = s("594174"),
  u = s("386103"),
  o = s("794358"),
  d = s("785681"),
  c = s("780985"),
  E = s("631885"),
  _ = s("552045"),
  f = s("87792"),
  h = s("302289"),
  m = s("946690"),
  T = s("456771"),
  C = s("292352"),
  g = s("689938"),
  A = s("234789");
t.default = () => {
  let e = (0, E.useUserForLinkStatus)(C.UserLinkStatus.ACTIVE),
    t = (0, c.useSelectedTeenUser)(),
    s = (0, n.useStateFromStores)([r.default], () => r.default.getCurrentUser()),
    N = (0, d.useAgeSpecificText)(g.default.Messages.FAMILY_CENTER_FEATURE_CARD_MESSAGES_DESCRIPTION_TEEN, g.default.Messages.FAMILY_CENTER_FEATURE_CARD_MESSAGES_DESCRIPTION_PARENT),
    p = (0, d.useAgeSpecificText)(g.default.Messages.FAMILY_CENTER_FEATURE_CARD_SHARING_DESCRIPTION_TEEN, g.default.Messages.FAMILY_CENTER_FEATURE_CARD_SHARING_DESCRIPTION_PARENT),
    S = (0, d.useAgeSpecificText)(g.default.Messages.FAMILY_CENTER_FEATURE_CARD_PAIRING_DESCRIPTION_TEEN, g.default.Messages.FAMILY_CENTER_FEATURE_CARD_PAIRING_DESCRIPTION_PARENT),
    I = (0, i.useRedesignIconContext)().enabled;
  return void 0 === s ? null : (0, a.jsxs)("div", {
    className: A.container,
    children: [(0, a.jsx)("div", {
      className: A.banner,
      children: (0, a.jsx)(_.default, {})
    }), (0, a.jsxs)("div", {
      className: A.featureCards,
      children: [(0, a.jsx)(m.default, {
        iconClassName: A.chatCheckIcon,
        icon: u.default,
        header: g.default.Messages.FAMILY_CENTER_FEATURE_CARD_MESSAGES_HEADER,
        description: N
      }), (0, a.jsx)(m.default, {
        icon: o.default,
        header: g.default.Messages.FAMILY_CENTER_FEATURE_CARD_SHARING_HEADER,
        description: p
      }), (0, a.jsx)(m.default, {
        icon: I ? l.QrCodeCameraIcon : T.default,
        header: g.default.Messages.FAMILY_CENTER_FEATURE_CARD_PAIRING_HEADER,
        description: S
      })]
    }), 0 === e.length ? (0, a.jsx)(h.default, {}) : null, void 0 !== t && e.length > 0 ? (0, a.jsx)(f.default, {
      user: t
    }) : null]
  })
}