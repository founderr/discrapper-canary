n.d(t, {
    D: function () {
        return g;
    },
    Z: function () {
        return v;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(831209),
    s = n(481060),
    o = n(208049),
    l = n(697426),
    u = n(409673),
    c = n(695346),
    d = n(388032),
    f = n(629152),
    _ = n(423298);
function p() {
    var e, t;
    let n = null !== (t = null === (e = c.kU.useSetting()) || void 0 === e ? void 0 : e.volume) && void 0 !== t ? t : 100;
    return (0, r.jsxs)(s.Clickable, {
        className: f.sliderContainer,
        onClick: (e) => e.stopPropagation(),
        children: [
            (0, r.jsx)(s.Text, {
                variant: 'text-sm/normal',
                children: d.intl.string(d.t.kbFsAA)
            }),
            (0, r.jsx)(s.Slider, {
                onValueChange: (e) => (0, o.xz)(null != e ? e : n),
                className: f.slider,
                initialValue: n,
                maxValue: 100
            })
        ]
    });
}
function h(e) {
    let { sound: t } = e;
    return (0, r.jsxs)(s.Clickable, {
        className: f.infoContainer,
        onClick: (e) => e.stopPropagation(),
        children: [
            (0, r.jsx)(m, {}),
            (0, r.jsxs)('div', {
                className: f.infoExpandedSoundContainer,
                children: [
                    (0, r.jsx)(u.ZP, {
                        refreshEnabled: !0,
                        buttonOverlay: l.Pb.NONE,
                        sound: t,
                        channel: void 0,
                        isSoundmoji: !0,
                        onSelectItem: () => {}
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: 'text-sm/normal',
                        children: 'This sound is from one of your servers'
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: f.infoExpandedGuildContainer,
                children: [
                    (0, r.jsx)(s.Text, {
                        variant: 'eyebrow',
                        color: 'header-muted',
                        className: f.infoExpandedGuildTitle,
                        children: 'This sound is from'
                    }),
                    (0, r.jsxs)('div', {
                        className: f.infoExpandedGuildInfoContainer,
                        children: [
                            (0, r.jsx)(s.SoundboardIcon, { size: 'md' }),
                            (0, r.jsxs)('div', {
                                className: f.infoExpandedGuildTitle,
                                children: [
                                    (0, r.jsx)(s.Heading, {
                                        variant: 'heading-md/semibold',
                                        color: 'header-primary',
                                        children: 'Platypus Habitat'
                                    }),
                                    (0, r.jsx)(s.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'header-muted',
                                        children: 'Discoverable server'
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
function m() {
    return (0, r.jsxs)('div', {
        className: f.infoNitroContainer,
        children: [
            (0, r.jsx)('div', { className: f.infoNitroBackground }),
            (0, r.jsxs)('div', {
                className: f.infoNitroTextContainer,
                children: [
                    (0, r.jsx)(s.NitroWheelIcon, {
                        size: 'xxs',
                        color: 'white',
                        className: f.infoNitroIcon
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: 'text-xs/medium',
                        color: 'always-white',
                        className: f.infoNitroText,
                        children: 'Powered by nitro'
                    }),
                    (0, r.jsx)(s.TextBadge, {
                        text: 'BETA',
                        color: a.Z.BG_BRAND,
                        className: f.infoNitroBadge
                    })
                ]
            })
        ]
    });
}
function g(e) {
    let { sound: t } = e;
    return (0, r.jsxs)(s.Clickable, {
        className: f.infoContainer,
        onClick: (e) => e.stopPropagation(),
        children: [
            (0, r.jsx)(m, {}),
            (0, r.jsxs)('div', {
                className: f.infoSoundContainer,
                children: [
                    (0, r.jsxs)('div', {
                        className: f.infoSoundInnerContainer,
                        children: [
                            (0, r.jsx)(s.SoundboardIcon, {
                                size: 'sm',
                                className: f.infoSoundIcon
                            }),
                            (0, r.jsx)(s.Text, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                children: t.name
                            })
                        ]
                    }),
                    (0, r.jsx)('div', {
                        className: f.infoSoundInnerContainer,
                        children: (0, r.jsx)(s.Text, {
                            variant: 'text-sm/normal',
                            children: 'Click to hear sound'
                        })
                    })
                ]
            })
        ]
    });
}
function E(e) {
    let { renderPopout: t, tooltipText: n, children: a, setTooltipShowing: o } = e,
        [l, u] = i.useState(!1),
        c = i.useCallback(
            (e) => {
                e.stopPropagation(), u(!l);
            },
            [l]
        );
    return (0, r.jsx)(s.Popout, {
        renderPopout: (e) =>
            (0, r.jsx)(s.Clickable, {
                onClick: (e) => e.stopPropagation(),
                onMouseOver: (e) => e.stopPropagation(),
                children: t(e)
            }),
        position: 'top',
        shouldShow: l,
        onRequestClose: () => u(!1),
        animationPosition: 'bottom',
        children: (e) =>
            (0, r.jsx)(s.Tooltip, {
                onTooltipHide: () => o(!1),
                onTooltipShow: () => o(!0),
                text: n,
                position: 'top',
                shouldShow: !l,
                children: (t) =>
                    (0, r.jsx)(s.Clickable, {
                        ...t,
                        ...e,
                        'aria-label': n,
                        onClick: c,
                        className: _.secondaryButtonRefresh,
                        children: a
                    })
            })
    });
}
function v(e) {
    let { sound: t, setTooltipShowing: n } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(E, {
                setTooltipShowing: n,
                renderPopout: () => (0, r.jsx)(p, {}),
                tooltipText: d.intl.string(d.t['19lt29']),
                children: (0, r.jsx)(s.VoiceNormalIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: _.secondaryIcon
                })
            }),
            (0, r.jsx)(E, {
                setTooltipShowing: n,
                renderPopout: () => (0, r.jsx)(h, { sound: t }),
                tooltipText: 'More Info',
                children: (0, r.jsx)(s.CircleInformationIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: _.secondaryIcon
                })
            })
        ]
    });
}
