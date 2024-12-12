r.d(n, {
    Gc: function () {
        return l;
    },
    ol: function () {
        return u;
    },
    q3: function () {
        return o;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(981631);
let o = a.createContext({
    titleId: void 0,
    errorId: void 0,
    error: void 0,
    isFocused: void 0,
    setIsFocused: s.dG4,
    hasValue: void 0,
    setHasValue: s.dG4
});
function l() {
    return a.useContext(o);
}
function u(e) {
    let { children: n, ...r } = e;
    return (0, i.jsx)(o.Provider, {
        value: r,
        children: n
    });
}
