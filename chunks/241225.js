r.d(t, {
    l: function () {
        return o;
    },
    o: function () {
        return _;
    }
});
var a = r(988097),
    n = r(696486);
function _(e, t, r) {
    let _ = (0, n.HN)(),
        o = _ && (0, n.Gx)(_);
    o &&
        o.addEvent(e, {
            [a.Wb]: t,
            [a.E1]: r
        });
}
function o(e) {
    if (!e || 0 === e.length) return;
    let t = {};
    return (
        e.forEach((e) => {
            let r = e.attributes || {},
                n = r[a.E1],
                _ = r[a.Wb];
            'string' == typeof n &&
                'number' == typeof _ &&
                (t[e.name] = {
                    value: _,
                    unit: n
                });
        }),
        t
    );
}
