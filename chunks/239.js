n.d(t, {
    Z: function () {
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
    return (0, r.jsx)('svg', {
        ...(0, a.Z)(f),
        xmlns: 'http://www.w3.org/2000/svg',
        width: p,
        height: h,
        fill: 'none',
        viewBox: '0 0 24 24',
        children: (0, r.jsx)('path', {
            fill: 'string' == typeof c ? c : c.css,
            fillRule: 'evenodd',
            d: 'M22 12a10 10 0 0 1-10 10H2.2a1 1 0 0 1-.75-1.66l2.06-2.37a.52.52 0 0 0 .04-.61A10 10 0 1 1 22 12Zm-10 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm7-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM7 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z',
            clipRule: 'evenodd',
            className: d
        })
    });
};
