n.d(t, {
    Dp: function () {
        return S;
    },
    Hh: function () {
        return y;
    },
    P6: function () {
        return b;
    },
    ZP: function () {
        return A;
    },
    hq: function () {
        return T;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(831209),
    l = n(442837),
    u = n(481060),
    c = n(914010),
    d = n(594174),
    f = n(36703),
    _ = n(74538),
    p = n(125900),
    h = n(824690),
    m = n(240479),
    g = n(710111),
    E = n(388032),
    v = n(89107),
    I = n(965965);
function T() {
    let { volume: e, onVolumeChange: t } = (0, h.Z)();
    return (0, r.jsxs)(u.Clickable, {
        className: v.sliderContainer,
        onClick: (e) => e.stopPropagation(),
        children: [
            (0, r.jsx)(u.Text, {
                variant: 'text-sm/normal',
                children: E.intl.string(E.t['2JbvKy'])
            }),
            (0, r.jsx)(u.Slider, {
                onValueChange: t,
                className: v.slider,
                initialValue: (0, f.P)(e),
                maxValue: 100
            })
        ]
    });
}
function b(e) {
    let { sound: t, forceShowBetaLabel: n = !1 } = e,
        i = (0, p.V2)({ location: 'SoundmojiBanner' }),
        a = (0, l.e7)([d.default], () => _.ZP.canUseSoundboardEverywhere(d.default.getCurrentUser())),
        s = (0, l.e7)([c.Z], () => c.Z.getGuildId());
    return n || a || t.guildId === g.X8 || t.guildId === s || !i
        ? (0, r.jsx)('div', {
              children: (0, r.jsx)(u.TextBadge, {
                  text: 'BETA',
                  color: o.Z.BG_BRAND,
                  className: v.betaBadge
              })
          })
        : (0, r.jsxs)('div', {
              className: v.infoNitroContainer,
              children: [
                  (0, r.jsx)('div', { className: v.infoNitroBackground }),
                  (0, r.jsxs)('div', {
                      className: v.infoNitroTextContainer,
                      children: [
                          (0, r.jsx)(u.NitroWheelIcon, {
                              size: 'xxs',
                              color: 'white',
                              className: v.infoNitroIcon
                          }),
                          (0, r.jsx)(u.Text, {
                              variant: 'text-xs/medium',
                              color: 'always-white',
                              className: v.infoNitroText,
                              children: E.intl.string(E.t['BMw+7O'])
                          }),
                          (0, r.jsx)(u.TextBadge, {
                              text: 'BETA',
                              color: o.Z.BG_BRAND,
                              className: v.infoNitroBadge
                          })
                      ]
                  })
              ]
          });
}
function S(e) {
    let { sound: t } = e;
    return (0, r.jsxs)('div', {
        className: v.infoContainer,
        children: [
            (0, r.jsx)(b, { sound: t }),
            (0, r.jsxs)('div', {
                className: v.infoSoundContainer,
                children: [
                    (0, r.jsxs)('div', {
                        className: v.infoSoundInnerContainer,
                        children: [
                            (0, r.jsx)(u.SoundboardIcon, {
                                size: 'sm',
                                className: v.infoSoundIcon
                            }),
                            (0, r.jsx)(u.Text, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                children: t.name
                            })
                        ]
                    }),
                    (0, r.jsx)('div', {
                        className: v.infoSoundInnerContainer,
                        children: (0, r.jsx)(u.Text, {
                            variant: 'text-sm/normal',
                            children: E.intl.string(E.t.D6eYmZ)
                        })
                    })
                ]
            })
        ]
    });
}
function y(e) {
    let { renderPopout: t, position: n, tooltipText: a, children: o, setTooltipShowing: l, clickableClassName: c } = e,
        [d, f] = i.useState(!1),
        [_, p] = i.useState(String(Date.now())),
        h = i.useCallback(
            (e) => {
                e.stopPropagation(), f(!d);
            },
            [d]
        ),
        m = i.useCallback(() => {
            p(String(Date.now()));
        }, []),
        g = i.useRef(null);
    return (
        i.useEffect(() => {
            var e, t;
            d ? null === (e = g.current) || void 0 === e || e.focus() : null === (t = g.current) || void 0 === t || t.blur(), null == l || l(d);
        }, [d, l]),
        (0, r.jsx)(u.Popout, {
            renderPopout: (e) =>
                (0, r.jsx)(u.Clickable, {
                    onClick: (e) => e.stopPropagation(),
                    onMouseOver: (e) => e.stopPropagation(),
                    children: t({
                        ...e,
                        refreshPosition: m
                    })
                }),
            align: 'center',
            nudgeAlignIntoViewport: !0,
            position: n,
            shouldShow: d,
            onRequestClose: () => f(!1),
            animationPosition: 'bottom',
            positionKey: _,
            closeOnScroll: !0,
            children: (e) =>
                (0, r.jsx)(u.Tooltip, {
                    onTooltipHide: () => (null == l ? void 0 : l(!1)),
                    onTooltipShow: () => (null == l ? void 0 : l(!0)),
                    text: a,
                    position: 'top',
                    shouldShow: !d,
                    children: (t) =>
                        (0, r.jsx)(u.Clickable, {
                            innerRef: g,
                            ...t,
                            ...e,
                            'aria-label': a,
                            onClick: h,
                            className: s()(I.secondaryButtonRefresh, c),
                            children: o
                        })
                })
        })
    );
}
function A(e) {
    let { sound: t, channel: n, setTooltipShowing: i } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(y, {
                setTooltipShowing: i,
                renderPopout: () => (0, r.jsx)(T, {}),
                tooltipText: E.intl.string(E.t['19lt29']),
                position: 'top',
                children: (0, r.jsx)(u.VoiceNormalIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: I.secondaryIcon
                })
            }),
            (0, r.jsx)(y, {
                setTooltipShowing: i,
                renderPopout: (e) =>
                    (0, r.jsx)(m.Z, {
                        sound: t,
                        channel: n,
                        ...e
                    }),
                tooltipText: E.intl.string(E.t.KVbJU1),
                position: 'right',
                children: (0, r.jsx)(u.CircleInformationIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: I.secondaryIcon
                })
            })
        ]
    });
}
