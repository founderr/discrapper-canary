l.d(n, {
    F: function () {
        return s;
    },
    c: function () {
        return i;
    }
}),
    l(411104);
var t = l(735250),
    r = l(470079);
let a = r.createContext(null);
function i() {
    let e = r.useContext(a);
    if (null == e) throw Error('Could not find context for useMessageAccessoriesComponentContext.');
    return e;
}
function s(e) {
    let { children: n, ...l } = e;
    return (0, t.jsx)(a.Provider, {
        value: l,
        children: n
    });
}
