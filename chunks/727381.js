n.d(t, {
    Z: function () {
        return _;
    }
});
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    s = n(399606),
    a = n(481060),
    o = n(271383),
    c = n(594174),
    u = n(777288),
    d = n(753042),
    h = n(787469),
    m = n(477718),
    p = n(791176),
    f = n(908474),
    g = n(467014),
    C = n(388032),
    x = n(194898);
function v() {
    return (0, i.jsxs)('div', {
        className: x.header,
        children: [
            (0, i.jsxs)('div', {
                className: x.headerTitle,
                children: [
                    (0, i.jsx)(u.Z, {
                        width: 16,
                        height: 16
                    }),
                    (0, i.jsx)(a.Heading, {
                        variant: 'heading-md/semibold',
                        children: C.intl.string(C.t.kj3tz8)
                    })
                ]
            }),
            (0, i.jsx)('div', {
                children: (0, i.jsx)(a.KeyCombo, {
                    shortcut: 'esc',
                    keyClassName: x.keyComboInner,
                    className: x.keyComboContainer
                })
            })
        ]
    });
}
function _(e) {
    let { userId: t, guildId: n, location: l, className: u, onNavigate: C } = e,
        _ = (0, s.e7)([c.default], () => c.default.getUser(t), [t]),
        I = (0, s.e7)([o.ZP], () => o.ZP.getMember(n, t), [n, t]);
    return null == _ || null == I
        ? null
        : (0, i.jsxs)('div', {
              className: r()(x.container, u),
              children: [
                  (0, i.jsx)(v, {}),
                  (0, i.jsxs)(a.Scroller, {
                      className: x.innerContainer,
                      children: [
                          (0, i.jsx)(f.Z, { member: I }),
                          (0, i.jsx)(g.Z, {
                              userId: t,
                              guildId: n
                          }),
                          (0, i.jsx)(p.Z, {
                              member: I,
                              onNavigate: C
                          }),
                          (0, i.jsx)(h.Z, { member: I }),
                          (0, i.jsx)(d.Z, { member: I }),
                          (0, i.jsx)(m.Z, { member: I })
                      ]
                  })
              ]
          });
}
