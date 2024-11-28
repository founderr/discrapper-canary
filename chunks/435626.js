i.r(e),
    i.d(e, {
        default: function () {
            return L;
        }
    });
var n,
    s,
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
    m = i(228624),
    I = i(267097),
    f = i(109213),
    b = i(626135),
    g = i(333867),
    v = i(963249),
    S = i(981631),
    E = i(217702),
    A = i(474936),
    x = i(388032),
    T = i(521050),
    y = i(476945),
    C = i(945182);
function L(t) {
    let { analyticsLocations: e, transitionState: i, onClose: n, giftRecipient: s, analyticsObject: a } = t;
    return (
        o.useEffect(() => {
            b.default.track(S.rMx.GIFT_CATEGORY_SELECT_MODAL_OPENED, {
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
                                    children: x.intl.string(x.t.YBGjsr)
                                }),
                                (0, r.jsx)(c.ModalCloseButton, {
                                    onClick: () => {
                                        b.default.track(S.rMx.MODAL_DISMISSED, {
                                            type: S.jXE.GIFT_CATEGORY_SELECT_MODAL,
                                            location_object: S.qAy.BUTTON_CTA
                                        }),
                                            n();
                                    },
                                    className: T.cursorPointer
                                })
                            ]
                        }),
                        (0, r.jsx)(c.ModalContent, {
                            className: T.modalContent,
                            children: (0, r.jsx)(O, {
                                analyticsLocations: e,
                                giftRecipient: s,
                                analyticsObject: a,
                                onClose: n
                            })
                        })
                    ]
                })
            ]
        })
    );
}
((n = s || (s = {}))[(n.NITRO = 0)] = 'NITRO'), (n[(n.NITRO_BASIC = 1)] = 'NITRO_BASIC'), (n[(n.SHOP = 2)] = 'SHOP');
let R = () => ((0, I.Z)(), null);
function O(t) {
    let { giftRecipient: e, analyticsObject: i, onClose: n } = t,
        { showBothNitroSkusInCategorySelect: s } = f.G.useExperiment({ location: 'gift-button' }, { autoTrackExposure: !1 }),
        o = (0, m.hv)('CategoryButtons'),
        { analyticsLocations: a } = (0, d.ZP)(u.Z.GIFT_CATEGORY_SELECT_MODAL),
        h = (t) => {
            t && n();
        },
        _ = (t) => {
            let n = S.Qqv.NITRO_SKU_SELECTION;
            t === A.Si.TIER_2 ? (n = S.Qqv.NITRO_STANDARD) : t === A.Si.TIER_0 && (n = S.Qqv.NITRO_BASIC),
                (0, v.Z)({
                    isGift: !0,
                    giftRecipient: e,
                    giftingOrigin: A.Wt.DM_CHANNEL,
                    initialPlanId: null,
                    analyticsLocations: a,
                    subscriptionTier: t,
                    analyticsObject: {
                        ...i,
                        section: S.jXE.GIFT_CATEGORY_SELECT_MODAL,
                        object: S.qAy.GIFT_CATEGORY_OPTION,
                        objectType: n
                    },
                    onClose: h
                });
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(c.Clickable, {
                onClick: () => _(s ? A.Si.TIER_2 : void 0),
                children: (0, r.jsxs)('div', {
                    className: l()(T.categoryButton, T.nitroButton),
                    children: [
                        (0, r.jsx)(c.Text, {
                            variant: 'display-sm',
                            color: 'always-white',
                            className: T.buttonText,
                            children: x.intl.string(x.t['lG6a5+'])
                        }),
                        (0, r.jsx)(N, { imageType: 0 })
                    ]
                })
            }),
            s &&
                (0, r.jsx)(c.Clickable, {
                    onClick: () => _(A.Si.TIER_0),
                    children: (0, r.jsxs)('div', {
                        className: l()(T.nitroBasicButton, T.categoryButton),
                        children: [
                            (0, r.jsx)(c.Text, {
                                variant: 'display-sm',
                                color: 'always-white',
                                className: T.buttonText,
                                children: x.intl.string(x.t['t9uG/v'])
                            }),
                            (0, r.jsx)(N, { imageType: 1 })
                        ]
                    })
                }),
            (0, r.jsx)(c.Clickable, {
                onClick: () => {
                    (0, g.Z)({
                        isGift: !0,
                        giftingOrigin: A.Wt.DM_CHANNEL,
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
                            children: x.intl.string(x.t.gFlB9f)
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
        n = (0, _.Z)('a_c3cffc19e9784f7d0b005eecdf1b566e', c.AvatarSizes.SIZE_80, !1);
    return 0 === e || 1 === e
        ? (0, r.jsx)('div', {
              className: T.wumpusImageContainer,
              children: (0, r.jsx)(c.Image, {
                  src: 1 === e ? y : C,
                  mediaLayoutType: E.hV.RESPONSIVE,
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
                    avatarDecoration: n,
                    size: c.AvatarSizes.SIZE_80,
                    'aria-hidden': !0
                })
            })
          : void 0;
}
