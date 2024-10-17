n.r(t),
    n.d(t, {
        default: function () {
            return k;
        },
        openCollectibleRewardModal: function () {
            return B;
        }
    }),
    n(773603),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(887024),
    l = n(979554),
    u = n(442837),
    c = n(481060),
    d = n(809206),
    _ = n(607070),
    E = n(235400),
    f = n(204418),
    h = n(583434),
    p = n(530618),
    I = n(70097),
    m = n(454585),
    T = n(164946),
    S = n(369111),
    g = n(25990),
    A = n(594174),
    N = n(960048),
    R = n(272008),
    O = n(497505),
    v = n(918701),
    C = n(475595),
    L = n(566078),
    D = n(114732),
    y = n(46140),
    b = n(675654),
    M = n(689938),
    P = n(837053);
function U() {
    let e = g.Z.getAllPending(),
        t = (0, T.ED)(e);
    return (0, d.Mn)(t).finally(d.si);
}
function w(e) {
    var t;
    let { transitionState: n, onClose: a, quest: l, location: d, reward: E, decoration: f, onUseNow: h, preview: I } = e,
        m = i.useRef(null),
        [T, S] = i.useState(null),
        g = i.useRef(new o.qA()),
        N = (0, u.e7)([_.Z], () => _.Z.useReducedMotion),
        v = (0, u.e7)([A.default], () => A.default.getCurrentUser()),
        L = i.useMemo(() => (0, C.fh)(l, C.Bd.HERO), [l]),
        y = (null === (t = l.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null,
        [M, U] = i.useState(!0 === I || y ? 'claimed' : 'loading');
    i.useEffect(() => {
        !y &&
            !0 !== I &&
            (0, R.QB)(l.id, O.y$.CROSS_PLATFORM, d)
                .then(() => U('claimed'))
                .catch(() => U('error'));
    }, [l, d, y, I]);
    let w = null == v || null == f || 'loading' === M;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(o.O_, {
                ref: S,
                className: P.confettiCanvas,
                environment: g.current
            }),
            (0, r.jsx)('div', {
                ref: m,
                children: (0, r.jsx)(c.ModalRoot, {
                    transitionState: n,
                    size: c.ModalSize.DYNAMIC,
                    className: s()(P.rootContainer, { [P.rootContainerLoading]: w }),
                    hideShadow: !0,
                    children: w
                        ? (0, r.jsx)(c.Spinner, { type: c.Spinner.Type.SPINNING_CIRCLE })
                        : 'error' === M
                          ? (0, r.jsx)(D.Z, { onClose: a })
                          : (0, r.jsx)(G, {
                                quest: l,
                                user: v,
                                primaryColor: l.config.colors.primary,
                                secondaryColor: l.config.colors.secondary,
                                decoration: f,
                                decorationName: E.messages.name,
                                backgroundUrl: L.url,
                                isSaving: 'applying' === M,
                                onClose: a,
                                onConfirm: () => {
                                    U('applying'), h().finally(a);
                                }
                            })
                })
            }),
            !N &&
                !y &&
                'claimed' === M &&
                (0, r.jsx)(p.Z, {
                    confettiTarget: m.current,
                    confettiCanvas: T,
                    sprites: b.CA,
                    colors: b.Br
                })
        ]
    });
}
function x(e) {
    let { quest: t } = e,
        n = i.useMemo(() => (0, C.fh)(t, C.Bd.LOGO_TYPE, 'dark'), [t]),
        a = L.r.build(t.config).defaultRewardRedemptionInstructionsByPlatform[O.y$.CROSS_PLATFORM];
    return (0, r.jsxs)('div', {
        className: P.additionalRedemptionInstructions,
        children: [
            (0, r.jsx)('img', {
                src: n.url,
                alt: '',
                className: P.sponsorLogo
            }),
            (0, r.jsx)(c.Text, {
                variant: 'text-sm/normal',
                color: 'always-white',
                children: m.Z.parse(a, !1, { allowLinks: !0 })
            })
        ]
    });
}
function G(e) {
    let { quest: t, user: n, decoration: i, decorationName: a, primaryColor: s, secondaryColor: o, backgroundUrl: l, isSaving: u, onClose: d, onConfirm: _ } = e,
        E = (0, v.Kr)(t.config),
        h =
            null == E
                ? M.Z.Messages.QUESTS_REWARD_AVATAR_DECORATION_BODY.format({ decorationName: a })
                : M.Z.Messages.QUESTS_REWARD_AVATAR_DECORATION_BODY_WITH_EXPIRATION.format({
                      decorationName: a,
                      duration: E
                  });
    return (0, r.jsxs)('div', {
        className: P.claimedRootContainer,
        children: [
            (0, r.jsxs)('div', {
                className: P.headerContainer,
                children: [
                    (0, r.jsx)(I.Z, {
                        className: P.headerBackground,
                        autoPlay: !1,
                        loop: !1,
                        muted: !0,
                        playsInline: !0,
                        controls: !1,
                        poster: l
                    }),
                    (0, r.jsxs)('div', {
                        className: P.headerForeground,
                        children: [
                            (0, r.jsx)('div', {
                                className: P.previewContainer,
                                children: (0, r.jsx)(f.Z, {
                                    user: n,
                                    guildId: null,
                                    avatarDecorationOverride: i
                                })
                            }),
                            (0, r.jsx)(c.ModalCloseButton, {
                                className: P.close,
                                withCircleBackground: !0,
                                onClick: d
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsx)(c.ModalFooter, {
                className: P.footerContainer,
                separator: !1,
                children: (0, r.jsxs)('div', {
                    className: P.gradient,
                    style: { backgroundImage: 'linear-gradient(180deg, '.concat(s, ', ').concat(o, ')') },
                    children: [
                        (0, r.jsx)(c.Heading, {
                            variant: 'heading-lg/bold',
                            color: 'always-white',
                            className: P.heading,
                            children: M.Z.Messages.QUESTS_REWARD_AVATAR_DECORATION_HEADER
                        }),
                        (0, r.jsx)(c.Text, {
                            variant: 'text-sm/normal',
                            color: 'always-white',
                            className: P.text,
                            children: h
                        }),
                        (0, r.jsx)(c.Button, {
                            submitting: u,
                            onClick: _,
                            children: M.Z.Messages.COLLECTIBLES_USE_NOW
                        }),
                        (0, v.zK)(t, y.S7.ADDITIONAL_REDEMPTION_INSTRUCTIONS) && (0, r.jsx)(x, { quest: t })
                    ]
                })
            })
        ]
    });
}
function k(e) {
    var t, n;
    let { quest: a, location: s, onClose: o, transitionState: u, preview: c } = e,
        _ = i.useMemo(() => (0, v.xn)(a.config), [a]),
        [f, p] = (function (e) {
            let { product: t, isFetching: n } = (0, h.T)(e),
                {} = (0, S.Z)({}),
                r = i.useMemo(() => {
                    if (null == t || n) return null;
                    let e = t.items.find((e) => e.type === l.Z.AVATAR_DECORATION);
                    return null == e ? null : e;
                }, [t, n]);
            return [r, () => (null == r ? (N.Z.addBreadcrumb({ message: 'Error saving avatar decoration; it is null' }), Promise.reject()) : ((0, d.cV)(r), U()))];
        })(null !== (n = null == _ ? void 0 : _.skuId) && void 0 !== n ? n : null);
    if (null == _) return null;
    let I = (0, v.zK)(a, y.S7.IN_HOUSE_CONSOLE_QUEST);
    return (null === (t = a.userStatus) || void 0 === t ? void 0 : t.claimedAt) == null || I
        ? (0, r.jsx)(w, {
              onClose: o,
              transitionState: u,
              quest: a,
              location: s,
              reward: _,
              decoration: f,
              onUseNow: p,
              preview: c
          })
        : (0, r.jsx)(E.default, {
              transitionState: u,
              onCloseModal: U,
              onClose: o,
              analyticsLocations: [],
              initialSelectedDecoration: f
          });
}
function B(e, t, i) {
    (0, c.openModalLazy)(async () => {
        let { default: a } = await Promise.resolve().then(n.bind(n, 920916));
        return (n) =>
            (0, r.jsx)(a, {
                ...n,
                quest: e,
                location: t,
                preview: i
            });
    });
}
