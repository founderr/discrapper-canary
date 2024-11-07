n(47120);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(144114),
    u = n(742458),
    d = n(541692),
    h = n(952802),
    g = n(388905),
    f = n(815660),
    m = n(388032),
    p = n(639944),
    _ = n(971436);
t.Z = () => {
    let [e, t] = r.useState(''),
        [s, x] = r.useState(''),
        [E, v] = r.useState(!1),
        [I, N] = r.useState(!1),
        [b, C] = r.useState(null),
        [S, T] = r.useState(null),
        A = (0, l.e7)([d.Z], () => d.Z.getCountryCode()),
        Z = A.code.split(' ')[0],
        j = async () => {
            try {
                await c.Z.resendCode(e);
            } catch (e) {
                T(e.body.message);
            }
        },
        R = async () => {
            v(!0);
            try {
                let { token: t } = await c.Z.verifyPhone(Z + e, s);
                C(null), T(null), N(!0), c.Z.validatePhoneForSupport(t);
            } catch (e) {
                e.body.message ? (C(null), T(e.body.message)) : (C(e.body.phone), T(e.body.code));
            } finally {
                v(!1);
            }
        },
        O = (0, i.jsxs)(g.ZP, {
            children: [
                (0, i.jsx)(g.Ee, { src: n(292824) }),
                (0, i.jsxs)(g.Dx, {
                    className: a()(_.marginTop20, p.flex, p.justifyCenter, p.alignCenter),
                    children: [
                        m.intl.string(m.t.WWzQtb),
                        (0, i.jsx)(o.CircleCheckIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: _.marginLeft8
                        })
                    ]
                })
            ]
        });
    return I
        ? O
        : (0, i.jsxs)(g.ZP, {
              children: [
                  (0, i.jsx)(g.Dx, { children: m.intl.string(m.t.o4JNrK) }),
                  (0, i.jsx)(g.DK, {
                      className: _.marginTop8,
                      children: m.intl.string(m.t.y0tVbm)
                  }),
                  (0, i.jsxs)(g.gO, {
                      className: _.marginTop20,
                      children: [
                          (0, i.jsx)(h.Z, {
                              label: m.intl.string(m.t.eJnn09),
                              alpha2: A.alpha2,
                              countryCode: Z,
                              value: e,
                              autoComplete: 'off',
                              spellCheck: 'false',
                              onChange: t,
                              forceMode: u.Nz.PHONE,
                              error: b
                          }),
                          (0, i.jsx)(g.II, {
                              className: _.marginTop20,
                              label: m.intl.string(m.t.OdzNbm),
                              value: s,
                              onChange: x,
                              maxLength: f.z,
                              error: S
                          }),
                          (0, i.jsx)(g.zx, {
                              size: g.zx.Sizes.SMALL,
                              look: g.zx.Looks.LINK,
                              onClick: j,
                              children: m.intl.string(m.t['5b60go'])
                          }),
                          (0, i.jsx)(g.zx, {
                              className: _.marginTop20,
                              onClick: R,
                              submitting: E,
                              children: m.intl.string(m.t.i4jeWV)
                          })
                      ]
                  })
              ]
          });
};
