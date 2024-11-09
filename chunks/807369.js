n.d(t, {
    a: function () {
        return o;
    }
}),
    n(47120);
var i = n(192379),
    a = n(363577);
let o = function (e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0,
        s = (0, a.M)(e, t, n),
        [r, l] = i.useState(void 0);
    return (
        i.useEffect(() => {
            '' === e || e === o ? l(void 0) : null != s && l(s);
        }, [s, e, o]),
        r
    );
};
