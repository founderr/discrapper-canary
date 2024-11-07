n.d(t, {
    Kn: function () {
        return p;
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
    h = n(320060);
let p = 41;
function m() {
    let e = (0, o.e7)([c.Z], () => c.Z.useReducedMotion),
        [t, a] = (0, d.US)([l.z.TRIAL_FOR_ALL_EMOJI_PCIKER]),
        p = t === l.z.TRIAL_FOR_ALL_EMOJI_PCIKER;
    return (
        i.useEffect(
            () => () => {
                p && a(f.L.TAKE_ACTION);
            },
            [p, a]
        ),
        (0, r.jsxs)('div', {
            className: h.nitroTopDividerContainer,
            children: [
                (0, r.jsx)('div', { className: h.nitroTopDividerUpper }),
                (0, r.jsx)('div', { className: s()(h.nitroTopDividerShadow, h.glow, { [h.reducedMotion]: e || !p }) }),
                (0, r.jsxs)('div', {
                    className: s()(h.nitroTopDividerLockContainer),
                    children: [
                        (0, r.jsx)('div', { className: h.nitroTopDividerLockBorder }),
                        !e &&
                            p &&
                            (0, r.jsx)(u.LottieAnimation, {
                                className: s()(h.premiumUnlockAnimation),
                                loop: !1,
                                importData: () => n.e('21812').then(n.t.bind(n, 741855, 19))
                            }),
                        (0, r.jsxs)('div', {
                            className: s()(h.premiumUnlockedWithNitroPillContainer, { [h.reducedMotion]: e || !p }),
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
                        (0, r.jsx)('div', { className: h.nitroTopDividerLockBorderReversed })
                    ]
                }),
                (0, r.jsx)('div', { className: h.reverseTrialTopDividerLower })
            ]
        })
    );
}
t.ZP = function (e) {
    let { glowOpacity: t, className: n, colorOpacity: i = 0.2 } = e;
    return (0, r.jsxs)('div', {
        className: s()(h.nitroTopDividerContainer, n),
        children: [
            (0, r.jsx)('div', { className: h.nitroTopDividerUpper }),
            (0, r.jsx)('div', {
                style: { opacity: t },
                className: h.nitroTopDividerShadow
            }),
            (0, r.jsxs)('div', {
                className: s()(h.nitroTopDividerLockContainer),
                children: [
                    (0, r.jsx)('div', { className: h.nitroTopDividerLockBorder }),
                    (0, r.jsx)('div', {
                        className: h.nitroTopDividerLockCircle,
                        children: (0, r.jsx)(u.LockIcon, {
                            size: 'xs',
                            color: 'white'
                        })
                    }),
                    (0, r.jsx)('div', { className: h.nitroTopDividerLockBorderReversed })
                ]
            }),
            (0, r.jsx)('div', {
                style: { opacity: i },
                className: h.nitroTopDividerLower
            })
        ]
    });
};
