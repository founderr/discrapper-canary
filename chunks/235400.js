n.r(t),
    n.d(t, {
        default: function () {
            return D;
        }
    });
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(979554),
    s = n(442837),
    l = n(481060),
    u = n(100527),
    c = n(906732),
    d = n(335131),
    _ = n(884697),
    E = n(449217),
    f = n(223143),
    h = n(311395),
    p = n(81245),
    m = n(269982),
    I = n(197115),
    T = n(369111),
    g = n(594174),
    S = n(626135),
    A = n(74538),
    v = n(864106),
    N = n(240781),
    O = n(818611),
    R = n(981631),
    C = n(474936),
    y = n(689938),
    L = n(398787);
function b(e) {
    let { user: t, categories: n, purchases: r, analyticsLocations: o, onClose: s, initialSelectedDecoration: c, initialSelectedDecorationId: f, isTryItOutFlow: g, guild: S } = e,
        {
            pendingAvatarDecoration: R,
            setPendingAvatarDecoration: b,
            savedAvatarDecoration: D
        } = (0, T.Z)({
            analyticsLocations: o,
            isTryItOut: g,
            guildId: null == S ? void 0 : S.id
        }),
        [M, P] = a.useState(() => {
            var e, t;
            if (null != c) return c;
            let i = (0, _.iC)(r, n);
            return null != f ? (null !== (e = i.find((e) => e.id === f)) && void 0 !== e ? e : null) : void 0 !== R ? R : null == D ? null : null !== (t = i.find((e) => (0, v.sr)(e, D))) && void 0 !== t ? t : null;
        }),
        { product: U, purchase: w } = (0, E.Z)(null == M ? void 0 : M.skuId),
        x = A.ZP.canUseCollectibles(t),
        G = a.useRef(null),
        k = (0, h.Z)(o),
        B = (0, v.sr)(M, void 0 === R ? D : R),
        F = (e) => {
            P(e), null != e && k(e);
        },
        Z = () => {
            b(M), s();
        },
        V = a.useCallback(
            (e) => {
                s(),
                    (0, d.mK)({
                        analyticsLocations: o,
                        analyticsSource: u.Z.EDIT_AVATAR_DECORATION_MODAL,
                        initialProductSkuId: e
                    });
            },
            [o, s]
        ),
        H = (0, p.Mu)('AvatarDecorationModalBody'),
        Y = () =>
            (null != w && (!(0, _.qS)(w) || x)) || null === M
                ? (0, i.jsx)(l.Button, {
                      onClick: Z,
                      disabled: B,
                      children: y.Z.Messages.AVATAR_DECORATION_MODAL_APPLY
                  })
                : null == w && (x || !(0, _.G1)(U))
                  ? (0, i.jsx)(l.Button, {
                        className: L.modalFooterShopButton,
                        onClick: () => V(null == U ? void 0 : U.skuId),
                        children: y.Z.Messages.COLLECTIBLES_CTA_GO_TO_SHOP
                    })
                  : (0, i.jsx)(I.Z, {
                        subscriptionTier: C.Si.TIER_2,
                        showGradient: H,
                        buttonText: A.ZP.isPremium(t) ? y.Z.Messages.USER_SETTINGS_CUSTOMIZATION_UPGRADE_UPSELL : H ? y.Z.Messages.PREMIUM_UPSELL_GET_NITRO : y.Z.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL
                    });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(l.ModalHeader, {
                separator: !1,
                className: L.modalHeader,
                children: [
                    (0, i.jsx)(l.Heading, {
                        variant: 'heading-lg/semibold',
                        children: y.Z.Messages.USER_SETTINGS_CHANGE_AVATAR_DECORATION
                    }),
                    (0, i.jsx)(l.ModalCloseButton, {
                        className: L.modalCloseButton,
                        onClick: s
                    })
                ]
            }),
            (0, i.jsxs)(l.ModalContent, {
                className: L.modalContent,
                scrollbarType: 'none',
                children: [
                    (0, i.jsx)(O.Z, {
                        user: t,
                        guild: S,
                        pendingAvatarDecoration: M,
                        selectedAvatarDecorationRef: G,
                        onSelect: F,
                        onOpenShop: V
                    }),
                    (0, i.jsx)(N.Z, {
                        className: L.modalPreview,
                        user: t,
                        guildId: null == S ? void 0 : S.id,
                        avatarDecorationOverride: M
                    })
                ]
            }),
            (0, i.jsxs)(l.ModalFooter, {
                className: L.modalFooter,
                children: [
                    (0, i.jsx)('div', { children: Y() }),
                    (0, i.jsx)(l.Button, {
                        look: l.Button.Looks.LINK,
                        color: l.Button.Colors.PRIMARY,
                        onClick: s,
                        children: y.Z.Messages.CANCEL
                    }),
                    (0, _.G1)(U) &&
                        (0, i.jsx)(m.Z, {
                            product: U,
                            onSecondaryClick: s
                        })
                ]
            })
        ]
    });
}
function D(e) {
    let { transitionState: t, analyticsLocations: n, onClose: r, onCloseModal: _, initialSelectedDecoration: E, initialSelectedDecorationId: h, isTryItOutFlow: p, guild: m } = e,
        I = (0, s.e7)([g.default], () => g.default.getCurrentUser()),
        { analyticsLocations: T } = (0, c.ZP)(n, u.Z.EDIT_AVATAR_DECORATION_MODAL),
        { categories: A, purchases: v, isFetchingCategories: N, isFetchingPurchases: O } = (0, f.Z)(),
        C = N || (O && 0 === v.size),
        y = () => {
            _(), null == r || r();
        };
    return (
        a.useEffect(() => {
            S.default.track(R.rMx.OPEN_MODAL, {
                type: 'Edit Avatar Decoration Modal',
                location_stack: T
            });
        }, [T]),
        a.useEffect(
            () => () => {
                (0, d.K$)({
                    categories: [...A.values()],
                    itemTypes: [o.Z.AVATAR_DECORATION]
                });
            },
            [A]
        ),
        null == I
            ? null
            : (0, i.jsx)(c.Gt, {
                  value: T,
                  children: (0, i.jsx)(l.ModalRoot, {
                      transitionState: t,
                      className: L.modal,
                      size: C ? l.ModalSize.DYNAMIC : l.ModalSize.MEDIUM,
                      children: C
                          ? (0, i.jsx)(l.Spinner, {
                                className: L.spinner,
                                type: l.Spinner.Type.SPINNING_CIRCLE
                            })
                          : (0, i.jsx)(b, {
                                user: I,
                                guild: m,
                                categories: A,
                                purchases: v,
                                analyticsLocations: T,
                                initialSelectedDecoration: E,
                                initialSelectedDecorationId: h,
                                onClose: y,
                                isTryItOutFlow: p
                            })
                  })
              })
    );
}
