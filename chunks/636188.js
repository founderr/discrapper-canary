s.d(n, {
    Z: function () {
        return Z;
    }
}),
    s(47120);
var a = s(200651),
    t = s(192379),
    o = s(120356),
    l = s.n(o),
    i = s(442837),
    c = s(481060),
    r = s(239091),
    d = s(2052),
    u = s(100527),
    _ = s(906732),
    E = s(70097),
    O = s(142497),
    g = s(810788),
    m = s(626135),
    I = s(768581),
    p = s(709054),
    A = s(647177),
    x = s(63985),
    C = s(678916),
    N = s(981631),
    M = s(190378),
    R = s(486324),
    k = s(474936),
    D = s(689938),
    j = s(793532);
function T(e) {
    let { icon: n, onClick: s, text: t, children: o, className: i, selected: r = !1, disabled: d = !1, onMouseLeave: u, onBlur: _ } = e;
    return (0, a.jsxs)(c.Clickable, {
        className: l()(i, j.backgroundOption, {
            [j.backgroundOptionSelected]: r,
            [j.backgroundOptionDisabled]: d
        }),
        onMouseLeave: u,
        onBlur: _,
        onClick: d ? void 0 : s,
        children: [
            r ? (0, a.jsx)('div', { className: j.backgroundOptionRing }) : null,
            (0, a.jsxs)('div', {
                className: j.backgroundOptionInner,
                children: [
                    o,
                    (0, a.jsxs)('div', {
                        className: j.backgroundOptionContent,
                        children: [
                            (0, a.jsx)(n, {
                                className: l()(j.backgroundIconOptionIcon),
                                color: 'currentColor',
                                size: 'custom',
                                width: 18,
                                height: 18
                            }),
                            (0, a.jsx)(c.Text, {
                                className: j.backgroundOptionText,
                                color: 'none',
                                variant: 'text-sm/normal',
                                children: t
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
function h(e) {
    let { option: n, source: s, isAnimated: o } = e,
        [l, i] = t.useState(!1);
    if (
        (t.useEffect(() => {
            new Image().src = s;
        }, [s]),
        !o || null == n)
    )
        return (0, a.jsx)('div', {
            className: j.backgroundImageOption,
            style: { backgroundImage: 'url('.concat(s, ')') }
        });
    let c = (0, I.rI)({
        userId: n.user_id,
        assetId: n.id,
        assetHash: n.asset,
        size: 720,
        canAnimate: !1
    });
    return (0, a.jsx)('img', {
        onMouseMove: () => i(!0),
        onMouseLeave: () => i(!1),
        className: j.backgroundImageOption,
        src: l ? s : c,
        alt: n.id
    });
}
function U(e) {
    let { option: n, source: t, selected: o = !1, onSelectOption: I, isAnimatedImage: p, isVideo: x, hotspotLocation: C, ...M } = e,
        R = (0, d.O)(),
        { analyticsLocations: T } = (0, _.ZP)(u.Z.VIDEO_BACKGROUND_IMAGE_OPTION),
        U = (0, i.e7)([g.Z], () => null != C && g.Z.hasHotspot(C)),
        B = x
            ? (0, a.jsx)(E.Z, {
                  className: j.backgroundImageOption,
                  src: t,
                  loop: !0,
                  playOnHover: !0,
                  muted: !0
              })
            : (0, a.jsx)(h, {
                  isAnimated: p,
                  option: (0, A.rD)(n) ? n : void 0,
                  source: t
              });
    function v() {
        null != C &&
            U &&
            (O.Kw(C),
            m.default.track(N.rMx.PREMIUM_UPSELL_VIEWED, {
                type: k.cd.ANIMATED_VIDEO_BACKGROUND_NEW_PRESET,
                location: R.location,
                location_stack: T
            }));
    }
    return (0, a.jsxs)(c.Clickable, {
        ...M,
        className: l()(j.backgroundOption, { [j.backgroundOptionSelected]: o }),
        onClick: () => I(n),
        onContextMenu: (e) =>
            (0, r.jW)(e, async () => {
                let { default: e } = await s.e('99414').then(s.bind(s, 187658));
                return (s) =>
                    (0, a.jsx)(e, {
                        ...s,
                        backgroundOption: n,
                        optionIsInUse: o
                    });
            }),
        children: [
            o ? (0, a.jsx)('div', { className: j.backgroundOptionRing }) : null,
            (0, a.jsx)('div', {
                onFocus: v,
                onMouseEnter: v,
                className: j.backgroundOptionInner,
                children: B
            }),
            x || p
                ? (0, a.jsx)('div', {
                      className: j.playIcon,
                      children: (0, a.jsx)(c.PlayIcon, {
                          size: 'xxs',
                          color: 'currentColor'
                      })
                  })
                : null,
            U &&
                (0, a.jsx)(c.TextBadge, {
                    text: D.Z.Messages.NEW,
                    className: j.newTextBadge
                })
        ]
    });
}
function B() {
    return (0, a.jsxs)('div', {
        className: j.customBackgroundTooltip,
        children: [
            (0, a.jsx)(c.NitroWheelIcon, {
                size: 'md',
                color: 'currentColor',
                className: j.customBackgroundTooltipIcon
            }),
            (0, a.jsx)(c.Text, {
                variant: 'text-sm/normal',
                children: D.Z.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_CUSTOM_TOOLTIP
            })
        ]
    });
}
function v(e) {
    let { onClick: n, tooltipText: s, disabled: t = !1 } = e,
        o = (0, i.e7)([g.Z], () => g.Z.hasHotspot(M.v.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW));
    function l() {
        O.Kw(M.v.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW);
    }
    let r = o ? D.Z.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_NEW_ANIMATED_TOOLTIP : s;
    return (0, a.jsxs)(c.TooltipContainer, {
        text: r,
        className: j.newBackgroundTooltipContainer,
        children: [
            (0, a.jsxs)(T, {
                className: j.__invalid_backgroundOptionBlurred,
                disabled: t,
                icon: c.ImagePlusIcon,
                onClick: n,
                onMouseLeave: l,
                onBlur: l,
                text: (0, a.jsxs)('div', {
                    className: j.backgroundCustomInlineUpsell,
                    children: [
                        (0, a.jsx)(c.NitroWheelIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: j.backgroundCustomInlineUpsellIcon
                        }),
                        (0, a.jsx)('div', {
                            className: j.overflowEllipsis,
                            children: D.Z.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_CUSTOM
                        })
                    ]
                }),
                children: [(0, a.jsx)('div', { className: j.backgroundCustomInlineUpsellBackground }), (0, a.jsx)('div', { className: j.backgroundCustomInlineUpsellBackgroundDarkener })]
            }),
            o &&
                (0, a.jsx)(c.TextBadge, {
                    text: D.Z.Messages.NEW,
                    className: j.newTextBadge
                })
        ]
    });
}
function f(e) {
    let { onClick: n } = e,
        s = (0, d.O)(),
        { analyticsLocations: o } = (0, _.ZP)(u.Z.VIDEO_BACKGROUND_CUSTOM_UPSELL);
    return (
        t.useEffect(() => {
            m.default.track(N.rMx.PREMIUM_UPSELL_VIEWED, {
                type: k.cd.VIDEO_BACKGROUNDS_INLINE,
                location: s.location,
                location_stack: o
            });
        }, []),
        (0, a.jsx)(v, {
            onClick: n,
            tooltipText: D.Z.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_UPSELL_TOOLTIP
        })
    );
}
function P(e) {
    let { onAddBackgroundImage: n, disabled: t } = e,
        o = (0, c.useModalContext)(),
        l = t ? D.Z.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_UPLOAD_TOOLTIP_MAX_REACHED.format({ maxCustomBackgrounds: 25 }) : D.Z.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_UPLOAD_TOOLTIP_PREMIUM,
        i = [
            {
                name: D.Z.Messages.IMAGES,
                extensions: ['jpg', 'jpeg', 'png', 'gif', 'mp4']
            }
        ];
    return (0, a.jsx)(v, {
        disabled: t,
        onClick: function () {
            (0, c.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([s.e('70687'), s.e('51425')]).then(s.bind(s, 28130));
                    return (s) =>
                        (0, a.jsx)(e, {
                            maxFileSizeBytes: C.SJ,
                            onComplete: n,
                            uploadType: R.pC.VIDEO_BACKGROUND,
                            filters: i,
                            modalTitle: D.Z.Messages.UPLOAD_BACKGROUND,
                            imageSpecifications: D.Z.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_UPLOAD_SUBTITLE,
                            uploadOptionTitle: D.Z.Messages.SELECT_IMAGE_MODAL_UPLOAD_IMAGE_OR_VIDEO,
                            showUpsellHeader: !0,
                            ...s
                        });
                },
                { contextKey: o }
            );
        },
        tooltipText: l
    });
}
function Z(e) {
    let { canUseCustomBackgrounds: n, customBackgroundOptions: s, selectedOption: o, onSelectOption: l, onUpsellClick: i, onAddBackgroundImage: r, smallerOptions: d } = e,
        E = t.useMemo(() => s.sort((e, n) => (null == e.last_used || null == n.last_used ? p.default.compare(n.id, e.id) : new Date(n.last_used).getTime() - new Date(e.last_used).getTime())), [s]),
        O = E.length >= 25,
        { analyticsLocations: g } = (0, _.ZP)(u.Z.VIDEO_BACKGROUND_OPTIONS),
        m = Object.values((0, x.Z)()).sort((e, n) => C.E1[e.id] - C.E1[n.id]);
    return (0, a.jsx)(_.Gt, {
        value: g,
        children: (0, a.jsxs)('div', {
            className: d ? j.backgroundOptionsSmall : j.backgroundOptionsLarge,
            children: [
                (0, a.jsx)(T, {
                    selected: null == o,
                    icon: c.DenyIcon,
                    onClick: () => l(null),
                    text: D.Z.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_NONE
                }),
                (0, a.jsx)(T, {
                    className: j.__invalid_backgroundOptionBlurred,
                    selected: o === C.f7,
                    icon: c.BlurBackgroundIcon,
                    onClick: () => l(C.f7),
                    text: D.Z.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_BLUR,
                    children: (0, a.jsx)('div', { className: j.backgroundOptionBlurBackground })
                }),
                n
                    ? (0, a.jsx)(P, {
                          onAddBackgroundImage: r,
                          disabled: O
                      })
                    : (0, a.jsx)(f, { onClick: i }),
                E.map((e) =>
                    (0, a.jsx)(
                        c.Tooltip,
                        {
                            text: (0, a.jsx)(B, {}),
                            'aria-label': D.Z.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_CUSTOM_TOOLTIP,
                            children: (n) => {
                                let s = (0, I.rI)({
                                    userId: e.user_id,
                                    assetId: e.id,
                                    assetHash: e.asset,
                                    size: 720
                                });
                                return null == s
                                    ? null
                                    : (0, t.createElement)(U, {
                                          ...n,
                                          key: e.id,
                                          option: e,
                                          source: s,
                                          selected: (0, A.rD)(o) && o.id === e.id,
                                          onSelectOption: l,
                                          isVideo: (0, I.ay)(e.asset),
                                          isAnimatedImage: (0, I.xR)(e.asset)
                                      });
                            }
                        },
                        e.id
                    )
                ),
                m.map((e) => {
                    let n = !0 === e.isVideo;
                    return (0, a.jsx)(
                        c.Tooltip,
                        {
                            text: e.name,
                            'aria-label': e.name,
                            children: (s) =>
                                (0, t.createElement)(U, {
                                    ...s,
                                    key: e.id,
                                    option: e.id,
                                    source: e.source,
                                    selected: o === e.id,
                                    onSelectOption: l,
                                    isVideo: n,
                                    isAnimatedImage: !1,
                                    hotspotLocation: e.hotspotLocation
                                })
                        },
                        e.id
                    );
                })
            ]
        })
    });
}
