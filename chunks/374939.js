var i = n(735250),
    a = n(470079),
    s = n(481060),
    r = n(17845),
    l = n(89866);
t.Z = a.forwardRef(function (e, t) {
    let { title: n, description: a, onScroll: o, button: c, bannerClassName: d, bannerBackground: u, children: _ } = e;
    return (0, i.jsxs)(s.AdvancedScroller, {
        onScroll: o,
        className: l.container,
        ref: t,
        children: [
            (0, i.jsx)(r.Z, {
                title: n,
                description: a,
                button: c,
                className: d,
                background: u
            }),
            (0, i.jsx)('section', {
                className: l.contentContainer,
                children: (0, i.jsx)('div', {
                    className: l.content,
                    children: _
                })
            })
        ]
    });
});
