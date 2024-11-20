r.r(t),
    r.d(t, {
        default: function () {
            return A;
        }
    });
var n,
    o,
    i = r(200651),
    a = r(192379),
    s = r(120356),
    c = r.n(s),
    l = r(481060),
    d = r(100527),
    u = r(906732),
    f = r(1585),
    p = r(821982),
    h = r(125988),
    _ = r(228624),
    v = r(267097),
    b = r(109213),
    g = r(626135),
    m = r(333867),
    C = r(963249),
    x = r(981631),
    I = r(217702),
    S = r(474936),
    E = r(388032),
    T = r(601674),
    y = r(476945),
    w = r(945182);
function A(e) {
    let { analyticsLocations: t, transitionState: r, onClose: n, giftRecipient: o, analyticsObject: s } = e;
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
                (0, i.jsxs)(l.ModalRoot, {
                    size: l.ModalSize.DYNAMIC,
                    transitionState: r,
                    className: T.modalRoot,
                    children: [
                        (0, i.jsxs)(l.ModalHeader, {
                            className: T.header,
                            separator: !1,
                            children: [
                                (0, i.jsx)(l.FormTitle, {
                                    tag: l.FormTitleTags.H4,
                                    children: E.intl.string(E.t.YBGjsr)
                                }),
                                (0, i.jsx)(l.ModalCloseButton, {
                                    onClick: () => {
                                        g.default.track(x.rMx.MODAL_DISMISSED, {
                                            type: x.jXE.GIFT_CATEGORY_SELECT_MODAL,
                                            location_object: x.qAy.BUTTON_CTA
                                        }),
                                            n();
                                    },
                                    className: T.cursorPointer
                                })
                            ]
                        }),
                        (0, i.jsx)(l.ModalContent, {
                            className: T.modalContent,
                            children: (0, i.jsx)(R, {
                                analyticsLocations: t,
                                giftRecipient: o,
                                analyticsObject: s,
                                onClose: n
                            })
                        })
                    ]
                })
            ]
        })
    );
}
((n = o || (o = {}))[(n.NITRO = 0)] = 'NITRO'), (n[(n.NITRO_BASIC = 1)] = 'NITRO_BASIC'), (n[(n.SHOP = 2)] = 'SHOP');
let O = () => ((0, v.Z)(), null);
function R(e) {
    let { giftRecipient: t, analyticsObject: r, onClose: n } = e,
        { showBothNitroSkusInCategorySelect: o } = b.G.useExperiment({ location: 'gift-button' }, { autoTrackExposure: !1 }),
        a = (0, _.hv)('CategoryButtons'),
        { analyticsLocations: s } = (0, u.ZP)(d.Z.GIFT_CATEGORY_SELECT_MODAL),
        f = (e) => {
            e && n();
        },
        p = (e) => {
            let n = x.Qqv.NITRO_SKU_SELECTION;
            e === S.Si.TIER_2 ? (n = x.Qqv.NITRO_STANDARD) : e === S.Si.TIER_0 && (n = x.Qqv.NITRO_BASIC),
                (0, C.Z)({
                    isGift: !0,
                    giftRecipient: t,
                    giftingOrigin: S.Wt.DM_CHANNEL,
                    initialPlanId: null,
                    analyticsLocations: s,
                    subscriptionTier: e,
                    analyticsObject: {
                        ...r,
                        section: x.jXE.GIFT_CATEGORY_SELECT_MODAL,
                        object: x.qAy.GIFT_CATEGORY_OPTION,
                        objectType: n
                    },
                    onClose: f
                });
        };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(l.Clickable, {
                onClick: () => p(o ? S.Si.TIER_2 : void 0),
                children: (0, i.jsxs)('div', {
                    className: c()(T.categoryButton, T.nitroButton),
                    children: [
                        (0, i.jsx)(l.Text, {
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
                (0, i.jsx)(l.Clickable, {
                    onClick: () => p(S.Si.TIER_0),
                    children: (0, i.jsxs)('div', {
                        className: c()(T.nitroBasicButton, T.categoryButton),
                        children: [
                            (0, i.jsx)(l.Text, {
                                variant: 'display-sm',
                                color: 'always-white',
                                className: T.buttonText,
                                children: E.intl.string(E.t['t9uG/v'])
                            }),
                            (0, i.jsx)(F, { imageType: 1 })
                        ]
                    })
                }),
            (0, i.jsx)(l.Clickable, {
                onClick: () => {
                    (0, m.Z)({
                        isGift: !0,
                        giftingOrigin: S.Wt.DM_CHANNEL,
                        analyticsLocations: s,
                        analyticsObject: r,
                        giftRecipient: t,
                        onClose: f,
                        variantsReturnStyle: a
                    });
                },
                children: (0, i.jsxs)('div', {
                    className: c()(T.shopButton, T.categoryButton),
                    children: [
                        (0, i.jsx)(l.Text, {
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
        { avatarPlaceholderSrc: r } = (0, h.Z)({ size: (0, f.y9)(l.AvatarSizes.SIZE_80) }),
        n = (0, p.Z)('a_c3cffc19e9784f7d0b005eecdf1b566e', l.AvatarSizes.SIZE_80, !1);
    return 0 === t || 1 === t
        ? (0, i.jsx)('div', {
              className: T.wumpusImageContainer,
              children: (0, i.jsx)(l.Image, {
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
                children: (0, i.jsx)(l.Avatar, {
                    src: r,
                    avatarDecoration: n,
                    size: l.AvatarSizes.SIZE_80,
                    'aria-hidden': !0
                })
            })
          : void 0;
}
