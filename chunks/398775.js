n.d(t, {
    Sz: function () {
        return E;
    },
    of: function () {
        return _;
    }
}),
    n(653041),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(913527),
    l = n.n(r),
    a = n(99945),
    o = n(780384),
    c = n(481060),
    d = n(355467),
    u = n(410030),
    m = n(906732),
    h = n(600164),
    g = n(296848),
    p = n(798769),
    x = n(981631),
    S = n(388032),
    T = n(891184);
async function C(e) {
    let { premiumSubscription: t, pauseDuration: n, onClose: i, setHasError: s, setIsCancelling: r, analyticsLocations: l, analyticsLocation: a } = e;
    try {
        r(!0), s(!1), await (0, d.Mg)(t, { pauseDuration: n }, l, a), i();
    } catch {
        s(!0), r(!1);
    }
}
function _(e) {
    let { premiumType: t, onClose: n, pauseDuration: r, setPauseDuration: l, footer: o, premiumSubscription: d } = e,
        u = s.useCallback(
            (e) => {
                let { value: t } = e;
                l(t);
            },
            [l]
        ),
        m = d.status === x.O0b.PAUSED ? S.intl.string(S.t.Lp9WoK) : S.intl.string(S.t.eSR83d),
        C = (function (e) {
            let t = e.status === x.O0b.PAUSED ? S.t.o3upfX : S.t.dBXZEh,
                { durations: n, currentDaysPaused: i } = (0, g.AT)(e),
                s = [];
            for (let e of n) {
                let n = a.T[e];
                s.push({
                    name: S.intl.formatToPlainString(t, { days: n - i }),
                    value: n,
                    radioItemIconClassName: T.radioOption
                });
            }
            return (
                s.sort((e, t) => e.value - t.value),
                s.push({
                    name: S.intl.string(S.t.OCPUMz),
                    value: 0,
                    radioBarClassName: T.cancelText,
                    radioItemIconClassName: T.cancelText
                }),
                s
            );
        })(d);
    return (
        s.useEffect(() => {
            if (!(C.length < 1)) l(C[0].value);
        }, []),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(p.Z, {
                    premiumType: t,
                    onClose: n
                }),
                (0, i.jsx)(c.ModalHeader, {
                    separator: !1,
                    children: (0, i.jsxs)('div', {
                        className: T.__invalid_header,
                        children: [
                            (0, i.jsx)(c.Heading, {
                                variant: 'heading-xl/bold',
                                className: T.__invalid_modalHeader,
                                children: S.intl.string(S.t.f3nnBw)
                            }),
                            (0, i.jsx)(c.Heading, {
                                variant: 'heading-sm/medium',
                                className: T.subtitle,
                                children: m
                            })
                        ]
                    })
                }),
                (0, i.jsx)(c.ModalContent, {
                    className: T.body,
                    children: (0, i.jsx)(c.RadioGroup, {
                        options: C,
                        onChange: u,
                        value: r
                    })
                }),
                (0, i.jsx)(c.ModalFooter, {
                    justify: h.Z.Justify.START,
                    children: o
                })
            ]
        })
    );
}
function E(e) {
    let { premiumSubscription: t, premiumType: n, onClose: r, pauseDuration: a, analyticsLocation: d } = e,
        [g, _] = s.useState(!1),
        { analyticsLocations: E } = (0, m.ZP)(),
        [f, I] = s.useState(!1),
        N = (0, u.ZP)(),
        A = null,
        b = null,
        v = [x.O0b.PAST_DUE, x.O0b.PAUSED].includes(t.status) ? t.currentPeriodStart : t.currentPeriodEnd,
        j = l()(v).add(a, 'days').toDate();
    switch (t.status) {
        case x.O0b.PAST_DUE:
            b = S.intl.format(S.t['xaS18/'], {
                pauseDuration: a,
                resumeDate: j
            });
            break;
        case x.O0b.PAUSED:
            b = S.intl.format(S.t.Vur3FR, { resumeDate: j });
            break;
        default:
            b = S.intl.format(S.t.W85vFB, {
                pauseDate: v,
                resumeDate: j,
                pauseDuration: a
            });
    }
    return (
        (A = (0, i.jsx)('div', {
            className: T.body,
            children: b
        })),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(p.Z, {
                    premiumType: n,
                    onClose: r
                }),
                (0, i.jsx)(c.ModalHeader, {
                    separator: !1,
                    children: (0, i.jsx)('div', {
                        className: T.__invalid_header,
                        children: (0, i.jsx)(c.Heading, {
                            variant: 'heading-xl/bold',
                            className: T.__invalid_modalHeader,
                            children: S.intl.string(S.t['AnMG5+'])
                        })
                    })
                }),
                (0, i.jsxs)(c.ModalContent, {
                    className: T.body,
                    children: [
                        g
                            ? (0, i.jsx)(c.FormErrorBlock, {
                                  className: T.errorBlock,
                                  children: S.intl.string(S.t['5mlOCQ'])
                              })
                            : null,
                        A
                    ]
                }),
                (0, i.jsx)(c.ModalFooter, {
                    justify: h.Z.Justify.START,
                    children: (0, i.jsxs)('div', {
                        className: T.whatYouLoseButtonContainer,
                        children: [
                            (0, i.jsx)(c.Button, {
                                color: c.Button.Colors.RED,
                                disabled: f || null == a,
                                onClick: async () => {
                                    await C({
                                        premiumSubscription: t,
                                        pauseDuration: a,
                                        setIsCancelling: I,
                                        setHasError: _,
                                        onClose: r,
                                        analyticsLocations: E,
                                        analyticsLocation: d
                                    });
                                },
                                children: S.intl.string(S.t['cY+Ooa'])
                            }),
                            (0, i.jsx)(c.Button, {
                                look: c.Button.Looks.LINK,
                                color: (0, o.wj)(N) ? c.Button.Colors.WHITE : c.Button.Colors.PRIMARY,
                                onClick: r,
                                children: S.intl.string(S.t.h9tkAA)
                            })
                        ]
                    })
                })
            ]
        })
    );
}
