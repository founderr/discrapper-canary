n.d(t, {
    K: function () {
        return s;
    }
});
var r = n(735250);
n(470079);
var i = n(803997),
    a = n.n(i),
    o = n(534493);
function s(e) {
    let { gap: t = 8, direction: n = 'vertical', align: i = 'stretch', justify: s = 'start', padding: u = 0, style: c, className: d, children: _, ...E } = e;
    return (0, r.jsx)('div', {
        'data-align': i,
        'data-justify': s,
        'data-direction': n,
        className: a()(o.stack, d),
        style: {
            ...c,
            ...l(u),
            gap: t
        },
        ...E,
        children: _
    });
}
function l(e) {
    return 'number' == typeof e
        ? { padding: e }
        : {
              paddingLeft: e.left,
              paddingRight: e.right,
              paddingTop: e.top,
              paddingBottom: e.bottom
          };
}
