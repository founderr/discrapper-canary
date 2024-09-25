n.d(t, {
    Kn: function () {
        return m;
    },
    mY: function () {
        return T;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(442837),
    u = n(704215),
    c = n(481060),
    d = n(607070),
    _ = n(243778),
    E = n(921944),
    f = n(689938),
    h = n(154418);
let p = 0.2,
    m = 41;
function I(e) {
    let { glowOpacity: t, className: n, colorOpacity: r = p } = e;
    return (0, i.jsxs)('div', {
        className: s()(h.nitroTopDividerContainer, n),
        children: [
            (0, i.jsx)('div', { className: h.nitroTopDividerUpper }),
            (0, i.jsx)('div', {
                style: { opacity: t },
                className: h.nitroTopDividerShadow
            }),
            (0, i.jsxs)('div', {
                className: s()(h.nitroTopDividerLockContainer),
                children: [
                    (0, i.jsx)('div', { className: h.nitroTopDividerLockBorder }),
                    (0, i.jsx)('div', {
                        className: h.nitroTopDividerLockCircle,
                        children: (0, i.jsx)(c.LockIcon, {
                            size: 'xs',
                            color: 'white'
                        })
                    }),
                    (0, i.jsx)('div', { className: h.nitroTopDividerLockBorderReversed })
                ]
            }),
            (0, i.jsx)('div', {
                style: { opacity: r },
                className: h.nitroTopDividerLower
            })
        ]
    });
}
function T() {
    let e = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
        [t, r] = (0, _.US)([u.z.REVERSE_TRIAL_EMOJI_PICKER]),
        o = t === u.z.REVERSE_TRIAL_EMOJI_PICKER;
    return (
        a.useEffect(
            () => () => {
                o && r(E.L.TAKE_ACTION);
            },
            [o, r]
        ),
        (0, i.jsxs)('div', {
            className: h.nitroTopDividerContainer,
            children: [
                (0, i.jsx)('div', { className: h.nitroTopDividerUpper }),
                (0, i.jsx)('div', { className: s()(h.nitroTopDividerShadow, h.glow, { [h.reducedMotion]: e || !o }) }),
                (0, i.jsxs)('div', {
                    className: s()(h.nitroTopDividerLockContainer),
                    children: [
                        (0, i.jsx)('div', { className: h.nitroTopDividerLockBorder }),
                        !e &&
                            o &&
                            (0, i.jsx)(c.LottieAnimation, {
                                className: s()(h.premiumUnlockAnimation),
                                loop: !1,
                                importData: () => n.e('21812').then(n.t.bind(n, 741855, 19))
                            }),
                        (0, i.jsxs)('div', {
                            className: s()(h.premiumUnlockedWithNitroPillContainer, { [h.reducedMotion]: e || !o }),
                            children: [
                                (0, i.jsx)(c.NitroWheelIcon, {
                                    size: 'xs',
                                    color: 'white'
                                }),
                                (0, i.jsx)(c.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'always-white',
                                    lineClamp: 1,
                                    children: f.Z.Messages.POWERED_BY_NITRO
                                })
                            ]
                        }),
                        (0, i.jsx)('div', { className: h.nitroTopDividerLockBorderReversed })
                    ]
                }),
                (0, i.jsx)('div', { className: h.reverseTrialTopDividerLower })
            ]
        })
    );
}
t.ZP = I;
