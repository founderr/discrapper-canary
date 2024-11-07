n.d(t, {
    I: function () {
        return c;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(743236),
    l = n(939350),
    u = n(7758);
function c(e) {
    let { color: t = 'default', label: n, control: a, disabled: c, isFocused: d, showDefaultFocus: f = !1, menuItemProps: _, onClose: h } = e,
        p = i.useRef(null),
        m = i.useRef(null);
    i.useLayoutEffect(() => {
        var e, t, n;
        d ? ((0, o.F)(p), null === (e = m.current) || void 0 === e || e.focus()) : null === (n = m.current) || void 0 === n || null === (t = n.blur) || void 0 === t || t.call(n);
    }, [d]);
    let g = i.useCallback(() => {
            var e, t;
            (null === (t = m.current) || void 0 === t ? void 0 : null === (e = t.activate) || void 0 === e ? void 0 : e.call(t)) && h();
        }, [h]),
        E = a(
            {
                onClose: h,
                disabled: c,
                isFocused: d
            },
            m
        );
    return (0, r.jsxs)('div', {
        onClick: g,
        className: s()(u.item, l._[t], {
            [u.disabled]: c,
            [u.focused]: f && d,
            [u.hideInteraction]: !f
        }),
        'aria-disabled': c,
        ..._,
        children: [
            null != n
                ? (0, r.jsx)('div', {
                      className: u.labelContainer,
                      children: (0, r.jsx)('div', {
                          className: u.label,
                          children: n
                      })
                  })
                : null,
            E
        ]
    });
}
