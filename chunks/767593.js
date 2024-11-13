n.r(t), n(47120), n(653041);
var o = n(200651),
    r = n(192379),
    a = n(100621),
    i = n(481060),
    l = n(442837),
    s = n(607070),
    c = n(970606),
    u = n(313201),
    d = n(863249),
    m = n(944163),
    f = n(246364),
    p = n(983736),
    h = n(937111),
    x = n(200305),
    b = n(271383),
    _ = n(594174),
    C = n(231467),
    g = n(308083),
    v = n(388032),
    N = n(684025);
let I = {
        mass: 1,
        tension: 600,
        friction: 60
    },
    j = {
        mass: 1,
        tension: 300,
        friction: 25
    },
    y = 2300,
    T = [
        {
            position: 0,
            alpha: 0
        },
        {
            position: 0.19,
            alpha: 0.262
        },
        {
            position: 0.34,
            alpha: 0.459
        },
        {
            position: 0.47,
            alpha: 0.618
        },
        {
            position: 0.57,
            alpha: 0.722
        },
        {
            position: 0.65,
            alpha: 0.806
        },
        {
            position: 0.73,
            alpha: 0.874
        },
        {
            position: 0.8,
            alpha: 0.925
        },
        {
            position: 0.86,
            alpha: 0.958
        },
        {
            position: 0.91,
            alpha: 0.979
        },
        {
            position: 0.95,
            alpha: 0.992
        },
        {
            position: 0.98,
            alpha: 0.998
        },
        {
            position: 1,
            alpha: 1
        }
    ];
