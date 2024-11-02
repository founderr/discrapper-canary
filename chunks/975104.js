n.d(e, {
    Z: function () {
        return i;
    }
}),
    n(411104);
var r = n(200651),
    E = n(192379);
function i() {
    let t = E.createContext(void 0);
    function e() {
        let e = E.useContext(t);
        if (null == e) throw Error('Context was used outside of defined provider.');
        return e;
    }
    return [
        t,
        e,
        function () {
            let n = e();
            return function (e) {
                let { children: E } = e;
                return (0, r.jsx)(t.Provider, {
                    value: n,
                    children: E
                });
            };
        }
    ];
}
