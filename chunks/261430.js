n.d(t, {
    N: function () {
        return o;
    }
});
var r = n(200651);
n(192379);
var i = n(692547),
    a = n(331595),
    s = n(267843);
let o = (e) => {
    var t, n;
    let { size: o = 'md', width: l, height: u, color: c = i.Z.colors.INTERACTIVE_NORMAL, colorClass: d = '', ...f } = e,
        _ = (0, s.m)(o),
        p = null !== (t = null == _ ? void 0 : _.width) && void 0 !== t ? t : l,
        h = null !== (n = null == _ ? void 0 : _.height) && void 0 !== n ? n : u;
    return (0, r.jsxs)('svg', {
        ...(0, a.Z)(f),
        xmlns: 'http://www.w3.org/2000/svg',
        width: p,
        height: h,
        fill: 'none',
        viewBox: '0 0 24 24',
        children: [
            (0, r.jsx)('path', {
                fill: 'string' == typeof c ? c : c.css,
                d: 'M20.14.8a1.21 1.21 0 0 0-2.28 0l-.5 1.37a2 2 0 0 1-1.19 1.18l-1.38.51a1.21 1.21 0 0 0 0 2.28l1.38.5a2 2 0 0 1 1.18 1.19l.51 1.38a1.24 1.24 0 0 0 .32.48c.5.44 1.3.41 1.73-.1.1-.1.17-.23.23-.38l.5-1.38a2 2 0 0 1 1.19-1.18l1.38-.51a1.21 1.21 0 0 0 0-2.28l-1.38-.5a2 2 0 0 1-1.18-1.19L20.14.79Z',
                className: d
            }),
            (0, r.jsx)('path', {
                fill: 'string' == typeof c ? c : c.css,
                d: 'M12 2c.52 0 1.03.1 1.48.28a3.22 3.22 0 0 0 .62 5.73l1.38.51.5 1.38.02.04V10a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4Z',
                className: d
            }),
            (0, r.jsx)('path', {
                fill: 'string' == typeof c ? c : c.css,
                d: 'M12 16a6 6 0 0 0 5.74-4.25c.64.27 1.36.32 2.03.16A8 8 0 0 1 13 17.94V20h2a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h2v-2.06A8 8 0 0 1 4 10a1 1 0 0 1 2 0 6 6 0 0 0 6 6Z',
                className: d
            })
        ]
    });
};
