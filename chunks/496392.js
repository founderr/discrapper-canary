n.d(t, {
    W: function () {
        return a;
    }
});
var r = n(704496),
    i = n(192379);
function a(e) {
    let t = (0, r.d)(e),
        [n, a] = (0, i.useState)(null),
        [s, o] = (0, i.useState)([]),
        l = () => {
            o([]), t.close();
        };
    return {
        focusStrategy: n,
        ...t,
        open(e = null) {
            a(e), t.open();
        },
        toggle(e = null) {
            a(e), t.toggle();
        },
        close() {
            l();
        },
        expandedKeysStack: s,
        openSubmenu: (e, t) => {
            o((n) => (t > n.length ? n : [...n.slice(0, t), e]));
        },
        closeSubmenu: (e, t) => {
            o((n) => (n[t] === e ? n.slice(0, t) : n));
        }
    };
}
