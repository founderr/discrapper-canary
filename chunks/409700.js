n.d(t, {
    Z: function () {
        return m;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(442837),
    s = n(481060),
    o = n(208049),
    l = n(409673),
    u = n(695346),
    c = n(430824),
    d = n(710111),
    f = n(388032),
    _ = n(629152),
    p = n(423298);
function h() {
    var e, t;
    let n = null !== (t = null === (e = u.kU.useSetting()) || void 0 === e ? void 0 : e.volume) && void 0 !== t ? t : 100;
    return (0, r.jsxs)(s.Clickable, {
        className: _.sliderContainer,
        onClick: (e) => e.stopPropagation(),
        children: [
            (0, r.jsx)(s.Text, {
                variant: 'text-sm/normal',
                children: f.intl.string(f.t.kbFsAA)
            }),
            (0, r.jsx)(s.Slider, {
                onValueChange: (e) => (0, o.xz)(null != e ? e : n),
                className: _.slider,
                initialValue: n,
                maxValue: 100
            })
        ]
    });
}
function m(e) {
    let { sound: t } = e,
        [n, o] = i.useState(!1),
        u = i.useCallback(
            (e) => {
                e.stopPropagation(), o(!n);
            },
            [n]
        ),
        _ = (0, a.e7)([c.Z], () => t.guildId === d.X8 || null != c.Z.getGuild(t.guildId), [t.guildId]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.Popout, {
                renderPopout: () => (0, r.jsx)(h, {}),
                position: 'top',
                shouldShow: n,
                onRequestClose: () => o(!1),
                animationPosition: 'bottom',
                children: (e) =>
                    (0, r.jsx)(s.Tooltip, {
                        text: f.intl.string(f.t['19lt29']),
                        position: 'top',
                        shouldShow: !n,
                        children: (t) =>
                            (0, r.jsx)(s.Clickable, {
                                ...t,
                                ...e,
                                'aria-label': f.intl.string(f.t['19lt29']),
                                onClick: u,
                                className: p.secondaryButtonRefresh,
                                children: (0, r.jsx)(s.VoiceNormalIcon, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: p.secondaryIcon
                                })
                            })
                    })
            }),
            _ &&
                (0, r.jsx)(l._6, {
                    sound: t,
                    refreshEnabled: !0
                })
        ]
    });
}
