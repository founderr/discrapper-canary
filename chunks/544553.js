"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var a = n("37983");
n("884691");
var s = n("65597"),
  l = n("225288"),
  i = n("77078"),
  r = n("697218"),
  o = n("171710"),
  u = n("462579"),
  d = n("368874"),
  c = n("339853"),
  f = n("25132"),
  E = n("322372"),
  _ = n("447342"),
  h = n("299138"),
  C = n("893302"),
  I = n("490013"),
  T = n("922832"),
  S = n("782340"),
  p = n("54236"),
  m = () => {
    let e = (0, f.useUserForLinkStatus)(T.UserLinkStatus.ACTIVE),
      t = (0, c.useSelectedTeenUser)(),
      n = (0, s.default)([r.default], () => r.default.getCurrentUser()),
      m = (0, d.useAgeSpecificText)(S.default.Messages.FAMILY_CENTER_FEATURE_CARD_MESSAGES_DESCRIPTION_TEEN, S.default.Messages.FAMILY_CENTER_FEATURE_CARD_MESSAGES_DESCRIPTION_PARENT),
      A = (0, d.useAgeSpecificText)(S.default.Messages.FAMILY_CENTER_FEATURE_CARD_SHARING_DESCRIPTION_TEEN, S.default.Messages.FAMILY_CENTER_FEATURE_CARD_SHARING_DESCRIPTION_PARENT),
      g = (0, d.useAgeSpecificText)(S.default.Messages.FAMILY_CENTER_FEATURE_CARD_PAIRING_DESCRIPTION_TEEN, S.default.Messages.FAMILY_CENTER_FEATURE_CARD_PAIRING_DESCRIPTION_PARENT),
      N = (0, i.useRedesignIconContext)().enabled;
    return void 0 === n ? null : (0, a.jsxs)("div", {
      className: p.container,
      children: [(0, a.jsx)("div", {
        className: p.banner,
        children: (0, a.jsx)(E.default, {})
      }), (0, a.jsxs)("div", {
        className: p.featureCards,
        children: [(0, a.jsx)(C.default, {
          iconClassName: p.chatCheckIcon,
          icon: o.default,
          header: S.default.Messages.FAMILY_CENTER_FEATURE_CARD_MESSAGES_HEADER,
          description: m
        }), (0, a.jsx)(C.default, {
          icon: u.default,
          header: S.default.Messages.FAMILY_CENTER_FEATURE_CARD_SHARING_HEADER,
          description: A
        }), (0, a.jsx)(C.default, {
          icon: N ? l.QrCodeCameraIcon : I.default,
          header: S.default.Messages.FAMILY_CENTER_FEATURE_CARD_PAIRING_HEADER,
          description: g
        })]
      }), 0 === e.length ? (0, a.jsx)(h.default, {}) : null, void 0 !== t && e.length > 0 ? (0, a.jsx)(_.default, {
        user: t
      }) : null]
    })
  }