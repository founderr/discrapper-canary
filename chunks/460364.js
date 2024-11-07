n.d(t, {
    C: function () {
        return u;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(539907),
    s = n(743236),
    o = n(218867),
    l = n(7758);
function u(e) {
    let { parentItem: t, isFocused: n, menuSubmenuProps: u, rows: c, rowHeight: d, onScroll: f, listClassName: _ } = e,
        h = i.useRef(null),
        p = i.useRef(null),
        m = i.useRef(null),
        g = i.useRef(null),
        { isUsingKeyboardNavigation: E, focusIndex: v, ...I } = u;
    i.useLayoutEffect(() => {
        var e;
        n && ((0, s.F)(h), null === (e = m.current) || void 0 === e || e.focus());
    }, [n]),
        i.useEffect(() => {
            if (n && v >= 0 && E) {
                var e;
                null === (e = g.current) || void 0 === e || e.scrollRowIntoView(v);
            }
        }, [n, E, v]);
    let S = i.useCallback((e) => c[e], [c]);
    return (0, r.jsxs)('div', {
        ref: h,
        className: l.__invalid_submenuContainer,
        children: [
            (0, r.jsx)('div', { ref: p }),
            t,
            n
                ? (0, r.jsx)(a.j, {
                      targetRef: p,
                      autoInvert: !0,
                      nudgeAlignIntoViewport: !0,
                      fixed: !0,
                      spacing: 4,
                      position: 'right',
                      align: 'top',
                      children: () =>
                          c.length > 0 &&
                          (0, r.jsx)('div', {
                              className: l.submenuPaddingContainer,
                              children: (0, r.jsx)('div', {
                                  className: l.submenu,
                                  ...I,
                                  ref: m,
                                  children: (0, r.jsx)(o.Z, {
                                      ref: g,
                                      className: _,
                                      listPadding: [6, 0, 6, 8],
                                      onScroll: f,
                                      renderRow: S,
                                      rowCount: c.length,
                                      rowHeight: d
                                  })
                              })
                          })
                  })
                : null
        ]
    });
}
