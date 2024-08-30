t.d(s, {
    Sz: function () {
        return A;
    },
    of: function () {
        return g;
    }
}),
    t(653041),
    t(47120);
var n = t(735250),
    a = t(470079),
    i = t(913527),
    r = t.n(i),
    o = t(99945),
    l = t(780384),
    c = t(481060),
    d = t(355467),
    u = t(410030),
    _ = t(906732),
    E = t(600164),
    T = t(296848),
    I = t(798769),
    S = t(981631),
    N = t(689938),
    m = t(391717);
async function C(e) {
    let { premiumSubscription: s, pauseDuration: t, onClose: n, setHasError: a, setIsCancelling: i, analyticsLocations: r, analyticsLocation: o } = e;
    try {
        i(!0), a(!1), await (0, d.Mg)(s, { pauseDuration: t }, r, o), n();
    } catch {
        a(!0), i(!1);
    }
}
function g(e) {
    let { premiumType: s, onClose: t, pauseDuration: i, setPauseDuration: r, footer: l, premiumSubscription: d } = e,
        u = a.useCallback(
            (e) => {
                let { value: s } = e;
                r(s);
            },
            [r]
        ),
        _ = d.status === S.O0b.PAUSED ? N.Z.Messages.PREMIUM_PAUSE_SELECT_EXTEND_DURATION_SUBTITLE : N.Z.Messages.PREMIUM_PAUSE_SELECT_SUBTITLE,
        C = (function (e) {
            let s = e.status === S.O0b.PAUSED ? N.Z.Messages.PREMIUM_PAUSE_EXTEND_DURATION_MONTHS_CAPITALIZE : N.Z.Messages.PREMIUM_PAUSE_DURATION_MONTHS_CAPITALIZE,
                { durations: t, currentDaysPaused: n } = (0, T.AT)(e),
                a = [];
            for (let e of t) {
                let t = o.T[e];
                a.push({
                    name: s.format({ days: t - n }),
                    value: t,
                    radioItemIconClassName: m.radioOption
                });
            }
            return (
                a.sort((e, s) => e.value - s.value),
                a.push({
                    name: N.Z.Messages.PREMIUM_PAUSE_DURATION_CANCEL,
                    value: 0,
                    radioBarClassName: m.cancelText,
                    radioItemIconClassName: m.cancelText
                }),
                a
            );
        })(d);
    return (
        a.useEffect(() => {
            if (!(C.length < 1)) r(C[0].value);
        }, []),
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(I.Z, {
                    premiumType: s,
                    onClose: t
                }),
                (0, n.jsx)(c.ModalHeader, {
                    separator: !1,
                    children: (0, n.jsxs)('div', {
                        className: m.__invalid_header,
                        children: [
                            (0, n.jsx)(c.Heading, {
                                variant: 'heading-xl/bold',
                                className: m.__invalid_modalHeader,
                                children: N.Z.Messages.PREMIUM_PAUSE_SELECT_TITLE
                            }),
                            (0, n.jsx)(c.Heading, {
                                variant: 'heading-sm/medium',
                                className: m.subtitle,
                                children: _
                            })
                        ]
                    })
                }),
                (0, n.jsx)(c.ModalContent, {
                    className: m.body,
                    children: (0, n.jsx)(c.RadioGroup, {
                        options: C,
                        onChange: u,
                        value: i
                    })
                }),
                (0, n.jsx)(c.ModalFooter, {
                    justify: E.Z.Justify.START,
                    children: l
                })
            ]
        })
    );
}
function A(e) {
    let { premiumSubscription: s, premiumType: t, onClose: i, pauseDuration: o, analyticsLocation: d } = e,
        [T, g] = a.useState(!1),
        { analyticsLocations: A } = (0, _.ZP)(),
        [h, O] = a.useState(!1),
        p = (0, u.ZP)(),
        x = null,
        R = null,
        f = [S.O0b.PAST_DUE, S.O0b.PAUSED].includes(s.status) ? s.currentPeriodStart : s.currentPeriodEnd,
        M = r()(f).add(o, 'days').toDate();
    switch (s.status) {
        case S.O0b.PAST_DUE:
            R = N.Z.Messages.PREMIUM_PAUSE_PAST_DUE_CONFIRM_BODY.format({
                pauseDuration: o,
                resumeDate: M
            });
            break;
        case S.O0b.PAUSED:
            R = N.Z.Messages.PREMIUM_PAUSE_EXTEND_CONFIRM_BODY.format({ resumeDate: M });
            break;
        default:
            R = N.Z.Messages.PREMIUM_PAUSE_CONFIRM_BODY.format({
                pauseDate: f,
                resumeDate: M,
                pauseDuration: o
            });
    }
    return (
        (x = (0, n.jsx)('div', {
            className: m.body,
            children: R
        })),
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(I.Z, {
                    premiumType: t,
                    onClose: i
                }),
                (0, n.jsx)(c.ModalHeader, {
                    separator: !1,
                    children: (0, n.jsx)('div', {
                        className: m.__invalid_header,
                        children: (0, n.jsx)(c.Heading, {
                            variant: 'heading-xl/bold',
                            className: m.__invalid_modalHeader,
                            children: N.Z.Messages.PREMIUM_PAUSE_YOUR_SUBSCRIPTION_WILL_BE_PAUSED
                        })
                    })
                }),
                (0, n.jsxs)(c.ModalContent, {
                    className: m.body,
                    children: [
                        T
                            ? (0, n.jsx)(c.FormErrorBlock, {
                                  className: m.errorBlock,
                                  children: N.Z.Messages.BILLING_ERROR_GENERIC
                              })
                            : null,
                        x
                    ]
                }),
                (0, n.jsx)(c.ModalFooter, {
                    justify: E.Z.Justify.START,
                    children: (0, n.jsxs)('div', {
                        className: m.whatYouLoseButtonContainer,
                        children: [
                            (0, n.jsx)(c.Button, {
                                color: c.Button.Colors.RED,
                                disabled: h || null == o,
                                onClick: async () => {
                                    await C({
                                        premiumSubscription: s,
                                        pauseDuration: o,
                                        setIsCancelling: O,
                                        setHasError: g,
                                        onClose: i,
                                        analyticsLocations: A,
                                        analyticsLocation: d
                                    });
                                },
                                children: N.Z.Messages.CONFIRM
                            }),
                            (0, n.jsx)(c.Button, {
                                look: c.Button.Looks.LINK,
                                color: (0, l.wj)(p) ? c.Button.Colors.WHITE : c.Button.Colors.PRIMARY,
                                onClick: i,
                                children: N.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BACK
                            })
                        ]
                    })
                })
            ]
        })
    );
}
