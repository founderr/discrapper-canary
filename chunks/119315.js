n.d(t, {
    T: function () {
        return l;
    },
    r: function () {
        return c;
    }
});
var i,
    l,
    r = n(200651);
n(192379);
var s = n(120356),
    a = n.n(s),
    o = n(702293);
((i = l || (l = {}))[(i.POPOUT = 0)] = 'POPOUT'), (i[(i.SECONDARY = 1)] = 'SECONDARY'), (i[(i.BLACK = 2)] = 'BLACK');
let c = (e) => {
    let { left: t, top: n = 0, right: i = 0, bottom: l, size: s = 8, alert: c = !1, maskColor: u = 1 } = e;
    return (0, r.jsx)('span', {
        className: a()(o.dot, {
            [o.alert]: c,
            [o.maskPopout]: 0 === u,
            [o.maskSecondary]: 1 === u,
            [o.maskBlack]: 2 === u
        }),
        style: {
            height: s,
            width: s,
            left: t,
            top: n,
            right: i,
            bottom: l
        }
    });
};
