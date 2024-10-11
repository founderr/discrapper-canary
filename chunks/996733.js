n.d(t, {
    QH: function () {
        return o;
    },
    Z7: function () {
        return a;
    },
    yN: function () {
        return l;
    }
});
var s = n(652874),
    i = n(731965);
let r = (0, s.Z)(() => ({
    query: '',
    isActive: !1,
    selected: null
}));
function l(e) {
    (0, i.j)(() => r.setState({ query: e }));
}
function o(e) {
    (0, i.j)(() => r.setState({ isActive: e }));
}
function a() {
    return r().query;
}
