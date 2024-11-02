n.d(t, {
    u: function () {
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
        h = null !== (t = null == _ ? void 0 : _.width) && void 0 !== t ? t : l,
        p = null !== (n = null == _ ? void 0 : _.height) && void 0 !== n ? n : u;
    return (0, r.jsx)('svg', {
        ...(0, a.Z)(f),
        xmlns: 'http://www.w3.org/2000/svg',
        width: h,
        height: p,
        fill: 'none',
        viewBox: '0 0 24 24',
        children: (0, r.jsx)('path', {
            fill: 'string' == typeof c ? c : c.css,
            d: 'M4 2a1 1 0 0 0-2 0v19a1 1 0 1 0 2 0v-6.82l8.2-1.37c.37-.06.65.28.47.6a5.01 5.01 0 0 1-1.94 1.94c-.26.14-.38.47-.18.68a2 2 0 0 0 1.78.6l9-1.5A2 2 0 0 0 23 13.15v-7.3a2 2 0 0 0-2.33-1.98L15 4.82V3.35a2 2 0 0 0-2.33-1.98L4 2.82V2ZM15 18a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-8Z',
            className: d
        })
    });
};
