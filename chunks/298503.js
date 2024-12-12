r.d(n, {
    C8: function () {
        return a;
    },
    dK: function () {
        return o;
    },
    mq: function () {
        return s;
    }
});
var i = r(192379),
    a = i.createContext(),
    s = i.createContext();
function o(e) {
    var n = e.children,
        r = i.useState(null),
        o = r[0],
        l = r[1],
        u = i.useRef(!1);
    i.useEffect(function () {
        return function () {
            u.current = !0;
        };
    }, []);
    var c = i.useCallback(function (e) {
        !u.current && l(e);
    }, []);
    return i.createElement(a.Provider, { value: o }, i.createElement(s.Provider, { value: c }, n));
}
