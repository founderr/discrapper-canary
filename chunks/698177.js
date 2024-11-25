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
    p = n(388905),
    g = n(815660),
    m = n(388032),
    f = n(652849),
    x = n(232186);
t.Z = () => {
    let [e, t] = r.useState(''),
        [s, _] = r.useState(''),
        [E, v] = r.useState(!1),
        [I, b] = r.useState(!1),
        [N, C] = r.useState(null),
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
            v(!0);
            try {
                let { token: t } = await c.Z.verifyPhone(j + e, s);
                C(null), A(null), b(!0), c.Z.validatePhoneForSupport(t);
            } catch (e) {
                e.body.message ? (C(null), A(e.body.message)) : (C(e.body.phone), A(e.body.code));
            } finally {
                v(!1);
            }
        },
        L = (0, i.jsxs)(p.ZP, {
            children: [
                (0, i.jsx)(p.Ee, { src: n(292824) }),
                (0, i.jsxs)(p.Dx, {
                    className: l()(x.marginTop20, f.flex, f.justifyCenter, f.alignCenter),
                    children: [
                        m.intl.string(m.t.WWzQtb),
                        (0, i.jsx)(o.CircleCheckIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: x.marginLeft8
                        })
                    ]
                })
            ]
        });
    return I
        ? L
        : (0, i.jsxs)(p.ZP, {
              children: [
                  (0, i.jsx)(p.Dx, { children: m.intl.string(m.t.o4JNrK) }),
                  (0, i.jsx)(p.DK, {
                      className: x.marginTop8,
                      children: m.intl.string(m.t.y0tVbm)
                  }),
                  (0, i.jsxs)(p.gO, {
                      className: x.marginTop20,
                      children: [
                          (0, i.jsx)(h.Z, {
                              label: m.intl.string(m.t.eJnn09),
                              alpha2: T.alpha2,
                              countryCode: j,
                              value: e,
                              autoComplete: 'off',
                              spellCheck: 'false',
                              onChange: t,
                              forceMode: u.Nz.PHONE,
                              error: N
                          }),
                          (0, i.jsx)(p.II, {
                              className: x.marginTop20,
                              label: m.intl.string(m.t.OdzNbm),
                              value: s,
                              onChange: _,
                              maxLength: g.z,
                              error: S
                          }),
                          (0, i.jsx)(p.zx, {
                              size: p.zx.Sizes.SMALL,
                              look: p.zx.Looks.LINK,
                              onClick: Z,
                              children: m.intl.string(m.t['5b60go'])
                          }),
                          (0, i.jsx)(p.zx, {
                              className: x.marginTop20,
                              onClick: R,
                              submitting: E,
                              children: m.intl.string(m.t.i4jeWV)
                          })
                      ]
                  })
              ]
          });
};
