n.r(t), n(47120), n(653041);
var o = n(735250),
    r = n(470079),
    a = n(567526),
    i = n(481060),
    s = n(442837),
    l = n(607070),
    c = n(970606),
    u = n(313201),
    d = n(863249),
    m = n(944163),
    f = n(246364),
    p = n(983736),
    h = n(937111),
    _ = n(200305),
    x = n(271383),
    b = n(594174),
    C = n(231467),
    I = n(308083),
    N = n(689938),
    g = n(133072);
let E = {
        mass: 1,
        tension: 600,
        friction: 60
    },
    v = {
        mass: 1,
        tension: 300,
        friction: 25
    },
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
function R(e) {
    let { children: t, containerRef: n, faderSize: a, faderEdgeThreshold: s } = e,
        l = r.useRef(null),
        [c, u] = r.useState(0),
        [d, m] = r.useState(0),
        [f, p] = r.useState(0),
        h = r.useCallback(() => {
            null != l.current && (u(l.current.getDistanceFromTop()), m(l.current.getDistanceFromBottom()), p(l.current.getScrollerState().offsetHeight));
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
    }, [l, n, h]);
    let _ = r.useMemo(() => {
        if (0 === c && 0 === d) return {};
        let e = [];
        if ((e.push('to bottom'), c > 0)) {
            let t = s > 0 ? 1 - Math.min(s, c) / s : 1;
            for (let n = 0; n < T.length; n++) {
                let { position: o, alpha: r } = T[n],
                    i = (o * a).toFixed(2);
                e.push('hsla(0, 0%, 0%, '.concat(t + r * (1 - t), ') ').concat(i, 'px'));
            }
        }
        if (d > 0) {
            let t = f - a,
                n = s > 0 ? 1 - Math.min(s, d) / s : 1;
            for (let o = T.length - 1; o >= 0; o--) {
                let { position: r, alpha: i } = T[o],
                    s = (t + (1 - r) * a).toFixed(2);
                e.push('hsla(0, 0%, 0%, '.concat(n + i * (1 - n), ') ').concat(s, 'px'));
            }
        }
        return { maskImage: 'linear-gradient('.concat(e.join(','), ')') };
    }, [d, c, s, a, f]);
    return (0, o.jsx)(i.AdvancedScrollerNone, {
        ref: l,
        style: _,
        className: g.scroller,
        onScroll: h,
        children: t
    });
}
function j(e) {
    let { guildId: t, formState: n, updateFormState: r } = e;
    return (0, o.jsxs)('div', {
        className: g.verificationForm,
        children: [
            (0, o.jsx)(i.Heading, {
                variant: 'heading-xxl/normal',
                color: 'header-primary',
                children: N.Z.Messages.CLAN_DISCOVERY_PROFILE_TITLE
            }),
            (0, o.jsx)(i.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                children: N.Z.Messages.CLAN_DISCOVERY_PROFILE_SUBTITLE
            }),
            (0, o.jsx)(_.Y, {
                guildId: t,
                formState: n,
                updateFormState: r,
                disableVerification: !0
            })
        ]
    });
}
t.default = function (e) {
    var t, n, _;
    let { clan: T, prioritizedGameIds: y, position: F, transitionState: B, onClose: S } = e,
        k = (0, u.Dt)(),
        M = (0, s.e7)([m.Z], () => m.Z.get(T.id)),
        [A, O] = r.useState(null !== (n = null == M ? void 0 : M.formFields) && void 0 !== n ? n : []),
        [P, q] = r.useState(!1),
        [w, D] = r.useState(!1),
        [L, Z] = r.useState(!1),
        H = (0, s.e7)([b.default], () => b.default.getCurrentUser()),
        V = (0, s.e7)([x.ZP], () => x.ZP.isMember(T.id, null == H ? void 0 : H.id), [T, H]),
        Y = (0, s.e7)([h.Z], () => {
            var e;
            return (null === (e = h.Z.getRequest(T.id)) || void 0 === e ? void 0 : e.applicationStatus) === f.wB.SUBMITTED;
        }),
        [U, z] = r.useState(''),
        G = r.useRef(() =>
            (0, c._v)({
                guildId: T.id,
                position: F
            })
        );
    r.useEffect(
        () => (
            d.ZP.fetchVerificationForm(T.id),
            () => {
                G.current();
            }
        ),
        [T.id, G]
    ),
        r.useEffect(() => {
            null != M && O(M.formFields);
        }, [M]);
    let K = r.useCallback(
            (e) => {
                !P &&
                    (q(!0),
                    (G.current = () => !1),
                    (0, c.r)({
                        guildId: T.id,
                        position: F
                    })),
                    O(e);
            },
            [O, P, q, T.id, F]
        ),
        Q = r.useCallback(
            async (e) => {
                await d.ZP.submitVerificationForm(T.id, e, d.q0);
            },
            [T.id]
        ),
        W = r.useCallback(async () => {
            try {
                D(!0);
                let e = Date.now();
                await Q({
                    ...(null != M ? M : m.t),
                    formFields: A
                });
                let t = () => {
                        Z(!0), setTimeout(S, 2000), D(!1), setTimeout(d.xo, 3000);
                    },
                    n = Date.now();
                n - e > 1000 ? t() : setTimeout(t, 1000 - (n - e));
            } catch (e) {
                z(null == e ? void 0 : e.message), D(!1);
            }
        }, [Q, S, M, A]),
        J = A.some((e) => !(0, p.OA)(e)),
        X = (null !== (_ = null == M ? void 0 : null === (t = M.guild) || void 0 === t ? void 0 : t.approximate_member_count) && void 0 !== _ ? _ : 0) >= I.Du,
        $ = (0, s.e7)([l.Z], () => l.Z.useReducedMotion),
        ee = (0, i.useSpring)(
            {
                from: {
                    opacity: 0,
                    transform: 'translateY('.concat($ ? 0 : 40, 'px)')
                },
                to: {
                    opacity: 1,
                    transform: 'translateY(0px)'
                },
                config: E,
                delay: 500
            },
            'animate-always'
        ),
        et = (0, i.useTransition)(L, {
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
            config: v
        }),
        en = r.useRef(null);
    return (0, o.jsxs)(i.ModalRoot, {
        transitionState: B,
        'aria-labelledby': k,
        size: i.ModalSize.DYNAMIC,
        className: g.container,
        hideShadow: !0,
        children: [
            (0, o.jsxs)(a.animated.div, {
                className: g.body,
                style: ee,
                children: [
                    (0, o.jsx)('div', {
                        className: g.applicationContainer,
                        ref: en,
                        children: (0, o.jsx)(R, {
                            containerRef: en,
                            faderSize: 180,
                            faderEdgeThreshold: 48,
                            children: (0, o.jsx)(j, {
                                guildId: T.id,
                                formState: A,
                                updateFormState: K
                            })
                        })
                    }),
                    (0, o.jsx)('div', { className: g.verticalRule }),
                    (0, o.jsxs)('div', {
                        className: g.clanContainer,
                        children: [
                            (0, o.jsx)(C.xV, {
                                clan: T,
                                className: g.profileCard,
                                prioritizedGameIds: y,
                                expanded: !0,
                                isMember: V,
                                hasPendingJoinRequest: Y,
                                atMaxMemberCapacity: X,
                                showFavoriteButton: !0
                            }),
                            (0, o.jsxs)('div', {
                                className: g.applyButtonContainer,
                                children: [
                                    (0, o.jsxs)(i.Button, {
                                        type: 'submit',
                                        onClick: L ? void 0 : W,
                                        submitting: w,
                                        fullWidth: !0,
                                        disabled: J || null == M,
                                        innerClassName: g.applyButtonInner,
                                        children: [
                                            X &&
                                                (0, o.jsx)(i.WarningIcon, {
                                                    size: 'custom',
                                                    color: 'white',
                                                    width: 20,
                                                    height: 20
                                                }),
                                            !L && N.Z.Messages.APPLY,
                                            et(
                                                (e, t) =>
                                                    t &&
                                                    (0, o.jsx)(a.animated.div, {
                                                        style: e,
                                                        className: g.successCheckmark,
                                                        children: (0, o.jsx)(i.CheckmarkLargeBoldIcon, {
                                                            size: 'sm',
                                                            color: 'currentColor',
                                                            'aria-hidden': !0
                                                        })
                                                    })
                                            )
                                        ]
                                    }),
                                    '' !== U &&
                                        (0, o.jsx)(i.Text, {
                                            variant: 'text-sm/normal',
                                            color: 'text-danger',
                                            children: U
                                        })
                                ]
                            }),
                            X &&
                                (0, o.jsxs)(o.Fragment, {
                                    children: [
                                        (0, o.jsx)(i.Text, {
                                            variant: 'text-xs/medium',
                                            color: 'text-warning',
                                            className: g.maxCapacityText,
                                            children: N.Z.Messages.CLAN_DISCOVERY_APPLICATION_MAX_MEMBERS
                                        }),
                                        (0, o.jsx)('hr', { className: g.separator })
                                    ]
                                }),
                            (0, o.jsx)(i.Text, {
                                variant: 'text-xs/medium',
                                color: 'text-muted',
                                className: g.noticeText,
                                children: N.Z.Messages.CLAN_APPLICATION_GDM_CONSENT
                            }),
                            (0, o.jsx)(i.Text, {
                                variant: 'text-xs/medium',
                                color: 'text-muted',
                                className: g.noticeText,
                                children: N.Z.Messages.MEMBER_VERIFICATION_WARNING
                            })
                        ]
                    })
                ]
            }),
            (0, o.jsx)('div', {
                className: g.closeButtonContainer,
                children: (0, o.jsx)(i.Button, {
                    onClick: S,
                    look: i.ButtonLooks.OUTLINED,
                    color: i.ButtonColors.PRIMARY,
                    children: N.Z.Messages.CLOSE
                })
            })
        ]
    });
};
