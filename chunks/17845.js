n.d(t, {
    Z: function () {
        return _;
    }
});
var i = n(200651),
    a = n(192379),
    s = n(120356),
    r = n.n(s),
    l = n(780384),
    o = n(481060),
    c = n(410030),
    d = n(61118);
function u(e) {
    let { title: t } = e;
    return (0, i.jsx)(o.Heading, {
        className: r()(d.title, d.uppercase),
        variant: 'display-lg',
        color: 'header-primary',
        children: t
    });
}
function _(e) {
    let { title: t, description: n, button: s, className: _, children: E } = e,
        h = (0, c.ZP)(),
        m = (0, l.wj)(h),
        I = a.useMemo(() => (Array.isArray(t) ? t.map((e) => (0, i.jsx)(u, { title: e }, e)) : (0, i.jsx)(u, { title: t })), [t]);
    return (0, i.jsxs)('div', {
        className: r()(d.container, _),
        children: [
            (0, i.jsx)('div', {
                className: d.content,
                children: (0, i.jsxs)('div', {
                    className: d.textContainer,
                    children: [
                        I,
                        null != n &&
                            (0, i.jsx)(o.Text, {
                                className: d.description,
                                variant: 'text-md/medium',
                                color: m ? 'text-muted' : 'header-primary',
                                children: n
                            }),
                        null != s &&
                            (0, i.jsx)('div', {
                                className: d.buttonContainer,
                                children: s
                            })
                    ]
                })
            }),
            E
        ]
    });
}
