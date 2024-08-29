n.d(t, {
    $: function () {
        return m;
    }
}),
    n(653041);
var a = n(735250),
    r = n(470079),
    s = n(120356),
    o = n.n(s),
    i = n(180081),
    l = n(873546),
    c = n(481060),
    d = n(774078),
    u = n(689938),
    f = n(409912),
    p = n(493978),
    g = n(932135);
function C(e) {
    let { endDate: t } = e,
        { days: n, hours: r, minutes: s, seconds: o } = (0, d.Z)(t),
        i = (function (e, t, n, a) {
            let r = (e, t) => ''.concat(e.toString().padStart(2, '0')).concat(t),
                s = [];
            return e > 0 && s.push(r(e, u.Z.Messages.COUNTDOWN_UNITS_DAYS)), (t > 0 || s.length > 0) && s.push(r(t, u.Z.Messages.COUNTDOWN_UNITS_HOURS)), (n > 0 || s.length > 0) && s.push(r(n, u.Z.Messages.COUNTDOWN_UNITS_MINUTES)), s.push(r(a, u.Z.Messages.COUNTDOWN_UNITS_SECONDS)), s.join(':');
        })(n, r, s, o);
    return (0, a.jsx)(c.Text, {
        variant: 'heading-md/medium',
        className: f.countdown,
        tag: 'div',
        children: (0, a.jsx)('div', {
            role: 'timer',
            'aria-relevant': 'all',
            children: i
        })
    });
}
let m = r.memo(function (e) {
    let { unpublishedAt: t, isVisible: n, displayOptions: r, isFullScreen: s } = e,
        d = (0, c.useSpring)({
            transform: 'translateX(-50%) '.concat(n ? 'translateY(-75%)' : 'translateY(0%)'),
            opacity: n ? 1 : 0,
            config: {
                tension: 120,
                friction: 12
            }
        });
    return (0, a.jsxs)(i.animated.div, {
        className: o()([f.countDownWrapper, s && f.fullScreenWrapper, l.tq && f.mobileWrapper]),
        role: 'status',
        style: {
            ...r.style,
            ...d
        },
        children: [
            (0, a.jsx)(c.Text, {
                variant: 'text-md/medium',
                className: f.countdownLabel,
                children: r.label()
            }),
            null != r.iconSrc &&
                (0, a.jsx)('img', {
                    src: r.iconSrc,
                    className: f.countdownIcon,
                    alt: '',
                    'aria-hidden': !0
                }),
            (0, a.jsx)(C, { endDate: t }),
            (0, a.jsx)('img', {
                src: p,
                className: o()(f.sparkles, f.left),
                alt: '',
                'aria-hidden': !0
            }),
            (0, a.jsx)('img', {
                src: g,
                className: o()(f.sparkles, f.right),
                alt: '',
                'aria-hidden': !0
            })
        ]
    });
});
