n.d(t, {
    Vb: function () {
        return l;
    },
    Yk: function () {
        return o;
    },
    oU: function () {
        return a;
    },
    zP: function () {
        return s;
    }
});
var r = n(652874),
    i = n(731965);
let a = (0, r.Z)((e) => ({ inDndMode: !1 }));
function o(e) {
    (0, i.j)(() => a.setState({ inDndMode: e }));
}
function s() {
    return a((e) => e.inDndMode);
}
function l() {
    return a.getState().inDndMode;
}
