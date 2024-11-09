n.d(t, {
    Z: function () {
        return h;
    },
    i: function () {
        return f;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(873546),
    s = n(481060),
    o = n(626135),
    l = n(981631),
    u = n(921944),
    c = n(388032),
    d = n(326707);
function f(e) {
    return e || !(a.tq || a.Em) ? c.intl.string(c.t.gV5p7O) : c.intl.string(c.t['WNk//v']);
}
function _(e) {
    let { onComplete: t, onDMCheckItOutClick: u, isDM: _ } = e;
    i.useEffect(() => {
        o.default.track(l.rMx.PREMIUM_GIFT_UPSELL_VIEWED, { type: 'holiday_gifting_tip' });
    }, []);
    let h = i.useMemo(() => [() => n.e('36278').then(n.t.bind(n, 268147, 19)), () => n.e('66902').then(n.t.bind(n, 7171, 19)), () => n.e('99694').then(n.t.bind(n, 55562, 19))], []),
        p = _ || !(a.tq || a.Em),
        m = p ? c.intl.string(c.t.IYHmjI) : c.intl.string(c.t.kgJi9P),
        g = p ? c.intl.string(c.t.aKD15e) : c.intl.string(c.t.g2V4X1);
    return (0, r.jsxs)('div', {
        className: d.container,
        children: [
            (0, r.jsx)(s.ChainedLottieAnimation, {
                className: d.image,
                animationData: h
            }),
            (0, r.jsxs)('div', {
                className: d.body,
                children: [
                    (0, r.jsx)(s.Heading, {
                        className: d.text,
                        variant: 'heading-sm/semibold',
                        children: m
                    }),
                    (0, r.jsx)(s.Text, {
                        className: d.text,
                        variant: 'text-sm/normal',
                        children: f(_)
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: d.dmButtonContainer,
                children: [
                    (0, r.jsx)(s.Button, {
                        className: d.dmButton,
                        look: s.Button.Looks.FILLED,
                        color: s.Button.Colors.BRAND,
                        onClick: () => t(),
                        children: c.intl.string(c.t['NX+WJC'])
                    }),
                    (0, r.jsx)(s.Button, {
                        className: d.dmButton,
                        color: s.Button.Colors.BRAND_INVERTED,
                        onClick: () => u(),
                        children: g
                    })
                ]
            }),
            (0, r.jsx)('div', { className: d.pointer })
        ]
    });
}
function h(e) {
    let { onComplete: t, onDMCheckItOutClick: n, markAsDismissed: i, isDM: a } = e;
    return (0, r.jsx)(s.Popout, {
        spacing: 0,
        shouldShow: !0,
        position: 'top',
        align: 'center',
        renderPopout: (e) =>
            (0, r.jsx)(_, {
                ...e,
                onComplete: () => {
                    t(), i(u.L.USER_DISMISS);
                },
                onDMCheckItOutClick: () => {
                    n(), t(), i(u.L.TAKE_ACTION);
                },
                isDM: a
            }),
        onRequestClose: () => void 0,
        closeOnScroll: !1,
        ignoreModalClicks: !0,
        children: () => (0, r.jsx)('div', { className: d.popoutTarget })
    });
}
