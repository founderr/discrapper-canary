n.d(t, {
    Vb: function () {
        return l;
    },
    Yk: function () {
        return s;
    },
    oU: function () {
        return a;
    },
    zP: function () {
        return o;
    }
});
var r = n(196136),
    i = n(731965);
let a = (0, r.U)((e) => ({ inDndMode: !1 }));
function s(e) {
    (0, i.j)(() => a.setState({ inDndMode: e }));
}
function o() {
    return a((e) => e.inDndMode);
}
function l() {
    return a.getState().inDndMode;
}
