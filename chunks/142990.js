n.d(t, {
    Z: function () {
        return c;
    }
});
var r = n(789020);
var i = n(735250),
    a = n(470079),
    o = n(865427),
    s = n(853425),
    l = n(830121);
let u = RegExp('^' + l.oO.source, l.oO.flags);
function c(e) {
    return {
        match: (e, t) => (t.allowLinks && t.allowDevLinks ? u.exec(e) : null),
        parse: (e, t) => ({
            target: e,
            type: 'devLink'
        }),
        react: (e, t, n) => {
            let r = e.target[0];
            return (0, o.mG)(r)
                ? (0, i.jsxs)(i.Fragment, {
                      children: [(0, i.jsx)('span', { children: r }), (0, i.jsx)(a.Fragment, { children: (0, i.jsx)(s.Z, { url: r }, r) }, n.key)]
                  })
                : (0, i.jsx)('span', { children: r });
        },
        order: 6
    };
}
