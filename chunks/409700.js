n.d(t, {
    Dp: function () {
        return T;
    },
    P6: function () {
        return I;
    },
    ZP: function () {
        return S;
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
    c = n(36703),
    d = n(74538),
    f = n(125900),
    _ = n(824690),
    p = n(240479),
    h = n(710111),
    m = n(388032),
    g = n(89107),
    E = n(965965);
function v() {
    let { volume: e, onVolumeChange: t } = (0, _.Z)();
    return (0, r.jsxs)(o.Clickable, {
        className: g.sliderContainer,
        onClick: (e) => e.stopPropagation(),
        children: [
            (0, r.jsx)(o.Text, {
                variant: 'text-sm/normal',
                children: m.intl.string(m.t.kbFsAA)
            }),
            (0, r.jsx)(o.Slider, {
                onValueChange: t,
                className: g.slider,
                initialValue: (0, c.P)(e),
                maxValue: 100
            })
        ]
    });
}
function I(e) {
    let { sound: t, forceShowBetaLabel: n = !1 } = e,
        i = (0, f.V2)({ location: 'SoundmojiBanner' }),
        c = (0, s.e7)([u.default], () => d.ZP.canUseSoundboardEverywhere(u.default.getCurrentUser())),
        _ = (0, s.e7)([l.Z], () => l.Z.getGuildId());
    return n || c || t.guildId === h.X8 || t.guildId === _ || !i
        ? (0, r.jsx)('div', {
              children: (0, r.jsx)(o.TextBadge, {
                  text: 'BETA',
                  color: a.Z.BG_BRAND,
                  className: g.betaBadge
              })
          })
        : (0, r.jsxs)('div', {
              className: g.infoNitroContainer,
              children: [
                  (0, r.jsx)('div', { className: g.infoNitroBackground }),
                  (0, r.jsxs)('div', {
                      className: g.infoNitroTextContainer,
                      children: [
                          (0, r.jsx)(o.NitroWheelIcon, {
                              size: 'xxs',
                              color: 'white',
                              className: g.infoNitroIcon
                          }),
                          (0, r.jsx)(o.Text, {
                              variant: 'text-xs/medium',
                              color: 'always-white',
                              className: g.infoNitroText,
                              children: m.intl.string(m.t['BMw+7O'])
                          }),
                          (0, r.jsx)(o.TextBadge, {
                              text: 'BETA',
                              color: a.Z.BG_BRAND,
                              className: g.infoNitroBadge
                          })
                      ]
                  })
              ]
          });
}
function T(e) {
    let { sound: t } = e;
    return (0, r.jsxs)('div', {
        className: g.infoContainer,
        children: [
            (0, r.jsx)(I, { sound: t }),
            (0, r.jsxs)('div', {
                className: g.infoSoundContainer,
                children: [
                    (0, r.jsxs)('div', {
                        className: g.infoSoundInnerContainer,
                        children: [
                            (0, r.jsx)(o.SoundboardIcon, {
                                size: 'sm',
                                className: g.infoSoundIcon
                            }),
                            (0, r.jsx)(o.Text, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                children: t.name
                            })
                        ]
                    }),
                    (0, r.jsx)('div', {
                        className: g.infoSoundInnerContainer,
                        children: (0, r.jsx)(o.Text, {
                            variant: 'text-sm/normal',
                            children: m.intl.string(m.t.D6eYmZ)
                        })
                    })
                ]
            })
        ]
    });
}
function b(e) {
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
                            className: E.secondaryButtonRefresh,
                            children: s
                        })
                })
        })
    );
}
function S(e) {
    let { sound: t, channel: n, setTooltipShowing: i } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(b, {
                setTooltipShowing: i,
                renderPopout: () => (0, r.jsx)(v, {}),
                tooltipText: m.intl.string(m.t['19lt29']),
                position: 'top',
                children: (0, r.jsx)(o.VoiceNormalIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: E.secondaryIcon
                })
            }),
            (0, r.jsx)(b, {
                setTooltipShowing: i,
                renderPopout: (e) =>
                    (0, r.jsx)(p.Z, {
                        sound: t,
                        channel: n,
                        ...e
                    }),
                tooltipText: m.intl.string(m.t.KVbJU1),
                position: 'right',
                children: (0, r.jsx)(o.CircleInformationIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: E.secondaryIcon
                })
            })
        ]
    });
}
