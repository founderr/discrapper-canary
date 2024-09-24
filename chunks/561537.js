t.d(s, {
    l: function () {
        return o;
    }
});
var n = t(735250);
t(470079);
var a = t(557533),
    i = t.n(a),
    r = t(329363);
function o(e) {
    let { className: s, header: t, children: a } = e;
    return (0, n.jsxs)('div', {
        className: i()(r.wrapper, s),
        children: [
            (0, n.jsx)('div', {
                className: r.header,
                children: t
            }),
            null != a &&
                (0, n.jsx)('div', {
                    className: r.content,
                    children: a
                })
        ]
    });
}
