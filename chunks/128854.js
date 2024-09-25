n.d(t, {
    F: function () {
        return l;
    },
    c: function () {
        return s;
    }
});
var r = n(411104);
var i = n(735250),
    a = n(470079);
let o = a.createContext(null);
function s() {
    let e = a.useContext(o);
    if (null == e) throw Error('Could not find context for useMessageAccessoriesComponentContext.');
    return e;
}
function l(e) {
    let { children: t, ...n } = e;
    return (0, i.jsx)(o.Provider, {
        value: n,
        children: t
    });
}
