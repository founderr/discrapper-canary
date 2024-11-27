n.d(t, {
    Z: function () {
        return _;
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
    f = n(388032),
    p = n(114969),
    x = n(232186);
function _(e) {
    let { setOriginalEmail: t, setSlide: s, ready: _, token: E } = e,
        [I, v] = r.useState(!1),
        [N, C] = r.useState(null),
        [b, S] = r.useState(null),
        [A, j] = r.useState(''),
        T = r.useRef(null);
    return (
        r.useEffect(() => {
            if (_) {
                var e;
                null === (e = T.current) || void 0 === e || e.focus();
            }
        }, [_]),
        (0, i.jsxs)('div', {
            children: [
                (0, i.jsx)(u.Ee, {
                    src: null == b ? n(26230) : n(935227),
                    className: l()(x.marginBottom20, x.marginTop8)
                }),
                (0, i.jsx)(u.Dx, { children: f.intl.string(f.t['IfBQ5+']) }),
                null != b && '' !== b
                    ? (0, i.jsx)(o.Text, {
                          variant: 'text-sm/normal',
                          color: 'text-danger',
                          children: b
                      })
                    : null,
                (0, i.jsxs)(u.gO, {
                    className: l()(x.marginBottom20, x.marginTop20),
                    children: [
                        (0, i.jsx)(u.II, {
                            name: 'password',
                            type: 'password',
                            label: f.intl.string(f.t['8dM4FB']),
                            setRef: T,
                            className: x.marginBottom20,
                            value: A,
                            onChange: j,
                            error: N,
                            autoComplete: 'new-password',
                            maxLength: 72,
                            placeholder: f.intl.string(f.t['yY/PXV'])
                        }),
                        (0, i.jsx)(u.zx, {
                            className: x.marginTop8,
                            onClick: () => {
                                if (!I) {
                                    if (0 === A.length) {
                                        C(f.intl.string(f.t.R98xDw)), d.S.dispatch(m.CkL.WAVE_EMPHASIZE);
                                        return;
                                    }
                                    return (
                                        null != b && S(null),
                                        null != N && C(null),
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
                                                j(''), t(n), s(g.n.SUCCESS);
                                            })
                                            .catch((e) => {
                                                if (e instanceof Error) S(f.intl.formatToPlainString(f.t.aTVNen, { statusPageURL: m.yXt.STATUS }));
                                                else {
                                                    let t = new c.Z(e);
                                                    t.hasFieldErrors()
                                                        ? C(t.getAnyErrorMessage())
                                                        : S(
                                                              (function (e) {
                                                                  switch (e) {
                                                                      case m.evJ.ACCOUNT_REVERT_INVALID_TOKEN:
                                                                          return f.intl.string(f.t['11zzGR']);
                                                                      case m.evJ.ACCOUNT_REVERT_EMAIL_ALREADY_TAKEN:
                                                                          return f.intl.string(f.t['6qmgaG']);
                                                                      case m.evJ.ACCOUNT_REVERT_ACCOUNT_NOT_FOUND:
                                                                          return f.intl.string(f.t.bChnKi);
                                                                      default:
                                                                          return f.intl.format(f.t.aTVNen, { statusPageURL: m.yXt.STATUS });
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
                            children: f.intl.string(f.t.ezv91d)
                        })
                    ]
                }),
                (0, i.jsx)('div', {
                    className: p.buttonContainer,
                    children: (0, i.jsx)(u.zx, {
                        color: u.zx.Colors.PRIMARY,
                        onClick: () => {
                            j(''), s(g.n.START);
                        },
                        children: f.intl.string(f.t.rzxnQ0)
                    })
                })
            ]
        })
    );
}
