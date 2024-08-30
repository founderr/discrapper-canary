l.d(n, {
    F: function () {
        return s;
    },
    c: function () {
        return a;
    }
}),
    l(411104);
var t = l(735250),
    r = l(470079);
let i = r.createContext(null);
function a() {
    let e = r.useContext(i);
    if (null == e) throw Error('Could not find context for useMessageAccessoriesComponentContext.');
    return e;
}
function s(e) {
    let { children: n, ...l } = e;
    return (0, t.jsx)(i.Provider, {
        value: l,
        children: n
    });
}
