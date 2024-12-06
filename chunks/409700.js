n.d(t, {
    Dp: function () {
        return I;
    },
    P6: function () {
        return v;
    },
    ZP: function () {
        return b;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(831209),
    s = n(442837),
    o = n(481060),
    l = n(914010),
    u = n(594174),
    c = n(74538),
    d = n(125900),
    f = n(824690),
    _ = n(240479),
    p = n(710111),
    h = n(388032),
    m = n(89107),
    g = n(965965);
function E() {
    let { volume: e, onVolumeChange: t } = (0, f.Z)();
    return (0, r.jsxs)(o.Clickable, {
        className: m.sliderContainer,
        onClick: (e) => e.stopPropagation(),
        children: [
            (0, r.jsx)(o.Text, {
                variant: 'text-sm/normal',
                children: h.intl.string(h.t.kbFsAA)
            }),
            (0, r.jsx)(o.Slider, {
                onValueChange: t,
                className: m.slider,
                initialValue: e,
                maxValue: 100
            })
        ]
    });
}
function v(e) {
    let { sound: t, forceShowBetaLabel: n = !1 } = e,
        i = (0, d.V)({ location: 'SoundmojiBanner' }),
        f = (0, s.e7)([u.default], () => c.ZP.canUseSoundboardEverywhere(u.default.getCurrentUser())),
        _ = (0, s.e7)([l.Z], () => l.Z.getGuildId());
    return n || f || t.guildId === p.X8 || t.guildId === _ || !i
        ? (0, r.jsx)('div', {
              children: (0, r.jsx)(o.TextBadge, {
                  text: 'BETA',
                  color: a.Z.BG_BRAND,
                  className: m.betaBadge
              })
          })
        : (0, r.jsxs)('div', {
              className: m.infoNitroContainer,
              children: [
                  (0, r.jsx)('div', { className: m.infoNitroBackground }),
                  (0, r.jsxs)('div', {
                      className: m.infoNitroTextContainer,
                      children: [
                          (0, r.jsx)(o.NitroWheelIcon, {
                              size: 'xxs',
                              color: 'white',
                              className: m.infoNitroIcon
                          }),
                          (0, r.jsx)(o.Text, {
                              variant: 'text-xs/medium',
                              color: 'always-white',
                              className: m.infoNitroText,
                              children: h.intl.string(h.t['BMw+7O'])
                          }),
                          (0, r.jsx)(o.TextBadge, {
                              text: 'BETA',
                              color: a.Z.BG_BRAND,
                              className: m.infoNitroBadge
                          })
                      ]
                  })
              ]
          });
}
function I(e) {
    let { sound: t } = e;
    return (0, r.jsxs)('div', {
        className: m.infoContainer,
        children: [
            (0, r.jsx)(v, { sound: t }),
            (0, r.jsxs)('div', {
                className: m.infoSoundContainer,
                children: [
                    (0, r.jsxs)('div', {
                        className: m.infoSoundInnerContainer,
                        children: [
                            (0, r.jsx)(o.SoundboardIcon, {
                                size: 'sm',
                                className: m.infoSoundIcon
                            }),
                            (0, r.jsx)(o.Text, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                children: t.name
                            })
                        ]
                    }),
                    (0, r.jsx)('div', {
                        className: m.infoSoundInnerContainer,
                        children: (0, r.jsx)(o.Text, {
                            variant: 'text-sm/normal',
                            children: h.intl.string(h.t.D6eYmZ)
                        })
                    })
                ]
            })
        ]
    });
}
function T(e) {
    let { renderPopout: t, position: n, tooltipText: a, children: s, setTooltipShowing: l } = e,
        [u, c] = i.useState(!1),
        [d, f] = i.useState(String(Date.now())),
        _ = i.useCallback(
            (e) => {
                e.stopPropagation(), c(!u);
            },
            [u]
        ),
        p = i.useCallback(() => {
            f(String(Date.now()));
        }, []),
        h = i.useRef(null);
    return (
        i.useEffect(() => {
            var e, t;
            u ? null === (e = h.current) || void 0 === e || e.focus() : null === (t = h.current) || void 0 === t || t.blur(), l(u);
        }, [u, l]),
        (0, r.jsx)(o.Popout, {
            renderPopout: (e) =>
                (0, r.jsx)(o.Clickable, {
                    onClick: (e) => e.stopPropagation(),
                    onMouseOver: (e) => e.stopPropagation(),
                    children: t({
                        ...e,
                        refreshPosition: p
                    })
                }),
            align: 'center',
            nudgeAlignIntoViewport: !0,
            position: n,
            shouldShow: u,
            onRequestClose: () => c(!1),
            animationPosition: 'bottom',
            positionKey: d,
            closeOnScroll: !0,
            children: (e) =>
                (0, r.jsx)(o.Tooltip, {
                    onTooltipHide: () => l(!1),
                    onTooltipShow: () => l(!0),
                    text: a,
                    position: 'top',
                    shouldShow: !u,
                    children: (t) =>
                        (0, r.jsx)(o.Clickable, {
                            innerRef: h,
                            ...t,
                            ...e,
                            'aria-label': a,
                            onClick: _,
                            className: g.secondaryButtonRefresh,
                            children: s
                        })
                })
        })
    );
}
function b(e) {
    let { sound: t, channel: n, setTooltipShowing: i } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(T, {
                setTooltipShowing: i,
                renderPopout: () => (0, r.jsx)(E, {}),
                tooltipText: h.intl.string(h.t['19lt29']),
                position: 'top',
                children: (0, r.jsx)(o.VoiceNormalIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: g.secondaryIcon
                })
            }),
            (0, r.jsx)(T, {
                setTooltipShowing: i,
                renderPopout: (e) =>
                    (0, r.jsx)(_.Z, {
                        sound: t,
                        channel: n,
                        ...e
                    }),
                tooltipText: h.intl.string(h.t.KVbJU1),
                position: 'right',
                children: (0, r.jsx)(o.CircleInformationIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: g.secondaryIcon
                })
            })
        ]
    });
}
