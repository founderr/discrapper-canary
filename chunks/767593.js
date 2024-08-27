t.r(n), t(47120), t(653041);
var o = t(735250),
    r = t(470079),
    a = t(567526),
    i = t(481060),
    s = t(442837),
    l = t(607070),
    c = t(970606),
    u = t(313201),
    d = t(863249),
    m = t(944163),
    f = t(246364),
    p = t(983736),
    h = t(937111),
    _ = t(200305),
    x = t(271383),
    b = t(594174),
    C = t(231467),
    I = t(308083),
    N = t(689938),
    E = t(133072);
let g = {
        mass: 1,
        tension: 600,
        friction: 60
    },
    v = [
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
    let { children: n, containerRef: t, faderSize: a, faderEdgeThreshold: s } = e,
        l = r.useRef(null),
        [c, u] = r.useState(0),
        [d, m] = r.useState(0),
        [f, p] = r.useState(0),
        h = r.useCallback(() => {
            null != l.current && (u(l.current.getDistanceFromTop()), m(l.current.getDistanceFromBottom()), p(l.current.getScrollerState().offsetHeight));
        }, []);
    r.useEffect(() => {
        if ((h(), null == t.current)) return;
        let e = new ResizeObserver(() => {
            h();
        });
        return (
            e.observe(t.current),
            () => {
                e.disconnect();
            }
        );
    }, [l, t, h]);
    let _ = r.useMemo(() => {
        if (0 === c && 0 === d) return {};
        let e = [];
        if ((e.push('to bottom'), c > 0)) {
            let n = s > 0 ? 1 - Math.min(s, c) / s : 1;
            for (let t = 0; t < v.length; t++) {
                let { position: o, alpha: r } = v[t],
                    i = (o * a).toFixed(2);
                e.push('hsla(0, 0%, 0%, '.concat(n + r * (1 - n), ') ').concat(i, 'px'));
            }
        }
        if (d > 0) {
            let n = f - a,
                t = s > 0 ? 1 - Math.min(s, d) / s : 1;
            for (let o = v.length - 1; o >= 0; o--) {
                let { position: r, alpha: i } = v[o],
                    s = (n + (1 - r) * a).toFixed(2);
                e.push('hsla(0, 0%, 0%, '.concat(t + i * (1 - t), ') ').concat(s, 'px'));
            }
        }
        return { maskImage: 'linear-gradient('.concat(e.join(','), ')') };
    }, [d, c, s, a, f]);
    return (0, o.jsx)(i.AdvancedScrollerNone, {
        ref: l,
        style: _,
        className: E.scroller,
        onScroll: h,
        children: n
    });
}
function T(e) {
    let { guildId: n, formState: t, updateFormState: r } = e;
    return (0, o.jsxs)('div', {
        className: E.verificationForm,
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
                guildId: n,
                formState: t,
                updateFormState: r,
                disableVerification: !0
            })
        ]
    });
}
n.default = function (e) {
    var n, t, _;
    let { clan: v, prioritizedGameIds: j, position: y, transitionState: F, onClose: B } = e,
        S = (0, u.Dt)(),
        M = (0, s.e7)([m.Z], () => m.Z.get(v.id)),
        [A, O] = r.useState(null !== (t = null == M ? void 0 : M.formFields) && void 0 !== t ? t : []),
        [k, P] = r.useState(!1),
        q = (0, s.e7)([b.default], () => b.default.getCurrentUser()),
        Z = (0, s.e7)([x.ZP], () => x.ZP.isMember(v.id, null == q ? void 0 : q.id), [v, q]),
        w = (0, s.e7)([h.Z], () => {
            var e;
            return (null === (e = h.Z.getRequest(v.id)) || void 0 === e ? void 0 : e.applicationStatus) === f.wB.SUBMITTED;
        }),
        [D, L] = r.useState(''),
        H = r.useRef(() =>
            (0, c._v)({
                guildId: v.id,
                position: y
            })
        );
    r.useEffect(
        () => (
            d.Z.fetchVerificationForm(v.id),
            () => {
                H.current();
            }
        ),
        [v.id, H]
    ),
        r.useEffect(() => {
            null != M && O(M.formFields);
        }, [M]);
    let V = r.useCallback(
            (e) => {
                !k &&
                    (P(!0),
                    (H.current = () => !1),
                    (0, c.r)({
                        guildId: v.id,
                        position: y
                    })),
                    O(e);
            },
            [O, k, P, v.id, y]
        ),
        Y = r.useCallback(
            async (e) => {
                await d.Z.submitVerificationForm(v.id, e);
            },
            [v.id]
        ),
        U = r.useCallback(async () => {
            try {
                await Y({
                    ...(null != M ? M : m.t),
                    formFields: A
                }),
                    B();
            } catch (e) {
                L(null == e ? void 0 : e.message);
            }
        }, [Y, B, M, A]),
        z = A.some((e) => !(0, p.OA)(e)),
        G = (null !== (_ = null == M ? void 0 : null === (n = M.guild) || void 0 === n ? void 0 : n.approximate_member_count) && void 0 !== _ ? _ : 0) >= I.Du,
        K = (0, s.e7)([l.Z], () => l.Z.useReducedMotion),
        Q = (0, i.useSpring)(
            {
                from: {
                    opacity: 0,
                    transform: 'translateY('.concat(K ? 0 : 40, 'px)')
                },
                to: {
                    opacity: 1,
                    transform: 'translateY(0px)'
                },
                config: g,
                delay: 500
            },
            'animate-always'
        ),
        W = r.useRef(null);
    return (0, o.jsxs)(i.ModalRoot, {
        transitionState: F,
        'aria-labelledby': S,
        size: i.ModalSize.DYNAMIC,
        className: E.container,
        hideShadow: !0,
        children: [
            (0, o.jsxs)(a.animated.div, {
                className: E.body,
                style: Q,
                children: [
                    (0, o.jsx)('div', {
                        className: E.applicationContainer,
                        ref: W,
                        children: (0, o.jsx)(R, {
                            containerRef: W,
                            faderSize: 180,
                            faderEdgeThreshold: 48,
                            children: (0, o.jsx)(T, {
                                guildId: v.id,
                                formState: A,
                                updateFormState: V
                            })
                        })
                    }),
                    (0, o.jsx)('div', { className: E.verticalRule }),
                    (0, o.jsxs)('div', {
                        className: E.clanContainer,
                        children: [
                            (0, o.jsx)(C.xV, {
                                clan: v,
                                className: E.profileCard,
                                prioritizedGameIds: j,
                                expanded: !0,
                                isMember: Z,
                                hasPendingJoinRequest: w,
                                atMaxMemberCapacity: G,
                                showFavoriteButton: !0
                            }),
                            (0, o.jsxs)('div', {
                                className: E.applyButtonContainer,
                                children: [
                                    (0, o.jsxs)(i.Button, {
                                        type: 'submit',
                                        onClick: U,
                                        fullWidth: !0,
                                        disabled: z || null == M,
                                        innerClassName: E.applyButtonInner,
                                        children: [
                                            G &&
                                                (0, o.jsx)(i.WarningIcon, {
                                                    size: 'custom',
                                                    color: 'white',
                                                    width: 20,
                                                    height: 20
                                                }),
                                            N.Z.Messages.APPLY
                                        ]
                                    }),
                                    '' !== D &&
                                        (0, o.jsx)(i.Text, {
                                            variant: 'text-sm/normal',
                                            color: 'text-danger',
                                            children: D
                                        })
                                ]
                            }),
                            G &&
                                (0, o.jsxs)(o.Fragment, {
                                    children: [
                                        (0, o.jsx)(i.Text, {
                                            variant: 'text-xs/medium',
                                            color: 'text-warning',
                                            className: E.maxCapacityText,
                                            children: N.Z.Messages.CLAN_DISCOVERY_APPLICATION_MAX_MEMBERS
                                        }),
                                        (0, o.jsx)('hr', { className: E.separator })
                                    ]
                                }),
                            (0, o.jsx)(i.Text, {
                                variant: 'text-xs/medium',
                                color: 'text-muted',
                                className: E.noticeText,
                                children: N.Z.Messages.CLAN_APPLICATION_GDM_CONSENT
                            }),
                            (0, o.jsx)(i.Text, {
                                variant: 'text-xs/medium',
                                color: 'text-muted',
                                className: E.noticeText,
                                children: N.Z.Messages.MEMBER_VERIFICATION_WARNING
                            })
                        ]
                    })
                ]
            }),
            (0, o.jsx)('div', {
                className: E.closeButtonContainer,
                children: (0, o.jsx)(i.Button, {
                    onClick: B,
                    look: i.ButtonLooks.OUTLINED,
                    color: i.ButtonColors.PRIMARY,
                    children: N.Z.Messages.CLOSE
                })
            })
        ]
    });
};
