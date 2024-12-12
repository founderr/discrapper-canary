r.d(n, {
    _: function () {
        return f;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(120356),
    o = r.n(s),
    l = r(539907),
    u = r(743236),
    c = r(21340),
    d = r(450793);
function f(e) {
    let { subMenuClassName: n, parentItem: r, isFocused: s, menuSubmenuProps: f, renderSubmenu: _ } = e,
        { focusIndex: h, isUsingKeyboardNavigation: p, ...m } = f,
        g = a.useRef(null),
        E = a.useRef(null),
        v = a.useRef(null);
    return (
        a.useLayoutEffect(() => {
            var e;
            s && ((0, u.F)(g), null === (e = v.current) || void 0 === e || e.focus());
        }, [s]),
        (0, i.jsxs)('div', {
            ref: g,
            className: d.__invalid_submenuContainer,
            children: [
                (0, i.jsx)('div', { ref: E }),
                r,
                s
                    ? (0, i.jsx)(l.j, {
                          targetRef: E,
                          autoInvert: !0,
                          nudgeAlignIntoViewport: !0,
                          fixed: !0,
                          spacing: 4,
                          position: 'right',
                          align: 'top',
                          children: () =>
                              (0, i.jsx)('div', {
                                  className: d.submenuPaddingContainer,
                                  children: (0, i.jsx)('div', {
                                      className: o()(d.submenu, n),
                                      ...m,
                                      ref: v,
                                      children: (0, i.jsx)(c.zJ, {
                                          className: d.scroller,
                                          children: _()
                                      })
                                  })
                              })
                      })
                    : null
            ]
        })
    );
}
