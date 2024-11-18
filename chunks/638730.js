n.d(t, {
    T: function () {
        return a;
    },
    h: function () {
        return s;
    }
}),
    n(47120);
var i = n(192379),
    l = n(392711);
let r = (e) => e,
    a = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
            l = arguments.length > 3 ? arguments[3] : void 0,
            a = s(r, t, n, l),
            o = i.useRef(e);
        return (
            i.useEffect(() => {
                let t = a(e);
                o.current = t;
            }, [e, a]),
            0 === t ? e : o.current
        );
    },
    s = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
            r = arguments.length > 3 ? arguments[3] : void 0,
            a = i.useRef((0, l.throttle)(e, t, r));
        return (
            i.useEffect(
                () => (
                    (a.current = (0, l.throttle)(e, t, r)),
                    () => {
                        var e;
                        null === (e = a.current) || void 0 === e || e.cancel();
                    }
                ),
                [e, t, r, ...n]
            ),
            a.current
        );
    };
