r.d(t, {
    l: function () {
        return o;
    },
    o: function () {
        return _;
    }
});
var n = r(988097),
    a = r(696486);
function _(e, t, r) {
    let _ = (0, a.HN)(),
        o = _ && (0, a.Gx)(_);
    o &&
        o.addEvent(e, {
            [n.Wb]: t,
            [n.E1]: r
        });
}
function o(e) {
    if (!e || 0 === e.length) return;
    let t = {};
    return (
        e.forEach((e) => {
            let r = e.attributes || {},
                a = r[n.E1],
                _ = r[n.Wb];
            'string' == typeof a &&
                'number' == typeof _ &&
                (t[e.name] = {
                    value: _,
                    unit: a
                });
        }),
        t
    );
}
