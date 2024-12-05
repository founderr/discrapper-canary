n.d(t, {
    Sz: function () {
        return C;
    },
    of: function () {
        return E;
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
    g = n(600164),
    h = n(296848),
    p = n(798769),
    x = n(981631),
    T = n(388032),
    S = n(612711);
async function _(e) {
    let { premiumSubscription: t, pauseDuration: n, onClose: i, setHasError: s, setIsCancelling: r, analyticsLocations: l, analyticsLocation: a } = e;
    try {
        r(!0), s(!1), await (0, d.Mg)(t, { pauseDuration: n }, l, a), i();
    } catch {
        s(!0), r(!1);
    }
}
function E(e) {
    let { premiumType: t, onClose: n, pauseDuration: r, setPauseDuration: l, footer: o, premiumSubscription: d } = e,
        u = s.useCallback(
            (e) => {
                let { value: t } = e;
                l(t);
            },
            [l]
        ),
        m = d.status === x.O0b.PAUSED ? T.intl.string(T.t.Lp9WoK) : T.intl.string(T.t.eSR83d),
        _ = (function (e) {
            let t = e.status === x.O0b.PAUSED ? T.t.o3upfX : T.t.dBXZEh,
                { durations: n, currentDaysPaused: i } = (0, h.AT)(e),
                s = [];
            for (let e of n) {
                let n = a.T[e];
                s.push({
                    name: T.intl.formatToPlainString(t, { days: n - i }),
                    value: n,
                    radioItemIconClassName: S.radioOption
                });
            }
            return (
                s.sort((e, t) => e.value - t.value),
                s.push({
                    name: T.intl.string(T.t.OCPUMz),
                    value: 0,
                    radioBarClassName: S.cancelText,
                    radioItemIconClassName: S.cancelText
                }),
                s
            );
        })(d);
    return (
        s.useEffect(() => {
            if (!(_.length < 1)) l(_[0].value);
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
                        className: S.__invalid_header,
                        children: [
                            (0, i.jsx)(c.Heading, {
                                variant: 'heading-xl/bold',
                                className: S.__invalid_modalHeader,
                                children: T.intl.string(T.t.f3nnBw)
                            }),
                            (0, i.jsx)(c.Heading, {
                                variant: 'heading-sm/medium',
                                className: S.subtitle,
                                children: m
                            })
                        ]
                    })
                }),
                (0, i.jsx)(c.ModalContent, {
                    className: S.body,
                    children: (0, i.jsx)(c.RadioGroup, {
                        options: _,
                        onChange: u,
                        value: r
                    })
                }),
                (0, i.jsx)(c.ModalFooter, {
                    justify: g.Z.Justify.START,
                    children: o
                })
            ]
        })
    );
}
function C(e) {
    let { premiumSubscription: t, premiumType: n, onClose: r, pauseDuration: a, analyticsLocation: d } = e,
        [h, E] = s.useState(!1),
        { analyticsLocations: C } = (0, m.ZP)(),
        [f, I] = s.useState(!1),
        N = (0, u.ZP)(),
        A = null,
        b = null,
        v = [x.O0b.PAST_DUE, x.O0b.PAUSED].includes(t.status) ? t.currentPeriodStart : t.currentPeriodEnd,
        j = l()(v).add(a, 'days').toDate();
    switch (t.status) {
        case x.O0b.PAST_DUE:
            b = T.intl.format(T.t['xaS18/'], {
                pauseDuration: a,
                resumeDate: j
            });
            break;
        case x.O0b.PAUSED:
            b = T.intl.format(T.t.Vur3FR, { resumeDate: j });
            break;
        default:
            b = T.intl.format(T.t.W85vFB, {
                pauseDate: v,
                resumeDate: j,
                pauseDuration: a
            });
    }
    return (
        (A = (0, i.jsx)('div', {
            className: S.body,
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
                        className: S.__invalid_header,
                        children: (0, i.jsx)(c.Heading, {
                            variant: 'heading-xl/bold',
                            className: S.__invalid_modalHeader,
                            children: T.intl.string(T.t['AnMG5+'])
                        })
                    })
                }),
                (0, i.jsxs)(c.ModalContent, {
                    className: S.body,
                    children: [
                        h
                            ? (0, i.jsx)(c.FormErrorBlock, {
                                  className: S.errorBlock,
                                  children: T.intl.string(T.t['5mlOCQ'])
                              })
                            : null,
                        A
                    ]
                }),
                (0, i.jsx)(c.ModalFooter, {
                    justify: g.Z.Justify.START,
                    children: (0, i.jsxs)('div', {
                        className: S.whatYouLoseButtonContainer,
                        children: [
                            (0, i.jsx)(c.Button, {
                                color: c.Button.Colors.RED,
                                disabled: f || null == a,
                                onClick: async () => {
                                    await _({
                                        premiumSubscription: t,
                                        pauseDuration: a,
                                        setIsCancelling: I,
                                        setHasError: E,
                                        onClose: r,
                                        analyticsLocations: C,
                                        analyticsLocation: d
                                    });
                                },
                                children: T.intl.string(T.t['cY+Ooa'])
                            }),
                            (0, i.jsx)(c.Button, {
                                look: c.Button.Looks.LINK,
                                color: (0, o.wj)(N) ? c.Button.Colors.WHITE : c.Button.Colors.PRIMARY,
                                onClick: r,
                                children: T.intl.string(T.t.h9tkAA)
                            })
                        ]
                    })
                })
            ]
        })
    );
}
