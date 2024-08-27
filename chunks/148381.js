t.d(n, {
    Z: function () {
        return d;
    }
}),
    t(47120);
var l = t(735250),
    s = t(470079),
    a = t(120356),
    r = t.n(a),
    i = t(481060),
    o = t(958707),
    u = t(458623),
    c = t(523022);
function d(e) {
    let { title: n, scrollerClassName: t, scrollerInnerClassName: a, children: d } = e,
        m = s.useRef(null),
        [E, S] = s.useState(!1),
        [_, g] = s.useState(!1),
        h = s.useCallback(() => {
            let { current: e } = m;
            null != e && (S(!e.isScrolledToTop()), g(!e.isScrolledToBottom()));
        }, []);
    return (
        s.useLayoutEffect(() => h(), []),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsxs)('div', {
                    className: r()(c.title, c.scrollWrapper),
                    children: [
                        (0, l.jsx)(i.FormTitle, {
                            className: u.formItemTitle,
                            children: n
                        }),
                        (0, l.jsx)(o.Z, { separator: E })
                    ]
                }),
                (0, l.jsx)('div', {
                    className: t,
                    children: (0, l.jsx)(i.AdvancedScroller, {
                        ref: m,
                        className: r()(c.scrollerInner, a, { [c.bottomSeparator]: _ }),
                        onScroll: h,
                        children: d
                    })
                })
            ]
        })
    );
}
