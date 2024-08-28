n.d(t, {
    $: function () {
        return m;
    }
}),
    n(653041);
var r = n(735250),
    s = n(470079),
    a = n(120356),
    i = n.n(a),
    o = n(567526),
    l = n(873546),
    c = n(481060),
    d = n(774078),
    u = n(689938),
    f = n(409912),
    p = n(493978),
    g = n(932135);
function C(e) {
    let { endDate: t } = e,
        { days: n, hours: s, minutes: a, seconds: i } = (0, d.Z)(t),
        o = (function (e, t, n, r) {
            let s = (e, t) => ''.concat(e.toString().padStart(2, '0')).concat(t),
                a = [];
            return e > 0 && a.push(s(e, u.Z.Messages.COUNTDOWN_UNITS_DAYS)), (t > 0 || a.length > 0) && a.push(s(t, u.Z.Messages.COUNTDOWN_UNITS_HOURS)), (n > 0 || a.length > 0) && a.push(s(n, u.Z.Messages.COUNTDOWN_UNITS_MINUTES)), a.push(s(r, u.Z.Messages.COUNTDOWN_UNITS_SECONDS)), a.join(':');
        })(n, s, a, i);
    return (0, r.jsx)(c.Text, {
        variant: 'heading-md/medium',
        className: f.countdown,
        tag: 'div',
        children: (0, r.jsx)('div', {
            role: 'timer',
            'aria-relevant': 'all',
            children: o
        })
    });
}
let m = s.memo(function (e) {
    let { unpublishedAt: t, isVisible: n, displayOptions: s, isFullScreen: a } = e,
        d = (0, c.useSpring)({
            transform: 'translateX(-50%) '.concat(n ? 'translateY(-75%)' : 'translateY(0%)'),
            opacity: n ? 1 : 0,
            config: {
                tension: 120,
                friction: 12
            }
        });
    return (0, r.jsxs)(o.animated.div, {
        className: i()([f.countDownWrapper, a && f.fullScreenWrapper, l.tq && f.mobileWrapper]),
        role: 'status',
        style: {
            ...s.style,
            ...d
        },
        children: [
            (0, r.jsx)(c.Text, {
                variant: 'text-md/medium',
                className: f.countdownLabel,
                children: s.label()
            }),
            null != s.iconSrc &&
                (0, r.jsx)('img', {
                    src: s.iconSrc,
                    className: f.countdownIcon,
                    alt: '',
                    'aria-hidden': !0
                }),
            (0, r.jsx)(C, { endDate: t }),
            (0, r.jsx)('img', {
                src: p,
                className: i()(f.sparkles, f.left),
                alt: '',
                'aria-hidden': !0
            }),
            (0, r.jsx)('img', {
                src: g,
                className: i()(f.sparkles, f.right),
                alt: '',
                'aria-hidden': !0
            })
        ]
    });
});
