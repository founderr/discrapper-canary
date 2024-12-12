n.d(t, {
    Z: function () {
        return x;
    }
}),
    n(47120),
    n(411104),
    n(773603);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(990547),
    o = n(481060),
    c = n(479531),
    u = n(388905),
    d = n(585483),
    h = n(573261),
    g = n(720196),
    m = n(981631),
    p = n(388032),
    f = n(114969),
    _ = n(232186);
function x(e) {
    let { setOriginalEmail: t, setSlide: s, ready: x, token: E } = e,
        [I, v] = r.useState(!1),
        [N, b] = r.useState(null),
        [C, S] = r.useState(null),
        [A, T] = r.useState(''),
        j = r.useRef(null);
    return (
        r.useEffect(() => {
            if (x) {
                var e;
                null === (e = j.current) || void 0 === e || e.focus();
            }
        }, [x]),
        (0, i.jsxs)('div', {
            children: [
                (0, i.jsx)(u.Ee, {
                    src: null == C ? n(26230) : n(935227),
                    className: l()(_.marginBottom20, _.marginTop8)
                }),
                (0, i.jsx)(u.Dx, { children: p.intl.string(p.t['IfBQ5+']) }),
                null != C && '' !== C
                    ? (0, i.jsx)(o.Text, {
                          variant: 'text-sm/normal',
                          color: 'text-danger',
                          children: C
                      })
                    : null,
                (0, i.jsxs)(u.gO, {
                    className: l()(_.marginBottom20, _.marginTop20),
                    children: [
                        (0, i.jsx)(u.II, {
                            name: 'password',
                            type: 'password',
                            label: p.intl.string(p.t['8dM4FB']),
                            setRef: j,
                            className: _.marginBottom20,
                            value: A,
                            onChange: T,
                            error: N,
                            autoComplete: 'new-password',
                            maxLength: 72,
                            placeholder: p.intl.string(p.t['yY/PXV'])
                        }),
                        (0, i.jsx)(u.zx, {
                            className: _.marginTop8,
                            onClick: () => {
                                if (!I) {
                                    if (0 === A.length) {
                                        b(p.intl.string(p.t.R98xDw)), d.S.dispatch(m.CkL.WAVE_EMPHASIZE);
                                        return;
                                    }
                                    return (
                                        null != C && S(null),
                                        null != N && b(null),
                                        t(''),
                                        v(!0),
                                        h.Z.post({
                                            url: m.ANM.ACCOUNT_REVERT,
                                            body: {
                                                token: E,
                                                password: A
                                            },
                                            trackedActionData: { event: a.NetworkActionNames.ACCOUNT_REVERT },
                                            rejectWithError: !1
                                        })
                                            .then((e) => {
                                                let {
                                                    body: { email: n }
                                                } = e;
                                                T(''), t(n), s(g.n.SUCCESS);
                                            })
                                            .catch((e) => {
                                                if (e instanceof Error) S(p.intl.formatToPlainString(p.t.aTVNen, { statusPageURL: m.yXt.STATUS }));
                                                else {
                                                    let t = new c.Z(e);
                                                    t.hasFieldErrors()
                                                        ? b(t.getAnyErrorMessage())
                                                        : S(
                                                              (function (e) {
                                                                  switch (e) {
                                                                      case m.evJ.ACCOUNT_REVERT_INVALID_TOKEN:
                                                                          return p.intl.string(p.t['11zzGR']);
                                                                      case m.evJ.ACCOUNT_REVERT_EMAIL_ALREADY_TAKEN:
                                                                          return p.intl.string(p.t['6qmgaG']);
                                                                      case m.evJ.ACCOUNT_REVERT_ACCOUNT_NOT_FOUND:
                                                                          return p.intl.string(p.t.bChnKi);
                                                                      default:
                                                                          return p.intl.format(p.t.aTVNen, { statusPageURL: m.yXt.STATUS });
                                                                  }
                                                              })(t.code).toString()
                                                          );
                                                }
                                                d.S.dispatch(m.CkL.WAVE_EMPHASIZE);
                                            })
                                            .finally(() => {
                                                v(!1);
                                            })
                                    );
                                }
                            },
                            submitting: I,
                            disabled: I,
                            children: p.intl.string(p.t.ezv91d)
                        })
                    ]
                }),
                (0, i.jsx)('div', {
                    className: f.buttonContainer,
                    children: (0, i.jsx)(u.zx, {
                        color: u.zx.Colors.PRIMARY,
                        onClick: () => {
                            T(''), s(g.n.START);
                        },
                        children: p.intl.string(p.t.rzxnQ0)
                    })
                })
            ]
        })
    );
}
