n.d(t, {
    Z: function () {
        return u;
    }
}),
    n(47120);
var l = n(200651),
    i = n(192379),
    r = n(120356),
    s = n.n(r),
    a = n(481060),
    o = n(958707),
    c = n(410894),
    d = n(317732);
function u(e) {
    let { title: t, scrollerClassName: n, scrollerInnerClassName: r, children: u } = e,
        f = i.useRef(null),
        [h, m] = i.useState(!1),
        [x, g] = i.useState(!1),
        p = i.useCallback(() => {
            let { current: e } = f;
            null != e && (m(!e.isScrolledToTop()), g(!e.isScrolledToBottom()));
        }, []);
    return (
        i.useLayoutEffect(() => p(), []),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsxs)('div', {
                    className: s()(d.title, d.scrollWrapper),
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
                        className: s()(d.scrollerInner, r, { [d.bottomSeparator]: x }),
                        onScroll: p,
                        children: u
                    })
                })
            ]
        })
    );
}
