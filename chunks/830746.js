"use strict";
a.r(t);
var n = a("735250");
a("470079");
var s = a("399606"),
  l = a("155321"),
  i = a("481060"),
  r = a("594174"),
  o = a("386103"),
  u = a("794358"),
  d = a("785681"),
  c = a("780985"),
  f = a("631885"),
  E = a("552045"),
  h = a("87792"),
  _ = a("302289"),
  C = a("946690"),
  m = a("456771"),
  S = a("292352"),
  p = a("689938"),
  I = a("174549");
t.default = () => {
  let e = (0, f.useUserForLinkStatus)(S.UserLinkStatus.ACTIVE),
    t = (0, c.useSelectedTeenUser)(),
    a = (0, s.useStateFromStores)([r.default], () => r.default.getCurrentUser()),
    T = (0, d.useAgeSpecificText)(p.default.Messages.FAMILY_CENTER_FEATURE_CARD_MESSAGES_DESCRIPTION_TEEN, p.default.Messages.FAMILY_CENTER_FEATURE_CARD_MESSAGES_DESCRIPTION_PARENT),
    g = (0, d.useAgeSpecificText)(p.default.Messages.FAMILY_CENTER_FEATURE_CARD_SHARING_DESCRIPTION_TEEN, p.default.Messages.FAMILY_CENTER_FEATURE_CARD_SHARING_DESCRIPTION_PARENT),
    A = (0, d.useAgeSpecificText)(p.default.Messages.FAMILY_CENTER_FEATURE_CARD_PAIRING_DESCRIPTION_TEEN, p.default.Messages.FAMILY_CENTER_FEATURE_CARD_PAIRING_DESCRIPTION_PARENT),
    N = (0, i.useRedesignIconContext)().enabled;
  return void 0 === a ? null : (0, n.jsxs)("div", {
    className: I.container,
    children: [(0, n.jsx)("div", {
      className: I.banner,
      children: (0, n.jsx)(E.default, {})
    }), (0, n.jsxs)("div", {
      className: I.featureCards,
      children: [(0, n.jsx)(C.default, {
        iconClassName: I.chatCheckIcon,
        icon: o.default,
        header: p.default.Messages.FAMILY_CENTER_FEATURE_CARD_MESSAGES_HEADER,
        description: T
      }), (0, n.jsx)(C.default, {
        icon: u.default,
        header: p.default.Messages.FAMILY_CENTER_FEATURE_CARD_SHARING_HEADER,
        description: g
      }), (0, n.jsx)(C.default, {
        icon: N ? l.QrCodeCameraIcon : m.default,
        header: p.default.Messages.FAMILY_CENTER_FEATURE_CARD_PAIRING_HEADER,
        description: A
      })]
    }), 0 === e.length ? (0, n.jsx)(_.default, {}) : null, void 0 !== t && e.length > 0 ? (0, n.jsx)(h.default, {
      user: t
    }) : null]
  })
}