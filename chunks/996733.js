n.d(t, {
    QH: function () {
        return o;
    },
    Z7: function () {
        return a;
    },
    yN: function () {
        return r;
    }
});
var i = n(905837),
    l = n(731965);
let s = (0, i.Ue)(() => ({
    query: '',
    isActive: !1,
    selected: null
}));
function r(e) {
    (0, l.j)(() => s.setState({ query: e }));
}
function o(e) {
    (0, l.j)(() => s.setState({ isActive: e }));
}
function a() {
    return s().query;
}
