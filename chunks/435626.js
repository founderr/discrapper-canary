n.r(t),
    n.d(t, {
        default: function () {
            return A;
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
    p = n(1585),
    f = n(821982),
    h = n(125988),
    _ = n(228624),
    v = n(267097),
    b = n(109213),
    g = n(626135),
    m = n(333867),
    C = n(963249),
    x = n(981631),
    I = n(217702),
    S = n(474936),
    E = n(388032),
    T = n(521050),
    y = n(476945),
    w = n(945182);
function A(e) {
    let { analyticsLocations: t, transitionState: n, onClose: r, giftRecipient: o, analyticsObject: s } = e;
    return (
        a.useEffect(() => {
            g.default.track(x.rMx.GIFT_CATEGORY_SELECT_MODAL_OPENED, {
                location: s,
                location_stack: t
            });
        }, []),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(O, {}),
                (0, i.jsxs)(c.ModalRoot, {
                    size: c.ModalSize.DYNAMIC,
                    transitionState: n,
                    className: T.modalRoot,
                    children: [
                        (0, i.jsxs)(c.ModalHeader, {
                            className: T.header,
                            separator: !1,
                            children: [
                                (0, i.jsx)(c.FormTitle, {
                                    tag: c.FormTitleTags.H4,
                                    children: E.intl.string(E.t.YBGjsr)
                                }),
                                (0, i.jsx)(c.ModalCloseButton, {
                                    onClick: () => {
                                        g.default.track(x.rMx.MODAL_DISMISSED, {
                                            type: x.jXE.GIFT_CATEGORY_SELECT_MODAL,
                                            location_object: x.qAy.BUTTON_CTA
                                        }),
                                            r();
                                    },
                                    className: T.cursorPointer
                                })
                            ]
                        }),
                        (0, i.jsx)(c.ModalContent, {
                            className: T.modalContent,
                            children: (0, i.jsx)(R, {
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
let O = () => ((0, v.Z)(), null);
function R(e) {
    let { giftRecipient: t, analyticsObject: n, onClose: r } = e,
        { showBothNitroSkusInCategorySelect: o } = b.G.useExperiment({ location: 'gift-button' }, { autoTrackExposure: !1 }),
        a = (0, _.hv)('CategoryButtons'),
        { analyticsLocations: s } = (0, u.ZP)(d.Z.GIFT_CATEGORY_SELECT_MODAL),
        p = (e) => {
            e && r();
        },
        f = (e) => {
            let r = x.Qqv.NITRO_SKU_SELECTION;
            e === S.Si.TIER_2 ? (r = x.Qqv.NITRO_STANDARD) : e === S.Si.TIER_0 && (r = x.Qqv.NITRO_BASIC),
                (0, C.Z)({
                    isGift: !0,
                    giftRecipient: t,
                    giftingOrigin: S.Wt.DM_CHANNEL,
                    initialPlanId: null,
                    analyticsLocations: s,
                    subscriptionTier: e,
                    analyticsObject: {
                        ...n,
                        section: x.jXE.GIFT_CATEGORY_SELECT_MODAL,
                        object: x.qAy.GIFT_CATEGORY_OPTION,
                        objectType: r
                    },
                    onClose: p
                });
        };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(c.Clickable, {
                onClick: () => f(o ? S.Si.TIER_2 : void 0),
                children: (0, i.jsxs)('div', {
                    className: l()(T.categoryButton, T.nitroButton),
                    children: [
                        (0, i.jsx)(c.Text, {
                            variant: 'display-sm',
                            color: 'always-white',
                            className: T.buttonText,
                            children: E.intl.string(E.t['lG6a5+'])
                        }),
                        (0, i.jsx)(F, { imageType: 0 })
                    ]
                })
            }),
            o &&
                (0, i.jsx)(c.Clickable, {
                    onClick: () => f(S.Si.TIER_0),
                    children: (0, i.jsxs)('div', {
                        className: l()(T.nitroBasicButton, T.categoryButton),
                        children: [
                            (0, i.jsx)(c.Text, {
                                variant: 'display-sm',
                                color: 'always-white',
                                className: T.buttonText,
                                children: E.intl.string(E.t['t9uG/v'])
                            }),
                            (0, i.jsx)(F, { imageType: 1 })
                        ]
                    })
                }),
            (0, i.jsx)(c.Clickable, {
                onClick: () => {
                    (0, m.Z)({
                        isGift: !0,
                        giftingOrigin: S.Wt.DM_CHANNEL,
                        analyticsLocations: s,
                        analyticsObject: n,
                        giftRecipient: t,
                        onClose: p,
                        variantsReturnStyle: a
                    });
                },
                children: (0, i.jsxs)('div', {
                    className: l()(T.shopButton, T.categoryButton),
                    children: [
                        (0, i.jsx)(c.Text, {
                            variant: 'display-sm',
                            color: 'always-white',
                            className: T.buttonText,
                            children: E.intl.string(E.t.gFlB9f)
                        }),
                        (0, i.jsx)(F, { imageType: 2 })
                    ]
                })
            })
        ]
    });
}
function F(e) {
    let { imageType: t } = e,
        { avatarPlaceholderSrc: n } = (0, h.Z)({ size: (0, p.y9)(c.AvatarSizes.SIZE_80) }),
        r = (0, f.Z)('a_c3cffc19e9784f7d0b005eecdf1b566e', c.AvatarSizes.SIZE_80, !1);
    return 0 === t || 1 === t
        ? (0, i.jsx)('div', {
              className: T.wumpusImageContainer,
              children: (0, i.jsx)(c.Image, {
                  src: 1 === t ? y : w,
                  mediaLayoutType: I.hV.RESPONSIVE,
                  width: 122,
                  height: 110,
                  zoomable: !1
              })
          })
        : 2 === t
          ? (0, i.jsx)('div', {
                className: T.shopImageContainer,
                children: (0, i.jsx)(c.Avatar, {
                    src: n,
                    avatarDecoration: r,
                    size: c.AvatarSizes.SIZE_80,
                    'aria-hidden': !0
                })
            })
          : void 0;
}
