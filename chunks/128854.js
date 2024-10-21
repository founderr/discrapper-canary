t.d(n, {
    F: function () {
        return o;
    },
    c: function () {
        return r;
    }
}),
    t(411104);
var l = t(200651),
    i = t(192379);
let a = i.createContext(null);
function r() {
    let e = i.useContext(a);
    if (null == e) throw Error('Could not find context for useMessageAccessoriesComponentContext.');
    return e;
}
function o(e) {
    let { children: n, ...t } = e;
    return (0, l.jsx)(a.Provider, {
        value: t,
        children: n
    });
}
