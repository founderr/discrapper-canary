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
    x = t(745510),
    m = t(96698),
    h = t(313201),
    g = t(433775),
    v = t(984933),
    j = t(430824),
    f = t(971130),
    N = t(981888),
    I = t(924301),
    p = t(482241),
    C = t(951539),
    E = t(545165),
    T = t(236373),
    S = t(230900),
    b = t(854698),
    y = t(334877),
    Z = t(785468),
    _ = t(377329),
    k = t(311166),
    R = t(744782),
    A = t(129526),
    D = t(765305),
    L = t(981631),
    B = t(388032),
    z = t(859312);
let { INVITE_OPTIONS_7_DAYS: M, INVITE_OPTIONS_UNLIMITED: G } = f.ZP;
function U(e) {
    let { modal: n } = e,
        { createMultipleConfetti: t } = a.useContext(x.h);
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
function P(e) {
    let { guildId: n, guildEvent: t, guildEventId: i, editBroadcastInfoData: d, isEdit: x, formErrors: g, transitionState: v, loading: j, error: f, onChange: N, onSave: p, onClose: C, createdEvent: E } = e,
        T = (0, h.Dt)(),
        S = a.useRef(t),
        b = !(0, s.isEqual)(S.current, t),
        A = a.useMemo(
            () => [
                {
                    slideId: 0,
                    label: B.intl.string(B.t['56QlKS']),
                    valid: null == g.entity,
                    userErrorMessage: g.entity
                },
                {
                    slideId: 1,
                    label: B.intl.string(B.t['w5/ntb']),
                    valid: null == g.schedule && null == g.topic && (!x || b),
                    userErrorMessage: g.schedule
                },
                {
                    slideId: 2,
                    label: B.intl.string(B.t['8aJzT0']),
                    valid: !0
                }
            ],
            [g, x, b]
        ),
        D = Object.keys(l).length,
        L = (0, I.xt)(t),
        M = (e) => Math.max(0, Math.min(e, D - 1)),
        [G, P] = a.useState(L ? 1 : 0),
        [V, w] = a.useState(!1),
        F = a.useMemo(
            () =>
                A.slice(0, G + 1)
                    .map((e) => e.valid)
                    .every(Boolean),
            [A, G]
        ),
        X = G >= A.length ? 3 : A[M(G)].slideId,
        O = 3 === X;
    (0, y.l)((e) => e.onUpdateCanCloseModal)(O);
    let W = (0, o.e7)([u.Z], () => u.Z.useReducedMotion),
        q = a.useRef(null),
        H = (e) => {
            w(!1), P(M(e));
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
        Q = B.intl.string(B.t.PDTjLC);
    return (
        2 === X && (Q = x ? B.intl.string(B.t.e5VEcH) : B.intl.string(B.t['60lJ0N'])),
        (0, r.jsx)(r.Fragment, {
            children: (0, r.jsxs)(c.ModalRoot, {
                transitionState: v,
                'aria-labelledby': T,
                size: c.ModalSize.DYNAMIC,
                children: [
                    !W && O ? (0, r.jsx)(U, { modal: q.current }) : null,
                    (0, r.jsxs)(c.ModalContent, {
                        className: z.content,
                        scrollerRef: q,
                        children: [
                            !O &&
                                (0, r.jsx)(m.Z, {
                                    steps: A.map((e) => e.label),
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
                                        children: (0, r.jsx)(Z.Z, {
                                            guildId: n,
                                            guildEvent: t,
                                            validationErrorMessage: g.entity,
                                            isSlideReady: V,
                                            onChange: N
                                        })
                                    }),
                                    (0, r.jsx)(c.Slide, {
                                        id: 1,
                                        children: (0, r.jsx)(k.Z, {
                                            guildEvent: t,
                                            guildEventId: i,
                                            guildId: n,
                                            editBroadcastInfoData: d,
                                            onChange: N,
                                            error: f,
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
                                            error: f
                                        })
                                    }),
                                    (0, r.jsx)(c.Slide, {
                                        id: 3,
                                        children: (0, r.jsx)(R.Z, {
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
                            className: z.footer,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: z.inline,
                                    children: [
                                        (0, r.jsx)(c.Button, {
                                            color: c.Button.Colors.PRIMARY,
                                            onClick: C,
                                            children: B.intl.string(B.t['ETE/oK'])
                                        }),
                                        (0, r.jsx)(c.Button, {
                                            onClick: Y,
                                            disabled: !F,
                                            className: z.button,
                                            submitting: j,
                                            children: Q
                                        })
                                    ]
                                }),
                                0 !== X &&
                                    (0, r.jsx)(c.Button, {
                                        look: c.Button.Looks.LINK,
                                        size: c.Button.Sizes.MIN,
                                        onClick: K,
                                        color: c.Button.Colors.LINK,
                                        children: B.intl.string(B.t['13/7kZ'])
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
        u = (0, o.e7)([j.Z], () => j.Z.getGuild(n)),
        x = (0, o.e7)([I.ZP], () => I.ZP.getGuildScheduledEvent(l), [l]),
        m = (0, o.e7)([v.ZP], () => v.ZP.getDefaultChannel(n), [n]),
        h = (0, T.j$)(x, m),
        [f, y] = a.useState(h),
        [Z] = a.useState((0, T.Ql)(x)),
        [_, k] = a.useState(null),
        R = (e) => {
            var n;
            let t = (0, C.so)(e),
                l = null !== (n = e.channel_id) && void 0 !== n ? n : null == m ? void 0 : m.id;
            null != l &&
                d.Z.createInvite(
                    l,
                    {
                        max_age: M.value,
                        max_uses: G.value
                    },
                    L.t4x.GUILD_EVENTS
                ),
                t ? k(e) : s();
        },
        z = (0, g.Z)(u, null == x ? void 0 : x.id, f),
        [U, { loading: V, error: w }] = (0, N.Z)(async () => {
            if (null != _) return;
            let e = { broadcastToDirectoryChannels: z.broadcastToDirectoryChannels };
            if (Z && null != l) return await p.Z.saveEvent(l, f, n, e), s();
            let t = await p.Z.createGuildEvent(f, n, e);
            return R(t.body), t;
        }),
        F = a.useMemo(() => (0, A.Z)(f, Z), [f, Z]);
    return (0, r.jsx)(P, {
        guildId: n,
        guildEvent: f,
        guildEventId: l,
        editBroadcastInfoData: z,
        isEdit: Z,
        formErrors: F,
        transitionState: i,
        loading: V,
        error: w,
        onChange: (e) => {
            if (null != e.entityType) {
                var t;
                let l = (0, S.xC)(e.entityType),
                    [i] = (0, E.SU)(n, l);
                (e.channelId = null !== (t = null == i ? void 0 : i.id) && void 0 !== t ? t : null), e.entityType !== D.WX.EXTERNAL && f.entityType === D.WX.EXTERNAL && (e.entityMetadata = null);
            }
            y((n) => ({
                ...n,
                ...e
            }));
        },
        onSave: () => {
            null != f.recurrenceRule && Z && (0, b.BP)(x, f)
                ? (0, c.openModalLazy)(async () => {
                      let { ConfirmModal: e } = await Promise.resolve().then(t.bind(t, 481060));
                      return (n) =>
                          (0, r.jsxs)(e, {
                              ...n,
                              header: B.intl.string(B.t.BW1Qoq),
                              confirmText: B.intl.string(B.t.e5VEcH),
                              cancelText: B.intl.string(B.t.oEAioK),
                              onConfirm: U,
                              children: [
                                  (0, r.jsx)(c.Text, {
                                      variant: 'text-md/normal',
                                      children: B.intl.string(B.t.aNCYam)
                                  }),
                                  (0, r.jsx)('br', {}),
                                  (0, r.jsx)(c.Text, {
                                      variant: 'text-md/normal',
                                      children: B.intl.format(B.t.RWBa5e, {})
                                  })
                              ]
                          });
                  })
                : U();
        },
        onClose: s,
        createdEvent: _
    });
}
((i = l || (l = {}))[(i.ENTITY = 0)] = 'ENTITY'), (i[(i.SETTINGS = 1)] = 'SETTINGS'), (i[(i.PREVIEW = 2)] = 'PREVIEW'), (i[(i.SUCCESS = 3)] = 'SUCCESS');
