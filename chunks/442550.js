n.d(t, {
    f: function () {
        return f;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(780384),
    l = n(481060),
    u = n(410030),
    c = n(388032),
    d = n(449761);
function f(e) {
    let { src: t, size: n, constrain: a = 'height', className: f, alt: _, fallbackSrc: p, 'aria-hidden': h, showTooltip: m = !1 } = e,
        g = (0, u.ZP)(),
        E = ''.concat(n, 'px'),
        [v, I] = i.useState(!1),
        [b, S] = i.useState(!1),
        T = null == p || b;
    if (null == t || (v && T))
        return (0, r.jsx)(l.UnknownGameIcon, {
            size: 'custom',
            width: '100%',
            height: '100%',
            color: (0, o.wj)(g) ? l.tokens.colors.WHITE : l.tokens.colors.BLACK,
            style: { maxWidth: E },
            className: s()(d.contentImage, f)
        });
    let y =
        'height' === a
            ? {
                  maxWidth: E,
                  height: E
              }
            : {
                  maxWidth: E,
                  minHeight: E
              };
    return (0, r.jsx)(
        l.Tooltip,
        {
            'aria-label': _,
            text: _,
            shouldShow: m,
            children: (e) =>
                (0, r.jsx)('img', {
                    ...e,
                    style: y,
                    className: s()(d.contentImage, f),
                    src: v && null != p ? p : t,
                    'aria-hidden': h,
                    alt: null != _ ? _ : h ? void 0 : c.intl.string(c.t['2B/phI']),
                    onError: (e) => (v ? S(!0) : I(!0))
                })
        },
        'content-image'
    );
}
