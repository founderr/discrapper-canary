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
    a = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    o = n(702293);
((i = l || (l = {}))[(i.POPOUT = 0)] = 'POPOUT'), (i[(i.SECONDARY = 1)] = 'SECONDARY'), (i[(i.BLACK = 2)] = 'BLACK');
let c = (e) => {
    let { left: t, top: n = 0, right: i = 0, bottom: l, size: r = 8, alert: c = !1, maskColor: d = 1 } = e;
    return (0, a.jsx)('span', {
        className: s()(o.dot, {
            [o.alert]: c,
            [o.maskPopout]: 0 === d,
            [o.maskSecondary]: 1 === d,
            [o.maskBlack]: 2 === d
        }),
        style: {
            height: r,
            width: r,
            left: t,
            top: n,
            right: i,
            bottom: l
        }
    });
};
