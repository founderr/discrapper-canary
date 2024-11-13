t.d(n, {
    Z: function () {
        return a;
    }
});
var i = t(200651);
t(192379);
var l = t(325767);
function a(e) {
    let { width: n = 17, height: t = 16, color: a = 'currentColor', foreground: r, ...s } = e;
    return (0, i.jsxs)('svg', {
        ...(0, l.Z)(s),
        width: n,
        height: t,
        viewBox: '0 0 17 16',
        xmlns: 'http://www.w3.org/2000/svg',
        children: [
            (0, i.jsx)('rect', {
                className: r,
                y: '5',
                width: '16',
                height: '2',
                rx: '1',
                fill: a
            }),
            (0, i.jsx)('rect', {
                className: r,
                y: '9',
                width: '8',
                height: '2',
                rx: '1',
                fill: a
            })
        ]
    });
}
