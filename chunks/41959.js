n.d(t, {
    H: function () {
        return r;
    }
});
var r,
    i = n(735250);
n(470079);
var a = n(120356),
    o = n.n(a),
    s = n(768581),
    l = n(73346),
    u = n(622085);
!(function (e) {
    (e[(e.SMALL = 40)] = 'SMALL'), (e[(e.MEDIUM = 66)] = 'MEDIUM');
})(r || (r = {}));
let c = {
        40: u.small,
        66: u.medium
    },
    d = (e) => {
        let t,
            { application: n, size: r, asset: a, className: d } = e;
        return (
            (t =
                null != a
                    ? (0, l._W)(n.id, a, r)
                    : s.ZP.getApplicationIconURL({
                          id: n.id,
                          icon: n.icon,
                          size: r
                      })),
            (0, i.jsx)('img', {
                alt: '',
                src: t,
                className: o()(u.icon, c[r], d)
            })
        );
    };
t.Z = d;
