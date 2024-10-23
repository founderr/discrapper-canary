r.d(t, {
    $: function () {
        return h;
    }
}),
    r(653041);
var s = r(200651),
    n = r(192379),
    a = r(120356),
    i = r.n(a),
    l = r(100621),
    o = r(873546),
    c = r(481060),
    d = r(774078),
    u = r(689938),
    m = r(367797),
    f = r(781385),
    p = r(585616);
function C(e) {
    let { endDate: t } = e,
        { days: r, hours: n, minutes: a, seconds: i } = (0, d.Z)(t),
        l = (function (e, t, r, s) {
            let n = (e, t) => ''.concat(e.toString().padStart(2, '0')).concat(t),
                a = [];
            return e > 0 && a.push(n(e, u.Z.Messages.COUNTDOWN_UNITS_DAYS)), (t > 0 || a.length > 0) && a.push(n(t, u.Z.Messages.COUNTDOWN_UNITS_HOURS)), (r > 0 || a.length > 0) && a.push(n(r, u.Z.Messages.COUNTDOWN_UNITS_MINUTES)), a.push(n(s, u.Z.Messages.COUNTDOWN_UNITS_SECONDS)), a.join(':');
        })(r, n, a, i);
    return (0, s.jsx)(c.Text, {
        variant: 'heading-md/medium',
        className: m.countdown,
        tag: 'div',
        children: (0, s.jsx)('div', {
            role: 'timer',
            'aria-relevant': 'all',
            children: l
        })
    });
}
let h = n.memo(function (e) {
    let { unpublishedAt: t, isVisible: r, displayOptions: n, isFullScreen: a } = e,
        d = (0, c.useSpring)({
            transform: 'translateX(-50%) '.concat(r ? 'translateY(-75%)' : 'translateY(0%)'),
            opacity: r ? 1 : 0,
            config: {
                tension: 120,
                friction: 12
            }
        });
    return (0, s.jsxs)(l.animated.div, {
        className: i()([m.countDownWrapper, a && m.fullScreenWrapper, o.tq && m.mobileWrapper]),
        role: 'status',
        style: {
            ...n.style,
            ...d
        },
        children: [
            (0, s.jsx)(c.Text, {
                variant: 'text-md/medium',
                className: m.countdownLabel,
                children: n.label()
            }),
            null != n.iconSrc &&
                (0, s.jsx)('img', {
                    src: n.iconSrc,
                    className: m.countdownIcon,
                    alt: '',
                    'aria-hidden': !0
                }),
            (0, s.jsx)(C, { endDate: t }),
            (0, s.jsx)('img', {
                src: f.Z,
                className: i()(m.sparkles, m.left),
                alt: '',
                'aria-hidden': !0
            }),
            (0, s.jsx)('img', {
                src: p.Z,
                className: i()(m.sparkles, m.right),
                alt: '',
                'aria-hidden': !0
            })
        ]
    });
});
