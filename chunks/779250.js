t.r(n),
    t.d(n, {
        default: function () {
            return V;
        }
    }),
    t(47120);
var l,
    i,
    r = t(200651),
    a = t(192379),
    s = t(392711),
    o = t(442837),
    c = t(481060),
    d = t(447543),
    u = t(607070),
    m = t(745510),
    x = t(96698),
    h = t(313201),
    g = t(433775),
    v = t(984933),
    f = t(430824),
    j = t(971130),
    N = t(981888),
    I = t(924301),
    p = t(482241),
    C = t(951539),
    E = t(545165),
    S = t(236373),
    T = t(230900),
    Z = t(854698),
    y = t(334877),
    b = t(785468),
    _ = t(377329),
    R = t(311166),
    A = t(744782),
    k = t(129526),
    L = t(765305),
    D = t(981631),
    z = t(388032),
    B = t(834635);
let { INVITE_OPTIONS_7_DAYS: M, INVITE_OPTIONS_UNLIMITED: G } = j.ZP;
function P(e) {
    let { modal: n } = e,
        { createMultipleConfetti: t } = a.useContext(m.h);
    return (
        a.useEffect(() => {
            let e = null == n ? void 0 : n.getScrollerNode();
            if (null == e) return;
            let l = e.getBoundingClientRect();
            t(
                {
                    position: {
                        type: 'static-random',
                        minValue: {
                            x: l.left - 100,
                            y: l.top - 100
                        },
                        maxValue: {
                            x: l.left + 100,
                            y: l.top + 100
                        }
                    },
                    velocity: {
                        type: 'static-random',
                        minValue: {
                            x: -20,
                            y: -20
                        },
                        maxValue: {
                            x: -60,
                            y: -60
                        }
                    }
                },
                80
            ),
                t(
                    {
                        position: {
                            type: 'static-random',
                            minValue: {
                                x: l.right - 100,
                                y: l.top - 100
                            },
                            maxValue: {
                                x: l.right + 100,
                                y: l.top + 100
                            }
                        },
                        velocity: {
                            type: 'static-random',
                            minValue: {
                                x: 20,
                                y: -20
                            },
                            maxValue: {
                                x: 60,
                                y: -60
                            }
                        }
                    },
                    80
                );
        }, [t, n]),
        null
    );
}
function U(e) {
    let { guildId: n, guildEvent: t, guildEventId: i, editBroadcastInfoData: d, isEdit: m, formErrors: g, transitionState: v, loading: f, error: j, onChange: N, onSave: p, onClose: C, createdEvent: E } = e,
        S = (0, h.Dt)(),
        T = a.useRef(t),
        Z = !(0, s.isEqual)(T.current, t),
        k = a.useMemo(
            () => [
                {
                    slideId: 0,
                    label: z.intl.string(z.t['56QlKS']),
                    valid: null == g.entity,
                    userErrorMessage: g.entity
                },
                {
                    slideId: 1,
                    label: z.intl.string(z.t['w5/ntb']),
                    valid: null == g.schedule && null == g.topic && (!m || Z),
                    userErrorMessage: g.schedule
                },
                {
                    slideId: 2,
                    label: z.intl.string(z.t['8aJzT0']),
                    valid: !0
                }
            ],
            [g, m, Z]
        ),
        L = Object.keys(l).length,
        D = (0, I.xt)(t),
        M = (e) => Math.max(0, Math.min(e, L - 1)),
        [G, U] = a.useState(D ? 1 : 0),
        [V, w] = a.useState(!1),
        F = a.useMemo(
            () =>
                k
                    .slice(0, G + 1)
                    .map((e) => e.valid)
                    .every(Boolean),
            [k, G]
        ),
        X = G >= k.length ? 3 : k[M(G)].slideId,
        O = 3 === X;
    (0, y.l)((e) => e.onUpdateCanCloseModal)(O);
    let W = (0, o.e7)([u.Z], () => u.Z.useReducedMotion),
        q = a.useRef(null),
        H = (e) => {
            w(!1), U(M(e));
        };
    a.useEffect(() => {
        null != E && H(3);
    }, [null == E ? void 0 : E.id, H]);
    let Y = () => {
            if (!!F) 2 === X ? p() : O ? C() : H(G + 1);
        },
        K = () => {
            H(G - 1);
        },
        J = z.intl.string(z.t.PDTjLC);
    return (
        2 === X && (J = m ? z.intl.string(z.t.e5VEcH) : z.intl.string(z.t['60lJ0N'])),
        (0, r.jsx)(r.Fragment, {
            children: (0, r.jsxs)(c.ModalRoot, {
                transitionState: v,
                'aria-labelledby': S,
                size: c.ModalSize.DYNAMIC,
                children: [
                    !W && O ? (0, r.jsx)(P, { modal: q.current }) : null,
                    (0, r.jsxs)(c.ModalContent, {
                        className: B.content,
                        scrollerRef: q,
                        children: [
                            !O &&
                                (0, r.jsx)(x.Z, {
                                    steps: k.map((e) => e.label),
                                    stepIndex: G,
                                    onClick: (e) => {
                                        e < G ? K() : e > G && Y();
                                    }
                                }),
                            (0, r.jsxs)(c.Slides, {
                                activeSlide: X,
                                width: 440,
                                onSlideReady: (e) => {
                                    w(e === X);
                                },
                                children: [
                                    (0, r.jsx)(c.Slide, {
                                        id: 0,
                                        children: (0, r.jsx)(b.Z, {
                                            guildId: n,
                                            guildEvent: t,
                                            validationErrorMessage: g.entity,
                                            isSlideReady: V,
                                            onChange: N
                                        })
                                    }),
                                    (0, r.jsx)(c.Slide, {
                                        id: 1,
                                        children: (0, r.jsx)(R.Z, {
                                            guildEvent: t,
                                            guildEventId: i,
                                            guildId: n,
                                            editBroadcastInfoData: d,
                                            onChange: N,
                                            error: j,
                                            validationErrorMessage: g.schedule,
                                            isSlideReady: V
                                        })
                                    }),
                                    (0, r.jsx)(c.Slide, {
                                        id: 2,
                                        children: (0, r.jsx)(_.Z, {
                                            guildId: n,
                                            guildEvent: t,
                                            guildEventId: i,
                                            error: j
                                        })
                                    }),
                                    (0, r.jsx)(c.Slide, {
                                        id: 3,
                                        children: (0, r.jsx)(A.Z, {
                                            onClose: C,
                                            event: E
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    !O &&
                        (0, r.jsxs)(c.ModalFooter, {
                            className: B.footer,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: B.inline,
                                    children: [
                                        (0, r.jsx)(c.Button, {
                                            color: c.Button.Colors.PRIMARY,
                                            onClick: C,
                                            children: z.intl.string(z.t['ETE/oK'])
                                        }),
                                        (0, r.jsx)(c.Button, {
                                            onClick: Y,
                                            disabled: !F,
                                            className: B.button,
                                            submitting: f,
                                            children: J
                                        })
                                    ]
                                }),
                                0 !== X &&
                                    (0, r.jsx)(c.Button, {
                                        look: c.Button.Looks.LINK,
                                        size: c.Button.Sizes.MIN,
                                        onClick: K,
                                        color: c.Button.Colors.LINK,
                                        children: z.intl.string(z.t['13/7kZ'])
                                    })
                            ]
                        })
                ]
            })
        })
    );
}
function V(e) {
    let { guildId: n, guildScheduledEventId: l, transitionState: i, onClose: s } = e,
        u = (0, o.e7)([f.Z], () => f.Z.getGuild(n)),
        m = (0, o.e7)([I.ZP], () => I.ZP.getGuildScheduledEvent(l), [l]),
        x = (0, o.e7)([v.ZP], () => v.ZP.getDefaultChannel(n), [n]),
        h = (0, S.j$)(m, x),
        [j, y] = a.useState(h),
        [b] = a.useState((0, S.Ql)(m)),
        [_, R] = a.useState(null),
        A = (e) => {
            var n;
            let t = (0, C.so)(e),
                l = null !== (n = e.channel_id) && void 0 !== n ? n : null == x ? void 0 : x.id;
            null != l &&
                d.Z.createInvite(
                    l,
                    {
                        max_age: M.value,
                        max_uses: G.value
                    },
                    D.t4x.GUILD_EVENTS
                ),
                t ? R(e) : s();
        },
        B = (0, g.Z)(u, null == m ? void 0 : m.id, j),
        [P, { loading: V, error: w }] = (0, N.Z)(async () => {
            if (null != _) return;
            let e = { broadcastToDirectoryChannels: B.broadcastToDirectoryChannels };
            if (b && null != l) return await p.Z.saveEvent(l, j, n, e), s();
            let t = await p.Z.createGuildEvent(j, n, e);
            return A(t.body), t;
        }),
        F = a.useMemo(() => (0, k.Z)(j, b), [j, b]);
    return (0, r.jsx)(U, {
        guildId: n,
        guildEvent: j,
        guildEventId: l,
        editBroadcastInfoData: B,
        isEdit: b,
        formErrors: F,
        transitionState: i,
        loading: V,
        error: w,
        onChange: (e) => {
            if (null != e.entityType) {
                var t;
                let l = (0, T.xC)(e.entityType),
                    [i] = (0, E.SU)(n, l);
                (e.channelId = null !== (t = null == i ? void 0 : i.id) && void 0 !== t ? t : null), e.entityType !== L.WX.EXTERNAL && j.entityType === L.WX.EXTERNAL && (e.entityMetadata = null);
            }
            y((n) => ({
                ...n,
                ...e
            }));
        },
        onSave: () => {
            null != j.recurrenceRule && b && (0, Z.BP)(m, j)
                ? (0, c.openModalLazy)(async () => {
                      let { ConfirmModal: e } = await Promise.resolve().then(t.bind(t, 481060));
                      return (n) =>
                          (0, r.jsxs)(e, {
                              ...n,
                              header: z.intl.string(z.t.BW1Qoq),
                              confirmText: z.intl.string(z.t.e5VEcH),
                              cancelText: z.intl.string(z.t.oEAioK),
                              onConfirm: P,
                              children: [
                                  (0, r.jsx)(c.Text, {
                                      variant: 'text-md/normal',
                                      children: z.intl.string(z.t.aNCYam)
                                  }),
                                  (0, r.jsx)('br', {}),
                                  (0, r.jsx)(c.Text, {
                                      variant: 'text-md/normal',
                                      children: z.intl.format(z.t.RWBa5e, {})
                                  })
                              ]
                          });
                  })
                : P();
        },
        onClose: s,
        createdEvent: _
    });
}
((i = l || (l = {}))[(i.ENTITY = 0)] = 'ENTITY'), (i[(i.SETTINGS = 1)] = 'SETTINGS'), (i[(i.PREVIEW = 2)] = 'PREVIEW'), (i[(i.SUCCESS = 3)] = 'SUCCESS');
