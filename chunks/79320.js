r.d(n, {
    Vb: function () {
        return u;
    },
    Yk: function () {
        return o;
    },
    oU: function () {
        return s;
    },
    zP: function () {
        return l;
    }
});
var i = r(15729),
    a = r(731965);
let s = (0, i.U)((e) => ({ inDndMode: !1 }));
function o(e) {
    (0, a.j)(() => s.setState({ inDndMode: e }));
}
function l() {
    return s((e) => e.inDndMode);
}
function u() {
    return s.getState().inDndMode;
}
