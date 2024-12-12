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
    p = n(388032),
    f = n(652849),
    _ = n(232186);
t.Z = () => {
    let [e, t] = r.useState(''),
        [s, x] = r.useState(''),
        [E, I] = r.useState(!1),
        [v, N] = r.useState(!1),
        [b, C] = r.useState(null),
        [S, A] = r.useState(null),
        T = (0, a.e7)([d.Z], () => d.Z.getCountryCode()),
        j = T.code.split(' ')[0],
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
                let { token: t } = await c.Z.verifyPhone(j + e, s);
                C(null), A(null), N(!0), c.Z.validatePhoneForSupport(t);
            } catch (e) {
                e.body.message ? (C(null), A(e.body.message)) : (C(e.body.phone), A(e.body.code));
            } finally {
                I(!1);
            }
        },
        L = (0, i.jsxs)(g.ZP, {
            children: [
                (0, i.jsx)(g.Ee, { src: n(292824) }),
                (0, i.jsxs)(g.Dx, {
                    className: l()(_.marginTop20, f.flex, f.justifyCenter, f.alignCenter),
                    children: [
                        p.intl.string(p.t.WWzQtb),
                        (0, i.jsx)(o.CircleCheckIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: _.marginLeft8
                        })
                    ]
                })
            ]
        });
    return v
        ? L
        : (0, i.jsxs)(g.ZP, {
              children: [
                  (0, i.jsx)(g.Dx, { children: p.intl.string(p.t.o4JNrK) }),
                  (0, i.jsx)(g.DK, {
                      className: _.marginTop8,
                      children: p.intl.string(p.t.y0tVbm)
                  }),
                  (0, i.jsxs)(g.gO, {
                      className: _.marginTop20,
                      children: [
                          (0, i.jsx)(h.Z, {
                              label: p.intl.string(p.t.eJnn09),
                              alpha2: T.alpha2,
                              countryCode: j,
                              value: e,
                              autoComplete: 'off',
                              spellCheck: 'false',
                              onChange: t,
                              forceMode: u.Nz.PHONE,
                              error: b
                          }),
                          (0, i.jsx)(g.II, {
                              className: _.marginTop20,
                              label: p.intl.string(p.t.OdzNbm),
                              value: s,
                              onChange: x,
                              maxLength: m.z,
                              error: S
                          }),
                          (0, i.jsx)(g.zx, {
                              size: g.zx.Sizes.SMALL,
                              look: g.zx.Looks.LINK,
                              onClick: Z,
                              children: p.intl.string(p.t['5b60go'])
                          }),
                          (0, i.jsx)(g.zx, {
                              className: _.marginTop20,
                              onClick: R,
                              submitting: E,
                              children: p.intl.string(p.t.i4jeWV)
                          })
                      ]
                  })
              ]
          });
};
