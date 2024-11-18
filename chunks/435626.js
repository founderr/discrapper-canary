r.r(t),
    r.d(t, {
        default: function () {
            return w;
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
    _ = r(267097),
    v = r(109213),
    b = r(626135),
    g = r(333867),
    m = r(963249),
    C = r(981631),
    x = r(217702),
    I = r(474936),
    S = r(388032),
    E = r(559562),
    T = r(476945),
    y = r(945182);
function w(e) {
    let { analyticsLocations: t, transitionState: r, onClose: n, giftRecipient: o, analyticsObject: s } = e;
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
                (0, i.jsxs)(l.ModalRoot, {
                    size: l.ModalSize.DYNAMIC,
                    transitionState: r,
                    className: E.modalRoot,
                    children: [
                        (0, i.jsxs)(l.ModalHeader, {
                            className: E.header,
                            separator: !1,
                            children: [
                                (0, i.jsx)(l.FormTitle, {
                                    tag: l.FormTitleTags.H4,
                                    children: S.intl.string(S.t.YBGjsr)
                                }),
                                (0, i.jsx)(l.ModalCloseButton, {
                                    onClick: () => {
                                        b.default.track(C.rMx.MODAL_DISMISSED, {
                                            type: C.jXE.GIFT_CATEGORY_SELECT_MODAL,
                                            location_object: C.qAy.BUTTON_CTA
                                        }),
                                            n();
                                    },
                                    className: E.cursorPointer
                                })
                            ]
                        }),
                        (0, i.jsx)(l.ModalContent, {
                            className: E.modalContent,
                            children: (0, i.jsx)(O, {
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
let A = () => ((0, _.Z)(), null);
function O(e) {
    let { giftRecipient: t, analyticsObject: r, onClose: n } = e,
        { showBothNitroSkusInCategorySelect: o } = v.G.useExperiment({ location: 'gift-button' }, { autoTrackExposure: !1 }),
        { analyticsLocations: a } = (0, u.ZP)(d.Z.GIFT_CATEGORY_SELECT_MODAL),
        s = (e) => {
            e && n();
        },
        f = (e) => {
            let n = C.Qqv.NITRO_SKU_SELECTION;
            e === I.Si.TIER_2 ? (n = C.Qqv.NITRO_STANDARD) : e === I.Si.TIER_0 && (n = C.Qqv.NITRO_BASIC),
                (0, m.Z)({
                    isGift: !0,
                    giftRecipient: t,
                    giftingOrigin: I.Wt.DM_CHANNEL,
                    initialPlanId: null,
                    analyticsLocations: a,
                    subscriptionTier: e,
                    analyticsObject: {
                        ...r,
                        section: C.jXE.GIFT_CATEGORY_SELECT_MODAL,
                        object: C.qAy.GIFT_CATEGORY_OPTION,
                        objectType: n
                    },
                    onClose: s
                });
        };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(l.Clickable, {
                onClick: () => f(o ? I.Si.TIER_2 : void 0),
                children: (0, i.jsxs)('div', {
                    className: c()(E.categoryButton, E.nitroButton),
                    children: [
                        (0, i.jsx)(l.Text, {
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
                (0, i.jsx)(l.Clickable, {
                    onClick: () => f(I.Si.TIER_0),
                    children: (0, i.jsxs)('div', {
                        className: c()(E.nitroBasicButton, E.categoryButton),
                        children: [
                            (0, i.jsx)(l.Text, {
                                variant: 'display-sm',
                                color: 'always-white',
                                className: E.buttonText,
                                children: S.intl.string(S.t['t9uG/v'])
                            }),
                            (0, i.jsx)(R, { imageType: 1 })
                        ]
                    })
                }),
            (0, i.jsx)(l.Clickable, {
                onClick: () => {
                    (0, g.Z)({
                        isGift: !0,
                        giftingOrigin: I.Wt.DM_CHANNEL,
                        analyticsLocations: a,
                        analyticsObject: r,
                        giftRecipient: t,
                        onClose: s
                    });
                },
                children: (0, i.jsxs)('div', {
                    className: c()(E.shopButton, E.categoryButton),
                    children: [
                        (0, i.jsx)(l.Text, {
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
        { avatarPlaceholderSrc: r } = (0, h.Z)({ size: (0, f.y9)(l.AvatarSizes.SIZE_80) }),
        n = (0, p.Z)('a_c3cffc19e9784f7d0b005eecdf1b566e', l.AvatarSizes.SIZE_80, !1);
    return 0 === t || 1 === t
        ? (0, i.jsx)('div', {
              className: E.wumpusImageContainer,
              children: (0, i.jsx)(l.Image, {
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
                children: (0, i.jsx)(l.Avatar, {
                    src: r,
                    avatarDecoration: n,
                    size: l.AvatarSizes.SIZE_80,
                    'aria-hidden': !0
                })
            })
          : void 0;
}
