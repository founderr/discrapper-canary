n.d(t, {
    D: function () {
        return y;
    },
    Z: function () {
        return N;
    }
}),
    n(47120),
    n(773603);
var r = n(200651),
    i = n(192379),
    a = n(831209),
    s = n(442837),
    o = n(481060),
    l = n(749210),
    u = n(231053),
    c = n(183023),
    d = n(524444),
    f = n(208049),
    _ = n(697426),
    p = n(409673),
    h = n(695346),
    m = n(430824),
    g = n(710111),
    E = n(388032),
    v = n(629152),
    I = n(423298);
function b() {
    var e, t;
    let n = null !== (t = null === (e = h.kU.useSetting()) || void 0 === e ? void 0 : e.volume) && void 0 !== t ? t : 100;
    return (0, r.jsxs)(o.Clickable, {
        className: v.sliderContainer,
        onClick: (e) => e.stopPropagation(),
        children: [
            (0, r.jsx)(o.Text, {
                variant: 'text-sm/normal',
                children: E.intl.string(E.t.kbFsAA)
            }),
            (0, r.jsx)(o.Slider, {
                onValueChange: (e) => (0, f.xz)(null != e ? e : n),
                className: v.slider,
                initialValue: n,
                maxValue: 100
            })
        ]
    });
}
function S(e) {
    let { sound: t, closePopout: n, refreshPosition: a } = e,
        h = t.guildId === g.X8,
        I = (0, s.e7)([m.Z], () => m.Z.getGuild(t.guildId)),
        b = !h && null != I,
        [S, y] = i.useState(!h && !b),
        [A, N] = i.useState();
    i.useEffect(() => {
        if (!h && !b && null == A)
            y(!0),
                (0, f.xU)(t.soundId, t.guildId)
                    .then((e) => {
                        N(e);
                    })
                    .finally(() => {
                        y(!1), a();
                    });
    }, [t, h, b, a, A]);
    let C = i.useMemo(() => (h ? 'A default soundmoji. You can use this soundmoji everywhere on Discord.' : b ? 'This emoji is from one of your servers.' : null != A ? 'Want to use this emoji everywhere? Get Nitro and join the server.' : 'This soundmoji is from an invite only or unavailable guild'), [h, b, A]),
        R = i.useCallback(async () => {
            if ((n(), null != A))
                try {
                    await l.Z.joinGuild(A.id), l.Z.transitionToGuildSync(A.id);
                } catch {}
        }, [n, A]),
        O = !b && null != A,
        D = !h && S,
        L = i.useMemo(() => (b ? u.JO.createFromGuildRecord(I) : null != A ? u.JO.createFromDiscoverableGuild(A) : void 0), [I, b, A]);
    return D
        ? (0, r.jsx)(d.SE, {})
        : (0, r.jsxs)(d.W_, {
              className: v.infoContainer,
              children: [
                  (0, r.jsx)(T, {}),
                  (0, r.jsxs)('div', {
                      className: v.infoExpandedSoundContainer,
                      children: [
                          (0, r.jsx)(p.ZP, {
                              refreshEnabled: !0,
                              buttonOverlay: _.Pb.NONE,
                              sound: t,
                              channel: void 0,
                              isSoundmoji: !0,
                              onSelectItem: () => {}
                          }),
                          (0, r.jsx)(o.Text, {
                              variant: 'text-sm/normal',
                              children: C
                          })
                      ]
                  }),
                  null != L &&
                      (0, r.jsxs)('div', {
                          className: v.infoExpandedGuildContainer,
                          children: [
                              (0, r.jsx)(o.Text, {
                                  variant: 'eyebrow',
                                  color: 'header-muted',
                                  className: v.infoExpandedGuildTitle,
                                  children: 'This soundmoji is from'
                              }),
                              (0, r.jsx)(c.Oe, {
                                  expressionSourceGuild: L,
                                  hasJoinedExpressionSourceGuild: b,
                                  isDisplayingJoinGuildButtonInPopout: O
                              }),
                              O &&
                                  (0, r.jsx)(o.Button, {
                                      size: o.Button.Sizes.SMALL,
                                      fullWidth: !0,
                                      onClick: R,
                                      children: E.intl.string(E.t.riu2R0)
                                  })
                          ]
                      })
              ]
          });
}
function T() {
    return (0, r.jsxs)('div', {
        className: v.infoNitroContainer,
        children: [
            (0, r.jsx)('div', { className: v.infoNitroBackground }),
            (0, r.jsxs)('div', {
                className: v.infoNitroTextContainer,
                children: [
                    (0, r.jsx)(o.NitroWheelIcon, {
                        size: 'xxs',
                        color: 'white',
                        className: v.infoNitroIcon
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: 'text-xs/medium',
                        color: 'always-white',
                        className: v.infoNitroText,
                        children: 'Powered by nitro'
                    }),
                    (0, r.jsx)(o.TextBadge, {
                        text: 'BETA',
                        color: a.Z.BG_BRAND,
                        className: v.infoNitroBadge
                    })
                ]
            })
        ]
    });
}
function y(e) {
    let { sound: t } = e;
    return (0, r.jsxs)(d.W_, {
        className: v.infoContainer,
        children: [
            (0, r.jsx)(T, {}),
            (0, r.jsxs)('div', {
                className: v.infoSoundContainer,
                children: [
                    (0, r.jsxs)('div', {
                        className: v.infoSoundInnerContainer,
                        children: [
                            (0, r.jsx)(o.SoundboardIcon, {
                                size: 'sm',
                                className: v.infoSoundIcon
                            }),
                            (0, r.jsx)(o.Text, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                children: t.name
                            })
                        ]
                    }),
                    (0, r.jsx)('div', {
                        className: v.infoSoundInnerContainer,
                        children: (0, r.jsx)(o.Text, {
                            variant: 'text-sm/normal',
                            children: 'Click to hear sound'
                        })
                    })
                ]
            })
        ]
    });
}
function A(e) {
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
        }, []);
    return (0, r.jsx)(o.Popout, {
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
        children: (e) =>
            (0, r.jsx)(o.Tooltip, {
                onTooltipHide: () => l(!1),
                onTooltipShow: () => l(!0),
                text: a,
                position: 'top',
                shouldShow: !u,
                children: (t) =>
                    (0, r.jsx)(o.Clickable, {
                        ...t,
                        ...e,
                        'aria-label': a,
                        onClick: _,
                        className: I.secondaryButtonRefresh,
                        children: s
                    })
            })
    });
}
function N(e) {
    let { sound: t, setTooltipShowing: n } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(A, {
                setTooltipShowing: n,
                renderPopout: () => (0, r.jsx)(b, {}),
                tooltipText: E.intl.string(E.t['19lt29']),
                position: 'top',
                children: (0, r.jsx)(o.VoiceNormalIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: I.secondaryIcon
                })
            }),
            (0, r.jsx)(A, {
                setTooltipShowing: n,
                renderPopout: (e) =>
                    (0, r.jsx)(S, {
                        sound: t,
                        ...e
                    }),
                tooltipText: 'More Info',
                position: 'right',
                children: (0, r.jsx)(o.CircleInformationIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: I.secondaryIcon
                })
            })
        ]
    });
}
