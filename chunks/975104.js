n.d(t, {
    Z: function () {
        return o;
    }
});
var r = n(411104);
var i = n(735250),
    a = n(470079);
function o() {
    let e = a.createContext(void 0);
    function t() {
        let t = a.useContext(e);
        if (null == t) throw Error('Context was used outside of defined provider.');
        return t;
    }
    function n() {
        let n = t();
        return function t(t) {
            let { children: r } = t;
            return (0, i.jsx)(e.Provider, {
                value: n,
                children: r
            });
        };
    }
    return [e, t, n];
}
