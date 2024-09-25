n.d(t, {
    Z: function () {
        return o;
    }
});
var r = n(47120);
let i = [
        ['position', 'absolute'],
        ['top', '-100px'],
        ['left', '-100px'],
        ['width', '100px'],
        ['height', '100px'],
        ['overflow', 'scroll']
    ],
    a = [
        ['width', '200px'],
        ['height', '200px']
    ];
function o() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
        t = document.createElement('div'),
        n = document.createElement('div');
    for (let [e, n] of i) t.style[e] = n;
    for (let [e, t] of a) n.style[e] = t;
    t.appendChild(n), document.body.appendChild(t), (t.className = e);
    let r = {
        width: t.offsetWidth - t.clientWidth,
        height: t.offsetHeight - t.clientHeight
    };
    return document.body.removeChild(t), r;
}
