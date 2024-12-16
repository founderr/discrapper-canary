n.r(t), n(47120), n(653041);
var o = n(200651),
    r = n(192379),
    a = n(752877),
    i = n(481060),
    s = n(442837),
    l = n(607070),
    c = n(313201),
    u = n(863249),
    d = n(944163),
    m = n(246364),
    f = n(983736),
    h = n(937111),
    p = n(200305),
    x = n(271383),
    b = n(594174),
    _ = n(970606),
    C = n(900681),
    g = n(308083),
    N = n(388032),
    v = n(687651);
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
    let { children: t, containerRef: n, faderSize: a, faderEdgeThreshold: s } = e,
        l = r.useRef(null),
        [c, u] = r.useState(0),
        [d, m] = r.useState(0),
        [f, h] = r.useState(0),
        p = r.useCallback(() => {
            null != l.current && (u(l.current.getDistanceFromTop()), m(l.current.getDistanceFromBottom()), h(l.current.getScrollerState().offsetHeight));
        }, []);
    r.useEffect(() => {
        if ((p(), null == n.current)) return;
        let e = new ResizeObserver(() => {
            p();
        });
        return (
            e.observe(n.current),
            () => {
                e.disconnect();
            }
        );
    }, [l, n, p]);
    let x = r.useMemo(() => {
        if (0 === c && 0 === d) return {};
        let e = [];
        if ((e.push('to bottom'), c > 0)) {
            let t = s > 0 ? 1 - Math.min(s, c) / s : 1;
            for (let n = 0; n < E.length; n++) {
                let { position: o, alpha: r } = E[n],
                    i = (o * a).toFixed(2);
                e.push('hsla(0, 0%, 0%, '.concat(t + r * (1 - t), ') ').concat(i, 'px'));
            }
        }
        if (d > 0) {
            let t = f - a,
                n = s > 0 ? 1 - Math.min(s, d) / s : 1;
            for (let o = E.length - 1; o >= 0; o--) {
                let { position: r, alpha: i } = E[o],
                    s = (t + (1 - r) * a).toFixed(2);
                e.push('hsla(0, 0%, 0%, '.concat(n + i * (1 - n), ') ').concat(s, 'px'));
            }
        }
        return { maskImage: 'linear-gradient('.concat(e.join(','), ')') };
    }, [d, c, s, a, f]);
    return (0, o.jsx)(i.AdvancedScrollerNone, {
        ref: l,
        style: x,
        className: v.scroller,
        onScroll: p,
        children: t
    });
}
function F(e) {
    let { guildId: t, formState: n, updateFormState: r } = e;
    return (0, o.jsxs)('div', {
        className: v.verificationForm,
        children: [
            (0, o.jsx)(i.Heading, {
                variant: 'heading-xxl/normal',
                color: 'header-primary',
                children: N.intl.string(N.t.xsSj6e)
            }),
            (0, o.jsx)(i.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                children: N.intl.string(N.t['1VDDMT'])
            }),
            (0, o.jsx)(p.Y, {
                guildId: t,
                formState: n,
                updateFormState: r,
                disableVerification: !0
            })
        ]
    });
}
t.default = function (e) {
    var t, n, p;
    let { clan: E, prioritizedGameIds: k, position: B, transitionState: R, onClose: S } = e,
        P = (0, c.Dt)(),
        q = (0, s.e7)([d.Z], () => d.Z.get(E.id)),
        [O, w] = r.useState(null !== (n = null == q ? void 0 : q.formFields) && void 0 !== n ? n : []),
        [M, A] = r.useState(!1),
        [D, H] = r.useState(!1),
        [z, Z] = r.useState(!1),
        W = (0, s.e7)([b.default], () => b.default.getCurrentUser()),
        Y = (0, s.e7)([x.ZP], () => x.ZP.isMember(E.id, null == W ? void 0 : W.id), [E, W]),
        U = (0, s.e7)([h.Z], () => {
            var e;
            return (null === (e = h.Z.getRequest(E.id)) || void 0 === e ? void 0 : e.applicationStatus) === m.wB.SUBMITTED;
        }),
        [V, K] = r.useState(''),
        L = r.useRef(() =>
            (0, _._v)({
                guildId: E.id,
                position: B
            })
        );
    r.useEffect(
        () => (
            u.ZP.fetchVerificationForm(E.id),
            () => {
                L.current();
            }
        ),
        [E.id, L]
    ),
        r.useEffect(() => {
            null != q && w(q.formFields);
        }, [q]);
    let G = r.useCallback(
            (e) => {
                !M &&
                    (A(!0),
                    (L.current = () => !1),
                    (0, _.r)({
                        guildId: E.id,
                        position: B
                    })),
                    w(e);
            },
            [w, M, A, E.id, B]
        ),
        X = r.useCallback(
            async (e) => {
                await u.ZP.submitVerificationForm(E.id, e, u.q0);
            },
            [E.id]
        ),
        Q = r.useCallback(async () => {
            try {
                H(!0);
                let e = Date.now();
                await X({
                    ...(null != q ? q : d.t),
                    formFields: O
                });
                let t = () => {
                        Z(!0), setTimeout(S, 1300), H(!1), setTimeout(u.xo, y);
                    },
                    n = Date.now();
                n - e > 1000 ? t() : setTimeout(t, 1000 - (n - e));
            } catch (e) {
                K(null == e ? void 0 : e.message), H(!1);
            }
        }, [X, S, q, O]),
        J = O.some((e) => !(0, f.OA)(e)),
        $ = (null !== (p = null == q ? void 0 : null === (t = q.guild) || void 0 === t ? void 0 : t.approximate_member_count) && void 0 !== p ? p : 0) >= g.Du,
        ee = (0, s.e7)([l.Z], () => l.Z.useReducedMotion),
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
                config: j,
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
            config: I
        }),
        eo = r.useRef(null);
    return (0, o.jsxs)(i.ModalRoot, {
        transitionState: R,
        'aria-labelledby': P,
        size: i.ModalSize.DYNAMIC,
        className: v.container,
        hideShadow: !0,
        children: [
            (0, o.jsxs)(a.animated.div, {
                className: v.body,
                style: et,
                children: [
                    (0, o.jsx)('div', {
                        className: v.applicationContainer,
                        ref: eo,
                        children: (0, o.jsx)(T, {
                            containerRef: eo,
                            faderSize: 180,
                            faderEdgeThreshold: 48,
                            children: (0, o.jsx)(F, {
                                guildId: E.id,
                                formState: O,
                                updateFormState: G
                            })
                        })
                    }),
                    (0, o.jsx)('div', { className: v.verticalRule }),
                    (0, o.jsxs)('div', {
                        className: v.clanContainer,
                        children: [
                            (0, o.jsx)(C.xV, {
                                clan: E,
                                className: v.profileCard,
                                prioritizedGameIds: k,
                                expanded: !0,
                                isMember: Y,
                                hasPendingJoinRequest: U,
                                atMaxMemberCapacity: $
                            }),
                            (0, o.jsxs)('div', {
                                className: v.applyButtonContainer,
                                children: [
                                    (0, o.jsxs)(i.Button, {
                                        type: 'submit',
                                        onClick: z ? void 0 : Q,
                                        submitting: D,
                                        fullWidth: !0,
                                        disabled: J || null == q,
                                        innerClassName: v.applyButtonInner,
                                        children: [
                                            $ &&
                                                (0, o.jsx)(i.WarningIcon, {
                                                    size: 'custom',
                                                    color: 'white',
                                                    width: 20,
                                                    height: 20
                                                }),
                                            !z && N.intl.string(N.t['1Qm829']),
                                            en(
                                                (e, t) =>
                                                    t &&
                                                    (0, o.jsx)(a.animated.div, {
                                                        style: e,
                                                        className: v.successCheckmark,
                                                        children: (0, o.jsx)(i.CheckmarkLargeBoldIcon, {
                                                            size: 'sm',
                                                            color: 'currentColor',
                                                            'aria-hidden': !0
                                                        })
                                                    })
                                            )
                                        ]
                                    }),
                                    '' !== V &&
                                        (0, o.jsx)(i.Text, {
                                            variant: 'text-sm/normal',
                                            color: 'text-danger',
                                            children: V
                                        })
                                ]
                            }),
                            $ &&
                                (0, o.jsxs)(o.Fragment, {
                                    children: [
                                        (0, o.jsx)(i.Text, {
                                            variant: 'text-xs/medium',
                                            color: 'text-warning',
                                            className: v.maxCapacityText,
                                            children: N.intl.string(N.t.GNPXdX)
                                        }),
                                        (0, o.jsx)('hr', { className: v.separator })
                                    ]
                                }),
                            (0, o.jsx)(i.Text, {
                                variant: 'text-xs/medium',
                                color: 'text-muted',
                                className: v.noticeText,
                                children: N.intl.string(N.t.FwXzw8)
                            }),
                            (0, o.jsx)(i.Text, {
                                variant: 'text-xs/medium',
                                color: 'text-muted',
                                className: v.noticeText,
                                children: N.intl.string(N.t['+fPCTU'])
                            })
                        ]
                    })
                ]
            }),
            (0, o.jsx)('div', {
                className: v.closeButtonContainer,
                children: (0, o.jsx)(i.Button, {
                    onClick: S,
                    look: i.ButtonLooks.OUTLINED,
                    color: i.ButtonColors.PRIMARY,
                    children: N.intl.string(N.t.cpT0Cg)
                })
            })
        ]
    });
};
