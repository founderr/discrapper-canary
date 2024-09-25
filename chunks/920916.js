n.r(t),
    n.d(t, {
        default: function () {
            return B;
        },
        openCollectibleRewardModal: function () {
            return F;
        }
    });
var r = n(773603);
var i = n(47120);
var a = n(735250),
    o = n(470079),
    s = n(120356),
    l = n.n(s),
    u = n(887024),
    c = n(979554),
    d = n(442837),
    _ = n(481060),
    E = n(809206),
    f = n(607070),
    h = n(235400),
    p = n(204418),
    m = n(583434),
    I = n(530618),
    T = n(70097),
    g = n(454585),
    S = n(164946),
    A = n(369111),
    v = n(25990),
    N = n(594174),
    O = n(272008),
    R = n(497505),
    C = n(918701),
    y = n(566078),
    b = n(114732),
    L = n(46140),
    D = n(675654),
    M = n(689938),
    P = n(837053);
function U() {
    let e = v.Z.getAllPending(),
        t = (0, S.ED)(e);
    return (0, E.Mn)(t).finally(E.si);
}
function w(e) {
    let { product: t, isFetching: n } = (0, m.T)(e),
        {} = (0, A.Z)({}),
        r = o.useMemo(() => {
            if (null == t || n) return null;
            let e = t.items.find((e) => e.type === c.Z.AVATAR_DECORATION);
            return null == e ? null : e;
        }, [t, n]),
        i = () => (null == r ? Promise.reject() : ((0, E.cV)(r), U()));
    return [r, i];
}
function x(e) {
    var t;
    let { transitionState: n, onClose: r, quest: i, location: s, reward: c, decoration: E, onUseNow: h } = e,
        p = o.useRef(null),
        [m, T] = o.useState(null),
        g = o.useRef(new u.qA()),
        S = (0, d.e7)([f.Z], () => f.Z.useReducedMotion),
        A = (0, d.e7)([N.default], () => N.default.getCurrentUser()),
        v = (0, C.j8)(i),
        y = (null === (t = i.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null,
        [L, M] = o.useState(y ? 'claimed' : 'loading');
    o.useEffect(() => {
        !y &&
            (0, O.QB)(i.id, R.y$.CROSS_PLATFORM, s)
                .then(() => M('claimed'))
                .catch(() => M('error'));
    }, [i, s, y]);
    let U = () => {
            M('applying'), h().finally(r);
        },
        w = null == A || null == E || 'loading' === L,
        x = !S && !y && 'claimed' === L;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(u.O_, {
                ref: T,
                className: P.confettiCanvas,
                environment: g.current
            }),
            (0, a.jsx)('div', {
                ref: p,
                children: (0, a.jsx)(_.ModalRoot, {
                    transitionState: n,
                    size: _.ModalSize.DYNAMIC,
                    className: l()(P.rootContainer, { [P.rootContainerLoading]: w }),
                    hideShadow: !0,
                    children: w
                        ? (0, a.jsx)(_.Spinner, { type: _.Spinner.Type.SPINNING_CIRCLE })
                        : 'error' === L
                          ? (0, a.jsx)(b.Z, { onClose: r })
                          : (0, a.jsx)(k, {
                                quest: i,
                                user: A,
                                primaryColor: i.config.colors.primary,
                                secondaryColor: i.config.colors.secondary,
                                decoration: E,
                                decorationName: c.messages.name,
                                backgroundUrl: v,
                                isSaving: 'applying' === L,
                                onClose: r,
                                onConfirm: U
                            })
                })
            }),
            x &&
                (0, a.jsx)(I.Z, {
                    confettiTarget: p.current,
                    confettiCanvas: m,
                    sprites: D.CA,
                    colors: D.Br
                })
        ]
    });
}
function G(e) {
    let { quest: t } = e,
        n = y.r.build(t.config).defaultRewardRedemptionInstructionsByPlatform[R.y$.CROSS_PLATFORM];
    return (0, a.jsxs)('div', {
        className: P.additionalRedemptionInstructions,
        children: [
            (0, a.jsx)('img', {
                src: (0, C.Gs)(t, 'dark'),
                alt: '',
                className: P.sponsorLogo
            }),
            (0, a.jsx)(_.Text, {
                variant: 'text-sm/normal',
                color: 'always-white',
                children: g.Z.parse(n, !1, { allowLinks: !0 })
            })
        ]
    });
}
function k(e) {
    let { quest: t, user: n, decoration: r, decorationName: i, primaryColor: o, secondaryColor: s, backgroundUrl: l, isSaving: u, onClose: c, onConfirm: d } = e,
        E = (0, C.Kr)(t.config),
        f =
            null == E
                ? M.Z.Messages.QUESTS_REWARD_AVATAR_DECORATION_BODY.format({ decorationName: i })
                : M.Z.Messages.QUESTS_REWARD_AVATAR_DECORATION_BODY_WITH_EXPIRATION.format({
                      decorationName: i,
                      duration: E
                  });
    return (0, a.jsxs)('div', {
        className: P.claimedRootContainer,
        children: [
            (0, a.jsxs)('div', {
                className: P.headerContainer,
                children: [
                    (0, a.jsx)(T.Z, {
                        className: P.headerBackground,
                        autoPlay: !1,
                        loop: !1,
                        muted: !0,
                        playsInline: !0,
                        controls: !1,
                        poster: l
                    }),
                    (0, a.jsxs)('div', {
                        className: P.headerForeground,
                        children: [
                            (0, a.jsx)('div', {
                                className: P.previewContainer,
                                children: (0, a.jsx)(p.Z, {
                                    user: n,
                                    guildId: null,
                                    avatarDecorationOverride: r
                                })
                            }),
                            (0, a.jsx)(_.ModalCloseButton, {
                                className: P.close,
                                withCircleBackground: !0,
                                onClick: c
                            })
                        ]
                    })
                ]
            }),
            (0, a.jsx)(_.ModalFooter, {
                className: P.footerContainer,
                separator: !1,
                children: (0, a.jsxs)('div', {
                    className: P.gradient,
                    style: { backgroundImage: 'linear-gradient(180deg, '.concat(o, ', ').concat(s, ')') },
                    children: [
                        (0, a.jsx)(_.Heading, {
                            variant: 'heading-lg/bold',
                            color: 'always-white',
                            className: P.heading,
                            children: M.Z.Messages.QUESTS_REWARD_AVATAR_DECORATION_HEADER
                        }),
                        (0, a.jsx)(_.Text, {
                            variant: 'text-sm/normal',
                            color: 'always-white',
                            className: P.text,
                            children: f
                        }),
                        (0, a.jsx)(_.Button, {
                            submitting: u,
                            onClick: d,
                            children: M.Z.Messages.COLLECTIBLES_USE_NOW
                        }),
                        (0, C.zK)(t, L.S7.ADDITIONAL_REDEMPTION_INSTRUCTIONS) && (0, a.jsx)(G, { quest: t })
                    ]
                })
            })
        ]
    });
}
function B(e) {
    var t, n;
    let { quest: r, location: i, onClose: s, transitionState: l } = e,
        u = o.useMemo(() => (0, C.xn)(r.config), [r]),
        [c, d] = w(null !== (n = null == u ? void 0 : u.skuId) && void 0 !== n ? n : null);
    if (null == u) return null;
    let _ = (0, C.zK)(r, L.S7.IN_HOUSE_CONSOLE_QUEST);
    return (null === (t = r.userStatus) || void 0 === t ? void 0 : t.claimedAt) == null || _
        ? (0, a.jsx)(x, {
              onClose: s,
              transitionState: l,
              quest: r,
              location: i,
              reward: u,
              decoration: c,
              onUseNow: d
          })
        : (0, a.jsx)(h.default, {
              transitionState: l,
              onCloseModal: U,
              onClose: s,
              analyticsLocations: [],
              initialSelectedDecoration: c
          });
}
function F(e, t) {
    (0, _.openModalLazy)(async () => {
        let { default: r } = await Promise.resolve().then(n.bind(n, 920916));
        return (n) =>
            (0, a.jsx)(r, {
                ...n,
                quest: e,
                location: t
            });
    });
}
