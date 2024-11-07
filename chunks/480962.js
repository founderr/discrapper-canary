n.d(t, {
    _: function () {
        return d;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(539907),
    l = n(743236),
    u = n(21340),
    c = n(7758);
function d(e) {
    let { subMenuClassName: t, parentItem: n, isFocused: a, menuSubmenuProps: d, renderSubmenu: f } = e,
        { focusIndex: _, isUsingKeyboardNavigation: h, ...p } = d,
        m = i.useRef(null),
        g = i.useRef(null),
        E = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            var e;
            a && ((0, l.F)(m), null === (e = E.current) || void 0 === e || e.focus());
        }, [a]),
        (0, r.jsxs)('div', {
            ref: m,
            className: c.__invalid_submenuContainer,
            children: [
                (0, r.jsx)('div', { ref: g }),
                n,
                a
                    ? (0, r.jsx)(o.j, {
                          targetRef: g,
                          autoInvert: !0,
                          nudgeAlignIntoViewport: !0,
                          fixed: !0,
                          spacing: 4,
                          position: 'right',
                          align: 'top',
                          children: () =>
                              (0, r.jsx)('div', {
                                  className: c.submenuPaddingContainer,
                                  children: (0, r.jsx)('div', {
                                      className: s()(c.submenu, t),
                                      ...p,
                                      ref: E,
                                      children: (0, r.jsx)(u.zJ, {
                                          className: c.scroller,
                                          children: f()
                                      })
                                  })
                              })
                      })
                    : null
            ]
        })
    );
}
