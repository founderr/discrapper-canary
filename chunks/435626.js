i.r(t),
    i.d(t, {
        default: function () {
            return E;
        }
    });
var n,
    r,
    s = i(200651);
i(192379);
var o = i(120356),
    a = i.n(o),
    l = i(481060),
    c = i(1585),
    u = i(821982),
    d = i(125988),
    p = i(267097),
    h = i(109213),
    b = i(626135),
    g = i(333867),
    v = i(963249),
    m = i(981631),
    _ = i(217702),
    f = i(474936),
    x = i(388032),
    I = i(601674),
    S = i(476945),
    y = i(945182);
function E(e) {
    let { analyticsLocations: t, transitionState: i, onClose: n, giftRecipient: r, analyticsObject: o } = e;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(C, {}),
            (0, s.jsxs)(l.ModalRoot, {
                size: l.ModalSize.SMALL,
                transitionState: i,
                children: [
                    (0, s.jsxs)(l.ModalHeader, {
                        className: I.header,
                        separator: !1,
                        children: [
                            (0, s.jsx)(l.FormTitle, {
                                tag: l.FormTitleTags.H4,
                                children: x.intl.string(x.t['xU+d9P'])
                            }),
                            (0, s.jsx)(l.ModalCloseButton, {
                                onClick: () => {
                                    b.default.track(m.rMx.MODAL_DISMISSED, {
                                        type: m.jXE.GIFT_CATEGORY_SELECT_MODAL,
                                        location_object: m.qAy.BUTTON_CTA
                                    }),
                                        n();
                                },
                                className: I.cursorPointer
                            })
                        ]
                    }),
                    (0, s.jsx)(l.ModalContent, {
                        className: I.modalContent,
                        children: (0, s.jsx)(A, {
                            analyticsLocations: t,
                            giftRecipient: r,
                            analyticsObject: o
                        })
                    })
                ]
            })
        ]
    });
}
((n = r || (r = {}))[(n.NITRO = 0)] = 'NITRO'), (n[(n.NITRO_BASIC = 1)] = 'NITRO_BASIC'), (n[(n.SHOP = 2)] = 'SHOP');
let C = () => ((0, p.Z)(), null);
function A(e) {
    let { analyticsLocations: t, giftRecipient: i, analyticsObject: n } = e,
        { showBothNitroSkusInCategorySelect: r } = h.G.useExperiment({ location: 'gift-button' }, { autoTrackExposure: !1 }),
        o = (e) => {
            (0, v.Z)({
                isGift: !0,
                giftRecipient: i,
                giftingOrigin: f.Wt.DM_CHANNEL,
                initialPlanId: null,
                analyticsLocations: t,
                subscriptionTier: e,
                analyticsObject: n
            });
        };
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(l.Clickable, {
                onClick: () => o(r ? f.Si.TIER_2 : void 0),
                children: (0, s.jsxs)('div', {
                    className: a()(I.categoryButton, I.nitroButton),
                    children: [
                        (0, s.jsx)(l.Text, {
                            variant: 'display-md',
                            color: 'always-white',
                            className: I.buttonText,
                            children: x.intl.string(x.t['lG6a5+'])
                        }),
                        (0, s.jsx)(k, { imageType: 0 })
                    ]
                })
            }),
            r &&
                (0, s.jsx)(l.Clickable, {
                    onClick: () => o(f.Si.TIER_0),
                    children: (0, s.jsxs)('div', {
                        className: a()(I.nitroBasicButton, I.categoryButton),
                        children: [
                            (0, s.jsx)(l.Text, {
                                variant: 'display-md',
                                color: 'always-white',
                                className: I.buttonText,
                                children: x.intl.string(x.t['t9uG/v'])
                            }),
                            (0, s.jsx)(k, { imageType: 1 })
                        ]
                    })
                }),
            (0, s.jsx)(l.Clickable, {
                onClick: () => {
                    (0, g.Z)({
                        isGift: !0,
                        giftingOrigin: f.Wt.DM_CHANNEL,
                        analyticsLocations: t,
                        analyticsObject: n,
                        giftRecipient: i
                    });
                },
                children: (0, s.jsxs)('div', {
                    className: a()(I.shopButton, I.categoryButton),
                    children: [
                        (0, s.jsx)(l.Text, {
                            variant: 'display-md',
                            color: 'always-white',
                            className: I.buttonText,
                            children: x.intl.string(x.t.gFlB9f)
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
        { avatarPlaceholderSrc: i } = (0, d.Z)({ size: (0, c.y9)(l.AvatarSizes.SIZE_80) }),
        n = (0, u.Z)('a_c3cffc19e9784f7d0b005eecdf1b566e', l.AvatarSizes.SIZE_80, !1);
    return 0 === t || 1 === t
        ? (0, s.jsx)('div', {
              className: I.wumpusImageContainer,
              children: (0, s.jsx)(l.Image, {
                  src: 1 === t ? S : y,
                  mediaLayoutType: _.hV.RESPONSIVE,
                  width: 270,
                  height: 242,
                  zoomable: !1
              })
          })
        : 2 === t
          ? (0, s.jsx)('div', {
                className: a()(I.wumpusImageContainer, I.shopImageContainer),
                children: (0, s.jsx)(l.Avatar, {
                    src: i,
                    avatarDecoration: n,
                    size: l.AvatarSizes.SIZE_80,
                    'aria-hidden': !0
                })
            })
          : void 0;
}
