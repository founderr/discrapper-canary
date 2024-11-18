n.d(t, {
    I: function () {
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
                d: 'M10.2 17.8c.26.06.53.1.8.14V20H9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-2v-2.06A8 8 0 0 0 20 10a1 1 0 1 0-2 0 6 6 0 0 1-6 6l-1.8 1.8ZM15.65 4.35a4 4 0 0 0-5.13-2.07 3.22 3.22 0 0 1-.62 5.73l-1.38.51-.5 1.38-.02.04V10c0 .59.13 1.14.35 1.65l7.3-7.3ZM5.43 14.57l1.45-1.45a5.97 5.97 0 0 1-.62-1.37c-.64.27-1.36.32-2.03.16.24.97.65 1.87 1.2 2.66Z',
                className: d
            }),
            (0, r.jsx)('path', {
                fill: 'string' == typeof c ? c : c.css,
                d: 'M9.2 3.86a1.21 1.21 0 0 1 0 2.28l-1.37.5a2 2 0 0 0-1.18 1.19l-.51 1.38a1.21 1.21 0 0 1-2.28 0l-.5-1.38a2 2 0 0 0-1.19-1.18L.79 6.14a1.21 1.21 0 0 1 0-2.28l1.38-.5a2 2 0 0 0 1.18-1.19L3.86.79a1.21 1.21 0 0 1 2.28 0l.5 1.38a2 2 0 0 0 1.19 1.18l1.38.51Z',
                className: d
            }),
            (0, r.jsx)('path', {
                fill: 'string' == typeof c ? c : c.css,
                fillRule: 'evenodd',
                d: 'M22.7 1.3a1 1 0 0 1 0 1.4l-20 20a1 1 0 0 1-1.4-1.4l20-20a1 1 0 0 1 1.4 0Z',
                clipRule: 'evenodd',
                className: d
            })
        ]
    });
};
