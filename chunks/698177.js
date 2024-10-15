n(47120);
var s = n(735250),
    r = n(470079),
    i = n(120356),
    a = n.n(i),
    o = n(442837),
    l = n(481060),
    c = n(144114),
    u = n(742458),
    d = n(541692),
    _ = n(952802),
    h = n(388905),
    E = n(815660),
    g = n(689938),
    p = n(739017),
    m = n(113207);
t.Z = () => {
    let [e, t] = r.useState(''),
        [i, f] = r.useState(''),
        [I, N] = r.useState(!1),
        [T, x] = r.useState(!1),
        [A, C] = r.useState(null),
        [v, Z] = r.useState(null),
        R = (0, o.e7)([d.Z], () => d.Z.getCountryCode()),
        S = R.code.split(' ')[0],
        O = async () => {
            try {
                await c.Z.resendCode(e);
            } catch (e) {
                Z(e.body.message);
            }
        },
        b = async () => {
            N(!0);
            try {
                let { token: t } = await c.Z.verifyPhone(S + e, i);
                C(null), Z(null), x(!0), c.Z.validatePhoneForSupport(t);
            } catch (e) {
                e.body.message ? (C(null), Z(e.body.message)) : (C(e.body.phone), Z(e.body.code));
            } finally {
                N(!1);
            }
        },
        D = (0, s.jsxs)(h.ZP, {
            children: [
                (0, s.jsx)(h.Ee, { src: n(292824) }),
                (0, s.jsxs)(h.Dx, {
                    className: a()(m.marginTop20, p.flex, p.justifyCenter, p.alignCenter),
                    children: [
                        g.Z.Messages.MEMBER_VERIFICATION_PHONE_VERIFIED,
                        (0, s.jsx)(l.CircleCheckIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: m.marginLeft8
                        })
                    ]
                })
            ]
        });
    return T
        ? D
        : (0, s.jsxs)(h.ZP, {
              children: [
                  (0, s.jsx)(h.Dx, { children: g.Z.Messages.ENTER_CODE }),
                  (0, s.jsx)(h.DK, {
                      className: m.marginTop8,
                      children: g.Z.Messages.VERIFY_PHONE_FOR_SUPPORT
                  }),
                  (0, s.jsxs)(h.gO, {
                      className: m.marginTop20,
                      children: [
                          (0, s.jsx)(_.Z, {
                              label: g.Z.Messages.FORM_LABEL_PHONE_NUMBER,
                              alpha2: R.alpha2,
                              countryCode: S,
                              value: e,
                              autoComplete: 'off',
                              spellCheck: 'false',
                              onChange: t,
                              forceMode: u.Nz.PHONE,
                              error: A
                          }),
                          (0, s.jsx)(h.II, {
                              className: m.marginTop20,
                              label: g.Z.Messages.CONFIRMATION_CODE,
                              value: i,
                              onChange: f,
                              maxLength: E.z,
                              error: v
                          }),
                          (0, s.jsx)(h.zx, {
                              size: h.zx.Sizes.SMALL,
                              look: h.zx.Looks.LINK,
                              onClick: O,
                              children: g.Z.Messages.RESEND_CODE
                          }),
                          (0, s.jsx)(h.zx, {
                              className: m.marginTop20,
                              onClick: b,
                              submitting: I,
                              children: g.Z.Messages.DONE
                          })
                      ]
                  })
              ]
          });
};
