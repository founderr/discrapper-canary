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
var i = n(903797),
    s = n(731965);
let r = (0, i.Z)(() => ({
    query: '',
    isActive: !1,
    selected: null
}));
function l(e) {
    (0, s.j)(() => r.setState({ query: e }));
}
function o(e) {
    (0, s.j)(() => r.setState({ isActive: e }));
}
function a() {
    return r().query;
}
