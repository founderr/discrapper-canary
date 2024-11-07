t.d(n, {
    H: function () {
        return r;
    }
});
var i,
    r,
    l = t(200651);
t(192379);
var a = t(120356),
    s = t.n(a),
    o = t(768581),
    c = t(73346),
    u = t(655949);
((i = r || (r = {}))[(i.SMALL = 40)] = 'SMALL'), (i[(i.MEDIUM = 66)] = 'MEDIUM');
let d = {
    40: u.small,
    66: u.medium
};
n.Z = (e) => {
    let n,
        { application: t, size: i, asset: r, className: a } = e;
    return (
        (n =
            null != r
                ? (0, c._W)(t.id, r, i)
                : o.ZP.getApplicationIconURL({
                      id: t.id,
                      icon: t.icon,
                      size: i
                  })),
        (0, l.jsx)('img', {
            alt: '',
            src: n,
            className: s()(u.icon, d[i], a)
        })
    );
};
