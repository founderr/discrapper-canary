n.d(t, {
    Dp: function () {
        return h;
    },
    ZP: function () {
        return g;
    },
    nA: function () {
        return p;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(831209),
    s = n(481060),
    o = n(208049),
    l = n(695346),
    u = n(240479),
    c = n(388032),
    d = n(629152),
    f = n(423298);
function _() {
    var e, t;
    let n = null !== (t = null === (e = l.kU.useSetting()) || void 0 === e ? void 0 : e.volume) && void 0 !== t ? t : 100;
    return (0, r.jsxs)(s.Clickable, {
        className: d.sliderContainer,
        onClick: (e) => e.stopPropagation(),
        children: [
            (0, r.jsx)(s.Text, {
                variant: 'text-sm/normal',
                children: c.intl.string(c.t.kbFsAA)
            }),
            (0, r.jsx)(s.Slider, {
                onValueChange: (e) => (0, o.xz)(null != e ? e : n),
                className: d.slider,
                initialValue: n,
                maxValue: 100
            })
        ]
    });
}
function p() {
    return (0, r.jsxs)('div', {
        className: d.infoNitroContainer,
        children: [
            (0, r.jsx)('div', { className: d.infoNitroBackground }),
            (0, r.jsxs)('div', {
                className: d.infoNitroTextContainer,
                children: [
                    (0, r.jsx)(s.NitroWheelIcon, {
                        size: 'xxs',
                        color: 'white',
                        className: d.infoNitroIcon
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: 'text-xs/medium',
                        color: 'always-white',
                        className: d.infoNitroText,
                        children: 'Powered by nitro'
                    }),
                    (0, r.jsx)(s.TextBadge, {
                        text: 'BETA',
                        color: a.Z.BG_BRAND,
                        className: d.infoNitroBadge
                    })
                ]
            })
        ]
    });
}
function h(e) {
    let { sound: t } = e;
    return (0, r.jsxs)('div', {
        className: d.infoContainer,
        children: [
            (0, r.jsx)(p, {}),
            (0, r.jsxs)('div', {
                className: d.infoSoundContainer,
                children: [
                    (0, r.jsxs)('div', {
                        className: d.infoSoundInnerContainer,
                        children: [
                            (0, r.jsx)(s.SoundboardIcon, {
                                size: 'sm',
                                className: d.infoSoundIcon
                            }),
                            (0, r.jsx)(s.Text, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                children: t.name
                            })
                        ]
                    }),
                    (0, r.jsx)('div', {
                        className: d.infoSoundInnerContainer,
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
function m(e) {
    let { renderPopout: t, position: n, tooltipText: a, children: o, setTooltipShowing: l } = e,
        [u, c] = i.useState(!1),
        [d, _] = i.useState(String(Date.now())),
        p = i.useCallback(
            (e) => {
                e.stopPropagation(), c(!u);
            },
            [u]
        ),
        h = i.useCallback(() => {
            _(String(Date.now()));
        }, []);
    return (0, r.jsx)(s.Popout, {
        renderPopout: (e) =>
            (0, r.jsx)(s.Clickable, {
                onClick: (e) => e.stopPropagation(),
                onMouseOver: (e) => e.stopPropagation(),
                children: t({
                    ...e,
                    refreshPosition: h
                })
            }),
        align: 'center',
        nudgeAlignIntoViewport: !0,
        position: n,
        shouldShow: u,
        onRequestClose: () => c(!1),
        animationPosition: 'bottom',
        positionKey: d,
        children: (e) =>
            (0, r.jsx)(s.Tooltip, {
                onTooltipHide: () => l(!1),
                onTooltipShow: () => l(!0),
                text: a,
                position: 'top',
                shouldShow: !u,
                children: (t) =>
                    (0, r.jsx)(s.Clickable, {
                        ...t,
                        ...e,
                        'aria-label': a,
                        onClick: p,
                        className: f.secondaryButtonRefresh,
                        children: o
                    })
            })
    });
}
function g(e) {
    let { sound: t, channel: n, setTooltipShowing: i } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(m, {
                setTooltipShowing: i,
                renderPopout: () => (0, r.jsx)(_, {}),
                tooltipText: c.intl.string(c.t['19lt29']),
                position: 'top',
                children: (0, r.jsx)(s.VoiceNormalIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: f.secondaryIcon
                })
            }),
            (0, r.jsx)(m, {
                setTooltipShowing: i,
                renderPopout: (e) =>
                    (0, r.jsx)(u.Z, {
                        sound: t,
                        channel: n,
                        ...e
                    }),
                tooltipText: 'More Info',
                position: 'right',
                children: (0, r.jsx)(s.CircleInformationIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: f.secondaryIcon
                })
            })
        ]
    });
}
