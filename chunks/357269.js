n.r(t),
    n.d(t, {
        default: function () {
            return u;
        }
    });
var r = n(47120);
var i = n(757143);
var a = n(593473),
    o = n(981631);
let s = '_',
    l = /-/g;
function u(e) {
    let [, , t, n] = e.split('/'),
        r = null == t ? void 0 : t.toUpperCase().replace(l, s),
        i = null == n ? void 0 : n.toUpperCase().replace(l, s);
    if (o.oAB.hasOwnProperty(r) && (null == i || '' === i || o.oAB.hasOwnProperty(i))) {
        let { source: e } = (0, a.parse)(location.search);
        return {
            source: e,
            section: o.oAB[r],
            subsection: i
        };
    }
    return null;
}
