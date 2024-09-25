n.d(t, {
    f: function () {
        return E;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(780384),
    u = n(481060),
    c = n(410030),
    d = n(689938),
    _ = n(449761);
function E(e) {
    let { src: t, size: n, constrain: r = 'height', className: o, alt: E, fallbackSrc: f, 'aria-hidden': h, showTooltip: p = !1 } = e,
        m = (0, c.ZP)(),
        I = ''.concat(n, 'px'),
        [T, g] = a.useState(!1),
        [S, A] = a.useState(!1),
        v = null == f || S;
    if (null == t || (T && v))
        return (0, i.jsx)(u.UnknownGameIcon, {
            size: 'custom',
            width: '100%',
            height: '100%',
            color: (0, l.wj)(m) ? u.tokens.colors.WHITE : u.tokens.colors.BLACK,
            style: { maxWidth: I },
            className: s()(_.contentImage, o)
        });
    let N =
        'height' === r
            ? {
                  maxWidth: I,
                  height: I
              }
            : {
                  maxWidth: I,
                  minHeight: I
              };
    return (0, i.jsx)(
        u.Tooltip,
        {
            'aria-label': E,
            text: E,
            shouldShow: p,
            children: (e) =>
                (0, i.jsx)('img', {
                    ...e,
                    style: N,
                    className: s()(_.contentImage, o),
                    src: T && null != f ? f : t,
                    'aria-hidden': h,
                    alt: null != E ? E : h ? void 0 : d.Z.Messages.APPLICATION_ICON_NO_NAME_A11Y_LABEL,
                    onError: (e) => (T ? A(!0) : g(!0))
                })
        },
        'content-image'
    );
}
