n.d(t, {
    $: function () {
        return h;
    }
}),
    n(653041);
var r = n(200651),
    s = n(192379),
    a = n(120356),
    i = n.n(a),
    l = n(100621),
    o = n(873546),
    c = n(481060),
    d = n(774078),
    u = n(689938),
    m = n(367797),
    f = n(781385),
    p = n(585616);
function C(e) {
    let { endDate: t } = e,
        { days: n, hours: s, minutes: a, seconds: i } = (0, d.Z)(t),
        l = (function (e, t, n, r) {
            let s = (e, t) => ''.concat(e.toString().padStart(2, '0')).concat(t),
                a = [];
            return e > 0 && a.push(s(e, u.Z.Messages.COUNTDOWN_UNITS_DAYS)), (t > 0 || a.length > 0) && a.push(s(t, u.Z.Messages.COUNTDOWN_UNITS_HOURS)), (n > 0 || a.length > 0) && a.push(s(n, u.Z.Messages.COUNTDOWN_UNITS_MINUTES)), a.push(s(r, u.Z.Messages.COUNTDOWN_UNITS_SECONDS)), a.join(':');
        })(n, s, a, i);
    return (0, r.jsx)(c.Text, {
        variant: 'heading-md/medium',
        className: m.countdown,
        tag: 'div',
        children: (0, r.jsx)('div', {
            role: 'timer',
            'aria-relevant': 'all',
            children: l
        })
    });
}
let h = s.memo(function (e) {
    let { unpublishedAt: t, isVisible: n, displayOptions: s, isFullScreen: a } = e,
        d = (0, c.useSpring)({
            transform: 'translateX(-50%) '.concat(n ? 'translateY(-75%)' : 'translateY(0%)'),
            opacity: n ? 1 : 0,
            config: {
                tension: 120,
                friction: 12
            }
        });
    return (0, r.jsxs)(l.animated.div, {
        className: i()([m.countDownWrapper, a && m.fullScreenWrapper, o.tq && m.mobileWrapper]),
        role: 'status',
        style: {
            ...s.style,
            ...d
        },
        children: [
            (0, r.jsx)(c.Text, {
                variant: 'text-md/medium',
                className: m.countdownLabel,
                children: s.label()
            }),
            null != s.iconSrc &&
                (0, r.jsx)('img', {
                    src: s.iconSrc,
                    className: m.countdownIcon,
                    alt: '',
                    'aria-hidden': !0
                }),
            (0, r.jsx)(C, { endDate: t }),
            (0, r.jsx)('img', {
                src: f.Z,
                className: i()(m.sparkles, m.left),
                alt: '',
                'aria-hidden': !0
            }),
            (0, r.jsx)('img', {
                src: p.Z,
                className: i()(m.sparkles, m.right),
                alt: '',
                'aria-hidden': !0
            })
        ]
    });
});
