var i = n(200651);
n(192379);
var r = n(399606),
    a = n(481060),
    s = n(594174),
    l = n(785681),
    o = n(780985),
    c = n(631885),
    d = n(552045),
    u = n(87792),
    g = n(302289),
    m = n(946690),
    f = n(456771),
    _ = n(292352),
    p = n(388032),
    h = n(82484);
t.Z = () => {
    let e = (0, c.mq)(_.ne.ACTIVE),
        t = (0, o.c)(),
        n = (0, r.e7)([s.default], () => s.default.getCurrentUser()),
        E = (0, l.o)(p.intl.string(p.t['5RZ8Tk']), p.intl.string(p.t.bmhCnJ)),
        b = (0, l.o)(p.intl.string(p.t.XKnFFh), p.intl.string(p.t['68zfxM'])),
        x = (0, l.o)(p.intl.string(p.t['Rm/6a2']), p.intl.string(p.t['1xPTwM'])),
        C = (0, a.useRedesignIconContext)().enabled;
    return void 0 === n
        ? null
        : (0, i.jsxs)('div', {
              className: h.container,
              children: [
                  (0, i.jsx)('div', {
                      className: h.banner,
                      children: (0, i.jsx)(d.Z, {})
                  }),
                  (0, i.jsxs)('div', {
                      className: h.featureCards,
                      children: [
                          (0, i.jsx)(m.Z, {
                              iconClassName: h.chatCheckIcon,
                              icon: a.ChatCheckIcon,
                              header: p.intl.string(p.t['001l3t']),
                              description: E
                          }),
                          (0, i.jsx)(m.Z, {
                              icon: a.EyeIcon,
                              header: p.intl.string(p.t.yipAeH),
                              description: b
                          }),
                          (0, i.jsx)(m.Z, {
                              icon: C ? a.QrCodeIcon : (0, a.makeIconCompat)(f.Z),
                              header: p.intl.string(p.t.hhOuMT),
                              description: x
                          })
                      ]
                  }),
                  0 === e.length ? (0, i.jsx)(g.Z, {}) : null,
                  void 0 !== t && e.length > 0 ? (0, i.jsx)(u.Z, { user: t }) : null
              ]
          });
};
