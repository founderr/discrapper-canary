n(47120);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(442837),
    o = n(481060),
    c = n(144114),
    u = n(742458),
    d = n(541692),
    h = n(952802),
    g = n(388905),
    m = n(815660),
    f = n(388032),
    p = n(652849),
    x = n(232186);
t.Z = () => {
    let [e, t] = r.useState(''),
        [s, _] = r.useState(''),
        [E, I] = r.useState(!1),
        [v, N] = r.useState(!1),
        [C, b] = r.useState(null),
        [S, A] = r.useState(null),
        j = (0, a.e7)([d.Z], () => d.Z.getCountryCode()),
        T = j.code.split(' ')[0],
        Z = async () => {
            try {
                await c.Z.resendCode(e);
            } catch (e) {
                A(e.body.message);
            }
        },
        R = async () => {
            I(!0);
            try {
                let { token: t } = await c.Z.verifyPhone(T + e, s);
                b(null), A(null), N(!0), c.Z.validatePhoneForSupport(t);
            } catch (e) {
                e.body.message ? (b(null), A(e.body.message)) : (b(e.body.phone), A(e.body.code));
            } finally {
                I(!1);
            }
        },
        L = (0, i.jsxs)(g.ZP, {
            children: [
                (0, i.jsx)(g.Ee, { src: n(292824) }),
                (0, i.jsxs)(g.Dx, {
                    className: l()(x.marginTop20, p.flex, p.justifyCenter, p.alignCenter),
                    children: [
                        f.intl.string(f.t.WWzQtb),
                        (0, i.jsx)(o.CircleCheckIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: x.marginLeft8
                        })
                    ]
                })
            ]
        });
    return v
        ? L
        : (0, i.jsxs)(g.ZP, {
              children: [
                  (0, i.jsx)(g.Dx, { children: f.intl.string(f.t.o4JNrK) }),
                  (0, i.jsx)(g.DK, {
                      className: x.marginTop8,
                      children: f.intl.string(f.t.y0tVbm)
                  }),
                  (0, i.jsxs)(g.gO, {
                      className: x.marginTop20,
                      children: [
                          (0, i.jsx)(h.Z, {
                              label: f.intl.string(f.t.eJnn09),
                              alpha2: j.alpha2,
                              countryCode: T,
                              value: e,
                              autoComplete: 'off',
                              spellCheck: 'false',
                              onChange: t,
                              forceMode: u.Nz.PHONE,
                              error: C
                          }),
                          (0, i.jsx)(g.II, {
                              className: x.marginTop20,
                              label: f.intl.string(f.t.OdzNbm),
                              value: s,
                              onChange: _,
                              maxLength: m.z,
                              error: S
                          }),
                          (0, i.jsx)(g.zx, {
                              size: g.zx.Sizes.SMALL,
                              look: g.zx.Looks.LINK,
                              onClick: Z,
                              children: f.intl.string(f.t['5b60go'])
                          }),
                          (0, i.jsx)(g.zx, {
                              className: x.marginTop20,
                              onClick: R,
                              submitting: E,
                              children: f.intl.string(f.t.i4jeWV)
                          })
                      ]
                  })
              ]
          });
};