function E(e) {
    let { children: t, containerRef: n, faderSize: a, faderEdgeThreshold: l } = e,
        s = r.useRef(null),
        [c, u] = r.useState(0),
        [d, m] = r.useState(0),
        [f, p] = r.useState(0),
        h = r.useCallback(() => {
            null != s.current && (u(s.current.getDistanceFromTop()), m(s.current.getDistanceFromBottom()), p(s.current.getScrollerState().offsetHeight));
        }, []);
    r.useEffect(() => {
        if ((h(), null == n.current)) return;
        let e = new ResizeObserver(() => {
            h();
        });
        return (
            e.observe(n.current),
            () => {
                e.disconnect();
            }
        );
    }, [s, n, h]);
    let x = r.useMemo(() => {
        if (0 === c && 0 === d) return {};
        let e = [];
        if ((e.push('to bottom'), c > 0)) {
            let t = l > 0 ? 1 - Math.min(l, c) / l : 1;
            for (let n = 0; n < T.length; n++) {
                let { position: o, alpha: r } = T[n],
                    i = (o * a).toFixed(2);
                e.push('hsla(0, 0%, 0%, '.concat(t + r * (1 - t), ') ').concat(i, 'px'));
            }
        }
        if (d > 0) {
            let t = f - a,
                n = l > 0 ? 1 - Math.min(l, d) / l : 1;
            for (let o = T.length - 1; o >= 0; o--) {
                let { position: r, alpha: i } = T[o],
                    l = (t + (1 - r) * a).toFixed(2);
                e.push('hsla(0, 0%, 0%, '.concat(n + i * (1 - n), ') ').concat(l, 'px'));
            }
        }
        return { maskImage: 'linear-gradient('.concat(e.join(','), ')') };
    }, [d, c, l, a, f]);
    return (0, o.jsx)(i.AdvancedScrollerNone, {
        ref: s,
        style: x,
        className: N.scroller,
        onScroll: h,
        children: t
    });
}
function F(e) {
    let { guildId: t, formState: n, updateFormState: r } = e;
    return (0, o.jsxs)('div', {
        className: N.verificationForm,
        children: [
            (0, o.jsx)(i.Heading, {
                variant: 'heading-xxl/normal',
                color: 'header-primary',
                children: v.intl.string(v.t.xsSj6e)
            }),
            (0, o.jsx)(i.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                children: v.intl.string(v.t['1VDDMT'])
            }),
            (0, o.jsx)(x.Y, {
                guildId: t,
                formState: n,
                updateFormState: r,
                disableVerification: !0
            })
        ]
    });
}
t.default = function (e) {
    var t, n, x;
    let { clan: T, prioritizedGameIds: R, position: k, transitionState: B, onClose: S } = e,
        P = (0, u.Dt)(),
        O = (0, l.e7)([m.Z], () => m.Z.get(T.id)),
        [A, q] = r.useState(null !== (n = null == O ? void 0 : O.formFields) && void 0 !== n ? n : []),
        [M, w] = r.useState(!1),
        [D, H] = r.useState(!1),
        [z, Z] = r.useState(!1),
        U = (0, l.e7)([_.default], () => _.default.getCurrentUser()),
        Y = (0, l.e7)([b.ZP], () => b.ZP.isMember(T.id, null == U ? void 0 : U.id), [T, U]),
        V = (0, l.e7)([h.Z], () => {
            var e;
            return (null === (e = h.Z.getRequest(T.id)) || void 0 === e ? void 0 : e.applicationStatus) === f.wB.SUBMITTED;
        }),
        [L, K] = r.useState(''),
        Q = r.useRef(() =>
            (0, c._v)({
                guildId: T.id,
                position: k
            })
        );
    r.useEffect(
        () => (
            d.ZP.fetchVerificationForm(T.id),
            () => {
                Q.current();
            }
        ),
        [T.id, Q]
    ),
        r.useEffect(() => {
            null != O && q(O.formFields);
        }, [O]);
    let G = r.useCallback(
            (e) => {
                !M &&
                    (w(!0),
                    (Q.current = () => !1),
                    (0, c.r)({
                        guildId: T.id,
                        position: k
                    })),
                    q(e);
            },
            [q, M, w, T.id, k]
        ),
        X = r.useCallback(
            async (e) => {
                await d.ZP.submitVerificationForm(T.id, e, d.q0);
            },
            [T.id]
        ),
        W = r.useCallback(async () => {
            try {
                H(!0);
                let e = Date.now();
                await X({
                    ...(null != O ? O : m.t),
                    formFields: A
                });
                let t = () => {
                        Z(!0), setTimeout(S, 1300), H(!1), setTimeout(d.xo, y);
                    },
                    n = Date.now();
                n - e > 1000 ? t() : setTimeout(t, 1000 - (n - e));
            } catch (e) {
                K(null == e ? void 0 : e.message), H(!1);
            }
        }, [X, S, O, A]),
        J = A.some((e) => !(0, p.OA)(e)),
        $ = (null !== (x = null == O ? void 0 : null === (t = O.guild) || void 0 === t ? void 0 : t.approximate_member_count) && void 0 !== x ? x : 0) >= g.Du,
        ee = (0, l.e7)([s.Z], () => s.Z.useReducedMotion),
        et = (0, i.useSpring)(
            {
                from: {
                    opacity: 0,
                    transform: 'translateY('.concat(ee ? 0 : 40, 'px)')
                },
                to: {
                    opacity: 1,
                    transform: 'translateY(0px)'
                },
                config: I,
                delay: 500
            },
            'animate-always'
        ),
        en = (0, i.useTransition)(z, {
            from: {
                opacity: 0,
                scale: 0
            },
            enter: {
                opacity: 1,
                scale: 1
            },
            leave: {
                opacity: 0,
                scale: 0
            },
            config: j
        }),
        eo = r.useRef(null);
    return (0, o.jsxs)(i.ModalRoot, {
        transitionState: B,
        'aria-labelledby': P,
        size: i.ModalSize.DYNAMIC,
        className: N.container,
        hideShadow: !0,
        children: [
            (0, o.jsxs)(a.animated.div, {
                className: N.body,
                style: et,
                children: [
                    (0, o.jsx)('div', {
                        className: N.applicationContainer,
                        ref: eo,
                        children: (0, o.jsx)(E, {
                            containerRef: eo,
                            faderSize: 180,
                            faderEdgeThreshold: 48,
                            children: (0, o.jsx)(F, {
                                guildId: T.id,
                                formState: A,
                                updateFormState: G
                            })
                        })
                    }),
                    (0, o.jsx)('div', { className: N.verticalRule }),
                    (0, o.jsxs)('div', {
                        className: N.clanContainer,
                        children: [
                            (0, o.jsx)(C.xV, {
                                clan: T,
                                className: N.profileCard,
                                prioritizedGameIds: R,
                                expanded: !0,
                                isMember: Y,
                                hasPendingJoinRequest: V,
                                atMaxMemberCapacity: $
                            }),
                            (0, o.jsxs)('div', {
                                className: N.applyButtonContainer,
                                children: [
                                    (0, o.jsxs)(i.Button, {
                                        type: 'submit',
                                        onClick: z ? void 0 : W,
                                        submitting: D,
                                        fullWidth: !0,
                                        disabled: J || null == O,
                                        innerClassName: N.applyButtonInner,
                                        children: [
                                            $ &&
                                                (0, o.jsx)(i.WarningIcon, {
                                                    size: 'custom',
                                                    color: 'white',
                                                    width: 20,
                                                    height: 20
                                                }),
                                            !z && v.intl.string(v.t['1Qm829']),
                                            en(
                                                (e, t) =>
                                                    t &&
                                                    (0, o.jsx)(a.animated.div, {
                                                        style: e,
                                                        className: N.successCheckmark,
                                                        children: (0, o.jsx)(i.CheckmarkLargeBoldIcon, {
                                                            size: 'sm',
                                                            color: 'currentColor',
                                                            'aria-hidden': !0
                                                        })
                                                    })
                                            )
                                        ]
                                    }),
                                    '' !== L &&
                                        (0, o.jsx)(i.Text, {
                                            variant: 'text-sm/normal',
                                            color: 'text-danger',
                                            children: L
                                        })
                                ]
                            }),
                            $ &&
                                (0, o.jsxs)(o.Fragment, {
                                    children: [
                                        (0, o.jsx)(i.Text, {
                                            variant: 'text-xs/medium',
                                            color: 'text-warning',
                                            className: N.maxCapacityText,
                                            children: v.intl.string(v.t.GNPXdX)
                                        }),
                                        (0, o.jsx)('hr', { className: N.separator })
                                    ]
                                }),
                            (0, o.jsx)(i.Text, {
                                variant: 'text-xs/medium',
                                color: 'text-muted',
                                className: N.noticeText,
                                children: v.intl.string(v.t.FwXzw8)
                            }),
                            (0, o.jsx)(i.Text, {
                                variant: 'text-xs/medium',
                                color: 'text-muted',
                                className: N.noticeText,
                                children: v.intl.string(v.t['+fPCTU'])
                            })
                        ]
                    })
                ]
            }),
            (0, o.jsx)('div', {
                className: N.closeButtonContainer,
                children: (0, o.jsx)(i.Button, {
                    onClick: S,
                    look: i.ButtonLooks.OUTLINED,
                    color: i.ButtonColors.PRIMARY,
                    children: v.intl.string(v.t.cpT0Cg)
                })
            })
        ]
    });
};
