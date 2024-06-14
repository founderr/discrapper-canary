"use strict";
s.r(t);
var n = s("735250");
s("470079");
var a = s("399606"),
  l = s("155321"),
  i = s("481060"),
  r = s("594174"),
  o = s("386103"),
  u = s("794358"),
  d = s("785681"),
  c = s("780985"),
  E = s("631885"),
  f = s("552045"),
  _ = s("87792"),
  h = s("302289"),
  C = s("946690"),
  m = s("456771"),
  T = s("292352"),
  g = s("689938"),
  A = s("234789");
t.default = () => {
  let e = (0, E.useUserForLinkStatus)(T.UserLinkStatus.ACTIVE),
    t = (0, c.useSelectedTeenUser)(),
    s = (0, a.useStateFromStores)([r.default], () => r.default.getCurrentUser()),
    p = (0, d.useAgeSpecificText)(g.default.Messages.FAMILY_CENTER_FEATURE_CARD_MESSAGES_DESCRIPTION_TEEN, g.default.Messages.FAMILY_CENTER_FEATURE_CARD_MESSAGES_DESCRIPTION_PARENT),
    N = (0, d.useAgeSpecificText)(g.default.Messages.FAMILY_CENTER_FEATURE_CARD_SHARING_DESCRIPTION_TEEN, g.default.Messages.FAMILY_CENTER_FEATURE_CARD_SHARING_DESCRIPTION_PARENT),
    S = (0, d.useAgeSpecificText)(g.default.Messages.FAMILY_CENTER_FEATURE_CARD_PAIRING_DESCRIPTION_TEEN, g.default.Messages.FAMILY_CENTER_FEATURE_CARD_PAIRING_DESCRIPTION_PARENT),
    I = (0, i.useRedesignIconContext)().enabled;
  return void 0 === s ? null : (0, n.jsxs)("div", {
    className: A.container,
    children: [(0, n.jsx)("div", {
      className: A.banner,
      children: (0, n.jsx)(f.default, {})
    }), (0, n.jsxs)("div", {
      className: A.featureCards,
      children: [(0, n.jsx)(C.default, {
        iconClassName: A.chatCheckIcon,
        icon: o.default,
        header: g.default.Messages.FAMILY_CENTER_FEATURE_CARD_MESSAGES_HEADER,
        description: p
      }), (0, n.jsx)(C.default, {
        icon: u.default,
        header: g.default.Messages.FAMILY_CENTER_FEATURE_CARD_SHARING_HEADER,
        description: N
      }), (0, n.jsx)(C.default, {
        icon: I ? l.QrCodeCameraIcon : m.default,
        header: g.default.Messages.FAMILY_CENTER_FEATURE_CARD_PAIRING_HEADER,
        description: S
      })]
    }), 0 === e.length ? (0, n.jsx)(h.default, {}) : null, void 0 !== t && e.length > 0 ? (0, n.jsx)(_.default, {
      user: t
    }) : null]
  })
}