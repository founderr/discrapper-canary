n.d(t, {
    x: function () {
        return s;
    }
});
var r = n(735250);
n(470079);
var i = n(692547), a = n(331595), o = n(267843);
let s = e => {
    var t, n;
    let {
            size: s = 'md',
            width: l,
            height: u,
            color: c = i.Z.colors.INTERACTIVE_NORMAL,
            colorClass: d = '',
            ..._
        } = e, E = (0, o.m)(s), f = null !== (t = null == E ? void 0 : E.width) && void 0 !== t ? t : l, h = null !== (n = null == E ? void 0 : E.height) && void 0 !== n ? n : u;
    return (0, r.jsxs)('svg', {
        ...(0, a.Z)(_),
        xmlns: 'http://www.w3.org/2000/svg',
        width: f,
        height: h,
        fill: 'none',
        viewBox: '0 0 24 24',
        children: [
            (0, r.jsx)('path', {
                fill: 'string' == typeof c ? c : c.css,
                d: 'M16.31 14.72a1 1 0 0 1 0-1.42l2.52-2.51a3.97 3.97 0 1 0-5.62-5.62l-2.5 2.52a1 1 0 0 1-1.43-1.43l2.51-2.5a5.98 5.98 0 0 1 8.46 8.45l-2.51 2.51a1 1 0 0 1-1.43 0ZM7.69 9.28a1 1 0 0 1 0 1.42l-2.52 2.51a3.97 3.97 0 0 0 5.62 5.62l2.5-2.52a1 1 0 0 1 1.43 1.43l-2.51 2.5a5.98 5.98 0 0 1-8.46-8.45l2.51-2.51a1 1 0 0 1 1.43 0Z',
                className: d
            }),
            (0, r.jsx)('path', {
                fill: 'string' == typeof c ? c : c.css,
                d: 'M14.72 10.7a1 1 0 1 0-1.42-1.42L9.28 13.3a1 1 0 0 0 1.42 1.42l4.02-4.02Z',
                className: d
            })
        ]
    });
};
