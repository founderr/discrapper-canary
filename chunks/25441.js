n.d(t, {
    N: function () {
        return a;
    },
    h: function () {
        return o;
    }
});
var r = n(47120);
let i = new Map();
function a(e, t) {
    let n = i.get(e);
    return null == n && ((n = new Set()), i.set(e, n)), n.add(t), () => (null == n ? void 0 : n.delete(t));
}
function o(e, t, n) {
    let r = i.get(e);
    if (null != r) for (let e of r) e(t, n);
}
