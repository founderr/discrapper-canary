t.d(n, {
    Z: function () {
        return d;
    }
});
var i = t(200651),
    a = t(192379),
    l = t(120356),
    s = t.n(l),
    o = t(481060),
    r = t(926152);
function d(e) {
    let { children: n, icon: t, title: l } = e;
    return (0, i.jsxs)('header', {
        className: r.header,
        children: [
            (0, i.jsxs)('div', {
                className: r.name,
                children: [
                    a.cloneElement(t, {
                        className: s()(t.props.className, r.icon),
                        height: 24,
                        width: 24
                    }),
                    (0, i.jsx)(o.Heading, {
                        variant: 'heading-md/semibold',
                        className: r.title,
                        children: l
                    })
                ]
            }),
            n
        ]
    });
}
