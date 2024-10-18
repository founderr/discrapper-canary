n(47120);
var s = n(735250),
    r = n(470079),
    i = n(120356),
    a = n.n(i),
    l = n(442837),
    o = n(481060),
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
        [T, A] = r.useState(!1),
        [x, C] = r.useState(null),
        [R, S] = r.useState(null),
        O = (0, l.e7)([d.Z], () => d.Z.getCountryCode()),
        Z = O.code.split(' ')[0],
        v = async () => {
            try {
                await c.Z.resendCode(e);
            } catch (e) {
                S(e.body.message);
            }
        },
        b = async () => {
            N(!0);
            try {
                let { token: t } = await c.Z.verifyPhone(Z + e, i);
                C(null), S(null), A(!0), c.Z.validatePhoneForSupport(t);
            } catch (e) {
                e.body.message ? (C(null), S(e.body.message)) : (C(e.body.phone), S(e.body.code));
            } finally {
                N(!1);
            }
        },
        L = (0, s.jsxs)(h.ZP, {
            children: [
                (0, s.jsx)(h.Ee, { src: n(292824) }),
                (0, s.jsxs)(h.Dx, {
                    className: a()(m.marginTop20, p.flex, p.justifyCenter, p.alignCenter),
                    children: [
                        g.Z.Messages.MEMBER_VERIFICATION_PHONE_VERIFIED,
                        (0, s.jsx)(o.CircleCheckIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: m.marginLeft8
                        })
                    ]
                })
            ]
        });
    return T
        ? L
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
                              alpha2: O.alpha2,
                              countryCode: Z,
                              value: e,
                              autoComplete: 'off',
                              spellCheck: 'false',
                              onChange: t,
                              forceMode: u.Nz.PHONE,
                              error: x
                          }),
                          (0, s.jsx)(h.II, {
                              className: m.marginTop20,
                              label: g.Z.Messages.CONFIRMATION_CODE,
                              value: i,
                              onChange: f,
                              maxLength: E.z,
                              error: R
                          }),
                          (0, s.jsx)(h.zx, {
                              size: h.zx.Sizes.SMALL,
                              look: h.zx.Looks.LINK,
                              onClick: v,
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
