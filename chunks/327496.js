n.d(t, {
    L: function () {
        return _;
    }
}),
    n(653041);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(512969),
    l = n(481060),
    u = n(624138),
    c = n(438863);
let d = [18, 18, 16, 16, 14, 12, 10];
function f(e, t) {
    return s()({
        [c.childWrapper]: !0,
        [c.childWrapperNoHoverBg]: 'always' === e,
        [c.childWrapperHoverScale]: 'on-hover' === e && t
    });
}
let _ = (e) => {
    let t,
        n,
        { backgroundStyle: a = 'always', children: _, icon: h, name: p, ariaLabel: m, className: g, style: E, to: v, onClick: I, selected: S = !1, ...T } = e,
        b = (0, o.k6)();
    if (null == h && null != p) {
        var y;
        n = null !== (y = d[(t = (0, u.Zg)(p)).length - 1]) && void 0 !== y ? y : d[d.length - 1];
    }
    let A = i.useCallback(
        (e) => {
            if (null == v);
            else if ('string' == typeof v) b.push(v);
            else {
                let { pathname: e = '', state: t } = v;
                b.push(e, t);
            }
            null != I && I(e);
        },
        [b, v, I]
    );
    return (0, r.jsxs)(l.Clickable, {
        ...T,
        onClick: A,
        className: s()(g, c.wrapper, { [c.selected]: S }),
        'aria-label': null != m && '' !== m ? m : null != p ? p : '',
        style: {
            ...E,
            fontSize: n
        },
        focusProps: { enabled: !1 },
        children: [
            null != t
                ? (0, r.jsx)('div', {
                      className: s()(f(a, !1), c.acronym),
                      'aria-hidden': !0,
                      children: t
                  })
                : null,
            null != h
                ? (0, r.jsx)('img', {
                      className: c.icon,
                      src: h,
                      alt: ' ',
                      width: 48,
                      height: 48,
                      'aria-hidden': !0
                  })
                : null,
            null != _
                ? (0, r.jsx)('div', {
                      className: f(a, !0),
                      children: _
                  })
                : null
        ]
    });
};
