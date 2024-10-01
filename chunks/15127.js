n.d(t, {
    Gc: function () {
        return s;
    },
    ol: function () {
        return l;
    },
    q3: function () {
        return o;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(981631);
let o = i.createContext({
    titleId: void 0,
    errorId: void 0,
    error: void 0,
    isFocused: void 0,
    setIsFocused: a.dG4,
    hasValue: void 0,
    setHasValue: a.dG4
});
function s() {
    return i.useContext(o);
}
function l(e) {
    let { children: t, ...n } = e;
    return (0, r.jsx)(o.Provider, {
        value: n,
        children: t
    });
}
