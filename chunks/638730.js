n.d(t, {
    T: function () {
        return l;
    },
    h: function () {
        return r;
    }
}),
    n(47120);
var i = n(192379),
    s = n(392711);
let a = (e) => e,
    l = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
            s = arguments.length > 3 ? arguments[3] : void 0,
            l = r(a, t, n, s),
            o = i.useRef(e);
        return (
            i.useEffect(() => {
                let t = l(e);
                o.current = t;
            }, [e, l]),
            0 === t ? e : o.current
        );
    },
    r = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
            a = arguments.length > 3 ? arguments[3] : void 0,
            l = i.useRef((0, s.throttle)(e, t, a));
        return (
            i.useEffect(
                () => (
                    (l.current = (0, s.throttle)(e, t, a)),
                    () => {
                        var e;
                        null === (e = l.current) || void 0 === e || e.cancel();
                    }
                ),
                [e, t, a, ...n]
            ),
            l.current
        );
    };
