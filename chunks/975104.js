n.d(t, {
    Z: function () {
        return u;
    }
}),
    n(411104);
var E = n(735250),
    r = n(470079);
function u() {
    let e = r.createContext(void 0);
    function t() {
        let t = r.useContext(e);
        if (null == t) throw Error('Context was used outside of defined provider.');
        return t;
    }
    return [
        e,
        t,
        function () {
            let n = t();
            return function (t) {
                let { children: r } = t;
                return (0, E.jsx)(e.Provider, {
                    value: n,
                    children: r
                });
            };
        }
    ];
}
