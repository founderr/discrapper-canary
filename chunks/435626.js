n.r(t),
    n.d(t, {
        default: function () {
            return w;
        }
    });
var r,
    o,
    i = n(200651),
    a = n(192379),
    s = n(120356),
    l = n.n(s),
    c = n(481060),
    d = n(100527),
    u = n(906732),
    f = n(1585),
    p = n(821982),
    h = n(125988),
    _ = n(267097),
    v = n(109213),
    b = n(626135),
    g = n(333867),
    m = n(963249),
    C = n(981631),
    x = n(217702),
    I = n(474936),
    S = n(388032),
    E = n(601674),
    T = n(476945),
    y = n(945182);
function w(e) {
    let { analyticsLocations: t, transitionState: n, onClose: r, giftRecipient: o, analyticsObject: s } = e;
    return (
        a.useEffect(() => {
            b.default.track(C.rMx.GIFT_CATEGORY_SELECT_MODAL_OPENED, {
                location: s,
                location_stack: t
            });
        }, []),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(A, {}),
                (0, i.jsxs)(c.ModalRoot, {
                    size: c.ModalSize.DYNAMIC,
                    transitionState: n,
                    className: E.modalRoot,
                    children: [
                        (0, i.jsxs)(c.ModalHeader, {
                            className: E.header,
                            separator: !1,
                            children: [
                                (0, i.jsx)(c.FormTitle, {
                                    tag: c.FormTitleTags.H4,
                                    children: S.intl.string(S.t.YBGjsr)
                                }),
                                (0, i.jsx)(c.ModalCloseButton, {
                                    onClick: () => {
                                        b.default.track(C.rMx.MODAL_DISMISSED, {
                                            type: C.jXE.GIFT_CATEGORY_SELECT_MODAL,
                                            location_object: C.qAy.BUTTON_CTA
                                        }),
                                            r();
                                    },
                                    className: E.cursorPointer
                                })
                            ]
                        }),
                        (0, i.jsx)(c.ModalContent, {
                            className: E.modalContent,
                            children: (0, i.jsx)(O, {
                                analyticsLocations: t,
                                giftRecipient: o,
                                analyticsObject: s,
                                onClose: r
                            })
                        })
                    ]
                })
            ]
        })
    );
}
((r = o || (o = {}))[(r.NITRO = 0)] = 'NITRO'), (r[(r.NITRO_BASIC = 1)] = 'NITRO_BASIC'), (r[(r.SHOP = 2)] = 'SHOP');
let A = () => ((0, _.Z)(), null);
function O(e) {
    let { giftRecipient: t, analyticsObject: n, onClose: r } = e,
        { showBothNitroSkusInCategorySelect: o } = v.G.useExperiment({ location: 'gift-button' }, { autoTrackExposure: !1 }),
        { analyticsLocations: a } = (0, u.ZP)(d.Z.GIFT_CATEGORY_SELECT_MODAL),
        s = (e) => {
            e && r();
        },
        f = (e) => {
            let r = C.Qqv.NITRO_SKU_SELECTION;
            e === I.Si.TIER_2 ? (r = C.Qqv.NITRO_STANDARD) : e === I.Si.TIER_0 && (r = C.Qqv.NITRO_BASIC),
                (0, m.Z)({
                    isGift: !0,
                    giftRecipient: t,
                    giftingOrigin: I.Wt.DM_CHANNEL,
                    initialPlanId: null,
                    analyticsLocations: a,
                    subscriptionTier: e,
                    analyticsObject: {
                        ...n,
                        section: C.jXE.GIFT_CATEGORY_SELECT_MODAL,
                        object: C.qAy.GIFT_CATEGORY_OPTION,
                        objectType: r
                    },
                    onClose: s
                });
        };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(c.Clickable, {
                onClick: () => f(o ? I.Si.TIER_2 : void 0),
                children: (0, i.jsxs)('div', {
                    className: l()(E.categoryButton, E.nitroButton),
                    children: [
                        (0, i.jsx)(c.Text, {
                            variant: 'display-sm',
                            color: 'always-white',
                            className: E.buttonText,
                            children: S.intl.string(S.t['lG6a5+'])
                        }),
                        (0, i.jsx)(R, { imageType: 0 })
                    ]
                })
            }),
            o &&
                (0, i.jsx)(c.Clickable, {
                    onClick: () => f(I.Si.TIER_0),
                    children: (0, i.jsxs)('div', {
                        className: l()(E.nitroBasicButton, E.categoryButton),
                        children: [
                            (0, i.jsx)(c.Text, {
                                variant: 'display-sm',
                                color: 'always-white',
                                className: E.buttonText,
                                children: S.intl.string(S.t['t9uG/v'])
                            }),
                            (0, i.jsx)(R, { imageType: 1 })
                        ]
                    })
                }),
            (0, i.jsx)(c.Clickable, {
                onClick: () => {
                    (0, g.Z)({
                        isGift: !0,
                        giftingOrigin: I.Wt.DM_CHANNEL,
                        analyticsLocations: a,
                        analyticsObject: n,
                        giftRecipient: t,
                        onClose: s
                    });
                },
                children: (0, i.jsxs)('div', {
                    className: l()(E.shopButton, E.categoryButton),
                    children: [
                        (0, i.jsx)(c.Text, {
                            variant: 'display-sm',
                            color: 'always-white',
                            className: E.buttonText,
                            children: S.intl.string(S.t.gFlB9f)
                        }),
                        (0, i.jsx)(R, { imageType: 2 })
                    ]
                })
            })
        ]
    });
}
function R(e) {
    let { imageType: t } = e,
        { avatarPlaceholderSrc: n } = (0, h.Z)({ size: (0, f.y9)(c.AvatarSizes.SIZE_80) }),
        r = (0, p.Z)('a_c3cffc19e9784f7d0b005eecdf1b566e', c.AvatarSizes.SIZE_80, !1);
    return 0 === t || 1 === t
        ? (0, i.jsx)('div', {
              className: E.wumpusImageContainer,
              children: (0, i.jsx)(c.Image, {
                  src: 1 === t ? T : y,
                  mediaLayoutType: x.hV.RESPONSIVE,
                  width: 122,
                  height: 110,
                  zoomable: !1
              })
          })
        : 2 === t
          ? (0, i.jsx)('div', {
                className: E.shopImageContainer,
                children: (0, i.jsx)(c.Avatar, {
                    src: n,
                    avatarDecoration: r,
                    size: c.AvatarSizes.SIZE_80,
                    'aria-hidden': !0
                })
            })
          : void 0;
}
