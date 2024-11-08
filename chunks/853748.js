n.d(t, {
    $: function () {
        return g;
    }
}),
    n(653041);
var r = n(200651),
    a = n(192379),
    s = n(120356),
    i = n.n(s),
    l = n(100621),
    o = n(873546),
    c = n(481060),
    d = n(774078),
    u = n(388032),
    m = n(865030),
    h = n(781385),
    p = n(585616);
function f(e) {
    let { endDate: t } = e,
        { days: n, hours: a, minutes: s, seconds: i } = (0, d.Z)(t),
        l = (function (e, t, n, r) {
            let a = (e, t) => ''.concat(e.toString().padStart(2, '0')).concat(t),
                s = [];
            return e > 0 && s.push(a(e, u.intl.string(u.t.QJyuxc))), (t > 0 || s.length > 0) && s.push(a(t, u.intl.string(u.t['1LyF1t']))), (n > 0 || s.length > 0) && s.push(a(n, u.intl.string(u.t.n7dksL))), s.push(a(r, u.intl.string(u.t['6m/6nJ']))), s.join(':');
        })(n, a, s, i);
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
let g = a.memo(function (e) {
    let { unpublishedAt: t, isVisible: n, displayOptions: a, isFullScreen: s } = e,
        d = (0, c.useSpring)({
            transform: 'translateX(-50%) '.concat(n ? 'translateY(-75%)' : 'translateY(0%)'),
            opacity: n ? 1 : 0,
            config: {
                tension: 120,
                friction: 12
            }
        });
    return (0, r.jsxs)(l.animated.div, {
        className: i()([m.countDownWrapper, s && m.fullScreenWrapper, o.tq && m.mobileWrapper]),
        role: 'status',
        style: {
            ...a.style,
            ...d
        },
        children: [
            (0, r.jsx)(c.Text, {
                variant: 'text-md/medium',
                className: m.countdownLabel,
                children: a.label()
            }),
            null != a.iconSrc &&
                (0, r.jsx)('img', {
                    src: a.iconSrc,
                    className: m.countdownIcon,
                    alt: '',
                    'aria-hidden': !0
                }),
            (0, r.jsx)(f, { endDate: t }),
            (0, r.jsx)('img', {
                src: h.Z,
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
