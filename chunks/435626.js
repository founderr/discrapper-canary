i.r(t),
    i.d(t, {
        default: function () {
            return A;
        }
    });
var n,
    r,
    s = i(200651),
    o = i(192379),
    a = i(120356),
    l = i.n(a),
    c = i(481060),
    u = i(100527),
    d = i(906732),
    p = i(1585),
    h = i(821982),
    _ = i(125988),
    b = i(267097),
    g = i(109213),
    v = i(626135),
    f = i(333867),
    m = i(963249),
    I = i(981631),
    x = i(217702),
    S = i(474936),
    E = i(388032),
    C = i(601674),
    T = i(476945),
    y = i(945182);
function A(e) {
    let { analyticsLocations: t, transitionState: i, onClose: n, giftRecipient: r, analyticsObject: a } = e;
    return (
        o.useEffect(() => {
            v.default.track(I.rMx.GIFT_CATEGORY_SELECT_MODAL_OPENED, {
                ...a,
                location_stack: t
            });
        }, []),
        (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(O, {}),
                (0, s.jsxs)(c.ModalRoot, {
                    size: c.ModalSize.SMALL,
                    transitionState: i,
                    children: [
                        (0, s.jsxs)(c.ModalHeader, {
                            className: C.header,
                            separator: !1,
                            children: [
                                (0, s.jsx)(c.FormTitle, {
                                    tag: c.FormTitleTags.H4,
                                    children: E.intl.string(E.t.YBGjsr)
                                }),
                                (0, s.jsx)(c.ModalCloseButton, {
                                    onClick: () => {
                                        v.default.track(I.rMx.MODAL_DISMISSED, {
                                            type: I.jXE.GIFT_CATEGORY_SELECT_MODAL,
                                            location_object: I.qAy.BUTTON_CTA
                                        }),
                                            n();
                                    },
                                    className: C.cursorPointer
                                })
                            ]
                        }),
                        (0, s.jsx)(c.ModalContent, {
                            className: C.modalContent,
                            children: (0, s.jsx)(R, {
                                analyticsLocations: t,
                                giftRecipient: r,
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
((n = r || (r = {}))[(n.NITRO = 0)] = 'NITRO'), (n[(n.NITRO_BASIC = 1)] = 'NITRO_BASIC'), (n[(n.SHOP = 2)] = 'SHOP');
let O = () => ((0, b.Z)(), null);
function R(e) {
    let { giftRecipient: t, analyticsObject: i, onClose: n } = e,
        { showBothNitroSkusInCategorySelect: r } = g.G.useExperiment({ location: 'gift-button' }, { autoTrackExposure: !1 }),
        { analyticsLocations: o } = (0, d.ZP)(u.Z.GIFT_CATEGORY_SELECT_MODAL),
        a = (e) => {
            e && n();
        },
        p = (e) => {
            let n = I.Qqv.NITRO_SKU_SELECTION;
            e === S.Si.TIER_2 ? (n = I.Qqv.NITRO_STANDARD) : e === S.Si.TIER_0 && (n = I.Qqv.NITRO_BASIC),
                (0, m.Z)({
                    isGift: !0,
                    giftRecipient: t,
                    giftingOrigin: S.Wt.DM_CHANNEL,
                    initialPlanId: null,
                    analyticsLocations: o,
                    subscriptionTier: e,
                    analyticsObject: {
                        ...i,
                        section: I.jXE.GIFT_CATEGORY_SELECT_MODAL,
                        object: I.qAy.GIFT_CATEGORY_OPTION,
                        objectType: n
                    },
                    onClose: a
                });
        };
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(c.Clickable, {
                onClick: () => p(r ? S.Si.TIER_2 : void 0),
                children: (0, s.jsxs)('div', {
                    className: l()(C.categoryButton, C.nitroButton),
                    children: [
                        (0, s.jsx)(c.Text, {
                            variant: 'display-sm',
                            color: 'always-white',
                            className: C.buttonText,
                            children: E.intl.string(E.t['lG6a5+'])
                        }),
                        (0, s.jsx)(k, { imageType: 0 })
                    ]
                })
            }),
            r &&
                (0, s.jsx)(c.Clickable, {
                    onClick: () => p(S.Si.TIER_0),
                    children: (0, s.jsxs)('div', {
                        className: l()(C.nitroBasicButton, C.categoryButton),
                        children: [
                            (0, s.jsx)(c.Text, {
                                variant: 'display-sm',
                                color: 'always-white',
                                className: C.buttonText,
                                children: E.intl.string(E.t['t9uG/v'])
                            }),
                            (0, s.jsx)(k, { imageType: 1 })
                        ]
                    })
                }),
            (0, s.jsx)(c.Clickable, {
                onClick: () => {
                    (0, f.Z)({
                        isGift: !0,
                        giftingOrigin: S.Wt.DM_CHANNEL,
                        analyticsLocations: o,
                        analyticsObject: i,
                        giftRecipient: t,
                        onClose: a
                    });
                },
                children: (0, s.jsxs)('div', {
                    className: l()(C.shopButton, C.categoryButton),
                    children: [
                        (0, s.jsx)(c.Text, {
                            variant: 'display-sm',
                            color: 'always-white',
                            className: C.buttonText,
                            children: E.intl.string(E.t.gFlB9f)
                        }),
                        (0, s.jsx)(k, { imageType: 2 })
                    ]
                })
            })
        ]
    });
}
function k(e) {
    let { imageType: t } = e,
        { avatarPlaceholderSrc: i } = (0, _.Z)({ size: (0, p.y9)(c.AvatarSizes.SIZE_80) }),
        n = (0, h.Z)('a_c3cffc19e9784f7d0b005eecdf1b566e', c.AvatarSizes.SIZE_80, !1);
    return 0 === t || 1 === t
        ? (0, s.jsx)('div', {
              className: C.wumpusImageContainer,
              children: (0, s.jsx)(c.Image, {
                  src: 1 === t ? T : y,
                  mediaLayoutType: x.hV.RESPONSIVE,
                  width: 122,
                  height: 110,
                  zoomable: !1
              })
          })
        : 2 === t
          ? (0, s.jsx)('div', {
                className: C.shopImageContainer,
                children: (0, s.jsx)(c.Avatar, {
                    src: i,
                    avatarDecoration: n,
                    size: c.AvatarSizes.SIZE_80,
                    'aria-hidden': !0
                })
            })
          : void 0;
}
