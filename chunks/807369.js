n.d(t, {
    a: function () {
        return r;
    }
}),
    n(47120);
var i = n(192379),
    o = n(363577);
let r = function (e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0,
        a = (0, o.M)(e, t, n),
        [s, u] = i.useState(void 0);
    return (
        i.useEffect(() => {
            '' === e || e === r ? u(void 0) : null != a && u(a);
        }, [a, e, r]),
        s
    );
};
