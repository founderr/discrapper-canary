r.d(n, {
    Q1: function () {
        return u;
    },
    hV: function () {
        return c;
    },
    ky: function () {
        return l;
    }
});
var i = r(895924),
    a = r(809090),
    s = r(944877),
    o = r(689079);
let l = (e) => (e.type === i.Qi.BUILT_IN ? s.Z : a.Z);
function u(e) {
    return ''.concat(e / 16, 'rem');
}
function c(e, n) {
    let r = n,
        i = !1,
        a = n.indexOf(':');
    if (a >= 0) {
        let e = n.lastIndexOf(' ', a);
        e >= 0 ? ((n = n.substring(0, e)), (i = !0)) : (n = n.substring(0, a));
    } else n = n.substring(0, n.length);
    let s = n.split(' ', o.Vd + 1);
    return (
        s.length > o.Vd && ((i = !0), s.pop()),
        (n = s.join(' ')),
        (r.length > n.length || n.endsWith(' ')) && ((i = !0), (n = n.trimEnd())),
        {
            text: n,
            parts: s,
            hasSpaceTerminator: i
        }
    );
}
