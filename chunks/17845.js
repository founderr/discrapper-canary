n.d(t, {
    Z: function () {
        return h;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(780384),
    o = n(481060),
    c = n(410030),
    d = n(831565),
    u = n(61118);
function _(e) {
    let { title: t } = e,
        n = (0, d.v)({ location: 'QuestHomePage' });
    return (0, i.jsx)(o.Heading, {
        className: r()(u.title, { [u.uppercase]: n }),
        variant: n ? 'display-lg' : 'heading-xl/bold',
        color: 'header-primary',
        children: t
    });
}
function h(e) {
    let { title: t, description: n, button: s, className: d, children: h } = e,
        E = (0, c.ZP)(),
        m = (0, l.wj)(E),
        I = a.useMemo(() => ('string' == typeof t ? (0, i.jsx)(_, { title: t }) : Array.isArray(t) && t.every((e) => 'string' == typeof e) ? t.map((e) => (0, i.jsx)(_, { title: e }, e)) : t), [t]);
    return (0, i.jsxs)('div', {
        className: r()(u.container, d),
        children: [
            (0, i.jsx)('div', {
                className: u.content,
                children: (0, i.jsxs)('div', {
                    className: u.textContainer,
                    children: [
                        I,
                        (0, i.jsx)(o.Text, {
                            className: u.description,
                            variant: 'text-md/medium',
                            color: m ? 'text-muted' : 'header-primary',
                            children: n
                        }),
                        null != s &&
                            (0, i.jsx)('div', {
                                className: u.buttonContainer,
                                children: s
                            })
                    ]
                })
            }),
            h
        ]
    });
}
