n.d(t, {
    Z: function () {
        return u;
    }
}),
    n(47120);
var l = n(200651),
    s = n(192379),
    i = n(120356),
    r = n.n(i),
    a = n(481060),
    o = n(958707),
    c = n(410894),
    d = n(317732);
function u(e) {
    let { title: t, scrollerClassName: n, scrollerInnerClassName: i, children: u } = e,
        f = s.useRef(null),
        [h, m] = s.useState(!1),
        [x, _] = s.useState(!1),
        g = s.useCallback(() => {
            let { current: e } = f;
            null != e && (m(!e.isScrolledToTop()), _(!e.isScrolledToBottom()));
        }, []);
    return (
        s.useLayoutEffect(() => g(), []),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsxs)('div', {
                    className: r()(d.title, d.scrollWrapper),
                    children: [
                        (0, l.jsx)(a.FormTitle, {
                            className: c.formItemTitle,
                            children: t
                        }),
                        (0, l.jsx)(o.Z, { separator: h })
                    ]
                }),
                (0, l.jsx)('div', {
                    className: n,
                    children: (0, l.jsx)(a.AdvancedScroller, {
                        ref: f,
                        className: r()(d.scrollerInner, i, { [d.bottomSeparator]: x }),
                        onScroll: g,
                        children: u
                    })
                })
            ]
        })
    );
}
