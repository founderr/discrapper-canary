n.d(t, {
    Z: function () {
        return M;
    },
    i: function () {
        return P;
    }
}),
    n(47120),
    n(653041);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(75124),
    o = n(748780),
    c = n(442837),
    d = n(704215),
    u = n(481060),
    h = n(699682),
    p = n(367907),
    m = n(812206),
    f = n(644914),
    g = n(434404),
    C = n(330010),
    x = n(314897),
    _ = n(430824),
    v = n(594174),
    I = n(259580),
    E = n(585483),
    b = n(63063),
    N = n(358085),
    Z = n(709054),
    S = n(967128),
    T = n(981631),
    j = n(231873),
    A = n(388032),
    y = n(567522);
function P(e) {
    let { className: t, iconUrl: n, icon: r, header: s, completed: o, onClick: c } = e,
        [d, p] = l.useState(!1),
        m = (0, h.Z)(o);
    return (
        l.useEffect(() => {
            null != m && o !== m && (p(!0), setTimeout(() => p(!1), 1000));
        }, [o, m]),
        (0, i.jsxs)(u.Clickable, {
            className: a()(t, y.card, { [y.completed]: o }),
            onClick: c,
            children: [
                null != r
                    ? r
                    : (0, i.jsx)('div', {
                          className: y.icon,
                          style: { backgroundImage: "url('".concat(n, "')") }
                      }),
                (0, i.jsx)(u.Text, {
                    color: 'header-primary',
                    className: a()(y.cardTextContainer, y.cardHeader),
                    variant: 'text-sm/normal',
                    children: s
                }),
                o
                    ? (0, i.jsx)(u.CheckmarkLargeIcon, {
                          size: 'md',
                          color: 'currentColor',
                          className: a()(y.checkmark, { [y.animate]: d })
                      })
                    : (0, i.jsx)(I.Z, {
                          className: y.arrow,
                          direction: I.Z.Directions.RIGHT
                      })
            ]
        })
    );
}
function M(e) {
    let { channel: t } = e,
        r = (0, c.e7)([_.Z], () => (null != t ? _.Z.getGuild(t.getGuildId()) : null), [t]),
        h = null != r && Z.default.extractTimestamp(r.id) < Date.now() - T._8R,
        I = (0, c.e7)([x.default], () => (null == r ? void 0 : r.ownerId) === x.default.getId(), [r]),
        { canInvite: M, canManageGuild: R, canMessage: L } = (0, f.TE)(t, r),
        k = (0, c.e7)([v.default], () => {
            var e, t;
            return (null === (e = v.default.getCurrentUser()) || void 0 === e ? void 0 : e.desktop) === !0 || (null === (t = v.default.getCurrentUser()) || void 0 === t ? void 0 : t.mobile) === !0;
        }),
        { guildPopulated: O, guildMessaged: D, guildPersonalized: w } = (0, f.h_)(r),
        {
            handleInvite: B,
            handleMessage: U,
            handlePersonalize: H,
            handleDownload: G,
            handleAddApplication: F
        } = (function (e) {
            let t = l.useCallback(() => {
                    p.ZP.trackWithMetadata(T.rMx.SERVER_SETUP_CTA_CLICKED, {
                        setup_type: j.Ft.CHANNEL_WELCOME,
                        action: j.j7.INVITE
                    }),
                        null != e &&
                            (0, u.openModalLazy)(async () => {
                                let { default: t } = await Promise.all([n.e('7654'), n.e('54655')]).then(n.bind(n, 560114));
                                return (n) =>
                                    (0, i.jsx)(t, {
                                        ...n,
                                        guild: e,
                                        source: T.t4x.CHANNEL_WELCOME,
                                        analyticsLocation: { section: T.jXE.CHANNEL_WELCOME_CTA }
                                    });
                            });
                }, [e]),
                r = l.useCallback(() => {
                    p.ZP.trackWithMetadata(T.rMx.SERVER_SETUP_CTA_CLICKED, {
                        setup_type: j.Ft.CHANNEL_WELCOME,
                        action: j.j7.SEND_MESSAGE
                    }),
                        E.S.dispatch(T.CkL.TEXTAREA_FOCUS, {
                            highlight: !0,
                            channelId: T.lds
                        });
                }, []),
                a = l.useCallback(() => {
                    p.ZP.trackWithMetadata(T.rMx.SERVER_SETUP_CTA_CLICKED, {
                        setup_type: j.Ft.CHANNEL_WELCOME,
                        action: j.j7.PERSONALIZE_SERVER
                    }),
                        null != e && g.Z.open(e.id, T.pNK.OVERVIEW, { section: T.jXE.CHANNEL_WELCOME_CTA });
                }, [e]),
                s = l.useCallback(() => {
                    p.ZP.trackWithMetadata(T.rMx.SERVER_SETUP_CTA_CLICKED, {
                        setup_type: j.Ft.CHANNEL_WELCOME,
                        action: j.j7.DOWNLOAD
                    }),
                        (0, u.openModalLazy)(async () => {
                            let { default: e } = await Promise.resolve().then(n.bind(n, 431583));
                            return (t) =>
                                (0, i.jsx)(e, {
                                    source: T.jXE.CHANNEL_WELCOME_CTA,
                                    ...t
                                });
                        });
                }, []);
            return {
                handleInvite: t,
                handleMessage: r,
                handlePersonalize: a,
                handleDownload: s,
                handleAddApplication: l.useCallback(() => {
                    null != e &&
                        (p.ZP.trackWithMetadata(T.rMx.SERVER_SETUP_CTA_CLICKED, {
                            setup_type: j.Ft.CHANNEL_WELCOME,
                            action: j.j7.ADD_APP
                        }),
                        (0, u.openModalLazy)(async () => {
                            let { default: t } = await n.e('77875').then(n.bind(n, 657300));
                            return (n) => {
                                var l;
                                return (0, i.jsx)(t, {
                                    guildId: null !== (l = e.id) && void 0 !== l ? l : '',
                                    ...n,
                                    analyticsType: d.z.APP_DIRECTORY_SERVER_SETUP_UPSELL_MODAL
                                });
                            };
                        }));
                }, [e])
            };
        })(r),
        V = !(k || O || D || w),
        { titleAnimatedStyle: z, opacities: W } = (function (e) {
            let t = (0, s.Z)(() => new o.Z.Value(0)),
                n = (0, s.Z)(() => new o.Z.Value(0)),
                i = [];
            return (
                i.push((0, s.Z)(() => new o.Z.Value(0))),
                i.push((0, s.Z)(() => new o.Z.Value(0))),
                i.push((0, s.Z)(() => new o.Z.Value(0))),
                i.push((0, s.Z)(() => new o.Z.Value(0))),
                l.useEffect(() => {
                    o.Z.stagger(300, [
                        o.Z.parallel([
                            o.Z.timing(n, {
                                toValue: 1,
                                duration: 450
                            }),
                            o.Z.timing(t, {
                                toValue: 1,
                                duration: 450
                            })
                        ]),
                        o.Z.stagger(100, [
                            o.Z.timing(i[0], {
                                toValue: 1,
                                duration: 300
                            }),
                            o.Z.timing(i[1], {
                                toValue: 1,
                                duration: 300
                            }),
                            o.Z.timing(i[2], {
                                toValue: 1,
                                duration: 300
                            }),
                            o.Z.timing(i[3], {
                                toValue: 1,
                                duration: 300
                            })
                        ])
                    ]).start();
                }, [n, t, i]),
                {
                    titleAnimatedStyle: e
                        ? {
                              transform: [
                                  {
                                      translateY: t.interpolate({
                                          inputRange: [0, 1],
                                          outputRange: ['-20px', '0px']
                                      })
                                  }
                              ],
                              opacity: n
                          }
                        : {},
                    opacities: i
                }
            );
        })(V),
        K = (0, c.e7)([m.Z], () => m.Z.getGuildApplicationIds(null == r ? void 0 : r.id)).length > 0;
    if (
        (l.useEffect(() => {
            var e;
            (0, C.i)(null !== (e = null == r ? void 0 : r.id) && void 0 !== e ? e : T.lds);
        }, [r]),
        null == r)
    )
        return null;
    let Y = [];
    !h &&
        (M &&
            Y.push(
                (0, i.jsx)(
                    o.Z.div,
                    {
                        className: y.cardWrapper,
                        style: V ? { opacity: W[Y.length] } : {},
                        children: (0, i.jsx)(P, {
                            iconUrl: n(538548),
                            header: A.intl.string(A.t.q9n0TU),
                            completed: O,
                            onClick: B
                        })
                    },
                    'invite'
                )
            ),
        R &&
            Y.push(
                (0, i.jsx)(
                    o.Z.div,
                    {
                        className: y.cardWrapper,
                        style: V ? { opacity: W[Y.length] } : {},
                        children: (0, i.jsx)(P, {
                            iconUrl: n(753033),
                            header: A.intl.string(A.t.c5kxPj),
                            completed: w,
                            onClick: H
                        })
                    },
                    'customize'
                )
            ),
        L &&
            Y.push(
                (0, i.jsx)(
                    o.Z.div,
                    {
                        className: y.cardWrapper,
                        style: V ? { opacity: W[Y.length] } : {},
                        children: (0, i.jsx)(P, {
                            iconUrl: n(15717),
                            header: A.intl.string(A.t['SoP7+v']),
                            completed: D,
                            onClick: U
                        })
                    },
                    'message'
                )
            ),
        (0, N.isWeb)() &&
            Y.push(
                (0, i.jsx)(
                    o.Z.div,
                    {
                        className: y.cardWrapper,
                        style: V ? { opacity: W[Y.length] } : {},
                        children: (0, i.jsx)(P, {
                            iconUrl: n(435921),
                            header: A.intl.string(A.t.pGVNIy),
                            completed: k,
                            onClick: G
                        })
                    },
                    'download'
                )
            ),
        Y.push(
            (0, i.jsx)(
                o.Z.div,
                {
                    className: y.cardWrapper,
                    style: V ? { opacity: W[Y.length] } : {},
                    children: (0, i.jsx)(P, {
                        iconUrl: n(881454),
                        header: A.intl.string(A.t.IhHDEB),
                        completed: K,
                        onClick: F
                    })
                },
                'addapp'
            )
        ));
    let q = I ? A.intl.string(A.t['1ach9P']) : A.intl.string(A.t['ezm+/v']);
    h && (q = A.intl.string(A.t['gwyU/P']));
    let X = ''.concat(b.Z.getArticleURL(T.BhN.GUILD_GETTING_STARTED), '?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-new-user&utm_content=--t%3Apm');
    return (0, i.jsx)(S.ZP, {
        channelId: t.id,
        children: (0, i.jsx)('div', {
            className: y.container,
            children: (0, i.jsxs)('div', {
                className: y.inner,
                children: [
                    (0, i.jsxs)(o.Z.div, {
                        style: z,
                        children: [
                            (0, i.jsx)(u.Heading, {
                                className: y.titleName,
                                variant: 'heading-xxl/semibold',
                                children: A.intl.format(A.t.rkHVKS, { guildName: r.name })
                            }),
                            (0, i.jsxs)(u.Text, {
                                color: 'header-secondary',
                                className: a()({
                                    [y.subtitle]: !0,
                                    [y.noChildren]: 0 === Y.length
                                }),
                                variant: 'text-sm/normal',
                                children: [q, ' ', Y.length > 0 ? A.intl.format(A.t.UOtD39, { guideURL: X }) : null]
                            })
                        ]
                    }),
                    Y
                ]
            })
        })
    });
}
