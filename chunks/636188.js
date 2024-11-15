t.d(n, {
    Z: function () {
        return Z;
    }
}),
    t(47120);
var l = t(200651),
    s = t(192379),
    o = t(120356),
    i = t.n(o),
    a = t(442837),
    r = t(481060),
    c = t(239091),
    d = t(2052),
    u = t(100527),
    g = t(906732),
    m = t(70097),
    p = t(142497),
    x = t(810788),
    O = t(626135),
    k = t(768581),
    j = t(709054),
    h = t(647177),
    I = t(63985),
    N = t(678916),
    f = t(981631),
    v = t(190378),
    b = t(486324),
    T = t(474936),
    _ = t(388032),
    C = t(493706);
function E(e) {
    let { icon: n, onClick: t, text: s, children: o, className: a, selected: c = !1, disabled: d = !1, onMouseLeave: u, onBlur: g } = e;
    return (0, l.jsxs)(r.Clickable, {
        className: i()(a, C.backgroundOption, {
            [C.backgroundOptionSelected]: c,
            [C.backgroundOptionDisabled]: d
        }),
        onMouseLeave: u,
        onBlur: g,
        onClick: d ? void 0 : t,
        children: [
            c ? (0, l.jsx)('div', { className: C.backgroundOptionRing }) : null,
            (0, l.jsxs)('div', {
                className: C.backgroundOptionInner,
                children: [
                    o,
                    (0, l.jsxs)('div', {
                        className: C.backgroundOptionContent,
                        children: [
                            (0, l.jsx)(n, {
                                className: i()(C.backgroundIconOptionIcon),
                                color: 'currentColor',
                                size: 'custom',
                                width: 18,
                                height: 18
                            }),
                            (0, l.jsx)(r.Text, {
                                className: C.backgroundOptionText,
                                color: 'none',
                                variant: 'text-sm/normal',
                                children: s
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
function B(e) {
    let { option: n, source: t, isAnimated: o } = e,
        [i, a] = s.useState(!1);
    if (
        (s.useEffect(() => {
            new Image().src = t;
        }, [t]),
        !o || null == n)
    )
        return (0, l.jsx)('div', {
            className: C.backgroundImageOption,
            style: { backgroundImage: 'url('.concat(t, ')') }
        });
    let r = (0, k.rI)({
        userId: n.user_id,
        assetId: n.id,
        assetHash: n.asset,
        size: 720,
        canAnimate: !1
    });
    return (0, l.jsx)('img', {
        onMouseMove: () => a(!0),
        onMouseLeave: () => a(!1),
        className: C.backgroundImageOption,
        src: i ? t : r,
        alt: n.id
    });
}
function S(e) {
    let { option: n, source: s, selected: o = !1, onSelectOption: k, isAnimatedImage: j, isVideo: I, hotspotLocation: N, ...v } = e,
        b = (0, d.O)(),
        { analyticsLocations: E } = (0, g.ZP)(u.Z.VIDEO_BACKGROUND_IMAGE_OPTION),
        S = (0, a.e7)([x.Z], () => null != N && x.Z.hasHotspot(N)),
        U = I
            ? (0, l.jsx)(m.Z, {
                  className: C.backgroundImageOption,
                  src: s,
                  loop: !0,
                  playOnHover: !0,
                  muted: !0
              })
            : (0, l.jsx)(B, {
                  isAnimated: j,
                  option: (0, h.rD)(n) ? n : void 0,
                  source: s
              });
    function y() {
        null != N &&
            S &&
            (p.Kw(N),
            O.default.track(f.rMx.PREMIUM_UPSELL_VIEWED, {
                type: T.cd.ANIMATED_VIDEO_BACKGROUND_NEW_PRESET,
                location: b.location,
                location_stack: E
            }));
    }
    return (0, l.jsxs)(r.Clickable, {
        ...v,
        className: i()(C.backgroundOption, { [C.backgroundOptionSelected]: o }),
        onClick: () => k(n),
        onContextMenu: (e) =>
            (0, c.jW)(e, async () => {
                let { default: e } = await t.e('99414').then(t.bind(t, 187658));
                return (t) =>
                    (0, l.jsx)(e, {
                        ...t,
                        backgroundOption: n,
                        optionIsInUse: o
                    });
            }),
        children: [
            o ? (0, l.jsx)('div', { className: C.backgroundOptionRing }) : null,
            (0, l.jsx)('div', {
                onFocus: y,
                onMouseEnter: y,
                className: C.backgroundOptionInner,
                children: U
            }),
            I || j
                ? (0, l.jsx)('div', {
                      className: C.playIcon,
                      children: (0, l.jsx)(r.PlayIcon, {
                          size: 'xxs',
                          color: 'currentColor'
                      })
                  })
                : null,
            S &&
                (0, l.jsx)(r.TextBadge, {
                    text: _.intl.string(_.t.y2b7CA),
                    className: C.newTextBadge
                })
        ]
    });
}
function U() {
    return (0, l.jsxs)('div', {
        className: C.customBackgroundTooltip,
        children: [
            (0, l.jsx)(r.NitroWheelIcon, {
                size: 'md',
                color: 'currentColor',
                className: C.customBackgroundTooltipIcon
            }),
            (0, l.jsx)(r.Text, {
                variant: 'text-sm/normal',
                children: _.intl.string(_.t['T+yRY2'])
            })
        ]
    });
}
function y(e) {
    let { onClick: n, tooltipText: t, disabled: s = !1 } = e,
        o = (0, a.e7)([x.Z], () => x.Z.hasHotspot(v.v.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW));
    function i() {
        p.Kw(v.v.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW);
    }
    let c = o ? _.intl.string(_.t['5TUJOj']) : t;
    return (0, l.jsxs)(r.TooltipContainer, {
        text: c,
        className: C.newBackgroundTooltipContainer,
        children: [
            (0, l.jsxs)(E, {
                className: C.__invalid_backgroundOptionBlurred,
                disabled: s,
                icon: r.ImagePlusIcon,
                onClick: n,
                onMouseLeave: i,
                onBlur: i,
                text: (0, l.jsxs)('div', {
                    className: C.backgroundCustomInlineUpsell,
                    children: [
                        (0, l.jsx)(r.NitroWheelIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: C.backgroundCustomInlineUpsellIcon
                        }),
                        (0, l.jsx)('div', {
                            className: C.overflowEllipsis,
                            children: _.intl.string(_.t['1t7U8f'])
                        })
                    ]
                }),
                children: [(0, l.jsx)('div', { className: C.backgroundCustomInlineUpsellBackground }), (0, l.jsx)('div', { className: C.backgroundCustomInlineUpsellBackgroundDarkener })]
            }),
            o &&
                (0, l.jsx)(r.TextBadge, {
                    text: _.intl.string(_.t.y2b7CA),
                    className: C.newTextBadge
                })
        ]
    });
}
function D(e) {
    let { onClick: n } = e,
        t = (0, d.O)(),
        { analyticsLocations: o } = (0, g.ZP)(u.Z.VIDEO_BACKGROUND_CUSTOM_UPSELL);
    return (
        s.useEffect(() => {
            O.default.track(f.rMx.PREMIUM_UPSELL_VIEWED, {
                type: T.cd.VIDEO_BACKGROUNDS_INLINE,
                location: t.location,
                location_stack: o
            });
        }, []),
        (0, l.jsx)(y, {
            onClick: n,
            tooltipText: _.intl.string(_.t.IqE0T0)
        })
    );
}
function M(e) {
    let { onAddBackgroundImage: n, disabled: s } = e,
        o = (0, r.useModalContext)(),
        i = s ? _.intl.formatToPlainString(_.t.ykGFeH, { maxCustomBackgrounds: 25 }) : _.intl.string(_.t.Qx0tFR),
        a = [
            {
                name: _.intl.string(_.t.Sp2NFx),
                extensions: ['jpg', 'jpeg', 'png', 'gif', 'mp4']
            }
        ];
    return (0, l.jsx)(y, {
        disabled: s,
        onClick: function () {
            (0, r.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([t.e('70687'), t.e('89462')]).then(t.bind(t, 28130));
                    return (t) =>
                        (0, l.jsx)(e, {
                            maxFileSizeBytes: N.SJ,
                            onComplete: n,
                            uploadType: b.pC.VIDEO_BACKGROUND,
                            filters: a,
                            modalTitle: _.intl.string(_.t.yG2pUl),
                            imageSpecifications: _.intl.string(_.t['72OaxM']),
                            uploadOptionTitle: _.intl.string(_.t.xsW8u7),
                            showUpsellHeader: !0,
                            ...t
                        });
                },
                { contextKey: o }
            );
        },
        tooltipText: i
    });
}
function Z(e) {
    let { canUseCustomBackgrounds: n, customBackgroundOptions: t, selectedOption: o, onSelectOption: i, onUpsellClick: a, onAddBackgroundImage: c, smallerOptions: d } = e,
        m = s.useMemo(() => t.sort((e, n) => (null == e.last_used || null == n.last_used ? j.default.compare(n.id, e.id) : new Date(n.last_used).getTime() - new Date(e.last_used).getTime())), [t]),
        p = m.length >= 25,
        { analyticsLocations: x } = (0, g.ZP)(u.Z.VIDEO_BACKGROUND_OPTIONS),
        O = Object.values((0, I.Z)()).sort((e, n) => N.E1[e.id] - N.E1[n.id]);
    return (0, l.jsx)(g.Gt, {
        value: x,
        children: (0, l.jsxs)('div', {
            className: d ? C.backgroundOptionsSmall : C.backgroundOptionsLarge,
            children: [
                (0, l.jsx)(E, {
                    selected: null == o,
                    icon: r.DenyIcon,
                    onClick: () => i(null),
                    text: _.intl.string(_.t.fUdMeH)
                }),
                (0, l.jsx)(E, {
                    className: C.__invalid_backgroundOptionBlurred,
                    selected: o === N.f7,
                    icon: r.BlurBackgroundIcon,
                    onClick: () => i(N.f7),
                    text: _.intl.string(_.t.LhSyLy),
                    children: (0, l.jsx)('div', { className: C.backgroundOptionBlurBackground })
                }),
                n
                    ? (0, l.jsx)(M, {
                          onAddBackgroundImage: c,
                          disabled: p
                      })
                    : (0, l.jsx)(D, { onClick: a }),
                m.map((e) =>
                    (0, l.jsx)(
                        r.Tooltip,
                        {
                            text: (0, l.jsx)(U, {}),
                            'aria-label': _.intl.string(_.t['T+yRY2']),
                            children: (n) => {
                                let t = (0, k.rI)({
                                    userId: e.user_id,
                                    assetId: e.id,
                                    assetHash: e.asset,
                                    size: 720
                                });
                                return null == t
                                    ? null
                                    : (0, s.createElement)(S, {
                                          ...n,
                                          key: e.id,
                                          option: e,
                                          source: t,
                                          selected: (0, h.rD)(o) && o.id === e.id,
                                          onSelectOption: i,
                                          isVideo: (0, k.ay)(e.asset),
                                          isAnimatedImage: (0, k.xR)(e.asset)
                                      });
                            }
                        },
                        e.id
                    )
                ),
                O.map((e) => {
                    let n = !0 === e.isVideo;
                    return (0, l.jsx)(
                        r.Tooltip,
                        {
                            text: e.name,
                            'aria-label': e.name,
                            children: (t) =>
                                (0, s.createElement)(S, {
                                    ...t,
                                    key: e.id,
                                    option: e.id,
                                    source: e.source,
                                    selected: o === e.id,
                                    onSelectOption: i,
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
