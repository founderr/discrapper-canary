i.r(e),
    i.d(e, {
        default: function () {
            return L;
        }
    });
var s,
    n,
    r = i(200651),
    o = i(192379),
    a = i(120356),
    l = i.n(a),
    c = i(481060),
    u = i(100527),
    d = i(906732),
    h = i(1585),
    _ = i(821982),
    p = i(125988),
    I = i(228624),
    m = i(267097),
    f = i(109213),
    g = i(626135),
    b = i(333867),
    S = i(963249),
    E = i(981631),
    v = i(217702),
    x = i(474936),
    A = i(388032),
    T = i(521050),
    C = i(476945),
    y = i(945182);
function L(t) {
    let { analyticsLocations: e, transitionState: i, onClose: s, giftRecipient: n, analyticsObject: a } = t;
    return (
        o.useEffect(() => {
            g.default.track(E.rMx.GIFT_CATEGORY_SELECT_MODAL_OPENED, {
                location: a,
                location_stack: e
            });
        }, []),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(R, {}),
                (0, r.jsxs)(c.ModalRoot, {
                    size: c.ModalSize.DYNAMIC,
                    transitionState: i,
                    className: T.modalRoot,
                    children: [
                        (0, r.jsxs)(c.ModalHeader, {
                            className: T.header,
                            separator: !1,
                            children: [
                                (0, r.jsx)(c.FormTitle, {
                                    tag: c.FormTitleTags.H4,
                                    children: A.intl.string(A.t.YBGjsr)
                                }),
                                (0, r.jsx)(c.ModalCloseButton, {
                                    onClick: () => {
                                        g.default.track(E.rMx.MODAL_DISMISSED, {
                                            type: E.jXE.GIFT_CATEGORY_SELECT_MODAL,
                                            location_object: E.qAy.BUTTON_CTA
                                        }),
                                            s();
                                    },
                                    className: T.cursorPointer
                                })
                            ]
                        }),
                        (0, r.jsx)(c.ModalContent, {
                            className: T.modalContent,
                            children: (0, r.jsx)(O, {
                                analyticsLocations: e,
                                giftRecipient: n,
                                analyticsObject: a,
                                onClose: s
                            })
                        })
                    ]
                })
            ]
        })
    );
}
((s = n || (n = {}))[(s.NITRO = 0)] = 'NITRO'), (s[(s.NITRO_BASIC = 1)] = 'NITRO_BASIC'), (s[(s.SHOP = 2)] = 'SHOP');
let R = () => ((0, m.Z)(), null);
function O(t) {
    let { giftRecipient: e, analyticsObject: i, onClose: s } = t,
        { showBothNitroSkusInCategorySelect: n } = f.G.useExperiment({ location: 'gift-button' }, { autoTrackExposure: !1 }),
        o = (0, I.hv)('CategoryButtons'),
        { analyticsLocations: a } = (0, d.ZP)(u.Z.GIFT_CATEGORY_SELECT_MODAL),
        h = (t) => {
            t && s();
        },
        _ = (t) => {
            let s = E.Qqv.NITRO_SKU_SELECTION;
            t === x.Si.TIER_2 ? (s = E.Qqv.NITRO_STANDARD) : t === x.Si.TIER_0 && (s = E.Qqv.NITRO_BASIC),
                (0, S.Z)({
                    isGift: !0,
                    giftRecipient: e,
                    giftingOrigin: x.Wt.DM_CHANNEL,
                    initialPlanId: null,
                    analyticsLocations: a,
                    subscriptionTier: t,
                    analyticsObject: {
                        ...i,
                        section: E.jXE.GIFT_CATEGORY_SELECT_MODAL,
                        object: E.qAy.GIFT_CATEGORY_OPTION,
                        objectType: s
                    },
                    onClose: h
                });
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(c.Clickable, {
                onClick: () => _(n ? x.Si.TIER_2 : void 0),
                children: (0, r.jsxs)('div', {
                    className: l()(T.categoryButton, T.nitroButton),
                    children: [
                        (0, r.jsx)(c.Text, {
                            variant: 'display-sm',
                            color: 'always-white',
                            className: T.buttonText,
                            children: A.intl.string(A.t['lG6a5+'])
                        }),
                        (0, r.jsx)(N, { imageType: 0 })
                    ]
                })
            }),
            n &&
                (0, r.jsx)(c.Clickable, {
                    onClick: () => _(x.Si.TIER_0),
                    children: (0, r.jsxs)('div', {
                        className: l()(T.nitroBasicButton, T.categoryButton),
                        children: [
                            (0, r.jsx)(c.Text, {
                                variant: 'display-sm',
                                color: 'always-white',
                                className: T.buttonText,
                                children: A.intl.string(A.t['t9uG/v'])
                            }),
                            (0, r.jsx)(N, { imageType: 1 })
                        ]
                    })
                }),
            (0, r.jsx)(c.Clickable, {
                onClick: () => {
                    (0, b.Z)({
                        isGift: !0,
                        giftingOrigin: x.Wt.DM_CHANNEL,
                        analyticsLocations: a,
                        analyticsObject: i,
                        giftRecipient: e,
                        onClose: h,
                        variantsReturnStyle: o
                    });
                },
                children: (0, r.jsxs)('div', {
                    className: l()(T.shopButton, T.categoryButton),
                    children: [
                        (0, r.jsx)(c.Text, {
                            variant: 'display-sm',
                            color: 'always-white',
                            className: T.buttonText,
                            children: A.intl.string(A.t.gFlB9f)
                        }),
                        (0, r.jsx)(N, { imageType: 2 })
                    ]
                })
            })
        ]
    });
}
function N(t) {
    let { imageType: e } = t,
        { avatarPlaceholderSrc: i } = (0, p.Z)({ size: (0, h.y9)(c.AvatarSizes.SIZE_80) }),
        s = (0, _.Z)('a_c3cffc19e9784f7d0b005eecdf1b566e', c.AvatarSizes.SIZE_80, !1);
    return 0 === e || 1 === e
        ? (0, r.jsx)('div', {
              className: T.wumpusImageContainer,
              children: (0, r.jsx)(c.Image, {
                  src: 1 === e ? C : y,
                  mediaLayoutType: v.hV.RESPONSIVE,
                  width: 122,
                  height: 110,
                  zoomable: !1
              })
          })
        : 2 === e
          ? (0, r.jsx)('div', {
                className: T.shopImageContainer,
                children: (0, r.jsx)(c.Avatar, {
                    src: i,
                    avatarDecoration: s,
                    size: c.AvatarSizes.SIZE_80,
                    'aria-hidden': !0
                })
            })
          : void 0;
}
