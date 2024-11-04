n.d(t, {
    Z: function () {
        return h;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    s = n.n(r),
    a = n(481060),
    o = n(923726),
    c = n(388032),
    u = n(315353);
function d(e) {
    let { text: t, hasScrolled: n } = e;
    return (0, i.jsxs)('div', {
        className: s()(u.container, { [u.containerHide]: n }),
        children: [
            (0, i.jsx)('div', {
                className: u.notice,
                children: (0, i.jsx)(a.Text, {
                    className: u.__invalid_label,
                    variant: 'text-md/medium',
                    color: 'header-primary',
                    children: t
                })
            }),
            (0, i.jsx)('div', { className: u.noticeArrow })
        ]
    });
}
function h(e) {
    let [t, n] = l.useState(),
        [r, s] = l.useState(),
        [a, u] = l.useState(!1),
        [h, m] = l.useState(!1),
        { enabled: p } = (0, o.s1)(e);
    return (
        l.useEffect(() => {
            p && null != t && null != r ? u(t < r) : u(!1);
        }, [p, t, r]),
        {
            horizontalScrollNotice: l.useMemo(
                () =>
                    a
                        ? (0, i.jsx)(d, {
                              text: c.intl.string(c.t.RfAAHx),
                              hasScrolled: h
                          })
                        : null,
                [a, h]
            ),
            handleScroll: () => m(!0),
            handleSetScrollerRef: (e) => {
                var t;
                return s(null == e ? void 0 : null === (t = e.getScrollerState()) || void 0 === t ? void 0 : t.scrollWidth);
            },
            handleSetContainerRef: (e) => n(null == e ? void 0 : e.clientWidth)
        }
    );
}
