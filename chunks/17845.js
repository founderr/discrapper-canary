n.d(t, {
    Z: function () {
        return h;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(780384),
    o = n(481060),
    c = n(410030),
    d = n(426306);
function u(e) {
    let { title: t } = e;
    return (0, i.jsx)(o.Heading, {
        className: a()(d.title, d.uppercase),
        variant: 'display-lg',
        color: 'header-primary',
        children: t
    });
}
function h(e) {
    let { title: t, description: n, button: l, className: h, children: m } = e,
        p = (0, c.ZP)(),
        g = (0, s.wj)(p),
        f = r.useMemo(() => (Array.isArray(t) ? t.map((e, t) => (0, i.jsx)(u, { title: e }, t)) : (0, i.jsx)(u, { title: t })), [t]);
    return (0, i.jsxs)('div', {
        className: a()(d.container, h),
        children: [
            (0, i.jsx)('div', {
                className: d.content,
                children: (0, i.jsxs)('div', {
                    className: d.textContainer,
                    children: [
                        f,
                        null != n &&
                            (0, i.jsx)(o.Text, {
                                className: d.description,
                                variant: 'text-md/medium',
                                color: g ? 'text-muted' : 'header-primary',
                                children: n
                            }),
                        null != l &&
                            (0, i.jsx)('div', {
                                className: d.buttonContainer,
                                children: l
                            })
                    ]
                })
            }),
            m
        ]
    });
}
