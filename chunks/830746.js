var s = n(735250);
n(470079);
var a = n(399606),
    r = n(481060),
    i = n(594174),
    o = n(785681),
    l = n(780985),
    c = n(631885),
    d = n(552045),
    _ = n(87792),
    u = n(302289),
    E = n(946690),
    T = n(456771),
    I = n(292352),
    R = n(689938),
    m = n(82484);
t.Z = () => {
    let e = (0, c.mq)(I.ne.ACTIVE),
        t = (0, l.c)(),
        n = (0, a.e7)([i.default], () => i.default.getCurrentUser()),
        g = (0, o.o)(R.Z.Messages.FAMILY_CENTER_FEATURE_CARD_MESSAGES_DESCRIPTION_TEEN, R.Z.Messages.FAMILY_CENTER_FEATURE_CARD_MESSAGES_DESCRIPTION_PARENT),
        N = (0, o.o)(R.Z.Messages.FAMILY_CENTER_FEATURE_CARD_SHARING_DESCRIPTION_TEEN, R.Z.Messages.FAMILY_CENTER_FEATURE_CARD_SHARING_DESCRIPTION_PARENT),
        C = (0, o.o)(R.Z.Messages.FAMILY_CENTER_FEATURE_CARD_PAIRING_DESCRIPTION_TEEN, R.Z.Messages.FAMILY_CENTER_FEATURE_CARD_PAIRING_DESCRIPTION_PARENT),
        p = (0, r.useRedesignIconContext)().enabled;
    return void 0 === n
        ? null
        : (0, s.jsxs)('div', {
              className: m.container,
              children: [
                  (0, s.jsx)('div', {
                      className: m.banner,
                      children: (0, s.jsx)(d.Z, {})
                  }),
                  (0, s.jsxs)('div', {
                      className: m.featureCards,
                      children: [
                          (0, s.jsx)(E.Z, {
                              iconClassName: m.chatCheckIcon,
                              icon: r.ChatCheckIcon,
                              header: R.Z.Messages.FAMILY_CENTER_FEATURE_CARD_MESSAGES_HEADER,
                              description: g
                          }),
                          (0, s.jsx)(E.Z, {
                              icon: r.EyeIcon,
                              header: R.Z.Messages.FAMILY_CENTER_FEATURE_CARD_SHARING_HEADER,
                              description: N
                          }),
                          (0, s.jsx)(E.Z, {
                              icon: p ? r.QrCodeIcon : (0, r.makeIconCompat)(T.Z),
                              header: R.Z.Messages.FAMILY_CENTER_FEATURE_CARD_PAIRING_HEADER,
                              description: C
                          })
                      ]
                  }),
                  0 === e.length ? (0, s.jsx)(u.Z, {}) : null,
                  void 0 !== t && e.length > 0 ? (0, s.jsx)(_.Z, { user: t }) : null
              ]
          });
};
