n.d(t, {
    $: function () {
        return m;
    }
}),
    n(653041);
var r = n(735250),
    a = n(470079),
    s = n(120356),
    o = n.n(s),
    i = n(180081),
    c = n(873546),
    l = n(481060),
    d = n(774078),
    u = n(689938),
    f = n(409912),
    p = n(493978),
    g = n(932135);
function C(e) {
    let { endDate: t } = e,
        { days: n, hours: a, minutes: s, seconds: o } = (0, d.Z)(t),
        i = (function (e, t, n, r) {
            let a = (e, t) => ''.concat(e.toString().padStart(2, '0')).concat(t),
                s = [];
            return e > 0 && s.push(a(e, u.Z.Messages.COUNTDOWN_UNITS_DAYS)), (t > 0 || s.length > 0) && s.push(a(t, u.Z.Messages.COUNTDOWN_UNITS_HOURS)), (n > 0 || s.length > 0) && s.push(a(n, u.Z.Messages.COUNTDOWN_UNITS_MINUTES)), s.push(a(r, u.Z.Messages.COUNTDOWN_UNITS_SECONDS)), s.join(':');
        })(n, a, s, o);
    return (0, r.jsx)(l.Text, {
        variant: 'heading-md/medium',
        className: f.countdown,
        tag: 'div',
        children: (0, r.jsx)('div', {
            role: 'timer',
            'aria-relevant': 'all',
            children: i
        })
    });
}
let m = a.memo(function (e) {
    let { unpublishedAt: t, isVisible: n, displayOptions: a, isFullScreen: s } = e,
        d = (0, l.useSpring)({
            transform: 'translateX(-50%) '.concat(n ? 'translateY(-75%)' : 'translateY(0%)'),
            opacity: n ? 1 : 0,
            config: {
                tension: 120,
                friction: 12
            }
        });
    return (0, r.jsxs)(i.animated.div, {
        className: o()([f.countDownWrapper, s && f.fullScreenWrapper, c.tq && f.mobileWrapper]),
        role: 'status',
        style: {
            ...a.style,
            ...d
        },
        children: [
            (0, r.jsx)(l.Text, {
                variant: 'text-md/medium',
                className: f.countdownLabel,
                children: a.label()
            }),
            null != a.iconSrc &&
                (0, r.jsx)('img', {
                    src: a.iconSrc,
                    className: f.countdownIcon,
                    alt: '',
                    'aria-hidden': !0
                }),
            (0, r.jsx)(C, { endDate: t }),
            (0, r.jsx)('img', {
                src: p,
                className: o()(f.sparkles, f.left),
                alt: '',
                'aria-hidden': !0
            }),
            (0, r.jsx)('img', {
                src: g,
                className: o()(f.sparkles, f.right),
                alt: '',
                'aria-hidden': !0
            })
        ]
    });
});
