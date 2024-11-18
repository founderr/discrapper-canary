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
    p = n(720196),
    g = n(981631),
    m = n(388032),
    f = n(318906),
    x = n(971436);
function _(e) {
    let { setOriginalEmail: t, setSlide: s, ready: _, token: E } = e,
        [v, I] = r.useState(!1),
        [b, N] = r.useState(null),
        [C, S] = r.useState(null),
        [A, T] = r.useState(''),
        j = r.useRef(null);
    return (
        r.useEffect(() => {
            if (_) {
                var e;
                null === (e = j.current) || void 0 === e || e.focus();
            }
        }, [_]),
        (0, i.jsxs)('div', {
            children: [
                (0, i.jsx)(u.Ee, {
                    src: null == C ? n(26230) : n(935227),
                    className: l()(x.marginBottom20, x.marginTop8)
                }),
                (0, i.jsx)(u.Dx, { children: m.intl.string(m.t['IfBQ5+']) }),
                null != C && '' !== C
                    ? (0, i.jsx)(o.Text, {
                          variant: 'text-sm/normal',
                          color: 'text-danger',
                          children: C
                      })
                    : null,
                (0, i.jsxs)(u.gO, {
                    className: l()(x.marginBottom20, x.marginTop20),
                    children: [
                        (0, i.jsx)(u.II, {
                            name: 'password',
                            type: 'password',
                            label: m.intl.string(m.t['8dM4FB']),
                            setRef: j,
                            className: x.marginBottom20,
                            value: A,
                            onChange: T,
                            error: b,
                            autoComplete: 'new-password',
                            maxLength: 72,
                            placeholder: m.intl.string(m.t['yY/PXV'])
                        }),
                        (0, i.jsx)(u.zx, {
                            className: x.marginTop8,
                            onClick: () => {
                                if (!v) {
                                    if (0 === A.length) {
                                        N(m.intl.string(m.t.R98xDw)), d.S.dispatch(g.CkL.WAVE_EMPHASIZE);
                                        return;
                                    }
                                    return (
                                        null != C && S(null),
                                        null != b && N(null),
                                        t(''),
                                        I(!0),
                                        h.Z.post({
                                            url: g.ANM.ACCOUNT_REVERT,
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
                                                T(''), t(n), s(p.n.SUCCESS);
                                            })
                                            .catch((e) => {
                                                if (e instanceof Error) S(m.intl.formatToPlainString(m.t.aTVNen, { statusPageURL: g.yXt.STATUS }));
                                                else {
                                                    let t = new c.Z(e);
                                                    t.hasFieldErrors()
                                                        ? N(t.getAnyErrorMessage())
                                                        : S(
                                                              (function (e) {
                                                                  switch (e) {
                                                                      case g.evJ.ACCOUNT_REVERT_INVALID_TOKEN:
                                                                          return m.intl.string(m.t['11zzGR']);
                                                                      case g.evJ.ACCOUNT_REVERT_EMAIL_ALREADY_TAKEN:
                                                                          return m.intl.string(m.t['6qmgaG']);
                                                                      case g.evJ.ACCOUNT_REVERT_ACCOUNT_NOT_FOUND:
                                                                          return m.intl.string(m.t.bChnKi);
                                                                      default:
                                                                          return m.intl.format(m.t.aTVNen, { statusPageURL: g.yXt.STATUS });
                                                                  }
                                                              })(t.code).toString()
                                                          );
                                                }
                                                d.S.dispatch(g.CkL.WAVE_EMPHASIZE);
                                            })
                                            .finally(() => {
                                                I(!1);
                                            })
                                    );
                                }
                            },
                            submitting: v,
                            disabled: v,
                            children: m.intl.string(m.t.ezv91d)
                        })
                    ]
                }),
                (0, i.jsx)('div', {
                    className: f.buttonContainer,
                    children: (0, i.jsx)(u.zx, {
                        color: u.zx.Colors.PRIMARY,
                        onClick: () => {
                            T(''), s(p.n.START);
                        },
                        children: m.intl.string(m.t.rzxnQ0)
                    })
                })
            ]
        })
    );
}
