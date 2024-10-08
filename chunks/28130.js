i.r(n),
    i.d(n, {
        default: function () {
            return P;
        }
    }),
    i(47120);
var a = i(735250),
    o = i(470079),
    t = i(442837),
    l = i(481060),
    s = i(100527),
    r = i(906732),
    c = i(807582),
    d = i(813197),
    f = i(81245),
    u = i(530329),
    p = i(430824),
    x = i(914010),
    _ = i(594174),
    m = i(451478),
    g = i(626135),
    C = i(74538),
    b = i(621961),
    h = i(884858),
    I = i(981631),
    N = i(486324),
    j = i(869783),
    E = i(689938),
    T = i(802542);
let v = [
    {
        gif: i(495682),
        png: i(458060)
    },
    {
        gif: i(842786),
        png: i(460790)
    },
    {
        gif: i(578831),
        png: i(642193)
    },
    {
        gif: i(145908),
        png: i(690695)
    }
];
function M(e) {
    let { shouldAnimate: n = !0 } = e,
        [i, t] = o.useState(!1);
    return (0, a.jsx)('div', {
        className: T.gifGrid,
        onMouseMove: () => t(!0),
        onMouseLeave: () => t(!1),
        children: v.map((e) =>
            (0, a.jsx)(
                'div',
                {
                    className: T.gif,
                    style: { backgroundImage: 'url('.concat(n || i ? e.gif : e.png, ')') }
                },
                e.gif
            )
        )
    });
}
function A(e) {
    let { guildFeature: n, guild: i } = e;
    return null == n || null == i
        ? null
        : (0, a.jsx)('div', {
              className: T.pillWrapper,
              children: (0, a.jsx)(c.Z, {
                  guildFeature: n,
                  guild: i,
                  hideTooltip: !0
              })
          });
}
function O(e) {
    let { uploadType: n, guild: i } = e;
    return (0, a.jsxs)('div', {
        className: T.optionBoxText,
        children: [
            (0, a.jsx)(A, {
                guild: i,
                guildFeature: (0, b.C)(n, { isGIF: !0 })
            }),
            (0, a.jsxs)('div', {
                className: T.optionBoxDescription,
                children: [
                    (0, b.K)(n) &&
                        (0, a.jsx)(l.TooltipContainer, {
                            className: T.nitroWheelFlairContainer,
                            text: E.Z.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
                            children: (0, a.jsx)(l.NitroWheelIcon, {
                                size: 'md',
                                color: 'currentColor',
                                className: T.nitroWheelFlair
                            })
                        }),
                    E.Z.Messages.SELECT_IMAGE_MODAL_CHOOSE_GIF
                ]
            })
        ]
    });
}
function L(e) {
    let { title: n, uploadType: i, guild: o } = e;
    return (0, a.jsxs)('div', {
        className: T.optionBoxText,
        children: [
            (0, a.jsx)(A, {
                guildFeature: (0, b.C)(i, { isGIF: !1 }),
                guild: o
            }),
            (0, a.jsxs)('div', {
                className: T.optionBoxDescription,
                children: [
                    i === N.pC.BANNER &&
                        (0, a.jsx)(l.TooltipContainer, {
                            className: T.nitroWheelFlairContainer,
                            text: E.Z.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
                            children: (0, a.jsx)(l.NitroWheelIcon, {
                                size: 'md',
                                color: 'currentColor',
                                className: T.nitroWheelFlair
                            })
                        }),
                    n
                ]
            })
        ]
    });
}
function P(e) {
    let { transitionState: n, onClose: c, onComplete: b, uploadType: v, maxFileSizeBytes: A, showUpsellHeader: P, filters: Z, analyticsLocation: k, analyticsLocations: y = [], modalSubTitle: F, imageSpecifications: R, modalTitle: U = E.Z.Messages.SELECT_IMAGE_MODAL_TITLE, uploadOptionTitle: B = E.Z.Messages.UPLOAD_IMAGE } = e,
        D = (0, t.e7)([m.Z], () => m.Z.isFocused()),
        S = (0, t.e7)([_.default], () => _.default.getCurrentUser()),
        G = (0, t.e7)([x.Z], () => x.Z.getGuildId()),
        w = (0, t.e7)([p.Z], () => p.Z.getGuild(G)),
        { reducedMotion: W } = o.useContext(l.AccessibilityPreferencesContext),
        H = (0, l.useModalContext)(),
        z = !C.ZP.canUseAnimatedAvatar(S) && v === N.pC.AVATAR,
        { analyticsLocations: K } = (0, r.ZP)(y, s.Z.SELECT_IMAGE_MODAL);
    function V(e, n) {
        let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        c(), b(e, n, i);
    }
    o.useEffect(() => {
        z &&
            g.default.track(I.rMx.PREMIUM_UPSELL_VIEWED, {
                type: I.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                location_stack: K
            }),
            g.default.track(I.rMx.OPEN_MODAL, {
                type: I.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                location: k
            });
    }, [z, k, K]);
    let X = v === N.pC.AVATAR || v === N.pC.BANNER,
        q = (0, f.Mu)('SelectImageModal', !X);
    return (0, a.jsxs)(l.ModalRoot, {
        transitionState: n,
        size: l.ModalSize.SMALL,
        children: [
            (0, a.jsxs)(l.ModalHeader, {
                className: T.modalHeader,
                separator: !1,
                children: [
                    (0, a.jsxs)('div', {
                        children: [
                            (0, a.jsx)(l.FormTitle, {
                                tag: l.FormTitleTags.H1,
                                className: T.modalTitle,
                                children: U
                            }),
                            null != F
                                ? (0, a.jsx)(l.Text, {
                                      variant: 'text-md/normal',
                                      children: F
                                  })
                                : null
                        ]
                    }),
                    (0, a.jsx)(l.ModalCloseButton, {
                        onClick: c,
                        className: T.modalCloseButton
                    })
                ]
            }),
            (0, a.jsxs)(l.ModalContent, {
                className: T.modalContent,
                children: [
                    (0, a.jsxs)('div', {
                        className: T.imagePickerContainer,
                        children: [
                            (0, a.jsxs)(l.Clickable, {
                                className: T.optionBox,
                                children: [
                                    (0, a.jsx)('div', {
                                        className: T.contentCircle,
                                        children: (0, a.jsx)(l.ImagePlusIcon, {
                                            size: 'md',
                                            color: 'currentColor',
                                            className: T.uploadIcon
                                        })
                                    }),
                                    (0, a.jsx)(l.Text, {
                                        variant: 'text-sm/semibold',
                                        color: 'interactive-normal',
                                        children: (0, a.jsx)(L, {
                                            title: B,
                                            uploadType: v,
                                            guild: w
                                        })
                                    }),
                                    (0, a.jsx)(d.ZP, {
                                        onChange: function (e, n) {
                                            if (n.type === j.m.MP4) return V(e, n);
                                            (0, l.openModalLazy)(
                                                async () => {
                                                    let { default: o } = await Promise.all([i.e('48017'), i.e('61694')]).then(i.bind(i, 850085));
                                                    return (i) =>
                                                        (0, a.jsx)(o, {
                                                            imgURI: e,
                                                            file: n,
                                                            onCrop: V,
                                                            uploadType: v,
                                                            showUpsellHeader: P,
                                                            allowSkip: !0,
                                                            analyticsPage: null == k ? void 0 : k.page,
                                                            ...i
                                                        });
                                                },
                                                { contextKey: H }
                                            );
                                        },
                                        maxFileSizeBytes: A,
                                        onFileSizeError: function () {
                                            c(), (0, h.Z)(A);
                                        },
                                        filters: Z
                                    })
                                ]
                            }),
                            (0, a.jsxs)(l.Clickable, {
                                className: T.optionBox,
                                onClick: function () {
                                    (0, l.openModalLazy)(
                                        async () => {
                                            let { default: e } = await i.e('72891').then(i.bind(i, 195297));
                                            return (n) =>
                                                (0, a.jsx)(e, {
                                                    uploadType: v,
                                                    onComplete: (e, n) => V(e, n, !0),
                                                    showUpsellHeader: P,
                                                    analyticsPage: null == k ? void 0 : k.page,
                                                    ...n
                                                });
                                        },
                                        { contextKey: H }
                                    );
                                },
                                children: [
                                    (0, a.jsxs)('div', {
                                        className: T.contentCircle,
                                        children: [
                                            (0, a.jsx)(M, { shouldAnimate: D && !W.enabled }),
                                            (0, a.jsx)('div', {
                                                className: T.gifIconContainer,
                                                children: (0, a.jsx)(l.GifIcon, {
                                                    size: 'custom',
                                                    width: 29,
                                                    height: 29,
                                                    color: 'currentColor',
                                                    className: T.gifIcon
                                                })
                                            })
                                        ]
                                    }),
                                    (0, a.jsx)(l.Text, {
                                        variant: 'text-sm/semibold',
                                        color: 'interactive-normal',
                                        children: (0, a.jsx)(O, {
                                            uploadType: v,
                                            guild: w
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    null != R
                        ? (0, a.jsx)(l.Text, {
                              className: T.imageSpecifications,
                              variant: 'text-sm/normal',
                              children: R
                          })
                        : null,
                    P &&
                        q &&
                        (0, a.jsx)(u.Z, {
                            uploadType: v,
                            showUpsell: !0,
                            position: 'inline',
                            showShadow: !1,
                            className: T.nitroUpsell
                        })
                ]
            })
        ]
    });
}
