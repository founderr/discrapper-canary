t.d(n, {
    F: function () {
        return o;
    },
    c: function () {
        return r;
    }
}),
    t(411104);
var l = t(735250),
    a = t(470079);
let i = a.createContext(null);
function r() {
    let e = a.useContext(i);
    if (null == e) throw Error('Could not find context for useMessageAccessoriesComponentContext.');
    return e;
}
function o(e) {
    let { children: n, ...t } = e;
    return (0, l.jsx)(i.Provider, {
        value: t,
        children: n
    });
}
