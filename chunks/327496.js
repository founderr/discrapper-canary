n.d(t, {
    L: function () {
        return p;
    }
}),
    n(653041);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(512969),
    l = n(481060),
    u = n(540059),
    c = n(624138),
    d = n(369455);
let f = [18, 18, 16, 16, 14, 12, 10];
function _(e, t) {
    return s()({
        [d.childWrapper]: !0,
        [d.childWrapperNoHoverBg]: 'always' === e,
        [d.childWrapperHoverScale]: 'on-hover' === e && t
    });
}
let p = (e) => {
    let t,
        n,
        { backgroundStyle: a = 'always', children: p, icon: h, name: m, ariaLabel: g, className: E, style: v, to: I, onClick: T, selected: b = !1, ...S } = e,
        y = (0, o.k6)(),
        A = (0, u.Q)('NavItem');
    if (null == h && null != m) {
        var N;
        n = null !== (N = f[(t = (0, c.Zg)(m)).length - 1]) && void 0 !== N ? N : f[f.length - 1];
    }
    let C = i.useCallback(
            (e) => {
                if (null == I);
                else if ('string' == typeof I) y.push(I);
                else {
                    let { pathname: e = '', state: t } = I;
                    y.push(e, t);
                }
                null != T && T(e);
            },
            [y, I, T]
        ),
        R = A ? 44 : 48;
    return (0, r.jsxs)(l.Clickable, {
        ...S,
        onClick: C,
        className: s()(E, d.wrapper, { [d.selected]: b }),
        'aria-label': null != g && '' !== g ? g : null != m ? m : '',
        style: {
            ...v,
            fontSize: n
        },
        focusProps: { enabled: !1 },
        children: [
            null != t
                ? (0, r.jsx)('div', {
                      className: s()(_(a, !1), d.acronym),
                      'aria-hidden': !0,
                      children: t
                  })
                : null,
            null != h
                ? (0, r.jsx)('img', {
                      className: d.icon,
                      src: h,
                      alt: ' ',
                      width: R,
                      height: R,
                      'aria-hidden': !0
                  })
                : null,
            null != p
                ? (0, r.jsx)('div', {
                      className: _(a, !0),
                      children: p
                  })
                : null
        ]
    });
};
