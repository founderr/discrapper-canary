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
    L = n(114732),
    b = n(46140),
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
    let { transitionState: n, onClose: r, quest: i, location: s, reward: c, decoration: E, onUseNow: h, preview: p } = e,
        m = o.useRef(null),
        [T, g] = o.useState(null),
        S = o.useRef(new u.qA()),
        A = (0, d.e7)([f.Z], () => f.Z.useReducedMotion),
        v = (0, d.e7)([N.default], () => N.default.getCurrentUser()),
        y = (0, C.j8)(i),
        b = (null === (t = i.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null,
        [M, U] = o.useState(!0 === p || b ? 'claimed' : 'loading');
    o.useEffect(() => {
        !b &&
            !0 !== p &&
            (0, O.QB)(i.id, R.y$.CROSS_PLATFORM, s)
                .then(() => U('claimed'))
                .catch(() => U('error'));
    }, [i, s, b, p]);
    let w = () => {
            U('applying'), h().finally(r);
        },
        x = null == v || null == E || 'loading' === M,
        G = !A && !b && 'claimed' === M;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(u.O_, {
                ref: g,
                className: P.confettiCanvas,
                environment: S.current
            }),
            (0, a.jsx)('div', {
                ref: m,
                children: (0, a.jsx)(_.ModalRoot, {
                    transitionState: n,
                    size: _.ModalSize.DYNAMIC,
                    className: l()(P.rootContainer, { [P.rootContainerLoading]: x }),
                    hideShadow: !0,
                    children: x
                        ? (0, a.jsx)(_.Spinner, { type: _.Spinner.Type.SPINNING_CIRCLE })
                        : 'error' === M
                          ? (0, a.jsx)(L.Z, { onClose: r })
                          : (0, a.jsx)(k, {
                                quest: i,
                                user: v,
                                primaryColor: i.config.colors.primary,
                                secondaryColor: i.config.colors.secondary,
                                decoration: E,
                                decorationName: c.messages.name,
                                backgroundUrl: y,
                                isSaving: 'applying' === M,
                                onClose: r,
                                onConfirm: w
                            })
                })
            }),
            G &&
                (0, a.jsx)(I.Z, {
                    confettiTarget: m.current,
                    confettiCanvas: T,
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
                        (0, C.zK)(t, b.S7.ADDITIONAL_REDEMPTION_INSTRUCTIONS) && (0, a.jsx)(G, { quest: t })
                    ]
                })
            })
        ]
    });
}
function B(e) {
    var t, n;
    let { quest: r, location: i, onClose: s, transitionState: l, preview: u } = e,
        c = o.useMemo(() => (0, C.xn)(r.config), [r]),
        [d, _] = w(null !== (n = null == c ? void 0 : c.skuId) && void 0 !== n ? n : null);
    if (null == c) return null;
    let E = (0, C.zK)(r, b.S7.IN_HOUSE_CONSOLE_QUEST);
    return (null === (t = r.userStatus) || void 0 === t ? void 0 : t.claimedAt) == null || E
        ? (0, a.jsx)(x, {
              onClose: s,
              transitionState: l,
              quest: r,
              location: i,
              reward: c,
              decoration: d,
              onUseNow: _,
              preview: u
          })
        : (0, a.jsx)(h.default, {
              transitionState: l,
              onCloseModal: U,
              onClose: s,
              analyticsLocations: [],
              initialSelectedDecoration: d
          });
}
function F(e, t, r) {
    (0, _.openModalLazy)(async () => {
        let { default: i } = await Promise.resolve().then(n.bind(n, 920916));
        return (n) =>
            (0, a.jsx)(i, {
                ...n,
                quest: e,
                location: t,
                preview: r
            });
    });
}
