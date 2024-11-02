t.d(n, {
    F: function () {
        return o;
    },
    c: function () {
        return a;
    }
}),
    t(411104);
var l = t(200651),
    i = t(192379);
let r = i.createContext(null);
function a() {
    let e = i.useContext(r);
    if (null == e) throw Error('Could not find context for useMessageAccessoriesComponentContext.');
    return e;
}
function o(e) {
    let { children: n, ...t } = e;
    return (0, l.jsx)(r.Provider, {
        value: t,
        children: n
    });
}
