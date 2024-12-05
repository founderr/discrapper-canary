t.d(n, {
    Z: function () {
        return d;
    }
}),
    t(47120);
var l = t(200651),
    i = t(192379),
    s = t(120356),
    r = t.n(s),
    a = t(481060),
    o = t(958707),
    u = t(456963),
    c = t(864073);
function d(e) {
    let { title: n, scrollerClassName: t, scrollerInnerClassName: s, children: d } = e,
        m = i.useRef(null),
        [g, h] = i.useState(!1),
        [x, S] = i.useState(!1),
        v = i.useCallback(() => {
            let { current: e } = m;
            null != e && (h(!e.isScrolledToTop()), S(!e.isScrolledToBottom()));
        }, []);
    return (
        i.useLayoutEffect(() => v(), []),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsxs)('div', {
                    className: r()(c.title, c.scrollWrapper),
                    children: [
                        (0, l.jsx)(a.FormTitle, {
                            className: u.formItemTitle,
                            children: n
                        }),
                        (0, l.jsx)(o.Z, { separator: g })
                    ]
                }),
                (0, l.jsx)('div', {
                    className: t,
                    children: (0, l.jsx)(a.AdvancedScroller, {
                        ref: m,
                        className: r()(c.scrollerInner, s, { [c.bottomSeparator]: x }),
                        onScroll: v,
                        children: d
                    })
                })
            ]
        })
    );
}
