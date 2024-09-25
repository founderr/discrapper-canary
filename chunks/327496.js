n.d(t, {
    L: function () {
        return h;
    }
});
var r = n(653041);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(266067),
    u = n(481060),
    c = n(624138),
    d = n(197705);
let _ = [18, 18, 16, 16, 14, 12, 10];
function E(e) {
    var t;
    return null !== (t = _[e.length - 1]) && void 0 !== t ? t : _[_.length - 1];
}
function f(e, t) {
    return s()({
        [d.childWrapper]: !0,
        [d.childWrapperNoHoverBg]: 'always' === e,
        [d.childWrapperHoverScale]: 'on-hover' === e && t
    });
}
let h = (e) => {
    let t,
        n,
        { backgroundStyle: r = 'always', children: o, icon: _, name: h, ariaLabel: p, className: m, style: I, to: T, onClick: g, selected: S = !1, ...A } = e,
        v = (0, l.k6)();
    null == _ && null != h && (n = E((t = (0, c.Zg)(h))));
    let N = a.useCallback(
        (e) => {
            if (null == T);
            else if ('string' == typeof T) v.push(T);
            else {
                let { pathname: e = '', state: t } = T;
                v.push(e, t);
            }
            null != g && g(e);
        },
        [v, T, g]
    );
    return (0, i.jsxs)(u.Clickable, {
        ...A,
        onClick: N,
        className: s()(m, d.wrapper, { [d.selected]: S }),
        'aria-label': null != p && '' !== p ? p : null != h ? h : '',
        style: {
            ...I,
            fontSize: n
        },
        focusProps: { enabled: !1 },
        children: [
            null != t
                ? (0, i.jsx)('div', {
                      className: s()(f(r, !1), d.acronym),
                      'aria-hidden': !0,
                      children: t
                  })
                : null,
            null != _
                ? (0, i.jsx)('img', {
                      className: d.icon,
                      src: _,
                      alt: ' ',
                      width: 48,
                      height: 48,
                      'aria-hidden': !0
                  })
                : null,
            null != o
                ? (0, i.jsx)('div', {
                      className: f(r, !0),
                      children: o
                  })
                : null
        ]
    });
};
