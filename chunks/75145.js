n.d(t, {
    Kn: function () {
        return h;
    },
    fi: function () {
        return m;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(704215),
    u = n(481060),
    c = n(607070),
    d = n(243778),
    f = n(921944),
    _ = n(388032),
    p = n(154418);
let h = 41;
function m() {
    let e = (0, o.e7)([c.Z], () => c.Z.useReducedMotion),
        [t, a] = (0, d.US)([l.z.TRIAL_FOR_ALL_EMOJI_PCIKER]),
        h = t === l.z.TRIAL_FOR_ALL_EMOJI_PCIKER;
    return (
        i.useEffect(
            () => () => {
                h && a(f.L.TAKE_ACTION);
            },
            [h, a]
        ),
        (0, r.jsxs)('div', {
            className: p.nitroTopDividerContainer,
            children: [
                (0, r.jsx)('div', { className: p.nitroTopDividerUpper }),
                (0, r.jsx)('div', { className: s()(p.nitroTopDividerShadow, p.glow, { [p.reducedMotion]: e || !h }) }),
                (0, r.jsxs)('div', {
                    className: s()(p.nitroTopDividerLockContainer),
                    children: [
                        (0, r.jsx)('div', { className: p.nitroTopDividerLockBorder }),
                        !e &&
                            h &&
                            (0, r.jsx)(u.LottieAnimation, {
                                className: s()(p.premiumUnlockAnimation),
                                loop: !1,
                                importData: () => n.e('21812').then(n.t.bind(n, 741855, 19))
                            }),
                        (0, r.jsxs)('div', {
                            className: s()(p.premiumUnlockedWithNitroPillContainer, { [p.reducedMotion]: e || !h }),
                            children: [
                                (0, r.jsx)(u.NitroWheelIcon, {
                                    size: 'xs',
                                    color: 'white'
                                }),
                                (0, r.jsx)(u.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'always-white',
                                    lineClamp: 1,
                                    children: _.intl.string(_.t['BMw+7O'])
                                })
                            ]
                        }),
                        (0, r.jsx)('div', { className: p.nitroTopDividerLockBorderReversed })
                    ]
                }),
                (0, r.jsx)('div', { className: p.reverseTrialTopDividerLower })
            ]
        })
    );
}
t.ZP = function (e) {
    let { glowOpacity: t, className: n, colorOpacity: i = 0.2 } = e;
    return (0, r.jsxs)('div', {
        className: s()(p.nitroTopDividerContainer, n),
        children: [
            (0, r.jsx)('div', { className: p.nitroTopDividerUpper }),
            (0, r.jsx)('div', {
                style: { opacity: t },
                className: p.nitroTopDividerShadow
            }),
            (0, r.jsxs)('div', {
                className: s()(p.nitroTopDividerLockContainer),
                children: [
                    (0, r.jsx)('div', { className: p.nitroTopDividerLockBorder }),
                    (0, r.jsx)('div', {
                        className: p.nitroTopDividerLockCircle,
                        children: (0, r.jsx)(u.LockIcon, {
                            size: 'xs',
                            color: 'white'
                        })
                    }),
                    (0, r.jsx)('div', { className: p.nitroTopDividerLockBorderReversed })
                ]
            }),
            (0, r.jsx)('div', {
                style: { opacity: i },
                className: p.nitroTopDividerLower
            })
        ]
    });
};
