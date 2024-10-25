n.d(t, {
    Z: function () {
        return f;
    }
}),
    n(47120),
    n(411104),
    n(773603);
var s = n(200651),
    r = n(192379),
    i = n(120356),
    a = n.n(i),
    l = n(990547),
    o = n(481060),
    c = n(479531),
    u = n(388905),
    d = n(585483),
    _ = n(573261),
    h = n(720196),
    E = n(981631),
    g = n(689938),
    p = n(340214),
    m = n(113207);
function f(e) {
    let { setOriginalEmail: t, setSlide: i, ready: f, token: I } = e,
        [N, T] = r.useState(!1),
        [A, x] = r.useState(null),
        [C, R] = r.useState(null),
        [S, O] = r.useState(''),
        Z = r.useRef(null);
    return (
        r.useEffect(() => {
            if (f) {
                var e;
                null === (e = Z.current) || void 0 === e || e.focus();
            }
        }, [f]),
        (0, s.jsxs)('div', {
            children: [
                (0, s.jsx)(u.Ee, {
                    src: null == C ? n(26230) : n(935227),
                    className: a()(m.marginBottom20, m.marginTop8)
                }),
                (0, s.jsx)(u.Dx, { children: g.Z.Messages.ACCOUNT_REVERT_NEW_PASSWORD_SLIDE_TITLE }),
                null != C && '' !== C
                    ? (0, s.jsx)(o.Text, {
                          variant: 'text-sm/normal',
                          color: 'text-danger',
                          children: C
                      })
                    : null,
                (0, s.jsxs)(u.gO, {
                    className: a()(m.marginBottom20, m.marginTop20),
                    children: [
                        (0, s.jsx)(u.II, {
                            name: 'password',
                            type: 'password',
                            label: g.Z.Messages.FORM_LABEL_NEW_PASSWORD,
                            setRef: Z,
                            className: m.marginBottom20,
                            value: S,
                            onChange: O,
                            error: A,
                            autoComplete: 'new-password',
                            maxLength: 72,
                            placeholder: g.Z.Messages.ACCOUNT_REVERT_NEW_PASSWORD_INPUT_PLACEHOLDER
                        }),
                        (0, s.jsx)(u.zx, {
                            className: m.marginTop8,
                            onClick: () => {
                                if (!N) {
                                    if (0 === S.length) {
                                        x(g.Z.Messages.PASSWORD_REQUIRED), d.S.dispatch(E.CkL.WAVE_EMPHASIZE);
                                        return;
                                    }
                                    return (
                                        null != C && R(null),
                                        null != A && x(null),
                                        t(''),
                                        T(!0),
                                        _.Z.post({
                                            url: E.ANM.ACCOUNT_REVERT,
                                            body: {
                                                token: I,
                                                password: S
                                            },
                                            trackedActionData: { event: l.NetworkActionNames.ACCOUNT_REVERT }
                                        })
                                            .then((e) => {
                                                let {
                                                    body: { email: n }
                                                } = e;
                                                O(''), t(n), i(h.n.SUCCESS);
                                            })
                                            .catch((e) => {
                                                if (e instanceof Error) R(g.Z.Messages.FORM_ERROR_GENERIC.format({ statusPageURL: E.yXt.STATUS }));
                                                else {
                                                    let t = new c.Z(e);
                                                    t.hasFieldErrors()
                                                        ? x(t.getAnyErrorMessage())
                                                        : R(
                                                              (function (e) {
                                                                  switch (e) {
                                                                      case E.evJ.ACCOUNT_REVERT_INVALID_TOKEN:
                                                                          return g.Z.Messages.ACCOUNT_REVERT_ERROR_INVALID_TOKEN;
                                                                      case E.evJ.ACCOUNT_REVERT_EMAIL_ALREADY_TAKEN:
                                                                          return g.Z.Messages.ACCOUNT_REVERT_ERROR_EMAIL_ALREADY_TAKEN;
                                                                      case E.evJ.ACCOUNT_REVERT_ACCOUNT_NOT_FOUND:
                                                                          return g.Z.Messages.ACCOUNT_REVERT_ERROR_ACCOUNT_NOT_FOUND;
                                                                      default:
                                                                          return g.Z.Messages.FORM_ERROR_GENERIC.format({ statusPageURL: E.yXt.STATUS });
                                                                  }
                                                              })(t.code).toString()
                                                          );
                                                }
                                                d.S.dispatch(E.CkL.WAVE_EMPHASIZE);
                                            })
                                            .finally(() => {
                                                T(!1);
                                            })
                                    );
                                }
                            },
                            submitting: N,
                            disabled: N,
                            children: g.Z.Messages.ACCOUNT_REVERT_RECOVER_MY_ACCOUNT_BUTTON
                        })
                    ]
                }),
                (0, s.jsx)('div', {
                    className: p.buttonContainer,
                    children: (0, s.jsx)(u.zx, {
                        color: u.zx.Colors.PRIMARY,
                        onClick: () => {
                            O(''), i(h.n.START);
                        },
                        children: g.Z.Messages.ACCOUNT_REVERT_NEW_PASSWORD_BACK_BUTTON
                    })
                })
            ]
        })
    );
}
