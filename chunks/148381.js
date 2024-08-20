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
    c = t(458623),
    u = t(523022);
function d(e) {
    let { title: n, scrollerClassName: t, scrollerInnerClassName: a, children: d } = e,
        m = s.useRef(null),
        [E, _] = s.useState(!1),
        [S, h] = s.useState(!1),
        g = s.useCallback(() => {
            let { current: e } = m;
            null != e && (_(!e.isScrolledToTop()), h(!e.isScrolledToBottom()));
        }, []);
    return (
        s.useLayoutEffect(() => g(), []),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsxs)('div', {
                    className: r()(u.title, u.scrollWrapper),
                    children: [
                        (0, l.jsx)(i.FormTitle, {
                            className: c.formItemTitle,
                            children: n
                        }),
                        (0, l.jsx)(o.Z, { separator: E })
                    ]
                }),
                (0, l.jsx)('div', {
                    className: t,
                    children: (0, l.jsx)(i.AdvancedScroller, {
                        ref: m,
                        className: r()(u.scrollerInner, a, { [u.bottomSeparator]: S }),
                        onScroll: g,
                        children: d
                    })
                })
            ]
        })
    );
}
