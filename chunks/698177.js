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
    h = n(952802),
    _ = n(388905),
    E = n(815660),
    g = n(689938),
    p = n(739017),
    f = n(113207);
t.Z = () => {
    let [e, t] = r.useState(''),
        [i, m] = r.useState(''),
        [I, N] = r.useState(!1),
        [T, A] = r.useState(!1),
        [x, C] = r.useState(null),
        [S, O] = r.useState(null),
        R = (0, l.e7)([d.Z], () => d.Z.getCountryCode()),
        v = R.code.split(' ')[0],
        Z = async () => {
            try {
                await c.Z.resendCode(e);
            } catch (e) {
                O(e.body.message);
            }
        },
        b = async () => {
            N(!0);
            try {
                let { token: t } = await c.Z.verifyPhone(v + e, i);
                C(null), O(null), A(!0), c.Z.validatePhoneForSupport(t);
            } catch (e) {
                e.body.message ? (C(null), O(e.body.message)) : (C(e.body.phone), O(e.body.code));
            } finally {
                N(!1);
            }
        },
        D = (0, s.jsxs)(_.ZP, {
            children: [
                (0, s.jsx)(_.Ee, { src: n(292824) }),
                (0, s.jsxs)(_.Dx, {
                    className: a()(f.marginTop20, p.flex, p.justifyCenter, p.alignCenter),
                    children: [
                        g.Z.Messages.MEMBER_VERIFICATION_PHONE_VERIFIED,
                        (0, s.jsx)(o.CircleCheckIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: f.marginLeft8
                        })
                    ]
                })
            ]
        });
    return T
        ? D
        : (0, s.jsxs)(_.ZP, {
              children: [
                  (0, s.jsx)(_.Dx, { children: g.Z.Messages.ENTER_CODE }),
                  (0, s.jsx)(_.DK, {
                      className: f.marginTop8,
                      children: g.Z.Messages.VERIFY_PHONE_FOR_SUPPORT
                  }),
                  (0, s.jsxs)(_.gO, {
                      className: f.marginTop20,
                      children: [
                          (0, s.jsx)(h.Z, {
                              label: g.Z.Messages.FORM_LABEL_PHONE_NUMBER,
                              alpha2: R.alpha2,
                              countryCode: v,
                              value: e,
                              autoComplete: 'off',
                              spellCheck: 'false',
                              onChange: t,
                              forceMode: u.Nz.PHONE,
                              error: x
                          }),
                          (0, s.jsx)(_.II, {
                              className: f.marginTop20,
                              label: g.Z.Messages.CONFIRMATION_CODE,
                              value: i,
                              onChange: m,
                              maxLength: E.z,
                              error: S
                          }),
                          (0, s.jsx)(_.zx, {
                              size: _.zx.Sizes.SMALL,
                              look: _.zx.Looks.LINK,
                              onClick: Z,
                              children: g.Z.Messages.RESEND_CODE
                          }),
                          (0, s.jsx)(_.zx, {
                              className: f.marginTop20,
                              onClick: b,
                              submitting: I,
                              children: g.Z.Messages.DONE
                          })
                      ]
                  })
              ]
          });
};
