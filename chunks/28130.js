t.r(i),
    t.d(i, {
        default: function () {
            return P;
        }
    }),
    t(47120);
var n = t(735250),
    o = t(470079),
    a = t(442837),
    s = t(481060),
    l = t(100527),
    r = t(906732),
    c = t(807582),
    d = t(813197),
    f = t(81245),
    u = t(53691),
    p = t(430824),
    x = t(914010),
    g = t(594174),
    m = t(451478),
    _ = t(626135),
    C = t(74538),
    h = t(621961),
    I = t(884858),
    j = t(981631),
    N = t(486324),
    M = t(869783),
    E = t(689938),
    T = t(403661);
let A = [
    {
        gif: t(495682),
        png: t(458060)
    },
    {
        gif: t(842786),
        png: t(460790)
    },
    {
        gif: t(578831),
        png: t(642193)
    },
    {
        gif: t(145908),
        png: t(690695)
    }
];
function b(e) {
    let { shouldAnimate: i = !0 } = e,
        [t, a] = o.useState(!1);
    return (0, n.jsx)('div', {
        className: T.gifGrid,
        onMouseMove: () => a(!0),
        onMouseLeave: () => a(!1),
        children: A.map((e) =>
            (0, n.jsx)(
                'div',
                {
                    className: T.gif,
                    style: { backgroundImage: 'url('.concat(i || t ? e.gif : e.png, ')') }
                },
                e.gif
            )
        )
    });
}
function L(e) {
    let { guildFeature: i, guild: t } = e;
    return null == i || null == t
        ? null
        : (0, n.jsx)('div', {
              className: T.pillWrapper,
              children: (0, n.jsx)(c.Z, {
                  guildFeature: i,
                  guild: t,
                  hideTooltip: !0
              })
          });
}
function O(e) {
    let { uploadType: i, guild: t } = e;
    return (0, n.jsxs)('div', {
        className: T.optionBoxText,
        children: [
            (0, n.jsx)(L, {
                guild: t,
                guildFeature: (0, h.C)(i, { isGIF: !0 })
            }),
            (0, n.jsxs)('div', {
                className: T.optionBoxDescription,
                children: [
                    (0, h.K)(i) &&
                        (0, n.jsx)(s.TooltipContainer, {
                            className: T.nitroWheelFlairContainer,
                            text: E.Z.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
                            children: (0, n.jsx)(s.NitroWheelIcon, {
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
function v(e) {
    let { title: i, uploadType: t, guild: o } = e;
    return (0, n.jsxs)('div', {
        className: T.optionBoxText,
        children: [
            (0, n.jsx)(L, {
                guildFeature: (0, h.C)(t, { isGIF: !1 }),
                guild: o
            }),
            (0, n.jsx)('div', {
                className: T.optionBoxDescription,
                children: i
            })
        ]
    });
}
function P(e) {
    let { transitionState: i, onClose: c, onComplete: h, uploadType: A, maxFileSizeBytes: L, showUpsellHeader: P, filters: F, analyticsLocation: S, analyticsLocations: B = [], modalSubTitle: U, imageSpecifications: y, modalTitle: G = E.Z.Messages.SELECT_IMAGE_MODAL_TITLE, uploadOptionTitle: Z = E.Z.Messages.UPLOAD_IMAGE } = e,
        k = (0, a.e7)([m.Z], () => m.Z.isFocused()),
        D = (0, a.e7)([g.default], () => g.default.getCurrentUser()),
        R = (0, a.e7)([x.Z], () => x.Z.getGuildId()),
        w = (0, a.e7)([p.Z], () => p.Z.getGuild(R)),
        { reducedMotion: W } = o.useContext(s.AccessibilityPreferencesContext),
        H = (0, s.useModalContext)(),
        z = !C.ZP.canUseAnimatedAvatar(D) && A === N.pC.AVATAR,
        { analyticsLocations: K } = (0, r.ZP)(B, l.Z.SELECT_IMAGE_MODAL);
    function V(e, i) {
        let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        c(), h(e, i, t);
    }
    o.useEffect(() => {
        z &&
            _.default.track(j.rMx.PREMIUM_UPSELL_VIEWED, {
                type: j.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                location_stack: K
            }),
            _.default.track(j.rMx.OPEN_MODAL, {
                type: j.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                location: S
            });
    }, [z, S, K]);
    let X = (0, f.M)('SelectImageModal');
    return (0, n.jsxs)(s.ModalRoot, {
        transitionState: i,
        size: s.ModalSize.SMALL,
        children: [
            (0, n.jsxs)(s.ModalHeader, {
                className: T.modalHeader,
                separator: !1,
                children: [
                    (0, n.jsxs)('div', {
                        children: [
                            (0, n.jsx)(s.FormTitle, {
                                tag: s.FormTitleTags.H1,
                                className: T.modalTitle,
                                children: G
                            }),
                            null != U
                                ? (0, n.jsx)(s.Text, {
                                      variant: 'text-md/normal',
                                      children: U
                                  })
                                : null
                        ]
                    }),
                    (0, n.jsx)(s.ModalCloseButton, {
                        onClick: c,
                        className: T.modalCloseButton
                    })
                ]
            }),
            (0, n.jsxs)(s.ModalContent, {
                className: T.modalContent,
                children: [
                    (0, n.jsxs)('div', {
                        className: T.imagePickerContainer,
                        children: [
                            (0, n.jsxs)(s.Clickable, {
                                className: T.optionBox,
                                children: [
                                    (0, n.jsx)('div', {
                                        className: T.contentCircle,
                                        children: (0, n.jsx)(s.ImagePlusIcon, {
                                            size: 'md',
                                            color: 'currentColor',
                                            className: T.uploadIcon
                                        })
                                    }),
                                    (0, n.jsx)(s.Text, {
                                        variant: 'text-sm/semibold',
                                        color: 'interactive-normal',
                                        children: (0, n.jsx)(v, {
                                            title: Z,
                                            uploadType: A,
                                            guild: w
                                        })
                                    }),
                                    (0, n.jsx)(d.ZP, {
                                        onChange: function (e, i) {
                                            if (i.type === M.m.MP4) return V(e, i);
                                            (0, s.openModalLazy)(
                                                async () => {
                                                    let { default: o } = await Promise.all([t.e('48017'), t.e('29625')]).then(t.bind(t, 850085));
                                                    return (t) =>
                                                        (0, n.jsx)(o, {
                                                            imgURI: e,
                                                            file: i,
                                                            onCrop: V,
                                                            uploadType: A,
                                                            showUpsellHeader: P,
                                                            allowSkip: !0,
                                                            analyticsPage: null == S ? void 0 : S.page,
                                                            ...t
                                                        });
                                                },
                                                { contextKey: H }
                                            );
                                        },
                                        maxFileSizeBytes: L,
                                        onFileSizeError: function () {
                                            c(), (0, I.Z)(L);
                                        },
                                        filters: F
                                    })
                                ]
                            }),
                            (0, n.jsxs)(s.Clickable, {
                                className: T.optionBox,
                                onClick: function () {
                                    (0, s.openModalLazy)(
                                        async () => {
                                            let { default: e } = await t.e('72891').then(t.bind(t, 195297));
                                            return (i) =>
                                                (0, n.jsx)(e, {
                                                    uploadType: A,
                                                    onComplete: (e, i) => V(e, i, !0),
                                                    showUpsellHeader: P,
                                                    analyticsPage: null == S ? void 0 : S.page,
                                                    ...i
                                                });
                                        },
                                        { contextKey: H }
                                    );
                                },
                                children: [
                                    (0, n.jsxs)('div', {
                                        className: T.contentCircle,
                                        children: [
                                            (0, n.jsx)(b, { shouldAnimate: k && !W.enabled }),
                                            (0, n.jsx)('div', {
                                                className: T.gifIconContainer,
                                                children: (0, n.jsx)(s.GifIcon, {
                                                    size: 'custom',
                                                    width: 29,
                                                    height: 29,
                                                    color: 'currentColor',
                                                    className: T.gifIcon
                                                })
                                            })
                                        ]
                                    }),
                                    (0, n.jsx)(s.Text, {
                                        variant: 'text-sm/semibold',
                                        color: 'interactive-normal',
                                        children: (0, n.jsx)(O, {
                                            uploadType: A,
                                            guild: w
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    null != y
                        ? (0, n.jsx)(s.Text, {
                              className: T.imageSpecifications,
                              variant: 'text-sm/normal',
                              children: y
                          })
                        : null,
                    P &&
                        X &&
                        (0, n.jsx)(u.p, {
                            showUpsell: !0,
                            upsellText: 'Wear GIFs with Nitro',
                            ctaText: E.Z.Messages.EMOJI_PICKER_PREMIUM_UPSELL_CTA,
                            ctaAnalyticsObject: { section: j.jXE.EMOJI_PICKER_FLOATING_UPSELL },
                            position: 'inline',
                            showShadow: !1,
                            className: T.nitroUpsell
                        })
                ]
            })
        ]
    });
}
