r.d(n, {
    W: function () {
        return s;
    }
});
var i = r(781988),
    a = r(192379);
function s(e) {
    let n = (0, i.d)(e),
        [r, s] = (0, a.useState)(null),
        [o, l] = (0, a.useState)([]),
        u = () => {
            l([]), n.close();
        },
        c = (e, n) => {
            l((r) => (n > r.length ? r : [...r.slice(0, n), e]));
        },
        d = (e, n) => {
            l((r) => (r[n] === e ? r.slice(0, n) : r));
        };
    return {
        focusStrategy: r,
        ...n,
        open(e = null) {
            s(e), n.open();
        },
        toggle(e = null) {
            s(e), n.toggle();
        },
        close() {
            u();
        },
        UNSTABLE_expandedKeysStack: o,
        UNSTABLE_openSubmenu: c,
        UNSTABLE_closeSubmenu: d
    };
}
