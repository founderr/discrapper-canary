t.d(n, {
    Z: function () {
        return d;
    }
});
var i = t(200651),
    l = t(192379),
    r = t(120356),
    a = t.n(r),
    o = t(481060),
    s = t(926152);
function d(e) {
    let { children: n, icon: t, title: r } = e;
    return (0, i.jsxs)('header', {
        className: s.header,
        children: [
            (0, i.jsxs)('div', {
                className: s.name,
                children: [
                    l.cloneElement(t, {
                        className: a()(t.props.className, s.icon),
                        height: 24,
                        width: 24
                    }),
                    (0, i.jsx)(o.Heading, {
                        variant: 'heading-md/semibold',
                        className: s.title,
                        children: r
                    })
                ]
            }),
            n
        ]
    });
}
