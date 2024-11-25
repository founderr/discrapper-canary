n.r(t), n(47120), n(653041);
var o = n(200651),
    r = n(192379),
    i = n(752877),
    a = n(481060),
    l = n(442837),
    s = n(607070),
    c = n(313201),
    u = n(863249),
    d = n(944163),
    m = n(246364),
    f = n(983736),
    p = n(937111),
    h = n(200305),
    x = n(271383),
    b = n(594174),
    _ = n(970606),
    C = n(900681),
    g = n(308083),
    v = n(388032),
    N = n(40780);
let j = {
        mass: 1,
        tension: 600,
        friction: 60
    },
    I = {
        mass: 1,
        tension: 300,
        friction: 25
    },
    y = 2300,
    E = [
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
function T(e) {
    let { children: t, containerRef: n, faderSize: i, faderEdgeThreshold: l } = e,
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
            for (let n = 0; n < E.length; n++) {
                let { position: o, alpha: r } = E[n],
                    a = (o * i).toFixed(2);
                e.push('hsla(0, 0%, 0%, '.concat(t + r * (1 - t), ') ').concat(a, 'px'));
            }
        }
        if (d > 0) {
            let t = f - i,
                n = l > 0 ? 1 - Math.min(l, d) / l : 1;
            for (let o = E.length - 1; o >= 0; o--) {
                let { position: r, alpha: a } = E[o],
                    l = (t + (1 - r) * i).toFixed(2);
                e.push('hsla(0, 0%, 0%, '.concat(n + a * (1 - n), ') ').concat(l, 'px'));
            }
        }
        return { maskImage: 'linear-gradient('.concat(e.join(','), ')') };
    }, [d, c, l, i, f]);
    return (0, o.jsx)(a.AdvancedScrollerNone, {
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
            (0, o.jsx)(a.Heading, {
                variant: 'heading-xxl/normal',
                color: 'header-primary',
                children: v.intl.string(v.t.xsSj6e)
            }),
            (0, o.jsx)(a.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                children: v.intl.string(v.t['1VDDMT'])
            }),
            (0, o.jsx)(h.Y, {
                guildId: t,
                formState: n,
                updateFormState: r,
                disableVerification: !0
            })
        ]
    });
}
t.default = function (e) {
    var t, n, h;
    let { clan: E, prioritizedGameIds: R, position: k, transitionState: B, onClose: S } = e,
        P = (0, c.Dt)(),
        O = (0, l.e7)([d.Z], () => d.Z.get(E.id)),
        [A, q] = r.useState(null !== (n = null == O ? void 0 : O.formFields) && void 0 !== n ? n : []),
        [M, w] = r.useState(!1),
        [D, H] = r.useState(!1),
        [z, Z] = r.useState(!1),
        W = (0, l.e7)([b.default], () => b.default.getCurrentUser()),
        U = (0, l.e7)([x.ZP], () => x.ZP.isMember(E.id, null == W ? void 0 : W.id), [E, W]),
        Y = (0, l.e7)([p.Z], () => {
            var e;
            return (null === (e = p.Z.getRequest(E.id)) || void 0 === e ? void 0 : e.applicationStatus) === m.wB.SUBMITTED;
        }),
        [V, L] = r.useState(''),
        K = r.useRef(() =>
            (0, _._v)({
                guildId: E.id,
                position: k
            })
        );
    r.useEffect(
        () => (
            u.ZP.fetchVerificationForm(E.id),
            () => {
                K.current();
            }
        ),
        [E.id, K]
    ),
        r.useEffect(() => {
            null != O && q(O.formFields);
        }, [O]);
    let Q = r.useCallback(
            (e) => {
                !M &&
                    (w(!0),
                    (K.current = () => !1),
                    (0, _.r)({
                        guildId: E.id,
                        position: k
                    })),
                    q(e);
            },
            [q, M, w, E.id, k]
        ),
        G = r.useCallback(
            async (e) => {
                await u.ZP.submitVerificationForm(E.id, e, u.q0);
            },
            [E.id]
        ),
        X = r.useCallback(async () => {
            try {
                H(!0);
                let e = Date.now();
                await G({
                    ...(null != O ? O : d.t),
                    formFields: A
                });
                let t = () => {
                        Z(!0), setTimeout(S, 1300), H(!1), setTimeout(u.xo, y);
                    },
                    n = Date.now();
                n - e > 1000 ? t() : setTimeout(t, 1000 - (n - e));
            } catch (e) {
                L(null == e ? void 0 : e.message), H(!1);
            }
        }, [G, S, O, A]),
        J = A.some((e) => !(0, f.OA)(e)),
        $ = (null !== (h = null == O ? void 0 : null === (t = O.guild) || void 0 === t ? void 0 : t.approximate_member_count) && void 0 !== h ? h : 0) >= g.Du,
        ee = (0, l.e7)([s.Z], () => s.Z.useReducedMotion),
        et = (0, a.useSpring)(
            {
                from: {
                    opacity: 0,
                    transform: 'translateY('.concat(ee ? 0 : 40, 'px)')
                },
                to: {
                    opacity: 1,
                    transform: 'translateY(0px)'
                },
                config: j,
                delay: 500
            },
            'animate-always'
        ),
        en = (0, a.useTransition)(z, {
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
            config: I
        }),
        eo = r.useRef(null);
    return (0, o.jsxs)(a.ModalRoot, {
        transitionState: B,
        'aria-labelledby': P,
        size: a.ModalSize.DYNAMIC,
        className: N.container,
        hideShadow: !0,
        children: [
            (0, o.jsxs)(i.animated.div, {
                className: N.body,
                style: et,
                children: [
                    (0, o.jsx)('div', {
                        className: N.applicationContainer,
                        ref: eo,
                        children: (0, o.jsx)(T, {
                            containerRef: eo,
                            faderSize: 180,
                            faderEdgeThreshold: 48,
                            children: (0, o.jsx)(F, {
                                guildId: E.id,
                                formState: A,
                                updateFormState: Q
                            })
                        })
                    }),
                    (0, o.jsx)('div', { className: N.verticalRule }),
                    (0, o.jsxs)('div', {
                        className: N.clanContainer,
                        children: [
                            (0, o.jsx)(C.xV, {
                                clan: E,
                                className: N.profileCard,
                                prioritizedGameIds: R,
                                expanded: !0,
                                isMember: U,
                                hasPendingJoinRequest: Y,
                                atMaxMemberCapacity: $
                            }),
                            (0, o.jsxs)('div', {
                                className: N.applyButtonContainer,
                                children: [
                                    (0, o.jsxs)(a.Button, {
                                        type: 'submit',
                                        onClick: z ? void 0 : X,
                                        submitting: D,
                                        fullWidth: !0,
                                        disabled: J || null == O,
                                        innerClassName: N.applyButtonInner,
                                        children: [
                                            $ &&
                                                (0, o.jsx)(a.WarningIcon, {
                                                    size: 'custom',
                                                    color: 'white',
                                                    width: 20,
                                                    height: 20
                                                }),
                                            !z && v.intl.string(v.t['1Qm829']),
                                            en(
                                                (e, t) =>
                                                    t &&
                                                    (0, o.jsx)(i.animated.div, {
                                                        style: e,
                                                        className: N.successCheckmark,
                                                        children: (0, o.jsx)(a.CheckmarkLargeBoldIcon, {
                                                            size: 'sm',
                                                            color: 'currentColor',
                                                            'aria-hidden': !0
                                                        })
                                                    })
                                            )
                                        ]
                                    }),
                                    '' !== V &&
                                        (0, o.jsx)(a.Text, {
                                            variant: 'text-sm/normal',
                                            color: 'text-danger',
                                            children: V
                                        })
                                ]
                            }),
                            $ &&
                                (0, o.jsxs)(o.Fragment, {
                                    children: [
                                        (0, o.jsx)(a.Text, {
                                            variant: 'text-xs/medium',
                                            color: 'text-warning',
                                            className: N.maxCapacityText,
                                            children: v.intl.string(v.t.GNPXdX)
                                        }),
                                        (0, o.jsx)('hr', { className: N.separator })
                                    ]
                                }),
                            (0, o.jsx)(a.Text, {
                                variant: 'text-xs/medium',
                                color: 'text-muted',
                                className: N.noticeText,
                                children: v.intl.string(v.t.FwXzw8)
                            }),
                            (0, o.jsx)(a.Text, {
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
                children: (0, o.jsx)(a.Button, {
                    onClick: S,
                    look: a.ButtonLooks.OUTLINED,
                    color: a.ButtonColors.PRIMARY,
                    children: v.intl.string(v.t.cpT0Cg)
                })
            })
        ]
    });
};
