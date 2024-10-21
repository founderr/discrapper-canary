s.d(t, {
    $: function () {
        return h;
    }
}),
    s(653041);
var a = s(200651),
    r = s(192379),
    n = s(120356),
    i = s.n(n),
    l = s(100621),
    o = s(873546),
    c = s(481060),
    d = s(774078),
    u = s(689938),
    m = s(367797),
    C = s(781385),
    f = s(585616);
function p(e) {
    let { endDate: t } = e,
        { days: s, hours: r, minutes: n, seconds: i } = (0, d.Z)(t),
        l = (function (e, t, s, a) {
            let r = (e, t) => ''.concat(e.toString().padStart(2, '0')).concat(t),
                n = [];
            return e > 0 && n.push(r(e, u.Z.Messages.COUNTDOWN_UNITS_DAYS)), (t > 0 || n.length > 0) && n.push(r(t, u.Z.Messages.COUNTDOWN_UNITS_HOURS)), (s > 0 || n.length > 0) && n.push(r(s, u.Z.Messages.COUNTDOWN_UNITS_MINUTES)), n.push(r(a, u.Z.Messages.COUNTDOWN_UNITS_SECONDS)), n.join(':');
        })(s, r, n, i);
    return (0, a.jsx)(c.Text, {
        variant: 'heading-md/medium',
        className: m.countdown,
        tag: 'div',
        children: (0, a.jsx)('div', {
            role: 'timer',
            'aria-relevant': 'all',
            children: l
        })
    });
}
let h = r.memo(function (e) {
    let { unpublishedAt: t, isVisible: s, displayOptions: r, isFullScreen: n } = e,
        d = (0, c.useSpring)({
            transform: 'translateX(-50%) '.concat(s ? 'translateY(-75%)' : 'translateY(0%)'),
            opacity: s ? 1 : 0,
            config: {
                tension: 120,
                friction: 12
            }
        });
    return (0, a.jsxs)(l.animated.div, {
        className: i()([m.countDownWrapper, n && m.fullScreenWrapper, o.tq && m.mobileWrapper]),
        role: 'status',
        style: {
            ...r.style,
            ...d
        },
        children: [
            (0, a.jsx)(c.Text, {
                variant: 'text-md/medium',
                className: m.countdownLabel,
                children: r.label()
            }),
            null != r.iconSrc &&
                (0, a.jsx)('img', {
                    src: r.iconSrc,
                    className: m.countdownIcon,
                    alt: '',
                    'aria-hidden': !0
                }),
            (0, a.jsx)(p, { endDate: t }),
            (0, a.jsx)('img', {
                src: C.Z,
                className: i()(m.sparkles, m.left),
                alt: '',
                'aria-hidden': !0
            }),
            (0, a.jsx)('img', {
                src: f.Z,
                className: i()(m.sparkles, m.right),
                alt: '',
                'aria-hidden': !0
            })
        ]
    });
});
