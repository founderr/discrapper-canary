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
    p = n(689938),
    g = n(739017),
    m = n(113207);
t.Z = () => {
    let [e, t] = r.useState(''),
        [i, f] = r.useState(''),
        [I, N] = r.useState(!1),
        [T, x] = r.useState(!1),
        [A, C] = r.useState(null),
        [Z, R] = r.useState(null),
        v = (0, o.e7)([d.Z], () => d.Z.getCountryCode()),
        S = v.code.split(' ')[0],
        O = async () => {
            try {
                await c.Z.resendCode(e);
            } catch (e) {
                R(e.body.message);
            }
        },
        b = async () => {
            N(!0);
            try {
                let { token: t } = await c.Z.verifyPhone(S + e, i);
                C(null), R(null), x(!0), c.Z.validatePhoneForSupport(t);
            } catch (e) {
                e.body.message ? (C(null), R(e.body.message)) : (C(e.body.phone), R(e.body.code));
            } finally {
                N(!1);
            }
        },
        P = (0, s.jsxs)(h.ZP, {
            children: [
                (0, s.jsx)(h.Ee, { src: n(292824) }),
                (0, s.jsxs)(h.Dx, {
                    className: a()(m.marginTop20, g.flex, g.justifyCenter, g.alignCenter),
                    children: [
                        p.Z.Messages.MEMBER_VERIFICATION_PHONE_VERIFIED,
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
        ? P
        : (0, s.jsxs)(h.ZP, {
              children: [
                  (0, s.jsx)(h.Dx, { children: p.Z.Messages.ENTER_CODE }),
                  (0, s.jsx)(h.DK, {
                      className: m.marginTop8,
                      children: p.Z.Messages.VERIFY_PHONE_FOR_SUPPORT
                  }),
                  (0, s.jsxs)(h.gO, {
                      className: m.marginTop20,
                      children: [
                          (0, s.jsx)(_.Z, {
                              label: p.Z.Messages.FORM_LABEL_PHONE_NUMBER,
                              alpha2: v.alpha2,
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
                              label: p.Z.Messages.CONFIRMATION_CODE,
                              value: i,
                              onChange: f,
                              maxLength: E.z,
                              error: Z
                          }),
                          (0, s.jsx)(h.zx, {
                              size: h.zx.Sizes.SMALL,
                              look: h.zx.Looks.LINK,
                              onClick: O,
                              children: p.Z.Messages.RESEND_CODE
                          }),
                          (0, s.jsx)(h.zx, {
                              className: m.marginTop20,
                              onClick: b,
                              submitting: I,
                              children: p.Z.Messages.DONE
                          })
                      ]
                  })
              ]
          });
};
