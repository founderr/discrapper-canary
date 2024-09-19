r.d(t, {
    $: function () {
        return _;
    }
}),
    r(653041);
var a = r(735250),
    n = r(470079),
    s = r(120356),
    i = r.n(s),
    o = r(526629),
    l = r(873546),
    c = r(481060),
    d = r(774078),
    u = r(689938),
    f = r(367797),
    p = r(493978),
    m = r(932135);
function C(e) {
    let { endDate: t } = e,
        { days: r, hours: n, minutes: s, seconds: i } = (0, d.Z)(t),
        o = (function (e, t, r, a) {
            let n = (e, t) => ''.concat(e.toString().padStart(2, '0')).concat(t),
                s = [];
            return e > 0 && s.push(n(e, u.Z.Messages.COUNTDOWN_UNITS_DAYS)), (t > 0 || s.length > 0) && s.push(n(t, u.Z.Messages.COUNTDOWN_UNITS_HOURS)), (r > 0 || s.length > 0) && s.push(n(r, u.Z.Messages.COUNTDOWN_UNITS_MINUTES)), s.push(n(a, u.Z.Messages.COUNTDOWN_UNITS_SECONDS)), s.join(':');
        })(r, n, s, i);
    return (0, a.jsx)(c.Text, {
        variant: 'heading-md/medium',
        className: f.countdown,
        tag: 'div',
        children: (0, a.jsx)('div', {
            role: 'timer',
            'aria-relevant': 'all',
            children: o
        })
    });
}
let _ = n.memo(function (e) {
    let { unpublishedAt: t, isVisible: r, displayOptions: n, isFullScreen: s } = e,
        d = (0, c.useSpring)({
            transform: 'translateX(-50%) '.concat(r ? 'translateY(-75%)' : 'translateY(0%)'),
            opacity: r ? 1 : 0,
            config: {
                tension: 120,
                friction: 12
            }
        });
    return (0, a.jsxs)(o.animated.div, {
        className: i()([f.countDownWrapper, s && f.fullScreenWrapper, l.tq && f.mobileWrapper]),
        role: 'status',
        style: {
            ...n.style,
            ...d
        },
        children: [
            (0, a.jsx)(c.Text, {
                variant: 'text-md/medium',
                className: f.countdownLabel,
                children: n.label()
            }),
            null != n.iconSrc &&
                (0, a.jsx)('img', {
                    src: n.iconSrc,
                    className: f.countdownIcon,
                    alt: '',
                    'aria-hidden': !0
                }),
            (0, a.jsx)(C, { endDate: t }),
            (0, a.jsx)('img', {
                src: p,
                className: i()(f.sparkles, f.left),
                alt: '',
                'aria-hidden': !0
            }),
            (0, a.jsx)('img', {
                src: m,
                className: i()(f.sparkles, f.right),
                alt: '',
                'aria-hidden': !0
            })
        ]
    });
});
