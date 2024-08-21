n.d(t, {
    f: function () {
        return d;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(410030),
    u = n(689938),
    c = n(487596);
function d(e) {
    let { src: t, size: n, constrain: a = 'height', className: d, alt: _, fallbackSrc: E, 'aria-hidden': f, showTooltip: h = !1 } = e,
        p = (0, l.ZP)(),
        I = ''.concat(n, 'px'),
        [m, T] = i.useState(!1),
        [g, S] = i.useState(!1),
        A = null == E || g;
    if (null == t || (m && A))
        return (0, r.jsx)(o.UnknownGameIcon, {
            size: 'custom',
            width: '100%',
            height: '100%',
            color: 'dark' === p ? 'white' : 'black',
            style: { maxWidth: I },
            className: s()(c.contentImage, d)
        });
    let N =
        'height' === a
            ? {
                  maxWidth: I,
                  height: I
              }
            : {
                  maxWidth: I,
                  minHeight: I
              };
    return (0, r.jsx)(
        o.Tooltip,
        {
            'aria-label': _,
            text: _,
            shouldShow: h,
            children: (e) =>
                (0, r.jsx)('img', {
                    ...e,
                    style: N,
                    className: s()(c.contentImage, d),
                    src: m && null != E ? E : t,
                    'aria-hidden': f,
                    alt: null != _ ? _ : f ? void 0 : u.Z.Messages.APPLICATION_ICON_NO_NAME_A11Y_LABEL,
                    onError: (e) => (m ? S(!0) : T(!0))
                })
        },
        'voice-preview'
    );
}
