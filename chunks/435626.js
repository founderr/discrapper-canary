n.r(t),
    n.d(t, {
        default: function () {
            return w;
        }
    });
var i,
    o,
    r = n(200651),
    a = n(192379),
    s = n(120356),
    c = n.n(s),
    d = n(481060),
    l = n(100527),
    u = n(906732),
    _ = n(1585),
    f = n(821982),
    p = n(125988),
    h = n(228624),
    b = n(267097),
    v = n(109213),
    m = n(626135),
    C = n(333867),
    g = n(963249),
    I = n(981631),
    S = n(217702),
    E = n(474936),
    T = n(388032),
    x = n(521050),
    A = n(476945),
    y = n(945182);
function w(e) {
    let { analyticsLocations: t, transitionState: n, onClose: i, giftRecipient: o, analyticsObject: s } = e;
    return (
        a.useEffect(() => {
            m.default.track(I.rMx.GIFT_CATEGORY_SELECT_MODAL_OPENED, {
                location: s,
                location_stack: t
            });
        }, []),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(j, {}),
                (0, r.jsxs)(d.ModalRoot, {
                    size: d.ModalSize.DYNAMIC,
                    transitionState: n,
                    className: x.modalRoot,
                    children: [
                        (0, r.jsxs)(d.ModalHeader, {
                            className: x.header,
                            separator: !1,
                            children: [
                                (0, r.jsx)(d.FormTitle, {
                                    tag: d.FormTitleTags.H4,
                                    children: T.intl.string(T.t.YBGjsr)
                                }),
                                (0, r.jsx)(d.ModalCloseButton, {
                                    onClick: () => {
                                        m.default.track(I.rMx.MODAL_DISMISSED, {
                                            type: I.jXE.GIFT_CATEGORY_SELECT_MODAL,
                                            location_object: I.qAy.BUTTON_CTA
                                        }),
                                            i();
                                    },
                                    className: x.cursorPointer
                                })
                            ]
                        }),
                        (0, r.jsx)(d.ModalContent, {
                            className: x.modalContent,
                            children: (0, r.jsx)(O, {
                                analyticsLocations: t,
                                giftRecipient: o,
                                analyticsObject: s,
                                onClose: i
                            })
                        })
                    ]
                })
            ]
        })
    );
}
((i = o || (o = {}))[(i.NITRO = 0)] = 'NITRO'), (i[(i.NITRO_BASIC = 1)] = 'NITRO_BASIC'), (i[(i.SHOP = 2)] = 'SHOP');
let j = () => ((0, b.Z)(), null);
function O(e) {
    let { giftRecipient: t, analyticsObject: n, onClose: i } = e,
        { showBothNitroSkusInCategorySelect: o } = v.G.useExperiment({ location: 'gift-button' }, { autoTrackExposure: !1 }),
        a = (0, h.hv)('CategoryButtons'),
        { analyticsLocations: s } = (0, u.ZP)(l.Z.GIFT_CATEGORY_SELECT_MODAL),
        _ = (e) => {
            e && i();
        },
        f = (e) => {
            let i = I.Qqv.NITRO_SKU_SELECTION;
            e === E.Si.TIER_2 ? (i = I.Qqv.NITRO_STANDARD) : e === E.Si.TIER_0 && (i = I.Qqv.NITRO_BASIC),
                (0, g.Z)({
                    isGift: !0,
                    giftRecipient: t,
                    giftingOrigin: E.Wt.DM_CHANNEL,
                    initialPlanId: null,
                    analyticsLocations: s,
                    subscriptionTier: e,
                    analyticsObject: {
                        ...n,
                        section: I.jXE.GIFT_CATEGORY_SELECT_MODAL,
                        object: I.qAy.GIFT_CATEGORY_OPTION,
                        objectType: i
                    },
                    onClose: _
                });
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(d.Clickable, {
                onClick: () => f(o ? E.Si.TIER_2 : void 0),
                children: (0, r.jsxs)('div', {
                    className: c()(x.categoryButton, x.nitroButton),
                    children: [
                        (0, r.jsx)(d.Text, {
                            variant: 'display-sm',
                            color: 'always-white',
                            className: x.buttonText,
                            children: T.intl.string(T.t['lG6a5+'])
                        }),
                        (0, r.jsx)(R, { imageType: 0 })
                    ]
                })
            }),
            o &&
                (0, r.jsx)(d.Clickable, {
                    onClick: () => f(E.Si.TIER_0),
                    children: (0, r.jsxs)('div', {
                        className: c()(x.nitroBasicButton, x.categoryButton),
                        children: [
                            (0, r.jsx)(d.Text, {
                                variant: 'display-sm',
                                color: 'always-white',
                                className: x.buttonText,
                                children: T.intl.string(T.t['t9uG/v'])
                            }),
                            (0, r.jsx)(R, { imageType: 1 })
                        ]
                    })
                }),
            (0, r.jsx)(d.Clickable, {
                onClick: () => {
                    (0, C.Z)({
                        isGift: !0,
                        giftingOrigin: E.Wt.DM_CHANNEL,
                        analyticsLocations: s,
                        analyticsObject: n,
                        giftRecipient: t,
                        onClose: _,
                        variantsReturnStyle: a
                    });
                },
                children: (0, r.jsxs)('div', {
                    className: c()(x.shopButton, x.categoryButton),
                    children: [
                        (0, r.jsx)(d.Text, {
                            variant: 'display-sm',
                            color: 'always-white',
                            className: x.buttonText,
                            children: T.intl.string(T.t.gFlB9f)
                        }),
                        (0, r.jsx)(R, { imageType: 2 })
                    ]
                })
            })
        ]
    });
}
function R(e) {
    let { imageType: t } = e,
        { avatarPlaceholderSrc: n } = (0, p.Z)({ size: (0, _.y9)(d.AvatarSizes.SIZE_80) }),
        i = (0, f.Z)('a_c3cffc19e9784f7d0b005eecdf1b566e', d.AvatarSizes.SIZE_80, !1);
    return 0 === t || 1 === t
        ? (0, r.jsx)('div', {
              className: x.wumpusImageContainer,
              children: (0, r.jsx)(d.Image, {
                  src: 1 === t ? A : y,
                  mediaLayoutType: S.hV.RESPONSIVE,
                  width: 122,
                  height: 110,
                  zoomable: !1
              })
          })
        : 2 === t
          ? (0, r.jsx)('div', {
                className: x.shopImageContainer,
                children: (0, r.jsx)(d.Avatar, {
                    src: n,
                    avatarDecoration: i,
                    size: d.AvatarSizes.SIZE_80,
                    'aria-hidden': !0
                })
            })
          : void 0;
}
